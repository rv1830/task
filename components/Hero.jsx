"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { SignedOut, SignedIn } from "@clerk/nextjs";

const Hero = () => {
  return (
    <motion.div
      className="w-screen h-screen flex flex-col justify-center items-center bg-gradient-to-t from-indigo-500 via-white/90"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
    >
      <motion.div
        className="text-center max-w-3xl"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 150, damping: 20, duration: 2 }}
      >
        <motion.h1
          className="mx-auto text-3xl font-medium tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-r from-purple-700 to-black bg-clip-text text-transparent"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 25, duration: 2 }}
        >
          Stay Organized,{" "}
          <br />
          <span className="mt-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent inline-block mx-3">
            Get
          </span>
          <motion.span
            className="bg-gradient-to-r from-indigo-600 to-indigo-400 bg-clip-text text-transparent text-7xl font-medium font-times inline-block"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 25, duration: 2 }}
          >
            Results
          </motion.span>
        </motion.h1>

        <motion.p
          className="mt-6 text-gray-700"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 80, damping: 30, duration: 2 }}
        >
          A task manager helps organize, prioritize, and track tasks efficiently,
          improving productivity and ensuring timely project completion.
        </motion.p>

        <div className="mt-10 flex gap-6 justify-center">
          <SignedIn>
            <button className="px-6 py-3 text-white bg-indigo-600 rounded-lg shadow hover:bg-indigo-700 transition transform ">
              <Link href="/admin">Admin / Manager</Link>
            </button>
          </SignedIn>
          <SignedOut>
            <button className="px-6 py-3 text-white bg-indigo-600 rounded-lg shadow hover:bg-indigo-700 transition transform ">
              <Link href="/sign-in">Sign in for Admin</Link>
            </button>
          </SignedOut>

          <SignedIn>
            <button className="px-6 py-3 text-indigo-700 bg-gray-100 rounded-lg shadow hover:bg-gray-200 transition transform ">
              <Link href="/user">User</Link>
            </button>
          </SignedIn>
          <SignedOut>
            <button className="px-6 py-3 text-indigo-700 bg-gray-100 rounded-lg shadow hover:bg-gray-200 transition transform ">
              <Link href="/sign-in">Sign in for User</Link>
            </button>
          </SignedOut>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
