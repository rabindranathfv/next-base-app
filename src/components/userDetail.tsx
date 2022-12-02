export interface Address {
  street: string;
  suite: string;
  city: string;
}

export interface User {
  id: number;
  name: string;
  phone: string;
  email: string;
  username: string;
  website: string;
  address: Address;
}

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
