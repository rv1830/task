import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
export default function Home() {
  return (
    <div className="h-screen max-w-screen">
      <Navbar /> 
      <Hero /> 
  
    </div>
  );
}
