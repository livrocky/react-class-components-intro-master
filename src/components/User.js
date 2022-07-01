import { Component } from 'react';
import classes from './User.module.css';

class User extends Component {
  render() {
    return <l1 className={classes.user}>{this.props.name}</l1>;
  }
}

// const User1 = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
