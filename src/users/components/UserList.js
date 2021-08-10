import Useritems from "./UserItems";



const UserList = (props) => {
    if(props.data.length === 0){
        return (
            <div>
                <h2>No User Found</h2>
            </div>
        );
    }
  return (
   <ul>
       {props.data.map(user => 
           <Useritems 
              key={user.id}
              id={user.id}
              name={user.name}
              img={user.img}
            />
       )}
   </ul>
  );
}

export default UserList;
