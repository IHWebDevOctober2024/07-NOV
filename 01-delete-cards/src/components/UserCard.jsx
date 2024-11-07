function UserCard({
  eachUser: { imageUrl, name, description, isAdmin, id },
  deleteUser,
}) {
  return (
    <li>
      <img src={imageUrl} alt={`picture of ${name}`} />
      <h4>{name}</h4>
      <p>{description}</p>
      <p>{isAdmin ? "🧑‍💻" : "🐒"}</p>
      <button onClick={() => deleteUser(id)}>Delete user</button>
    </li>
  );
}

export default UserCard;
/* 
// without deconstruction

function UserCard(props) {
  console.log(props);
  const eachUser = props.eachUser;
  const deleteUser = props.deleteUser;

  return (
    <li>
      <img src={eachUser.imageUrl} alt={`picture of ${eachUser.name}`} />
      <h4>{eachUser.name}</h4>
      <p>{eachUser.description}</p>
      <p>{eachUser.isAdmin ? "🧑‍💻" : "🐒"}</p>
      <button onClick={() => deleteUser(eachUser.id)}>Delete user</button>
    </li>
  );
}

export default UserCard; */
