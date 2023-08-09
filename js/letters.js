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
  }
]