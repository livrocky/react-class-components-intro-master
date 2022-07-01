import { Component, useEffect } from 'react';
import classes from './User.module.css';

class User extends Component {
  componentWillUnmount() {
    // kai komponentas sunaikinamas
    console.log(`${this.props.name} is fading away bye bye`);
  }
  componentDidMount() {
    console.log(`${this.props.name} mounted`);
  }

  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

// const User1 = (props) => {
//   useEffect(() => {
//     console.log(`${props.name} mounted`);
//     return () => {
//       // kai sunaikinamas komponentas
//       // componentWillUnmount
//       console.log(`${props.name} is fading away`);
//     };
//   }, []);
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
