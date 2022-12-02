import React from "react";
import Link from "next/link";
import UserDetail, { IUserProfile } from "../src/components/userDetail";

const Profile: ({ user }: IUserProfile) => JSX.Element = ({
  user,
}: IUserProfile) => {
  console.log("🚀 ~ file: profile.tsx:4 ~ Profile ~ users", user);
  return (
    <div>
      <h2>About Profile</h2>

      <pre>{JSON.stringify(user, null, 0)}</pre>
      <UserDetail user={user} />

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
