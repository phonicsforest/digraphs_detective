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
    { word: "zig",   answer: "ig" },
    { word: "kick",  answer: "ic" },
    { word: "big",   answer: "ig" },
    { word: "crick", answer: "ic" },
    { word: "migs",    answer: "ig" },
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
    { word: "reg",     answer: "eg" },
    { word: "nix",     answer: "ix" },
    { word: "digs",  answer: "ig" },
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
    { word: "eve",    answer: "e_e" },
    { word: "ash",    answer: "sh" },
    { word: "ape",    answer: "a_e" },  // Ape
    { word: "inch",   answer: "ch" },
    { word: "dig",    answer: "ig" },
    { word: "meg",    answer: "eg" },
    { word: "meme",   answer: "e_e" },  // mEme
    { word: "six",    answer: "ix" },
    { word: "snatch", answer: "tch" },
    { word: "name",   answer: "a_e" },
    { word: "ride",   answer: "i_e" },

  ],
  2: [
    { word: "shell",  answer: "sh" },
    { word: "peg",    answer: "eg" },
    { word: "pick",   answer: "ic" },
    { word: "lymph",  answer: "ph" },
    { word: "lunch",  answer: "ch" },
    { word: "thrill", answer: "th" },
    { word: "ditch",  answer: "tch" },
    { word: "take",   answer: "a_e" },
    { word: "gig",    answer: "ig" },
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
    { word: 'pole',  answer: 'o_e' },
    { word: 'june',  answer: 'ju_e' }, // j + u_e
    { word: 'flute', answer: 'lu_e' }
    { word: 'witch', answer: 'tch' },
    { word: 'puke',  answer: 'u_e' },
    { word: 'home',  answer: 'o_e' },
    { word: 'rule',  answer: 'ru_e' }, // r + u_e
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
    { word: 'eve',   answer: 'e_e' },
    { word: 'mule',  answer: 'u_e' }
  ],
  3: [
    { word: 'wane',  answer: 'a_e' },
    { word: 'gash',  answer: 'sh' },
    { word: 'dope',  answer: 'o_e' },
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

  ],
  2: [
    { word: "joke",  answer: "o_e" },  // joKe
    { word: "king",  answer: "ing" },  // kING
    { word: "lake",  answer: "a_e" },  // laKe
    { word: "lope",  answer: "o_e" },  // loPe
    { word: "flute", answer: "lu_e" },  // fluTe
    { word: "hive",  answer: "i_e" },  // hIve
    { word: "knot",  answer: "kn"  },  // KNot
    { word: "stock", answer: "st"  },  // STock
  ],
  3: [
    { word: "nope",  answer: "o_e" },  // noPe
    { word: "trike", answer: "i_e" },  // trIke
    { word: "pink",  answer: "ink" },  // pINK
    { word: "lute",  answer: "lu_e" },  // luTe
    { word: "sale",  answer: "a_e" },  // saLe
    { word: "knap",  answer: "kn"  },  // KNap
    { word: "cove",  answer: "o_e" },  // coVe
    { word: "cling", answer: "ing" },  // clING（照你講用長啲嗰個）
    { word: "gong",  answer: "ng"  },  // goNG
    { word: "fluke", answer: "lu_e" },  // fluKe
  ],
};

LESSONS[7] = {
  1: [


  ],
  2: [
    { word: "wink", answer: "ink" },
    { word: "dive", answer: "i_e" },
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
    { word: "brute", answer: "ru_e" },
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
    { word: "head",   answer: "ea" },
    { word: "glue",   answer: "ue" },
    { word: "line",   answer: "i_e" },
    { word: "bee",    answer: "ee" },
    { word: "pie",    answer: "ie" },
    { word: "clue",   answer: "ue" },
    { word: "brig",   answer: "ig" },
    { word: "whine",  answer: "wh,i_e" },   // wh + i_e
    { word: "steep",  answer: "st,ee" },
    { word: "knee",   answer: "kn,ee" },    // kn + ee
    { word: "queen",  answer: "qu,ee" },
    { word: "wreath", answer: "wr,ea,th" }, // wr + ea + th
    { word: "breath", answer: "ea,th" },
    { word: "wring",  answer: "wr,ing" },
    { word: "flue",   answer: "ue" },

  ],

  2: [
    { word: "flute",  answer: "lu_e" },
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
    { word: "weak",   answer: "ea" },
    { word: "true",   answer: "ue" },
    { word: "leap",   answer: "ea" },
    { word: "beef",   answer: "ee" },
    { word: "sing",   answer: "ing" },
    { word: "quit",   answer: "qu" },
    { word: "knock",  answer: "kn" },
    { word: "cleat",  answer: "ea" },
    { word: "tree",   answer: "ee" },
    { word: "blue",   answer: "ue" },
    { word: "ding",   answer: "ing" },
    { word: "wren",   answer: "wr" },
    { word: "team",   answer: "ea" }
  ]
};

LESSONS[9] = {
  1: [
    { word: "tern",   answer: "er" },    // 新: er
    { word: "church",   answer: "ur,ch" },    // 新: ur
    { word: "sir",    answer: "ir" },    // 新: ir
    { word: "girl",   answer: "ir" },    // 新: ir
    { word: "slur",   answer: "ur" },    // 新: ur
    { word: "nerve",  answer: "er" },    // 新: er
    { word: "thorn",  answer: "th,or" },
    { word: "storm",  answer: "st,or" },
    { word: "sharp",  answer: "sh,ar" },
    { word: "farm",  answer: "ar" },


    { word: "wrench", answer: "wr,ch" },    // 舊: wr
    { word: "splat",  answer: "sp" },    // 用 sp
    { word: "deal",   answer: "ea" },
    { word: "pee",    answer: "ee" },
    { word: "chief",  answer: "ch,ie" },
    { word: "queen",  answer: "qu,ee" },
    { word: "flea",   answer: "ea" },
    { word: "whine",  answer: "wh,i_e" },// wh + i_e
    { word: "wrung",  answer: "wr,ng" },    // wr（亦有 ng）
    { word: "chick",  answer: "ch,ic" }, // ch + ic
    { word: "steal",  answer: "st,ea" },
    { word: "speech", answer: "sp,ee,ch" },
    { word: "whale",  answer: "wh,a_e" },// wh + a_e
    { word: "thief",  answer: "th,ie" },
    { word: "wrong",  answer: "wr,ng" },
    { word: "wheel",  answer: "wh,ee" }, // wh + ee
    { word: "white",  answer: "wh,i_e" },
    { word: "spine",  answer: "sp,i_e" },

  ],
  2: [
    { word: "cream",  answer: "ea" },
    { word: "dream",  answer: "ea" },
    { word: "fee",    answer: "ee" },
    { word: "lief",   answer: "ie" },
    { word: "dig",    answer: "ig" },
    { word: "gee",    answer: "ee" },
    { word: "code",   answer: "o_e" },
    { word: "jerk",   answer: "er" }     // 新: er
  ],
  3: [
    { word: "feat",   answer: "ea" },
    { word: "burst",  answer: "ur" },    // 新: ur
    { word: "wry",    answer: "wr" },
    { word: "brief",  answer: "ie" },
    { word: "serve",  answer: "er" },    // 新: er
    { word: "berm",   answer: "er" },    // 新: er
    { word: "scot",   answer: "sc" },
    { word: "dirt",   answer: "ir" },    // 新: ir
    { word: "her",    answer: "er" },    // 新: er
    { word: "bead",   answer: "ea" },
    { word: "fur",    answer: "ur" },    // 新: ur
    { word: "first",  answer: "ir" },    // 新: ir
    { word: "fern",   answer: "er" },    // 新: er
    { word: "spit",   answer: "sp" },
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
    { word: "lewd",  answer: "lew" },
    { word: "wain",  answer: "ai" },
    { word: "they",  answer: "ey" },
    { word: "lord",  answer: "or" },
    { word: "stay",  answer: "st,ay" },
    { word: "soy",   answer: "oy" },
    { word: "point", answer: "oi" },
    { word: "crew",  answer: "rew" }
  ],

  2: [
    { word: "orc",   answer: "or" },
    { word: "tort",  answer: "or" },
    { word: "prey",  answer: "ey" },
    { word: "boil",  answer: "oi" },
    { word: "strew", answer: "st,ew" },
    { word: "bard",  answer: "ar" },
    { word: "blew",  answer: "lew" },
    { word: "say",   answer: "ay" },
    { word: "waif",  answer: "ai" },
    { word: "maid",  answer: "ai" },
    { word: "lark",  answer: "ar" },
    { word: "coy",   answer: "oy" }
  ],

  3: [
    { word: "scorn", answer: "sc,or" },
    { word: "storm", answer: "st,or" },
    { word: "wail",  answer: "ai" },
    { word: "joy",   answer: "oy" },
    { word: "tarn",  answer: "ar" },
    { word: "make",  answer: "a_e" },
    { word: "flew",  answer: "lew" },
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
    { word: "thorn", answer: "th,or" }
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
    { word: 'waist', answer: 'ai' },
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
    { word: "swamp",  answer: "wa" },            // 
    { word: "mile",   answer: "i_e" },           // mIle
    { word: "croak",  answer: "oa" }             // crOAk
  ],
  3: [
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
    { word: "stalk", answer: "st,al"   },
    { word: "slaw",  answer: "aw"   },
    { word: "flaw",  answer: "aw"   },
    { word: "claus", answer: "au"   },
    { word: "coach", answer: "oa,ch"   },
    { word: "mold",  answer: "old"  },
    { word: "coy",   answer: "oy"   },
    { word: "tow",   answer: "ow"   },
  ],

  // C 組 → Level 2
  2: [
    { word: "snow",  answer: "ow"   },
    { word: "loan",  answer: "oa"   },
    { word: "churn", answer: "ch,ur"   },
    { word: "soap",  answer: "oa"   },
    { word: "crook", answer: "ook"  },
    { word: "prey",  answer: "ey"   },
    { word: "reem",  answer: "ee"   },
    { word: "stall", answer: "st,al"   },
    { word: "mind",  answer: "ind"  },
    { word: "fraud", answer: "au"   },
    { word: "bind",  answer: "ind"  },
    { word: "prawn", answer: "aw"   },
  ],

  // Level 3 = B + D 組
  3: [
    // B 組（page 50 下半）
    { word: "spoon", answer: "sp,oo"   },
    { word: "blind", answer: "ind"  },
    { word: "look",  answer: "ook"   }, // 用 oo，rook 俾 ook
    { word: "jowl",  answer: "ow"   },
    { word: "ick",   answer: "ic"   },
    { word: "law",   answer: "aw"   },
    { word: "vise",  answer: "i_e"  },
    { word: "grey",  answer: "ey"   },
    { word: "hall",  answer: "al"   },
    { word: "daw",   answer: "aw"   },
    { word: "heed",  answer: "ee"   },
    { word: "stunk", answer: "st"     }, // 冇 target，唔需要圈

    // D 組（page 51 下半）
    { word: "spick", answer: "sp,ic"   },
    { word: "troy",  answer: "oy"   },
    { word: "rook",  answer: "ook"  },
    { word: "cloak", answer: "oa"   },
    { word: "sow",   answer: "ow"   },
    { word: "call",  answer: "al"   },
    { word: "cold",  answer: "old"  },
    { word: "coal",  answer: "oa"   },
    { word: "haul",  answer: "au"   },
    { word: "fold",  answer: "old"  },
    { word: "child", answer: "ch,ild"  },
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

LESSONS[17] = {
  1: [
    { word: "sook",   display: "sook",    answer: "ook"   },
    { word: "donkey", display: "don‧key", answer: "ey"   },
    { word: "nancy",  display: "nan‧cy",  answer: "y"    },
    { word: "luncy",  display: "lun‧cy",  answer: "y"    },
    { word: "happy",  display: "hap‧py",  answer: "y"    },
    { word: "show",   display: "show",    answer: "sh,ow"   },
    { word: "foamy",  display: "foa‧my",  answer: "oa,y"   },
    { word: "whoop",  display: "whoop",   answer: "wh,oo"   },
    { word: "nose",   display: "nose",    answer: "o_e"  },
    { word: "thrown", display: "thrown",  answer: "th,ow"   },
    { word: "year",   display: "year",    answer: "ear"  },
    { word: "gorp",   display: "gorp",    answer: "or"   }
  ],

  2: [
    { word: "treat",  display: "treat",    answer: "ea"   },
    { word: "force",  display: "force",    answer: "or"   },
    { word: "Disney", display: "Dis‧ney",  answer: "ey"   },
    { word: "Sidney", display: "Sid‧ney",  answer: "ey"   },
    { word: "peace",  display: "peace",    answer: "ea"   },
    { word: "town",   display: "town",     answer: "ow"   },
    { word: "sleepy", display: "sleep‧y",  answer: "ee,y"    },
    { word: "throw",  display: "throw",    answer: "th,ow"   },
    { word: "troop",  display: "troop",    answer: "oo"   },
    { word: "nick",   display: "nick",     answer: "ic"   },
    { word: "funny",  display: "fun‧ny",   answer: "y"    },
    { word: "spear",  display: "spear",    answer: "sp,ear"  }
  ],

  3: [
    { word: "cheer",  display: "cheer",    answer: "ch,eer"  },
    { word: "gloat",  display: "gloat",    answer: "oa"   },
    { word: "broom",  display: "broom",    answer: "oo"   },
    { word: "dear",   display: "dear",     answer: "ear"  },
    { word: "prawn",  display: "prawn",    answer: "aw"   },
    { word: "deer",   display: "deer",     answer: "eer"  },
    { word: "sunny",  display: "sun‧ny",   answer: "y"    },
    { word: "cheek",  display: "cheek",    answer: "ch,ee"   },
    { word: "blow",   display: "blow",     answer: "ow"   },
    { word: "stall",  display: "stall",    answer: "st,al"   },
    { word: "dirty",  display: "dir‧ty",   answer: "ir,y"   },
    { word: "near",   display: "near",     answer: "ear"  },

    { word: "brood",  display: "brood",    answer: "oo"   },
    { word: "now",    display: "now",      answer: "ow"   },
    { word: "grey",   display: "grey",     answer: "ey"   },
    { word: "loan",   display: "loan",     answer: "oa"   },
    { word: "howl",   display: "howl",     answer: "ow"   },
    { word: "seer",   display: "seer",     answer: "eer"  },
    { word: "mickey", display: "mic‧key",  answer: "ic,ey"   },
    { word: "body",   display: "bo‧dy",    answer: "y"    },
    { word: "gold",   display: "gold",     answer: "old"  },
    { word: "mail",   display: "mail",     answer: "ai"   },
    { word: "floppy", display: "flop‧py",  answer: "y"    },
    { word: "teal",   display: "teal",     answer: "ea"   }
  ]
};

LESSONS[18] = {
  1: [
    { word: "cell",   answer: "ce"   },
    { word: "raw",    answer: "aw"   },
    { word: "dais",   answer: "ai"   },
    { word: "barn",   answer: "ar"   },
    { word: "herb",   answer: "er"   },
    { word: "mail",   answer: "ai"   },
    { word: "torch",  answer: "or,ch"   },
    { word: "city",   display: "ci‧ty",   answer: "ci,y" },
    { word: "bleed",  answer: "ee"   },
    { word: "slosh",  answer: "sh"   },
    { word: "gall",   answer: "al"   },
    { word: "wow",    answer: "ow"   }
  ],
  2: [
    { word: "mirth",  answer: "ir,th"   },
    { word: "force",  answer: "or,ce"   },
    { word: "scoot",  answer: "sc,oo"   },

    { word: "sold",   answer: "old"  },
    { word: "cheek",  answer: "ch,ee"   },
    { word: "toy",    answer: "oy"   },

    { word: "bake",   answer: "a_e"  },
    { word: "throw",  answer: "th,ow"   },
    { word: "peace",  answer: "ea,ce"   },

    { word: "mace",   answer: "ace"   },
    { word: "reem",   answer: "ee"   },
    { word: "fraud",  answer: "au"   }
  ],

  3: [
    { word: "churn",   answer: "ur"   },
    { word: "civic",   display: "ci‧vic",  answer: "ci,ic" },
    { word: "strine",  answer: "st,i_e"  },

    { word: "mind",    answer: "ind"  },
    { word: "loaf",    answer: "oa"   },
    { word: "woad",    answer: "oa"   },

    { word: "soy",     answer: "oy"   },
    { word: "weed",    answer: "ee"   },
    { word: "pace",    answer: "ace"   },

    { word: "space",   answer: "sp,ace"   },
    { word: "dray",    answer: "ay"   },
    { word: "straw",   answer: "st,aw"   },

    { word: "bite",    answer: "i_e"  },
    { word: "cent",    answer: "ce"   },
    { word: "jaunt",   answer: "au"   },

    { word: "bloat",   answer: "oa"   },
    { word: "scratch", answer: "sc,tch"  },
    { word: "glean",   answer: "ea"   },

    { word: "moon",    answer: "oo"   },
    { word: "whirl",   answer: "wh,ir"   },
    { word: "fleecy",  display: "flee‧cy", answer: "ee,cy" },

    { word: "sauce",   answer: "au,ce"   },
    { word: "graph",   answer: "ph"   },
    { word: "rule",    answer: "ru_e" }
  ]
};

LESSONS[19] = {
  1: [
    { word: "hedge",  answer: "dge" },
    { word: "new",    answer: "ew"  },
    { word: "queen",  answer: "qu,ee"  },
    { word: "when",   answer: "wh"  },
    { word: "free",   answer: "ee"  },
    { word: "guide",  answer: "gu,i_e"  },
    { word: "tooth",  answer: "oo,th"  },
    { word: "pork",   answer: "or"  },
    { word: "troy",   answer: "oy"  },
    { word: "write",  answer: "wr,i_e"  },
    { word: "cage",   answer: "age"  },
    { word: "fur",    answer: "ur"  }
  ],

  2: [
    { word: "they",   answer: "th,ey"  },
    { word: "bilge",  answer: "ge"  },
    { word: "brew",   answer: "rew"  },
    { word: "road",   answer: "oa"  },
    { word: "vein",   answer: "ei"  },
    { word: "herb",   answer: "er"  },
    { word: "pie",    answer: "ie"  },
    { word: "deer",   answer: "eer"  },
    { word: "tar",    answer: "ar"  },
    { word: "judge",  answer: "dge" },
    { word: "wrong",  answer: "wr,ng"  },
    { word: "large",  answer: "ar,ge"  }
  ],

  3: [
    { word: "cheer",  answer: "ch,eer" },
    { word: "charge", answer: "ch,ar,ge"  },
    { word: "first",  answer: "ir"  },
    { word: "bold",   answer: "old" },
    { word: "car",    answer: "ar"  },
    { word: "urge",   answer: "ur,ge"  },
    { word: "child",  answer: "ch,ild"  },
    { word: "flew",   answer: "lew"  },
    { word: "say",    answer: "ay"  },
    { word: "field",  answer: "ie"  },
    { word: "wedge",  answer: "dge" },
    { word: "bee",    answer: "ee"  },
    { word: "blue",   answer: "ue"  },
    { word: "read",   answer: "ea"  },
    { word: "bridge", answer: "dge" },
    { word: "large",  answer: "ar,ge"  },
    { word: "wing",   answer: "ing" },
    { word: "soil",   answer: "oi"  },
    { word: "cow",    answer: "ow"  },
    { word: "mild",   answer: "ild" },
    { word: "hear",   answer: "ear" },
    { word: "knock",  answer: "kn"  },
    { word: "gem",    answer: "ge"  },
    { word: "rain",   answer: "ai"  }
  ]
};
LESSONS[20] = {
  1: [ // 左上
    { word: "champ", answer: "ch" },
    { word: "bile", answer: "i_e" },
    { word: "wright", answer: "wr,ight" },
    { word: "round", answer: "ou" },
    { word: "fancy", answer: "cy", wordDisplay: "fan‧cy" },
    { word: "pace", answer: "ace" },
    { word: "night", answer: "ight" },
    { word: "pride", answer: "i_e" },
    { word: "look", answer: "ook" },
    { word: "skid", answer: "sk" },
    { word: "plough", answer: "ough" },
    { word: "dodge", answer: "dge" }
  ],

  2: [ // 左下
    { word: "cadge", answer: "dge" },
    { word: "mesh", answer: "sh" },
    { word: "blight", answer: "ight" },
    { word: "jive", answer: "i_e" },
    { word: "tight", answer: "ight" },
    { word: "cope", answer: "o_e" },
    { word: "splay", answer: "sp,ay" },
    { word: "wench", answer: "ch" },
    { word: "high", answer: "igh" },
    { word: "bough", answer: "ough" },
    { word: "army", answer: "ar,y", wordDisplay: "ar‧my" },
    { word: "noun", answer: "ou" }
  ],

  3: [ // 右上 + 右下 = Level 3
    { word: "hush", answer: "sh" },
    { word: "flight", answer: "ight" },
    { word: "naughty", answer: "augh,y", wordDisplay: "naugh‧ty" }, // augh = ough family
    { word: "fight", answer: "ight" },
    { word: "cent", answer: "ce" },
    { word: "thigh", answer: "th,igh" },
    { word: "sticky", answer: "st,ic,y", wordDisplay: "stic‧ky" },
    { word: "foul", answer: "ou" },
    { word: "forge", answer: "or,ge" },
    { word: "bought", answer: "ought" },
    { word: "budge", answer: "dge" },
    { word: "caught", answer: "au,gh" },

    { word: "woody", answer: "oo,y", wordDisplay: "woo‧dy" },
    { word: "out", answer: "ou" },
    { word: "fright", answer: "ight" },
    { word: "seam", answer: "ea" },
    { word: "bold", answer: "old" },
    { word: "aught", answer: "au,gh" },
    { word: "space", answer: "sp,ace" },
    { word: "fought", answer: "ought" },
    { word: "sigh", answer: "igh" },
    { word: "thrust", answer: "th" },
    { word: "croon", answer: "oo" },
    { word: "high", answer: "igh" }
  ]
};

LESSONS[21] = {
// lesson 29
  1: [
    { word: "stone",  answer: "st,o_e" },
    { word: "fair",   answer: "air" },
    { word: "twirl",  answer: "ir" },
    { word: "fowl",   answer: "ow" },
    { word: "yearn",  answer: "ear" },
    { word: "wear",   answer: "ear" },
    { word: "nudge",  answer: "dge" },
    { word: "ear",    answer: "ear" },
    { word: "lair",   answer: "air" },
    { word: "breed",  answer: "ee" },
    { word: "gout",   answer: "ou" },
    { word: "thumb",  answer: "th" }
  ],
  2: [
    { word: "scrum",    answer: "sc" },
    { word: "hare",     answer: "are" },
    { word: "loam",     answer: "oa" },
    { word: "forecast", answer: "or", wordDisp: "fore‧cast" },
    { word: "scope",    answer: "sc,o_e" },
    { word: "share",    answer: "sh,are" },
    { word: "fear",     answer: "ear" },
    { word: "sore",     answer: "or" },
    { word: "cinch",    answer: "ci,ch" },
    { word: "vine",     answer: "i_e" },
    { word: "trace",    answer: "ace" },
    { word: "eve",      answer: "e_e" }
  ],
  3: [
    { word: "hedge",   answer: "dge" },
    { word: "role",    answer: "o_e" },
    { word: "queen",   answer: "qu,ee" },
    { word: "when",    answer: "wh" },
    { word: "pearl",   answer: "ear" },
    { word: "guide",   answer: "gu,i_e" },
    { word: "tooth",   answer: "oo,th" },
    { word: "pork",    answer: "or" },
    { word: "hair",    answer: "air" },
    { word: "write",   answer: "wr,i_e" },
    { word: "spare",   answer: "sp,are" },
    { word: "fur",     answer: "ur" },

    { word: "they",    answer: "th,ey" },
    { word: "bilge",   answer: "ge" },
    { word: "search",  answer: "ear,ch" },
    { word: "earn",    answer: "ear" },
    { word: "vein",    answer: "ei" },
    { word: "fair",    answer: "air" },
    { word: "fare",    answer: "are" },
    { word: "flute",   answer: "lu_e" },
    { word: "tar",     answer: "ar" },
    { word: "judge",   answer: "dge" },
    { word: "wrong",   answer: "wr,ng" },
    { word: "fridge",  answer: "dge" }
  ]
};

LESSONS[22] = {
  1: [
    { word: "droop",  answer: "oo"   },
    { word: "knight", answer: "kn,ight"  },
    { word: "tow",    answer: "ow"   },
    { word: "shoot",  answer: "sh,oo"   },
    { word: "bowl",   answer: "ow"   },
    { word: "shore",  answer: "sh,or"   },
    { word: "score",  answer: "sc,or"   },
    { word: "work",   answer: "wor"  },
    { word: "noun",   answer: "ou"   },
    { word: "wheeze", answer: "wh,ee"   },
    { word: "wage",   answer: "age"   },
    { word: "worst",  answer: "wor"  }
  ],

  2: [
    { word: "board", answer: "oar" },
    { word: "find",  answer: "ind" },
    { word: "rout",  answer: "ou"  },
    { word: "dose",  answer: "o_e" },
    { word: "roar",  answer: "oar" },
    { word: "wort",  answer: "wor" },
    { word: "gore",  answer: "or"  },
    { word: "paid",  answer: "ai"  },
    { word: "hong",  answer: "ng"  },
    { word: "still", answer: "st"  }, // 開頭 st
    { word: "light", answer: "ight" },
    { word: "hake",  answer: "a_e" }
  ],

  3: [
    { word: "snore",  answer: "or"  },
    { word: "huge",   answer: "uge" },
    { word: "morn",   answer: "or"  },
    { word: "main",   answer: "ai"  },
    { word: "lush",   answer: "sh"  },
    { word: "might",  answer: "ight" },
    { word: "gape",   answer: "a_e" },
    { word: "wight",  answer: "ight" },
    { word: "peal",   answer: "ea"  },
    { word: "fledge", answer: "dge" },
    { word: "prick",  answer: "ic"  },
    { word: "south",  answer: "ou,th"  },
    { word: "doubt",  answer: "ou"  },
    { word: "store",  answer: "st,or"  },
    { word: "puce",   answer: "uce"  },
    { word: "cheap",  answer: "ch,ea"  },
    { word: "plight", answer: "ight" },
    { word: "hoar",   answer: "oar" },
    { word: "core",   answer: "or"  },
    { word: "mow",    answer: "ow"  },
    { word: "race",   answer: "ace" },
    { word: "dick",   answer: "ic"  },
    { word: "more",   answer: "or"  },
    { word: "line",   answer: "i_e" }
  ]
};


LESSONS[23] = {
  1: [
    { word: "ought", answer: "ought" },
    { word: "spire", answer: "sp,ire"   },
    { word: "yore",  answer: "or"    },
    { word: "world", answer: "wor"   },
    { word: "rain",  answer: "ai"    },
    { word: "pore",  answer: "or"    },
    { word: "seal",  answer: "ea"    },
    { word: "tore",  answer: "or"    },
    { word: "warm",  answer: "war"   },
    { word: "shoot", answer: "sh,oo"    },
    { word: "goat",  answer: "oa"    },
    { word: "wart",  answer: "war"   }
  ],

  2: [
    { word: "bight", answer: "ight" },
    { word: "dire",  answer: "ire"  },
    { word: "badge", answer: "dge"  },
    { word: "sauce", answer: "au,ce"   },
    { word: "mouse", answer: "ou"   },
    { word: "learn", answer: "ear"  },
    { word: "lunge", answer: "ge"   },
    { word: "warp",  answer: "war"  },
    { word: "fire",  answer: "ire"  },
    { word: "bread", answer: "ea"   },
    { word: "mire",  answer: "ire"  },
    { word: "spare", answer: "sp,are"  }
  ],
  3: [
    { word: "tire",   answer: "ire"   },
    { word: "mole",   answer: "o_e"   },
    { word: "queen",  answer: "qu,ee"    },
    { word: "bought", answer: "ought" },
    { word: "hire",   answer: "ire"   },
    { word: "ward",   answer: "war"   },
    { word: "booth",  answer: "oo,th"    },
    { word: "pork",   answer: "or"    },
    { word: "hair",   answer: "air"   },
    { word: "cell",   answer: "ce"    },
    { word: "take",   answer: "a_e"   },
    { word: "wire",   answer: "ire"   },
    { word: "warn",   answer: "war"   },
    { word: "bilge",  answer: "ge"    },
    { word: "right",  answer: "ight"  },
    { word: "earn",   answer: "ear"   },
    { word: "vein",   answer: "ei"    },
    { word: "fair",   answer: "air"   },
    { word: "cake",   answer: "a_e"   },
    { word: "rude",   answer: "ru_e"   },
    { word: "dwarf",  answer: "war"   },
    { word: "hedge",  answer: "dge"    },
    { word: "wring",  answer: "wr,ing"    },
    { word: "mole",   answer: "o_e"   }
  ]
};

LESSONS[24] = {
  1: [
    { word: "wool",   answer: "oo" },
    { word: "threat", answer: "th,ea" },
    { word: "cellar", display: "ce‧llar", answer: "ce,ar" },
    { word: "harbor", display: "har‧bor", answer: "ar,or" },
    { word: "actor", display: "act‧or", answer: "or" },
    { word: "saucy", display: "sau‧cy", answer: "au,cy" },
    { word: "curly", display: "cur‧ly", answer: "ur,y" },
    { word: "orca",  display: "or‧ca", answer: "or,a" },
    { word: "pool",   answer: "oo" },
    { word: "food",   answer: "oo" },
    { word: "nurse",  answer: "ur" },
    { word: "dearth", display: "dearth", answer: "ear,th" }
  ],
  2: [
    { word: "tooth",  answer: "oo,th" },
    { word: "thumb",  answer: "th" },
    { word: "tote",   answer: "o_e" },
    { word: "glow",   answer: "ow" },
    { word: "letter", display: "let‧ter", answer: "er" },
    { word: "Elsa",  display: "El‧sa", answer: "a" },
    { word: "grime",  answer: "i_e" },
    { word: "doctor", display: "doc‧tor",    answer: "or" },
    { word: "warm",   answer: "war" },
    { word: "bough",  answer: "ou,gh" },
    { word: "cleat",  answer: "ea" },
    { word: "oak",    answer: "oa" }
  ],
  3: [
    { word: "took", answer: "ook" },
    { word: "fleecy", display: "flee‧cy",  answer: "ee,cy" },
    { word: "mind",   answer: "ind" },
    { word: "boart", answer: "oar" },
    { word: "such",   answer: "ch" },
    { word: "purge",   answer: "ur,ge" },
    { word: "bosh",   answer: "sh" },
    { word: "rear",   answer: "ear" },
    { word: "hoarse",   answer: "oar" },
    { word: "smudge",  answer: "dge" },
    { word: "nowt", answer: "ow" },
    { word: "chair",  answer: "ch,air" },
    { word: "glide", answer: "i_e" },
    { word: "smear", answer: "ear" },
    { word: "drown", answer: "ow" },
    { word: "bout",  answer: "ou" },
    { word: "skim",  answer: "sk" },
    { word: "soar",  answer: "oar" },
    { word: "jeer",   answer: "eer" },
    { word: "wick",  answer: "ic" },
    { word: "scoop", answer: "sc,oo" },
    { word: "moan",  answer: "oa" },
    { word: "row",   answer: "ow" },
    { word: "sailor", display: "sai‧lor", answer: "ai,or" }
  ]
};


LESSONS[25] = {
  1: [
    { word: "tide",                     answer: "i_e"  }
    { word: "bracket",  display: "brac‧ket",  answer: "ket"  }
    { word: "vow",                     answer: "ow"  }
    { word: "voyage",   display: "voy‧age",  answer: "oy,age"  }
    { word: "pearl",                     answer: "ear"  }
    { word: "break",                     answer: "ea"  }
    { word: "take",                     answer: "a_e"  }
    { word: "roam",                     answer: "oa"  }
    { word: "ticket",   display: "tic‧ket",   answer: "ic,ket"  }
    { word: "skull",                     answer: "sk"  }
    { word: "cinder", display: "cin‧der", answer: "ci,er"  }
    { word: "ouch",                     answer: "ou,ch"  }
  ],

  2: [
    { word: "cottage",  display: "cot‧tage",  answer: "age"   },
    { word: "hockey",   display: "hoc‧key",   answer: "ey"   },
    { word: "message",  display: "mes‧sage", answer: "age"   },
    { word: "slide",                     answer: "i_e"   },
    { word: "power",    display: "pow‧er",answer: "ow,er"  },
    { word: "surf",                     answer: "ur"  },
    { word: "collar", display: "co‧llar", answer: "ar" },
    { word: "dame",                      answer: "a_e"   },
    { word: "victor", display: "vic‧tor", answer: "ic,or" },
    { word: "crush",                      answer: "sh"  },
    { word: "jacket", display: "jac‧ket", answer: "ket" },
    { word: "chook",                      answer: "ch,ook"  }
  ],

  3: [
    { word: "zeal",   answer: "ea"   },
    { word: "blown",                     answer: "ow"  },
    { word: "earth",                     answer: "ear,th"   },
    { word: "work",               answer: "wor"   },
    { word: "early",display: "ear‧ly",  answer: "ear,y"   },
    { word: "cloud",                     answer: "ou"  },
    { word: "stick",                     answer: "st,ic"  },
    { word: "goat",                      answer: "oa"  },
    { word: "pocket", display: "poc‧ket", answer: "ket"   },
    { word: "fear",                      answer: "ear"   },
    { word: "moon",   answer: "oo"   },
    { word: "monster",display: "mon‧ster",    answer: "st,er"   },
    { word: "soak",                      answer: "oa"  },
    { word: "letter",display: "let‧ter",     answer: "er"   },
    { word: "worth",                     answer: "wor,th"   },
    { word: "bairn", answer: "air" },
    { word: "roof",  answer: "oo" },
    { word: "hostage", display: "ho‧stage",    answer: "st,age"   },
    { word: "worship", display: "wor‧ship",     answer: "wor,sh"   },
    { word: "zebra",display: "ze‧bra",    answer: "a"   },
    { word: "groom",                     answer: "oo"   },
    { word: "mace",                      answer: "ace"   },
    { word: "house",                     answer: "ou"   },
    { word: "market", display: "mar‧ket",     answer: "ar,ket"  }
  ]
};



LESSONS[26] = {
  1: [
    { word: "mission", display: "mis‧sion", answer: "sion" },
    { word: "kite",                     answer: "i_e"  },
    { word: "walt",                     answer: "al"   },
    { word: "oyster", display: "oy‧ster",  answer: "oy,st,er"   },
    { word: "fraud",                    answer: "au"   },
    { word: "session", display: "ses‧sion", answer: "sion" },
    { word: "choke",                    answer: "ch,o_e"  },
    { word: "caution", display: "cau‧tion", answer: "au,tion" },
    { word: "judge",                    answer: "dge"  },
    { word: "dear",                     answer: "ear"  },
    { word: "rind",                     answer: "ind"  },
    { word: "gate",                     answer: "a_e"  }
  ],

  2: [
    { word: "author",  display: "au‧thor",  answer: "au,th,or"   },
    { word: "troy",                      answer: "oy"   },
    { word: "swarm",                     answer: "war"   },
    { word: "slick",                     answer: "ic"   },
    { word: "drink",                     answer: "ink"  },
    { word: "hoard",                     answer: "oar"  },
    { word: "mansion", display: "man‧sion", answer: "sion" },
    { word: "foot",                      answer: "oo"   },
    { word: "fission", display: "fis‧sion", answer: "sion" },
    { word: "tear",                      answer: "ear"  },
    { word: "portion", display: "por‧tion", answer: "or,tion" },
    { word: "work",                      answer: "wor"  }
  ],

  3: [
    { word: "flower",  display: "flow‧er",   answer: "ow,er"   },
    { word: "lodge",                     answer: "dge"  },
    { word: "sloop",                     answer: "oo"   },
    { word: "varnish", display: "var‧nish", answer: "ar,sh"   },
    { word: "slaw",                      answer: "aw"   },
    { word: "fave",                     answer: "a_e"  },
    { word: "child",                     answer: "ch,ild"  },
    { word: "mold",                      answer: "old"  },
    { word: "claus",                     answer: "au"   },
    { word: "deem",                      answer: "ee"   },
    { word: "mercy",   display: "mer‧cy",   answer: "er,cy"   },
    { word: "south",                     answer: "ou,th"   },
    { word: "earn",                      answer: "ear"  },
    { word: "grey",                      answer: "ey"   },
    { word: "proof",                     answer: "oo"   },
    { word: "tension", display: "ten‧sion", answer: "sion" },
    { word: "section", display: "sec‧tion", answer: "tion" },
    { word: "mouth",                     answer: "ou,th"   },
    { word: "ick",                       answer: "ic"   },
    { word: "with",                      answer: "th"   },
    { word: "stunk",                     answer: "st"   },
    { word: "feed",                      answer: "ee"   },
    { word: "trick",                     answer: "ic"   },
    { word: "tripe",                     answer: "i_e"  }
  ]
};

LESSONS[27] = {
  1: [
    { word: "scurf",   answer: "sc,ur"    },
    { word: "speak",   answer: "sp,ea"    },
    { word: "tray",    answer: "ay"    },
    { word: "mango", display: "man‧go",    answer: "o"     },
    { word: "head",    answer: "ea"    },
    { word: "tango",display: "tan‧go", answer: "o"     },
    { word: "yellow", display: "ye‧llow",   answer: "ow"    },
    { word: "gild",    answer: "ild"   },
    { word: "cellar", display: "ce‧llar", answer: "ce,ar"    },
    { word: "action", display: "ac‧tion", answer: "tion"  },
    { word: "elbow", display: "el‧bow",  answer: "ow"    },
    { word: "corpse",  answer: "or"}
  ],

  2: [
    { word: "beggar", display: "beg‧gar", answer: "eg,ar"    },
    { word: "hook",    answer: "ook"    },
    { word: "widow",   answer: "ow"    },
    { word: "cheddar", display: "ched‧dar", answer: "ch,ar"   },
    { word: "auto", display: "au‧to",   answer: "au,o"    },
    { word: "swallow", display: "swa‧llow", answer: "wa,ow"   },
    { word: "wort",     answer: "wor"  },
    { word: "sight",    answer: "ight"  },
    { word: "hippo", display: "hip‧po",   answer: "o"    },
    { word: "pleat",    answer: "ea"   },
    { word: "shadow", display: "sha‧dow",  answer: "sh,ow"   },
    { word: "cargo", display: "car‧go",   answer: "ar,o"    }
  ],

  3: [
    { word: "old",       answer: "old"   },
    { word: "fore",      answer: "or"    },
    { word: "vodka", display: "vod‧ka",    answer: "a"     },
    { word: "shout",     answer: "sh,ou"    },
    { word: "daughter", display: "daugh‧ter", answer: "au,gh,er"    },
    { word: "fiction", display: "fic‧tion",  answer: "ic,tion"  },
    { word: "swing",     answer: "ing"   },
    { word: "follow", display: "fo‧llow",   answer: "ow"    },
    { word: "drool",     answer: "oo"    },
    { word: "told",      answer: "old"   },
    { word: "skip",    answer: "sk"    },
    { word: "hear",      answer: "ear"   },
    { word: "cursor", display: "cur‧sor",   answer: "ur,or"    },
    { word: "lie",       answer: "ie"    },
    { word: "verdict", display: "ver‧dict", answer: "er,ic"   },
    { word: "happy", display: "hap‧py",  answer: "y"     },
    { word: "stray",     answer: "st,ay"    },
    { word: "window", display: "win‧dow",   answer: "ow"    },
    { word: "dread",     answer: "ea"    },
    { word: "oat",       answer: "oa"    },
    { word: "rainbow", display: "rain‧bow",  answer: "ai,ow"    },
    { word: "pension", display: "pen‧sion",  answer: "sion"  },
    { word: "horse",     answer: "or"    },
    { word: "deaf",      answer: "ea"    }
  ]
};

LESSONS[28] = {
  1: [
    { word: "cake",    answer: "a_e" },
    { word: "animal",  display: "a‧ni‧mal",  answer: "al"   },
    { word: "hollow",  display: "ho‧llow",  answer: "ow"   },
    { word: "bubble",  display: "bub‧ble",  answer: "le"   },
    { word: "trolley", display: "tro‧lley", answer: "ey"   },
    { word: "skip",    answer: "sk"  },
    { word: "blench",  answer: "ch"  },
    { word: "tout",    answer: "ou"  },
    { word: "troy",    answer: "oy"  },
    { word: "snorkel", display: "snor‧kel",  answer: "or,el"  },
    { word: "chimney", display: "chim‧ney",  answer: "ch,ey"  },
    { word: "pouch",   answer: "ou,ch"  }
  ],
  2: [
    { word: "central", display: "cent‧ral", answer: "ce,al"    },
    { word: "phone",   answer: "ph,o_e"        },
    { word: "swan",    answer: "wa"        },
    { word: "purple",  display: "pur‧ple",  answer: "ur,le"   },
    { word: "fault",   answer: "au"        },
    { word: "tunnel",  display: "tun‧nel",  answer: "el"   },
    { word: "bought",  answer: "ought"     },
    { word: "mammal",  display: "mam‧mal", answer: "al"    },
    { word: "root",    answer: "oo"        },
    { word: "Bella",   display: "Be‧lla",   answer: "a"   },
    { word: "grudge",  answer: "dge"       },
    { word: "spurt",   answer: "sp,ur"        }
  ],
  3: [
    { word: "load",    answer: "oa"        },
    { word: "warn",    answer: "war"       },
    { word: "fair",    answer: "air"       },
    { word: "rainbow", display: "rain‧bow", answer: "ai,ow"   },
    { word: "slaw",    answer: "aw"        },
    { word: "thatch",  answer: "th,tch"       },
    { word: "stealth", answer: "st,ea,th"        },
    { word: "paul",    answer: "au"        },
    { word: "grey",    answer: "ey"        },
    { word: "midge",   answer: "dge" },
    { word: "rick",    answer: "ic"        },
    { word: "been",    answer: "ee"        },
    { word: "comma",   display: "com‧ma",  answer: "a"     },
    { word: "sandal",  display: "san‧dal",  answer: "al"   },
    { word: "taunt",   answer: "au"        },
    { word: "eel",     answer: "ee"        },
    { word: "saucer",  display: "sau‧cer",  answer: "au,cer"   },
    { word: "brush",   answer: "sh"  },
    { word: "flew",    answer: "lew"        },
    { word: "fudge",   answer: "dge"       },
    { word: "swarf",   answer: "war"        },
    { word: "moth",    answer: "th"        },
    { word: "lain",    answer: "ai"        },
    { word: "neap",    answer: "ea"        }
  ]
};

LESSONS[29] = {
  1: [
    { word: "chair",   answer: "ch,air" },
    { word: "gesture",  answer: "ge,ture"},
    { word: "charge",  answer: "ch,ar,ge"  },
    { word: "bold",    answer: "old" },
    { word: "vulture", answer: "ture" },
    { word: "fur",     answer: "ur"  },
    { word: "child",   answer: "ch,ild" },
    { word: "flew",    answer: "lew"  },
    { word: "may",     answer: "ay"  },
    { word: "chief",   answer: "ch,ie"  },
    { word: "hedge",   answer: "dge"  },
    { word: "capture", answer: "ture" }
  ],

  2: [
    { word: "glue",     answer: "ue"  },
    { word: "bread",    answer: "ea"  },
    { word: "bridge",   answer: "dge" },
    { word: "large",    answer: "ar,ge"  },
    { word: "sing",     answer: "ing"  },
    { word: "picture",  answer: "ic,ture"},
    { word: "creature", answer: "ea,ture"},
    { word: "mild",     answer: "ild" },
    { word: "heard",    answer: "ear" },
    { word: "knot",     answer: "kn"  },
    { word: "gem",      answer: "ge"  },
    { word: "main",     answer: "ai"  }
  ],

  3: [
    { word: "cargo",   answer: "ar,o",   display: "car‧go"   },
    { word: "chime",   answer: "ch,i_e"  },
    { word: "feint",   answer: "ei"   },
    { word: "chink",   answer: "ch,ink"  },
    { word: "snarl",   answer: "ar"   },
    { word: "chapel",  answer: "ch,el",   display: "cha‧pel"  },
    { word: "corn",    answer: "or"   },
    { word: "bite",    answer: "i_e"  },
    { word: "pension", answer: "sion", display: "pen‧sion" },
    { word: "keel",    answer: "ee"   },
    { word: "jaunt",   answer: "au"   },
    { word: "yew",     answer: "ew"   },
    { word: "flaw",     answer: "aw"    },
    { word: "auto",     answer: "au,o",    display: "au‧to"     },
    { word: "they",     answer: "th,ey"    },
    { word: "bird",    answer: "ir"  },
    { word: "faun",     answer: "au"    },
    { word: "rainbow",  answer: "ai,ow",    display: "rain‧bow"  },
    { word: "chump",    answer: "ch"    },
    { word: "match",    answer: "tch"   },
    { word: "kettle",   answer: "le",    display: "ket‧tle"   },
    { word: "quell",    answer: "qu"    },
    { word: "fiction",  answer: "ic,tion",  display: "fic‧tion"  },
    { word: "screw",    answer: "sc,rew"    }
  ]
};


LESSONS[30] = {
  1: [
    { word: "cleaned",  answer: "ea,ed"  },
    { word: "needed",   answer: "ee,ded" },
    { word: "grabbed",  answer: "ed"  },
    { word: "wanted",   answer: "wa,ted" },
    { word: "painted",  answer: "ai,ted" },
    { word: "stepped",  answer: "st,ed"  },
    { word: "added",   answer: "ded"  },
    { word: "brushed",  answer: "sh,ed"  },
    { word: "started",  answer: "st,ar,ted" },
    { word: "ended",    answer: "ded" },
    { word: "planned",  answer: "ed"  },
    { word: "blended",  answer: "ded" }
  ],
  2: [
    { word: "called",   answer: "al,ed"  },
    { word: "grounded",   answer: "ou,ded"  },
    { word: "clawed",   answer: "aw,ed"  },
    { word: "printed",  answer: "ted" },
    { word: "shouted",  answer: "sh,ou,ted" },
    { word: "watched",  answer: "wa,tch,ed"  },
    { word: "rounded",  answer: "ou,ded" },
    { word: "acted",    answer: "ted" },
    { word: "played",   answer: "ay,ed"  },
    { word: "kissed",   answer: "ed"  },
    { word: "pointed",  answer: "oi,ted" },
    { word: "looked",   answer: "ook,ed"  }
  ],
  3: [
    { word: "convicted",   answer: "ic,ted"  },
    { word: "searched",   answer: "ear,ch,ed"  },
    { word: "vetted",   answer: "ted"  },
    { word: "limited",   answer: "ted"  },
    { word: "impacted",   answer: "ted"  },
    { word: "started",   answer: "st,ar,ted"  },
    { word: "added",   answer: "ded"  },
    { word: "expected",   answer: "ted"  },
    { word: "blinked",  answer: "ink,ed"  },
    { word: "addressed",   answer: "ed"  },
    { word: "helped",   answer: "ed"  },
    { word: "walked",   answer: "al,ed"  },
    { word: "played",   answer: "ay,ed"  },
    { word: "watched",   answer: "wa,tch,ed"  },
    { word: "recorded",   answer: "or,ded"  },
    { word: "visited",   answer: "ted"  },
    { word: "cleaned",   answer: "ea,ed"  },
    { word: "cooked",   answer: "ook,ed"  },
    { word: "painted",   answer: "ai,ted"  },
    { word: "shouted",   answer: "sh,ou,ted"  },
    { word: "enjoyed",   answer: "oy,ed"  },
    { word: "needed",   answer: "ee,ded"  },
    { word: "learned",   answer: "ear,ed"  },
    { word: "packed",   answer: "ed"  }
  ]
};


