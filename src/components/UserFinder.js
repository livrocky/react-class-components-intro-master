import css from './UserFinder.module.css';
import { useState, useEffect, Component } from 'react';
import Users from './Users';

const DUMMY_USERS = [
  { id: 'u1', name: 'James' },
  { id: 'u2', name: 'Mike' },
  { id: 'u3', name: 'Jane' },
  { id: 'u4', name: 'Mitch' },
];

class UserFinder extends Component {
  constructor(props) {
    // console.log('UserFinder constructor');
    super(props);
    this.state = {
      filteredUsers: [],
      searchTerm: '',
      user: {
        name: {
          last: 'smith',
        },
      },
    };
  }
  // componentDidMount == useEffect(() => {}, []);
  componentDidMount() {
    // console.log('UserFinder mounted');
    this.setState({ filteredUsers: DUMMY_USERS });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('UserFinder componentDidUpdate');
    if (prevState.searchTerm !== this.state.searchTerm) {
      // reikskia pasikeitimas ivyko searchTerm ir mes atnaujinam state
      const filteredArr = DUMMY_USERS.filter((userObj) =>
        userObj.name.includes(this.state.searchTerm)
      );
      this.setState({ filteredUsers: filteredArr });
    } else {
      console.log('state.searchTerm is the same');
    }
  }

  searchChangeHandler(e) {
    this.setState({ searchTerm: e.target.value });
  }

  render() {
    // console.log('UserFinder render constructor');
    return (
      <>
        <div className={css.finder}>
          <input
            type='search'
            value={this.state.searchTerm}
            onChange={this.searchChangeHandler.bind(this)}
          />
        </div>
        <Users users={this.state.filteredUsers} />
      </>
    );
  }
}

function UserFinder1() {
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchChangeHandler = (e) => {
    setSearchTerm(e.target.value);
  };
  // componentDidMount()
  useEffect(() => {
    setFilteredUsers(DUMMY_USERS);
  }, []);

  // componentDidUpdate- class based
  useEffect(() => {
    console.log('searchTerm updated', searchTerm);
    const filteredArr = DUMMY_USERS.filter((userObj) => userObj.name.includes(searchTerm));
    setFilteredUsers(filteredArr);
  }, [searchTerm]);

  return (
    <>
      <div className={css.finder}>
        <input type='search' value={searchTerm} onChange={searchChangeHandler} />
      </div>
      <Users users={filteredUsers} />
    </>
  );
}

export default UserFinder;
