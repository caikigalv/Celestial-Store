"use client"
import { HomePage } from "@/app/components/EarthHome";
import { Footer } from "@/app/components/Footer";
import { Gallery } from "@/app/components/Gallery";
import { Header } from "@/app/components/Header";
import { MarsPage } from "@/app/components/Mars";
import { Shopping } from "@/app/components/Shopping";


function Page() {
  return (
    <div className="overflow-x-hidden bg-black">
      <Header />
      <HomePage />
      <Gallery />
      <MarsPage />
      <Shopping />
      <Footer />
    </div>
  )

}

export default Page;