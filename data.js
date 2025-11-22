const LESSONS = {
  1: {
    1: [
      { word: "batch",  answer: "tch" },
      { word: "bath",   answer: "th"  },
      { word: "french", answer: "ch"  },
      { word: "much",   answer: "ch"  },
      { word: "shack",  answer: "sh"  },
      { word: "glyph",  answer: "ph"  },
      { word: "photo",  answer: "ph"  },
      { word: "chin",   answer: "ch"  },
      { word: "fish",   answer: "sh"  },
      { word: "ship",   answer: "sh"  },
      { word: "lath",   answer: "th"  },
      { word: "drench", answer: "ch"  },
    ],
    2: [
      { word: "shrub",  answer: "sh"  },
      { word: "phase",  answer: "ph"  },
      { word: "cloth",  answer: "th"  },
      { word: "phone",  answer: "ph"  },
      { word: "shift",  answer: "sh"  },
      { word: "match",  answer: "tch" },
      { word: "church", answer: "ch"  },
      { word: "rich",   answer: "ch"  },
      { word: "shut",   answer: "sh"  },
      { word: "path",   answer: "th"  },
      { word: "itch",   answer: "tch" },
      { word: "watch",  answer: "tch" },
    ],
    3: [
      { word: "dish",   answer: "sh"  },
      { word: "phat",   answer: "ph"  },
      { word: "shoe",   answer: "sh"  },
      { word: "kith",   answer: "th"  },
      { word: "inch",   answer: "ch"  },
      { word: "switch", answer: "tch" },
      { word: "fetch",  answer: "tch" },
      { word: "shank",  answer: "sh"  },
      { word: "crunch", answer: "ch"  },
      { word: "phlox",  answer: "ph"  },
      { word: "hutch",  answer: "tch" },
      { word: "pith",   answer: "th"  },
      { word: "ruth",   answer: "th"  },
      { word: "graph",  answer: "ph"  },
      { word: "shun",   answer: "sh"  },
      { word: "shot",   answer: "sh"  },
      { word: "patch",  answer: "tch" },
      { word: "chit",   answer: "ch"  },
      { word: "catch",  answer: "tch" },
      { word: "shill",  answer: "sh"  },
      { word: "cash",   answer: "sh"  },
      { word: "such",   answer: "ch"  },
      { word: "lymph",  answer: "ph"  },
      { word: "tenth",  answer: "th"  },
    ],
  },

  2: {
    1: [
      { word: "vast",   answer: ""   }, // st 喺尾 → 冇答案
      { word: "stoss",  answer: "st" },
      { word: "stirk",  answer: "st" },
      { word: "skin",   answer: "sk" },
      { word: "scat",   answer: "sc" },
      { word: "spit",   answer: "sp" },
      { word: "stole",  answer: "st" },
      { word: "stab",   answer: "st" },
      { word: "fast",   answer: ""   }, // st 喺尾 → 冇答案
      { word: "gasp",   answer: ""   }, // sp 喺尾 → 冇答案
      { word: "space",  answer: "sp" },
      { word: "task",   answer: ""   }, // sk 喺尾 → 冇答案
    ],
    2: [
      { word: "spud",   answer: "sp" },
      { word: "spend",  answer: "sp" },
      { word: "mast",   answer: ""   }, // st 尾
      { word: "wast",   answer: ""   }, // st 尾
      { word: "stiff",  answer: "st" },
      { word: "scud",   answer: "sc" },
      { word: "skit",   answer: "sk" },
      { word: "blast",  answer: ""   }, // st 尾
      { word: "wasp",   answer: ""   }, // sp 尾
      { word: "splat",  answer: "sp" },
      { word: "spot",   answer: "sp" },
      { word: "stomp",  answer: "st" },  // st 唔喺字尾，要揀
    ],
    3: [
      { word: "past",   answer: ""   }, // st 尾
      { word: "scan",   answer: "sc" },
      { word: "skid",   answer: "sk" },
      { word: "spam",   answer: "sp" },
      { word: "stub",   answer: "st" },
      { word: "clasp",  answer: ""   }, // sp 尾
      { word: "ask",    answer: ""   }, // sk 尾
      { word: "star",   answer: "st" },
      { word: "spun",   answer: "sp" },
      { word: "steam",  answer: "st" },
      { word: "stall",  answer: "st" },
      { word: "cast",   answer: ""   }, // st 尾
      { word: "spicy",  answer: "sp" },
      { word: "scot",   answer: "sc" },
      { word: "spell",  answer: "sp" },
      { word: "spin",   answer: "sp" },
      { word: "still",  answer: "st" },
      { word: "flask",  answer: ""   }, // sk 尾
      { word: "spunk",  answer: "sp" },
      { word: "rasp",   answer: ""   }, // sp 尾
      { word: "last",   answer: ""   }, // st 尾
      { word: "gast",   answer: ""   }, // st 尾
      { word: "skip",   answer: "sk" },
      { word: "strap",  answer: "st" },  // st 喺開頭（str）
    ],
  },
};

LESSONS[3] = {
  1: [
    { word: "tick",  answer: "ic" },
    { word: "six",   answer: "ix" },
    { word: "veg",   answer: "eg" },
    { word: "beg",   answer: "eg" },
    { word: "stick", answer: "st,ic" },
    { word: "trig",  answer: "ig" },
    { word: "pig",   answer: "ig" },
    { word: "mix",   answer: "ix" },
    { word: "fig",   answer: "ig" },
    { word: "hick",  answer: "ic" },
    { word: "jig",   answer: "ig" },
    { word: "leg",   answer: "eg" },
  ],
  2: [
    { word: "leg",   answer: "eg" },
    { word: "cig",   answer: "ig" },
    { word: "rick",  answer: "ic" },
    { word: "chick", answer: "ch,ic" },
    { word: "dig",   answer: "ig" },
    { word: "digs",  answer: "ig" },
    { word: "zig",   answer: "ig" },
    { word: "kick",  answer: "ic" },
    { word: "big",   answer: "ig" },
    { word: "crick", answer: "ic" },
    { word: "keg",   answer: "eg" },
    { word: "trick", answer: "ic" },
  ],
  3: [
    { word: "pix",     answer: "ix" },
    { word: "picnic",  answer: "ic" },
    { word: "dregs",   answer: "eg" },
    { word: "peg",     answer: "eg" },
    { word: "fig",     answer: "ig" },
    { word: "brig",    answer: "ig" },
    { word: "remix",   answer: "ix" },
    { word: "afflict", answer: "ic" },
    { word: "migs",    answer: "ig" },
    { word: "reg",     answer: "eg" },
    { word: "nix",     answer: "ix" },
    { word: "zig",     answer: "ig" },
    { word: "egg",    answer: "eg" },
    { word: "flick",  answer: "ic" },
    { word: "varix",  answer: "ix" },
    { word: "vig",    answer: "ig" },
    { word: "gigs",   answer: "ig" },
    { word: "traffic",answer: "ic" },
    { word: "teg",    answer: "eg" },
    { word: "click",  answer: "ic" },
    { word: "gig",    answer: "ig" },
    { word: "dick",   answer: "ic" },
    { word: "fix",    answer: "ix" },
    { word: "prick",  answer: "ic" },
  ]
};
LESSONS[4] = {
  1: [
    { word: "trick",  answer: "ic" },  
    { word: "line",   answer: "i_e" },  
    { word: "smith",  answer: "th" },
    { word: "bumph",  answer: "ph" },
    { word: "ash",    answer: "sh" },
    { word: "ape",    answer: "a_e" },  // Ape
    { word: "inch",   answer: "ch" },
    { word: "dig",    answer: "ig" },
    { word: "meg",    answer: "eg" },
    { word: "meme",   answer: "e_e" },  // mEme
    { word: "six",    answer: "ix" },
    { word: "snatch", answer: "tch" },
  ],
  2: [
    { word: "shell",  answer: "sh" },
    { word: "peg",    answer: "eg" },
    { word: "name",   answer: "a_e" },
    { word: "pick",   answer: "ic" },
    { word: "lymph",  answer: "ph" },
    { word: "lunch",  answer: "ch" },
    { word: "eve",    answer: "e_e" },
    { word: "thrill", answer: "th" },
    { word: "ditch",  answer: "tch" },
    { word: "take",   answer: "a_e" },
    { word: "gig",    answer: "ig" },
    { word: "ride",   answer: "i_e" },
  ],
  3: [
    { word: "thump",  answer: "th" },
    { word: "leg",    answer: "eg" },
    { word: "fix",    answer: "ix" },
    { word: "crutch", answer: "tch" },
    { word: "ship",   answer: "sh" },
    { word: "grebe",  answer: "e_e" },
    { word: "lick",   answer: "ic" },
    { word: "fig",    answer: "ig" },
    { word: "file",   answer: "i_e" },
    { word: "clench", answer: "ch" },
    { word: "game",   answer: "a_e" },
    { word: "nymph",  answer: "ph" },
    { word: "shelf",  answer: "sh" },
    { word: "breve",  answer: "e_e" },
    { word: "keg",    answer: "eg" },
    { word: "phi",    answer: "ph" },
    { word: "six",    answer: "ix" },
    { word: "time",   answer: "i_e" },
    { word: "bunch",  answer: "ch" },
    { word: "goth",   answer: "th" },
    { word: "frig",   answer: "ig" },
    { word: "cave",   answer: "a_e" },
    { word: "dutch",  answer: "tch" },
    { word: "click",  answer: "ic" },
  ],
};

LESSONS[5] = {
  1: [
    { word: 'much',  answer: 'ch' },
    { word: 'chime', answer: 'ch,i_e' }, // ch + i_e
    { word: 'nuke',  answer: 'u_e' },
    { word: 'shill', answer: 'sh' },
    { word: 'tame',  answer: 'a_e' },
    { word: 'glyph', answer: 'ph' },
    { word: 'than',  answer: 'th' },
    { word: 'witch', answer: 'tch' },
    { word: 'puke',  answer: 'u_e' },
    { word: 'home',  answer: 'o_e' },
    { word: 'same',  answer: 'a_e' },
    { word: 'eve',   answer: 'e_e' }
  ],
  2: [
    { word: 'phut',  answer: 'ph' },
    { word: 'chin',  answer: 'ch' },
    { word: 'kale',  answer: 'a_e' },
    { word: 'clutch',answer: 'tch' },
    { word: 'cash',  answer: 'sh' },
    { word: 'that',  answer: 'th' },
    { word: 'slide', answer: 'i_e' },
    { word: 'cape',  answer: 'a_e' },
    { word: 'pole',  answer: 'o_e' },
    { word: 'eve',   answer: 'e_e' },
    { word: 'june',  answer: 'ju_e' }, // j + u_e
    { word: 'mule',  answer: 'u_e' }
  ],
  3: [
    { word: 'wane',  answer: 'a_e' },
    { word: 'gash',  answer: 'sh' },
    { word: 'dope',  answer: 'o_e' },
    { word: 'rule',  answer: 'ru_e' }, // r + u_e
    { word: 'bench', answer: 'ch' },
    { word: 'mute',  answer: 'u_e' },
    { word: 'notch', answer: 'tch' },
    { word: 'smile', answer: 'i_e' },
    { word: 'thud',  answer: 'th' },
    { word: 'brute', answer: 'ru_e' }, // r + u_e
    { word: 'phat',  answer: 'ph' },
    { word: 'daze',  answer: 'a_e' },
    { word: 'fuse',  answer: 'u_e' },
    { word: 'chomp', answer: 'ch' },
    { word: 'depth', answer: 'th' },
    { word: 'pinch', answer: 'ch' },
    { word: 'hitch', answer: 'tch' },
    { word: 'mole',  answer: 'o_e' },
    { word: 'hide',  answer: 'i_e' },
    { word: 'fade',  answer: 'a_e' },
    { word: 'bane',  answer: 'a_e' },
    { word: 'posh',  answer: 'sh' },
    { word: 'graph', answer: 'ph' },
    { word: 'theme', answer: 'th,e_e' } // th + e_e
  ]
};

LESSONS[6] = {
  1: [
    { word: "hone",  answer: "o_e" },  // hoNe
    { word: "stud",  answer: "st"  },  // Stud
    { word: "hope",  answer: "o_e" },  // hoPe
    { word: "grape", answer: "a_e" },  // graPe
    { word: "gang",  answer: "ng"  },  // gaNG
    { word: "flume", answer: "lu_e" },  // fluMe
    { word: "stamp", answer: "st"  },  // STamp
    { word: "mime",  answer: "i_e" },  // mIne sound
    { word: "swing", answer: "ing" },  // swING
    { word: "ink",   answer: "ink" },  // INK
    { word: "knack", answer: "kn"  },  // KNack
    { word: "ruse",  answer: "ru_e" },  // ruSe
  ],
  2: [
    { word: "jute",  answer: "ju_e" },  // juTe
    { word: "joke",  answer: "o_e" },  // joKe
    { word: "king",  answer: "ing" },  // kING
    { word: "knock", answer: "kn"  },  // KNoch
    { word: "lake",  answer: "a_e" },  // laKe
    { word: "lope",  answer: "o_e" },  // loPe
    { word: "bang",  answer: "ng"  },  // baNG
    { word: "flute", answer: "lu_e" },  // fluTe
    { word: "hive",  answer: "i_e" },  // hIve
    { word: "knot",  answer: "kn"  },  // KNot
    { word: "ring",  answer: "ing" },  // rING
    { word: "stock", answer: "st"  },  // STock
  ],
  3: [
    { word: "nope",  answer: "o_e" },  // noPe
    { word: "trike", answer: "i_e" },  // trIke
    { word: "pink",  answer: "ink" },  // pINK
    { word: "lute",  answer: "lu_e" },  // luTe
    { word: "sale",  answer: "a_e" },  // saLe
    { word: "knap",  answer: "kn"  },  // KNap
    { word: "speck", answer: "sp"  },  // SPeck
    { word: "cove",  answer: "o_e" },  // coVe
    { word: "cling", answer: "ing" },  // clING（照你講用長啲嗰個）
    { word: "gong",  answer: "ng"  },  // goNG
    { word: "skate", answer: "sk,a_e"  },  // SKate
    { word: "fluke", answer: "lu_e" },  // fluKe
  ],
};

LESSONS[7] = {
  1: [
    { word: "drupe", answer: "ru_e" },
    { word: "flute", answer: "lu_e" },     // l + u_e
    { word: "guest", answer: "gu" },    // gu + st
    { word: "slink", answer: "ink" },
    { word: "clinch", answer: "ch" },
    { word: "tube", answer: "u_e" },
    { word: "quill", answer: "qu" },
    { word: "quest", answer: "qu" },    // qu + st
    { word: "bong", answer: "ng" },
    { word: "bute", answer: "u_e" },
    { word: "rule", answer: "ru_e" },      // r + u_e
    { word: "smash", answer: "sh" },
  ],
  2: [
    { word: "wink", answer: "ink" },
    { word: "dive", answer: "i_e" },
    { word: "guilt", answer: "gu" },
    { word: "quench", answer: "qu,ch" },   // qu + ch
    { word: "rude", answer: "ru_e" },
    { word: "jinks", answer: "ink" },
    { word: "fume", answer: "u_e" },
    { word: "quack", answer: "qu" },
    { word: "tong", answer: "ng" },
    { word: "cute", answer: "u_e" },
    { word: "long", answer: "ng" },
    { word: "flume", answer: "lu_e" },     // l + u_e
  ],
  3: [
    { word: "writ",  answer: "wr" },
    { word: "brute", answer: "ru_e" },
    { word: "think", answer: "th,ink" },   // th + ink
    { word: "whack", answer: "wh" },
    { word: "white", answer: "wh,i_e" },   // wh + i_e
    { word: "wreck", answer: "wr" },
    { word: "fuse",  answer: "u_e" },
    { word: "ring",  answer: "ing" },      // 用 ing（唔用 ng）
    { word: "knob",  answer: "kn" },
    { word: "wren",  answer: "wr" },
    { word: "whet",  answer: "wh" },
    { word: "graph", answer: "ph" },
  ],
};

LESSONS[8] = {
  1: [
    { word: "chink",  answer: "ch,ink" },   // ch + ink
    { word: "shield", answer: "sh,ie" },    // sh + ie
    { word: "kong",   answer: "ng" },
    { word: "head",   answer: "ea" },
    { word: "vie",    answer: "ie" },
    { word: "line",   answer: "i_e" },
    { word: "bee",    answer: "ee" },
    { word: "pie",    answer: "ie" },
    { word: "rule",   answer: "ru_e" },     // r + u_e
    { word: "thong",  answer: "th,ng" },    // th + ng
    { word: "whim",   answer: "wh" },
    { word: "brig",   answer: "ig" }
  ],

  2: [
    { word: "flute",  answer: "lu_e" },
    { word: "glue",   answer: "ue" },
    { word: "sink",   answer: "ink" },
    { word: "mick",   answer: "ic" },
    { word: "wield",  answer: "ie" },
    { word: "etch",   answer: "tch" },
    { word: "froze",  answer: "o_e" },
    { word: "fume",   answer: "u_e" },
    { word: "knit",   answer: "kn" },
    { word: "swing",  answer: "ing" },
    { word: "quiz",   answer: "qu" },
    { word: "hie",    answer: "ie" }
  ],
  3: [
    { word: "long",   answer: "ng" },
    { word: "whine",  answer: "wh,i_e" },   // wh + i_e
    { word: "steep",  answer: "st,ee" },
    { word: "weak",   answer: "ea" },
    { word: "true",   answer: "ue" },
    { word: "clue",   answer: "ue" },
    { word: "leap",   answer: "ea" },
    { word: "beef",   answer: "ee" },
    { word: "knee",   answer: "kn,ee" },    // kn + ee
    { word: "queen",  answer: "qu,ee" },
    { word: "sing",   answer: "ing" },
    { word: "wreath", answer: "wr,ea,th" }, // wr + ea + th
    { word: "quit",   answer: "qu" },
    { word: "knock",  answer: "kn" },
    { word: "cleat",  answer: "ea" },
    { word: "tree",   answer: "ee" },
    { word: "wreak",  answer: "wr,ea" },
    { word: "breath", answer: "ea,th" },
    { word: "blue",   answer: "ue" },
    { word: "ding",   answer: "ing" },
    { word: "flue",   answer: "ue" },
    { word: "wring",  answer: "wr,ing" },
    { word: "wren",   answer: "wr" },
    { word: "team",   answer: "ea" }
  ]
};

LESSONS[9] = {
  1: [
    { word: "wrench", answer: "wr,ch" },    // 舊: wr
    { word: "splat",  answer: "sp" },    // 用 sp
    { word: "deal",   answer: "ea" },
    { word: "pee",    answer: "ee" },
    { word: "chief",  answer: "ch,ie" },
    { word: "tern",   answer: "er" },    // 新: er
    { word: "blur",   answer: "ur" },    // 新: ur
    { word: "queen",  answer: "qu,ee" },
    { word: "sir",    answer: "ir" },    // 新: ir
    { word: "flea",   answer: "ea" },
    { word: "whine",  answer: "wh,i_e" },// wh + i_e
    { word: "kerb",   answer: "er" }     // 新: er
  ],
  2: [
    { word: "slur",   answer: "ur" },    // 新: ur
    { word: "wrung",  answer: "wr,ng" },    // wr（亦有 ng）
    { word: "cream",  answer: "ea" },
    { word: "dream",  answer: "ea" },
    { word: "fee",    answer: "ee" },
    { word: "lief",   answer: "ie" },
    { word: "dig",    answer: "ig" },
    { word: "girl",   answer: "ir" },    // 新: ir
    { word: "nerve",  answer: "er" },    // 新: er
    { word: "gee",    answer: "ee" },
    { word: "code",   answer: "o_e" },
    { word: "jerk",   answer: "er" }     // 新: er
  ],
  3: [
    { word: "feat",   answer: "ea" },
    { word: "chick",  answer: "ch,ic" }, // ch + ic
    { word: "steal",  answer: "st,ea" },
    { word: "burst",  answer: "ur" },    // 新: ur
    { word: "wry",    answer: "wr" },
    { word: "brief",  answer: "ie" },
    { word: "serve",  answer: "er" },    // 新: er
    { word: "speech", answer: "sp,ee,ch" },
    { word: "berm",   answer: "er" },    // 新: er
    { word: "scot",   answer: "sc" },
    { word: "whale",  answer: "wh,a_e" },// wh + a_e
    { word: "dirt",   answer: "ir" },    // 新: ir
    { word: "her",    answer: "er" },    // 新: er
    { word: "bead",   answer: "ea" },
    { word: "thief",  answer: "th,ie" },
    { word: "fur",    answer: "ur" },    // 新: ur
    { word: "wrong",  answer: "wr,ng" },
    { word: "wheel",  answer: "wh,ee" }, // wh + ee
    { word: "first",  answer: "ir" },    // 新: ir
    { word: "fern",   answer: "er" },    // 新: er
    { word: "white",  answer: "wh,i_e" },
    { word: "spit",   answer: "sp" },
    { word: "spine",  answer: "sp,i_e" },
    { word: "leave",  answer: "ea" }
  ]
};

LESSONS[10] = {
  1: [
    { word: "blue",  answer: "ue" },      // 無新 ai/oi/ei，也無舊 digraph
    { word: "roil",  answer: "oi" },
    { word: "foil",  answer: "oi" },
    { word: "charm", answer: "ch,ar" },
    { word: "neat",  answer: "ea" },
    { word: "steel", answer: "st,ee" },
    { word: "laid",  answer: "ai" },
    { word: "third", answer: "th,ir" },
    { word: "pork",  answer: "or" },
    { word: "sperm", answer: "sp,er" },
    { word: "train", answer: "ai" },
    { word: "burn",  answer: "ur" }
  ],

  2: [
    { word: "church", answer: "ch,ur" },
    { word: "toil",   answer: "oi" },
    { word: "sleet",  answer: "ee" },
    { word: "bake",   answer: "a_e" },
    { word: "seal",   answer: "ea" },
    { word: "flirt",  answer: "ir" },
    { word: "lei",    answer: "ei" },
    { word: "thor",   answer: "th,or" },
    { word: "join",   answer: "oi" },
    { word: "fart",   answer: "ar" },
    { word: "aid",    answer: "ai" },
    { word: "fain",   answer: "ai" }
  ],

  3: [
    { word: "rain",   answer: "ai" },
    { word: "glue",   answer: "ue" },
    { word: "larch",  answer: "ar,ch" },
    { word: "soil",   answer: "oi" },
    { word: "pain",   answer: "ai" },
    { word: "veal",   answer: "ea" },
    { word: "born",   answer: "or" },
    { word: "beep",   answer: "ee" },
    { word: "blur",   answer: "ur" },
    { word: "mail",   answer: "ai" },
    { word: "pert",   answer: "er" },
    { word: "skirt",  answer: "sk,ir" },
    { word: "void",   answer: "oi" },
    { word: "shirt",  answer: "sh,ir" },
    { word: "hurl",   answer: "ur" },
    { word: "clean",  answer: "ea" },
    { word: "roil",   answer: "oi" },
    { word: "sweep",  answer: "ee" },
    { word: "marsh",  answer: "ar,sh" },
    { word: "her",    answer: "er" },
    { word: "veil",   answer: "ei" },
    { word: "loin",   answer: "oi" },
    { word: "dork",   answer: "or" },
    { word: "tail",   answer: "ai" }
  ]
};
LESSONS[11] = {
  // Page 38 上半：screw ~ scrimp
  1: [
    { word: 'screw',   answer: 'sc,rew' },   // scrEW
    { word: 'veil',    answer: 'ei' },
    { word: 'pew',     answer: 'ew' },
    { word: 'snail',   answer: 'ai' },
    { word: 'oil',     answer: 'oi' },
    { word: 'herb',    answer: 'er' },
    { word: 'popcorn', answer: 'or' },
    { word: 'farm',    answer: 'ar' },
    { word: 'curve',   answer: 'ur' },
    { word: 'yew',     answer: 'ew' },
    { word: 'knew',    answer: 'kn,ew' }, // kn + ew 一齊圈
    { word: 'scrimp',  answer: 'sc' }       // 呢隻當「冇要圈」的字
  ],

  // Page 38 下半：spew ~ rein
  2: [
    { word: 'spew',   answer: 'sp,ew' },
    { word: 'nerd',   answer: 'er' },
    { word: 'rain',   answer: 'ai' },
    { word: 'chump',  answer: 'ch' },
    { word: 'mew',    answer: 'ew' },
    { word: 'turn',   answer: 'ur' },
    { word: 'beet',   answer: 'ee' },
    { word: 'darn',   answer: 'ar' },
    { word: 'orbit',  answer: 'or' },
    { word: 'drew',   answer: 'rew' },   // drEW
    { word: 'nephew', answer: 'ph,ew' },
    { word: 'rein',   answer: 'ei' }
  ],

  // Page 39 上下兩組合併做 Level 3
  3: [
    { word: 'crew',   answer: 'rew' },
    { word: 'joint',  answer: 'oi' },
    { word: 'new',    answer: 'ew' },
    { word: 'bail',   answer: 'ai' },
    { word: 'few',    answer: 'ew' },
    { word: 'per',    answer: 'er' },
    { word: 'skein',  answer: 'sk,ei' },
    { word: 'born',   answer: 'or' },
    { word: 'curl',   answer: 'ur' },
    { word: 'grew',   answer: 'rew' },
    { word: 'spar',   answer: 'sp,ar' },
    { word: 'corm',   answer: 'or' },

    { word: 'threw',  answer: 'th,rew' },
    { word: 'spur',   answer: 'sp,ur' },
    { word: 'arm',    answer: 'ar' },
    { word: 'vein',   answer: 'ei' },
    { word: 'verse',  answer: 'er' },
    { word: 'hew',    answer: 'ew' },
    { word: 'dew',    answer: 'ew' },
    { word: 'feint',  answer: 'ei' },
    { word: 'coil',   answer: 'oi' },
    { word: 'fort',   answer: 'or' },
    { word: 'bait',   answer: 'ai' },
    { word: 'shrew',  answer: 'sh,rew' }  // sh + rew 一齊圈
  ]
};

LESSONS[12] = {
  1: [
    { word: "karst", answer: "ar" },
    { word: "corn",  answer: "or" },
    { word: "fray",  answer: "ay" },
    { word: "brief", answer: "ie" },
    { word: "lewd",  answer: "ew" },
    { word: "wain",  answer: "ai" },
    { word: "they",  answer: "ey" },
    { word: "lord",  answer: "or" },
    { word: "stay",  answer: "ay" },
    { word: "soy",   answer: "oy" },
    { word: "point", answer: "oi" },
    { word: "crew",  answer: "rew" }
  ],

  2: [
    { word: "orc",   answer: "or" },
    { word: "tort",  answer: "or" },
    { word: "prey",  answer: "ey" },
    { word: "boil",  answer: "oi" },
    { word: "strew", answer: "ew" },
    { word: "bard",  answer: "ar" },
    { word: "blew",  answer: "ew" },
    { word: "say",   answer: "ay" },
    { word: "waif",  answer: "ai" },
    { word: "maid",  answer: "ai" },
    { word: "lark",  answer: "ar" },
    { word: "coy",   answer: "oy" }
  ],

  3: [
    { word: "scorn", answer: "or" },
    { word: "storm", answer: "or" },
    { word: "wail",  answer: "ai" },
    { word: "joy",   answer: "oy" },
    { word: "tarn",  answer: "ar" },
    { word: "make",  answer: "a_e" },
    { word: "flew",  answer: "ew" },
    { word: "play",  answer: "ay" },
    { word: "boy",   answer: "oy" },
    { word: "yard",  answer: "ar" },
    { word: "grey",  answer: "ey" },
    { word: "coin",  answer: "oi" }
  ],

  4: [
    { word: "grief", answer: "ie" },
    { word: "clay",  answer: "ay" },
    { word: "new",   answer: "ew" },
    { word: "hey",   answer: "ey" },
    { word: "barf",  answer: "ar" },
    { word: "hoist", answer: "oi" },
    { word: "troy",  answer: "oy" },
    { word: "drew",  answer: "rew" },
    { word: "vain",  answer: "ai" },
    { word: "fain",  answer: "ai" },
    { word: "gain",  answer: "ai" },
    { word: "thorn", answer: "or" }
  ]
};

LESSONS[13] = {
  // Page 44 上半：Level 1
  1: [
    { word: 'safe',    answer: 'a_e' },
    { word: 'blew',    answer: 'lew' },
    { word: 'gripe',   answer: 'i_e' },
    { word: 'launch',  answer: 'au,ch' },
    { word: 'stealth', answer: 'st,ea,th' },
    { word: 'gaunt',   answer: 'au' },
    { word: 'hay',     answer: 'ay' },
    { word: 'slaw',    answer: 'aw' },
    { word: 'grief',   answer: 'ie' },
    { word: 'thrall',  answer: 'th,al' },
    { word: 'drey',    answer: 'ey' },
    { word: 'want',    answer: 'wa' },
  ],

  // Page 44 下半：Level 2
  2: [
    { word: 'phew',  answer: 'ph,ew' },
    { word: 'frosh', answer: 'sh' },
    { word: 'boy',   answer: 'oy' },
    { word: 'blush', answer: 'sh' },
    { word: 'calk',  answer: 'al' },
    { word: 'flew',  answer: 'lew' },
    { word: 'lash',  answer: 'sh' },
    { word: 'ley',   answer: 'ey' },
    { word: 'yawn',  answer: 'aw' },
    { word: 'paul',  answer: 'au' },
    { word: 'broth', answer: 'th' },
    { word: 'wand',  answer: 'wa' },
  ],

  // Page 45 全部：Level 3（上 + 下）
  3: [
    // 上半
    { word: 'swab',  answer: 'wa' },
    { word: 'thaw',  answer: 'th,aw' },
    { word: 'law',   answer: 'aw' },
    { word: 'waist', answer: 'wa,ai' },
    { word: 'fey',   answer: 'ey' },
    { word: 'draw',  answer: 'aw' },
    { word: 'haunt', answer: 'au' },
    { word: 'flay',  answer: 'ay' },
    { word: 'new',   answer: 'ew' },
    { word: 'pall',  answer: 'al' },
    { word: 'dash',  answer: 'sh' },
    { word: 'toy',   answer: 'oy' },

    // 下半
    { word: 'pish',   answer: 'sh' },
    { word: 'brief',  answer: 'ie' },
    { word: 'swan',   answer: 'wa' },
    { word: 'wealth', answer: 'ea,th' },
    { word: 'ploy',   answer: 'oy' },
    { word: 'wane',   answer: 'a_e' },
    { word: 'knew',   answer: 'kn,ew' },
    { word: 'paw',    answer: 'aw' },
    { word: 'whey',   answer: 'wh,ey' },
    { word: 'lane',   answer: 'a_e' },
    { word: 'taunt',  answer: 'au' },
    { word: 'ball',   answer: 'al' },
  ],
};

LESSONS[14] = {
  1: [
    { word: "small",   answer: "al" },           // smALL
    { word: "laud",    answer: "au" },           // lAUd
    { word: "bray",    answer: "ay" },           // brAY
    { word: "soy",     answer: "oy" },           // sOY
    { word: "chime",   answer: "ch,i_e" },       // CH + I_E
    { word: "caw",     answer: "aw" },           // cAW
    { word: "washing", answer: "wa,sh,ing" },    // WA + SH + ING
    { word: "child",   answer: "ch,ild" },       // CH + ILD
    { word: "mite",    answer: "i_e" },          // mIte
    { word: "boat",    answer: "oa" },           // bOAt
    { word: "prey",    answer: "ey" },           // prEY
    { word: "told",    answer: "old" }           // tOLD
  ],

  2: [
    { word: "spray",  answer: "sp,ay" },         // SP + AY
    { word: "mall",   answer: "al" },            // mALL
    { word: "haw",    answer: "aw" },            // hAW
    { word: "chalk",  answer: "ch,al" },         // CH + AL
    { word: "hold",   answer: "old" },           // hOLD
    { word: "Claus",  answer: "au" },            // ClAUS
    { word: "glade",  answer: "a_e" },           // glADe
    { word: "scribe", answer: "sc,i_e" },        // SC + I_E
    { word: "wild",   answer: "ild" },           // wILD
    { word: "swamp",  answer: "wa" },            // SWA...
    { word: "mile",   answer: "i_e" },           // mIle
    { word: "croak",  answer: "oa" }             // crOAk
  ],

  // Level 3 = 右上 + 右下，做 review pool（可以多過 12 個）
  3: [
    // 右上
    { word: "tray",   answer: "ay" },
    { word: "grey",   answer: "ey" },
    { word: "toy",    answer: "oy" },
    { word: "watch",  answer: "wa,tch" },        // WA + TCH
    { word: "fall",   answer: "al" },
    { word: "daub",   answer: "au" },
    { word: "stuff",  answer: "st" },            // ST 喺字頭
    { word: "balk",   answer: "al" },
    { word: "mild",   answer: "ild" },
    { word: "slay",   answer: "ay" },
    { word: "float",  answer: "oa" },
    { word: "yaw",    answer: "aw" },

    // 右下
    { word: "watt",   answer: "wa" },
    { word: "maw",    answer: "aw" },
    { word: "talk",   answer: "al" },
    { word: "stray",  answer: "st,ay" },
    { word: "kind",   answer: "ind" },
    { word: "blind",  answer: "ind" },
    { word: "joy",    answer: "oy" },
    { word: "toad",   answer: "oa" },
    { word: "fault",  answer: "au" },
    { word: "lone",   answer: "o_e" },
    { word: "scold",  answer: "sc,old" },        // SC + OLD
    { word: "wife",   answer: "i_e" }
  ]
};

LESSONS[15] = {
  // A 組 → Level 1
  1: [
    { word: "foam",  answer: "oa"   },
    { word: "mind",  answer: "ind"  },
    { word: "sloop", answer: "oo"   },
    { word: "swine", answer: "i_e"  },
    { word: "stalk", answer: "al"   },
    { word: "slaw",  answer: "aw"   },
    { word: "flaw",  answer: "aw"   },
    { word: "claus", answer: "au"   },
    { word: "coach", answer: "oa"   },
    { word: "mold",  answer: "old"  },
    { word: "coy",   answer: "oy"   },
    { word: "tow",   answer: "ow"   },
  ],

  // C 組 → Level 2
  2: [
    { word: "snow",  answer: "ow"   },
    { word: "loan",  answer: "oa"   },
    { word: "churn", answer: "ur"   },
    { word: "soap",  answer: "oa"   },
    { word: "crook", answer: "ook"  },
    { word: "prey",  answer: "ey"   },
    { word: "reem",  answer: "ee"   },
    { word: "stall", answer: "al"   },
    { word: "mind",  answer: "ind"  },
    { word: "fraud", answer: "au"   },
    { word: "bind",  answer: "ind"  },
    { word: "prawn", answer: "aw"   },
  ],

  // Level 3 = B + D 組
  3: [
    // B 組（page 50 下半）
    { word: "spoon", answer: "oo"   },
    { word: "blind", answer: "ind"  },
    { word: "look",  answer: "oo"   }, // 用 oo，rook 俾 ook
    { word: "jowl",  answer: "ow"   },
    { word: "ick",   answer: "ic"   },
    { word: "law",   answer: "aw"   },
    { word: "vise",  answer: "i_e"  },
    { word: "grey",  answer: "ey"   },
    { word: "hall",  answer: "al"   },
    { word: "daw",   answer: "aw"   },
    { word: "heed",  answer: "ee"   },
    { word: "stunk", answer: ""     }, // 冇 target，唔需要圈

    // D 組（page 51 下半）
    { word: "spick", answer: "ic"   },
    { word: "troy",  answer: "oy"   },
    { word: "rook",  answer: "ook"  },
    { word: "cloak", answer: "oa"   },
    { word: "sow",   answer: "ow"   },
    { word: "call",  answer: "al"   },
    { word: "cold",  answer: "old"  },
    { word: "coal",  answer: "oa"   },
    { word: "haul",  answer: "au"   },
    { word: "fold",  answer: "old"  },
    { word: "child", answer: "ild"  },
    { word: "lawn",  answer: "aw"   },
  ],
};

LESSONS[16] = {
  // Level 1 = A 組（smear ～ groan）
  1: [
    { word: "smear", answer: "ear" },
    { word: "crook", answer: "ook" },
    { word: "deed",  answer: "ee"  },
    { word: "pale",  answer: "a_e" },
    { word: "steer", answer: "st,eer" },
    { word: "hear",  answer: "ear" },
    { word: "raid",  answer: "ai" },
    { word: "clear", answer: "ear" },
    { word: "shoo",  answer: "sh,oo" },
    { word: "swoop", answer: "oo" },
    { word: "gown",  answer: "ow" },
    { word: "groan", answer: "oa" }
  ],

  // Level 2 = C 組（cheat ～ kind）
  2: [
    { word: "cheat",  answer: "ch,ea" },
    { word: "gripe",  answer: "i_e"   },
    { word: "stoop",  answer: "st,oo" },
    { word: "peer",   answer: "eer"  },
    { word: "throat", answer: "th,oa"},
    { word: "sheer",  answer: "sh,eer"},
    { word: "dish",   answer: "sh"   },
    { word: "pow",    answer: "ow"   },
    { word: "serf",   answer: "er"   },
    { word: "blind",  answer: "ind"  },
    { word: "chain",  answer: "ch,ai"},
    { word: "kind",   answer: "ind"  }
  ],

  // Level 3 = B + D 組
  3: [
    // B 組（down ～ mind）
    { word: "down",  answer: "ow"     },
    { word: "book",  answer: "ook"    },
    { word: "sear",  answer: "ear"    },
    { word: "shoal", answer: "sh,oa"  },
    { word: "brown", answer: "ow"     },
    { word: "pail",  answer: "ai"     },
    { word: "slow",  answer: "ow"     },
    { word: "crime", answer: "i_e"    },
    { word: "steer", answer: "st,eer" },
    { word: "beer",  answer: "eer"    },
    { word: "yoke",  answer: "o_e"    },
    { word: "mind",  answer: "ind"    },

    // D 組（lime ～ gear）
    { word: "lime",  answer: "i_e" },
    { word: "fetch", answer: "tch" },
    { word: "leer",  answer: "eer" },
    { word: "brow",  answer: "ow"  },
    { word: "deer",  answer: "eer" },
    { word: "bow",   answer: "ow"  },
    { word: "oaf",   answer: "oa"  },
    { word: "maim",  answer: "ai"  },
    { word: "her",   answer: "er"  },
    { word: "clade", answer: "a_e" },
    { word: "tenth", answer: "th"  },
    { word: "gear",  answer: "ear" }
  ]
};

