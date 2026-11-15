const letters = [
  {
    name: "A",
    parts: [
      {
        type: "line",
        points: [
          {x: 50, y: 450},
          {x: 250, y: 50},
        ],
        base: 500
      },
      {
        type: "line",
        points: [
          {x: 250, y: 50},
          {x: 450, y: 450},
        ],
        base: 500
      },
      {
        type: "line",
        points: [
          {x: 130, y: 300},
          {x: 370, y: 300},
        ],
        base: 500
      }
    ],
  },
  {
    name: "B",
    parts: [
      {
        type: "line",
        points: [
          {x: 150, y: 50},
          {x: 150, y: 450},
        ],
        base: 500
      },
      {
        type: "curve",
        points: [
          {x: 150, y: 50},
          {x: 380, y: 50},
          {x: 380, y: 240},
          {x: 150, y: 240},
        ],
        base: 500
      },
      {
        type: "curve",
        points: [
          {x: 150, y: 240},
          {x: 400, y: 240},
          {x: 400, y: 450},
          {x: 150, y: 450},
        ],
        base: 500
      },
    ],
  },
  {
    name: "C",
    parts: [
      {
        type: "curve",
        points: [
          {x: 350, y: 100},
          {x: 50, y: -50},
          {x: 50, y: 550},
          {x: 350, y: 400},
        ],
        base: 500
      }
    ],
  },
  {
    name: "D",
    parts: [
      {
        type: "line",
        points: [
          {x: 150, y: 50},
          {x: 150, y: 450},
        ],
        base: 500
      },
      {
        type: "curve",
        points: [
          {x: 150, y: 50},
          {x: 450, y: 50},
          {x: 450, y: 450},
          {x: 150, y: 450},
        ],
        base: 500
      }
    ],
  },
  {
    name: "E",
    parts: [
      {
        type: "line",
        points: [
          {x: 150, y: 50},
          {x: 150, y: 450},
        ],
        base: 500
      },
      {
        type: "line",
        points: [
          {x: 150, y: 50},
          {x: 350, y: 50},
        ],
        base: 500
      },
      {
        type: "line",
        points: [
          {x: 150, y: 250},
          {x: 250, y: 250},
        ],
        base: 500
      },
      {
        type: "line",
        points: [
          {x: 150, y: 450},
          {x: 350, y: 450},
        ],
        base: 500
      }
    ],
  },
  {
    name: 'F',
    parts: [
      {
        type: 'line',
        points: [
          {x: 150, y: 50},
          {x: 150, y: 450},
        ],
        base: 500,
      },
      {
        type: 'line',
        points: [
          {x: 150, y: 50},
          {x: 350, y: 50},
        ],
        base: 500,
      },
      {
        type: 'line',
        points: [
          {x: 150, y: 250},
          {x: 250, y: 250},
        ],
        base: 500,
      },
    ]
  },
  {
    name: 'G',
    parts: [
      {
        type: 'curve',
        points: [
          {x: 350, y: 100},
          {x: 50, y: -50},
          {x: 50, y: 550},
          {x: 350, y: 400},
        ],
        base: 500,
      },
      {
        type: 'line',
        points: [
          {x: 250, y: 250},
          {x: 350, y: 250},
        ],
        base: 500,
      },
      {
        type: 'line',
        points: [
          {x: 350, y: 250},
          {x: 350, y: 400},
        ],
        base: 500,
      }
    ],
  },
  {
    name: 'H',
    parts: [
      {
        type: 'line',
        points: [
          {x: 100, y: 50},
          {x: 100, y: 450},
        ],
        base: 500,
      },
      {
        type: 'line',
        points: [
          {x: 400, y: 50},
          {x: 400, y: 450},
        ],
        base: 500,
      },
      {
        type: 'line',
        points: [
          {x: 100, y: 250},
          {x: 400, y: 250},
        ],
        base: 500,
      },
    ],
  },
  {
    name: 'I',
    parts: [
      {
        type: 'line',
        points: [
          {x: 250, y: 50},
          {x: 250, y: 450},
        ],
        base: 500,
      },
    ],
  },
  {
    name: 'J',
    parts: [
      {
        type: 'line',
        points: [
          {x: 350, y: 50},
          {x: 350, y: 350},
        ],
        base: 500,
      },
      {
        type: 'curve',
        points: [
          {x: 350, y: 350},
          {x: 350, y: 500},
          {x: 200, y: 500},
          {x: 170, y: 390},
        ],
        base: 500,
      }
    ],
  },
  {
    name: 'K',
    parts: [
      {
        type: 'line',
        points: [
          {x: 120, y: 50},
          {x: 120, y: 450},
        ],
        base: 500,
      },
      {
        type: 'line',
        points: [
          {x: 120, y: 260},
          {x: 350, y: 50},
        ],
        base: 500,
      },
      {
        type: 'line',
        points: [
          {x: 180, y: 230},
          {x: 400, y: 450},
        ],
        base: 500,
      }
    ],
  },
  {
    name: 'L',
    parts: [
      {
        type: 'line',
        points: [
          {x: 100, y: 50},
          {x: 100, y: 450},
        ],
        base: 500,
      },
      {
        type: 'line',
        points: [
          {x: 100, y: 450},
          {x: 400, y: 450},
        ],
        base: 500,
      }
    ],
  },
  {
    name: 'M',
    parts: [
      {
        type: 'line',
        points: [
          {x: 100, y: 50},
          {x: 100, y: 450},
        ],
        base: 500,
      },
      {
        type: 'line',
        points: [
          {x: 100, y: 50},
          {x: 250, y: 250},
        ],
        base: 500,
      },
      {
        type: 'line',
        points: [
          {x: 250, y: 250},
          {x: 400, y: 50},

        ],
        base: 500,
      },
      {
        type: 'line',
        points: [
          {x: 400, y: 50},
          {x: 400, y: 450},
        ],
        base: 500,
      }
    ],
  },
  {
    name: 'N',
    parts: [
      {
        type: 'line',
        points: [
          {x: 100, y: 50},
          {x: 100, y: 450},
        ],
        base: 500
      },
      {
        type: 'line',
        points: [
          {x: 100, y: 50},
          {x: 400, y: 450},
        ],
        base: 500
      },
      {
        type: 'line',
        points: [
          {x: 400, y: 50},
          {x: 400, y: 450},
        ],
        base: 500
      },
    ],
  },
  {
    name: 'O',
    parts: [
      {
        type: 'curve',
        points: [
          {x: 250, y: 75},
          {x: 50, y: 75},
          {x: 50, y: 425},
          {x: 250, y: 425},
        ],
        base: 500
      },
      {
        type: 'curve',
        points: [
          {x: 250, y: 75},
          {x: 450, y: 75},
          {x: 450, y: 425},
          {x: 250, y: 425},
        ],
        base: 500
      },
    ],
  },
  {
    name: 'P',
    parts: [
      {
        type: 'line',
        points: [
          {x: 150, y: 50},
          {x: 150, y: 450},
        ],
        base: 500
      },
      {
        type: 'curve',
        points: [
          {x: 150, y: 50},
          {x: 400, y: 50},
          {x: 400, y: 250},
          {x: 150, y: 250},
        ],
        base: 500
      },
    ],
  },
  {
    name: 'Q',
    parts: [
      {
        type: 'curve',
        points: [
          {x: 250, y: 75},
          {x: 50, y: 75},
          {x: 50, y: 425},
          {x: 250, y: 425},
        ],
        base: 500
      },
      {
        type: 'curve',
        points: [
          {x: 250, y: 75},
          {x: 450, y: 75},
          {x: 450, y: 425},
          {x: 250, y: 425},
        ],
        base: 500
      },
      {
        type: 'line',
        points: [
          {x: 300, y: 340},
          {x: 380, y: 430},
        ],
        base: 500
      },
    ],
  },
  {
    name: 'R',
    parts: [
      {
        type: 'line',
        points: [
          {x: 150, y: 50},
          {x: 150, y: 450},
        ],
        base: 500
      },
      {
        type: 'curve',
        points: [
          {x: 150, y: 50},
          {x: 400, y: 50},
          {x: 400, y: 250},
          {x: 150, y: 250},
        ],
        base: 500
      },
      {
        type: 'line',
        points: [
          {x: 150, y: 250},
          {x: 340, y: 450},
        ],
        base: 500
      },
    ],
  },
  {
    name: 'S',
    parts: [
      {
        type: 'curve',
        points: [
          {x: 350, y: 80},
          {x: 150, y: -50},
          {x: 50, y: 220},
          {x: 235, y: 235},
        ],
        base: 500
      },
      {
        type: 'curve',
        points: [
          {x: 235, y: 235},
          {x: 450, y: 250},
          {x: 350, y: 550},
          {x: 130, y: 400},
        ],
        base: 500
      },
    ],
  },
  {
    name: 'T',
    parts: [
      {
        type: 'line',
        points: [
          {x: 50, y: 50},
          {x: 450, y: 50},
        ],
        base: 500
      },
      {
        type: 'line',
        points: [
          {x: 250, y: 50},
          {x: 250, y: 450},
        ],
        base: 500
      }
    ],
  },
  {
    name: 'U',
    parts: [
      {
        type: 'line',
        points: [
          {x: 120, y: 100},
          {x: 120, y: 300},
        ],
        base: 500
      },
      {
        type: 'line',
        points: [
          {x: 370, y: 100},
          {x: 370, y: 300},
        ],
        base: 500
      },
      {
        type: 'curve',
        points: [
          {x: 120, y: 300},
          {x: 120, y: 450},
          {x: 370, y: 450},
          {x: 370, y: 300},
        ],
        base: 500
      },
    ],
  },
  {
    name: 'V',
    parts: [
      {
        type: 'line',
        points: [
          {x: 50, y: 50},
          {x: 250, y: 450},
        ],
        base: 500
      },
      {
        type: 'line',
        points: [
          {x: 250, y: 450},
          {x: 450, y: 50},
        ],
        base: 500

      }
    ]
  },
  {
    name: 'W',
    parts: [
      {
        type: 'line',
        points: [
          {x: 50, y: 50},
          {x: 150, y: 450},
        ],
        base: 500
      },
      {
        type: 'line',
        points: [
          {x: 150, y: 450},
          {x: 250, y: 250},
        ],
        base: 500
      },
      {
        type: 'line',
        points: [
          {x: 250, y: 250},
          {x: 350, y: 450},
        ],
        base: 500
      },
      {
        type: 'line',
        points: [
          {x: 350, y: 450},
          {x: 450, y: 50},
        ],
        base: 500
      }
    ]
  },
  {
    name: 'X',
    parts: [
      {
        type: 'line',
        points: [
          {x: 100, y: 50},
          {x: 400, y: 450},
        ],
        base: 500
      },
      {
        type: 'line',
        points: [
          {x: 400, y: 50},
          {x: 100, y: 450},
        ],
        base: 500
      }
    ]
  },
  {
    name: 'Y',
    parts: [
      {
        type: 'line',
        points: [
          {x: 100, y: 50},
          {x: 250, y: 250},
        ],
        base: 500
      },
      {
        type: 'line',
        points: [
          {x: 250, y: 250},
          {x: 400, y: 50},
        ],
        base: 500
      },
      {
        type: 'line',
        points: [
          {x: 250, y: 250},
          {x: 250, y: 450},
        ],
        base: 500
      }
    ]
  },
  {
    name: 'Z',
    parts: [
      {
        type: 'line',
        points: [
          {x: 100, y: 50},
          {x: 400, y: 50},
        ],
        base: 500
      },
      {
        type: 'line',
        points: [
          {x: 400, y: 50},
          {x: 100, y: 450},
        ],
        base: 500
      },
      {
        type: 'line',
        points: [
          {x: 100, y: 450},
          {x: 400, y: 450},
        ],
        base: 500
      }
    ]
  },
  // Lowercase print shapes, drawn as centerline strokes like the uppercase letters.
  {
    name: "a",
    parts: [
      {type: "curve", points: [{x: 320, y: 190}, {x: 245, y: 165}, {x: 150, y: 245}, {x: 145, y: 310}], base: 500},
      {type: "curve", points: [{x: 145, y: 310}, {x: 140, y: 390}, {x: 245, y: 405}, {x: 290, y: 325}], base: 500},
      {type: "curve", points: [{x: 290, y: 325}, {x: 320, y: 275}, {x: 325, y: 225}, {x: 320, y: 190}], base: 500},
      {type: "curve", points: [{x: 320, y: 190}, {x: 330, y: 255}, {x: 365, y: 340}, {x: 400, y: 380}], base: 500}
    ],
  },
  {
    name: "b",
    parts: [
      {type: "line", points: [{x: 155, y: 60}, {x: 155, y: 380}], base: 500},
      {type: "curve", points: [{x: 155, y: 240}, {x: 180, y: 200}, {x: 205, y: 180}, {x: 250, y: 180}], base: 500},
      {type: "curve", points: [{x: 250, y: 180}, {x: 380, y: 180}, {x: 380, y: 380}, {x: 250, y: 380}], base: 500},
      {type: "curve", points: [{x: 250, y: 380}, {x: 205, y: 380}, {x: 180, y: 360}, {x: 155, y: 330}], base: 500}
    ],
  },
  {
    name: "c",
    parts: [
      {type: "curve", points: [{x: 340, y: 205}, {x: 290, y: 165}, {x: 140, y: 165}, {x: 140, y: 280}], base: 500},
      {type: "curve", points: [{x: 140, y: 280}, {x: 140, y: 395}, {x: 290, y: 395}, {x: 340, y: 355}], base: 500}
    ],
  },
  {
    name: "d",
    parts: [
      {type: "curve", points: [{x: 345, y: 240}, {x: 320, y: 200}, {x: 295, y: 180}, {x: 250, y: 180}], base: 500},
      {type: "curve", points: [{x: 250, y: 180}, {x: 120, y: 180}, {x: 120, y: 380}, {x: 250, y: 380}], base: 500},
      {type: "curve", points: [{x: 250, y: 380}, {x: 295, y: 380}, {x: 320, y: 360}, {x: 345, y: 330}], base: 500},
      {type: "line", points: [{x: 345, y: 60}, {x: 345, y: 380}], base: 500}
    ],
  },
  {
    name: "e",
    parts: [
      {type: "line", points: [{x: 140, y: 275}, {x: 355, y: 275}], base: 500},
      {type: "curve", points: [{x: 355, y: 275}, {x: 355, y: 150}, {x: 140, y: 150}, {x: 140, y: 275}], base: 500},
      {type: "curve", points: [{x: 140, y: 275}, {x: 140, y: 395}, {x: 280, y: 400}, {x: 345, y: 350}], base: 500}
    ],
  },
  {
    name: "f",
    parts: [
      {type: "curve", points: [{x: 325, y: 80}, {x: 245, y: 35}, {x: 205, y: 85}, {x: 205, y: 160}], base: 500},
      {type: "line", points: [{x: 205, y: 160}, {x: 205, y: 380}], base: 500},
      {type: "line", points: [{x: 135, y: 190}, {x: 310, y: 190}], base: 500}
    ],
  },
  {
    name: "g",
    parts: [
      {type: "curve", points: [{x: 345, y: 182}, {x: 327, y: 155}, {x: 304, y: 135}, {x: 270, y: 135}], base: 500},
      {type: "curve", points: [{x: 270, y: 135}, {x: 170, y: 135}, {x: 170, y: 295}, {x: 270, y: 295}], base: 500},
      {type: "curve", points: [{x: 270, y: 295}, {x: 304, y: 295}, {x: 327, y: 276}, {x: 345, y: 253}], base: 500},
      {type: "line", points: [{x: 345, y: 135}, {x: 345, y: 345}], base: 500},
      {type: "curve", points: [{x: 345, y: 345}, {x: 345, y: 420}, {x: 248, y: 430}, {x: 195, y: 390}], base: 500}
    ],
  },
  {
    name: "h",
    parts: [
      {type: "line", points: [{x: 155, y: 60}, {x: 155, y: 380}], base: 500},
      {type: "curve", points: [{x: 155, y: 255}, {x: 195, y: 150}, {x: 345, y: 155}, {x: 345, y: 250}], base: 500},
      {type: "line", points: [{x: 345, y: 250}, {x: 345, y: 380}], base: 500}
    ],
  },
  {
    name: "i",
    parts: [
      {type: "line", points: [{x: 250, y: 100}, {x: 250, y: 101}], base: 500},
      {type: "line", points: [{x: 250, y: 180}, {x: 250, y: 380}], base: 500}
    ],
  },
  {
    name: "j",
    parts: [
      {type: "line", points: [{x: 290, y: 100}, {x: 290, y: 101}], base: 500},
      {type: "line", points: [{x: 290, y: 180}, {x: 290, y: 395}], base: 500},
      {type: "curve", points: [{x: 290, y: 395}, {x: 290, y: 475}, {x: 200, y: 480}, {x: 165, y: 440}], base: 500}
    ],
  },
  {
    name: "k",
    parts: [
      {type: "line", points: [{x: 145, y: 60}, {x: 145, y: 380}], base: 500},
      {type: "line", points: [{x: 350, y: 180}, {x: 145, y: 310}], base: 500},
      {type: "line", points: [{x: 235, y: 255}, {x: 360, y: 380}], base: 500}
    ],
  },
  {
    name: "l",
    parts: [
      {type: "line", points: [{x: 250, y: 60}, {x: 250, y: 330}], base: 500},
      {type: "curve", points: [{x: 250, y: 330}, {x: 250, y: 380}, {x: 270, y: 390}, {x: 310, y: 375}], base: 500}
    ],
  },
  {
    name: "m",
    parts: [
      {type: "line", points: [{x: 85, y: 180}, {x: 85, y: 380}], base: 500},
      {type: "curve", points: [{x: 85, y: 255}, {x: 120, y: 150}, {x: 250, y: 155}, {x: 250, y: 250}], base: 500},
      {type: "line", points: [{x: 250, y: 250}, {x: 250, y: 380}], base: 500},
      {type: "curve", points: [{x: 250, y: 255}, {x: 285, y: 150}, {x: 415, y: 155}, {x: 415, y: 250}], base: 500},
      {type: "line", points: [{x: 415, y: 250}, {x: 415, y: 380}], base: 500}
    ],
  },
  {
    name: "n",
    parts: [
      {type: "line", points: [{x: 155, y: 180}, {x: 155, y: 380}], base: 500},
      {type: "curve", points: [{x: 155, y: 255}, {x: 195, y: 150}, {x: 345, y: 155}, {x: 345, y: 250}], base: 500},
      {type: "line", points: [{x: 345, y: 250}, {x: 345, y: 380}], base: 500}
    ],
  },
  {
    name: "o",
    parts: [
      {type: "curve", points: [{x: 360, y: 280}, {x: 360, y: 224.772}, {x: 310.751, y: 180}, {x: 250, y: 180}], base: 500},
      {type: "curve", points: [{x: 250, y: 180}, {x: 189.249, y: 180}, {x: 140, y: 224.772}, {x: 140, y: 280}], base: 500},
      {type: "curve", points: [{x: 140, y: 280}, {x: 140, y: 335.228}, {x: 189.249, y: 380}, {x: 250, y: 380}], base: 500},
      {type: "curve", points: [{x: 250, y: 380}, {x: 310.751, y: 380}, {x: 360, y: 335.228}, {x: 360, y: 280}], base: 500}
    ],
  },
  {
    name: "p",
    parts: [
      {type: "line", points: [{x: 155, y: 180}, {x: 155, y: 460}], base: 500},
      {type: "curve", points: [{x: 155, y: 240}, {x: 180, y: 200}, {x: 205, y: 180}, {x: 250, y: 180}], base: 500},
      {type: "curve", points: [{x: 250, y: 180}, {x: 380, y: 180}, {x: 380, y: 380}, {x: 250, y: 380}], base: 500},
      {type: "curve", points: [{x: 250, y: 380}, {x: 205, y: 380}, {x: 180, y: 360}, {x: 155, y: 330}], base: 500}
    ],
  },
  {
    name: "q",
    parts: [
      {type: "curve", points: [{x: 345, y: 240}, {x: 320, y: 200}, {x: 295, y: 180}, {x: 250, y: 180}], base: 500},
      {type: "curve", points: [{x: 250, y: 180}, {x: 120, y: 180}, {x: 120, y: 380}, {x: 250, y: 380}], base: 500},
      {type: "curve", points: [{x: 250, y: 380}, {x: 295, y: 380}, {x: 320, y: 360}, {x: 345, y: 330}], base: 500},
      {type: "line", points: [{x: 345, y: 180}, {x: 345, y: 460}], base: 500}
    ],
  },
  {
    name: "r",
    parts: [
      {type: "line", points: [{x: 170, y: 180}, {x: 170, y: 380}], base: 500},
      {type: "curve", points: [{x: 170, y: 260}, {x: 205, y: 185}, {x: 265, y: 160}, {x: 325, y: 195}], base: 500}
    ],
  },
  {
    name: "s",
    parts: [
      {type: "curve", points: [{x: 340, y: 205}, {x: 195, y: 120}, {x: 100, y: 265}, {x: 245, y: 280}], base: 500},
      {type: "curve", points: [{x: 245, y: 280}, {x: 395, y: 295}, {x: 310, y: 445}, {x: 150, y: 355}], base: 500}
    ],
  },
  {
    name: "t",
    parts: [
      {type: "line", points: [{x: 220, y: 95}, {x: 220, y: 315}], base: 500},
      {type: "curve", points: [{x: 220, y: 315}, {x: 220, y: 390}, {x: 285, y: 395}, {x: 330, y: 360}], base: 500},
      {type: "line", points: [{x: 135, y: 190}, {x: 330, y: 190}], base: 500}
    ],
  },
  {
    name: "u",
    parts: [
      {type: "line", points: [{x: 140, y: 180}, {x: 140, y: 300}], base: 500},
      {type: "curve", points: [{x: 140, y: 300}, {x: 140, y: 400}, {x: 295, y: 410}, {x: 355, y: 300}], base: 500},
      {type: "line", points: [{x: 355, y: 180}, {x: 355, y: 380}], base: 500}
    ],
  },
  {
    name: "v",
    parts: [
      {type: "line", points: [{x: 125, y: 180}, {x: 250, y: 380}], base: 500},
      {type: "line", points: [{x: 250, y: 380}, {x: 375, y: 180}], base: 500}
    ],
  },
  {
    name: "w",
    parts: [
      {type: "line", points: [{x: 70, y: 180}, {x: 160, y: 380}], base: 500},
      {type: "line", points: [{x: 160, y: 380}, {x: 250, y: 230}], base: 500},
      {type: "line", points: [{x: 250, y: 230}, {x: 340, y: 380}], base: 500},
      {type: "line", points: [{x: 340, y: 380}, {x: 430, y: 180}], base: 500}
    ],
  },
  {
    name: "x",
    parts: [
      {type: "line", points: [{x: 135, y: 180}, {x: 365, y: 380}], base: 500},
      {type: "line", points: [{x: 365, y: 180}, {x: 135, y: 380}], base: 500}
    ],
  },
  {
    name: "y",
    parts: [
      {type: "line", points: [{x: 130, y: 180}, {x: 250, y: 375}], base: 500},
      {type: "line", points: [{x: 370, y: 180}, {x: 190, y: 472.5}], base: 500}
    ],
  },
  {
    name: "z",
    parts: [
      {type: "line", points: [{x: 145, y: 180}, {x: 355, y: 180}], base: 500},
      {type: "line", points: [{x: 355, y: 180}, {x: 145, y: 380}], base: 500},
      {type: "line", points: [{x: 145, y: 380}, {x: 355, y: 380}], base: 500}
    ],
  }
]
