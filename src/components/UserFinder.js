import css from './UserFinder.module.css';
import { useState, useEffect } from 'react';
import Users from './Users';

const DUMMY_USERS = [
  { id: 'u1', name: 'James' },
  { id: 'u2', name: 'Mike' },
  { id: 'u3', name: 'Jane' },
  { id: 'u4', name: 'Mitch' },
];

function UserFinder() {
  const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
  const [searchTerm, setSearchTerm] = useState('');

  const searchChangeHandler = (e) => {
    setSearchTerm(e.target.value);
  };

  // componentWillUpdate - class based
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
