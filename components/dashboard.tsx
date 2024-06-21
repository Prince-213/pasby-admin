"use client";

import React from "react";

import Image from "next/image";

import identifyButton from "@/assets/Pasby™/Pasby™_identify_21.svg";
import { motion } from "framer-motion";

import qrscan from "@/assets/Pasby™/pngwing.com.png";
import { useState } from "react";
import profile from "@/assets/ahmed-syed-6NVrH0HB_DE-unsplash.jpg";
import { profileEnd } from "console";
import Link from "next/link";

import pasbylogo from "@/assets/Pasby™/Pasby™_wordmark-trasnparent_10.svg";
import {
  DatabaseZapIcon,
  ImageIcon,
  Mail,
  MapPin,
  Save,
  Search,
  User,
  X,
} from "lucide-react";

const Dashboard = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className=" relative w-full h-screen flex flex-row">
      {openModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "circIn" }}
          className=" w-full absolute top-0 left-0 bg-black/70 h-screen z-50 flex justify-center items-center"
        >
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.2, ease: "linear" }}
            className=" lg:w-[40%] space-y-10 relative mx-auto h-fit p-10 rounded-xl bg-white"
          >
            <div className=" pb-4 border-b-2 border-gray-100">
              <div className=" flex justify-between items-center">
                <div>
                  <h1 className=" font-bold text-xl">Your profile</h1>
                  <p>
                    form submitted{" "}
                    <span className=" font-semibold">2 mins ago.</span>
                  </p>
                </div>

                <div className=" flex items-center space-x-4">
                  <button
                    onClick={() => setOpenModal(false)}
                    className=" rounded-xl border-2 py-3 px-4 font-medium"
                  >
                    Discard
                  </button>
                  <button className=" flex items-center space-x-2 py-3 px-4 rounded-xl bg-pasby text-white font-medium">
                    <Save />
                    <p>Approve pasby</p>
                  </button>
                </div>
              </div>
            </div>

            <div className=" space-y-10">
              <div>
                <span className=" flex items-center space-x-4 font-medium">
                  <ImageIcon className=" text-pasby" />
                  <p>Profile picture</p>
                </span>
                <br />
                <div className=" w-32 overflow-hidden h-32 rounded-[50%] relative">
                  <Image
                    src={profile}
                    fill
                    alt=""
                    className=" object-cover object-center"
                  />
                </div>
              </div>

              <div>
                <span className=" flex items-center space-x-4 font-medium">
                  <User className=" text-pasby" />
                  <p>Personal information</p>
                </span>
                <br />
                <div className=" w-full grid lg:grid-cols-3 gap-y-6">
                  <div>
                    <h1 className=" font-semibold text-xl">First Name</h1>

                    <p>John </p>
                  </div>

                  <div>
                    <h1 className=" font-semibold text-xl">Last Name</h1>

                    <p>Okafor </p>
                  </div>

                  <div>
                    <h1 className=" font-semibold text-xl">Date of birth</h1>

                    <p>20 January 1999 </p>
                  </div>

                  <div>
                    <h1 className=" font-semibold text-xl">Phone Number</h1>

                    <p>+234 09090909</p>
                  </div>

                  <div>
                    <h1 className=" font-semibold text-xl">NIN</h1>

                    <p>7777777</p>
                  </div>
                </div>
              </div>

              <div>
                <span className=" flex items-center space-x-4 font-medium">
                  <MapPin className=" text-pasby" />
                  <p>Personal location</p>
                </span>
                <br />
                <div className=" w-full grid lg:grid-cols-3 gap-y-6">
                  <div>
                    <h1 className=" font-semibold text-xl">Address</h1>

                    <p>Oakland </p>
                  </div>

                  <div>
                    <h1 className=" font-semibold text-xl">City</h1>

                    <p>Porhacourt </p>
                  </div>

                  <div>
                    <h1 className=" font-semibold text-xl">State</h1>

                    <p>Rivers State </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
      <aside className=" py-10 w-[15%] bg-[#f1f1f1] h-full">
        <div className=" w-[70%] h-full flex flex-col justify-between mx-auto">
          <Image
            src={pasbylogo}
            alt={"PasbyLogo"}
            className="dark:invert"
            width={100}
            height={24}
            priority
          />

          <div>
            <p className=" font-medium text-lg">Sign Out</p>
          </div>
        </div>
      </aside>
      <div className=" w-[85%] h-full p-10">
        <div className=" w-[90%] mx-auto grid grid-cols-3">
          <div className="flex border-r-2 border-gray-400 flex-col items-center">
            <h1 className=" text-8xl font-bold">12</h1>
            <p className=" text-lg text-emerald-600 font-medium ">Approved</p>
          </div>

          <div className="flex border-r-2 border-gray-400 flex-col items-center">
            <h1 className=" text-8xl font-bold">10</h1>
            <p className=" text-lg text-yellow-600 font-medium ">Pending</p>
          </div>

          <div className="flex flex-col items-center">
            <h1 className=" text-8xl font-bold">0</h1>
            <p className=" text-lg text-red-600 font-medium ">Rejected</p>
          </div>
        </div>
        <br />

        <div className="w-full flex mt-10 items-center justify-between flex-row  mx-auto">
          <div className=" w-[70%]  p-4 rounded-xl border-2 border-gray-400 shadow-lg flex flex-row space-x-5 bg-transparent">
            <Search className=" text-gray-500" />
            <input
              placeholder="Search User"
              className=" w-[90%] border-none outline-none bg-transparent"
            />
          </div>

          <div className=" flex items-center space-x-10 w-[26%]">
            <button className=" p-4 flex items-center justify-center space-x-5 h-full w-[90%] bg-blue-600 rounded-lg text-white">
              <User />
              <p>Invite User</p>
            </button>
            <button className=" bg-gray-200 rounded-xl p-4">
              <Mail />
            </button>
          </div>
        </div>

        <div className=" mt-10">
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-fit p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="all">All</option>
            <option value="approved">Approved</option>
            <option value="pending">Pending</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>

        <div className="relative overflow-x-auto text:lg shadow-md sm:rounded-lg mt-16">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  User
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Phone Number
                </th>
                <th scope="col" className="px-6 py-3">
                  NIN
                </th>
                <th scope="col" className="px-6 py-3">
                  Activity
                </th>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  className="px-6 py-4 flex flex-row space-x-4 items-center font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <div className=" w-14 h-14 relative flex items-center space-x-5 overflow-hidden rounded-[50%]">
                    <Image
                      src={profile}
                      alt=""
                      fill
                      className=" rounded-[50%] object-cover object-center"
                    />
                  </div>
                  <p className=" text-lg font-medium text-black">John Okafor</p>
                </th>
                <td className="px-6 py-4 text-lg text-green-500">Active</td>
                <td className="px-6 py-4">+234 0987237378444</td>
                <td className="px-6 py-4">7237378444</td>
                <td className="px-6 py-4">2 mins ago</td>
                <td className="px-6 py-4 text-right">
                  <button
                    onClick={() => setOpenModal(true)}
                    className="font-medium text-gray-500 hover:underline"
                  >
                    <DatabaseZapIcon />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
