import React from "react";
import SignUp from "../components/SignUp";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import { Session } from "next-auth";

const SignupPage = async () => {
  const session: Session | null = await getServerSession(authOptions);
  if (session) redirect("/profile");

  return (
    <div>
      <SignUp />
    </div>
  );
};

export default SignupPage;
