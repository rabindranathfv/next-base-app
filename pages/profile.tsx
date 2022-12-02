import React from "react";
import Link from "next/link";

interface Address {
  street: string;
  suite: string;
  city: string;
}

interface User {
  id: number;
  name: string;
  phone: string;
  email: string;
  username: string;
  website: string;
  address: Address;
}

interface IUserProfile {
  user: User;
}

const Profile: ({ user }: IUserProfile) => JSX.Element = ({
  user,
}: IUserProfile) => {
  console.log("🚀 ~ file: profile.tsx:4 ~ Profile ~ users", user);
  return (
    <div>
      <h2>About Profile</h2>

      <pre>{JSON.stringify(user, null, 0)}</pre>
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

      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
    </div>
  );
};

export default Profile;

export async function getStaticProps() {
  const resp = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const data = await resp.json();
  console.log("🚀 ~ file: profile.tsx:22 ~ getStaticProps ~ data", data);
  return {
    props: {
      user: data,
    },
  };
}
