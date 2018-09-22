import axios from '../../constants/api';

import {
  CHANGE_COLOR_CAR,
  ADD_CAR,
  GET_CARS_LIST
} from '../../constants';


export const changeColor = () => {
  return {
    type: CHANGE_COLOR_CAR,
    car: {color: "blue"}
  }
}

export const addCar = (car:any) => {
  return {
    type: ADD_CAR,
    car
  }
}

export const getCarList = () => {
  return dispatch => {
    axios.get("/cars")
      .then(response => {
        let { data } = response;
        let { cars } = data;
        dispatch({
          type: GET_CARS_LIST,
          list: cars
        })
      })
      .catch(error => {
        alert(error);
      })
  }
}
