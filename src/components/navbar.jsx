"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import NavLink from "./navlink"
import { motion, stagger } from 'framer-motion'

const links = [
    { url: '/', title: "Home" },
    { url: '/about', title: "About" },
    { url: '/portfolio', title: "Portfolio" },
    { url: '/contact', title: "Contact" },
]
const Navbar = () => {
    const [open, setOpen] = useState(false)

    const topVariants = {
        closed: {
            rotate: 0
        },
        opened: {
            rotate: 45,
            backgroundColor: "rgb(255,255,255)"
        }
    }
    const centerVariants = {
        closed: {
            opacity: 1,
        },
        opened: {
            opacity: 0,
        }
    }

    const bottomVariants = {
        closed: {
            rotate: 0
        },
        opened: {
            rotate: -45,
            backgroundColor: "rgb(255,255,255)"
        }
    }
    const listVariants = {
        closed: {
            x: "100vw"
        },
        opened: {
            x: 0,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.2,
            }
        }
    }
    const listItemVariants = {
        closed: {
            x: -10,
            opacity: 0
        },
        opened: {
            x: 0,
            opacity: 1
        }
    }
    return (
        <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
            <div className=" hidden md:flex gap-4 w-1/3">
                {links.map((link) => (
                    <NavLink link={link} key={link.title} />
                ))}
            </div>
            {/* logo section */}
            <div className="md:hidden lg:flex xl:w-1/3  xl:justify-center">
                <Link href='/' className="text-sm bg-black rounded-md p-1  flex items-center justify-center ">
                    <span className="text-white font-semibold mr-1">Mohamed</span>
                    <span className="bg-white text-black font-semibold w-14 h-8 flex items-center justify-center rounded ">.Hassan</span>
                </Link>
            </div>
            <div className="hidden  md:flex gap-4 justify-end align-middle w-1/3">
                {/* write your accounts */}
                <Link href="#">
                    <Image src="/github.png" alt="" width={24} height={24} />
                </Link>
                <Link href="#">
                    <Image src="/facebook.png" alt="" width={24} height={24} />
                </Link>
                <Link href="#">
                    <Image src="/linkedin.png" alt="" width={24} height={24} />
                </Link>
                <Link href="#">
                    <Image src="/instagram.png" alt="" width={24} height={24} />
                </Link>
                <Link href="#">
                    <Image src="/pinterest.png" alt="" width={24} height={24} />
                </Link>
                <Link href="#">
                    <Image src="/dribbble.png" alt="" width={24} height={24} />
                </Link>
            </div>
            {/* reponsive sections */}
            <div className="md:hidden" >
                {/* MENU BUTTON */}
                <button onClick={() => setOpen((prev) => !prev)} className="w-10 h-8 flex flex-col  justify-between z-50 relative">
                    <motion.div
                        variants={topVariants}
                        animate={open ? "opened" : "closed"}
                        className="w-10 h-1 bg-black rounded origin-left"> </motion.div>
                    <motion.div
                        variants={centerVariants}
                        animate={open ? "opened" : "closed"}
                        className="w-10 h-1 bg-black rounded "> </motion.div>
                    <motion.div
                        variants={bottomVariants}
                        animate={open ? "opened" : "closed"}
                        className="w-10 h-1 bg-black rounded origin-left"> </motion.div>
                </button>
                {/* MENU List */}
                {open &&
                    (
                        <motion.div
                            variants={listVariants}
                            initial="closed"
                            animate="opened"
                            className="z-40 absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center gap-8 justify-center text-4xl" >
                            {links.map((link) => (
                                <motion.div
                                    variants={listItemVariants}
                                    key={link.title}>
                                    <Link href={link.url} > 
                                        <button className=" p-4 ">{link.title}</button>
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>
                    )
                }
            </div>
        </div>
    )
}

export default Navbar