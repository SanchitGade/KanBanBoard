import React from "react";

const Navbar = ({ setShowModal }) => {
  return (
    <div className="flex items-center justify-between px-5 py-3">
      {/* Brand Section */}
      <div className="p-2">
        <h3 className="tracking-[8px] sm:tracking-[18px] font-bungee text-white cursor-default">
          KAN-BAN
        </h3>

        <h3 className="tracking-[18px] font-bungee text-white">BOARD</h3>
      </div>

      {/* Right Section */}
      <div className="p-2 flex flex-col items-end">
        <p className="text-xl tracking-widest m-1 font-poppins font-light text-slate-300">
          Make your own KanBan
        </p>

        <div className="relative inline-flex items-center justify-center group mt-2">
          {/* Glow */}
          <div className="absolute inset-0 duration-1000 opacity-60 transition-all bg-linear-to-r from-indigo-500 via-pink-500 to-yellow-400 rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>

          {/* Button */}
          <button
            onClick={() => setShowModal(true)}
            className="group relative inline-flex items-center justify-center text-sm rounded-xl bg-green-400 px-6 py-2.5 font-semibold text-white transition-all duration-200 hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 hover:shadow-gray-600/30 font-poppins"
          >
            New Task
            <svg
              aria-hidden="true"
              viewBox="0 0 10 10"
              className="mt-0.5 ml-2 -mr-1 w-2.5 h-2.5 stroke-white stroke-2 fill-none"
            >
              <path
                d="M0 5h7"
                className="transition opacity-0 group-hover:opacity-100"
              ></path>

              <path
                d="M1 1l4 4-4 4"
                className="transition group-hover:translate-x-0.75"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
