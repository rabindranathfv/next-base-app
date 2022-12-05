import { User } from "../interfaces/user.interface";

export interface IUserProfile {
  user: User;
}

const UserDetail = ({ user }: IUserProfile) => {
  return (
    <div id={user.id.toString()}>
      <h4>Name: {user.name}</h4>
      <p> email: {user.email}</p>
      <p>
        address: {user.address.street} - {user.address.suite}{" "}
        {user.address.city}
      </p>
      <p> phone: {user.phone}</p>
      <p> username: {user.username}</p>
      <p> website: {user.website}</p>
    </div>
  );
};

export default UserDetail;
