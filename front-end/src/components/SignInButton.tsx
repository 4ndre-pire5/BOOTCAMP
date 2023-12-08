"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { UserIcon } from '@heroicons/react/24/outline';

const SignInButton = () => {
  const { data: session } = useSession();
  console.log({ session });

  if (session && session.user)
    return (
      <div className="flex gap-4 ml-auto">
        <p className="text-sky-600">{session.user.name}</p>
        <Link
          href={"/api/auth/signout"}
          className="flex gap-4 ml-auto text-red-600"
        >
          Sign Out
        </Link>
      </div>
    );

  return (
    <div className="flex gap-4 ml-auto items-center">
      <Link
        href={"/api/auth/signin"}
        className="flex gap-1 ml-auto text-green-600"
      >
        <UserIcon className="w-6 h-6 text-green-500 " />
        Entrar
      </Link>
      <Link
        href={"/signup"}
        className="flex gap-4 ml-auto bg-green-600 text-green-200 p-2 rounded"
      >
        Criar nova conta
      </Link>
    </div>
  );
};

export default SignInButton;
