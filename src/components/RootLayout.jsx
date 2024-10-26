'use client'


import Footer from "@/components/pieces/Footer";
import Nav from "./pieces/Nav";
import PreLoader from "./preloader/preloader";

export default function RootLayout({ children }) {


  return (
    <>

      <PreLoader />
      <div id="mainBg" className="overflow-x-hidden">
        <Nav />
        <main role="main">{children}</main>
        <Footer />
      </div>

    </>
  );
}
