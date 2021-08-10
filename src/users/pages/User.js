

import UserList from '../components/UserList';
const User = () => {
    const USERS = [
      {
        id:'u1',
        name:'Siddhant Gupta',
        img:'https://image.flaticon.com/icons/png/512/21/21104.png',
    }
  ];
  return (
  <>
  <h2>User data</h2>
  <UserList data={USERS} />
  </>
  );
}

export default User;
