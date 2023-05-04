import React, { Component } from 'react';

class Counter extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     number: 0,
  //     fixedNumber: 0,
  //   };
  // }

  // 변수의 state 필드로서 사용되는 변수 ( 위를 주석처리 해도 동일하다. )
  state = { number: 0, fixedNumber: 0}
  render() {
    const {number, fixedNumber} = this.state;

    return (
      <div>
        <h1>{number}</h1>
        <h2>{fixedNumber}</h2>
        <button 
        onClick={() =>{
          // this.setState((prevState) => {
          //   return {number: prevState.number + 1};
          // });
          // this.setState((prevState) => {
          //   return {number: prevState.number + 1};
          // });
          this.setState({number: number + 1}, () => {
            console.log("방금 setState가 호출");
          });
        }}
          >
            +1
          </button>
      </div>
    );
  }
}

export default Counter;
