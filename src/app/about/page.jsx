"use client"
import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
const skills = [
    "JavaScript",
    "ReactJs",
    "TailWind",
    "NextJs",
    "TypeScript",
    "Bootstrap",
    "MongoDB",
    "NodeJs",
    "Express",
    "NestJs",
    "GraphQL",
    "Redux",
    "SCSS"
];
const AboutPage = () => {
    const containerRef = useRef();
    const { scrollYProgress } = useScroll({ container: containerRef });
    const skillRef = useRef();
    const isSkillRefInView = useInView(skillRef, { margin: "-100px" });
    const experienceRef = useRef();
    const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });


    return (
        <motion.div
            className="h-full"
            initial={{ y: "-200vh" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1 }}
        >
            {/* CONTAINER */}
            <div className="h-full overflow-scroll overflow-x-hidden lg:flex" ref={containerRef}>
                {/* TEXT CONTAINER */}

                <div className="p-4 sm:p-8 md:p-8 lg:p-8 xl:p-8 flex flex-col  md:gap-32 lg:gap-48 xl:gap-64  lg:w-2/3 lg:pr-0 xl:w-1/2">
                    {/* BIOGRAPHY CONTAINER */}
                    <div className="flex flex-col gap-12 justify-center">
                        {/* BIOGRAPHY IMAGE */}
                        <Image
                            src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=800"
                            alt=""
                            width={112}
                            height={112}
                            className="w-28 h-28 rounded-full object-cover"
                        />
                        {/* BIOGRAPHY TITLE */}
                        <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
                        {/* BIOGRAPHY DESC */}
                        <p className="text-lg">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                            harum quibusdam cupiditate nobis accusamus sed aut aperiam,
                            suscipit! Vel doloremque numquam quam nihil.
                        </p>
                        {/* BIOGRAPHY QUOTE */}
                        <span className="italic">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </span>
                        {/* BIOGRAPHY SIGN SVG*/}
                        <div className="self-end ">
                            <svg width="400" height="180" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 80 Q 60 20, 120 80 T 240 80"
                                    stroke="black" fill="transparent" stroke-width="3" />
                                <path d="M120 110 C 140 140, 180 140, 200 110 S 260 110, 280 140"
                                    stroke="black" fill="transparent" stroke-width="2" />
                                <text x="50" y="150" fill="black" font-size="40" font-family="Brush Script MT, cursive">
                                    Mohamed Hassan
                                </text>
                            </svg>

                        </div>
                        {/* BIOGRAPHY SCROLL SVG */}
                        <motion.svg
                            initial={{ opacity: 0.2, y: 0 }}
                            animate={{ opacity: 1, y: "10px" }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            width={50}
                            height={50}
                        >
                            <path
                                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                            <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                            <path
                                d="M15 11L12 14L9 11"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                        </motion.svg>
                    </div>
                    {/* SKILLS CONTAINER */}
                    <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
                        {/* SKILL TITLE */}
                        <motion.h1
                            initial={{ x: "-300px" }}
                            animate={isSkillRefInView ? { x: 0 } : {}}
                            transition={{ delay: 0.2 }}
                            className="font-bold text-2xl"
                        >
                            SKILLS
                        </motion.h1>
                        {/* SKILL LIST */}
                        <motion.div
                            initial={{ x: "-300px" }}
                            animate={isSkillRefInView ? { x: 0 } : {}}
                            className="flex gap-4 flex-wrap"
                        >
                            {skills.map((skill) => (<div key={skill} className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                {skill}
                            </div>))}

                        </motion.div>
                        {/* SKILL SCROLL SVG */}
                        <motion.svg
                            initial={{ opacity: 0.2, y: 0 }}
                            animate={{ opacity: 1, y: "10px" }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            width={50}
                            height={50}
                        >
                            <path
                                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                            <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                            <path
                                d="M15 11L12 14L9 11"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                        </motion.svg>
                    </div>
                    {/* EXPERIENCE CONTAINER */}
                    <div
                        className="flex flex-col gap-12 justify-center pb-48"
                        ref={experienceRef}
                    >
                        {/* EXPERIENCE TITLE */}
                        <motion.h1
                            initial={{ x: "-300px" }}
                            animate={isExperienceRefInView ? { x: "0" } : {}}
                            transition={{ delay: 0.2 }}
                            className="font-bold text-2xl"
                        >
                            EXPERIENCE
                        </motion.h1>
                        {/* EXPERIENCE LIST */}
                        <motion.div
                            initial={{ x: "-300px" }}
                            animate={isExperienceRefInView ? { x: "0" } : {}}
                            className=""
                        >
                            {/* EXPERIENCE LIST ITEM */}
                            <div className="flex justify-between h-48">
                                {/* LEFT */}
                                <div className="w-1/3 ">
                                    {/* JOB TITLE */}
                                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                                        Senior JavaScript Engineer
                                    </div>
                                    {/* JOB DESC */}
                                    <div className="p-3 text-sm italic">
                                        I led web development, offering expertise in JavaScript
                                        frameworks.{" "}
                                    </div>
                                    {/* JOB DATE */}
                                    <div className="p-3 text-red-400 text-sm font-semibold">
                                        2024 - Present
                                    </div>
                                    {/* JOB COMPANY */}
                                    <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                                        Apple
                                    </div>
                                </div>
                                {/* CENTER */}
                                <div className="w-1/6 flex justify-center">
                                    {/* LINE */}
                                    <div className="w-1 h-full bg-gray-600 rounded relative">
                                        {/* LINE CIRCLE */}
                                        <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                                    </div>
                                </div>
                                {/* RIGHT */}
                                <div className="w-1/3 "></div>
                            </div>
                            {/* EXPERIENCE LIST ITEM */}
                            <div className="flex justify-between h-48">
                                {/* LEFT */}
                                <div className="w-1/3 "></div>
                                {/* CENTER */}
                                <div className="w-1/6 flex justify-center">
                                    {/* LINE */}
                                    <div className="w-1 h-full bg-gray-600 rounded relative">
                                        {/* LINE CIRCLE */}
                                        <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                                    </div>
                                </div>
                                {/* RIGHT */}
                                <div className="w-1/3 ">
                                    {/* JOB TITLE */}
                                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                                        Senior React Developer
                                    </div>
                                    {/* JOB DESC */}
                                    <div className="p-3 text-sm italic">
                                        I spearheaded React-based application development,
                                        leveraging advanced skills.
                                    </div>
                                    {/* JOB DATE */}
                                    <div className="p-3 text-red-400 text-sm font-semibold">
                                        2019 - 2024
                                    </div>
                                    {/* JOB COMPANY */}
                                    <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                                        Microsoft
                                    </div>
                                </div>
                            </div>
                            {/* EXPERIENCE LIST ITEM */}
                            <div className="flex justify-between h-48">
                                {/* LEFT */}
                                <div className="w-1/3 ">
                                    {/* JOB TITLE */}
                                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                                        Freelancer
                                    </div>
                                    {/* JOB DESC */}
                                    <div className="p-3 text-sm italic">
                                        I provided web solutions, applying a range of technologies
                                        to address client requirements.
                                    </div>
                                    {/* JOB DATE */}
                                    <div className="p-3 text-red-400 text-sm font-semibold">
                                        2010 - 2019
                                    </div>
                                </div>
                                {/* CENTER */}
                                <div className="w-1/6 flex justify-center">
                                    {/* LINE */}
                                    <div className="w-1 h-full bg-gray-600 rounded relative">
                                        {/* LINE CIRCLE */}
                                        <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                                    </div>
                                </div>
                                {/* RIGHT */}
                                <div className="w-1/3 "></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
                {/* SVG CONTAINER */}
                <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
                    <Brain scrollYProgress={scrollYProgress} />
                </div>
            </div>
        </motion.div>
    );
}

export default AboutPage