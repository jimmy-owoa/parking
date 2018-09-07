
export const reducer = (state = { list: [], car: {} }, action) => {
  switch(action.type) {
    case "CHANGE_COLOR_CAR":
      return {
        ...state,
        car: action.car
      }
    case "ADD_CAR":
      return {
        ...state,
        list: [...state.list, action.car]
      }
    case "GET_CARS_LIST":
      return {
        ...state,
        list: action.list
      }
    default:
      return state;
  }
}
