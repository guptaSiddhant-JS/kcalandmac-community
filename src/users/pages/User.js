

import UserList from '../components/UserList';
const User = () => {
    const USERS = [
      {
        id:'u1',
        name:'Siddhant Gupta',
        img:'https://storage.googleapis.com/ares-profile-pictures/hd/cbum-d6362e03169602dffba764db5b271f28_hd.jpg',
    }
  ];
  return (
  <>

  <UserList data={USERS} />
  </>
  );
}

export default User;
