// import React from 'react';
import PropTypes from 'prop-types';
import {Component} from 'react';

// const MyComponent = props => {
//   let { name, children} = props;
//     return (
//     <div>
//       <h1>나의 새롭고 멋진 컴포넌트</h1>
//       <h2>안녕하세요. 제 이름은 {name}이라고 합니다.</h2>
//       <h3>children의 값은 {children}입니다.</h3>
//       </div>
//     );
// };


class MyComponent extends Component{
  render(){
    let { name, children} = this.props;
    return (
    <div>
      <h1>나의 새롭고 멋진 컴포넌트</h1>
      <h2>안녕하세요. 제 이름은 {name}이라고 합니다.</h2>
      <h3>children의 값은 {children}입니다.</h3>
      </div>
    );
  }
}


MyComponent.defaultProps = {
  name: "기본 이름"
}
MyComponent.propTypes = {
  name: PropTypes.string
}
export default MyComponent;