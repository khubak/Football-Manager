from flask import request, jsonify
from app import app, mysql
from app import db

@app.route('/create_team', methods=['POST'])
def create_team():
    data = request.json
    success, error = db.execute_stored_procedure('create_team', [data.get('name'), data.get('stadium')])
    if success:
        return jsonify({"message": "Team created successfully"}), 201
    else:
        return jsonify({"error": error}), 500

@app.route('/add_player', methods=['POST'])
def add_player():
    data = request.json
    success, error = db.execute_stored_procedure('add_player_to_team', [data.get('name'), data.get('position'), data.get('team_id')])
    if success:
        return jsonify({"message": "Player added successfully"}), 201
    else:
        return jsonify({"error": error}), 500

@app.route('/assign_coach', methods=['POST'])
def assign_coach():
    data = request.json
    success, error = db.execute_stored_procedure('assign_coach_to_team', [data.get('name'), data.get('team_id')])
    if success:
        return jsonify({"message": "Coach assigned successfully"}), 201
    else:
        return jsonify({"error": error}), 500

@app.route('/get_teams', methods=['GET'])
def get_teams():
    success, error, result = db.execute_stored_procedure('get_all_teams', None, True)
    if success:
        return jsonify(result), 200
    else:
        return jsonify({"error": error}), 500

@app.route('/remove_player/<int:player_id>', methods=['DELETE'])
def remove_player(player_id):
    success, error = db.execute_stored_procedure('remove_player', [player_id])
    if success:
        return jsonify({"message": "Player removed successfully"}), 200
    else:
        return jsonify({"error": error}), 500