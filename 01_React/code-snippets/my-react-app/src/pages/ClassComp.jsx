import React from "react";

class ClassComp extends React.Component {
   constructor(props) {
      super(props);
      this.state = { count: 0 };
   }

   componentDidMount() {
      console.log('component created');
   }
   componentDidUpdate() {
      console.log('component updated');
   }
   componentWillUnmount() {
      console.log('component deleted');
   }

   render() {
      return (
         <div>
            <p>Hello World!!</p>
            <button onClick={() => this.setState({ count: this.state.count - 1 })} >-</button>
            <p>{this.state.count}</p>
            <button onClick={() => this.setState({ count: this.state.count + 1 })} >+</button>
         </div>
      );
   }

}

export default ClassComp;