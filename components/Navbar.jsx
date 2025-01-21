"use client";
import React, { useState } from "react";
import { UserButton, SignedIn, SignedOut, useAuth } from "@clerk/nextjs";

const navLinks = ["Home", "About", "Services", "Contact"];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isLoaded, user } = useAuth();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow z-50">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        <div className="text-2xl font-bold text-indigo-600">Task Manager</div>

        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href="#"
              className="text-gray-700 hover:text-indigo-600 transition"
            >
              {link}
            </a>
          ))}

          <SignedIn>
            <div className="flex items-center gap-4">
              <UserButton afterSignOutUrl="/" />
            </div>
          </SignedIn>

          <SignedOut>
            {user && user.publicMetadata?.role === "user" && (
              <a
                href="/sign-in"
                className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
              >
                Sign In
              </a>
            )}
          </SignedOut>
        </nav>

        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-indigo-600 focus:outline-none"
        >
          {isMobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>

        {isMobileMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white shadow-md md:hidden">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href="#"
                className="block px-4 py-2 text-gray-700 hover:text-indigo-600 transition"
              >
                {link}
              </a>
            ))}

            <SignedOut>
              {user && user.publicMetadata?.role === "user" && (
                <a
                  href="/sign-in"
                  className="block px-4 py-2 text-indigo-600 hover:text-indigo-800 transition"
                >
                  Sign In
                </a>
              )}
            </SignedOut>

            <SignedIn>
              <div className="flex justify-center">
                <UserButton afterSignOutUrl="/" />
              </div>
            </SignedIn>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
