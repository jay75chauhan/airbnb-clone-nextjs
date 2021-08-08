import React from "react";
import { signIn } from "next-auth/client";
import Head from "next/head";
import Image from "next/image";

function Login() {
  return (
    <div className="  flex h-screen items-center justify-center">
      <Head>
        <title>Airbnb Login </title>
        <meta name="description" content="login " />
        <link
          rel="icon"
          href="https://image.flaticon.com/icons/png/512/2111/2111320.png"
        />
      </Head>
      <div className="  flex  items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1585517342886-1f076085742a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1934&q=80"
          layout="fill"
          object-fit="contain"
          loading="eager"
        />
      </div>

      <div className="bg-transparent   backdrop-blur-2xl z-20  shadow-2xl  rounded-3xl items-center justify-center p-12 sm:p-24  ">
        <div className=" flex hover:animate-spin  items-center justify-center">
          <Image
            src="https://image.flaticon.com/icons/png/512/2111/2111320.png"
            height={150}
            width={150}
            object-fit="contain"
          />
        </div>
        <div className="flex flex-col   mt-12">
          <button
            onClick={signIn}
            className=" py-3 backdrop-blur-3xl hover:bg-[#FD5B5F]  text-xl  bg-transparent border-2 border-gray-300 shadow-inner  font-medium hover:text-gray-100 transition  active:scale-95 hover:shadow-2xl     rounded-full text-gray-300 text-center cursor-pointer"
          >
            Login with{" "}
          </button>
          <a
            className=" mt-4  pl-32 text-gray-200 hover:text-gray-300 hover:underline no-underline md:hover:underline text-xs"
            href="https://github.com/jay75chauhan"
            target="_blank"
          >
            @jayChauhan
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
