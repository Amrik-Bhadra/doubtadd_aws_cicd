import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { BiSolidMessageSquareAdd } from "react-icons/bi";
import NewDoubtForm from "../components/NewDoubtForm";

const MainLayout = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <main className="h-screen relative">
      <header className="h-[8%] bg-white border-b p-2 flex items-center justify-between px-28">
        <nav>
          <Link to="/" className="text-xl font-semibold">
            DoubtAdda
          </Link>
        </nav>
      </header>
      <section className="h-[82%] bg-[#f9f9f9] shadow-sm p-2 px-28 overflow-auto">
        <Outlet />
      </section>
      <footer className="h-[10%] bg-black text-white shadow-sm p-2 px-28">
        footer
      </footer>

      <button onClick={()=>setOpenModal(true)} className="absolute bottom-[14%] right-8 h-12 w-12 rounded-full bg-[#333] text-white flex items-center justify-center">
        <BiSolidMessageSquareAdd size={24} />
      </button>


      {
        (openModal && (
            <NewDoubtForm onClose={()=>setOpenModal(false)}/>
        ))
      }
    </main>
  );
};

export default MainLayout;
