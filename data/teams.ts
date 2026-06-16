import type { Team } from '@/lib/types'

export const TEAMS: Team[] = [{
    id: 'ferrari',
    name: 'Ferrari',
    fullName: 'Scuderia Ferrari',
    nationality: 'Italian',
    flag: '🇮🇹',
    color: '#E8002D',
    logoUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/F1_Team_Icon_-_Ferrari(2009).svg',
    founded: 1950,
    bio: 'La escudería más histórica y legendaria de la Fórmula 1. Ferrari ha participado en todas las temporadas desde el inicio del Campeonato del Mundo en 1950. Con 16 títulos de constructores y 15 de pilotos, la Scuderia Ferrari representa el alma y la pasión del automovilismo italiano.',
    championships: 16,
    wins: 243,
    poles: 245,
    podiums: 794,
    basedIn: 'Maranello, Italy',
    active: true,
    seasons: [
      {
        year: 1958, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['musso', 'hawthorn', 'collins', 'trips', 'gendebien', 'phil_hill'], points: 40, position: 2, wins: 2,
        color: '#E8002D', sponsors: [], liveryColors: [],
        races: 10
      },
      {
        year: 1959, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['brooks', 'phil_hill', 'behra', 'allison', 'gendebien', 'gurney', 'trips'], points: 32, position: 2, wins: 2,
        color: '#E8002D', sponsors: [], liveryColors: [],
        races: 7
      },
      {
        year: 1960, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['allison', 'trips', 'phil_hill', 'gonzalez', 'ginther', 'mairesse'], points: 26, position: 3, wins: 1,
        color: '#E8002D', sponsors: [], liveryColors: [],
        races: 8
      },
      {
        year: 1961, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['ginther', 'phil_hill', 'trips', 'gendebien', 'baghetti', 'mairesse', 'ricardo_rodriguez'], points: 45, position: 1, wins: 5,
        color: '#E8002D', sponsors: [], liveryColors: [],
        races: 7
      },
      {
        year: 1962, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['phil_hill', 'baghetti', 'ricardo_rodriguez', 'bandini', 'mairesse'], points: 18, position: 6, wins: 0,
        color: '#E8002D', sponsors: [], liveryColors: [],
        races: 6
      },
      {
        year: 1963, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['surtees', 'mairesse', 'scarfiotti', 'bandini'], points: 26, position: 4, wins: 1,
        color: '#E8002D', sponsors: [], liveryColors: [],
        races: 10
      },
      {
        year: 1964, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['bandini', 'surtees', 'scarfiotti', 'rodriguez'], points: 45, position: 1, wins: 3,
        color: '#E8002D', sponsors: [], liveryColors: [],
        races: 10
      },
      {
        year: 1965, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['surtees', 'bandini', 'vaccarella', 'rodriguez', 'bondurant', 'scarfiotti'], points: 26, position: 4, wins: 0,
        color: '#E8002D', sponsors: [], liveryColors: [],
        races: 10
      },
      {
        year: 1966, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['bandini', 'surtees', 'parkes', 'scarfiotti', 'baghetti'], points: 31, position: 2, wins: 2,
        color: '#E8002D', sponsors: [], liveryColors: [],
        races: 7
      },
      {
        year: 1967, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['amon', 'bandini', 'parkes', 'scarfiotti', 'williams'], points: 20, position: 5, wins: 0,
        color: '#E8002D', sponsors: [], liveryColors: [],
        races: 10
      },
      {
        year: 1968, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['amon', 'ickx', 'adamich', 'bell'], points: 32, position: 4, wins: 1,
        color: '#E8002D', sponsors: [], liveryColors: [],
        races: 11
      },
      {
        year: 1969, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['amon', 'rodriguez'], points: 7, position: 6, wins: 0,
        color: '#E8002D', sponsors: [], liveryColors: [],
        races: 10
      },
      {
        year: 1970, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['ickx', 'giunti', 'regazzoni'], points: 55, position: 2, wins: 4,
        color: '#E8002D', sponsors: [], liveryColors: [],
        races: 13
      },
      {
        year: 1971, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['mario_andretti', 'regazzoni', 'ickx'], points: 33, position: 4, wins: 2,
        color: '#E8002D', sponsors: [], liveryColors: [],
        races: 11
      },
      {
        year: 1972, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['ickx', 'regazzoni', 'mario_andretti', 'galli', 'merzario'], points: 33, position: 4, wins: 1,
        color: '#E8002D', sponsors: [], liveryColors: [],
        races: 12
      },
      {
        year: 1973, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['ickx', 'merzario'], points: 12, position: 6, wins: 0,
        color: '#E8002D', sponsors: [], liveryColors: [],
        races: 13
      },
      {
        year: 1974, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['lauda', 'regazzoni'], points: 65, position: 2, wins: 3,
        color: '#E8002D', sponsors: [], liveryColors: [],
        races: 15
      },
      {
        year: 1975, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['regazzoni', 'lauda'], points: 72.5, position: 1, wins: 6,
        color: '#E8002D', sponsors: [], liveryColors: [],
        races: 14
      },
      {
        year: 1976, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['lauda', 'regazzoni', 'reutemann'], points: 79, position: 1, wins: 6,
        color: '#E8002D', sponsors: [], liveryColors: [],
        races: 15
      },
      {
        year: 1977, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['reutemann', 'lauda', 'gilles_villeneuve'], points: 84, position: 1, wins: 4,
        color: '#E8002D', sponsors: [], liveryColors: [],
        races: 17
      },
      {
        year: 1978, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['reutemann', 'gilles_villeneuve'], points: 58, position: 2, wins: 5,
        color: '#E8002D', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1979, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['gilles_villeneuve', 'scheckter'], points: 113, position: 1, wins: 6,
        color: '#E8002D', sponsors: [], liveryColors: [],
        races: 15
      },
      {
        year: 1980, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['scheckter', 'gilles_villeneuve'], points: 8, position: 10, wins: 0,
        color: '#E8002D', sponsors: [], liveryColors: [],
        races: 14
      },
      {
        year: 1981, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['pironi', 'gilles_villeneuve'], points: 34, position: 5, wins: 2,
        color: '#E8002D', sponsors: [], liveryColors: [],
        races: 15
      },
      {
        year: 1982, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['pironi', 'gilles_villeneuve', 'tambay', 'mario_andretti'], points: 74, position: 1, wins: 3,
        color: '#E8002D', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1983, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['tambay', 'arnoux'], points: 89, position: 1, wins: 4,
        color: '#E8002D', sponsors: [], liveryColors: [],
        races: 15
      },
      {
        year: 1984, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['arnoux', 'alboreto'], points: 57.5, position: 2, wins: 1,
        color: '#E8002D', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1985, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['alboreto', 'arnoux', 'johansson'], points: 82, position: 2, wins: 2,
        color: '#E8002D', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1986, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['alboreto', 'johansson'], points: 37, position: 4, wins: 0,
        color: '#E8002D', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1987, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['berger', 'alboreto'], points: 53, position: 4, wins: 2,
        color: '#E8002D', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1988, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['berger', 'alboreto'], points: 65, position: 2, wins: 1,
        color: '#E8002D', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1989, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['mansell', 'berger'], points: 59, position: 3, wins: 3,
        color: '#E8002D', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1990, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['mansell', 'prost'], points: 110, position: 2, wins: 6,
        color: '#E8002D', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1991, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['prost', 'alesi', 'morbidelli'], points: 55.5, position: 3, wins: 0,
        color: '#E8002D', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1992, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['alesi', 'capelli', 'larini'], points: 21, position: 4, wins: 0,
        color: '#E8002D', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1993, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['berger', 'alesi'], points: 28, position: 4, wins: 0,
        color: '#E8002D', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1994, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['alesi', 'berger', 'larini'], points: 71, position: 3, wins: 1,
        color: '#E8002D', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1995, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['berger', 'alesi'], points: 73, position: 3, wins: 1,
        color: '#E8002D', sponsors: [], liveryColors: [],
        races: 17
      },
      {
        year: 1996, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['irvine', 'michael_schumacher'], points: 70, position: 2, wins: 3,
        color: '#E8002D', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1997, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['michael_schumacher', 'irvine'], points: 102, position: 2, wins: 5,
        color: '#E8002D', sponsors: [], liveryColors: [],
        races: 17
      },
      {
        year: 1998, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['irvine', 'michael_schumacher'], points: 133, position: 2, wins: 6,
        color: '#E8002D', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1999, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['irvine', 'michael_schumacher', 'salo'], points: 128, position: 1, wins: 6,
        color: '#E8002D', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 2001, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['michael_schumacher', 'barrichello'], points: 179, position: 1, wins: 9,
        color: '#E8002D', sponsors: [], liveryColors: [],
        races: 17
      },
      {
        year: 2002, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['michael_schumacher', 'barrichello'], points: 221, position: 1, wins: 15,
        color: '#E8002D', sponsors: [], liveryColors: [],
        races: 17
      },
      {
        year: 2003, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['michael_schumacher', 'barrichello'], points: 158, position: 1, wins: 8,
        color: '#E8002D', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 2005, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['barrichello', 'michael_schumacher'], points: 100, position: 3, wins: 1,
        color: '#E8002D', sponsors: [], liveryColors: [],
        races: 19
      },
      {
        year: 2006, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['michael_schumacher', 'massa'], points: 201, position: 2, wins: 9,
        color: '#E8002D', sponsors: [], liveryColors: [],
        races: 18
      },
      {
        year: 2007, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['raikkonen', 'massa'], points: 204, position: 1, wins: 9,
        color: '#E8002D', sponsors: [], liveryColors: [],
        races: 17
      },
      {
        year: 2008, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['raikkonen', 'massa'], points: 172, position: 1, wins: 8,
        color: '#E8002D', sponsors: [], liveryColors: [],
        races: 18
      },
      {
        year: 2009, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['raikkonen', 'massa', 'badoer', 'fisichella'], points: 70, position: 4, wins: 1,
        color: '#E8002D', sponsors: [], liveryColors: [],
        races: 17
      },
      {
        year: 2010, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['alonso', 'massa'], points: 396, position: 3, wins: 5,
        color: '#E8002D', sponsors: [], liveryColors: [],
        races: 19
      },
      {
        year: 2011, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['alonso', 'massa'], points: 375, position: 3, wins: 1,
        color: '#E8002D', sponsors: [], liveryColors: [],
        races: 19
      },
      {
        year: 2012, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['alonso', 'massa'], points: 400, position: 2, wins: 3,
        color: '#E8002D', sponsors: [], liveryColors: [],
        races: 20
      },
      {
        year: 2013, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['alonso', 'massa'], points: 354, position: 3, wins: 2,
        color: '#E8002D', sponsors: [], liveryColors: [],
        races: 19
      },
      {
        year: 2014, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['alonso', 'raikkonen'], points: 216, position: 4, wins: 0,
        color: '#E8002D', sponsors: [], liveryColors: [],
        races: 19
      },
      {
        year: 2015, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['vettel', 'raikkonen'], points: 428, position: 2, wins: 3,
        color: '#E8002D', sponsors: [], liveryColors: [],
        races: 19
      },
      {
        year: 2016, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['vettel', 'raikkonen'], points: 398, position: 3, wins: 0,
        color: '#E8002D', sponsors: [], liveryColors: [],
        races: 21
      },
      {
        year: 2017, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['vettel', 'raikkonen'], points: 522, position: 2, wins: 5,
        color: '#E8002D', sponsors: [], liveryColors: [],
        races: 20
      },
      {
        year: 2018, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['vettel', 'raikkonen'], points: 571, position: 2, wins: 6,
        color: '#E8002D', sponsors: [], liveryColors: [],
        races: 21
      },
      {
        year: 2019, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['vettel', 'leclerc'], points: 504, position: 2, wins: 3,
        color: '#E8002D', sponsors: [], liveryColors: [],
        races: 21
      },
      {
        year: 2020, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['leclerc', 'vettel'], points: 131, position: 6, wins: 0,
        color: '#E8002D', sponsors: [], liveryColors: [],
        races: 17
      },
      {
        year: 2021, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['leclerc', 'sainz'], points: 323.5, position: 3, wins: 0,
        color: '#E8002D', sponsors: [], liveryColors: [],
        races: 22
      },
      {
        year: 2022, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['leclerc', 'sainz'], points: 554, position: 2, wins: 4,
        color: '#E8002D', sponsors: [], liveryColors: [],
        races: 22
      },
      {
        year: 2025, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['leclerc', 'hamilton'], points: 398, position: 4, wins: 0,
        color: '#E8002D', sponsors: [], liveryColors: [],
        races: 24
      },
      {
        year: 2024, chassis: 'SF-24', engine: 'Ferrari 066/12', engineSupplier: 'Ferrari',
        tyreSupplier: 'Pirelli', principal: 'Frédéric Vasseur', technicalDirector: 'Loic Serra',
        drivers: ['charles_leclerc', 'carlos_sainz'], points: 652, position: 3, wins: 5,
        color: '#E8002D', sponsors: ['HP', 'Santander', 'Shell', 'Ray-Ban', 'Lenovo'],
        liveryColors: ['#E8002D', '#FFFFFF', '#FFD700'],
        races: 24
      },
      {
        year: 2023, chassis: 'SF-23', engine: 'Ferrari 066/11', engineSupplier: 'Ferrari',
        tyreSupplier: 'Pirelli', principal: 'Frédéric Vasseur',
        drivers: ['charles_leclerc', 'carlos_sainz'], points: 406, position: 3, wins: 1,
        color: '#E8002D', sponsors: ['Santander', 'Shell', 'Ray-Ban'],
        liveryColors: ['#E8002D', '#FFFFFF'],
        races: 22
      },
      {
        year: 2004, chassis: 'F2004', engine: 'Ferrari 053', engineSupplier: 'Ferrari',
        tyreSupplier: 'Bridgestone', principal: 'Jean Todt', technicalDirector: 'Ross Brawn',
        drivers: ['michael_schumacher', 'rubens_barrichello'], points: 262, position: 1, wins: 15,
        color: '#DC0000', sponsors: ['Marlboro', 'Shell', 'Vodafone', 'FIAT'],
        liveryColors: ['#DC0000', '#FFFFFF', '#FFD700'],
        races: 18
      },
      {
        year: 2000, chassis: 'F1-2000', engine: 'Ferrari 049', engineSupplier: 'Ferrari',
        tyreSupplier: 'Bridgestone', principal: 'Jean Todt', technicalDirector: 'Ross Brawn',
        drivers: ['michael_schumacher', 'rubens_barrichello'], points: 170, position: 1, wins: 10,
        color: '#DC0000', sponsors: ['Marlboro', 'Shell', 'FIAT'],
        liveryColors: ['#DC0000', '#FFFFFF'],
        races: 17
      },
    ]
  },
  {
    id: 'mclaren',
    name: 'McLaren',
    fullName: 'McLaren Formula 1 Team',
    nationality: 'British',
    flag: '🇬🇧',
    color: '#FF8000',
    logoUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/McLaren_Racing_logo.png',
    founded: 1966,
    bio: 'Uno de los equipos más exitosos de la historia de la F1. McLaren ha ganado 8 títulos de constructores y 12 de pilotos. Su era dorada fue la de finales de los 80, cuando Ayrton Senna y Alain Prost dominaron el deporte. En 2024, McLaren regresó al éxito ganando el título de constructores.',
    championships: 8,
    wins: 183,
    poles: 155,
    podiums: 499,
    basedIn: 'Woking, England',
    active: true,
    seasons: [
      {
        year: 1968, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['mclaren', 'hulme'], points: 0, position: NaN, wins: 0,
        color: '#FF8000', sponsors: [], liveryColors: [],
        races: 2
      },
      {
        year: 1971, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['hulme', 'gethin', 'bonnier', 'oliver', 'donohue', 'hobbs'], points: 10, position: 6, wins: 0,
        color: '#FF8000', sponsors: [], liveryColors: [],
        races: 11
      },
      {
        year: 1972, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['hulme', 'revson', 'redman', 'scheckter'], points: 49, position: 3, wins: 1,
        color: '#FF8000', sponsors: [], liveryColors: [],
        races: 12
      },
      {
        year: 1973, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['hulme', 'revson', 'scheckter', 'ickx'], points: 58, position: 3, wins: 3,
        color: '#FF8000', sponsors: [], liveryColors: [],
        races: 15
      },
      {
        year: 1974, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['hulme', 'hailwood', 'emerson_fittipaldi', 'charlton', 'hobbs', 'mass'], points: 72, position: 1, wins: 4,
        color: '#FF8000', sponsors: [], liveryColors: [],
        races: 15
      },
      {
        year: 1975, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['emerson_fittipaldi', 'mass', 'charlton'], points: 53, position: 3, wins: 3,
        color: '#FF8000', sponsors: [], liveryColors: [],
        races: 14
      },
      {
        year: 1976, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['mass', 'hunt'], points: 71, position: 2, wins: 6,
        color: '#FF8000', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1977, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['hunt', 'mass', 'villota', 'lunger', 'gilles_villeneuve', 'giacomelli'], points: 56, position: 3, wins: 3,
        color: '#FF8000', sponsors: [], liveryColors: [],
        races: 17
      },
      {
        year: 1978, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['hunt', 'tambay', 'lunger', 'giacomelli', 'piquet'], points: 15, position: 8, wins: 0,
        color: '#FF8000', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1979, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['watson', 'tambay'], points: 15, position: 7, wins: 0,
        color: '#FF8000', sponsors: [], liveryColors: [],
        races: 15
      },
      {
        year: 1980, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['prost', 'watson'], points: 11, position: 9, wins: 0,
        color: '#FF8000', sponsors: [], liveryColors: [],
        races: 14
      },
      {
        year: 1981, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['watson', 'cesaris'], points: 28, position: 6, wins: 1,
        color: '#FF8000', sponsors: [], liveryColors: [],
        races: 15
      },
      {
        year: 1982, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['lauda', 'watson'], points: 69, position: 2, wins: 4,
        color: '#FF8000', sponsors: [], liveryColors: [],
        races: 15
      },
      {
        year: 1983, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['lauda', 'watson'], points: 34, position: 5, wins: 1,
        color: '#FF8000', sponsors: [], liveryColors: [],
        races: 14
      },
      {
        year: 1984, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['prost', 'lauda'], points: 143.5, position: 1, wins: 12,
        color: '#FF8000', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1985, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['prost', 'lauda', 'watson'], points: 90, position: 1, wins: 6,
        color: '#FF8000', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1986, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['prost', 'keke_rosberg'], points: 96, position: 2, wins: 4,
        color: '#FF8000', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1987, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['prost', 'johansson'], points: 76, position: 2, wins: 3,
        color: '#FF8000', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1989, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['prost', 'senna'], points: 141, position: 1, wins: 10,
        color: '#FF8000', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1990, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['senna', 'berger'], points: 121, position: 1, wins: 6,
        color: '#FF8000', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1991, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['senna', 'berger'], points: 139, position: 1, wins: 8,
        color: '#FF8000', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1992, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['senna', 'berger'], points: 99, position: 2, wins: 5,
        color: '#FF8000', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1993, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['senna', 'andretti', 'hakkinen'], points: 84, position: 2, wins: 5,
        color: '#FF8000', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1994, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['brundle', 'hakkinen', 'alliot'], points: 42, position: 4, wins: 0,
        color: '#FF8000', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1995, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['hakkinen', 'blundell', 'mansell', 'magnussen'], points: 30, position: 4, wins: 0,
        color: '#FF8000', sponsors: [], liveryColors: [],
        races: 17
      },
      {
        year: 1996, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['hakkinen', 'coulthard'], points: 49, position: 4, wins: 0,
        color: '#FF8000', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1997, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['coulthard', 'hakkinen'], points: 63, position: 4, wins: 3,
        color: '#FF8000', sponsors: [], liveryColors: [],
        races: 17
      },
      {
        year: 1998, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['hakkinen', 'coulthard'], points: 156, position: 1, wins: 9,
        color: '#FF8000', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1999, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['hakkinen', 'coulthard'], points: 124, position: 2, wins: 7,
        color: '#FF8000', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 2000, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['hakkinen', 'coulthard'], points: 162, position: 2, wins: 7,
        color: '#FF8000', sponsors: [], liveryColors: [],
        races: 17
      },
      {
        year: 2001, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['coulthard', 'hakkinen'], points: 102, position: 2, wins: 4,
        color: '#FF8000', sponsors: [], liveryColors: [],
        races: 17
      },
      {
        year: 2002, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['raikkonen', 'coulthard'], points: 65, position: 3, wins: 1,
        color: '#FF8000', sponsors: [], liveryColors: [],
        races: 17
      },
      {
        year: 2003, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['coulthard', 'raikkonen'], points: 142, position: 3, wins: 2,
        color: '#FF8000', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 2004, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['coulthard', 'raikkonen'], points: 69, position: 5, wins: 1,
        color: '#FF8000', sponsors: [], liveryColors: [],
        races: 18
      },
      {
        year: 2005, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['montoya', 'raikkonen', 'rosa', 'wurz'], points: 182, position: 2, wins: 10,
        color: '#FF8000', sponsors: [], liveryColors: [],
        races: 19
      },
      {
        year: 2006, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['raikkonen', 'montoya', 'rosa'], points: 110, position: 3, wins: 0,
        color: '#FF8000', sponsors: [], liveryColors: [],
        races: 18
      },
      {
        year: 2007, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['alonso', 'hamilton'], points: 0, position: NaN, wins: 8,
        color: '#FF8000', sponsors: [], liveryColors: [],
        races: 17
      },
      {
        year: 2008, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['hamilton', 'kovalainen'], points: 151, position: 2, wins: 6,
        color: '#FF8000', sponsors: [], liveryColors: [],
        races: 18
      },
      {
        year: 2009, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['kovalainen', 'hamilton'], points: 71, position: 3, wins: 2,
        color: '#FF8000', sponsors: [], liveryColors: [],
        races: 17
      },
      {
        year: 2010, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['hamilton', 'button'], points: 454, position: 2, wins: 5,
        color: '#FF8000', sponsors: [], liveryColors: [],
        races: 19
      },
      {
        year: 2011, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['hamilton', 'button'], points: 497, position: 2, wins: 6,
        color: '#FF8000', sponsors: [], liveryColors: [],
        races: 19
      },
      {
        year: 2012, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['button', 'hamilton'], points: 378, position: 3, wins: 7,
        color: '#FF8000', sponsors: [], liveryColors: [],
        races: 20
      },
      {
        year: 2013, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['button', 'perez'], points: 122, position: 5, wins: 0,
        color: '#FF8000', sponsors: [], liveryColors: [],
        races: 19
      },
      {
        year: 2014, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['kevin_magnussen', 'button'], points: 181, position: 5, wins: 0,
        color: '#FF8000', sponsors: [], liveryColors: [],
        races: 19
      },
      {
        year: 2015, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['button', 'kevin_magnussen', 'alonso'], points: 27, position: 9, wins: 0,
        color: '#FF8000', sponsors: [], liveryColors: [],
        races: 19
      },
      {
        year: 2016, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['button', 'alonso', 'vandoorne'], points: 76, position: 6, wins: 0,
        color: '#FF8000', sponsors: [], liveryColors: [],
        races: 21
      },
      {
        year: 2017, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['vandoorne', 'alonso', 'button'], points: 30, position: 9, wins: 0,
        color: '#FF8000', sponsors: [], liveryColors: [],
        races: 20
      },
      {
        year: 2018, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['alonso', 'vandoorne'], points: 62, position: 7, wins: 0,
        color: '#FF8000', sponsors: [], liveryColors: [],
        races: 21
      },
      {
        year: 2019, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['norris', 'sainz'], points: 145, position: 4, wins: 0,
        color: '#FF8000', sponsors: [], liveryColors: [],
        races: 21
      },
      {
        year: 2020, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['norris', 'sainz'], points: 202, position: 3, wins: 0,
        color: '#FF8000', sponsors: [], liveryColors: [],
        races: 17
      },
      {
        year: 2021, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['norris', 'ricciardo'], points: 275, position: 4, wins: 1,
        color: '#FF8000', sponsors: [], liveryColors: [],
        races: 22
      },
      {
        year: 2022, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['ricciardo', 'norris'], points: 159, position: 5, wins: 0,
        color: '#FF8000', sponsors: [], liveryColors: [],
        races: 22
      },
      {
        year: 2023, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['norris', 'piastri'], points: 302, position: 4, wins: 0,
        color: '#FF8000', sponsors: [], liveryColors: [],
        races: 22
      },
      {
        year: 2025, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['norris', 'piastri'], points: 833, position: 1, wins: 14,
        color: '#FF8000', sponsors: [], liveryColors: [],
        races: 24
      },
      {
        year: 2024, chassis: 'MCL38', engine: 'Mercedes M15', engineSupplier: 'Mercedes',
        tyreSupplier: 'Pirelli', principal: 'Andrea Stella', technicalDirector: 'Peter Prodromou',
        drivers: ['lando_norris', 'oscar_piastri'], points: 666, position: 1, wins: 6,
        color: '#FF8000', sponsors: ['OKX', 'Google', 'Unilever', 'Dell'],
        liveryColors: ['#FF8000', '#000000'],
        races: 24
      },
      {
        year: 1988, chassis: 'MP4/4', engine: 'Honda RA168E', engineSupplier: 'Honda',
        tyreSupplier: 'Goodyear', principal: 'Ron Dennis', technicalDirector: 'Gordon Murray',
        drivers: ['ayrton_senna', 'alain_prost'], points: 199, position: 1, wins: 15,
        color: '#D40000', sponsors: ['Marlboro', 'Shell', 'Honda'],
        liveryColors: ['#FFFFFF', '#D40000'],
        races: 16
      },
    ]
  },
  {
    id: 'mercedes',
    name: 'Mercedes',
    fullName: 'Mercedes-AMG Petronas Formula One Team',
    nationality: 'German',
    flag: '🇩🇪',
    color: '#27F4D2',
    logoUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mercedes-AMG_Petronas_F1_Team_logo_(2026).svg',
    founded: 2010,
    bio: 'El equipo más dominante de la era híbrida. Mercedes ganó 8 títulos de constructores consecutivos entre 2014 y 2021, una hazaña sin precedentes en la historia de la F1. Con Lewis Hamilton como estandarte, el equipo de Brackley redefinió lo que es posible en el automovilismo.',
    championships: 8,
    wins: 116,
    poles: 128,
    podiums: 331,
    basedIn: 'Brackley, England',
    active: true,
    seasons: [
      {
        year: 2010, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['rosberg', 'michael_schumacher'], points: 214, position: 4, wins: 0,
        color: '#27F4D2', sponsors: [], liveryColors: [],
        races: 19
      },
      {
        year: 2011, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['rosberg', 'michael_schumacher'], points: 165, position: 4, wins: 0,
        color: '#27F4D2', sponsors: [], liveryColors: [],
        races: 19
      },
      {
        year: 2012, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['rosberg', 'michael_schumacher'], points: 142, position: 5, wins: 1,
        color: '#27F4D2', sponsors: [], liveryColors: [],
        races: 20
      },
      {
        year: 2013, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['hamilton', 'rosberg'], points: 360, position: 2, wins: 3,
        color: '#27F4D2', sponsors: [], liveryColors: [],
        races: 19
      },
      {
        year: 2014, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['rosberg', 'hamilton'], points: 701, position: 1, wins: 16,
        color: '#27F4D2', sponsors: [], liveryColors: [],
        races: 19
      },
      {
        year: 2015, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['hamilton', 'rosberg'], points: 703, position: 1, wins: 16,
        color: '#27F4D2', sponsors: [], liveryColors: [],
        races: 19
      },
      {
        year: 2016, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['rosberg', 'hamilton'], points: 765, position: 1, wins: 19,
        color: '#27F4D2', sponsors: [], liveryColors: [],
        races: 21
      },
      {
        year: 2017, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['hamilton', 'bottas'], points: 668, position: 1, wins: 12,
        color: '#27F4D2', sponsors: [], liveryColors: [],
        races: 20
      },
      {
        year: 2018, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['hamilton', 'bottas'], points: 655, position: 1, wins: 11,
        color: '#27F4D2', sponsors: [], liveryColors: [],
        races: 21
      },
      {
        year: 2019, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['bottas', 'hamilton'], points: 739, position: 1, wins: 15,
        color: '#27F4D2', sponsors: [], liveryColors: [],
        races: 21
      },
      {
        year: 2021, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['hamilton', 'bottas'], points: 613.5, position: 1, wins: 9,
        color: '#27F4D2', sponsors: [], liveryColors: [],
        races: 22
      },
      {
        year: 2022, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['hamilton', 'russell'], points: 515, position: 3, wins: 1,
        color: '#27F4D2', sponsors: [], liveryColors: [],
        races: 22
      },
      {
        year: 2023, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['hamilton', 'russell'], points: 409, position: 2, wins: 0,
        color: '#27F4D2', sponsors: [], liveryColors: [],
        races: 22
      },
      {
        year: 2025, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['russell', 'antonelli'], points: 469, position: 2, wins: 2,
        color: '#27F4D2', sponsors: [], liveryColors: [],
        races: 24
      },
      {
        year: 2024, chassis: 'W15', engine: 'Mercedes M15', engineSupplier: 'Mercedes',
        tyreSupplier: 'Pirelli', principal: 'Toto Wolff', technicalDirector: 'James Allison',
        drivers: ['lewis_hamilton', 'george_russell'], points: 468, position: 4, wins: 4,
        color: '#27F4D2', sponsors: ['Petronas', 'INEOS', 'Tommy Hilfiger', 'Qualcomm'],
        liveryColors: ['#00D2BE', '#000000', '#FFFFFF'],
        races: 24
      },
      {
        year: 2020, chassis: 'W11', engine: 'Mercedes M11', engineSupplier: 'Mercedes',
        tyreSupplier: 'Pirelli', principal: 'Toto Wolff', technicalDirector: 'James Allison',
        drivers: ['lewis_hamilton', 'valtteri_bottas'], points: 573, position: 1, wins: 13,
        color: '#00D2BE', sponsors: ['Petronas', 'INEOS', 'Tommy Hilfiger'],
        liveryColors: ['#00D2BE', '#000000'],
        races: 17
      },
    ]
  },
  {
    id: 'redbull',
    name: 'Red Bull',
    fullName: 'Oracle Red Bull Racing',
    nationality: 'Austrian',
    flag: '🇦🇹',
    color: '#3671C6',
    logoUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Red_Bull_Racing_-_2021_Logo.svg',
    founded: 2005,
    bio: 'El equipo del siglo XXI. Red Bull Racing ha ganado 6 títulos de constructores y es el hogar de Max Verstappen. Con su famosa colaboración con Adrian Newey como Director Técnico, el equipo de Milton Keynes produjo algunos de los coches más innovadores de la historia moderna de la F1.',
    championships: 6,
    wins: 115,
    poles: 97,
    podiums: 289,
    basedIn: 'Milton Keynes, England',
    active: true,
    seasons: [
      {
        year: 2005, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['coulthard', 'klien', 'liuzzi'], points: 34, position: 7, wins: 0,
        color: '#3671C6', sponsors: [], liveryColors: [],
        races: 19
      },
      {
        year: 2006, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['klien', 'coulthard', 'doornbos'], points: 16, position: 7, wins: 0,
        color: '#3671C6', sponsors: [], liveryColors: [],
        races: 18
      },
      {
        year: 2007, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['webber', 'coulthard'], points: 24, position: 5, wins: 0,
        color: '#3671C6', sponsors: [], liveryColors: [],
        races: 17
      },
      {
        year: 2008, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['coulthard', 'webber'], points: 29, position: 7, wins: 0,
        color: '#3671C6', sponsors: [], liveryColors: [],
        races: 18
      },
      {
        year: 2009, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['webber', 'vettel'], points: 153.5, position: 2, wins: 6,
        color: '#3671C6', sponsors: [], liveryColors: [],
        races: 17
      },
      {
        year: 2010, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['vettel', 'webber'], points: 498, position: 1, wins: 9,
        color: '#3671C6', sponsors: [], liveryColors: [],
        races: 19
      },
      {
        year: 2011, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['vettel', 'webber'], points: 650, position: 1, wins: 12,
        color: '#3671C6', sponsors: [], liveryColors: [],
        races: 19
      },
      {
        year: 2012, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['vettel', 'webber'], points: 460, position: 1, wins: 7,
        color: '#3671C6', sponsors: [], liveryColors: [],
        races: 20
      },
      {
        year: 2013, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['vettel', 'webber'], points: 596, position: 1, wins: 13,
        color: '#3671C6', sponsors: [], liveryColors: [],
        races: 19
      },
      {
        year: 2014, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['vettel', 'ricciardo'], points: 405, position: 2, wins: 3,
        color: '#3671C6', sponsors: [], liveryColors: [],
        races: 19
      },
      {
        year: 2015, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['ricciardo', 'kvyat'], points: 187, position: 4, wins: 0,
        color: '#3671C6', sponsors: [], liveryColors: [],
        races: 19
      },
      {
        year: 2016, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['ricciardo', 'kvyat', 'max_verstappen'], points: 468, position: 2, wins: 2,
        color: '#3671C6', sponsors: [], liveryColors: [],
        races: 21
      },
      {
        year: 2017, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['max_verstappen', 'ricciardo'], points: 368, position: 3, wins: 3,
        color: '#3671C6', sponsors: [], liveryColors: [],
        races: 20
      },
      {
        year: 2018, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['ricciardo', 'max_verstappen'], points: 419, position: 3, wins: 4,
        color: '#3671C6', sponsors: [], liveryColors: [],
        races: 21
      },
      {
        year: 2019, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['max_verstappen', 'gasly', 'albon'], points: 417, position: 3, wins: 3,
        color: '#3671C6', sponsors: [], liveryColors: [],
        races: 21
      },
      {
        year: 2020, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['albon', 'max_verstappen'], points: 319, position: 2, wins: 2,
        color: '#3671C6', sponsors: [], liveryColors: [],
        races: 17
      },
      {
        year: 2021, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['max_verstappen', 'perez'], points: 585.5, position: 2, wins: 11,
        color: '#3671C6', sponsors: [], liveryColors: [],
        races: 22
      },
      {
        year: 2022, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['perez', 'max_verstappen'], points: 759, position: 1, wins: 17,
        color: '#3671C6', sponsors: [], liveryColors: [],
        races: 22
      },
      {
        year: 2025, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['max_verstappen', 'lawson', 'tsunoda'], points: 451, position: 3, wins: 8,
        color: '#3671C6', sponsors: [], liveryColors: [],
        races: 24
      },
      {
        year: 2024, chassis: 'RB20', engine: 'Honda RBPTH002', engineSupplier: 'Honda RBPT',
        tyreSupplier: 'Pirelli', principal: 'Christian Horner', technicalDirector: 'Pierre Waché',
        drivers: ['max_verstappen', 'sergio_perez'], points: 860, position: 2, wins: 11,
        color: '#3671C6', sponsors: ['Oracle', 'Red Bull', 'ExxonMobil', 'TAG Heuer'],
        liveryColors: ['#001B47', '#3671C6', '#FFD700'],
        races: 24
      },
      {
        year: 2023, chassis: 'RB19', engine: 'Honda RBPTH001', engineSupplier: 'Honda RBPT',
        tyreSupplier: 'Pirelli', principal: 'Christian Horner', technicalDirector: 'Adrian Newey',
        drivers: ['max_verstappen', 'sergio_perez'], points: 860, position: 1, wins: 21,
        color: '#3671C6', sponsors: ['Oracle', 'Red Bull', 'ExxonMobil'],
        liveryColors: ['#001B47', '#3671C6', '#FFD700'],
        races: 22
      },
    ]
  },
  {
    id: 'williams',
    name: 'Williams',
    fullName: 'Williams Racing',
    nationality: 'British',
    flag: '🇬🇧',
    color: '#64C4FF',
    logoUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Atlassian_Williams_F1_Team_logo.svg',
    founded: 1977,
    bio: 'El equipo independiente más exitoso de la historia de la F1. Williams ganó 9 títulos de constructores entre 1980 y 1997, con pilotos como Nigel Mansell, Nelson Piquet, Alain Prost y Damon Hill. El equipo fundado por Frank Williams es un símbolo de lo que puede conseguir un equipo privado con pasión e ingeniería de primer nivel.',
    championships: 9,
    wins: 114,
    poles: 128,
    podiums: 313,
    basedIn: 'Grove, England',
    active: true,
    seasons: [
      {
        year: 1978, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['jones'], points: 11, position: 9, wins: 0,
        color: '#64C4FF', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1979, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['jones', 'regazzoni'], points: 75, position: 2, wins: 5,
        color: '#64C4FF', sponsors: [], liveryColors: [],
        races: 15
      },
      {
        year: 1980, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['jones', 'reutemann', 'keegan'], points: 120, position: 1, wins: 6,
        color: '#64C4FF', sponsors: [], liveryColors: [],
        races: 14
      },
      {
        year: 1981, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['jones', 'reutemann'], points: 95, position: 1, wins: 4,
        color: '#64C4FF', sponsors: [], liveryColors: [],
        races: 15
      },
      {
        year: 1982, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['reutemann', 'keke_rosberg', 'mario_andretti', 'daly'], points: 58, position: 4, wins: 1,
        color: '#64C4FF', sponsors: [], liveryColors: [],
        races: 15
      },
      {
        year: 1983, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['laffite', 'keke_rosberg', 'palmer'], points: 38, position: 4, wins: 1,
        color: '#64C4FF', sponsors: [], liveryColors: [],
        races: 15
      },
      {
        year: 1984, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['keke_rosberg', 'laffite'], points: 25.5, position: 6, wins: 1,
        color: '#64C4FF', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1985, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['keke_rosberg', 'mansell'], points: 71, position: 3, wins: 4,
        color: '#64C4FF', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1986, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['piquet', 'mansell'], points: 141, position: 1, wins: 9,
        color: '#64C4FF', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1987, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['piquet', 'mansell', 'patrese'], points: 137, position: 1, wins: 9,
        color: '#64C4FF', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1988, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['mansell', 'patrese', 'brundle', 'schlesser'], points: 20, position: 7, wins: 0,
        color: '#64C4FF', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1989, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['patrese', 'boutsen'], points: 77, position: 2, wins: 2,
        color: '#64C4FF', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1990, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['boutsen', 'patrese'], points: 57, position: 4, wins: 2,
        color: '#64C4FF', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1991, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['patrese', 'mansell'], points: 125, position: 2, wins: 7,
        color: '#64C4FF', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1992, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['mansell', 'patrese'], points: 164, position: 1, wins: 10,
        color: '#64C4FF', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1993, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['prost', 'damon_hill'], points: 168, position: 1, wins: 10,
        color: '#64C4FF', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1994, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['damon_hill', 'senna', 'coulthard', 'mansell'], points: 118, position: 1, wins: 7,
        color: '#64C4FF', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1995, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['coulthard', 'damon_hill'], points: 118, position: 2, wins: 5,
        color: '#64C4FF', sponsors: [], liveryColors: [],
        races: 17
      },
      {
        year: 1997, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['frentzen', 'villeneuve'], points: 123, position: 1, wins: 8,
        color: '#64C4FF', sponsors: [], liveryColors: [],
        races: 17
      },
      {
        year: 1998, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['frentzen', 'villeneuve'], points: 38, position: 3, wins: 0,
        color: '#64C4FF', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1999, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['ralf_schumacher', 'zanardi'], points: 35, position: 5, wins: 0,
        color: '#64C4FF', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 2000, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['ralf_schumacher', 'button'], points: 36, position: 3, wins: 0,
        color: '#64C4FF', sponsors: [], liveryColors: [],
        races: 17
      },
      {
        year: 2001, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['montoya', 'ralf_schumacher'], points: 80, position: 3, wins: 4,
        color: '#64C4FF', sponsors: [], liveryColors: [],
        races: 17
      },
      {
        year: 2002, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['montoya', 'ralf_schumacher'], points: 92, position: 2, wins: 1,
        color: '#64C4FF', sponsors: [], liveryColors: [],
        races: 17
      },
      {
        year: 2003, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['montoya', 'ralf_schumacher', 'gene'], points: 144, position: 2, wins: 4,
        color: '#64C4FF', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 2004, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['ralf_schumacher', 'montoya', 'gene', 'pizzonia'], points: 88, position: 4, wins: 1,
        color: '#64C4FF', sponsors: [], liveryColors: [],
        races: 18
      },
      {
        year: 2005, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['webber', 'heidfeld', 'pizzonia'], points: 66, position: 5, wins: 0,
        color: '#64C4FF', sponsors: [], liveryColors: [],
        races: 19
      },
      {
        year: 2006, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['webber', 'rosberg'], points: 11, position: 8, wins: 0,
        color: '#64C4FF', sponsors: [], liveryColors: [],
        races: 18
      },
      {
        year: 2007, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['rosberg', 'wurz', 'nakajima'], points: 33, position: 4, wins: 0,
        color: '#64C4FF', sponsors: [], liveryColors: [],
        races: 17
      },
      {
        year: 2008, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['rosberg', 'nakajima'], points: 26, position: 8, wins: 0,
        color: '#64C4FF', sponsors: [], liveryColors: [],
        races: 18
      },
      {
        year: 2009, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['rosberg', 'nakajima'], points: 34.5, position: 7, wins: 0,
        color: '#64C4FF', sponsors: [], liveryColors: [],
        races: 17
      },
      {
        year: 2010, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['barrichello', 'hulkenberg'], points: 69, position: 6, wins: 0,
        color: '#64C4FF', sponsors: [], liveryColors: [],
        races: 19
      },
      {
        year: 2011, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['barrichello', 'maldonado'], points: 5, position: 9, wins: 0,
        color: '#64C4FF', sponsors: [], liveryColors: [],
        races: 19
      },
      {
        year: 2012, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['maldonado', 'bruno_senna'], points: 76, position: 8, wins: 1,
        color: '#64C4FF', sponsors: [], liveryColors: [],
        races: 20
      },
      {
        year: 2013, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['bottas', 'maldonado'], points: 5, position: 9, wins: 0,
        color: '#64C4FF', sponsors: [], liveryColors: [],
        races: 19
      },
      {
        year: 2014, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['bottas', 'massa'], points: 320, position: 3, wins: 0,
        color: '#64C4FF', sponsors: [], liveryColors: [],
        races: 19
      },
      {
        year: 2015, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['massa', 'bottas'], points: 257, position: 3, wins: 0,
        color: '#64C4FF', sponsors: [], liveryColors: [],
        races: 19
      },
      {
        year: 2016, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['massa', 'bottas'], points: 138, position: 5, wins: 0,
        color: '#64C4FF', sponsors: [], liveryColors: [],
        races: 21
      },
      {
        year: 2017, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['massa', 'stroll', 'resta'], points: 83, position: 5, wins: 0,
        color: '#64C4FF', sponsors: [], liveryColors: [],
        races: 20
      },
      {
        year: 2018, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['stroll', 'sirotkin'], points: 7, position: 10, wins: 0,
        color: '#64C4FF', sponsors: [], liveryColors: [],
        races: 21
      },
      {
        year: 2019, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['russell', 'kubica'], points: 1, position: 10, wins: 0,
        color: '#64C4FF', sponsors: [], liveryColors: [],
        races: 21
      },
      {
        year: 2020, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['latifi', 'russell', 'aitken'], points: 0, position: 10, wins: 0,
        color: '#64C4FF', sponsors: [], liveryColors: [],
        races: 17
      },
      {
        year: 2021, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['russell', 'latifi'], points: 23, position: 8, wins: 0,
        color: '#64C4FF', sponsors: [], liveryColors: [],
        races: 22
      },
      {
        year: 2022, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['albon', 'latifi', 'de_vries'], points: 8, position: 10, wins: 0,
        color: '#64C4FF', sponsors: [], liveryColors: [],
        races: 22
      },
      {
        year: 2023, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['albon', 'sargeant'], points: 28, position: 7, wins: 0,
        color: '#64C4FF', sponsors: [], liveryColors: [],
        races: 22
      },
      {
        year: 2024, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['albon', 'sargeant', 'colapinto'], points: 17, position: 9, wins: 0,
        color: '#64C4FF', sponsors: [], liveryColors: [],
        races: 24
      },
      {
        year: 2025, chassis: 'FW47', engine: 'Mercedes M16', engineSupplier: 'Mercedes',
        tyreSupplier: 'Pirelli', principal: 'James Vowles', technicalDirector: 'Pat Fry',
        drivers: ['carlos_sainz', 'alexander_albon'], points: 42, position: 9, wins: 1,
        color: '#64C4FF', sponsors: ['Duracell', 'Sartorius', 'Kraken'],
        liveryColors: ['#003EFF', '#FFFFFF', '#64C4FF'],
        races: 24
      },
      {
        year: 1996, chassis: 'FW18', engine: 'Renault RS8', engineSupplier: 'Renault',
        tyreSupplier: 'Goodyear', principal: 'Frank Williams', technicalDirector: 'Patrick Head',
        drivers: ['damon_hill', 'jacques_villeneuve'], points: 175, position: 1, wins: 12,
        color: '#005AFF', sponsors: ['Rothmans', 'Renault', 'Elf'],
        liveryColors: ['#002D72', '#FFFFFF', '#FFD700'],
        races: 16
      },
    ]
  },
  {
    id: 'lotus',
    name: 'Lotus',
    fullName: 'Team Lotus / Lotus Cars',
    nationality: 'British',
    flag: '🇬🇧',
    color: '#FFD700',
    logoUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Lotus_F1_Team_logo.jpg',
    founded: 1958,
    dissolved: 1994,
    bio: 'La escudería más innovadora de la historia de la F1. Bajo la dirección del genio Colin Chapman, Lotus introdujo decenas de innovaciones técnicas revolucionarias: el chasis monocasco, el efecto suelo, los alerones... Con pilotos como Jim Clark, Jochen Rindt y Emerson Fittipaldi, Lotus ganó 7 títulos de constructores.',
    championships: 7,
    wins: 79,
    poles: 107,
    podiums: 175,
    basedIn: 'Norwich, England',
    active: false,
    seasons: [
      {
        year: 1958, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['allison', 'hill', 'stacey', 'bueb'], points: 3, position: 6, wins: 0,
        color: '#FFD700', sponsors: [], liveryColors: [],
        races: 9
      },
      {
        year: 1959, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['hill', 'halford', 'ireland', 'stacey', 'piper'], points: 5, position: 4, wins: 0,
        color: '#FFD700', sponsors: [], liveryColors: [],
        races: 8
      },
      {
        year: 1960, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['ireland', 'larreta', 'stacey', 'moss', 'surtees', 'clark', 'mike_taylor', 'flockhart', 'piper', 'hall'], points: 34, position: 2, wins: 2,
        color: '#FFD700', sponsors: [], liveryColors: [],
        races: 8
      },
      {
        year: 1962, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['arundell'], points: 0, position: NaN, wins: 0,
        color: '#FFD700', sponsors: [], liveryColors: [],
        races: 1
      },
      {
        year: 1963, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['hansgen'], points: 0, position: NaN, wins: 0,
        color: '#FFD700', sponsors: [], liveryColors: [],
        races: 1
      },
      {
        year: 1970, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['miles', 'hill', 'love', 'charlton', 'rindt', 'emerson_fittipaldi', 'lovely', 'wisell'], points: 59, position: 1, wins: 6,
        color: '#FFD700', sponsors: [], liveryColors: [],
        races: 13
      },
      {
        year: 1972, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['emerson_fittipaldi', 'walker', 'charlton', 'wisell'], points: 61, position: 1, wins: 5,
        color: '#FFD700', sponsors: [], liveryColors: [],
        races: 12
      },
      {
        year: 1973, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['emerson_fittipaldi', 'peterson', 'charlton'], points: 91, position: 1, wins: 7,
        color: '#FFD700', sponsors: [], liveryColors: [],
        races: 15
      },
      {
        year: 1974, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['peterson', 'ickx', 'ian_scheckter', 'driver', 'schenken'], points: 42, position: 4, wins: 3,
        color: '#FFD700', sponsors: [], liveryColors: [],
        races: 15
      },
      {
        year: 1975, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['ickx', 'peterson', 'tunmer', 'keizan', 'henton', 'crawford', 'watson'], points: 9, position: 7, wins: 0,
        color: '#FFD700', sponsors: [], liveryColors: [],
        races: 14
      },
      {
        year: 1976, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['peterson', 'mario_andretti', 'evans', 'nilsson'], points: 29, position: 4, wins: 1,
        color: '#FFD700', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1977, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['mario_andretti', 'nilsson'], points: 62, position: 2, wins: 5,
        color: '#FFD700', sponsors: [], liveryColors: [],
        races: 17
      },
      {
        year: 1979, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['reutemann', 'mario_andretti', 'rebaque'], points: 39, position: 4, wins: 0,
        color: '#FFD700', sponsors: [], liveryColors: [],
        races: 15
      },
      {
        year: 1980, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['mario_andretti', 'angelis', 'mansell'], points: 14, position: 5, wins: 0,
        color: '#FFD700', sponsors: [], liveryColors: [],
        races: 14
      },
      {
        year: 1981, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['mansell', 'angelis'], points: 22, position: 7, wins: 0,
        color: '#FFD700', sponsors: [], liveryColors: [],
        races: 15
      },
      {
        year: 1982, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['angelis', 'mansell', 'lees'], points: 30, position: 6, wins: 1,
        color: '#FFD700', sponsors: [], liveryColors: [],
        races: 15
      },
      {
        year: 1983, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['mansell', 'angelis'], points: 12, position: 8, wins: 0,
        color: '#FFD700', sponsors: [], liveryColors: [],
        races: 15
      },
      {
        year: 1984, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['angelis', 'mansell'], points: 47, position: 3, wins: 0,
        color: '#FFD700', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1985, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['angelis', 'senna'], points: 71, position: 4, wins: 3,
        color: '#FFD700', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1986, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['senna', 'dumfries'], points: 58, position: 3, wins: 2,
        color: '#FFD700', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1987, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['satoru_nakajima', 'senna'], points: 64, position: 3, wins: 2,
        color: '#FFD700', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1988, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['piquet', 'satoru_nakajima'], points: 23, position: 4, wins: 0,
        color: '#FFD700', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1989, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['satoru_nakajima', 'piquet'], points: 15, position: 6, wins: 0,
        color: '#FFD700', sponsors: [], liveryColors: [],
        races: 15
      },
      {
        year: 1990, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['warwick', 'donnelly', 'herbert'], points: 3, position: 8, wins: 0,
        color: '#FFD700', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1991, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['hakkinen', 'bailey', 'herbert'], points: 3, position: 9, wins: 0,
        color: '#FFD700', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1992, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['herbert', 'hakkinen'], points: 13, position: 5, wins: 0,
        color: '#FFD700', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1993, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['herbert', 'zanardi', 'lamy'], points: 12, position: 6, wins: 0,
        color: '#FFD700', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1994, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['herbert', 'lamy', 'zanardi', 'adams', 'bernard', 'salo'], points: 0, position: NaN, wins: 0,
        color: '#FFD700', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1978, chassis: '78/79', engine: 'Ford DFV', engineSupplier: 'Ford',
        tyreSupplier: 'Goodyear', principal: 'Colin Chapman', technicalDirector: 'Colin Chapman',
        drivers: ['mario_andretti', 'ronnie_peterson'], points: 86, position: 1, wins: 8,
        color: '#1B1B1B', sponsors: ['John Player Special', 'Essex Petroleum'],
        liveryColors: ['#000000', '#FFD700'],
        races: 16
      },
    ]
  },
  {
    id: 'alpine',
    name: 'Alpine',
    fullName: 'BWT Alpine F1 Team',
    nationality: 'French',
    flag: '🇫🇷',
    color: '#FF87BC',
    logoUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Alpine_F1_Team_Logo.svg',
    founded: 1981,
    bio: 'Heredero del legado de Renault en la F1. El equipo francés, ahora bajo la marca Alpine, tiene una rica historia desde sus días como Renault y Benetton. Ganó dos títulos de constructores y pilotos con Alonso en 2005-2006. Actualmente en proceso de reconstrucción con ambición de volver al frente.',
    championships: 2,
    wins: 35,
    poles: 51,
    podiums: 132,
    basedIn: 'Enstone, England',
    active: true,
    seasons: [
      {
        year: 1981, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['henton', 'warwick'], points: 0, position: NaN, wins: 0,
        color: '#FF87BC', sponsors: [], liveryColors: [],
        races: 2
      },
      {
        year: 1982, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['warwick', 'fabi'], points: 0, position: NaN, wins: 0,
        color: '#FF87BC', sponsors: [], liveryColors: [],
        races: 11
      },
      {
        year: 1983, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['warwick', 'giacomelli'], points: 10, position: 9, wins: 0,
        color: '#FF87BC', sponsors: [], liveryColors: [],
        races: 15
      },
      {
        year: 1984, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['cecotto', 'senna', 'johansson'], points: 16, position: 7, wins: 0,
        color: '#FF87BC', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1985, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['fabi', 'ghinzani'], points: 0, position: NaN, wins: 0,
        color: '#FF87BC', sponsors: [], liveryColors: [],
        races: 13
      },
      {
        year: 2002, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['trulli', 'button'], points: 23, position: 4, wins: 0,
        color: '#FF87BC', sponsors: [], liveryColors: [],
        races: 17
      },
      {
        year: 2003, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['trulli', 'alonso'], points: 88, position: 4, wins: 1,
        color: '#FF87BC', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 2004, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['alonso', 'trulli', 'villeneuve'], points: 105, position: 3, wins: 1,
        color: '#FF87BC', sponsors: [], liveryColors: [],
        races: 18
      },
      {
        year: 2005, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['fisichella', 'alonso'], points: 191, position: 1, wins: 8,
        color: '#FF87BC', sponsors: [], liveryColors: [],
        races: 19
      },
      {
        year: 2006, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['alonso', 'fisichella'], points: 206, position: 1, wins: 8,
        color: '#FF87BC', sponsors: [], liveryColors: [],
        races: 18
      },
      {
        year: 2007, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['fisichella', 'kovalainen'], points: 51, position: 3, wins: 0,
        color: '#FF87BC', sponsors: [], liveryColors: [],
        races: 17
      },
      {
        year: 2008, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['alonso', 'piquet_jr'], points: 80, position: 4, wins: 2,
        color: '#FF87BC', sponsors: [], liveryColors: [],
        races: 18
      },
      {
        year: 2009, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['alonso', 'piquet_jr', 'grosjean'], points: 26, position: 8, wins: 0,
        color: '#FF87BC', sponsors: [], liveryColors: [],
        races: 17
      },
      {
        year: 2010, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['kubica', 'petrov'], points: 163, position: 5, wins: 0,
        color: '#FF87BC', sponsors: [], liveryColors: [],
        races: 19
      },
      {
        year: 2011, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['petrov', 'heidfeld', 'bruno_senna'], points: 73, position: 5, wins: 0,
        color: '#FF87BC', sponsors: [], liveryColors: [],
        races: 19
      },
      {
        year: 2012, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['raikkonen', 'grosjean', 'ambrosio'], points: 303, position: 4, wins: 1,
        color: '#FF87BC', sponsors: [], liveryColors: [],
        races: 20
      },
      {
        year: 2013, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['raikkonen', 'grosjean', 'kovalainen'], points: 315, position: 4, wins: 1,
        color: '#FF87BC', sponsors: [], liveryColors: [],
        races: 19
      },
      {
        year: 2014, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['grosjean', 'maldonado'], points: 10, position: 8, wins: 0,
        color: '#FF87BC', sponsors: [], liveryColors: [],
        races: 19
      },
      {
        year: 2015, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['grosjean', 'maldonado'], points: 78, position: 6, wins: 0,
        color: '#FF87BC', sponsors: [], liveryColors: [],
        races: 19
      },
      {
        year: 2016, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['jolyon_palmer', 'kevin_magnussen'], points: 8, position: 9, wins: 0,
        color: '#FF87BC', sponsors: [], liveryColors: [],
        races: 21
      },
      {
        year: 2017, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['hulkenberg', 'jolyon_palmer', 'sainz'], points: 57, position: 6, wins: 0,
        color: '#FF87BC', sponsors: [], liveryColors: [],
        races: 20
      },
      {
        year: 2018, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['hulkenberg', 'sainz'], points: 122, position: 4, wins: 0,
        color: '#FF87BC', sponsors: [], liveryColors: [],
        races: 21
      },
      {
        year: 2019, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['hulkenberg', 'ricciardo'], points: 91, position: 5, wins: 0,
        color: '#FF87BC', sponsors: [], liveryColors: [],
        races: 21
      },
      {
        year: 2020, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['ocon', 'ricciardo'], points: 181, position: 5, wins: 0,
        color: '#FF87BC', sponsors: [], liveryColors: [],
        races: 17
      },
      {
        year: 2021, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['ocon', 'alonso'], points: 155, position: 5, wins: 1,
        color: '#FF87BC', sponsors: [], liveryColors: [],
        races: 22
      },
      {
        year: 2022, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['ocon', 'alonso'], points: 173, position: 4, wins: 0,
        color: '#FF87BC', sponsors: [], liveryColors: [],
        races: 22
      },
      {
        year: 2023, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['gasly', 'ocon'], points: 120, position: 6, wins: 0,
        color: '#FF87BC', sponsors: [], liveryColors: [],
        races: 22
      },
      {
        year: 2025, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['gasly', 'doohan', 'colapinto'], points: 22, position: 10, wins: 0,
        color: '#FF87BC', sponsors: [], liveryColors: [],
        races: 24
      },
      {
        year: 2024, chassis: 'A524', engine: 'Renault E-Tech RE24', engineSupplier: 'Renault',
        tyreSupplier: 'Pirelli', principal: 'Bruno Famin',
        drivers: ['pierre_gasly', 'esteban_ocon'], points: 65, position: 6, wins: 0,
        color: '#FF87BC', sponsors: ['BWT', 'Rio Tinto', 'Cognizant'],
        liveryColors: ['#0078FF', '#FF87BC', '#FFFFFF'],
        races: 24
      },
    ]
  },
  {
    id: 'alfa_romeo',
    name: 'Alfa Romeo',
    fullName: 'Alfa Romeo SpA',
    nationality: 'Italian',
    flag: '🇮🇹',
    color: '#900000',
    logoUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Alfa_Romeo_F1_Team_Stake_Logo.svg',
    founded: 1950,
    dissolved: 1985,
    bio: 'Presente en la primera carrera del campeonato del mundo en 1950, Alfa Romeo dominó las dos primeras temporadas con su Alfetta 158/159, llevando a Farina y Fangio al título de pilotos. Regresó como constructor en los años 70 y 80 con motores boxer y V12 propios antes de retirarse de la F1.',
    championships: 0,
    wins: 10,
    poles: 12,
    podiums: 25,
    basedIn: 'Milán, Italia',
    active: false,
    seasons: [
      {
        year: 1963, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['klerk'], points: 0, position: NaN, wins: 0,
        color: '#900000', sponsors: [], liveryColors: [],
        races: 1
      },
      {
        year: 1965, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['klerk'], points: 0, position: NaN, wins: 0,
        color: '#900000', sponsors: [], liveryColors: [],
        races: 1
      },
      {
        year: 1979, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['giacomelli', 'brambilla'], points: 0, position: NaN, wins: 0,
        color: '#900000', sponsors: [], liveryColors: [],
        races: 5
      },
      {
        year: 1980, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['giacomelli', 'depailler', 'brambilla', 'cesaris'], points: 4, position: 11, wins: 0,
        color: '#900000', sponsors: [], liveryColors: [],
        races: 14
      },
      {
        year: 1981, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['mario_andretti', 'giacomelli'], points: 10, position: 9, wins: 0,
        color: '#900000', sponsors: [], liveryColors: [],
        races: 15
      },
      {
        year: 1982, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['giacomelli', 'cesaris'], points: 7, position: 9, wins: 0,
        color: '#900000', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1983, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['baldi', 'cesaris'], points: 18, position: 6, wins: 0,
        color: '#900000', sponsors: [], liveryColors: [],
        races: 15
      },
      {
        year: 1984, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['cheever', 'patrese'], points: 11, position: 8, wins: 0,
        color: '#900000', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1985, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['cheever', 'patrese'], points: 0, position: NaN, wins: 0,
        color: '#900000', sponsors: [], liveryColors: [],
        races: 16
      },]
  },
  {
    id: 'maserati',
    name: 'Maserati',
    fullName: 'Officine Alfieri Maserati',
    nationality: 'Italian',
    flag: '🇮🇹',
    color: '#C5172E',
    logoUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Maserati_logo.svg',
    founded: 1950,
    dissolved: 1960,
    bio: 'Fabricante italiano que compitió en los primeros años del campeonato con sus modelos 4CLT y, especialmente, el legendario 250F, con el que Juan Manuel Fangio conquistó su quinto título mundial en 1957. Se retiró de la competición oficial a finales de la década de 1950.',
    championships: 0,
    wins: 9,
    poles: 9,
    podiums: 20,
    basedIn: 'Módena, Italia',
    active: false,
    seasons: [
      {
        year: 1958, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['fangio', 'behra', 'schell', 'menditeguy', 'godia', 'gould', 'bonnier', 'scarlatti', 'gregory', 'trintignant', 'filippis', 'seidel', 'phil_hill', 'gerini', 'ruttman', 'shelby', 'herrmann', 'allison', 'cabianca'], points: 6, position: 5, wins: 0,
        color: '#C5172E', sponsors: [], liveryColors: [],
        races: 10
      },
      {
        year: 1959, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['scarlatti', 'beaufort', 'orey', 'fontes', 'cabianca', 'cade'], points: 0, position: NaN, wins: 0,
        color: '#C5172E', sponsors: [], liveryColors: [],
        races: 4
      },
      {
        year: 1960, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['munaron', 'estefano', 'chimeri', 'creus', 'scarlatti', 'gould', 'drake'], points: 0, position: NaN, wins: 0,
        color: '#C5172E', sponsors: [], liveryColors: [],
        races: 3
      },]
  },
  {
    id: 'brm',
    name: 'BRM',
    fullName: 'British Racing Motors',
    nationality: 'British',
    flag: '🇬🇧',
    color: '#004225',
    logoUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/BRM_logo.svg',
    founded: 1950,
    dissolved: 1977,
    bio: 'Proyecto nacional británico que buscaba devolver a Gran Bretaña a la cima del automovilismo. Tras años de dificultades, BRM logró el título de constructores en 1962 con Graham Hill al volante del icónico P57. Su V16 de los años 50 sigue siendo uno de los motores más extravagantes de la historia de la F1.',
    championships: 1,
    wins: 17,
    poles: 11,
    podiums: 37,
    basedIn: 'Bourne, Inglaterra',
    active: false,
    seasons: [
      {
        year: 1958, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['schell', 'behra', 'trintignant', 'bonnier', 'flockhart'], points: 18, position: 4, wins: 0,
        color: '#004225', sponsors: [], liveryColors: [],
        races: 9
      },
      {
        year: 1959, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['flockhart', 'schell', 'bonnier', 'moss', 'herrmann'], points: 18, position: 3, wins: 1,
        color: '#004225', sponsors: [], liveryColors: [],
        races: 7
      },
      {
        year: 1960, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['bonnier', 'hill', 'gurney'], points: 8, position: 4, wins: 0,
        color: '#004225', sponsors: [], liveryColors: [],
        races: 8
      },
      {
        year: 1961, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['brooks', 'hill'], points: 7, position: 5, wins: 0,
        color: '#004225', sponsors: [], liveryColors: [],
        races: 8
      },
      {
        year: 1962, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['hill', 'ginther', 'marsh', 'lewis', 'ashmore', 'johnstone'], points: 42, position: 1, wins: 4,
        color: '#004225', sponsors: [], liveryColors: [],
        races: 9
      },
      {
        year: 1963, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['hill', 'ginther', 'bandini', 'trintignant', 'solana'], points: 36, position: 2, wins: 2,
        color: '#004225', sponsors: [], liveryColors: [],
        races: 10
      },
      {
        year: 1964, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['hill', 'ginther', 'trintignant', 'baghetti', 'maggs', 'attwood'], points: 42, position: 2, wins: 2,
        color: '#004225', sponsors: [], liveryColors: [],
        races: 10
      },
      {
        year: 1965, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['hill', 'stewart', 'bianchi', 'gregory', 'bussinello', 'bassi'], points: 45, position: 2, wins: 3,
        color: '#004225', sponsors: [], liveryColors: [],
        races: 10
      },
      {
        year: 1966, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['stewart', 'hill', 'bondurant', 'vic_wilson', 'ireland'], points: 22, position: 4, wins: 1,
        color: '#004225', sponsors: [], liveryColors: [],
        races: 9
      },
      {
        year: 1967, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['spence', 'stewart', 'courage', 'irwin', 'hobbs'], points: 17, position: 6, wins: 0,
        color: '#004225', sponsors: [], liveryColors: [],
        races: 11
      },
      {
        year: 1968, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['rodriguez', 'spence', 'courage', 'attwood', 'unser'], points: 28, position: 5, wins: 0,
        color: '#004225', sponsors: [], liveryColors: [],
        races: 12
      },
      {
        year: 1969, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['oliver', 'surtees', 'rodriguez', 'brack', 'eaton'], points: 7, position: 5, wins: 0,
        color: '#004225', sponsors: [], liveryColors: [],
        races: 10
      },
      {
        year: 1970, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['rodriguez', 'eaton', 'oliver'], points: 23, position: 6, wins: 1,
        color: '#004225', sponsors: [], liveryColors: [],
        races: 13
      },
      {
        year: 1971, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['ganley', 'rodriguez', 'siffert', 'elford', 'gethin', 'marko', 'eaton', 'Cannoc'], points: 36, position: 2, wins: 2,
        color: '#004225', sponsors: [], liveryColors: [],
        races: 11
      },
      {
        year: 1972, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['ganley', 'marko', 'wisell', 'gethin', 'roig', 'beltoise', 'oliver', 'brack', 'redman'], points: 14, position: 7, wins: 1,
        color: '#004225', sponsors: [], liveryColors: [],
        races: 12
      },
      {
        year: 1973, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['regazzoni', 'beltoise', 'lauda', 'gethin'], points: 12, position: 7, wins: 0,
        color: '#004225', sponsors: [], liveryColors: [],
        races: 15
      },
      {
        year: 1974, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['beltoise', 'pescarolo', 'migault', 'amon'], points: 10, position: 7, wins: 0,
        color: '#004225', sponsors: [], liveryColors: [],
        races: 15
      },
      {
        year: 1975, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['wilds', 'evans'], points: 0, position: NaN, wins: 0,
        color: '#004225', sponsors: [], liveryColors: [],
        races: 10
      },
      {
        year: 1976, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['ashley'], points: 0, position: NaN, wins: 0,
        color: '#004225', sponsors: [], liveryColors: [],
        races: 1
      },
      {
        year: 1977, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['perkins'], points: 0, position: NaN, wins: 0,
        color: '#004225', sponsors: [], liveryColors: [],
        races: 2
      },]
  },
  {
    id: 'vanwall',
    name: 'Vanwall',
    fullName: 'Vandervell Products',
    nationality: 'British',
    flag: '🇬🇧',
    color: '#006633',
    founded: 1954,
    dissolved: 1958,
    bio: 'Equipo británico fundado por Tony Vandervell que ganó el primer Campeonato de Constructores de la historia en 1958, con pilotos como Stirling Moss y Tony Brooks. Tras ese histórico título, Vandervell se retiró de la competición por motivos de salud, dejando un legado breve pero trascendental.',
    championships: 1,
    wins: 9,
    poles: 7,
    podiums: 14,
    basedIn: 'Maidenhead, Inglaterra',
    active: false,
    seasons: [
      {
        year: 1958, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['moss', 'brooks', 'lewis-evans'], points: 48, position: 1, wins: 6,
        color: '#006633', sponsors: [], liveryColors: [],
        races: 9
      },]
  },
  {
    id: 'cooper',
    name: 'Cooper',
    fullName: 'Cooper Car Company',
    nationality: 'British',
    flag: '🇬🇧',
    color: '#004225',
    founded: 1947,
    dissolved: 1969,
    bio: 'Pionero de la revolución del motor central-trasero en la Fórmula 1, Cooper cambió para siempre el diseño de los monoplazas. Con Jack Brabham al volante, ganó los campeonatos de constructores y pilotos de 1959 y 1960, allanando el camino para la era moderna de la F1.',
    championships: 2,
    wins: 16,
    poles: 7,
    podiums: 40,
    basedIn: 'Surbiton, Inglaterra',
    active: false,
    seasons: [
      {
        year: 1958, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['moss', 'trintignant', 'jack_brabham', 'salvadori', 'burgess', 'mclaren', 'marsh', 'seidel', 'goethals', 'gibson', 'naylor', 'fairman', 'la_caze', 'guelfi', 'picard', 'bridger'], points: 31, position: 3, wins: 2,
        color: '#004225', sponsors: [], liveryColors: [],
        races: 10
      },
      {
        year: 1962, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['lewis'], points: 0, position: NaN, wins: 0,
        color: '#004225', sponsors: [], liveryColors: [],
        races: 1
      },]
  },
  {
    id: 'brabham',
    name: 'Brabham',
    fullName: 'Motor Racing Developments',
    nationality: 'British',
    flag: '🇬🇧',
    color: '#0046AD',
    logoUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Brabham_logo.svg',
    founded: 1962,
    dissolved: 1992,
    bio: 'Fundado por el triple campeón Jack Brabham, este equipo ganó los títulos de constructores de 1966 y 1967, y los de pilotos de Brabham, Rindt y Piquet. Bajo la propiedad de Bernie Ecclestone en los 70 y 80, fue pionero en innovaciones como el "coche ventilador" BT46B y los motores turbo BMW.',
    championships: 2,
    wins: 35,
    poles: 39,
    podiums: 115,
    basedIn: 'Chessington, Inglaterra',
    active: false,
    seasons: [
      {
        year: 1962, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['jack_brabham'], points: 6, position: 7, wins: 0,
        color: '#0046AD', sponsors: [], liveryColors: [],
        races: 3
      },
      {
        year: 1963, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['gurney', 'jack_brabham', 'prophet'], points: 28, position: 3, wins: 0,
        color: '#0046AD', sponsors: [], liveryColors: [],
        races: 10
      },
      {
        year: 1970, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['jack_brabham', 'klerk', 'stommelen', 'bell', 'hutchison'], points: 35, position: 4, wins: 1,
        color: '#0046AD', sponsors: [], liveryColors: [],
        races: 13
      },
      {
        year: 1971, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['hill', 'charlton', 'pretorius', 'schenken', 'craft'], points: 5, position: 9, wins: 0,
        color: '#0046AD', sponsors: [], liveryColors: [],
        races: 11
      },
      {
        year: 1972, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['reutemann', 'hill', 'wilson_fittipaldi'], points: 7, position: 9, wins: 0,
        color: '#0046AD', sponsors: [], liveryColors: [],
        races: 12
      },
      {
        year: 1973, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['wilson_fittipaldi', 'reutemann', 'adamich', 'watson', 'stommelen'], points: 22, position: 4, wins: 0,
        color: '#0046AD', sponsors: [], liveryColors: [],
        races: 15
      },
      {
        year: 1974, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['reutemann', 'watson', 'robarts', 'opel', 'pilette', 'larrousse', 'pace', 'wietzes'], points: 35, position: 5, wins: 3,
        color: '#0046AD', sponsors: [], liveryColors: [],
        races: 15
      },
      {
        year: 1975, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['reutemann', 'pace'], points: 54, position: 2, wins: 2,
        color: '#0046AD', sponsors: [], liveryColors: [],
        races: 14
      },
      {
        year: 1977, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['pace', 'watson', 'stuck'], points: 27, position: 5, wins: 0,
        color: '#0046AD', sponsors: [], liveryColors: [],
        races: 17
      },
      {
        year: 1978, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['lauda', 'watson', 'piquet'], points: 53, position: 3, wins: 2,
        color: '#0046AD', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1980, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['piquet', 'zunino', 'rebaque'], points: 55, position: 3, wins: 3,
        color: '#0046AD', sponsors: [], liveryColors: [],
        races: 14
      },
      {
        year: 1981, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['piquet', 'rebaque'], points: 61, position: 2, wins: 3,
        color: '#0046AD', sponsors: [], liveryColors: [],
        races: 15
      },
      {
        year: 1982, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['patrese', 'piquet'], points: 41, position: 5, wins: 2,
        color: '#0046AD', sponsors: [], liveryColors: [],
        races: 15
      },
      {
        year: 1983, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['piquet', 'patrese'], points: 72, position: 3, wins: 4,
        color: '#0046AD', sponsors: [], liveryColors: [],
        races: 15
      },
      {
        year: 1984, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['piquet', 'fabi', 'corrado_fabi', 'manfred_winkelhock'], points: 38, position: 4, wins: 2,
        color: '#0046AD', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1985, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['hesnault', 'piquet', 'surer'], points: 26, position: 5, wins: 1,
        color: '#0046AD', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1986, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['angelis', 'patrese', 'warwick'], points: 2, position: 9, wins: 0,
        color: '#0046AD', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1987, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['patrese', 'cesaris', 'modena'], points: 10, position: 8, wins: 0,
        color: '#0046AD', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1989, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['brundle', 'modena'], points: 8, position: 9, wins: 0,
        color: '#0046AD', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1990, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['modena', 'foitek', 'brabham'], points: 2, position: 10, wins: 0,
        color: '#0046AD', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1991, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['brundle', 'blundell'], points: 3, position: 10, wins: 0,
        color: '#0046AD', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1992, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['poele', 'damon_hill'], points: 0, position: NaN, wins: 0,
        color: '#0046AD', sponsors: [], liveryColors: [],
        races: 3
      },]
  },
  {
    id: 'tyrrell',
    name: 'Tyrrell',
    fullName: 'Tyrrell Racing Organisation',
    nationality: 'British',
    flag: '🇬🇧',
    color: '#003478',
    logoUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Tyrrell_Racing_logo.svg',
    founded: 1968,
    dissolved: 1998,
    bio: 'Equipo fundado por Ken Tyrrell que llevó a Jackie Stewart a sus tres títulos mundiales (1969, 1971, 1973), incluyendo el de constructores de 1971. Recordado también por el extravagante y experimental P34 de seis ruedas de mediados de los años 70. Fue adquirido por British American Tobacco para formar BAR en 1999.',
    championships: 1,
    wins: 23,
    poles: 14,
    podiums: 83,
    basedIn: 'Ockham, Inglaterra',
    active: false,
    seasons: [
      {
        year: 1970, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['stewart'], points: 0, position: NaN, wins: 0,
        color: '#003478', sponsors: [], liveryColors: [],
        races: 3
      },
      {
        year: 1971, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['stewart', 'cevert', 'revson'], points: 73, position: 1, wins: 7,
        color: '#003478', sponsors: [], liveryColors: [],
        races: 11
      },
      {
        year: 1972, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['stewart', 'cevert', 'depailler'], points: 51, position: 2, wins: 4,
        color: '#003478', sponsors: [], liveryColors: [],
        races: 12
      },
      {
        year: 1973, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['cevert', 'stewart', 'keizan', 'amon'], points: 80, position: 2, wins: 5,
        color: '#003478', sponsors: [], liveryColors: [],
        races: 15
      },
      {
        year: 1974, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['depailler', 'scheckter', 'keizan'], points: 51, position: 3, wins: 2,
        color: '#003478', sponsors: [], liveryColors: [],
        races: 15
      },
      {
        year: 1975, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['depailler', 'scheckter', 'ian_scheckter', 'jabouille', 'leclere'], points: 25, position: 5, wins: 1,
        color: '#003478', sponsors: [], liveryColors: [],
        races: 14
      },
      {
        year: 1976, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['depailler', 'scheckter', 'ian_scheckter', 'pesenti_rossi', 'stuppacher', 'hoshino'], points: 67, position: 3, wins: 1,
        color: '#003478', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1977, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['depailler', 'peterson', 'takahashi'], points: 27, position: 6, wins: 0,
        color: '#003478', sponsors: [], liveryColors: [],
        races: 17
      },
      {
        year: 1978, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['depailler', 'pironi'], points: 38, position: 4, wins: 1,
        color: '#003478', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1979, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['jarier', 'pironi', 'lees', 'daly'], points: 28, position: 5, wins: 0,
        color: '#003478', sponsors: [], liveryColors: [],
        races: 15
      },
      {
        year: 1980, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['daly', 'jarier', 'thackwell'], points: 12, position: 6, wins: 0,
        color: '#003478', sponsors: [], liveryColors: [],
        races: 14
      },
      {
        year: 1981, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['cheever', 'zunino', 'alboreto'], points: 10, position: 10, wins: 0,
        color: '#003478', sponsors: [], liveryColors: [],
        races: 15
      },
      {
        year: 1982, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['alboreto', 'borgudd', 'henton'], points: 25, position: 7, wins: 1,
        color: '#003478', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1983, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['sullivan', 'alboreto'], points: 12, position: 7, wins: 1,
        color: '#003478', sponsors: [], liveryColors: [],
        races: 15
      },
      {
        year: 1984, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['brundle', 'bellof', 'johansson'], points: 0, position: NaN, wins: 0,
        color: '#003478', sponsors: [], liveryColors: [],
        races: 13
      },
      {
        year: 1985, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['johansson', 'brundle', 'bellof', 'capelli', 'streiff'], points: 7, position: 9, wins: 0,
        color: '#003478', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1986, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['brundle', 'streiff'], points: 11, position: 7, wins: 0,
        color: '#003478', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1987, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['palmer', 'streiff'], points: 11, position: 6, wins: 0,
        color: '#003478', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1988, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['palmer', 'bailey'], points: 5, position: 8, wins: 0,
        color: '#003478', sponsors: [], liveryColors: [],
        races: 15
      },
      {
        year: 1989, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['palmer', 'alboreto', 'alesi', 'herbert'], points: 16, position: 5, wins: 0,
        color: '#003478', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1990, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['alesi', 'satoru_nakajima'], points: 16, position: 5, wins: 0,
        color: '#003478', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1991, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['modena', 'satoru_nakajima'], points: 12, position: 6, wins: 0,
        color: '#003478', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1992, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['grouillard', 'cesaris'], points: 8, position: 6, wins: 0,
        color: '#003478', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1993, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['katayama', 'cesaris'], points: 0, position: NaN, wins: 0,
        color: '#003478', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1994, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['katayama', 'blundell'], points: 13, position: 7, wins: 0,
        color: '#003478', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1995, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['salo', 'katayama', 'tarquini'], points: 5, position: 9, wins: 0,
        color: '#003478', sponsors: [], liveryColors: [],
        races: 17
      },
      {
        year: 1996, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['salo', 'katayama'], points: 5, position: 8, wins: 0,
        color: '#003478', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1997, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['salo', 'verstappen'], points: 2, position: 10, wins: 0,
        color: '#003478', sponsors: [], liveryColors: [],
        races: 17
      },
      {
        year: 1998, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['rosset', 'takagi'], points: 0, position: NaN, wins: 0,
        color: '#003478', sponsors: [], liveryColors: [],
        races: 16
      },]
  },
  {
    id: 'matra',
    name: 'Matra',
    fullName: 'Matra Sports',
    nationality: 'French',
    flag: '🇫🇷',
    color: '#003399',
    founded: 1965,
    dissolved: 1972,
    bio: 'Constructor francés que, en colaboración con Ken Tyrrell y Jackie Stewart, ganó el campeonato de constructores y pilotos de 1969 con el MS80. Posteriormente compitió con motor y chasis propios antes de retirarse de la F1 para centrarse en los prototipos de resistencia, donde ganó tres veces Le Mans.',
    championships: 1,
    wins: 9,
    poles: 8,
    podiums: 24,
    basedIn: 'Vélizy-Villacoublay, Francia',
    active: false,
    seasons: [
      {
        year: 1967, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['gavin', 'ickx', 'jo_schlesser'], points: 0, position: NaN, wins: 0,
        color: '#003399', sponsors: [], liveryColors: [],
        races: 2
      },
      {
        year: 1968, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['beltoise', 'pescarolo'], points: 8, position: 9, wins: 0,
        color: '#003399', sponsors: [], liveryColors: [],
        races: 10
      },
      {
        year: 1970, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['beltoise', 'pescarolo'], points: 23, position: 7, wins: 0,
        color: '#003399', sponsors: [], liveryColors: [],
        races: 13
      },
      {
        year: 1971, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['amon', 'beltoise'], points: 9, position: 7, wins: 0,
        color: '#003399', sponsors: [], liveryColors: [],
        races: 10
      },
      {
        year: 1972, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['amon'], points: 12, position: 8, wins: 0,
        color: '#003399', sponsors: [], liveryColors: [],
        races: 12
      },]
  },
  {
    id: 'march',
    name: 'March',
    fullName: 'March Engineering',
    nationality: 'British',
    flag: '🇬🇧',
    color: '#FF6600',
    logoUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/March_Engineering_logo.svg',
    founded: 1969,
    dissolved: 1992,
    bio: 'Constructor británico que debutó en 1970 suministrando chasis a varios equipos y pilotos privados a lo largo de más de dos décadas. Aunque nunca luchó por el título, fue una presencia habitual en la parrilla y una cantera de talento técnico para la F1 británica.',
    championships: 0,
    wins: 3,
    poles: 5,
    podiums: 20,
    basedIn: 'Bicester, Inglaterra',
    active: false,
    seasons: [
      {
        year: 1970, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['stewart', 'siffert', 'gavin', 'mario_andretti', 'amon', 'peterson', 'cevert'], points: 48, position: 3, wins: 1,
        color: '#FF6600', sponsors: [], liveryColors: [],
        races: 13
      },
      {
        year: 1972, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['peterson', 'pescarolo', 'lauda', 'stommelen', 'pace', 'beuttler', 'barber'], points: 15, position: 6, wins: 0,
        color: '#FF6600', sponsors: [], liveryColors: [],
        races: 12
      },
      {
        year: 1973, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['beuttler', 'jarier', 'pescarolo', 'hunt', 'purley', 'wisell', 'williamson'], points: 14, position: 5, wins: 0,
        color: '#FF6600', sponsors: [], liveryColors: [],
        races: 15
      },
      {
        year: 1974, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['ganley', 'stuck', 'hunt', 'brambilla', 'wisell'], points: 6, position: 9, wins: 0,
        color: '#FF6600', sponsors: [], liveryColors: [],
        races: 15
      },
      {
        year: 1975, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['brambilla', 'lombardi', 'donohue', 'stuck'], points: 7.5, position: 8, wins: 1,
        color: '#FF6600', sponsors: [], liveryColors: [],
        races: 14
      },
      {
        year: 1976, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['stuck', 'lombardi', 'brambilla', 'peterson', 'merzario'], points: 19, position: 7, wins: 1,
        color: '#FF6600', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1977, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['ian_scheckter', 'ribeiro', 'lunger', 'stuck', 'hayje', 'henton', 'neve', 'merzario'], points: 0, position: NaN, wins: 0,
        color: '#FF6600', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1981, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['salazar', 'daly'], points: 0, position: NaN, wins: 0,
        color: '#FF6600', sponsors: [], liveryColors: [],
        races: 9
      },
      {
        year: 1982, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['mass', 'boesel', 'keegan'], points: 0, position: NaN, wins: 0,
        color: '#FF6600', sponsors: [], liveryColors: [],
        races: 13
      },
      {
        year: 1987, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['capelli'], points: 1, position: 13, wins: 0,
        color: '#FF6600', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1988, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['capelli', 'gugelmin'], points: 22, position: 6, wins: 0,
        color: '#FF6600', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1989, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['gugelmin', 'capelli'], points: 4, position: 12, wins: 0,
        color: '#FF6600', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1992, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['wendlinger', 'belmondo', 'naspetti', 'lammers'], points: 3, position: 9, wins: 0,
        color: '#FF6600', sponsors: [], liveryColors: [],
        races: 16
      },]
  },
  {
    id: 'surtees',
    name: 'Surtees',
    fullName: 'Surtees Racing Organisation',
    nationality: 'British',
    flag: '🇬🇧',
    color: '#D4001A',
    founded: 1970,
    dissolved: 1978,
    bio: 'Escudería fundada por el campeón del mundo John Surtees, que compitió en F1 durante los años 70 con pilotos privados y de segunda fila. Nunca logró ganar una carrera, pero formó parte habitual del pelotón durante esa década.',
    championships: 0,
    wins: 0,
    poles: 0,
    podiums: 1,
    basedIn: 'Edenbridge, Inglaterra',
    active: false,
    seasons: [
      {
        year: 1970, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['surtees', 'bell'], points: 3, position: 8, wins: 0,
        color: '#D4001A', sponsors: [], liveryColors: [],
        races: 7
      },
      {
        year: 1971, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['redman', 'stommelen', 'surtees', 'lennep', 'bell', 'hailwood', 'posey'], points: 8, position: 8, wins: 0,
        color: '#D4001A', sponsors: [], liveryColors: [],
        races: 11
      },
      {
        year: 1972, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['schenken', 'adamich', 'love', 'hailwood', 'surtees', 'posey'], points: 18, position: 5, wins: 0,
        color: '#D4001A', sponsors: [], liveryColors: [],
        races: 12
      },
      {
        year: 1973, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['hailwood', 'pace', 'bueno', 'adamich', 'mass'], points: 7, position: 9, wins: 0,
        color: '#D4001A', sponsors: [], liveryColors: [],
        races: 15
      },
      {
        year: 1974, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['pace', 'mass', 'kinnunen', 'bell', 'quester', 'koinigg', 'dolhem'], points: 3, position: 11, wins: 0,
        color: '#D4001A', sponsors: [], liveryColors: [],
        races: 14
      },
      {
        year: 1975, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['watson', 'morgan'], points: 0, position: NaN, wins: 0,
        color: '#D4001A', sponsors: [], liveryColors: [],
        races: 11
      },
      {
        year: 1976, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['lunger', 'jones', 'pescarolo', 'andersson', 'takahara'], points: 7, position: 10, wins: 0,
        color: '#D4001A', sponsors: [], liveryColors: [],
        races: 15
      },
      {
        year: 1977, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['brambilla', 'binder', 'perkins', 'schuppan'], points: 6, position: 11, wins: 0,
        color: '#D4001A', sponsors: [], liveryColors: [],
        races: 17
      },
      {
        year: 1978, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['brambilla', 'keegan', 'arnoux'], points: 1, position: 13, wins: 0,
        color: '#D4001A', sponsors: [], liveryColors: [],
        races: 15
      },]
  },
  {
    id: 'shadow',
    name: 'Shadow',
    fullName: 'Shadow Racing Cars',
    nationality: 'British',
    flag: '🇬🇧',
    color: '#1A1A1A',
    logoUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Shadow_Racing_Cars_logo.png',
    founded: 1973,
    dissolved: 1980,
    bio: 'Equipo de origen estadounidense afincado en Inglaterra, conocido por sus llamativos coches negros. Logró su única victoria en el GP de Austria de 1977 con Alan Jones. Varios de sus integrantes técnicos abandonaron el equipo para fundar Arrows en 1977.',
    championships: 0,
    wins: 1,
    poles: 1,
    podiums: 10,
    basedIn: 'Northampton, Inglaterra',
    active: false,
    seasons: [
      {
        year: 1973, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['follmer', 'oliver', 'hill', 'redman'], points: 9, position: 8, wins: 0,
        color: '#1A1A1A', sponsors: [], liveryColors: [],
        races: 13
      },
      {
        year: 1974, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['revson', 'jarier', 'redman', 'roos', 'pryce'], points: 7, position: 8, wins: 0,
        color: '#1A1A1A', sponsors: [], liveryColors: [],
        races: 14
      },
      {
        year: 1976, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['pryce', 'jarier'], points: 10, position: 8, wins: 0,
        color: '#1A1A1A', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1977, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['pryce', 'zorzi', 'jones', 'patrese', 'oliver', 'merzario', 'jarier'], points: 23, position: 7, wins: 1,
        color: '#1A1A1A', sponsors: [], liveryColors: [],
        races: 17
      },
      {
        year: 1978, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['regazzoni', 'stuck'], points: 6, position: 11, wins: 0,
        color: '#1A1A1A', sponsors: [], liveryColors: [],
        races: 15
      },
      {
        year: 1979, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['angelis', 'lammers'], points: 3, position: 10, wins: 0,
        color: '#1A1A1A', sponsors: [], liveryColors: [],
        races: 14
      },
      {
        year: 1980, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['lees'], points: 0, position: NaN, wins: 0,
        color: '#1A1A1A', sponsors: [], liveryColors: [],
        races: 1
      },]
  },
  {
    id: 'ligier',
    name: 'Ligier',
    fullName: 'Equipe Ligier',
    nationality: 'French',
    flag: '🇫🇷',
    color: '#003399',
    logoUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ligier_logo.svg',
    founded: 1976,
    dissolved: 1996,
    bio: 'Equipo francés fundado por el expiloto Guy Ligier, símbolo del orgullo automovilístico galo durante los años 70, 80 y 90. Logró nueve victorias, la mayoría con motores Matra y Renault, antes de ser vendido y transformarse en Prost Grand Prix.',
    championships: 0,
    wins: 9,
    poles: 9,
    podiums: 40,
    basedIn: 'Vichy / Magny-Cours, Francia',
    active: false,
    seasons: [
      {
        year: 1976, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['laffite'], points: 20, position: 6, wins: 0,
        color: '#003399', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1977, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['laffite', 'jarier'], points: 18, position: 8, wins: 1,
        color: '#003399', sponsors: [], liveryColors: [],
        races: 17
      },
      {
        year: 1978, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['laffite'], points: 19, position: 6, wins: 0,
        color: '#003399', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1979, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['laffite', 'depailler', 'ickx'], points: 61, position: 3, wins: 3,
        color: '#003399', sponsors: [], liveryColors: [],
        races: 15
      },
      {
        year: 1980, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['laffite', 'pironi'], points: 66, position: 2, wins: 2,
        color: '#003399', sponsors: [], liveryColors: [],
        races: 14
      },
      {
        year: 1981, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['jarier', 'laffite', 'jabouille', 'tambay'], points: 44, position: 4, wins: 2,
        color: '#003399', sponsors: [], liveryColors: [],
        races: 15
      },
      {
        year: 1982, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['laffite', 'cheever'], points: 20, position: 8, wins: 0,
        color: '#003399', sponsors: [], liveryColors: [],
        races: 15
      },
      {
        year: 1983, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['boesel', 'jarier'], points: 0, position: NaN, wins: 0,
        color: '#003399', sponsors: [], liveryColors: [],
        races: 15
      },
      {
        year: 1984, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['cesaris', 'hesnault'], points: 3, position: 10, wins: 0,
        color: '#003399', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1985, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['laffite', 'cesaris', 'streiff'], points: 23, position: 6, wins: 0,
        color: '#003399', sponsors: [], liveryColors: [],
        races: 15
      },
      {
        year: 1986, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['laffite', 'arnoux', 'alliot'], points: 29, position: 5, wins: 0,
        color: '#003399', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1987, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['ghinzani', 'arnoux'], points: 1, position: 11, wins: 0,
        color: '#003399', sponsors: [], liveryColors: [],
        races: 15
      },
      {
        year: 1988, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['johansson', 'arnoux'], points: 0, position: NaN, wins: 0,
        color: '#003399', sponsors: [], liveryColors: [],
        races: 14
      },
      {
        year: 1989, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['grouillard', 'arnoux'], points: 3, position: 14, wins: 0,
        color: '#003399', sponsors: [], liveryColors: [],
        races: 14
      },
      {
        year: 1990, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['larini', 'alliot'], points: 0, position: NaN, wins: 0,
        color: '#003399', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1991, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['boutsen', 'comas'], points: 0, position: NaN, wins: 0,
        color: '#003399', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1992, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['comas', 'boutsen'], points: 6, position: 8, wins: 0,
        color: '#003399', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1993, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['blundell', 'brundle'], points: 23, position: 5, wins: 0,
        color: '#003399', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1994, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['panis', 'bernard', 'herbert', 'lagorce'], points: 13, position: 6, wins: 0,
        color: '#003399', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1995, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['suzuki', 'panis', 'brundle'], points: 24, position: 5, wins: 0,
        color: '#003399', sponsors: [], liveryColors: [],
        races: 17
      },
      {
        year: 1996, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['panis', 'diniz'], points: 15, position: 6, wins: 1,
        color: '#003399', sponsors: [], liveryColors: [],
        races: 16
      },]
  },
  {
    id: 'arrows',
    name: 'Arrows',
    fullName: 'Arrows Grand Prix International',
    nationality: 'British',
    flag: '🇬🇧',
    color: '#FF8000',
    logoUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Arrows_Grand_Prix_International_logo.svg',
    founded: 1977,
    dissolved: 2002,
    bio: 'Equipo independiente que compitió durante 25 temporadas sin lograr nunca una victoria, pero protagonizando momentos memorables como la pole de Damon Hill en Hungría 1997. Quebró económicamente a finales de 2002 tras dos décadas y media en la parrilla.',
    championships: 0,
    wins: 0,
    poles: 1,
    podiums: 4,
    basedIn: 'Milton Keynes, Inglaterra',
    active: false,
    seasons: [
      {
        year: 1978, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['patrese', 'stommelen'], points: 11, position: 10, wins: 0,
        color: '#FF8000', sponsors: [], liveryColors: [],
        races: 15
      },
      {
        year: 1979, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['mass', 'patrese'], points: 5, position: 9, wins: 0,
        color: '#FF8000', sponsors: [], liveryColors: [],
        races: 15
      },
      {
        year: 1980, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['patrese', 'mass'], points: 11, position: 7, wins: 0,
        color: '#FF8000', sponsors: [], liveryColors: [],
        races: 14
      },
      {
        year: 1981, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['patrese', 'stohr'], points: 10, position: 8, wins: 0,
        color: '#FF8000', sponsors: [], liveryColors: [],
        races: 15
      },
      {
        year: 1982, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['baldi', 'henton', 'surer'], points: 5, position: 10, wins: 0,
        color: '#FF8000', sponsors: [], liveryColors: [],
        races: 14
      },
      {
        year: 1983, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['surer', 'serra', 'jones', 'boutsen'], points: 4, position: 10, wins: 0,
        color: '#FF8000', sponsors: [], liveryColors: [],
        races: 15
      },
      {
        year: 1984, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['boutsen', 'surer'], points: 6, position: 9, wins: 0,
        color: '#FF8000', sponsors: [], liveryColors: [],
        races: 15
      },
      {
        year: 1985, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['boutsen', 'berger'], points: 14, position: 8, wins: 0,
        color: '#FF8000', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1986, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['boutsen', 'surer', 'danner'], points: 1, position: 10, wins: 0,
        color: '#FF8000', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1987, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['cheever', 'warwick'], points: 11, position: 7, wins: 0,
        color: '#FF8000', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1988, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['warwick', 'cheever'], points: 23, position: 5, wins: 0,
        color: '#FF8000', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1989, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['warwick', 'cheever', 'donnelly'], points: 13, position: 7, wins: 0,
        color: '#FF8000', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1990, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['alboreto', 'schneider', 'caffi'], points: 2, position: 9, wins: 0,
        color: '#FF8000', sponsors: [], liveryColors: [],
        races: 14
      },
      {
        year: 1997, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['diniz', 'damon_hill'], points: 9, position: 8, wins: 0,
        color: '#FF8000', sponsors: [], liveryColors: [],
        races: 17
      },
      {
        year: 1998, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['salo', 'diniz'], points: 6, position: 7, wins: 0,
        color: '#FF8000', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1999, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['rosa', 'takagi'], points: 1, position: 9, wins: 0,
        color: '#FF8000', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 2000, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['verstappen', 'rosa'], points: 7, position: 7, wins: 0,
        color: '#FF8000', sponsors: [], liveryColors: [],
        races: 17
      },
      {
        year: 2001, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['verstappen', 'bernoldi'], points: 1, position: 10, wins: 0,
        color: '#FF8000', sponsors: [], liveryColors: [],
        races: 17
      },
      {
        year: 2002, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['frentzen', 'bernoldi'], points: 2, position: 11, wins: 0,
        color: '#FF8000', sponsors: [], liveryColors: [],
        races: 11
      },]
  },
  {
    id: 'minardi',
    name: 'Minardi',
    fullName: 'Minardi Team',
    nationality: 'Italian',
    flag: '🇮🇹',
    color: '#1E1E5A',
    logoUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Minardi_logo.svg',
    founded: 1985,
    dissolved: 2005,
    bio: 'Equipo italiano modesto pero querido, conocido como una "escuela" para jóvenes pilotos y carismático por su espíritu de underdog. Su mejor resultado fue el podio de Jarno Trulli (más tarde reclasificado a Fisichella) en el GP de Brasil de 2003. Fue adquirido por Red Bull en 2006 para crear Toro Rosso.',
    championships: 0,
    wins: 0,
    poles: 0,
    podiums: 1,
    basedIn: 'Faenza, Italia',
    active: false,
    seasons: [
      {
        year: 1985, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['martini'], points: 0, position: NaN, wins: 0,
        color: '#1E1E5A', sponsors: [], liveryColors: [],
        races: 15
      },
      {
        year: 1986, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['nannini', 'cesaris'], points: 0, position: NaN, wins: 0,
        color: '#1E1E5A', sponsors: [], liveryColors: [],
        races: 15
      },
      {
        year: 1987, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['nannini', 'campos'], points: 0, position: NaN, wins: 0,
        color: '#1E1E5A', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1988, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['sala', 'campos', 'martini'], points: 1, position: 10, wins: 0,
        color: '#1E1E5A', sponsors: [], liveryColors: [],
        races: 14
      },
      {
        year: 1989, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['martini', 'sala', 'barilla'], points: 6, position: 11, wins: 0,
        color: '#1E1E5A', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1990, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['martini', 'barilla', 'morbidelli'], points: 0, position: NaN, wins: 0,
        color: '#1E1E5A', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1991, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['martini', 'morbidelli', 'moreno'], points: 6, position: 7, wins: 0,
        color: '#1E1E5A', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1992, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['morbidelli', 'fittipaldi', 'zanardi'], points: 1, position: 12, wins: 0,
        color: '#1E1E5A', sponsors: [], liveryColors: [],
        races: 15
      },
      {
        year: 1993, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['fittipaldi', 'barbazza', 'martini', 'gounon'], points: 7, position: 8, wins: 0,
        color: '#1E1E5A', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1994, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['martini', 'alboreto'], points: 5, position: 10, wins: 0,
        color: '#1E1E5A', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1995, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['badoer', 'martini', 'lamy'], points: 1, position: 10, wins: 0,
        color: '#1E1E5A', sponsors: [], liveryColors: [],
        races: 17
      },
      {
        year: 1996, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['lamy', 'fisichella', 'marques', 'lavaggi'], points: 0, position: NaN, wins: 0,
        color: '#1E1E5A', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1997, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['trulli', 'katayama', 'marques'], points: 0, position: NaN, wins: 0,
        color: '#1E1E5A', sponsors: [], liveryColors: [],
        races: 17
      },
      {
        year: 1998, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['tuero', 'nakano'], points: 0, position: NaN, wins: 0,
        color: '#1E1E5A', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1999, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['badoer', 'gene', 'sarrazin'], points: 1, position: 10, wins: 0,
        color: '#1E1E5A', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 2000, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['gene', 'mazzacane'], points: 0, position: NaN, wins: 0,
        color: '#1E1E5A', sponsors: [], liveryColors: [],
        races: 17
      },
      {
        year: 2001, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['alonso', 'marques', 'yoong'], points: 0, position: NaN, wins: 0,
        color: '#1E1E5A', sponsors: [], liveryColors: [],
        races: 17
      },
      {
        year: 2002, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['webber', 'yoong', 'davidson'], points: 2, position: 9, wins: 0,
        color: '#1E1E5A', sponsors: [], liveryColors: [],
        races: 17
      },
      {
        year: 2003, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['verstappen', 'wilson', 'kiesa'], points: 0, position: 10, wins: 0,
        color: '#1E1E5A', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 2004, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['bruni', 'baumgartner'], points: 1, position: 10, wins: 0,
        color: '#1E1E5A', sponsors: [], liveryColors: [],
        races: 18
      },
      {
        year: 2005, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['friesacher', 'albers', 'doornbos'], points: 7, position: 10, wins: 0,
        color: '#1E1E5A', sponsors: [], liveryColors: [],
        races: 19
      },]
  },
  {
    id: 'benetton',
    name: 'Benetton',
    fullName: 'Benetton Formula Ltd',
    nationality: 'Italian',
    flag: '🇮🇹',
    color: '#00A651',
    logoUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Benetton_Formula_logo.svg',
    founded: 1986,
    dissolved: 2001,
    bio: 'Equipo respaldado por la marca de moda italiana, que llevó a Michael Schumacher a sus dos primeros títulos mundiales en 1994 y 1995, ganando también el de constructores en 1995. Su base en Enstone y gran parte de su personal continuaron como Renault tras su venta en 2000.',
    championships: 2,
    wins: 27,
    poles: 15,
    podiums: 78,
    basedIn: 'Enstone, Inglaterra',
    active: false,
    seasons: [
      {
        year: 1986, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['berger', 'fabi'], points: 19, position: 6, wins: 1,
        color: '#00A651', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1987, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['boutsen', 'fabi'], points: 28, position: 5, wins: 0,
        color: '#00A651', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1988, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['boutsen', 'nannini'], points: 39, position: 3, wins: 0,
        color: '#00A651', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1989, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['herbert', 'nannini', 'pirro'], points: 39, position: 4, wins: 1,
        color: '#00A651', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1990, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['piquet', 'nannini', 'moreno'], points: 71, position: 3, wins: 2,
        color: '#00A651', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1991, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['piquet', 'moreno', 'michael_schumacher'], points: 38.5, position: 4, wins: 1,
        color: '#00A651', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1992, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['michael_schumacher', 'brundle'], points: 91, position: 3, wins: 1,
        color: '#00A651', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1993, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['patrese', 'michael_schumacher'], points: 72, position: 3, wins: 1,
        color: '#00A651', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1994, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['michael_schumacher', 'verstappen', 'lehto', 'herbert'], points: 103, position: 2, wins: 8,
        color: '#00A651', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1995, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['michael_schumacher', 'herbert'], points: 147, position: 1, wins: 11,
        color: '#00A651', sponsors: [], liveryColors: [],
        races: 17
      },
      {
        year: 1996, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['berger', 'alesi'], points: 68, position: 3, wins: 0,
        color: '#00A651', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1997, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['berger', 'alesi', 'wurz'], points: 67, position: 3, wins: 1,
        color: '#00A651', sponsors: [], liveryColors: [],
        races: 17
      },
      {
        year: 1998, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['wurz', 'fisichella'], points: 33, position: 5, wins: 0,
        color: '#00A651', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1999, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['fisichella', 'wurz'], points: 16, position: 6, wins: 0,
        color: '#00A651', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 2000, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['fisichella', 'wurz'], points: 20, position: 4, wins: 0,
        color: '#00A651', sponsors: [], liveryColors: [],
        races: 17
      },
      {
        year: 2001, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['fisichella', 'button'], points: 10, position: 7, wins: 0,
        color: '#00A651', sponsors: [], liveryColors: [],
        races: 17
      },]
  },
  {
    id: 'jordan',
    name: 'Jordan',
    fullName: 'Jordan Grand Prix',
    nationality: 'Irish',
    flag: '🇮🇪',
    color: '#FFD700',
    logoUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Jordan_Grand_Prix_logo.svg',
    founded: 1991,
    dissolved: 2005,
    bio: 'Fundado por el irlandés Eddie Jordan, fue uno de los equipos privados más carismáticos de los 90 y 2000, famoso por su llamativa librea amarilla y verde. Logró cuatro victorias, destacando el doblete en el GP de Bélgica de 1998. Fue vendido en 2005 y se convirtió en Midland F1.',
    championships: 0,
    wins: 4,
    poles: 2,
    podiums: 19,
    basedIn: 'Silverstone, Inglaterra',
    active: false,
    seasons: [
      {
        year: 1991, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['gachot', 'cesaris', 'michael_schumacher', 'moreno', 'zanardi'], points: 13, position: 5, wins: 0,
        color: '#FFD700', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1992, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['gugelmin', 'modena'], points: 1, position: 11, wins: 0,
        color: '#FFD700', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1993, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['barrichello', 'capelli', 'boutsen', 'apicella', 'naspetti', 'irvine'], points: 3, position: 11, wins: 0,
        color: '#FFD700', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1994, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['barrichello', 'irvine', 'suzuki', 'cesaris'], points: 28, position: 5, wins: 0,
        color: '#FFD700', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1995, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['barrichello', 'irvine'], points: 21, position: 6, wins: 0,
        color: '#FFD700', sponsors: [], liveryColors: [],
        races: 17
      },
      {
        year: 1996, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['barrichello', 'brundle'], points: 22, position: 5, wins: 0,
        color: '#FFD700', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1997, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['fisichella', 'ralf_schumacher'], points: 33, position: 5, wins: 0,
        color: '#FFD700', sponsors: [], liveryColors: [],
        races: 17
      },
      {
        year: 1998, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['damon_hill', 'ralf_schumacher'], points: 34, position: 4, wins: 1,
        color: '#FFD700', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 1999, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['frentzen', 'damon_hill'], points: 61, position: 3, wins: 2,
        color: '#FFD700', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 2000, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['frentzen', 'trulli'], points: 17, position: 6, wins: 0,
        color: '#FFD700', sponsors: [], liveryColors: [],
        races: 17
      },
      {
        year: 2001, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['frentzen', 'trulli', 'zonta', 'alesi'], points: 19, position: 5, wins: 0,
        color: '#FFD700', sponsors: [], liveryColors: [],
        races: 17
      },
      {
        year: 2002, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['sato', 'fisichella'], points: 9, position: 6, wins: 0,
        color: '#FFD700', sponsors: [], liveryColors: [],
        races: 17
      },
      {
        year: 2003, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['fisichella', 'firman', 'baumgartner'], points: 13, position: 9, wins: 1,
        color: '#FFD700', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 2004, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['pantano', 'heidfeld', 'glock'], points: 5, position: 9, wins: 0,
        color: '#FFD700', sponsors: [], liveryColors: [],
        races: 18
      },
      {
        year: 2005, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['karthikeyan', 'monteiro'], points: 12, position: 9, wins: 0,
        color: '#FFD700', sponsors: [], liveryColors: [],
        races: 19
      },]
  },
  {
    id: 'bar',
    name: 'BAR',
    fullName: 'British American Racing',
    nationality: 'British',
    flag: '🇬🇧',
    color: '#FFFFFF',
    logoUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/BAR_logo.svg',
    founded: 1999,
    dissolved: 2005,
    bio: 'Equipo financiado por British American Tobacco, formado a partir de la estructura de Tyrrell. Su mejor temporada fue 2004, terminando segundo en el campeonato de constructores con Jenson Button, aunque sin lograr ninguna victoria. En 2006 pasó a manos de Honda.',
    championships: 0,
    wins: 0,
    poles: 0,
    podiums: 16,
    basedIn: 'Brackley, Inglaterra',
    active: false,
    seasons: [
      {
        year: 1999, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['zonta', 'villeneuve', 'salo'], points: 0, position: NaN, wins: 0,
        color: '#FFFFFF', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 2000, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['villeneuve', 'zonta'], points: 20, position: 5, wins: 0,
        color: '#FFFFFF', sponsors: [], liveryColors: [],
        races: 17
      },
      {
        year: 2001, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['panis', 'villeneuve'], points: 17, position: 6, wins: 0,
        color: '#FFFFFF', sponsors: [], liveryColors: [],
        races: 17
      },
      {
        year: 2002, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['villeneuve', 'panis'], points: 7, position: 8, wins: 0,
        color: '#FFFFFF', sponsors: [], liveryColors: [],
        races: 17
      },
      {
        year: 2003, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['villeneuve', 'button', 'sato'], points: 26, position: 5, wins: 0,
        color: '#FFFFFF', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 2004, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['button', 'sato'], points: 119, position: 2, wins: 0,
        color: '#FFFFFF', sponsors: [], liveryColors: [],
        races: 18
      },
      {
        year: 2005, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['button', 'sato', 'davidson'], points: 38, position: 6, wins: 0,
        color: '#FFFFFF', sponsors: [], liveryColors: [],
        races: 17
      },]
  },
  {
    id: 'brawn',
    name: 'Brawn GP',
    fullName: 'Brawn GP Formula One Team',
    nationality: 'British',
    flag: '🇬🇧',
    color: '#BFD730',
    logoUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Brawn_GP_logo.svg',
    founded: 2009,
    dissolved: 2009,
    bio: 'Una de las grandes historias de la F1 moderna: tras la retirada de Honda a finales de 2008, Ross Brawn compró el equipo por una libra simbólica y, con el revolucionario doble difusor del BGP 001, ganó ambos campeonatos del mundo de 2009 con Jenson Button en su única temporada de existencia antes de ser absorbido por Mercedes.',
    championships: 1,
    wins: 8,
    poles: 6,
    podiums: 15,
    basedIn: 'Brackley, Inglaterra',
    active: false,
    seasons: [
      {
        year: 2009, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['button', 'barrichello'], points: 172, position: 1, wins: 8,
        color: '#BFD730', sponsors: [], liveryColors: [],
        races: 17
      },]
  },
  {
    id: 'hrt',
    name: 'HRT',
    fullName: 'Hispania Racing Team',
    nationality: 'Spanish',
    flag: '🇪🇸',
    color: '#9B111E',
    logoUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/HRT_Formula_1_Team_logo.png',
    founded: 2010,
    dissolved: 2012,
    bio: 'Primer equipo español de la historia de la Fórmula 1, surgido junto a Lotus, Virgin y Caterham en la oleada de nuevos equipos de 2010. Con recursos muy limitados, nunca puntuó y desapareció a finales de 2012.',
    championships: 0,
    wins: 0,
    poles: 0,
    podiums: 0,
    basedIn: 'Madrid, España',
    active: false,
    seasons: [
      {
        year: 2010, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['bruno_senna', 'chandhok', 'yamamoto', 'klien'], points: 0, position: 11, wins: 0,
        color: '#9B111E', sponsors: [], liveryColors: [],
        races: 19
      },
      {
        year: 2011, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['liuzzi', 'karthikeyan', 'ricciardo'], points: 0, position: 11, wins: 0,
        color: '#9B111E', sponsors: [], liveryColors: [],
        races: 18
      },
      {
        year: 2012, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['karthikeyan', 'rosa'], points: 0, position: 12, wins: 0,
        color: '#9B111E', sponsors: [], liveryColors: [],
        races: 19
      },]
  },
  {
    id: 'caterham',
    name: 'Caterham',
    fullName: 'Caterham F1 Team',
    nationality: 'Malaysian',
    flag: '🇲🇾',
    color: '#006633',
    logoUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Caterham_F1_Team_logo.svg',
    founded: 2010,
    dissolved: 2014,
    bio: 'Originalmente Lotus Racing, rebautizado como Caterham en 2012 bajo la propiedad del empresario Tony Fernandes. Como el resto de equipos nuevos de 2010, nunca consiguió puntuar y se declaró en quiebra a finales de 2014.',
    championships: 0,
    wins: 0,
    poles: 0,
    podiums: 0,
    basedIn: 'Leafield, Inglaterra',
    active: false,
    seasons: [
      {
        year: 2012, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['kovalainen', 'petrov'], points: 0, position: 10, wins: 0,
        color: '#006633', sponsors: [], liveryColors: [],
        races: 20
      },
      {
        year: 2013, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['pic', 'garde'], points: 0, position: 11, wins: 0,
        color: '#006633', sponsors: [], liveryColors: [],
        races: 19
      },
      {
        year: 2014, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['ericsson', 'kobayashi', 'lotterer', 'stevens'], points: 0, position: 11, wins: 0,
        color: '#006633', sponsors: [], liveryColors: [],
        races: 17
      },]
  },
  {
    id: 'marussia',
    name: 'Marussia / Manor',
    fullName: 'Marussia F1 Team / Manor Racing',
    nationality: 'British',
    flag: '🇬🇧',
    color: '#6E0E1E',
    logoUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Marussia_F1_Team_logo.svg',
    founded: 2010,
    dissolved: 2016,
    bio: 'Equipo surgido como Virgin Racing en 2010, rebautizado Marussia en 2012 y finalmente Manor Racing tras su quiebra a finales de 2014. Logró su único resultado destacado con el noveno puesto de Jules Bianchi en Mónaco 2014, antes de cerrar definitivamente al término de 2016.',
    championships: 0,
    wins: 0,
    poles: 0,
    podiums: 0,
    basedIn: 'Banbury, Inglaterra',
    active: false,
    seasons: [
      {
        year: 2012, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['glock', 'pic'], points: 0, position: 11, wins: 0,
        color: '#6E0E1E', sponsors: [], liveryColors: [],
        races: 20
      },
      {
        year: 2013, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['jules_bianchi', 'chilton'], points: 0, position: 10, wins: 0,
        color: '#6E0E1E', sponsors: [], liveryColors: [],
        races: 19
      },
      {
        year: 2014, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['chilton', 'jules_bianchi'], points: 2, position: 9, wins: 0,
        color: '#6E0E1E', sponsors: [], liveryColors: [],
        races: 16
      },
      {
        year: 2016, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['wehrlein', 'haryanto', 'ocon'], points: 1, position: 11, wins: 0,
        color: '#6E0E1E', sponsors: [], liveryColors: [],
        races: 21
      },]
  },
  {
    id: 'force_india',
    name: 'Force India / Racing Point',
    fullName: 'Sahara Force India / Racing Point F1 Team',
    nationality: 'Indian',
    flag: '🇮🇳',
    color: '#F596C8',
    logoUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Force_India.svg',
    founded: 2008,
    dissolved: 2020,
    bio: 'Equipo fundado por el empresario indio Vijay Mallya sobre la base de Jordan/Spyker, conocido por rendir muy por encima de su presupuesto durante años. Tras pasar por una administración judicial, fue adquirido por Lawrence Stroll en 2018 y rebautizado Racing Point antes de convertirse en Aston Martin en 2021.',
    championships: 0,
    wins: 0,
    poles: 1,
    podiums: 17,
    basedIn: 'Silverstone, Inglaterra',
    active: false,
    seasons: [
      {
        year: 2008, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['sutil', 'fisichella'], points: 0, position: 10, wins: 0,
        color: '#F596C8', sponsors: [], liveryColors: [],
        races: 18
      },
      {
        year: 2009, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['sutil', 'fisichella', 'liuzzi'], points: 13, position: 9, wins: 0,
        color: '#F596C8', sponsors: [], liveryColors: [],
        races: 17
      },
      {
        year: 2010, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['liuzzi', 'sutil'], points: 68, position: 7, wins: 0,
        color: '#F596C8', sponsors: [], liveryColors: [],
        races: 19
      },
      {
        year: 2011, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['sutil', 'resta'], points: 69, position: 6, wins: 0,
        color: '#F596C8', sponsors: [], liveryColors: [],
        races: 19
      },
      {
        year: 2012, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['resta', 'hulkenberg'], points: 109, position: 7, wins: 0,
        color: '#F596C8', sponsors: [], liveryColors: [],
        races: 20
      },
      {
        year: 2013, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['sutil', 'resta'], points: 77, position: 6, wins: 0,
        color: '#F596C8', sponsors: [], liveryColors: [],
        races: 19
      },
      {
        year: 2014, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['hulkenberg', 'perez'], points: 155, position: 6, wins: 0,
        color: '#F596C8', sponsors: [], liveryColors: [],
        races: 19
      },
      {
        year: 2015, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['hulkenberg', 'perez'], points: 136, position: 5, wins: 0,
        color: '#F596C8', sponsors: [], liveryColors: [],
        races: 19
      },
      {
        year: 2016, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['hulkenberg', 'perez'], points: 173, position: 4, wins: 0,
        color: '#F596C8', sponsors: [], liveryColors: [],
        races: 21
      },
      {
        year: 2017, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['perez', 'ocon'], points: 187, position: 4, wins: 0,
        color: '#F596C8', sponsors: [], liveryColors: [],
        races: 20
      },
      {
        year: 2018, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['perez', 'ocon'], points: 111, position: 5, wins: 0,
        color: '#F596C8', sponsors: [], liveryColors: [],
        races: 21
      },
      {
        year: 2019, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['stroll', 'perez'], points: 73, position: 7, wins: 0,
        color: '#F596C8', sponsors: [], liveryColors: [],
        races: 21
      },
      {
        year: 2020, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['perez', 'stroll', 'hulkenberg'], points: 195, position: 4, wins: 1,
        color: '#F596C8', sponsors: [], liveryColors: [],
        races: 17
      },]
  },
  {
    id: 'toro_rosso',
    name: 'Toro Rosso / AlphaTauri / RB',
    fullName: 'Scuderia Toro Rosso / Scuderia AlphaTauri / Visa Cash App RB',
    nationality: 'Italian',
    flag: '🇮🇹',
    color: '#00293F',
    logoUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Scuderia_Toro_Rosso_Logo.svg',
    founded: 2006,
    bio: 'Segundo equipo del grupo Red Bull, nacido en 2006 sobre la antigua estructura de Minardi en Faenza. Concebido como cantera de jóvenes talentos (Vettel, Ricciardo, Verstappen, entre otros), logró victorias sorpresa en Monza en 2008 y 2020. Ha cambiado de nombre a AlphaTauri (2020) y Racing Bulls (2024).',
    championships: 0,
    wins: 2,
    poles: 1,
    podiums: 4,
    basedIn: 'Faenza, Italia',
    active: true,
    seasons: [
      {
        year: 2006, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['liuzzi', 'speed'], points: 1, position: 9, wins: 0,
        color: '#00293F', sponsors: [], liveryColors: [],
        races: 18
      },
      {
        year: 2007, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['liuzzi', 'speed', 'vettel'], points: 8, position: 7, wins: 0,
        color: '#00293F', sponsors: [], liveryColors: [],
        races: 17
      },
      {
        year: 2008, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['bourdais', 'vettel'], points: 39, position: 6, wins: 1,
        color: '#00293F', sponsors: [], liveryColors: [],
        races: 18
      },
      {
        year: 2009, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['buemi', 'bourdais', 'alguersuari'], points: 8, position: 10, wins: 0,
        color: '#00293F', sponsors: [], liveryColors: [],
        races: 17
      },
      {
        year: 2010, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['alguersuari', 'buemi'], points: 13, position: 9, wins: 0,
        color: '#00293F', sponsors: [], liveryColors: [],
        races: 19
      },
      {
        year: 2011, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['buemi', 'alguersuari'], points: 41, position: 8, wins: 0,
        color: '#00293F', sponsors: [], liveryColors: [],
        races: 19
      },
      {
        year: 2012, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['ricciardo', 'vergne'], points: 26, position: 9, wins: 0,
        color: '#00293F', sponsors: [], liveryColors: [],
        races: 20
      },
      {
        year: 2013, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['vergne', 'ricciardo'], points: 33, position: 8, wins: 0,
        color: '#00293F', sponsors: [], liveryColors: [],
        races: 19
      },
      {
        year: 2014, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['vergne', 'kvyat'], points: 30, position: 7, wins: 0,
        color: '#00293F', sponsors: [], liveryColors: [],
        races: 19
      },
      {
        year: 2015, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['sainz', 'max_verstappen'], points: 67, position: 7, wins: 0,
        color: '#00293F', sponsors: [], liveryColors: [],
        races: 19
      },
      {
        year: 2016, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['sainz', 'max_verstappen', 'kvyat'], points: 63, position: 7, wins: 0,
        color: '#00293F', sponsors: [], liveryColors: [],
        races: 21
      },
      {
        year: 2017, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['sainz', 'kvyat', 'gasly', 'brendon_hartley'], points: 53, position: 7, wins: 0,
        color: '#00293F', sponsors: [], liveryColors: [],
        races: 20
      },
      {
        year: 2018, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['brendon_hartley', 'gasly'], points: 33, position: 9, wins: 0,
        color: '#00293F', sponsors: [], liveryColors: [],
        races: 21
      },
      {
        year: 2019, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['kvyat', 'albon', 'gasly'], points: 85, position: 6, wins: 0,
        color: '#00293F', sponsors: [], liveryColors: [],
        races: 21
      },
      {
        year: 2020, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['gasly', 'kvyat'], points: 107, position: 7, wins: 1,
        color: '#00293F', sponsors: [], liveryColors: [],
        races: 17
      },
      {
        year: 2021, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['tsunoda', 'gasly'], points: 142, position: 6, wins: 0,
        color: '#00293F', sponsors: [], liveryColors: [],
        races: 22
      },
      {
        year: 2022, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['tsunoda', 'gasly'], points: 35, position: 9, wins: 0,
        color: '#00293F', sponsors: [], liveryColors: [],
        races: 22
      },
      {
        year: 2023, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['tsunoda', 'de_vries', 'ricciardo', 'lawson'], points: 25, position: 8, wins: 0,
        color: '#00293F', sponsors: [], liveryColors: [],
        races: 22
      },
      {
        year: 2024, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['ricciardo', 'tsunoda', 'lawson'], points: 46, position: 8, wins: 0,
        color: '#00293F', sponsors: [], liveryColors: [],
        races: 24
      },
      {
        year: 2025, chassis: '', engine: '', engineSupplier: '',
        tyreSupplier: '', principal: '',
        drivers: ['tsunoda', 'hadjar', 'lawson'], points: 92, position: 6, wins: 0,
        color: '#00293F', sponsors: [], liveryColors: [],
        races: 24
      },]
  }
]

export function getTeam(id: string): Team | undefined {
  return TEAMS.find(t => t.id === id)
}

export function getActiveTeams(): Team[] {
  return TEAMS.filter(t => t.active)
}

export function searchTeams(query: string): Team[] {
  const q = query.toLowerCase()
  return TEAMS.filter(t =>
    t.name.toLowerCase().includes(q) ||
    t.fullName.toLowerCase().includes(q) ||
    t.nationality.toLowerCase().includes(q)
  )
}
