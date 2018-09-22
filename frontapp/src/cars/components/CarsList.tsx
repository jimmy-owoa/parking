import * as React from 'react';

export const CarsList = (props) => {
  let { list, addCar } = props;
  return(
    <div>
      <ul>
        <h1>Lista de autos</h1>
        {
          list.map((car, i) => {
            return <li key={i}>{car.plate}</li>
          })
        }
      </ul>
    </div>
  )
}
