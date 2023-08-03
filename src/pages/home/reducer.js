const UPDATE_TOGGLE_STATUS = "update_toggle_status";

const initialValue = {
  toggle: false
};

const reducer = (state = initialValue, action) => {
  switch (action?.type) {
    case UPDATE_TOGGLE_STATUS:
      return { ...state, toggle: action.payloads };
    default:
      return state;
  }
};

export const updateToggle = (payloads) => {
  return { type: UPDATE_TOGGLE_STATUS, payloads };
};

export default reducer;
