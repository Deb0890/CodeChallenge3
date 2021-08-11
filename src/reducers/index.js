const initState = {};

const repoReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOAD_REPOS":
      return { ...state, payload: action.payload };

    case "SET_ERROR":
      return { ...state, payload: action.payload };

    default: {
      state;
    }
  }
};

export default repoReducer;
