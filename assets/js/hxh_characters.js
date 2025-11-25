const users =  [
        {
            "name": "Gon Freecss",
            "alias": "Rookie/The Boy",
            "nen_type": "Enhancer",
            "ability": "Jajanken: Rock",
            "picture": "assets/img/normal_mode/gon_normal.webp",
            "fight_picture": "assets/img/fight_mode/gon_fight.jpeg",
            "description": "A determined, simple, and athletic boy on a quest to find his father, Ging Freecss.",
            "group": "Protagonists"
        },
        {
            "name": "Killua Zoldyck",
            "alias": "The Assassin",
            "nen_type": "Transmuter",
            "ability": "Lightning Palm/Godspeed",
            "picture": " ",
            "fight_picture": " ",
            "description": "A former assassin from the Zoldyck Family, he is Gon's best friend and highly skilled in combat.",
            "group": "Protagonists"
        },
        {
            "name": "Kurapika",
            "alias": "Chain User",
            "nen_type": "Conjurer (Specialist when eyes are scarlet)",
            "ability": "Chain Jail/Judgment Chain",
            "picture": " ",
            "fight_picture": " ",
            "description": "The last survivor of the Kurta Clan, he seeks vengeance against the Phantom Troupe.",
            "group": "Protagonists"
        },
        {
            "name": "Leorio Paradinight",
            "alias": "Mister Leorio",
            "nen_type": "Emitter",
            "ability": "Remote Punch",
            "picture": " ",
            "fight_picture": " ",
            "description": "A hot-headed and loyal medical student who aims to become a doctor to help the poor.",
            "group": "Protagonists"
        },
        {
            "name": "Silva Zoldyck",
            "alias": "Patriarch of the Zoldycks",
            "nen_type": "Transmuter/Enhancer",
            "ability": "Unidentified Large Nen Orbs",
            "picture": " ",
            "fight_picture": " ",
            "description": "Killua's father, highly respected and a fearsome master assassin.",
            "group": "Zoldyck Family"
        },
        {
            "name": "Zeno Zoldyck",
            "alias": "Grandfather Zoldyck",
            "nen_type": "Transmuter",
            "ability": "Dragon Dive/Dragon Head",
            "picture": " ",
            "fight_picture": " ",
            "description": "Killua's grandfather, one of the most powerful and experienced assassins in the world.",
            "group": "Zoldyck Family"
        },
        {
            "name": "Illumi Zoldyck",
            "alias": "Gittarackur",
            "nen_type": "Manipulator",
            "ability": "Needle Man/Body Alteration",
            "picture": " ",
            "fight_picture": " ",
            "description": "Killua's oldest brother, a master manipulator who placed a needle in Killua's head.",
            "group": "Zoldyck Family"
        },
        {
            "name": "Chrollo Lucilfer",
            "alias": "The Bandit Leader",
            "nen_type": "Specialist",
            "ability": "Skill Hunter (Bandit's Secret)",
            "picture": " ",
            "fight_picture": " ",
            "description": "The charismatic leader of the Phantom Troupe, capable of stealing the Nen abilities of others.",
            "group": "Phantom Troupe"
        },
        {
            "name": "Hisoka Morow",
            "alias": "The Magician",
            "nen_type": "Transmuter",
            "ability": "Bungee Gum/Texture Surprise",
            "picture": " ",
            "fight_picture": " ",
            "description": "A deceptive and powerful fighter constantly seeking strong opponents to fight.",
            "group": "Phantom Troupe"
        },
        {
            "name": "Feitan Portor",
            "alias": "Phantom Troupe #2",
            "nen_type": "Transmuter",
            "ability": "Pain Packer/Rising Sun",
            "picture": " ",
            "fight_picture": " ",
            "description": "The interim leader after Chrollo's capture, known for his speed and torture methods.",
            "group": "Phantom Troupe"
        },
        {
            "name": "Machi Komacine",
            "alias": "Phantom Troupe #6",
            "nen_type": "Transmuter",
            "ability": "Nen Stitches",
            "picture": " ",
            "fight_picture": " ",
            "description": "A calm, highly observant member whose Nen threads are excellent for tracking and healing.",
            "group": "Phantom Troupe"
        },
        {
            "name": "Uvogin",
            "alias": "Phantom Troupe #11",
            "nen_type": "Enhancer",
            "ability": "Big Bang Impact",
            "picture": " ",
            "fight_picture": " ",
            "description": "The physically strongest member of the Troupe, known for his raw power.",
            "group": "Phantom Troupe"
        },
        {
            "name": "Shalnark",
            "alias": "Phantom Troupe #9",
            "nen_type": "Manipulator",
            "ability": "Black Voice (Autopilot)",
            "picture": " ",
            "fight_picture": " ",
            "description": "A smart, cheerful member who can control others by sticking antennas into them.",
            "group": "Phantom Troupe"
        },
        {
            "name": "Pakunoda",
            "alias": "Phantom Troupe #4",
            "nen_type": "Specialist",
            "ability": "Memory Bomb",
            "picture": " ",
            "fight_picture": " ",
            "description": "A member who can read and transfer memories by firing Nen bullets into others.",
            "group": "Phantom Troupe"
        },
        {
            "name": "Meruem",
            "alias": "The King",
            "nen_type": "Specialist",
            "ability": "Aura Synthesis/Shallow Breath",
            "picture": " ",
            "fight_picture": " ",
            "description": "The King of the Chimera Ants and arguably the most powerful character introduced in the series.",
            "group": "Chimera Ants"
        },
        {
            "name": "Nefepitou",
            "alias": "Pitou",
            "nen_type": "Specialist",
            "ability": "Doctor Blythe/Puppeteering",
            "picture": " ",
            "fight_picture": " ",
            "description": "A Royal Guard known for incredible Nen capacity, loyalty, and chilling devotion to the King.",
            "group": "Chimera Ants"
        },
        {
            "name": "Isaac Netero",
            "alias": "Chairman of the Hunter Association",
            "nen_type": "Enhancer",
            "ability": "100-Type Guanyin Bodhisattva",
            "picture": " ",
            "fight_picture": " ",
            "description": "The 12th Chairman of the Hunter Association and one of the most powerful Nen users in history.",
            "group": "Hunters & Zodiacs"
        },
        {
            "name": "Ging Freecss",
            "alias": "Double-Star Ruins Hunter",
            "nen_type": "Unknown (Likely Transmuter/Emitter)",
            "ability": "Ultrasonic Fist (Imitation)",
            "picture": " ",
            "fight_picture": " ",
            "description": "Gon's father, one of the world's greatest Hunters and founder of the Zodiacs.",
            "group": "Hunters & Zodiacs"
        },
        {
            "name": "Kite",
            "alias": "Ging's Apprentice",
            "nen_type": "Conjurer",
            "ability": "Crazy Slots (Silent Waltz)",
            "picture": " ",
            "fight_picture": " ",
            "description": "Ging Freecss's student and a key figure in the beginning of the Chimera Ant Arc.",
            "group": "Hunters & Zodiacs"
        },
        {
            "name": "Cheadle Yorkshire",
            "alias": "Dog (Zodiac)",
            "nen_type": "Unknown (Likely Conjurer/Manipulator)",
            "ability": "Disease/Medical Expertise",
            "picture": " ",
            "fight_picture": " ",
            "description": "The current Chairman of the Hunter Association (13th), known for her medical skills.",
            "group": "Hunters & Zodiacs"
        },
        {
            "name": "Pariston Hill",
            "alias": "Rat (Zodiac)",
            "nen_type": "Unknown",
            "ability": "Manipulation/Strategic Misdirection",
            "picture": " ",
            "fight_picture": " ",
            "description": "A former Vice-Chairman and a shrewd, enigmatic political operator within the Hunter Association.",
            "group": "Hunters & Zodiacs"
        }
    ]