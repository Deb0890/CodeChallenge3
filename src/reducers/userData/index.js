const initState = { userData: [], error: "" };

const repoReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOAD_REPOS":
      return { ...state, userData: action.payload };

    case "SET_ERROR":
      return { ...state, error: action.payload };

    default: {
      return state;
    }
  }
};

export default repoReducer;
