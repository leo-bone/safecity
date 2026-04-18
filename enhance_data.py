#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
SafeCity Data Enhancement Script
Add detailed, valuable area and food data for each city
"""

import json
import re

# Read original data
with open('data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract JSON data
match = re.search(r'var CITY_DATABASE = ({[\s\S]*?})\s*;', content)
if not match:
    print("Cannot parse data")
    exit(1)

data_str = match.group(1)
cities = json.loads(data_str)

# ===== City-Specific Detailed Data =====

# Detailed danger zones
DANGER_ZONES = {
    "tokyo": [
        {"area": "Shinjuku Kabukicho", "risk": "Medium", "reason": "Frequent touts, price scams in some bars", "time": "After 11pm risk increases", "tips": "Avoid accepting touts, choose chain izakayas"},
        {"area": "Ikebukuro North Exit (Sunshine-dori)", "risk": "Medium", "reason": "Homeless concentration, be careful at night", "time": "After 10pm", "tips": "Safe during day for shopping, use South Exit at night"},
        {"area": "San'ya Area (Kita-ku)", "risk": "High", "reason": "10min walk from Hibiya line, homeless district", "time": "Any time", "tips": "Completely avoid"}
    ],
    "singapore": [
        {"area": "Geylang (芽笼)", "risk": "Medium", "reason": "Legal red-light district, mixed crowd on weekends", "time": "Friday/Saturday late night", "tips": "OK for sightseeing but avoid alleys late night"},
        {"area": "Little India (weekend evenings)", "risk": "Low", "reason": "Crowded, occasional pickpocketing", "time": "Saturday evenings", "tips": "Safest during weekday daytime"}
    ],
    "seoul": [
        {"area": "Itaewon Nightclub Area", "risk": "Medium", "reason": "Drink-spiking, occasional drug incidents", "time": "2-4am", "tips": "Refuse drinks from strangers, watch your phone"},
        {"area": "Hongdae Nightclub Street", "risk": "Medium", "reason": "Young crowd, occasional fights", "time": "1-3am", "tips": "Go in groups, avoid conflicts"},
        {"area": "Dongdaemun (late night)", "risk": "Low", "reason": "Wholesale market area, mixed crowd", "time": "12am-4am", "tips": "Shopping during day is safer"}
    ],
    "newyork": [
        {"area": "South Bronx", "risk": "High", "reason": "High crime rate, frequent gang activity", "time": "Any time", "tips": "Completely avoid, take subway around"},
        {"area": "Harlem (north of 125th)", "risk": "Medium-High", "reason": "Homeless concentration, occasional robbery", "time": "Night", "tips": "Daytime activities OK, go in groups"},
        {"area": "Times Square (late night)", "risk": "Medium", "reason": "Scammers and pickpockets active", "time": "After midnight", "tips": "Beware of aggressive street performers"},
        {"area": "Subway (late night)", "risk": "Medium-High", "reason": "More homeless, occasional attacks", "time": "After midnight", "tips": "Use Uber/Lyft instead if possible"}
    ],
    "paris": [
        {"area": "Gare du Nord (Paris North Station)", "risk": "Medium", "reason": "Refugee concentration, frequent theft", "time": "Any time", "tips": "Watch your luggage, beware of fake petition signers"},
        {"area": "Seine-Saint-Denis (93省)", "risk": "High", "reason": "Suburban high crime area", "time": "Any time", "tips": "Completely avoid"},
        {"area": "Montmartre (night)", "risk": "Medium", "reason": "Tourist traps, aggressive vendors", "time": "Night", "tips": "Decline street performers' approaches"}
    ],
    "london": [
        {"area": "Brixton", "risk": "Medium", "reason": "Nightclub area, occasional fights", "time": "Friday/Saturday late night", "tips": "Go in groups"},
        {"area": "Soho (late night)", "risk": "Medium", "reason": "Red-light area, occasional disputes", "time": "After midnight", "tips": "Avoid going alone"}
    ],
    "bangkok": [
        {"area": "Khao San Road (late night)", "risk": "Medium", "reason": "Backpacker hub, scammers, drug trade", "time": "After midnight", "tips": "Keep passport safe, refuse strangers' offers"},
        {"area": "Silom Nightlife Area", "risk": "Medium", "reason": "Bars, occasional scams", "time": "Night", "tips": "Avoid being dragged into overpriced bars"}
    ],
    "dubai": [
        {"area": "Deira Old District (late night)", "risk": "Low", "reason": "Working-class area, slightly chaotic at night", "time": "After 10pm", "tips": "More comfortable during daytime"}
    ],
    "mumbai": [
        {"area": "Dharavi Slum", "risk": "High", "reason": "High crime, tourists easily targeted", "time": "Any time", "tips": "Only visit with正规 tours if needed"},
        {"area": "Grant Road (late night)", "risk": "Medium", "reason": "Red-light area vicinity", "time": "Night", "tips": "Avoid going alone"}
    ],
    "losangeles": [
        {"area": "Skid Row (Downtown LA)", "risk": "High", "reason": "Homeless concentration, very poor security", "time": "Any time", "tips": "Completely avoid"},
        {"area": "South Central", "risk": "High", "reason": "High crime area", "time": "Any time", "tips": "Completely avoid, drive around"},
        {"area": "Hollywood Walk of Fame", "risk": "Medium", "reason": "Aggressive street performers, pickpockets", "time": "Night", "tips": "Beware of forced photo charges"}
    ],
    "sanfrancisco": [
        {"area": "Tenderloin", "risk": "High", "reason": "Drug dealing, homeless concentration", "time": "Any time", "tips": "Completely avoid, pass through quickly"},
        {"area": "SoMa (late night)", "risk": "Medium", "reason": "More homeless, stay vigilant", "time": "Night", "tips": "Safer during daytime"}
    ],
    "hongkong": [
        {"area": "Chungking Mansions (TST)", "risk": "Medium", "reason": "Multi-ethnic area, occasional disputes", "time": "Night", "tips": "OK for sightseeing but don't go deep inside"},
        {"area": "Lan Kwai Fong", "risk": "Medium", "reason": "Clubbing area, drunk disputes", "time": "After midnight", "tips": "Don't get drunk, watch belongings"}
    ],
    "taipei": [
        {"area": "Ximending (late night)", "risk": "Low", "reason": "Young crowd, occasional arguments", "time": "After midnight", "tips": "Generally safe, watch belongings"}
    ],
    "sydney": [
        {"area": "Kings Cross", "risk": "Medium", "reason": "Red-light area, drug trade, chaotic at night", "time": "Night", "tips": "Avoid late night visits"}
    ],
    "berlin": [
        {"area": "Kottbusser Tor", "risk": "Medium", "reason": "Drug dealing area, be vigilant at night", "time": "Night", "tips": "Safer during daytime"},
        {"area": "Berlin Wall Park (Mauerpark) at night", "risk": "Medium", "reason": "Occasional robberies", "time": "Night", "tips": "Avoid at night"}
    ],
    "amsterdam": [
        {"area": "De Wallen (Red Light District)", "risk": "Medium", "reason": "Pickpocketing frequent, tourist scams", "time": "Night", "tips": "Watch phone and wallet"},
        {"area": "Vondelpark at night", "risk": "Medium", "reason": "Occasional robbery", "time": "Night", "tips": "Avoid going alone at night"}
    ],
    "rome": [
        {"area": "Termini Station area", "risk": "Medium", "reason": "Pickpockets, scammers active", "time": "Any time", "tips": "Watch luggage, beware of fake police"},
        {"area": "Trastevere (late night)", "risk": "Low", "reason": "Immigrant area", "time": "Late night", "tips": "Safer during daytime"}
    ],
    "barcelona": [
        {"area": "La Rambla", "risk": "Medium", "reason": "World-famous for pickpockets, organized theft", "time": "Any time", "tips": "Phone in pocket, bag in front"},
        {"area": "Raval area (night)", "risk": "Medium", "reason": "Immigrant area, average security", "time": "Night", "tips": "Avoid going alone late at night"}
    ]
}

# Detailed safe zones
SAFE_ZONES = {
    "tokyo": [
        {"area": "Minato-ku (Aoyama, Azabu, Roppongi)", "why": "Embassy district and upscale residential, excellent security", "features": ["Embassy Area", "Upscale", "Quiet & Clean"], "bestFor": "Business, Families"},
        {"area": "Shibuya-ku (Daikanyama, Ebisu)", "why": "Fashion district, mainly locals, safe even at night", "features": ["Fashion", "Boutiques", "Cafes"], "bestFor": "Youth, Shopping"},
        {"area": "Bunkyo & Chiyoda", "why": "University town and Imperial Palace area, high素质, good order", "features": ["Academic", "Cultural", "Quiet"], "bestFor": "Culture Lovers"},
        {"area": "Meguro River Area", "why": "Upscale residential, good lighting, comprehensive surveillance", "features": ["Cherry Blossoms", "Upscale", "Safe"], "bestFor": "Strolling, Night View"}
    ],
    "singapore": [
        {"area": "Orchard Road", "why": "Embassy area, 24hr security, dense surveillance", "features": ["Shopping Paradise", "Embassy", "Safe"], "bestFor": "Shopping, Nightlife"},
        {"area": "Marina Bay", "why": "Government core area, strictest security, frequent patrols", "features": ["Landmark", "Surveillance", "Police Patrols"], "bestFor": "Sightseeing, Business"},
        {"area": "East Coast Park", "why": "Upscale residential, beach safe, family-friendly", "features": ["Beach", "Running Track", "Family-Friendly"], "bestFor": "Family, Sports"},
        {"area": "Bukit Timah", "why": "Upscale residential, local elite area", "features": ["Upscale", "Green", "Quiet"], "bestFor": "Jogging, Walking"}
    ],
    "seoul": [
        {"area": "Gangnam Yeoksam-dong", "why": "Rich district, dense surveillance, frequent patrols", "features": ["Rich Area", "Gangnam Style", "Shopping"], "bestFor": "Shopping, Nightlife"},
        {"area": "Samcheong-dong (Insadong)", "why": "Traditional culture district, mainly local tourists, good order", "features": ["Hanok Village", "Traditional", "Quiet"], "bestFor": "Culture Experience"},
        {"area": "Apgujeong Rodeo Street", "why": "Luxury brand district, strict security", "features": ["Luxury", "Upscale", "Safe"], "bestFor": "Shopping"},
        {"area": "Hannam-dong", "why": "Embassy area, quieter and safer than Itaewon", "features": ["Embassy", "Design Shops", "Cafes"], "bestFor": "Artistic Youth"}
    ],
    "newyork": [
        {"area": "Upper East Side", "why": "Rich district, frequent police patrols, comprehensive surveillance", "features": ["Rich", "Museums", "Central Park"], "bestFor": "Culture, Shopping"},
        {"area": "Tribeca", "why": "Celebrity district, clean streets, many police", "features": ["Celebrity", "Food", "Safe"], "bestFor": "Food, Nightlife"},
        {"area": "Fort Greene (Brooklyn)", "why": "Emerging safe community, family-friendly", "features": ["Community", "Restaurants", "Safe"], "bestFor": "Local Experience"},
        {"area": "Long Island City", "why": "Emerging upscale community, police stationed", "features": ["Emerging", "Metro Access", "Safe"], "bestFor": "Stay, Rest"}
    ],
    "paris": [
        {"area": "6th Arr. (Saint-Germain)", "why": "Embassy district, Left Bank intellectual area, very safe", "features": ["Embassy", "Lux Gardens", "Culture"], "bestFor": "Culture"},
        {"area": "16th Arrondissement", "why": "Traditional rich district, family area, very quiet and safe", "features": ["Rich", "Bois de Boulogne", "Family"], "bestFor": "Family Stay"},
        {"area": "Le Marais (selected areas)", "why": "LGBT-friendly, trendy but generally safe", "features": ["Trendy", "Design", "Nightlife"], "bestFor": "Young Tourists"}
    ],
    "london": [
        {"area": "Kensington & Chelsea", "why": "Traditional rich district, dense surveillance, many police", "features": ["Rich", "Museums", "Hyde Park"], "bestFor": "Culture, Shopping"},
        {"area": "Notting Hill (Portobello area)", "why": "Bohemian style, artistic and safe", "features": ["Markets", "Artistic", "Colorful Houses"], "bestFor": "Artistic Youth"},
        {"area": "Greenwich", "why": "Prime Meridian location, tourist area but very safe", "features": ["Observatory", "Parks", "Safe"], "bestFor": "Sightseeing"}
    ],
    "bangkok": [
        {"area": "Silom Business District", "why": "Financial district, many police, comprehensive surveillance", "features": ["Financial", "BTS Station", "Safe"], "bestFor": "Business, Shopping"},
        {"area": "Sukhumvit (main stations)", "why": "Tourist area, 7-11 density high, good security", "features": ["Tourist Area", "Convenience Stores", "Night Markets"], "bestFor": "Nightlife"},
        {"area": "Chao Phraya River (IconSiam area)", "why": "New development area, comprehensive security", "features": ["River View", "High-end Mall", "Safe"], "bestFor": "Shopping, Sightseeing"}
    ],
    "hongkong": [
        {"area": "Central", "why": "Financial center, many police, comprehensive surveillance", "features": ["Financial", "Upscale", "Safe"], "bestFor": "Business"},
        {"area": "The Peak", "why": "Rich district, great scenery, safe even at night", "features": ["Night View", "Mansions", "Cable Car"], "bestFor": "Sightseeing"},
        {"area": "Stanley", "why": "Seaside town, away from hustle, very safe", "features": ["Beach", "Fishing Village", "Quiet"], "bestFor": "Leisure"}
    ],
    "taipei": [
        {"area": "Da'an District (East District)", "why": "Cultural-educational district, high resident素质, safe at night", "features": ["Cultural-Educational", "Night Markets", "Cafes"], "bestFor": "Culture, Food"},
        {"area": "Xinyi District", "why": "New civic center, comprehensive surveillance", "features": ["101 Tower", "Malls", "Safe"], "bestFor": "Sightseeing, Shopping"}
    ],
    "sydney": [
        {"area": "North Sydney", "why": "Rich district, harbor scenery, very safe", "features": ["Rich", "Harbor", "Quiet"], "bestFor": "Stay, Sightseeing"},
        {"area": "The Rocks", "why": "Historic district, tourist area but good order", "features": ["History", "Markets", "Harbor"], "bestFor": "Sightseeing"}
    ],
    "barcelona": [
        {"area": "Eixample", "why": "Well-planned, residential area, good security", "features": ["Gaudi Architecture", "Residential", "Safe"], "bestFor": "Architecture Sightseeing"},
        {"area": "Passeig de Gràcia", "why": "Luxury street, comprehensive surveillance, many police", "features": ["Luxury", "Gaudi", "Safe"], "bestFor": "Shopping"}
    ]
}

# Detailed food recommendations
FOOD_RECOMMENDATIONS = {
    "tokyo": [
        {"name": "Sukiyabashi Jiro (�的寿司)", "type": "Sushi", "location": "Ginza", "price": "¥30,000+ (omakase)", "mustTry": "Otoro (fatty tuna)", "tips": "Must book 1-2 months ahead, closed Monday"},
        {"name": "Ichiran Ramen", "type": "Ramen", "location": "Shibuya/Shinjuku", "price": "¥1,000-1,500", "mustTry": "Rich Tonkotsu Ramen", "tips": "24hr, single-seat booth design"},
        {"name": "A5 Wagyu BBQ", "type": "BBQ", "location": "Various", "price": "¥5,000-15,000", "mustTry": "Wagyu Beef Set", "tips": "Highly ranked on tabelog.com"}
    ],
    "singapore": [
        {"name": "Tian Tian Hainanese Chicken Rice", "type": "Singaporean", "location": "Maxwell Food Centre", "price": "SGD 4-6", "mustTry": "Hainanese Chicken Rice", "tips": "May sell out by noon, go early"},
        {"name": "Song Fa Bak Kut Teh", "type": "Bak Kut Teh", "location": "Clarke Quay/Chinatown", "price": "SGD 8-15", "mustTry": "Herbal Bak Kut Teh + You Tiao", "tips": "50-year history, unlimited soup refills"},
        {"name": "Jumbo Seafood", "type": "Seafood", "location": "East Coast/Clarke Quay", "price": "SGD 50-100", "mustTry": "Chili Crab, MRT Crabs", "tips": "Reservation required, higher cost per person"}
    ],
    "seoul": [
        {"name": "Wangsimni Tteokbokkeum (Wangsimni)", "type": "Rice Cake", "location": "Wangsimni", "price": "₩8,000-15,000", "mustTry": "Spicy Rice Cakes", "tips": "Local favorite, long queue at peak"},
        {"name": "Gwangjang Market (�的市场)", "type": "Market Food", "location": "Gwangjang Market", "price": "₩5,000-15,000/piece", "mustTry": "Mung Bean Pancakes, Yukhoe", "tips": "Some stalls close after 8pm"},
        {"name": "Myeongdong Kyoja", "type": "Korean", "location": "Myeongdong", "price": "₩10,000-20,000", "mustTry": "Kalguksu, Mandu", "tips": "Local favorite, simple menu"}
    ],
    "newyork": [
        {"name": "Peter Luger Steak House", "type": "Steakhouse", "location": "Brooklyn/Manhattan", "price": "$80-150/person", "mustTry": "Dry Aged Porterhouse", "tips": "Over 130 years, cash only"},
        {"name": "Katz's Delicatessen", "type": "Jewish Deli", "location": "Lower East Side", "price": "$20-40", "mustTry": "Pastrami Sandwich", "tips": "Location from 'When Harry Met Sally', buy soda"},
        {"name": "Levain Bakery", "type": "Bakery", "location": "Upper West Side", "price": "$8-15", "mustTry": "Chocolate Walnut Chip Cookie", "tips": "World's best cookies, often sold out"}
    ],
    "bangkok": [
        {"name": "Jay Fai ( Michelin 3-Star)", "type": "Michelin Street", "location": "Near Khao San", "price": "฿300-800", "mustTry": "Crab Omelette, Tom Yum", "tips": "Michelin 3-star, 2hr+ queue, wearing goggles while cooking is iconic"},
        {"name": "Thipsamai (Best Pad Thai)", "type": "Pad Thai", "location": "Siam Square", "price": "฿100-200", "mustTry": "Signature Pad Thai", "tips": "Over 50 years, Golden Egg Fried Rice is must-try"}
    ],
    "hongkong": [
        {"name": "Lin Heung Tea House", "type": "HK Dim Sum", "location": "Sheung Wan", "price": "HKD 80-150", "mustTry": "Har Gow, Cha Siu Bao, Lotus Seed Buns", "tips": "100-year history, trolley culture, cash only"},
        {"name": "Kau Kee Beef Brisket", "type": "Beef Brisket Noodles", "location": "Sheung Wan", "price": "HKD 50-80", "mustTry": "Clear Soup Brisket Noodles", "tips": "Mon-Sat only, frequented by stars"},
        {"name": "Tim Ho Wan", "type": "Dim Sum", "location": "Sham Shui Po/multiple", "price": "HKD 40-80", "mustTry": "Baked Char Siu Bao", "tips": "Affordable Michelin, Baked Char Siu Bao is must-try"}
    ],
    "taipei": [
        {"name": "Din Tai Fung", "type": "Xiao Long Bao", "location": "Xinyi/multiple", "price": "NT$300-600", "mustTry": "Xiaolongbao, Spicy Wontons", "tips": "World-famous, Michelin 1-star"},
        {"name": "Shangjia Fish Market", "type": "Seafood", "location": "Zhongshan Fish Market", "price": "NT$500-1500", "mustTry": "Nigiri Sushi, Sea Urchin", "tips": "Standing-eat area has best value"},
        {"name": "Lin Dong Fang Beef Noodles", "type": "Beef Noodles", "location": "Bade Road", "price": "NT$150-300", "mustTry": "Half-Tendon Half-Meat Noodles", "tips": "24hr, add chili oil for extra flavor"}
    ]
}

# Detailed attraction recommendations
ATTRACTIONS_RECOMMENDATIONS = {
    "tokyo": [
        {"name": "Nezu Museum", "type": "Art Museum", "location": "Omotesando/Aoyama", "bestTime": "Spring/Autumn", "why": "Hidden gem, garden called 'Most Beautiful in Tokyo', quiet and peaceful", "duration": "2 hours", "tips": "¥1000 entry, garden free"},
        {"name": "Kagurazaka", "type": "Old Street", "location": "Iidabashi area", "bestTime": "Evening-Night", "why": "Known as 'Little Kyoto', stone paths, lanterns, traditional izakayas", "duration": "3 hours", "tips": "Setting of 'Frieren' anime"},
        {"name": "Nakameguro", "type": "Neighborhood", "location": "Meguro River area", "bestTime": "Spring (Cherry Blossoms)", "why": "Dense concentration of art shops, highest coffee shop density in Tokyo", "duration": "Half day", "tips": "Tsutaya Books Daikanyama is must-visit"}
    ],
    "singapore": [
        {"name": "Haji Lane", "type": "Creative District", "location": "Near Bugis", "bestTime": "Afternoon-Evening", "why": "Rainbow alley, graffiti walls, local designer shops", "duration": "2 hours", "tips": "Opposite Sultan Mosque"},
        {"name": "Southern Ridges", "type": "Hiking", "location": "Mount Faber Park-Henderson Waves", "bestTime": "Early morning or evening", "why": "Most beautiful hiking trail in Singapore, overlooks entire city", "duration": "3-4 hours", "tips": "Bring sunscreen and water"}
    ],
    "seoul": [
        {"name": "Bukchon Hanok Village", "type": "Traditional Culture", "location": "Samcheong-dong", "bestTime": "Early morning or evening", "why": "600-year history traditional Hanok, 10min walk from Anguk Station Line 3", "duration": "2-3 hours", "tips": "Some Hanok can be visited, be careful not to enter private residences"},
        {"name": "Ikseong-dong", "type": "Creative Area", "location": "Euljiro 3-ga", "bestTime": "Afternoon-Night", "why": "Seoul's 'Gulangyu', narrow alleys with indie cafes", "duration": "3 hours", "tips": "Hanok-converted cafes are a must"},
        {"name": "Hannam-dong", "type": "Shopping", "location": "Itaewon Station", "bestTime": "Afternoon-Evening", "why": "Designer brands, independent shops, Korean version of 'Nanhua Alley'", "duration": "3 hours", "tips": "Tax refund threshold ฿30,000, bring passport"}
    ]
}

# ===== Update City Data =====
def enhance_city(city_id, city):
    # Update danger zones
    if city_id in DANGER_ZONES:
        city['detailedDangerZones'] = DANGER_ZONES[city_id]
        # Update basic hotspots for compatibility
        city.setdefault('safety', {})['hotspots'] = [
            {"area": d["area"], "desc": f"{d['reason']} - {d['tips']}", "risk": d["risk"]}
            for d in DANGER_ZONES[city_id]
        ]
    
    # Update safe zones
    if city_id in SAFE_ZONES:
        city['detailedSafeZones'] = SAFE_ZONES[city_id]
        # Update basic safeAreas for compatibility
        city.setdefault('safety', {})['safeAreas'] = [
            d["area"] for d in SAFE_ZONES[city_id]
        ]
    
    # Update food recommendations
    if city_id in FOOD_RECOMMENDATIONS:
        if 'lifestyle' not in city:
            city['lifestyle'] = {}
        city['lifestyle']['foodDetails'] = FOOD_RECOMMENDATIONS[city_id]
        # Create basic food data (for old code compatibility)
        city['lifestyle']['food'] = [
            {"name": r["name"], "type": r["type"], "price": r["price"], 
             "desc": f"{r['location']} - {r['mustTry']}", "tip": r["tips"]}
            for r in FOOD_RECOMMENDATIONS[city_id][:4]
        ]
    
    # Update attraction recommendations
    if city_id in ATTRACTIONS_RECOMMENDATIONS:
        if 'lifestyle' not in city:
            city['lifestyle'] = {}
        city['lifestyle']['attractionDetails'] = ATTRACTIONS_RECOMMENDATIONS[city_id]
        # Update basic attractions
        city['lifestyle']['attractions'] = [
            {"name": a["name"], "type": a["type"], 
             "desc": f"{a['location']}: {a['why']}", "hidden": True}
            for a in ATTRACTIONS_RECOMMENDATIONS[city_id]
        ]
    
    return city

# Apply enhancements
for city_id in cities:
    cities[city_id] = enhance_city(city_id, cities[city_id])

# Output updated data
safety_colors = {
    "A": {"bg": "#00b894", "text": "#fff", "label": "Very Safe"},
    "A-": {"bg": "#00cec9", "text": "#fff", "label": "Safe"},
    "B+": {"bg": "#0984e3", "text": "#fff", "label": "Relatively Safe"},
    "B": {"bg": "#6c5ce7", "text": "#fff", "label": "Average"},
    "B-": {"bg": "#fdcb6e", "text": "#2d3436", "label": "Caution"},
    "C+": {"bg": "#e17055", "text": "#fff", "label": "Higher Risk"},
    "C": {"bg": "#d63031", "text": "#fff", "label": "High Risk"},
    "C-": {"bg": "#c0392b", "text": "#fff", "label": "Very High Risk"},
    "D+": {"bg": "#b2bec3", "text": "#2d3436", "label": "Very High Risk"},
    "D": {"bg": "#636e72", "text": "#fff", "label": "Extremely Dangerous"}
}

output = f"""// ============================================================
// SafeCity Global - Global City Safety Database v8.0 (Enhanced)
// 125 cities with detailed area safety + food recommendations
// Updated: 2026-04-18
// ============================================================

var SAFETY_COLORS = {json.dumps(safety_colors, ensure_ascii=False, indent=2)};

var CITY_DATABASE = {json.dumps(cities, ensure_ascii=False, indent=2)};"""

with open('data_enhanced.js', 'w', encoding='utf-8') as f:
    f.write(output)

print("Enhanced data generation complete!")
print(f"Output file: data_enhanced.js")
print(f"Cities updated: {len(cities)}")
print("\nNew data structures:")
print("  - detailedDangerZones: Specific neighborhoods with reasons, times, tips")
print("  - detailedSafeZones: Specific neighborhoods with why-safe, features, bestFor")
print("  - foodDetails: Detailed food (name, location, price, mustTry, tips)")
print("  - attractionDetails: Detailed attractions (bestTime, why, duration, tips)")
