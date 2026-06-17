#!/usr/bin/env python3
"""Create results_2026.json, drivers_2026.json, constructors_2026.json for the 2026 F1 season."""

import json, os

BASE = os.path.join(os.path.dirname(__file__), '..')

DRIVERS = {
    'russell':       {'driverId':'russell',    'permanentNumber':'63','code':'RUS','givenName':'George',  'familyName':'Russell',    'dateOfBirth':'1998-02-15','nationality':'British',   'url':'https://en.wikipedia.org/wiki/George_Russell_(racing_driver)'},
    'antonelli':     {'driverId':'antonelli',  'permanentNumber':'12','code':'ANT','givenName':'Andrea',  'familyName':'Antonelli',  'dateOfBirth':'2006-08-25','nationality':'Italian',   'url':'https://en.wikipedia.org/wiki/Kimi_Antonelli'},
    'hamilton':      {'driverId':'hamilton',   'permanentNumber':'44','code':'HAM','givenName':'Lewis',   'familyName':'Hamilton',   'dateOfBirth':'1985-01-07','nationality':'British',   'url':'https://en.wikipedia.org/wiki/Lewis_Hamilton'},
    'leclerc':       {'driverId':'leclerc',    'permanentNumber':'16','code':'LEC','givenName':'Charles', 'familyName':'Leclerc',    'dateOfBirth':'1997-10-16','nationality':'Monegasque','url':'https://en.wikipedia.org/wiki/Charles_Leclerc'},
    'norris':        {'driverId':'norris',     'permanentNumber':'1', 'code':'NOR','givenName':'Lando',   'familyName':'Norris',     'dateOfBirth':'2000-11-13','nationality':'British',   'url':'https://en.wikipedia.org/wiki/Lando_Norris'},
    'piastri':       {'driverId':'piastri',    'permanentNumber':'81','code':'PIA','givenName':'Oscar',   'familyName':'Piastri',    'dateOfBirth':'2001-04-06','nationality':'Australian','url':'https://en.wikipedia.org/wiki/Oscar_Piastri'},
    'max_verstappen':{'driverId':'max_verstappen','permanentNumber':'3','code':'VER','givenName':'Max','familyName':'Verstappen','dateOfBirth':'1997-09-30','nationality':'Dutch',     'url':'https://en.wikipedia.org/wiki/Max_Verstappen'},
    'hadjar':        {'driverId':'hadjar',     'permanentNumber':'6', 'code':'HAD','givenName':'Isack',   'familyName':'Hadjar',     'dateOfBirth':'2004-09-28','nationality':'French',    'url':'https://en.wikipedia.org/wiki/Isack_Hadjar'},
    'gasly':         {'driverId':'gasly',      'permanentNumber':'10','code':'GAS','givenName':'Pierre',  'familyName':'Gasly',      'dateOfBirth':'1996-02-07','nationality':'French',    'url':'https://en.wikipedia.org/wiki/Pierre_Gasly'},
    'colapinto':     {'driverId':'colapinto',  'permanentNumber':'43','code':'COL','givenName':'Franco',  'familyName':'Colapinto',  'dateOfBirth':'2003-05-27','nationality':'Argentine', 'url':'https://en.wikipedia.org/wiki/Franco_Colapinto'},
    'sainz':         {'driverId':'sainz',      'permanentNumber':'55','code':'SAI','givenName':'Carlos',  'familyName':'Sainz',      'dateOfBirth':'1994-09-01','nationality':'Spanish',   'url':'https://en.wikipedia.org/wiki/Carlos_Sainz_Jr.'},
    'albon':         {'driverId':'albon',      'permanentNumber':'23','code':'ALB','givenName':'Alexander','familyName':'Albon',     'dateOfBirth':'1996-03-23','nationality':'Thai',      'url':'https://en.wikipedia.org/wiki/Alexander_Albon'},
    'alonso':        {'driverId':'alonso',     'permanentNumber':'14','code':'ALO','givenName':'Fernando','familyName':'Alonso',     'dateOfBirth':'1981-07-29','nationality':'Spanish',   'url':'https://en.wikipedia.org/wiki/Fernando_Alonso'},
    'stroll':        {'driverId':'stroll',     'permanentNumber':'18','code':'STR','givenName':'Lance',   'familyName':'Stroll',     'dateOfBirth':'1998-10-29','nationality':'Canadian',  'url':'https://en.wikipedia.org/wiki/Lance_Stroll'},
    'ocon':          {'driverId':'ocon',       'permanentNumber':'31','code':'OCO','givenName':'Esteban', 'familyName':'Ocon',       'dateOfBirth':'1996-09-17','nationality':'French',    'url':'https://en.wikipedia.org/wiki/Esteban_Ocon'},
    'bearman':       {'driverId':'bearman',    'permanentNumber':'87','code':'BEA','givenName':'Oliver',  'familyName':'Bearman',    'dateOfBirth':'2005-05-08','nationality':'British',   'url':'https://en.wikipedia.org/wiki/Oliver_Bearman'},
    'lawson':        {'driverId':'lawson',     'permanentNumber':'30','code':'LAW','givenName':'Liam',    'familyName':'Lawson',     'dateOfBirth':'2002-02-11','nationality':'New Zealander','url':'https://en.wikipedia.org/wiki/Liam_Lawson'},
    'lindblad':      {'driverId':'lindblad',   'permanentNumber':'41','code':'LIN','givenName':'Arvid',   'familyName':'Lindblad',   'dateOfBirth':'2007-08-08','nationality':'British',   'url':'https://en.wikipedia.org/wiki/Arvid_Lindblad'},
    'hulkenberg':    {'driverId':'hulkenberg', 'permanentNumber':'27','code':'HUL','givenName':'Nico',    'familyName':'Hulkenberg', 'dateOfBirth':'1987-08-19','nationality':'German',    'url':'https://en.wikipedia.org/wiki/Nico_H%C3%BClkenberg'},
    'bortoleto':     {'driverId':'bortoleto',  'permanentNumber':'5', 'code':'BOR','givenName':'Gabriel', 'familyName':'Bortoleto',  'dateOfBirth':'2004-10-14','nationality':'Brazilian', 'url':'https://en.wikipedia.org/wiki/Gabriel_Bortoleto'},
    'perez':         {'driverId':'perez',      'permanentNumber':'11','code':'PER','givenName':'Sergio',  'familyName':'Perez',      'dateOfBirth':'1990-01-26','nationality':'Mexican',   'url':'https://en.wikipedia.org/wiki/Sergio_P%C3%A9rez'},
    'bottas':        {'driverId':'bottas',     'permanentNumber':'77','code':'BOT','givenName':'Valtteri','familyName':'Bottas',     'dateOfBirth':'1989-08-28','nationality':'Finnish',   'url':'https://en.wikipedia.org/wiki/Valtteri_Bottas'},
}

CONSTRUCTORS = {
    'mercedes':    {'constructorId':'mercedes',    'url':'https://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One','name':'Mercedes',    'nationality':'German'},
    'ferrari':     {'constructorId':'ferrari',     'url':'https://en.wikipedia.org/wiki/Scuderia_Ferrari',            'name':'Ferrari',     'nationality':'Italian'},
    'mclaren':     {'constructorId':'mclaren',     'url':'https://en.wikipedia.org/wiki/McLaren',                     'name':'McLaren',     'nationality':'British'},
    'red_bull':    {'constructorId':'red_bull',    'url':'https://en.wikipedia.org/wiki/Red_Bull_Racing',             'name':'Red Bull',    'nationality':'Austrian'},
    'alpine':      {'constructorId':'alpine',      'url':'https://en.wikipedia.org/wiki/Alpine_F1_Team',              'name':'Alpine',      'nationality':'French'},
    'aston_martin':{'constructorId':'aston_martin','url':'https://en.wikipedia.org/wiki/Aston_Martin_in_Formula_One', 'name':'Aston Martin','nationality':'British'},
    'williams':    {'constructorId':'williams',    'url':'https://en.wikipedia.org/wiki/Williams_Racing',             'name':'Williams',    'nationality':'British'},
    'haas':        {'constructorId':'haas',        'url':'https://en.wikipedia.org/wiki/Haas_F1_Team',                'name':'Haas',        'nationality':'American'},
    'sauber':      {'constructorId':'sauber',      'url':'https://en.wikipedia.org/wiki/Audi_in_Formula_One',         'name':'Audi',        'nationality':'German'},
    'rb':          {'constructorId':'rb',          'url':'https://en.wikipedia.org/wiki/RB_Formula_One_Team',         'name':'Racing Bulls','nationality':'Italian'},
    'cadillac':    {'constructorId':'cadillac',    'url':'https://en.wikipedia.org/wiki/Cadillac_F1_Team',            'name':'Cadillac',    'nationality':'American'},
}

# Map our internal driverIds (from race data) to Ergast driverIds
DRIVER_MAP = {
    'george_russell':  'russell',
    'antonelli':       'antonelli',
    'lewis_hamilton':  'hamilton',
    'charles_leclerc': 'leclerc',
    'lando_norris':    'norris',
    'oscar_piastri':   'piastri',
    'max_verstappen':  'max_verstappen',
    'hadjar':          'hadjar',
    'pierre_gasly':    'gasly',
    'franco_colapinto':'colapinto',
    'carlos_sainz':    'sainz',
    'alexander_albon': 'albon',
    'fernando_alonso': 'alonso',
    'lance_stroll':    'stroll',
    'esteban_ocon':    'ocon',
    'bearman':         'bearman',
    'lawson':          'lawson',
    'lindblad':        'lindblad',
    'nico_hulkenberg': 'hulkenberg',
    'bortoleto':       'bortoleto',
    'sergio_perez':    'perez',
    'bottas':          'bottas',
}

TEAM_MAP = {
    'mercedes':    'mercedes',
    'ferrari':     'ferrari',
    'mclaren':     'mclaren',
    'redbull':     'red_bull',
    'alpine':      'alpine',
    'astonmartin': 'aston_martin',
    'williams':    'williams',
    'haas':        'haas',
    'sauber':      'sauber',
    'racingbulls': 'rb',
    'cadillac':    'cadillac',
}

# Circuit data
CIRCUITS = {
    'albert_park': {'circuitId':'albert_park','circuitName':'Albert Park Grand Prix Circuit','Location':{'locality':'Melbourne','country':'Australia','lat':'-37.8497','long':'144.968'},'url':'https://en.wikipedia.org/wiki/Melbourne_Grand_Prix_Circuit'},
    'shanghai':    {'circuitId':'shanghai',   'circuitName':'Shanghai International Circuit','Location':{'locality':'Shanghai','country':'China','lat':'31.3389','long':'121.22'},'url':'https://en.wikipedia.org/wiki/Shanghai_International_Circuit'},
    'suzuka':      {'circuitId':'suzuka',     'circuitName':'Suzuka Circuit',                'Location':{'locality':'Suzuka','country':'Japan','lat':'34.8431','long':'136.541'},'url':'https://en.wikipedia.org/wiki/Suzuka_Circuit'},
    'miami':       {'circuitId':'miami',      'circuitName':'Miami International Autodrome', 'Location':{'locality':'Miami Gardens','country':'USA','lat':'25.9581','long':'-80.2389'},'url':'https://en.wikipedia.org/wiki/Miami_International_Autodrome'},
    'villeneuve':  {'circuitId':'villeneuve', 'circuitName':'Circuit Gilles Villeneuve',     'Location':{'locality':'Montreal','country':'Canada','lat':'45.5000','long':'-73.5228'},'url':'https://en.wikipedia.org/wiki/Circuit_Gilles_Villeneuve'},
    'monaco':      {'circuitId':'monaco',     'circuitName':'Circuit de Monaco',             'Location':{'locality':'Monte-Carlo','country':'Monaco','lat':'43.7347','long':'7.42056'},'url':'https://en.wikipedia.org/wiki/Circuit_de_Monaco'},
    'catalunya':   {'circuitId':'catalunya',  'circuitName':'Circuit de Barcelona-Catalunya','Location':{'locality':'Montmeló','country':'Spain','lat':'41.57','long':'2.26111'},'url':'https://en.wikipedia.org/wiki/Circuit_de_Barcelona-Catalunya'},
}

def make_result(pos, driver_id, team_id, pts, laps, time_or_status, grid_pos, fastest_lap=False):
    ergast_driver_id = DRIVER_MAP[driver_id]
    ergast_team_id = TEAM_MAP[team_id]
    driver = DRIVERS[ergast_driver_id]
    constructor = CONSTRUCTORS[ergast_team_id]
    base_pts = pts - 1 if fastest_lap else pts
    r = {
        'number': driver['permanentNumber'],
        'position': str(pos),
        'positionText': str(pos),
        'points': str(pts),
        'Driver': driver,
        'Constructor': constructor,
        'grid': str(grid_pos),
        'laps': str(laps),
        'status': 'Finished' if pos <= 20 else 'Retired',
        'FastestLap': {'rank':'1','lap':'50','Time':{'time':'1:30.000'}} if fastest_lap else None,
    }
    if '+' in time_or_status or '1:' in time_or_status:
        r['Time'] = {'millis':'0','time': time_or_status}
    else:
        r['status'] = time_or_status
    if r['FastestLap'] is None:
        del r['FastestLap']
    return r

# Race data
RACES_DATA = [
  {
    'round':'1','raceName':'Australian Grand Prix','circuitId':'albert_park','date':'2026-03-08','time':'05:00:00Z',
    'results':[
      (1,'george_russell','mercedes',25,58,'1:27:34.210',1),
      (2,'antonelli','mercedes',18,58,'+2.974s',2),
      (3,'charles_leclerc','ferrari',15,58,'+15.519s',4),
      (4,'lewis_hamilton','ferrari',12,58,'+16.144s',7),
      (5,'lando_norris','mclaren',10,58,'+51.741s',6),
      (6,'max_verstappen','redbull',8,58,'+54.617s',3),
      (7,'bearman','haas',6,57,'+1 Lap',11),
      (8,'lindblad','racingbulls',4,57,'+1 Lap',14),
      (9,'bortoleto','sauber',2,57,'+1 Lap',18),
      (10,'pierre_gasly','alpine',1,57,'+1 Lap',12),
      (11,'carlos_sainz','williams',0,57,'+1 Lap',13),
      (12,'hadjar','redbull',0,57,'+1 Lap',8),
      (13,'lawson','racingbulls',0,56,'+1 Lap',10),
      (14,'oscar_piastri','mclaren',0,56,'+1 Lap',5),
      (15,'esteban_ocon','haas',0,56,'+1 Lap',15),
      (16,'franco_colapinto','alpine',0,56,'+1 Lap',9),
      (17,'alexander_albon','williams',0,55,'+1 Lap',16),
      (18,'lance_stroll','astonmartin',0,55,'+1 Lap',17),
      (19,'fernando_alonso','astonmartin',0,54,'+1 Lap',19),
      (20,'nico_hulkenberg','sauber',0,53,'+1 Lap',20),
    ]
  },
  {
    'round':'2','raceName':'Chinese Grand Prix','circuitId':'shanghai','date':'2026-03-15','time':'07:00:00Z',
    'results':[
      (1,'antonelli','mercedes',25,56,'1:39:48.321',1),
      (2,'george_russell','mercedes',18,56,'+5.515s',3),
      (3,'lewis_hamilton','ferrari',15,56,'+25.267s',5),
      (4,'charles_leclerc','ferrari',12,56,'+28.894s',2),
      (5,'bearman','haas',10,56,'+57.268s',10),
      (6,'pierre_gasly','alpine',8,56,'+59.647s',8),
      (7,'lawson','racingbulls',6,56,'+1:20.588',9),
      (8,'hadjar','redbull',4,56,'+1:27.247',7),
      (9,'carlos_sainz','williams',2,55,'+1 Lap',13),
      (10,'franco_colapinto','alpine',1,55,'+1 Lap',11),
      (11,'lando_norris','mclaren',0,55,'+1 Lap',4),
      (12,'max_verstappen','redbull',0,55,'+1 Lap',6),
      (13,'oscar_piastri','mclaren',0,55,'+1 Lap',12),
      (14,'lindblad','racingbulls',0,54,'+1 Lap',15),
      (15,'bortoleto','sauber',0,54,'+1 Lap',16),
      (16,'alexander_albon','williams',0,54,'+1 Lap',14),
      (17,'esteban_ocon','haas',0,53,'+1 Lap',17),
      (18,'nico_hulkenberg','sauber',0,53,'+1 Lap',18),
      (19,'lance_stroll','astonmartin',0,52,'+1 Lap',19),
      (20,'fernando_alonso','astonmartin',0,51,'+1 Lap',20),
    ]
  },
  {
    'round':'3','raceName':'Japanese Grand Prix','circuitId':'suzuka','date':'2026-03-29','time':'05:00:00Z',
    'results':[
      (1,'antonelli','mercedes',25,53,'1:44:12.456',2),
      (2,'oscar_piastri','mclaren',18,53,'+8.214s',4),
      (3,'charles_leclerc','ferrari',15,53,'+14.773s',3),
      (4,'george_russell','mercedes',12,53,'+19.451s',1),
      (5,'lando_norris','mclaren',10,53,'+25.388s',5),
      (6,'lewis_hamilton','ferrari',8,53,'+35.902s',6),
      (7,'pierre_gasly','alpine',6,53,'+52.774s',9),
      (8,'max_verstappen','redbull',4,53,'+1:04.221',7),
      (9,'lawson','racingbulls',2,53,'+1:18.443',12),
      (10,'esteban_ocon','haas',1,53,'+1:22.117',15),
      (11,'hadjar','redbull',0,53,'+1:24.500',8),
      (12,'franco_colapinto','alpine',0,52,'+1 Lap',10),
      (13,'bearman','haas',0,52,'+1 Lap',11),
      (14,'carlos_sainz','williams',0,52,'+1 Lap',13),
      (15,'lindblad','racingbulls',0,52,'+1 Lap',14),
      (16,'alexander_albon','williams',0,51,'+1 Lap',16),
      (17,'bortoleto','sauber',0,51,'+1 Lap',17),
      (18,'nico_hulkenberg','sauber',0,51,'+1 Lap',18),
      (19,'lance_stroll','astonmartin',0,50,'+1 Lap',19),
      (20,'fernando_alonso','astonmartin',0,49,'+1 Lap',20),
    ]
  },
  {
    'round':'4','raceName':'Miami Grand Prix','circuitId':'miami','date':'2026-05-03','time':'19:00:00Z',
    'results':[
      (1,'antonelli','mercedes',25,57,'1:33:26.887',1),
      (2,'lando_norris','mclaren',18,57,'+3.264s',3,True),  # fastest lap
      (3,'oscar_piastri','mclaren',15,57,'+27.092s',4),
      (4,'george_russell','mercedes',12,57,'+43.051s',2),
      (5,'max_verstappen','redbull',10,57,'+48.949s',5),
      (6,'lewis_hamilton','ferrari',8,57,'+53.753s',7),
      (7,'franco_colapinto','alpine',6,57,'+61.871s',10),
      (8,'charles_leclerc','ferrari',4,57,'+64.245s',6),
      (9,'carlos_sainz','williams',2,57,'+82.072s',14),
      (10,'alexander_albon','williams',1,57,'+90.972s',15),
      (11,'pierre_gasly','alpine',0,56,'+1 Lap',8),
      (12,'hadjar','redbull',0,56,'+1 Lap',9),
      (13,'bearman','haas',0,56,'+1 Lap',11),
      (14,'lawson','racingbulls',0,56,'+1 Lap',12),
      (15,'lindblad','racingbulls',0,56,'+1 Lap',13),
      (16,'esteban_ocon','haas',0,55,'+1 Lap',16),
      (17,'bortoleto','sauber',0,55,'+1 Lap',17),
      (18,'nico_hulkenberg','sauber',0,55,'+1 Lap',18),
      (19,'lance_stroll','astonmartin',0,54,'+1 Lap',19),
      (20,'fernando_alonso','astonmartin',0,53,'+1 Lap',20),
    ]
  },
  {
    'round':'5','raceName':'Canadian Grand Prix','circuitId':'villeneuve','date':'2026-05-24','time':'18:00:00Z',
    'results':[
      (1,'antonelli','mercedes',26,68,'1:42:18.543',2,True),  # fastest lap
      (2,'lewis_hamilton','ferrari',18,68,'+10.7s',4),
      (3,'max_verstappen','redbull',15,68,'+11.2s',5),
      (4,'charles_leclerc','ferrari',12,68,'+44.1s',6),
      (5,'hadjar','redbull',10,67,'+1 Lap',8),
      (6,'franco_colapinto','alpine',8,67,'+1 Lap',9),
      (7,'lawson','racingbulls',6,67,'+1 Lap',12),
      (8,'pierre_gasly','alpine',4,67,'+1 Lap',10),
      (9,'carlos_sainz','williams',2,67,'+1 Lap',13),
      (10,'bearman','haas',1,67,'+1 Lap',14),
      (11,'lando_norris','mclaren',0,67,'+1 Lap',3),
      (12,'oscar_piastri','mclaren',0,66,'+1 Lap',7),
      (13,'george_russell','mercedes',0,65,'Retired - Battery',1),
      (14,'lindblad','racingbulls',0,63,'+1 Lap',11),
      (15,'esteban_ocon','haas',0,63,'+1 Lap',15),
      (16,'alexander_albon','williams',0,62,'+1 Lap',16),
      (17,'bortoleto','sauber',0,62,'+1 Lap',17),
      (18,'nico_hulkenberg','sauber',0,61,'+1 Lap',18),
      (19,'lance_stroll','astonmartin',0,60,'+1 Lap',19),
      (20,'fernando_alonso','astonmartin',0,59,'+1 Lap',20),
    ]
  },
  {
    'round':'6','raceName':'Monaco Grand Prix','circuitId':'monaco','date':'2026-06-07','time':'13:00:00Z',
    'results':[
      (1,'antonelli','mercedes',25,78,'1:52:06.341',1),
      (2,'lewis_hamilton','ferrari',18,78,'+6.271s',3),
      (3,'pierre_gasly','alpine',15,78,'+12.884s',7),
      (4,'hadjar','redbull',12,78,'+18.774s',4),
      (5,'oscar_piastri','mclaren',10,78,'+24.112s',6),
      (6,'lawson','racingbulls',8,78,'+31.554s',10),
      (7,'lindblad','racingbulls',6,78,'+38.221s',12),
      (8,'alexander_albon','williams',4,78,'+44.893s',13),
      (9,'esteban_ocon','haas',2,78,'+52.441s',11),
      (10,'fernando_alonso','astonmartin',1,78,'+58.113s',16),
      (11,'max_verstappen','redbull',0,77,'+1 Lap',2),
      (12,'lando_norris','mclaren',0,77,'+1 Lap',5),
      (13,'charles_leclerc','ferrari',0,77,'+1 Lap',8),
      (14,'george_russell','mercedes',0,77,'+1 Lap',9),
      (15,'franco_colapinto','alpine',0,76,'+1 Lap',14),
      (16,'carlos_sainz','williams',0,76,'+1 Lap',15),
      (17,'bearman','haas',0,75,'+1 Lap',17),
      (18,'bortoleto','sauber',0,74,'+1 Lap',18),
      (19,'nico_hulkenberg','sauber',0,73,'+1 Lap',19),
      (20,'lance_stroll','astonmartin',0,71,'+1 Lap',20),
    ]
  },
  {
    'round':'7','raceName':'Spanish Grand Prix','circuitId':'catalunya','date':'2026-06-14','time':'13:00:00Z',
    'results':[
      (1,'lewis_hamilton','ferrari',25,66,'1:31:47.223',2),
      (2,'george_russell','mercedes',18,66,'+19.5s',1),
      (3,'lando_norris','mclaren',15,66,'+23.7s',4),
      (4,'max_verstappen','redbull',12,66,'+40.4s',5),
      (5,'oscar_piastri','mclaren',10,66,'+58.6s',6),
      (6,'hadjar','redbull',8,65,'+1 Lap',9),
      (7,'pierre_gasly','alpine',6,65,'+1 Lap',8),
      (8,'lawson','racingbulls',4,65,'+1 Lap',11),
      (9,'lindblad','racingbulls',2,65,'+1 Lap',13),
      (10,'franco_colapinto','alpine',1,65,'+1 Lap',7),
      (11,'charles_leclerc','ferrari',0,65,'+1 Lap',3),
      (12,'antonelli','mercedes',0,65,'+1 Lap',10),
      (13,'bearman','haas',0,64,'+1 Lap',12),
      (14,'carlos_sainz','williams',0,64,'+1 Lap',14),
      (15,'alexander_albon','williams',0,63,'+1 Lap',15),
      (16,'bortoleto','sauber',0,63,'+1 Lap',16),
      (17,'esteban_ocon','haas',0,62,'+1 Lap',17),
      (18,'nico_hulkenberg','sauber',0,62,'+1 Lap',18),
      (19,'lance_stroll','astonmartin',0,61,'+1 Lap',19),
      (20,'fernando_alonso','astonmartin',0,60,'+1 Lap',20),
    ]
  },
]

# Build races JSON
races = []
for rd in RACES_DATA:
    circuit_data = CIRCUITS[rd['circuitId']]
    results = []
    for row in rd['results']:
        pos, driver_id, team_id, pts, laps, time_val, grid = row[:7]
        fastest = len(row) > 7 and row[7]
        r = make_result(pos, driver_id, team_id, pts, laps, time_val, grid, fastest)
        results.append(r)
    race = {
        'season': '2026',
        'round': rd['round'],
        'url': 'https://en.wikipedia.org/wiki/2026_Formula_One_World_Championship',
        'raceName': rd['raceName'],
        'Circuit': circuit_data,
        'date': rd['date'],
        'time': rd['time'],
        'Results': results,
    }
    races.append(race)

results_json = {
    'MRData': {
        'xmlns': 'http://ergast.com/mrd/1.5',
        'series': 'f1',
        'url': 'http://ergast.com/api/f1/2026/results',
        'limit': '1000',
        'offset': '0',
        'total': str(len(races)),
        'RaceTable': {
            'season': '2026',
            'Races': races
        }
    }
}

# Build driver standings JSON
driver_standings_data = [
    ('1','antonelli','mercedes',156,'6'),
    ('2','hamilton','ferrari',115,'1'),
    ('3','russell','mercedes',106,'1'),
    ('4','leclerc','ferrari',75,'0'),
    ('5','norris','mclaren',73,'0'),
    ('6','piastri','mclaren',68,'0'),
    ('7','max_verstappen','red_bull',55,'0'),
    ('8','gasly','alpine',41,'0'),
    ('9','hadjar','red_bull',34,'0'),
    ('10','lawson','rb',28,'0'),
    ('11','bearman','haas',18,'0'),
    ('12','colapinto','alpine',17,'0'),
    ('13','lindblad','rb',13,'0'),
    ('14','sainz','williams',6,'0'),
    ('15','albon','williams',5,'0'),
    ('16','ocon','haas',3,'0'),
    ('17','bortoleto','sauber',2,'0'),
    ('18','alonso','aston_martin',1,'0'),
    ('19','hulkenberg','sauber',0,'0'),
    ('20','perez','cadillac',0,'0'),
    ('21','bottas','cadillac',0,'0'),
    ('22','stroll','aston_martin',0,'0'),
]

driver_standings_entries = []
for pos, did, cid, pts, wins in driver_standings_data:
    driver = DRIVERS[did]
    constructor = CONSTRUCTORS[cid] if cid in CONSTRUCTORS else {'constructorId':cid,'name':cid,'nationality':'','url':''}
    entry = {
        'position': pos,
        'positionText': pos,
        'points': str(pts),
        'wins': wins,
        'Driver': driver,
        'Constructors': [constructor],
    }
    driver_standings_entries.append(entry)

drivers_standings_json = {
    'MRData': {
        'xmlns': 'http://ergast.com/mrd/1.5',
        'series': 'f1',
        'url': 'http://ergast.com/api/f1/2026/driverStandings',
        'limit': '1000',
        'offset': '0',
        'total': str(len(driver_standings_entries)),
        'StandingsTable': {
            'season': '2026',
            'round': '7',
            'StandingsLists': [{
                'season': '2026',
                'round': '7',
                'DriverStandings': driver_standings_entries
            }]
        }
    }
}

# Build constructor standings JSON
constructor_standings_data = [
    ('1','mercedes',262,'7'),
    ('2','ferrari',190,'1'),
    ('3','mclaren',141,'0'),
    ('4','red_bull',89,'0'),
    ('5','alpine',60,'0'),
    ('6','rb',41,'0'),
    ('7','haas',21,'0'),
    ('8','williams',11,'0'),
    ('9','sauber',2,'0'),
    ('10','aston_martin',1,'0'),
    ('11','cadillac',0,'0'),
]

constructor_standings_entries = []
for pos, cid, pts, wins in constructor_standings_data:
    constructor = CONSTRUCTORS.get(cid, {'constructorId':cid,'name':cid,'nationality':'','url':''})
    entry = {
        'position': pos,
        'positionText': pos,
        'points': str(pts),
        'wins': wins,
        'Constructor': constructor,
    }
    constructor_standings_entries.append(entry)

constructors_standings_json = {
    'MRData': {
        'xmlns': 'http://ergast.com/mrd/1.5',
        'series': 'f1',
        'url': 'http://ergast.com/api/f1/2026/constructorStandings',
        'limit': '1000',
        'offset': '0',
        'total': str(len(constructor_standings_entries)),
        'StandingsTable': {
            'season': '2026',
            'round': '7',
            'StandingsLists': [{
                'season': '2026',
                'round': '7',
                'ConstructorStandings': constructor_standings_entries
            }]
        }
    }
}

# Write files
results_path = os.path.join(BASE, 'data', 'json', 'results', 'results_2026.json')
drivers_path = os.path.join(BASE, 'data', 'json', 'standings', 'drivers_2026.json')
constructors_path = os.path.join(BASE, 'data', 'json', 'standings', 'constructors_2026.json')

with open(results_path, 'w', encoding='utf-8') as f:
    json.dump(results_json, f, indent=2, ensure_ascii=False)
print('Written:', results_path)

with open(drivers_path, 'w', encoding='utf-8') as f:
    json.dump(drivers_standings_json, f, indent=2, ensure_ascii=False)
print('Written:', drivers_path)

with open(constructors_path, 'w', encoding='utf-8') as f:
    json.dump(constructors_standings_json, f, indent=2, ensure_ascii=False)
print('Written:', constructors_path)

# Update metadata.json
metadata_path = os.path.join(BASE, 'data', 'json', 'metadata.json')
metadata = {'lastUpdated': '2026-06-17T00:00:00.000Z', 'seasonDataUpdatedThrough': '2026', 'lastRace': 'Spanish Grand Prix (Round 7)'}
with open(metadata_path, 'w', encoding='utf-8') as f:
    json.dump(metadata, f, indent=2)
print('Updated:', metadata_path)

print('\nAll 2026 JSON files created successfully.')
