#!/usr/bin/env python3
"""
Update drivers.ts for the 2026 F1 season:
- Add photo URLs for all 2026 drivers missing photos
- Fix driver numbers (Norris #1, Verstappen #3)
- Add missing numbers (Hadjar #6, Lawson #30, Bearman #87, Bottas #77)
- Set active=true for 2026 race drivers
- Add new driver: Arvid Lindblad (#41)
"""

FILEPATH = 'data/drivers.ts'

with open(FILEPATH, 'rb') as f:
    content = f.read()

def find_driver_section(content, driver_id):
    marker = ("id: '" + driver_id + "'").encode('ascii')
    start = content.find(marker)
    if start < 0:
        return -1, -1
    end = content.find(b'\n  {', start + 10)
    if end < 0:
        end = content.find(b'\n]', start)
    if end < 0:
        end = start + 5000
    return start, end

def section_replace(content, driver_id, old_bytes, new_bytes):
    start, end = find_driver_section(content, driver_id)
    if start < 0:
        print("  WARNING: driver '" + driver_id + "' not found")
        return content
    section = content[start:end]
    if old_bytes not in section:
        print("  WARNING: pattern not found in '" + driver_id + "': " + str(old_bytes[:50]))
        return content
    new_section = section.replace(old_bytes, new_bytes, 1)
    return content[:start] + new_section + content[end:]

def section_insert_before(content, driver_id, insert_bytes, before_bytes):
    start, end = find_driver_section(content, driver_id)
    if start < 0:
        print("  WARNING: driver '" + driver_id + "' not found")
        return content
    section = content[start:end]
    before_pos = section.find(before_bytes)
    if before_pos < 0:
        print("  WARNING: 'before' pattern not found in '" + driver_id + "': " + str(before_bytes[:50]))
        return content
    abs_pos = start + before_pos
    return content[:abs_pos] + insert_bytes + content[abs_pos:]

# Photo URLs
photos = {
    'lando_norris':    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/2024-08-25_Motorsport%2C_Formel_1%2C_Gro%C3%9Fer_Preis_der_Niederlande_2024_STP_3968_by_Stepro_%28cropped2%29.jpg/500px-2024-08-25_Motorsport%2C_Formel_1%2C_Gro%C3%9Fer_Preis_der_Niederlande_2024_STP_3968_by_Stepro_%28cropped2%29.jpg',
    'oscar_piastri':   'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/2026_Chinese_GP_-_Oscar_Piastri_%28cropped%29_%28cropped%29.jpg/500px-2026_Chinese_GP_-_Oscar_Piastri_%28cropped%29_%28cropped%29.jpg',
    'george_russell':  'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/KingsLeonSilverstne040724_%2828_of_112%29_%2853838006028%29_%28cropped%29.jpg/500px-KingsLeonSilverstne040724_%2828_of_112%29_%2853838006028%29_%28cropped%29.jpg',
    'antonelli':       'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Kimi_Antonelli_at_the_2025_US_Grand_Prix_in_Austin%2C_TX_%28cropped%29.jpg/500px-Kimi_Antonelli_at_the_2025_US_Grand_Prix_in_Austin%2C_TX_%28cropped%29.jpg',
    'franco_colapinto':'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Franco_Colapinto_at_the_Melbourne_Walk_during_the_2026_Australian_Grand_Prix_%28028A8704%29_%28cropped%29.jpg/500px-Franco_Colapinto_at_the_Melbourne_Walk_during_the_2026_Australian_Grand_Prix_%28028A8704%29_%28cropped%29.jpg',
    'bearman':         'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/2025_Japan_GP_-_Haas_-_Oliver_Bearman_-_Thursday_%28cropped%29.jpg/500px-2025_Japan_GP_-_Haas_-_Oliver_Bearman_-_Thursday_%28cropped%29.jpg',
    'bortoleto':       'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Gabriel_Bortoleto_%28cropped%29.jpg/500px-Gabriel_Bortoleto_%28cropped%29.jpg',
    'hadjar':          'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Isack_Hadjar_at_the_Melbourne_Walk_during_the_2026_Australian_Grand_Prix_%28028A8753%29_%28cropped%29.jpg/500px-Isack_Hadjar_at_the_Melbourne_Walk_during_the_2026_Australian_Grand_Prix_%28028A8753%29_%28cropped%29.jpg',
    'lawson':          'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Liam_Lawson_at_the_Red_Bull_Fan_Zone_%E2%80%93_Crown_Riverwalk%2C_Melbourne_%28028A7793%29.jpg/500px-Liam_Lawson_at_the_Red_Bull_Fan_Zone_%E2%80%93_Crown_Riverwalk%2C_Melbourne_%28028A7793%29.jpg',
    'nico_hulkenberg':  'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/2019_Formula_One_tests_Barcelona%2C_Hulkenberg_%2840287128313%29.jpg/500px-2019_Formula_One_tests_Barcelona%2C_Hulkenberg_%2840287128313%29.jpg',
    'fernando_alonso': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Alonso-68_%2824710447098%29.jpg/500px-Alonso-68_%2824710447098%29.jpg',
    'lance_stroll':    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/2025_Japan_GP_-_Aston_Martin_-_Lance_Stroll_-_Fanzone_Stage_%28cropped%29.jpg/500px-2025_Japan_GP_-_Aston_Martin_-_Lance_Stroll_-_Fanzone_Stage_%28cropped%29.jpg',
    'pierre_gasly':    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/2022_French_Grand_Prix_%2852279065728%29_%28midcrop%29.png/500px-2022_French_Grand_Prix_%2852279065728%29_%28midcrop%29.png',
    'alexander_albon': 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Williams_Racing_2024_%28Alexander_Albon%29.jpg',
    'esteban_ocon':    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Esteban_Ocon_2024_Suzuka_%28cropped%29.jpg/500px-Esteban_Ocon_2024_Suzuka_%28cropped%29.jpg',
    'sergio_perez':    'https://upload.wikimedia.org/wikipedia/commons/5/55/2021_US_GP_driver_parade_%28cropped2%29.jpg',
}

print("=== Adding photos ===")
for driver_id, photo_url in photos.items():
    photo_line = ("    photo: '" + photo_url + "',\n").encode('ascii')
    content = section_insert_before(content, driver_id, photo_line, b'    championships:')
    print("  " + driver_id + ": photo added")

print("\n=== Adding missing numbers ===")
missing_nums = {'hadjar': 6, 'lawson': 30, 'bearman': 87, 'bottas': 77}
for driver_id, num in missing_nums.items():
    num_line = ("    number: " + str(num) + ",\n").encode('ascii')
    content = section_insert_before(content, driver_id, num_line, b'    championships:')
    print("  " + driver_id + ": number " + str(num) + " added")

print("\n=== Updating numbers ===")
num_updates = [
    ('max_verstappen', b'    number: 1,', b'    number: 3,'),
    ('lando_norris',   b'    number: 4,', b'    number: 1,'),
]
for driver_id, old, new in num_updates:
    content = section_replace(content, driver_id, old, new)
    print("  " + driver_id + ": number updated")

print("\n=== Setting active=true ===")
active_drivers = ['hadjar', 'lawson', 'bearman', 'bortoleto', 'franco_colapinto', 'antonelli']
for driver_id in active_drivers:
    content = section_replace(content, driver_id, b'    active: false,', b'    active: true,')
    print("  " + driver_id + ": active=true")

print("\n=== Adding Arvid Lindblad ===")
# Use bearman's flag bytes (both British), copy from file
bearman_start, _ = find_driver_section(content, 'bearman')
flag_idx = content.find(b"flag: '", bearman_start)
flag_end = content.find(b"',\n", flag_idx + 7)
gb_flag_bytes = content[flag_idx + 7:flag_end]

lindblad_entry = (
    b"  {\n"
    b"    id: 'lindblad',\n"
    b"    name: 'Arvid Lindblad',\n"
    b"    firstName: 'Arvid',\n"
    b"    lastName: 'Lindblad',\n"
    b"    nationality: 'British',\n"
    b"    flag: '" + gb_flag_bytes + b"',\n"
    b"    dateOfBirth: '2007-08-08',\n"
    b"    placeOfBirth: 'Virginia Water, Surrey, England',\n"
    b"    bio: '',\n"
    b"    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Arvid_Lindblad_at_the_Red_Bull_Fan_Zone_%E2%80%93_Crown_Riverwalk%2C_Melbourne_%28028A7869%29_%28cropped%29.jpg/500px-Arvid_Lindblad_at_the_Red_Bull_Fan_Zone_%E2%80%93_Crown_Riverwalk%2C_Melbourne_%28028A7869%29_%28cropped%29.jpg',\n"
    b"    number: 41,\n"
    b"    championships: 0,\n"
    b"    wins: 0,\n"
    b"    poles: 0,\n"
    b"    podiums: 0,\n"
    b"    fastestLaps: 0,\n"
    b"    racesEntered: 0,\n"
    b"    points: 0,\n"
    b"    active: true,\n"
    b"    seasons: []\n"
    b"  },\n"
)

# Insert after lawson's closing brace
lawson_start, lawson_end = find_driver_section(content, 'lawson')
if lawson_start >= 0:
    close_pos = content.find(b'  },\n', lawson_start)
    if close_pos >= 0:
        insert_pos = close_pos + 5
        content = content[:insert_pos] + lindblad_entry + content[insert_pos:]
        print("  lindblad: added after lawson")
    else:
        print("  WARNING: could not find lawson closing brace")
else:
    print("  WARNING: lawson not found")

with open(FILEPATH, 'wb') as f:
    f.write(content)

print("\nDone! Written " + str(len(content)) + " bytes to " + FILEPATH)
