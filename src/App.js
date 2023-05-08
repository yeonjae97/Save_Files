// import Counter from './Counter';
// import MyComponent from './MyComponent';
// import Say from './Say';
// import EventPractice from './EventPractice';
// import EventPracticeFn from './EventPracticeFn';
// import ValidationSample from './ValidationSample';
import ScrollBox from './ScrollBox';
import IterationSample from './IterationSample';
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      // <div>
      //   <ScrollBox ref={(ref) => this.scrollBox=ref}/>
      //   <button onClick={() => this.scrollBox.scrollToBottom()}>
      //     맨 밑으로
      //   </button>
      //   <button onClick={() => this.scrollBox.scrollToTop()}>
      //     맨 위로
      //   </button>
      // </div>
      <div>
        <IterationSample />
      </div>
    );
  }
}
export default App;
// export default App;

// const App = () => {
//   return <ValidationSample />;
// };

