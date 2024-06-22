import { motion } from "framer-motion";
import {
  Save,
  ImageIcon,
  User,
  MapPin,
  Loader,
  CheckCircle,
} from "lucide-react";
import React, { SetStateAction } from "react";
import profile from "@/assets/ahmed-syed-6NVrH0HB_DE-unsplash.jpg";
import Image from "next/image";
import { convertImage, postPasby } from "@/lib/utils";
import { PasbyInfo } from "@/types/datainfo";
import { initHeapProfiler } from "next/dist/build/swc";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const ModalDetail = ({
  setOpenModal,
  info,
}: {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  info: PasbyInfo;
}) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: () => {
      return postPasby({ body: info });
    },
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["pending"] });
    },
  });

  return (
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
                {mutation.isPending ? (
                  <Loader className=" animate-spin" />
                ) : mutation.isSuccess ? (
                  <CheckCircle className=" text-green-600" />
                ) : (
                  <Save />
                )}

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
                src={convertImage({ data: info.source.data.photo })}
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

                <p>{info.source.data.first_name}</p>
              </div>

              <div>
                <h1 className=" font-semibold text-xl">Last Name</h1>

                <p>{info.source.data.last_name}</p>
              </div>

              <div>
                <h1 className=" font-semibold text-xl">Date of birth</h1>

                <p>{info.source.data.date_of_birth}</p>
              </div>

              <div>
                <h1 className=" font-semibold text-xl">Phone Number</h1>

                <p>{info.source.data.phone_number}</p>
              </div>

              <div>
                <h1 className=" font-semibold text-xl">NIN</h1>

                <p>{info.nin}</p>
              </div>

              <div>
                <h1 className=" font-semibold text-xl">Marital Status</h1>

                <p>{info.source.data.marital_status}</p>
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

                <p>{info.source.extra.residence.address} </p>
              </div>

              <div>
                <h1 className=" font-semibold text-xl">City</h1>

                <p>{info.source.extra.residence.city} </p>
              </div>

              <div>
                <h1 className=" font-semibold text-xl">State</h1>

                <p>{info.source.extra.residence.state} </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ModalDetail;
