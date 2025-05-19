const toys = [
    { id: 1, name: "HG GUNDAM AERIAL REBUILD", image: "images/toys/Aerial.jpg", price: 590.00, description: "Bandai® Gundam Gunpla High Grade Plastic Model Kits Series HG XVX-016RN GUNDAM AERIAL REBUILD The repaired version of the Gundam Aerial from Mobile Suit Gundam: The Witch from Mercury.", type: 'toy' },
    { id: 2, name: "PG RX-0 UNICORN GUNDAM", image: "images/toys/PG_Unicorn.webp", price: 6800.00, description: "Bandai® Gunpla Perfect Grade 1/60 Model Kit PG RX-0 UNICORN GUNDAM", type: 'toy' },
    { id: 3, name: "PG GUNDAM EXIA", image: "images/toys/exia.jpg", price: 6490.00, description: "Bandai® Gunpla Perfect Grade 1/60 Model Kit PG GN-001 GUNDAM EXIA", type: 'toy' },
    { id: 4, name: "MG MS-06R ZAKU II HIGH MOBILITY TYPE PSYCHO ZAKU VER KA", image: "images/toys/psycho_zaku.jpg", price: 2790.00, description: "Bandai® Gunpla Master Grade 1/100 VER KA Model Kit MG MS-06R ZAKU II HIGH MOBILITY TYPE PSYCHO ZAKU VER KA", type: 'toy' },
    { id: 5, name: "Tetris wood puzzle", image: "images/toys/Tetris.jpg", price: 159.00, description: "A wooden puzzle based on the classic Tetris game. Perfect for brain training and a stylish decorative piece.", type: 'toy' },
    { id: 6, name: "Catan [EN]", image: "images/toys/Catan.jpg", price: 669.00, description: "The Settlers of Catan board game, a strategy game where players collect resources and build roads and settlements.", type: 'toy' },
    { id: 7, name: "(BSF) WARHAMMER 40000: INTRODUCTORY SET (ENG)", image: "images/toys/wh40000is.jpg", price: 2450.00, description: "A great way to begin your journey into the Warhammer 40,000 hobby. Includes everything you need to start playing the legendary tabletop game.", type: 'toy' },
    { id: 8, name: "Warhammer 40k: Adeptus Custodes: Allarus Custodians", image: "images/toys/whc.jpg", price: 2150.00, description: "Adeptus Custodes miniatures from the Warhammer 40k universe, highly detailed for collectors and gamers alike.", type: 'toy' },
    { id: 9, name: "Honkai: Star Rail Qingque 1/10 Figure", image: "images/toys/QQ.jpg", price: 1190.00, description: "A detailed 1/10 scale figure of Qingque from Honkai: Star Rail.", type: 'toy' },
    { id: 10, name: "Plarail Bullet Train N700S Basic Set", image: "images/toys/N700.jpg", price: 2150.00, description: "All-in- one set for those who want to start Plarail with [Shinkansen N700S]!", type: 'toy' }
];

const games = [
    { id: 1, name: "Warhammer 40,000: Space Marine 2", image: "images/games/sm2.jpg", price: 1490.00, description: "Embody the superhuman skill and brutality of a Space Marine. Unleash deadly abilities and devastating weaponry to obliterate the relentless Tyranid swarms. Defend the Imperium in spectacular third-person action in solo or multiplayer modes.", type: 'game' },
    { id: 2, name: "HELLDIVERS™ 2", image: "images/games/hd2.jpg", price: 1290.00, description: "HELLDIVERS™ 2 is a 3rd person squad-based shooter that sees the elite forces of the Helldivers battling to win an intergalactic struggle to rid the galaxy of the rising alien threats.", type: 'game' },
    { id: 3, name: "ELDEN RING", image: "images/games/edl.jpg", price: 1790.00, description: "The Lands Between are part of a vast continent where magnificent open fields and huge dungeons with complex and three-dimensional designs are seamlessly connected. As you explore, the joy of discovering unknown and overwhelming threats awaits you.", type: 'game' },
    { id: 4, name: "NieR:Automata™", image: "images/games/Nier_Automata.jpg", price: 1390.00, description: "NieR: Automata tells the story of androids 2B, 9S and A2 and their battle to reclaim the machine-driven dystopia overrun by powerful machines. Humanity has been driven from the Earth by mechanical beings from another world. In a final effort to take back the planet, the human resistance sends a force of android soldiers to destroy the invaders. Now, a war between machines and androids rages on... A war that could soon unveil a long-forgotten truth of the world.", type: 'game' },
    { id: 5, name: "NieR Replicant™ ver.1.22474487139...", image: "images/games/Nier_Replicant.jpg", price: 1990.00, description: "A thousand-year lie that would live on for eternity... NieR Replicant ver.1.22474487139... is an updated version of NieR Replicant, previously only released in Japan. Discover the one-of-a-kind prequel to the critically-acclaimed masterpiece NieR:Automata. Now with a modern upgrade, experience masterfully revived visuals, a fascinating storyline and more! ", type: 'game' },
    { id: 6, name: "Cyberpunk 2077", image: "images/games/Cyberpunk.jpg", price: 1799.00, description: "Cyberpunk 2077 is an open-world, action-adventure RPG set in the megalopolis of Night City, where you play as a cyberpunk mercenary wrapped up in a do-or-die fight for survival." },
    { id: 7, name: "DARK SOULS™ III", image: "images/games/dsIII.jpg", price: 1500.00, description: "The third and final chapter of the Dark Souls series, As fires fade and the world falls into ruin, journey into a universe filled with more colossal enemies and environments. Players will be immersed into a world of epic atmosphere and darkness through faster gameplay and amplified combat intensity. ", type: 'game' },
    { id: 8, name: "Cities: Skylines", image: "images/games/cs1.jpg", price: 819.00, description: "Cities: Skylines is a modern take on the classic city simulation. The game introduces new game play elements to realize the thrill and hardships of creating and maintaining a real city whilst expanding on some well-established tropes of the city building experience. You’re only limited by your imagination, so take control and reach for the sky!", type: 'game' },
    { id: 9, name: "Stellaris", image: "images/games/Stellaris.jpg", price: 1089.00, description: "Get ready to explore, discover and interact with a multitude of species as you journey among the stars. Forge a galactic empire by sending out science ships to survey and explore, while construction ships build stations around newly discovered planets. Discover buried treasures and galactic wonders as you spin a direction for your society, creating limitations and evolutions for your explorers. Alliances will form and wars will be declared.", type: 'game' },
    { id: 9-1, name: "Stellaris: Apocalypse", image: "images/games/St_Apo.jpg", price: 669.00, description: "Stellaris: Apocalypse is a full expansion which redefines stellar warfare for all players with a host of new offensive and defensive options. Destroy entire worlds with terrifying new planet-killer weapons, fight against (or alongside) ruthless space pirates, and maybe discover a few non-violent game features as well.", type: 'game' }
];

// Combine toys and games into one product array
const allProducts = [...toys, ...games];

const bestSellers = [
    games[3],
    toys[0],
    games[1],
    toys[2]
];

const CarouselItem = [
    games[3],
    games[6],
    toys[0],
    toys[1],
    games[1]
];

export { toys, games, allProducts, bestSellers, CarouselItem };