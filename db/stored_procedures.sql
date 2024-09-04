-- General Insert Procedure
DROP PROCEDURE IF EXISTS general_insert;
DELIMITER //
CREATE PROCEDURE general_insert(IN table_name VARCHAR(255), IN field_names TEXT, IN field_values TEXT)
BEGIN
    SET @query = CONCAT('INSERT INTO ', table_name, ' (', field_names, ') VALUES (', field_values, ')');
    PREPARE stmt FROM @query;
    EXECUTE stmt;
    DEALLOCATE PREPARE stmt;
END //
DELIMITER ;

-- Create Team using General Insert
DROP PROCEDURE IF EXISTS create_team;
DELIMITER //
CREATE PROCEDURE create_team(IN team_name VARCHAR(255), IN stadium_name VARCHAR(255))
BEGIN
    CALL general_insert('teams', 'name, stadium', CONCAT('\'', team_name, '\', \'', stadium_name, '\''));
END //
DELIMITER ;

-- Add Player to Team using General Insert
DROP PROCEDURE IF EXISTS add_player_to_team;
DELIMITER //
CREATE PROCEDURE add_player_to_team(IN player_name VARCHAR(255), IN player_position VARCHAR(255), IN team_id INT)
BEGIN
    CALL general_insert('players', 'name, position, team_id', CONCAT('\'', player_name, '\', \'', player_position, '\', ', team_id));
END //
DELIMITER ;

-- Assign Coach to Team using General Insert
DROP PROCEDURE IF EXISTS assign_coach_to_team;
DELIMITER //
CREATE PROCEDURE assign_coach_to_team(IN coach_name VARCHAR(255), IN team_id INT)
BEGIN
    CALL general_insert('coaches', 'name, team_id', CONCAT('\'', coach_name, '\', ', team_id));
END //
DELIMITER ;

-- Get All Teams with Players and Coaches
DROP PROCEDURE IF EXISTS get_all_teams;
DELIMITER //
CREATE PROCEDURE get_all_teams()
BEGIN
    SELECT teams.id, teams.name, teams.stadium, GROUP_CONCAT(DISTINCT players.name) AS players, GROUP_CONCAT(DISTINCT coaches.name) AS coaches
    FROM teams
    LEFT JOIN players ON teams.id = players.team_id
    LEFT JOIN coaches ON teams.id = coaches.team_id
    GROUP BY teams.id;
END //
DELIMITER ;

-- Remove Player
DROP PROCEDURE IF EXISTS remove_player;
DELIMITER //
CREATE PROCEDURE remove_player(IN player_id INT)
BEGIN
    DELETE FROM players WHERE id = player_id;
END //
DELIMITER ;