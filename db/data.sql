USE football_club;

-- Insert 11 Teams with Stadiums
CALL create_team('Dinamo Zagreb', 'Maksimir Stadium');
CALL create_team('Manchester United', 'Old Trafford');
CALL create_team('Real Madrid', 'Santiago Bernabéu');
CALL create_team('Barcelona', 'Camp Nou');
CALL create_team('Liverpool', 'Anfield');
CALL create_team('Paris Saint-Germain', 'Parc des Princes');
CALL create_team('Juventus', 'Allianz Stadium');
CALL create_team('Bayern Munich', 'Allianz Arena');
CALL create_team('Chelsea', 'Stamford Bridge');
CALL create_team('Arsenal', 'Emirates Stadium');
CALL create_team('Manchester City', 'Etihad Stadium');

-- Add 5 Players for Each Team
-- Dinamo Zagreb Players
CALL add_player_to_team('Mislav Oršić', 'Forward', 11);
CALL add_player_to_team('Dominik Livaković', 'Goalkeeper', 11);
CALL add_player_to_team('Bruno Petković', 'Forward', 11);
CALL add_player_to_team('Arijan Ademi', 'Midfielder', 11);
CALL add_player_to_team('Josip Mišić', 'Midfielder', 11);

-- Manchester United Players
CALL add_player_to_team('Bruno Fernandes', 'Midfielder', 1);
CALL add_player_to_team('Marcus Rashford', 'Forward', 1);
CALL add_player_to_team('Casemiro', 'Midfielder', 1);
CALL add_player_to_team('Raphaël Varane', 'Defender', 1);
CALL add_player_to_team('David de Gea', 'Goalkeeper', 1);

-- Real Madrid Players
CALL add_player_to_team('Karim Benzema', 'Forward', 2);
CALL add_player_to_team('Luka Modric', 'Midfielder', 2);
CALL add_player_to_team('Thibaut Courtois', 'Goalkeeper', 2);
CALL add_player_to_team('Toni Kroos', 'Midfielder', 2);
CALL add_player_to_team('Vinícius Júnior', 'Forward', 2);

-- Barcelona Players
CALL add_player_to_team('Lionel Messi', 'Forward', 3);
CALL add_player_to_team('Frenkie de Jong', 'Midfielder', 3);
CALL add_player_to_team('Gerard Piqué', 'Defender', 3);
CALL add_player_to_team('Pedri', 'Midfielder', 3);
CALL add_player_to_team('Marc-André ter Stegen', 'Goalkeeper', 3);

-- Liverpool Players
CALL add_player_to_team('Mohamed Salah', 'Forward', 4);
CALL add_player_to_team('Virgil van Dijk', 'Defender', 4);
CALL add_player_to_team('Trent Alexander-Arnold', 'Defender', 4);
CALL add_player_to_team('Alisson Becker', 'Goalkeeper', 4);
CALL add_player_to_team('Sadio Mané', 'Forward', 4);

-- Paris Saint-Germain Players
CALL add_player_to_team('Kylian Mbappé', 'Forward', 5);
CALL add_player_to_team('Neymar Jr.', 'Forward', 5);
CALL add_player_to_team('Sergio Ramos', 'Defender', 5);
CALL add_player_to_team('Marquinhos', 'Defender', 5);
CALL add_player_to_team('Gianluigi Donnarumma', 'Goalkeeper', 5);

-- Juventus Players
CALL add_player_to_team('Paulo Dybala', 'Forward', 6);
CALL add_player_to_team('Federico Chiesa', 'Forward', 6);
CALL add_player_to_team('Leonardo Bonucci', 'Defender', 6);
CALL add_player_to_team('Wojciech Szczęsny', 'Goalkeeper', 6);
CALL add_player_to_team('Manuel Locatelli', 'Midfielder', 6);

-- Bayern Munich Players
CALL add_player_to_team('Robert Lewandowski', 'Forward', 7);
CALL add_player_to_team('Manuel Neuer', 'Goalkeeper', 7);
CALL add_player_to_team('Joshua Kimmich', 'Midfielder', 7);
CALL add_player_to_team('Thomas Müller', 'Forward', 7);
CALL add_player_to_team('Alphonso Davies', 'Defender', 7);

-- Chelsea Players
CALL add_player_to_team('Mason Mount', 'Midfielder', 8);
CALL add_player_to_team('N\'Golo Kanté', 'Midfielder', 8);
CALL add_player_to_team('Kai Havertz', 'Forward', 8);
CALL add_player_to_team('Thiago Silva', 'Defender', 8);
CALL add_player_to_team('Édouard Mendy', 'Goalkeeper', 8);

-- Arsenal Players
CALL add_player_to_team('Bukayo Saka', 'Forward', 9);
CALL add_player_to_team('Gabriel Jesus', 'Forward', 9);
CALL add_player_to_team('Martin Ødegaard', 'Midfielder', 9);
CALL add_player_to_team('Aaron Ramsdale', 'Goalkeeper', 9);
CALL add_player_to_team('Ben White', 'Defender', 9);

-- Manchester City Players
CALL add_player_to_team('Kevin De Bruyne', 'Midfielder', 10);
CALL add_player_to_team('Erling Haaland', 'Forward', 10);
CALL add_player_to_team('Phil Foden', 'Midfielder', 10);
CALL add_player_to_team('Rúben Dias', 'Defender', 10);
CALL add_player_to_team('Ederson Moraes', 'Goalkeeper', 10);



-- Assign Coaches

-- Manchester United (2 Coaches)
CALL assign_coach_to_team('Erik ten Hag', 1);
CALL assign_coach_to_team('Mike Phelan', 1);

-- Real Madrid (2 Coaches)
CALL assign_coach_to_team('Carlo Ancelotti', 2);
CALL assign_coach_to_team('Davide Ancelotti', 2);

-- Barcelona (1 Coach)
CALL assign_coach_to_team('Xavi Hernandez', 3);

-- Liverpool (2 Coaches)
CALL assign_coach_to_team('Jürgen Klopp', 4);
CALL assign_coach_to_team('Pepijn Lijnders', 4);

-- Paris Saint-Germain (3 Coaches)
CALL assign_coach_to_team('Luis Enrique', 5);
CALL assign_coach_to_team('Thiago Motta', 5);
CALL assign_coach_to_team('Zoumana Camara', 5);

-- Juventus (2 Coaches)
CALL assign_coach_to_team('Massimiliano Allegri', 6);
CALL assign_coach_to_team('Marco Landucci', 6);

-- Bayern Munich (1 Coach)
CALL assign_coach_to_team('Julian Nagelsmann', 7);

-- Chelsea (1 Coach)
CALL assign_coach_to_team('Mauricio Pochettino', 8);

-- Arsenal (3 Coaches)
CALL assign_coach_to_team('Mikel Arteta', 9);
CALL assign_coach_to_team('Steve Round', 9);
CALL assign_coach_to_team('Albert Stuivenberg', 9);

-- Manchester City (2 Coaches)
CALL assign_coach_to_team('Pep Guardiola', 10);
CALL assign_coach_to_team('Rodolfo Borrell', 10);

-- Dinamo Zagreb (1 Coach)
CALL assign_coach_to_team('Igor Bišćan', 11);
