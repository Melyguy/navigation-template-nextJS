"use client"

import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { TbBrandReact } from "react-icons/tb";
import { IoPerson } from "react-icons/io5";
export default function Navbar() {

    return (
        <>
        <div className="w-full flex justify-center">
            <div 
                className="max-w-screen-md scale-[0.56] md:scale-100 bg-neutral-200 absolute z-30 top-1 md:top-10 left-1/2 -translate-x-1/2 
               flex gap-2 backdrop-blur-[30px] p-1 justify-center rounded-full overflow-hidden w-full font-bold"
            >
                <Link 
                    href="/" 
                    className="
                    p-4
                    text-2xl
                    text-blue-950
                    bg-neutral-300
                    rounded-full
                    hover:bg-blue-500
                    hover:text-white
                    flex
                    items-center
                    justify-center
                    hover:bg-gradient-to-r from-blue-500 via-purple-500 to-red-500
                    border
                    border-blue-950
                    
                "
                >
                    <FaHome />
                </Link>
                <Link 
                    href="/" 
                    className="
                       p-4
                    text-2xl
                    text-blue-950
                    bg-neutral-300
                    rounded-full
                    hover:bg-blue-500
                    hover:text-white
                    flex
                    items-center
                    justify-center
                    hover:bg-gradient-to-r from-blue-500 via-purple-500 to-red-500
                    border
                    border-blue-950
                "
                >
                    <TbBrandReact />
                </Link>
                <Link 
                    href="/" 
                    className="
                    p-4
                    text-2xl
                    text-blue-950
                    bg-neutral-300
                    rounded-full
                    hover:bg-blue-500
                    hover:text-white
                    flex
                    items-center
                    justify-center
                    hover:bg-gradient-to-r from-blue-500 via-purple-500 to-red-500
                    border
                    border-blue-950
                "
                    >
                        <IoPerson />
                </Link>

            </div>
            </div>
        </>
    );
};