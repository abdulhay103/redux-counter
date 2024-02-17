const {
  INCREMENT,
  DECREMENT,
  RESET,
} = require("../constants/counterConstants");
const { counterState } = require("../states/initialStates");

const counterReducer = (state = counterState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case RESET:
      return {
        count: 0,
      };

    default:
      return state;
  }
};

export default counterReducer;
