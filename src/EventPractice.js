import React, { Component } from 'react';




class EventPractice extends Component {
  state = {
    username: '',
    message: ''
  }


  // constructor(props){
  //   super(props);
  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleClick = this.handleClick.bind(this);
  // }

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  handleClick = () => {
    alert(this.state.username + ': ' + this.state.message);
    this.setState({
      username:'',
      message:''
    })
  }

  // 엔터키를 사용할려 할 때 이벤트 함수를 하나 더 선언한다.
  handleKeyPress = (e) => {
    if(e.key === "Enter"){
      this.handleClick();
    }
  }

  render() {
    return (
      <div>
      <h1>이벤트 연습</h1>
      <input 
        type="text"
        name="username"
        placeholder="사용자명"
        value={this.state.username}
        onChange={this.handleChange}
        />
      <input 
        type="text"
        name="message"
        placeholder="아무거나 입력해 보세요"
        value={this.state.message}
        onChange={this.handleChange}
        onKeyPress={this.handleKeyPress}
        />
        <button onClick={this.handleClick}>
          확인
        </button>
        {/* <h2>{message}</h2> */}
    </div>
    );
  }
}

export default EventPractice;


// import React from 'react';

// const EventPractice = () => {
//   return (
//     <div>
//       <h1>이벤트 연습</h1>
//       <input 
//         type="text"
//         name="message"
//         placeholder="아무거나 입력해 보세요"
//         onChange={
//           (e) => {
//             console.log(e);
//             console.log(e.target);
//             console.log(e.target.value);
//           }
//         }
//         />
//     </div>
//   );
// };

// export default EventPractice;<h1>이벤트 연습</h1>