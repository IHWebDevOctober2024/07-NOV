import usersJson from "../data/users.json";
import { useState } from "react";

function Users() {
  const [usersArray, setUsersArray] = useState(usersJson);

  function deleteUser(userId) {
    // we have an array
    const filteredUsers = usersArray.filter((eachUser) => {
      /*   if (eachUser.id !== userId) {
        return eachUser;
      }
        // this works, but it can be simplified
      return */

      return eachUser.id !== userId; // if we want to delete user with id 3  the userId is going to be 3. eachUser.id === 3 -> the result is false, so it's not included to the array
    });
    // now we have a NEW array. React is going to identify a change when we use the set function

    setUsersArray(filteredUsers);
  }

  return (
    <ul>
      {usersArray.map((eachUser) => {
        return (
          <li>
            <img src={eachUser.imageUrl} alt={`picture of ${eachUser.name}`} />
            <h4>{eachUser.name}</h4>
            <p>{eachUser.description}</p>
            <p>{eachUser.isAdmin ? "🧑‍💻" : "🐒"}</p>
            <button onClick={()=>deleteUser(eachUser.id)}>Delete user</button>
          </li>
        );
      })}
    </ul>
  );
}

export default Users;
