"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import { Link } from 'next/link';
const Homepage = () => {
  return (
    <motion.div className="h-full" initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 1 }}>
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        <div className=" h-1/2 lg:h-full lg:w-1/2 relative">
          <img src="/hero.png" alt="" fill className="object-contain" />
        </div>
        <div className="h-1/2 lg:h-full lg:w-1/2  flex flex-col gap-8 justify-center items-center">
          <h1 className="font-bold text-4xl md:text-6xl">Lorem ipsum dolor sit amet </h1>
          <p className="md:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, sequi, repellat tempora earum ut doloremque excepturi ipsa reprehenderit sapiente molestiae laboriosam rerum vero quo recusandae! At quisquam aliquam nisi atque.</p>
          <div className="w-full flex gap-4">
            <Link href="/portfolio"> <button className="bg-black text-white p-5 rounded-lg ring-1 ring-white">View My Work</button></Link>
            <Link href="/contact"><button className="bg-white text-black p-5 rounded-lg ring-1 ring-black">Contact Me</button></Link>

          </div>
        </div>
      </div>
    </motion.div>
  )
};

export default Homepage;
