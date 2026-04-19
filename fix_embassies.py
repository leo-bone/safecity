#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import json

with open('data_enhanced.js', 'r', encoding='utf-8') as f:
    content = f.read()

start = content.find('var CITY_DATABASE = ')
json_str = content[start + len('var CITY_DATABASE = '):]
data = json.loads(json_str.rstrip(';'))

embassy_fixes = {
    "chiangmai": {"country": "Thailand", "embassy": {"name": "Chinese Consulate General in Chiang Mai", "nameCn": "Chinese Consulate General in Chiang Mai", "address": "Chiang Mai 50000, Thailand", "phone": "+66-52-010-920", "email": "chinaconsulate_cn@mail.com", "hours": "Mon-Fri 09:00-12:00", "emergency": "+66-89-928-8868"}, "consulates": []},
    "stpetersburg": {"country": "Russia", "embassy": {"name": "Chinese Consulate General in Saint Petersburg", "nameCn": "Chinese Consulate General in Saint Petersburg", "address": "Nab. Kanala Griboedova 134, Saint Petersburg", "phone": "+7-812-714-4970", "email": "chinaconsulate_spbr@mail.ru", "hours": "Mon-Fri 09:00-12:00", "emergency": "+7-960-227-3008"}, "consulates": []},
    "seattle": {"country": "United States", "embassy": {"name": "Chinese Embassy Seattle District", "nameCn": "Chinese Embassy Seattle District", "address": "2024 5th Avenue, Seattle, WA 98121", "phone": "+1-206-441-4588", "email": "chinavisatsea@gmail.com", "hours": "Mon-Fri 09:00-12:00", "emergency": "+1-206-441-4588"}, "consulates": []},
    "washington": {"country": "United States", "embassy": {"name": "Chinese Embassy in Washington D.C.", "nameCn": "Chinese Embassy in Washington D.C.", "address": "3505 International Place NW, Washington DC 20008", "phone": "+1-202-495-2266", "email": "chinaembpress@mfa.gov.cn", "hours": "Mon-Fri 09:00-12:00", "emergency": "+1-202-495-2266"}, "consulates": [{"name": "Chinese Consulate General in New York", "address": "42nd Street, New York, NY 10017", "phone": "+1-212-244-9392"}, {"name": "Chinese Consulate General in San Francisco", "address": "1450 Laguna Street, San Francisco, CA 94115", "phone": "+1-415-674-2900"}, {"name": "Chinese Consulate General in Los Angeles", "address": "500 Shatto Place, Los Angeles, CA 90020", "phone": "+1-213-807-8088"}, {"name": "Chinese Consulate General in Chicago", "address": "77 West Jackson Blvd, Chicago, IL 60604", "phone": "+1-312-453-0210"}]}
}

for city_id, emb in embassy_fixes.items():
    if city_id in data:
        data[city_id]["embassies"] = emb
        print("Fixed embassy: " + data[city_id]["name"])

new_content = "var CITY_DATABASE = " + json.dumps(data, ensure_ascii=False, indent=2) + " ;"
with open("data_enhanced.js", "w", encoding="utf-8") as f:
    f.write(new_content)

print("Done! Fixed " + str(len(embassy_fixes)) + " embassies.")
