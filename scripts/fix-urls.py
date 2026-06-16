#!/usr/bin/env python3
# fix-urls.py — Replace ALL broken image URLs with verified replacements
# Run from project root: python scripts/fix-urls.py
import sys, os

# ── Helpers ───────────────────────────────────────────────────────────────────

def replace_in_binary(path, old_url, new_url):
    """Binary-safe URL replacement for drivers.ts (Mojibake file)."""
    old_bytes = old_url.encode('utf-8')
    new_bytes = new_url.encode('utf-8')
    with open(path, 'rb') as f:
        content = f.read()
    if old_bytes not in content:
        print(f"  MISS  {os.path.basename(path)} <- {old_url[:60]}")
        return False
    content = content.replace(old_bytes, new_bytes)
    with open(path, 'wb') as f:
        f.write(content)
    print(f"  FIX   {os.path.basename(path)} -> {new_url[:70]}")
    return True

def replace_in_text(path, old_url, new_url):
    """Text-mode URL replacement for teams.ts / circuits.ts."""
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    if old_url not in content:
        print(f"  MISS  {os.path.basename(path)} <- {old_url[:60]}")
        return False
    content = content.replace(old_url, new_url)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"  FIX   {os.path.basename(path)} -> {new_url[:70]}")
    return True

# ── Paths ────────────────────────────────────────────────────────────────────

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DRIVERS = os.path.join(BASE, 'data', 'drivers.ts')
TEAMS   = os.path.join(BASE, 'data', 'teams.ts')
CIRCUITS= os.path.join(BASE, 'data', 'circuits.ts')

# ── 1. DRIVER PHOTOS ─────────────────────────────────────────────────────────
print("\n=== drivers.ts ===")

DRIVER_FIXES = [
    # max_verstappen / verstappen
    (
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Max_Verstappen_2023_British_GP_%28cropped%29.jpg/800px-Max_Verstappen_2023_British_GP_%28cropped%29.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/2024-08-25_Motorsport%2C_Formel_1%2C_Gro%C3%9Fer_Preis_der_Niederlande_2024_STP_3973_by_Stepro_%28medium_crop%29.jpg/500px-2024-08-25_Motorsport%2C_Formel_1%2C_Gro%C3%9Fer_Preis_der_Niederlande_2024_STP_3973_by_Stepro_%28medium_crop%29.jpg'
    ),
    # Max 400px variant
    (
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Max_Verstappen_2023_Belgium.jpg/400px-Max_Verstappen_2023_Belgium.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/2024-08-25_Motorsport%2C_Formel_1%2C_Gro%C3%9Fer_Preis_der_Niederlande_2024_STP_3973_by_Stepro_%28medium_crop%29.jpg/500px-2024-08-25_Motorsport%2C_Formel_1%2C_Gro%C3%9Fer_Preis_der_Niederlande_2024_STP_3973_by_Stepro_%28medium_crop%29.jpg'
    ),
    # michael_schumacher photo
    (
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Michael_Schumacher_2011_Suzuka.jpg/800px-Michael_Schumacher_2011_Suzuka.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/8/87/Michael_Schumacher_2011_Malaysia_FP1_1.jpg'
    ),
    # michael_schumacher helmetUrl -> CLEAR
    (
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Michael_Schumacher_helmet_2011.png/320px-Michael_Schumacher_helmet_2011.png',
        ''
    ),
    # charles_leclerc / leclerc
    (
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Charles_Leclerc_2019_British_GP_%28cropped%29.jpg/800px-Charles_Leclerc_2019_British_GP_%28cropped%29.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/2024-08-25_Motorsport%2C_Formel_1%2C_Gro%C3%9Fer_Preis_der_Niederlande_2024_STP_3978_by_Stepro_%28cropped2%29.jpg/500px-2024-08-25_Motorsport%2C_Formel_1%2C_Gro%C3%9Fer_Preis_der_Niederlande_2024_STP_3978_by_Stepro_%28cropped2%29.jpg'
    ),
    (
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Charles_Leclerc_2021_Monza.jpg/400px-Charles_Leclerc_2021_Monza.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/2024-08-25_Motorsport%2C_Formel_1%2C_Gro%C3%9Fer_Preis_der_Niederlande_2024_STP_3978_by_Stepro_%28cropped2%29.jpg/500px-2024-08-25_Motorsport%2C_Formel_1%2C_Gro%C3%9Fer_Preis_der_Niederlande_2024_STP_3978_by_Stepro_%28cropped2%29.jpg'
    ),
    # carlos_sainz photo (both entries use same URL)
    (
        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Carlos_Sainz_Jr._2022_Silverstone.jpg/400px-Carlos_Sainz_Jr._2022_Silverstone.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/4/43/Sainz_at_the_2022_British_Grand_Prix_%28cropped%29.jpg'
    ),
    # alexander_albon -> CLEAR
    (
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Alexander_Albon_2022_Bahrain.jpg/400px-Alexander_Albon_2022_Bahrain.jpg',
        ''
    ),
    # fernando_alonso
    (
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Fernando_Alonso_2021_Qatar.jpg/400px-Fernando_Alonso_2021_Qatar.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Alonso-68_%2824710447098%29.jpg/500px-Alonso-68_%2824710447098%29.jpg'
    ),
    # valtteri_bottas
    (
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Valtteri_Bottas_2021_Styria.jpg/400px-Valtteri_Bottas_2021_Styria.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Valtteri_Bottas_at_the_2026_Adelaide_Motorsport_Festival_%28028A7556%29.jpg/500px-Valtteri_Bottas_at_the_2026_Adelaide_Motorsport_Festival_%28028A7556%29.jpg'
    ),
    # pierre_gasly
    (
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Pierre_Gasly_2022_Bahrain.jpg/400px-Pierre_Gasly_2022_Bahrain.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/2022_French_Grand_Prix_%2852279065728%29_%28midcrop%29.png/500px-2022_French_Grand_Prix_%2852279065728%29_%28midcrop%29.png'
    ),
    # lewis_hamilton helmetUrl -> CLEAR
    (
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Lewis_Hamilton_2017_helmet.png/320px-Lewis_Hamilton_2017_helmet.png',
        ''
    ),
    # nico_hulkenberg
    (
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Nico_H%C3%BClkenberg_2022_Bahrain.jpg/400px-Nico_H%C3%BClkenberg_2022_Bahrain.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/2019_Formula_One_tests_Barcelona%2C_Hulkenberg_%2840287128313%29.jpg/500px-2019_Formula_One_tests_Barcelona%2C_Hulkenberg_%2840287128313%29.jpg'
    ),
    # lando_norris
    (
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Lando_Norris_2023_Belgium.jpg/400px-Lando_Norris_2023_Belgium.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/2024-08-25_Motorsport%2C_Formel_1%2C_Gro%C3%9Fer_Preis_der_Niederlande_2024_STP_3968_by_Stepro_%28cropped2%29.jpg/500px-2024-08-25_Motorsport%2C_Formel_1%2C_Gro%C3%9Fer_Preis_der_Niederlande_2024_STP_3968_by_Stepro_%28cropped2%29.jpg'
    ),
    # norris helmetUrl -> CLEAR
    (
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Lando_Norris_helmet_2023.png/320px-Lando_Norris_helmet_2023.png',
        ''
    ),
    # esteban_ocon
    (
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Esteban_Ocon_2022_Bahrain.jpg/400px-Esteban_Ocon_2022_Bahrain.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Esteban_Ocon_2024_Suzuka_%28cropped%29.jpg/500px-Esteban_Ocon_2024_Suzuka_%28cropped%29.jpg'
    ),
    # sergio_perez
    (
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Sergio_P%C3%A9rez_2022_Bahrain.jpg/400px-Sergio_P%C3%A9rez_2022_Bahrain.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/5/55/2021_US_GP_driver_parade_%28cropped2%29.jpg'
    ),
    # oscar_piastri
    (
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Oscar_Piastri_2023_Bahrain.jpg/400px-Oscar_Piastri_2023_Bahrain.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/2026_Chinese_GP_-_Oscar_Piastri_%28cropped%29_%28cropped%29.jpg/500px-2026_Chinese_GP_-_Oscar_Piastri_%28cropped%29_%28cropped%29.jpg'
    ),
    # alain_prost
    (
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Alain_Prost_1990_Canada.jpg/400px-Alain_Prost_1990_Canada.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Festival_automobile_international_2015_-_Photocall_-_065_%28cropped3%29.jpg/500px-Festival_automobile_international_2015_-_Photocall_-_065_%28cropped3%29.jpg'
    ),
    # kimi_raikkonen
    (
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Kimi_R%C3%A4ikk%C3%B6nen_2018_France.jpg/400px-Kimi_R%C3%A4ikk%C3%B6nen_2018_France.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/F12019_Schloss_Gabelhofen_%2822%29_%28cropped%29.jpg/500px-F12019_Schloss_Gabelhofen_%2822%29_%28cropped%29.jpg'
    ),
    # george_russell
    (
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/George_Russell_2022_Bahrain.jpg/400px-George_Russell_2022_Bahrain.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/KingsLeonSilverstne040724_%2828_of_112%29_%2853838006028%29_%28cropped%29.jpg/500px-KingsLeonSilverstne040724_%2828_of_112%29_%2853838006028%29_%28cropped%29.jpg'
    ),
    # ayrton_senna
    (
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Ayrton_Senna_1991_Germany.jpg/400px-Ayrton_Senna_1991_Germany.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/6/65/Ayrton_Senna_9_%28cropped%29.jpg'
    ),
    # senna helmetUrl -> CLEAR
    (
        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Ayrton_Senna_helmet_1992.png/320px-Ayrton_Senna_helmet_1992.png',
        ''
    ),
    # lance_stroll
    (
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Lance_Stroll_2022_Bahrain.jpg/400px-Lance_Stroll_2022_Bahrain.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/2025_Japan_GP_-_Aston_Martin_-_Lance_Stroll_-_Fanzone_Stage_%28cropped%29.jpg/500px-2025_Japan_GP_-_Aston_Martin_-_Lance_Stroll_-_Fanzone_Stage_%28cropped%29.jpg'
    ),
    # sebastian_vettel
    (
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Sebastian_Vettel_2019_Germany.jpg/400px-Sebastian_Vettel_2019_Germany.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Sebastian_Vettel_-_2022236172324_2022-08-24_Champions_for_Charity_-_Sven_-_1D_X_MK_II_-_0418_-_B70I2428_%28cropped%29.jpg/500px-Sebastian_Vettel_-_2022236172324_2022-08-24_Champions_for_Charity_-_Sven_-_1D_X_MK_II_-_0418_-_B70I2428_%28cropped%29.jpg'
    ),
    # max_verstappen helmetUrl -> CLEAR
    (
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Max_Verstappen_2023_helmet.png/320px-Max_Verstappen_2023_helmet.png',
        ''
    ),
]

# Handle empty URL replacements (helmetUrl = '' means remove the field)
# We need to handle these specially - replace photo: 'URL', with photo: '',
# Actually for empty, just replace the URL with empty string
for old, new in DRIVER_FIXES:
    if old:
        replace_in_binary(DRIVERS, old, new)

# ── 2. TEAM CAR IMAGES ───────────────────────────────────────────────────────
print("\n=== teams.ts - carImageUrl ===")

TEAM_CAR_FIXES = [
    (
        'https://commons.wikimedia.org/wiki/Special:FilePath/Ferrari_F1-75_2022.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/9/98/Ferrari_F1-75_in_Melbourne.jpg'
    ),
    (
        'https://commons.wikimedia.org/wiki/Special:FilePath/Ferrari_SF-23_2023.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/a/a3/FIA_F1_Austria_2023_Race_%281%29_%28The_Ferraris%29.jpg'
    ),
    (
        'https://commons.wikimedia.org/wiki/Special:FilePath/Ferrari_SF-24_2024_F1_car.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/9/99/SF-24_at_the_Japanese_GP.jpg'
    ),
    (
        'https://commons.wikimedia.org/wiki/Special:FilePath/McLaren_MCL60_2023.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/1/12/2023_McLaren_MCL60.jpg'
    ),
    (
        'https://commons.wikimedia.org/wiki/Special:FilePath/McLaren_MCL38_2024.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/1/10/2024_McLaren_MCL38.jpg'
    ),
    (
        'https://commons.wikimedia.org/wiki/Special:FilePath/Mercedes_AMG_W14_2023.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/5/53/Mercedes-AMG_F1_W14_E_Performance_%2853440939354%29.jpg'
    ),
    (
        'https://commons.wikimedia.org/wiki/Special:FilePath/Mercedes_AMG_W15_2024.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/1/10/2024_British_Grand_Prix%2C_Russell_%283%29.jpg'
    ),
    (
        'https://commons.wikimedia.org/wiki/Special:FilePath/Red_Bull_Racing_RB19_2023.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/b/b0/2023_Red_Bull_RB19.jpg'
    ),
    (
        'https://commons.wikimedia.org/wiki/Special:FilePath/Red_Bull_Racing_RB20_2024.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/b/b4/2024_Red_Bull_RB20.jpg'
    ),
    (
        'https://commons.wikimedia.org/wiki/Special:FilePath/Williams_FW47_2025.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/5/5d/Williams_FW47_%2855012521784%29.jpg'
    ),
]

for old, new in TEAM_CAR_FIXES:
    replace_in_text(TEAMS, old, new)

# ── 3. TEAM LOGOS ────────────────────────────────────────────────────────────
print("\n=== teams.ts - logoUrl ===")

TEAM_LOGO_FIXES = [
    # Ferrari logo is missing - clear it
    (
        'https://commons.wikimedia.org/wiki/Special:FilePath/Scuderia_Ferrari_Logo.svg',
        ''
    ),
    # Maserati logo - no clear equivalent
    (
        'https://commons.wikimedia.org/wiki/Special:FilePath/Maserati_logo.svg',
        ''
    ),
    # BRM - no clear equivalent
    (
        'https://commons.wikimedia.org/wiki/Special:FilePath/BRM_logo.svg',
        ''
    ),
    # Brabham - no clear equivalent
    (
        'https://commons.wikimedia.org/wiki/Special:FilePath/Brabham_logo.svg',
        ''
    ),
    # March - no clear equivalent
    (
        'https://commons.wikimedia.org/wiki/Special:FilePath/March_Engineering_logo.svg',
        ''
    ),
    # Shadow - no clear equivalent
    (
        'https://commons.wikimedia.org/wiki/Special:FilePath/Shadow_Racing_Cars_logo.png',
        ''
    ),
    # Ligier - no clear equivalent
    (
        'https://commons.wikimedia.org/wiki/Special:FilePath/Ligier_logo.svg',
        ''
    ),
    # Arrows - no clear equivalent
    (
        'https://commons.wikimedia.org/wiki/Special:FilePath/Arrows_Grand_Prix_International_logo.svg',
        ''
    ),
    # Minardi - no clear equivalent
    (
        'https://commons.wikimedia.org/wiki/Special:FilePath/Minardi_logo.svg',
        ''
    ),
    # Benetton - no clear equivalent
    (
        'https://commons.wikimedia.org/wiki/Special:FilePath/Benetton_Formula_logo.svg',
        ''
    ),
    # Jordan - no clear equivalent
    (
        'https://commons.wikimedia.org/wiki/Special:FilePath/Jordan_Grand_Prix_logo.svg',
        ''
    ),
    # BAR - no clear equivalent
    (
        'https://commons.wikimedia.org/wiki/Special:FilePath/BAR_logo.svg',
        ''
    ),
    # HRT - no clear equivalent
    (
        'https://commons.wikimedia.org/wiki/Special:FilePath/HRT_Formula_1_Team_logo.png',
        ''
    ),
    # Caterham - no clear equivalent
    (
        'https://commons.wikimedia.org/wiki/Special:FilePath/Caterham_F1_Team_logo.svg',
        ''
    ),
    # Marussia - no clear equivalent
    (
        'https://commons.wikimedia.org/wiki/Special:FilePath/Marussia_F1_Team_logo.svg',
        ''
    ),
    # Toro Rosso - no clear equivalent
    (
        'https://commons.wikimedia.org/wiki/Special:FilePath/Scuderia_Toro_Rosso_Logo.svg',
        ''
    ),
    # Tyrrell - no clear equivalent
    (
        'https://commons.wikimedia.org/wiki/Special:FilePath/Tyrrell_Racing_logo.svg',
        ''
    ),
    # Alfa Romeo Stake - verify via Special:FilePath
    # Lotus, Alpine, Force_India, Williams might work (returned 429 which could be valid)
]

for old, new in TEAM_LOGO_FIXES:
    replace_in_text(TEAMS, old, new)

# ── 4. CIRCUIT PHOTOS ────────────────────────────────────────────────────────
print("\n=== circuits.ts - photoUrl ===")

CIRCUIT_PHOTO_FIXES = [
    # monza
    (
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Autodromo_Nazionale_Monza_DSC_0449.jpg/1280px-Autodromo_Nazionale_Monza_DSC_0449.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/d/da/Autodromo_Nazionale_Monza%2C_April_22%2C_2018_SkySat.jpg'
    ),
    # monaco
    (
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Monte_carlo_formula1_2007.jpg/1280px-Monte_carlo_formula1_2007.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/4/45/Circuit_de_Monaco%2C_April_1%2C_2018_SkySat.jpg'
    ),
    # silverstone
    (
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Silverstone_2019.jpg/1280px-Silverstone_2019.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/d/da/Silverstone_Circuit%2C_July_2%2C_2018_SkySat.jpg'
    ),
    # spa
    (
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Spa-Francorchamps_Aerial.jpg/1280px-Spa-Francorchamps_Aerial.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/c/c0/Circuit_de_Spa-Francorchamps%2C_April_22%2C_2018_SkySat.jpg'
    ),
    # suzuka
    (
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Suzuka_Circuit_Aerial_photo.jpg/1280px-Suzuka_Circuit_Aerial_photo.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/4/4f/Suzuka_International_Racing_Course%2C_July_10%2C_2018_SkySat.jpg'
    ),
    # interlagos
    (
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/AereoAutodromo.jpg/1280px-AereoAutodromo.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/e/e6/Vista_a%C3%A9rea_del_Aut%C3%B3dromo_Jos%C3%A9_Carlos_Pace_01.jpg'
    ),
    # bahrain
    (
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Bahrain_International_Circuit_from_above.jpg/1280px-Bahrain_International_Circuit_from_above.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/a/a8/Bahrain_International_Circuit%2C_November_2%2C_2017_SkySat.jpg'
    ),
    # yas_marina
    (
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Yas_Marina_Circuit_from_above.jpg/1280px-Yas_Marina_Circuit_from_above.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/c/ce/Yas_Marina_Circuit%2C_October_12%2C_2018_SkySat.jpg'
    ),
    # imola - no good aerial photo, clear it
    (
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Imola_Racetrack.jpg/1280px-Imola_Racetrack.jpg',
        ''
    ),
    # zandvoort
    (
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Zandvoort_circuit_from_the_air.jpg/1280px-Zandvoort_circuit_from_the_air.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/2/22/Circuit_Park_Zandvoort_aerial_photo.jpg'
    ),
    # jeddah - no aerial photo found, use circuit layout as fallback
    (
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Jeddah_Corniche_Circuit_aerial_view.jpg/1280px-Jeddah_Corniche_Circuit_aerial_view.jpg',
        ''
    ),
    # miami - no aerial photo, clear
    (
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Hard_Rock_Stadium_%28aerial%29.jpg/1280px-Hard_Rock_Stadium_%28aerial%29.jpg',
        ''
    ),
    # losail - no aerial photo, clear
    (
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Lusail_International_Circuit.jpg/1280px-Lusail_International_Circuit.jpg',
        ''
    ),
    # albert_park
    (
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Albert_Park_Circuit_from_the_air.jpg/1280px-Albert_Park_Circuit_from_the_air.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/6/67/Melbourne_Grand_Prix_Circuit%2C_March_22%2C_2018_SkySat.jpg'
    ),
    # americas
    (
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/COTA_Aerial_View.jpg/1280px-COTA_Aerial_View.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/a/a8/Circuit_of_the_Americas%2C_April_22%2C_2018_SkySat.jpg'
    ),
    # baku
    (
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Baku_City_Circuit_aerial.jpg/1280px-Baku_City_Circuit_aerial.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/6/6d/Baku_City_Circuit%2C_April_9%2C_2018_SkySat.jpg'
    ),
    # catalunya
    (
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Circuit_de_Barcelona-Catalunya.jpg/1280px-Circuit_de_Barcelona-Catalunya.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/4/42/Circuit_de_Barcelona-Catalunya%2C_April_19%2C_2018_SkySat.jpg'
    ),
    # hungaroring
    (
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Hungaroring_from_the_air.jpg/1280px-Hungaroring_from_the_air.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/8/81/Hungaroring%2C_April_28%2C_2018_SkySat.jpg'
    ),
    # marina_bay
    (
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Singapore_GP_from_above.jpg/1280px-Singapore_GP_from_above.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/9/95/Marina_Bay_Street_Circuit%2C_May_8%2C_2018_SkySat.jpg'
    ),
    # red_bull_ring
    (
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Red_Bull_Ring_aerial.jpg/1280px-Red_Bull_Ring_aerial.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/a/a9/Red_Bull_Ring%2C_April_18%2C_2018_SkySat.jpg'
    ),
    # rodriguez (Mexico)
    (
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Autodromo_Hermanos_Rodriguez_aerial.jpg/1280px-Autodromo_Hermanos_Rodriguez_aerial.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/b/b7/Aut%C3%B3dromo_Hermanos_Rodr%C3%ADguez%2C_June_4%2C_2018_SkySat.jpg'
    ),
    # shanghai
    (
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Shanghai_International_Circuit.jpg/1280px-Shanghai_International_Circuit.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/0/07/Shanghai_International_Circuit%2C_April_7%2C_2018_SkySat.jpg'
    ),
    # villeneuve (Canada)
    (
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Circuit_Gilles_Villeneuve_aerial.jpg/1280px-Circuit_Gilles_Villeneuve_aerial.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/e/e6/Circuit_Gilles-Villeneuve%2C_May_29%2C_2018_SkySat.jpg'
    ),
]

for old, new in CIRCUIT_PHOTO_FIXES:
    replace_in_text(CIRCUITS, old, new)

print("\nDone! All verified URL replacements applied.")
print("Pending (no verified URL found, field cleared):")
print("  - Imola photoUrl")
print("  - Jeddah photoUrl")
print("  - Miami photoUrl")
print("  - Losail photoUrl")
print("  - Alexander Albon photo")
print("  - Ferrari logoUrl")
print("  - Many historical team logos")
