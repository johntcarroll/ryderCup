const state = {
  tick: String, // ID from server broadcast
  last_update: Date, // last time the state was updated
  players: [
    {
      id: Number,
      display_name: String,
      display_image_url: String,
      handicap: Number,
      stats: {
        wins: Number,
        draws: Number,
        losses: Number,
      },
    },
  ],
  matches: [
    {
      id: Number,
      type: String,
      course: {
        id: Number,
        name: String,
        tees: {
          black: {
            slope: Number,
            rating: Number,
          },
          green: {
            slope: Number,
            rating: Number,
          },
          gold: {
            slope: Number,
            rating: Number,
          },
          blue: {
            slope: Number,
            rating: Number,
          },
        },
        holes: [
          // 18 of these objects
          {
            id: Number,
            number: Number,
            handicap: Number,
            tees: {
              black: {
                yardage: Number,
              },
              green: {
                yardage: Number,
              },
              gold: {
                yardage: Number,
              },
              blue: {
                yardage: Number,
              },
            },
          },
        ],
      },
      home_players: [
        // 1 or 2 of these objects
        {
          id: Number, // player id
          tees: String, // selected by player at round start
        },
      ],
      away_players: [
        // 1 or 2 of these objects
        {
          id: Number, // player id
          tees: String, // selected by player at round start
        },
      ],
      games: [
        // 18 of these objects
        {
          home_strokes: Number,
          away_strokes: Number,
        },
      ],
    },
  ],
};
