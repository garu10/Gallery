const users = [
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
            "picture": "assets/img/normal_mode/killua_normal.webp",
            "fight_picture": "assets/img/fight_mode/killua_fight.jpg",
            "description": "A former assassin from the Zoldyck Family, he is Gon's best friend and highly skilled in combat.",
            "group": "Protagonists"
        },
        {
            "name": "Kurapika",
            "alias": "Chain User",
            "nen_type": "Conjurer (Specialist when eyes are scarlet)",
            "ability": "Chain Jail/Judgment Chain",
            "picture": "assets/img/normal_mode/kurapika_normal.jpg",
            "fight_picture": "assets/img/fight_mode/kurapika_fight.jpeg",
            "description": "The last survivor of the Kurta Clan, he seeks vengeance against the Phantom Troupe.",
            "group": "Protagonists"
        },
        {
            "name": "Leorio Paradinight",
            "alias": "Mister Leorio",
            "nen_type": "Emitter",
            "ability": "Remote Punch",
            "picture": "assets/img/normal_mode/leorio_normal.jpeg",
            "fight_picture": "assets/img/fight_mode/leorio_fight.jpeg",
            "description": "A hot-headed and loyal medical student who aims to become a doctor to help the poor.",
            "group": "Protagonists"
        },
        {
            "name": "Silva Zoldyck",
            "alias": "Patriarch of the Zoldycks",
            "nen_type": "Transmuter/Enhancer",
            "ability": "Unidentified Large Nen Orbs",
            "picture": "assets/img/normal_mode/silva_normal.webp",
            "fight_picture": "assets/img/fight_mode/silva_fight.webp",
            "description": "Killua's father, highly respected and a fearsome master assassin.",
            "group": "Zoldyck Family"
        },
        {
            "name": "Zeno Zoldyck",
            "alias": "Grandfather Zoldyck",
            "nen_type": "Transmuter",
            "ability": "Dragon Dive/Dragon Head",
            "picture": "assets/img/normal_mode/zeno_normal.webp",
            "fight_picture": "assets/img/fight_mode/zeno_fight.webp",
            "description": "Killua's grandfather, one of the most powerful and experienced assassins in the world.",
            "group": "Zoldyck Family"
        },
        {
            "name": "Illumi Zoldyck",
            "alias": "Gittarackur",
            "nen_type": "Manipulator",
            "ability": "Needle Man/Body Alteration",
            "picture": "assets/img/normal_mode/illumi_normal.jpg",
            "fight_picture": "assets/img/fight_mode/illumi_fight.jpg",
            "description": "Killua's oldest brother, a master manipulator who placed a needle in Killua's head.",
            "group": "Zoldyck Family"
        },
        {
            "name": "Chrollo Lucilfer",
            "alias": "The Bandit Leader",
            "nen_type": "Specialist",
            "ability": "Skill Hunter (Bandit's Secret)",
            "picture": "assets/img/normal_mode/chrollo_normal.jpeg",
            "fight_picture": "assets/img/fight_mode/chrollo_fight.jpg",
            "description": "The charismatic leader of the Phantom Troupe, capable of stealing the Nen abilities of others.",
            "group": "Phantom Troupe"
        },
        {
            "name": "Hisoka Morow",
            "alias": "The Magician",
            "nen_type": "Transmuter",
            "ability": "Bungee Gum/Texture Surprise",
            "picture": "assets/img/normal_mode/hisoka_normal.webp",
            "fight_picture": "assets/img/fight_mode/hisoka_fight.png",
            "description": "A deceptive and powerful fighter constantly seeking strong opponents to fight.",
            "group": "Phantom Troupe"
        },
        {
            "name": "Feitan Portor",
            "alias": "Phantom Troupe #2",
            "nen_type": "Transmuter",
            "ability": "Pain Packer/Rising Sun",
            "picture": "assets/img/normal_mode/feitan_normal.jpg",
            "fight_picture": "assets/img/fight_mode/feitan_fight.webp",
            "description": "The interim leader after Chrollo's capture, known for his speed and torture methods.",
            "group": "Phantom Troupe"
        },
        {
            "name": "Machi Komacine",
            "alias": "Phantom Troupe #6",
            "nen_type": "Transmuter",
            "ability": "Nen Stitches",
            "picture": "assets/img/normal_mode/machi_normal.jpeg",
            "fight_picture": "assets/img/fight_mode/machi_fight.png",
            "description": "A calm, highly observant member whose Nen threads are excellent for tracking and healing.",
            "group": "Phantom Troupe"
        },
        {
            "name": "Uvogin",
            "alias": "Phantom Troupe #11",
            "nen_type": "Enhancer",
            "ability": "Big Bang Impact",
            "picture": "assets/img/normal_mode/uvogin_normal.webp",
            "fight_picture": "assets/img/fight_mode/uvogin_fight.webp",
            "description": "The physically strongest member of the Troupe, known for his raw power.",
            "group": "Phantom Troupe"
        },
        {
            "name": "Shalnark",
            "alias": "Phantom Troupe #9",
            "nen_type": "Manipulator",
            "ability": "Black Voice (Autopilot)",
            "picture": "assets/img/normal_mode/shalnark_normal.jpeg",
            "fight_picture": "assets/img/fight_mode/shalnark_fight.webp",
            "description": "A smart, cheerful member who can control others by sticking antennas into them.",
            "group": "Phantom Troupe"
        },
        {
            "name": "Pakunoda",
            "alias": "Phantom Troupe #4",
            "nen_type": "Specialist",
            "ability": "Memory Bomb",
            "picture": "assets/img/normal_mode/pakunoda_normal.jpeg",
            "fight_picture": "assets/img/fight_mode/pakunoda_fight.png",
            "description": "A member who can read and transfer memories by firing Nen bullets into others.",
            "group": "Phantom Troupe"
        },
        {
            "name": "Meruem",
            "alias": "The King",
            "nen_type": "Specialist",
            "ability": "Aura Synthesis/Shallow Breath",
            "picture": "assets/img/normal_mode/meruem_normal.jpeg",
            "fight_picture": "assets/img/fight_mode/meruem_fight.jpeg",
            "description": "The King of the Chimera Ants and arguably the most powerful character introduced in the series.",
            "group": "Chimera Ants"
        },
        {
            "name": "Nefepitou",
            "alias": "Pitou",
            "nen_type": "Specialist",
            "ability": "Doctor Blythe/Puppeteering",
            "picture": "assets/img/normal_mode/nefepitou_normal.webp",
            "fight_picture": "assets/img/fight_mode/nefepitou_fight.jpg",
            "description": "A Royal Guard known for incredible Nen capacity, loyalty, and chilling devotion to the King.",
            "group": "Chimera Ants"
        },
        {
            "name": "Isaac Netero",
            "alias": "Chairman of the Hunter Association",
            "nen_type": "Enhancer",
            "ability": "100-Type Guanyin Bodhisattva",
            "picture": "assets/img/normal_mode/netero_normal.webp",
            "fight_picture": "assets/img/fight_mode/netero_fight.jpeg",
            "description": "The 12th Chairman of the Hunter Association and one of the most powerful Nen users in history.",
            "group": "Hunters & Zodiacs"
        },
        {
            "name": "Ging Freecss",
            "alias": "Double-Star Ruins Hunter",
            "nen_type": "Unknown (Likely Transmuter/Emitter)",
            "ability": "Ultrasonic Fist (Imitation)",
            "picture": "assets/img/normal_mode/ging_normal.jpg",
            "fight_picture": "assets/img/fight_mode/ging_fight.webp",
            "description": "Gon's father, one of the world's greatest Hunters and founder of the Zodiacs.",
            "group": "Hunters & Zodiacs"
        },
        {
            "name": "Kite",
            "alias": "Ging's Apprentice",
            "nen_type": "Conjurer",
            "ability": "Crazy Slots (Silent Waltz)",
            "picture": "assets/img/normal_mode/kite_normal.webp",
            "fight_picture": "assets/img/fight_mode/kite_fight.jpg",
            "description": "Ging Freecss's student and a key figure in the beginning of the Chimera Ant Arc.",
            "group": "Hunters & Zodiacs"
        }
    ]