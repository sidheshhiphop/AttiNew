const defaultState = {
  selectedMachine: {
    machineId: "",
    shift: "",
  },
};

const loggedReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SELECTED_MACHINE_":
      return { ...state, selectedMachine: action.data };

    default:
      return state;
  }
};
export default loggedReducer;
