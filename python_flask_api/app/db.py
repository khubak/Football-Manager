import mysql.connector
from mysql.connector import Error
from app import config
from flask import jsonify

Config = config.Config()

def get_db_connection():
    try:
        print(Config.MYSQL_HOST)
        connection = mysql.connector.connect(
            host=Config.MYSQL_HOST,
            port=Config.MYSQL_PORT,
            user=Config.MYSQL_USER,
            password=Config.MYSQL_PASSWORD,
            database=Config.MYSQL_DB
        )
        if connection.is_connected():
            return connection
    except Error as e:
        print(f"Error connecting to MySQL database: {e}")
        return None

def execute_stored_procedure(proc_name, params=None, result=False):
    conn = get_db_connection()
    if not conn:
        return jsonify({"error": "Database connection failed"}), 500

    cur = conn.cursor()
    results = []
    
    try:
        if params:
            cur.callproc(proc_name, params)
        else:
            cur.callproc(proc_name)
            
        if (result):        
            for result in cur.stored_results():
                results.append(result.fetchall())

        conn.commit()
        cur.close()
        
        if result == False:
            return True, None
        else:
            return True, None, results
    except Exception as e:
        return False, str(e)