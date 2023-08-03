import { createContext, useContext, useReducer } from "react";
import allReducers from "./reducer";

export const StoreContext = createContext(null);

export const configureStore = ({ reducers }) => {
  const reducerKeys = Object.keys(reducers);
  const initialValues = reducerKeys.reduce((store, key, index) => {
    store[key] = reducers[key]();
    return store;
  }, {});

  function combination(state = {}, action) {
    // 这个标志位记录初始的 state 是否和经过 reducer 后是一个引用，如果不是则 state 被改变了
    let hasChanged = false;

    const nextState = {};

    for (const key of reducerKeys) {
      const reducer = reducers[key];
      // 原来的状态树中 key 对应的值
      const previousStateForKey = state[key];
      // 调用 reducer 函数，获得该 key 值对应的新状态
      const nextStateForKey = reducer(previousStateForKey, action);
      nextState[key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    // 这个很简单理解吧？如果没改变直接把原始的 state 返回即可
    return hasChanged ? nextState : state;
  }

  return { reducers: combination, initialValues };
};

const { reducers, initialValues } = configureStore({ reducers: allReducers });

function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducers, initialValues);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
}

export const useSelector = (callback) => {
  const { state } = useContext(StoreContext);

  console.info("context.state:", state);

  return callback(state);
};

export const useDispatch = () => {
  const { dispatch } = useContext(StoreContext);

  return dispatch;
};

export default StoreProvider;
