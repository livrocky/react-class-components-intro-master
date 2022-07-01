import { Component, useState } from 'react';
import User from './User';

import classes from './Users.module.css';

class Users extends Component {
  constructor(props) {
    super(props);
    // state turi buti objektas; state yra viena bendras per komponenta
    this.state = {
      showUsers: true,
      isDarkMode: false,
    };
  }

  toggleUsersHandler = () => {
    // console.log('toggleUsersHandler', this);
    // this.state.showUsers = false; // negalima mutuoti state;
    // paduoda reiksme yra sujungiama su esamu state. nereikia perkopijuoti kitu reiksmiu
    this.setState((prevState) => ({ showUsers: !prevState.showUsers }));
  };

  render() {
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );
    return (
      <div className={classes.users}>
        {/* .bind(this) nes kitaip  toggleUsersHandler this === undefined */}
        <button onClick={this.toggleUsersHandler}>
          {this.state.showUsers ? 'Hide' : 'Show'} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

export default Users;
