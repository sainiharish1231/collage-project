import React from "react";
import Login from "../components/Login";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import { Session } from "next-auth";

const LoginPage = async () => {
  const session: Session | null = await getServerSession(authOptions);
  if (session) redirect("/profile");

  return (
    <div>
      <Login />
    </div>
  );
};

export default LoginPage;
