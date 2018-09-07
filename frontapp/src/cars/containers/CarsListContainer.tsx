import * as React from 'react';
import { connect } from 'react-redux';

import { changeColor, addCar, getCarList } from '../actions';

import { CarsList } from '../components/CarsList'

class CarsListContainer extends React.Component<any,any> {
  constructor(props:any) {
    super(props);
  }

  componentDidMount() {
    let { getCarList } = this.props;
    getCarList();
  }

  render() {
    let { cars, addCar } = this.props;
    let { list } = cars;
    return(
      <CarsList
        list={list}
      />
    )
  }
}

const mapStateToProps = state => {
  let { cars } = state;
  return {
    cars
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeColor() {
      dispatch(changeColor());
    },
    addCar() {
      dispatch(addCar("KIA"));
    },
    getCarList() {
      dispatch(getCarList());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsListContainer);
