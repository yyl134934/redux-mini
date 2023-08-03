const UPDATE_PAGE = "update_page";

const initialValue = {
  page: 0
};

const reducer = (state = initialValue, action) => {
  switch (action?.type) {
    case UPDATE_PAGE:
      return { ...state, page: action.payloads };
    default:
      return state;
  }
};

export const updatePage = (payloads) => {
  return { type: UPDATE_PAGE, payloads };
};

export default reducer;
