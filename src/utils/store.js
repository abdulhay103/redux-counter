const { default: counterReducer } = require("@/utils/reducers/counterReducer");
const { createStore } = require("redux");

const store = createStore(counterReducer);

export default store;
