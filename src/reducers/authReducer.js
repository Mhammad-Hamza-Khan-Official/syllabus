export function authReducer(state, action) {
  switch (action.type) {
    case "AUTH_LOADING":
      return {
        ...state,
        loading: true,
      };

    case "AUTH_READY":
      return {
        ...state,
        loading: false,
        user: action.payload,
      };

    case "LOGIN":
      return {
        ...state,
        user: action.payload,
      };

    case "LOGOUT":
      return {
        ...state,
        user: null,
      };

    default:
      return state;
  }
}