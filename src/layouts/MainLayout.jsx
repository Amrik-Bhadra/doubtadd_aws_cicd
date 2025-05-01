import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { BiSolidMessageSquareAdd } from "react-icons/bi";
import NewDoubtForm from "../components/NewDoubtForm";
import logo from "/solved.png";

const MainLayout = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <main className="h-screen relative">
      <header className="h-[8%] bg-white border-b p-2 flex items-center justify-between px-28">
        <nav>
          <Link
            to="/"
            className="text-xl font-semibold flex items-center gap-2"
          >
            <img src={logo} />
            DoubtAdda
          </Link>
        </nav>
      </header>
      <section className="h-[82%] bg-[#f9f9f9] shadow-sm p-2 px-28 overflow-auto">
        <Outlet />
      </section>
      <footer className="h-[10%] bg-black text-white shadow-sm px-28 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-lg">DoubtAdda</span>
          <span className="text-sm text-gray-300">© 2025</span>
        </div>
        <div className="text-sm text-gray-300">
          <p>Email: doubtadd@gmail.com</p>
          <p>Phone: +91-7739226540</p>
        </div>
      </footer>

      <button
        onClick={() => setOpenModal(true)}
        className="absolute bottom-[14%] right-8 h-12 w-12 rounded-full bg-[#333] text-white flex items-center justify-center"
      >
        <BiSolidMessageSquareAdd size={24} />
      </button>

      {openModal && <NewDoubtForm onClose={() => setOpenModal(false)} />}
    </main>
  );
};

export default MainLayout;
