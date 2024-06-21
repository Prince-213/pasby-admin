import Image from "next/image";

import profile from "@/assets/ahmed-syed-6NVrH0HB_DE-unsplash.jpg";
import pasbylogo from "@/assets/Pasby™/Pasby™_wordmark-trasnparent_10.svg";
import { ImageIcon, MapPin, Save, User, X } from "lucide-react";
export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className=" w-full h-screen ">{children}</div>;
}
