import { createUser, fetchUser } from "@/actions/user.actions";
import { UserButton, currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import {black_han_sans, sigmar_one} from "@/app/font";
import HomeComp from "@/components/homePage/HomeComp"
import React from "react";
import Link from "next/link";

export default async function HomePage() {
  const user = await currentUser();

  if (!user) {
    redirect("/");
  } else {
    try {
      const userOld = await fetchUser(user.id);
      if (!userOld) {
        createUser(
          user.id,
          user.emailAddresses,
          user.firstName!,
          user.lastName!,
          user.imageUrl
        );
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="h-screen bg-pink px-20 pt-12 flex flex-col">
        <div className="flex flex-row-reverse gap-3 items-center align-center">
          <UserButton afterSignOutUrl="/" />
          <Link href="/user/basic-info" className={`text-black ${black_han_sans.className} text-center`}>
            Profile of {user.firstName}
          </Link>
        </div>
        <HomeComp />
      </div>
    </>
  );
}
