const model = {
  appState: {
    auth: { // null when logged out
      apiKey: "...",
      username: "..."
    },

    /**
     * Render Function that returns string of HTML used by Render View.
     * This model will be set by Router.
    */
    currentPage: null
  },

  viewState: {
    mainPage: {
      userSearch: '',
      /* Null means all */
      filters: {
        following: false,
        catagory: null,
        difficultyMin: null,
        difficultyMax: null,
        durationMin: null,
        durationMax: null,
      }

    }
  },

  data: {
    category: [],

    favouriteList: [],
    activityList: [
            {
                description: "jog"
            },
            { 
                description: "climbing"
            },
            {
                description: "swimming"
            },
            {
                description: "hikking"
            }
    ]
  },

  // Used by Activity Overview page (returned by backend)
  currentActivity: {
    author: "...", // Username of Activity Author
    favourite: false, // Wether this Activity is favourite
    catagory: "...",
    difficulty: 3,      // rated 1-5 by star
    userRating: 4, // Rating set by user, if not logged or no rating has been made set to null.
    description: "...",
    image: null // Link to image, null if no image
  },

  // Used by Profile Overview page
  currentProfile: {
    username: "...",
    bio: "",
    socialMedia: [
      {
        type: "Discord",
        value: "..."
      }
    ],
    following: false,
    profileImg: null,
    showFavourites: false, // if true, activites is list of user's favorites, else acitvites is list of user's activites.
    activites: []
  }
  // data
}