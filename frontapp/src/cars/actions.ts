import axios from 'axios';

export const changeColor = () => {
  return {
    type: "CHANGE_COLOR_CAR",
    car: {color: "blue"}
  }
}

export const addCar = (car:any) => {
  return {
    type: "ADD_CAR",
    car
  }
}

export const getCarList = () => {
  return dispatch => {
    axios.get("/cars.json")
      .then(response => {
        let { data } = response;
        let { cars } = data;
        dispatch({
          type: "GET_CARS_LIST",
          list: cars
        })
      })
      .catch(error => {
        alert(error);
      })
  }
}
