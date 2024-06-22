"use client";

import Image from "next/image";
import pasbylogo from "@/assets/Pasby™/Pasby™_default-logo_4.svg";
import identifyButton from "@/assets/Pasby™/Pasby™_identify_21.svg";
import { motion } from "framer-motion";
import { UsersIcon, Loader } from "lucide-react";
import qrscan from "@/assets/Pasby™/pngwing.com.png";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [identify, setIdentify] = useState(false);

  return (
    <main className="flex min-h-screen flex-col font-satoshi items-center pt-10">
      <div className="z-10 w-[80%] mx-auto items-center justify-between  text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 text-base pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 font-medium dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <Link href={"/"}>Home</Link>&nbsp; &nbsp;{" "}
          <Link href="/dash">Dashboard</Link>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={pasbylogo}
              alt={"PasbyLogo"}
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>
      <div className=" w-[50%] flex flex-col items-center pt-10 mx-auto">
        <div className=" relative">
          <UsersIcon size={52} />
          <Image
            src={pasbylogo}
            alt={"PasbyLogo"}
            className=" absolute top-0 -right-5  dark:invert"
            width={25}
            height={25}
            priority
          />
        </div>

        <br />
        <div className=" p-10 h-fit flex flex-col items-center w-[60%] mx-auto rounded-lg border-2 border-[#80808028] shadow-2xl">
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: identify ? "300px" : 0,
              opacity: identify ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className=" h-[300px] w-[300px]"
          >
            <Image src={qrscan} width={300} height={300} alt="" />
          </motion.div>

          <button
            type="submit"
            onClick={() => setIdentify(true)}
            className=" relative  w-[25rem]"
          >
            {loading && (
              <div className=" absolute rounded-lg flex justify-center items-center bg-[#222222b7] z-40 w-[80%] left-[10%] h-full">
                <Loader className=" animate-spin text-white" />
              </div>
            )}

            <Image
              src={identifyButton}
              width={400}
              className=" w-[80%] mx-auto"
              height={100}
              alt=""
            />
          </button>
        </div>
      </div>
    </main>
  );
}
