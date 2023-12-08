import Link from "next/link";
import React from "react";
import SignInButton from "./SignInButton";

const AppBar = () => {
  return (
    <header className="flex gap-4 p-4 bg-lime-950">
      <Link className="text-lime-700 font-bold transition-colors hover:text-lime-500" 
        href={"/"}
      >
        App Refloresta
      </Link>
      <Link
        className="text-lime-700 font-bold transition-colors hover:text-lime-500"
        href={"/sobre"}
      >
        Sobre
      </Link>
      <Link
        className="text-lime-700 font-bold transition-colors hover:text-lime-500"
        href={"/mapa"}
      >
        Mapa
      </Link>
      <Link
        className="text-lime-700 font-bold transition-colors hover:text-lime-500"
        href={"/quem-somos"}
      >
        Quem somos
      </Link>
      <Link
        className="text-lime-700 font-bold transition-colors hover:text-lime-500"
        href={"/ongs"}
      >
        ONGs
      </Link>

      <SignInButton />
    </header>
  );
};

export default AppBar;
