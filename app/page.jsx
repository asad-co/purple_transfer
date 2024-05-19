import Code_svg from "@/assets/svgs/Code_svg";
import Division from "@/components/Division";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex  h-[44vh] items-center justify-center flex-col gap-5">
        <span className="text-4xl font-semibold flex flex-row gap-x-2">
          <Code_svg width="50px" color={"pink"} className="text-lg text-pink-400" />
          Lets Transfer
          <Code_svg width="50px" color={"pink"} className="text-lg text-pink-400" />


        </span>
        <span className="">A way to transfer between your loved ones</span>
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Get Started
          </span>
        </button>
      </div>
      <Division />
    </>
  );
}
