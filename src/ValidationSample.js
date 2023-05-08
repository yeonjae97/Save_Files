import React, { Component } from 'react';
import './Validation.css';

class ValidationSample extends Component {

  // state내의 props의 대상 선언 및 초기화
  state={
    password:'',
    clicked:false,
    validated:false
  }

  // DOM 이벤트 람다식으로 구현
  handleChange = (e) => {
    this.setState({
      password: e.target.value
    })
  }
  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === '0000'
    })
    this.input.focus();
  }

  // 렌더링
  render() {
    return (
      <div>
        <input 
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          ref={(ref) => this.input=ref}
          className={this.state.clicked ? (this.state.validated ? 'success' : 'failure')
        : ''}  
        />  
        <button onClick={this.handleButtonClick}>검증하기</button>
      </div>
    );
  }
}


export default ValidationSample;