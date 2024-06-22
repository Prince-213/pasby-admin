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
import { useQuery } from "@tanstack/react-query";

import pasbylogo from "@/assets/Pasby™/Pasby™_wordmark-trasnparent_10.svg";
import {
  DatabaseZapIcon,
  ImageIcon,
  LogOut,
  Mail,
  MapPin,
  Save,
  Search,
  User,
  X,
} from "lucide-react";
import { fetchPending } from "@/lib/utils";
import ModalDetail from "./modal-detail";
import { PasbyInfo } from "@/types/datainfo";

const Dashboard = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [info, setInfo] = useState<PasbyInfo>({
    nin: "",
    pending: true,
    source: {
      data: {
        marital_status: "",
        gender: "",
        date_of_birth: "",
        last_name: "",
        photo: "",
        phone_number: "",
        employment_status: "",
        middle_name: "",
        first_name: "",
        email: "",
      },
      extra: {
        phone: "",
        name: "",
        birth: {
          place: "",
          state: "",
        },
        residence: {
          address: "",
          city: "",
          state: "",
        },
        email: "",
      },
    },
  });

  const { data: pendingPasby } = useQuery({
    queryKey: ["pending"],
    queryFn: fetchPending,
  });

  return (
    <div className=" relative w-full h-screen flex flex-row">
      {openModal && <ModalDetail info={info} setOpenModal={setOpenModal} />}
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

          <button className=" flex items-center space-x-4">
            <p className=" font-medium text-lg">Sign Out</p>
            <LogOut className=" text-pasby" />
          </button>
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
                  NIN
                </th>
                <th scope="col" className="px-6 py-3">
                  Gender
                </th>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {pendingPasby?.data.requests.map((item, index) => {
                return (
                  <tr
                    key={index}
                    className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 flex flex-row space-x-4 items-center font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <p className=" text-lg font-medium text-black capitalize">
                        {item.source.extra.name}
                      </p>
                    </th>
                    <td className="px-6 py-4 text-lg text-yellow-600">
                      Pending
                    </td>

                    <td className="px-6 py-4">{item.nin}</td>
                    <td className="px-6 py-4 uppercase font-semibold">
                      {item.source.data.gender}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button
                        onClick={() => {
                          setInfo(item);

                          setOpenModal(true);
                        }}
                        className="font-medium text-gray-500 hover:underline"
                      >
                        <DatabaseZapIcon />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
