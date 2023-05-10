"use client";

import { useState } from "react";

interface User {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  bio: string;
  followers: number;
  following: number;
  public_repos: number;
}

async function getData() {
  const res = await fetch("https://api.github.com/users/giuppiF");
  const data = await res.json();
  return data;
}

export default function Home() {
  const [user, setUser] = useState<User | null>(null);

  const fetchData = async () => {
    const data = await getData();
    setUser(data);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2     ">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={fetchData}
      >
        Load Data
      </button>
      {user && <UserComponent user={user} />}
    </div>
  );
}

// create a User component
const UserComponent = ({ user }: { user: User }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <img src={user.avatar_url} alt="avatar" className="w-32 h-32" />
      <h1 className="text-3xl font-bold">{user.name}</h1>
      <p className="text-2xl">{user.bio}</p>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <a href={user.html_url} className="text-blue-500">
          Visit Profile
        </a>
      </div>
    </div>
  );
};
