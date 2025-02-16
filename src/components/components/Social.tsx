"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function GlowingAdSenseCard() {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);

  return (
    <div className="flex flex-row items-center mt-16 gap-16 justify-center">
      <div className="relative flex flex-col items-center">
        {/* Main Card */}
        <motion.div
          className="p-5 rounded-xl z-50 pointer-events-auto border-[2px] border-[#7485B3] bg-transparent relative group cursor-pointer"
          initial={{
            scale: 1,
            boxShadow: "0px 0px 5px rgba(156, 168, 199, 0.3)",
          }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 20px rgba(156, 168, 199, 0.8)",
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Background Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-500/20 to-gray-800/20 rounded-xl"></div>

          {/* Logo Wrapper */}
          <motion.div
            className="relative z-10 flex flex-col items-center gap-2"
            animate={isHovered ? { y: -10 } : { y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* SVG Icon */}
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              viewBox="0,0,256,256"
              className="w-16 h-16 fill-[#9CA8C7] drop-shadow-[0_0_15px_#9CA8C7]"
              initial={{ filter: "drop-shadow(0px 0px 5px #9CA8C7)" }}
              whileHover={{
                filter: "drop-shadow(0px 0px 15px #9CA8C7)",
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <g
                stroke="none"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
              >
                <g transform="scale(5.12,5.12)">
                  <path d="M25.49414,4.99805c-1.309,0 -2.60414,0.34981 -3.74414,1.00781c-1.735,1.002 -2.97614,2.61773 -3.49414,4.55273c-0.519,1.935 -0.25381,3.95569 0.74219,5.67969l14.00781,25.01172c1.336,2.313 3.826,3.75195 6.5,3.75195c1.309,0 2.60414,-0.34981 3.74414,-1.00781c1.735,-1.002 2.97614,-2.61773 3.49414,-4.55273c0.519,-1.935 0.25381,-3.95569 -0.74219,-5.67969l-14.00781,-25.01172c-1.336,-2.313 -3.826,-3.75195 -6.5,-3.75195zM16.07031,13.64063l-9,15c1.07,-0.41 2.21969,-0.64062 3.42969,-0.64062c4.85,0 8.86969,3.65938 9.42969,8.35938l4.16016,-6.93945l-6.82031,-12.17969c-0.65,-1.12 -1.04922,-2.33961 -1.19922,-3.59961zM10.5,30c-4.14214,0 -7.5,3.35786 -7.5,7.5c0,4.14214 3.35786,7.5 7.5,7.5c4.14214,0 7.5,-3.35786 7.5,-7.5c0,-4.14214 -3.35786,-7.5 -7.5,-7.5z"></path>
                </g>
              </g>
            </motion.svg>
          </motion.div>
        </motion.div>

        {/* Name (Appears Below the Card) */}
        <motion.div
          className="absolute text-white -bottom-10 text-nowrap font-light mt-2"
          initial={{ opacity: 0, y: 5 }}
          animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 5 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          Google AdSense
        </motion.div>
      </div>
      <div className="relative flex flex-col items-center">
        {/* Main Card */}
        <motion.div
          className="p-5 rounded-xl z-50 pointer-events-auto border-[2px] border-[#7485B3] bg-transparent relative group cursor-pointer"
          initial={{
            scale: 1,
            boxShadow: "0px 0px 5px rgba(156, 168, 199, 0.3)",
          }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 20px rgba(156, 168, 199, 0.8)",
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          onMouseEnter={() => setIsHovered1(true)}
          onMouseLeave={() => setIsHovered1(false)}
        >
          {/* Background Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-500/20 to-gray-800/20 rounded-xl"></div>

          {/* Logo Wrapper */}
          <motion.div
            className="relative z-10 flex flex-col items-center gap-2"
            animate={isHovered1 ? { y: -10 } : { y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* SVG Icon */}
            <motion.svg
              fill="#ffffff"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-16 h-16 fill-[#9CA8C7] drop-shadow-[0_0_15px_#9CA8C7]"
              initial={{ filter: "drop-shadow(0px 0px 5px #9CA8C7)" }}
              whileHover={{
                filter: "drop-shadow(0px 0px 15px #9CA8C7)",
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"></path>
              </g>
            </motion.svg>
          </motion.div>
        </motion.div>

        {/* Name (Appears Below the Card) */}
        <motion.div
          className="absolute text-white -bottom-10 text-nowrap font-light mt-2"
          initial={{ opacity: 0, y: 5 }}
          animate={isHovered1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 5 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          Tik Tok
        </motion.div>
      </div>
      <div className="relative flex flex-col items-center">
        {/* Main Card */}
        <motion.div
          className="p-5 rounded-xl z-50 pointer-events-auto border-[2px] border-[#7485B3] bg-transparent relative group cursor-pointer"
          initial={{
            scale: 1,
            boxShadow: "0px 0px 5px rgba(156, 168, 199, 0.3)",
          }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 20px rgba(156, 168, 199, 0.8)",
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          onMouseEnter={() => setIsHovered3(true)}
          onMouseLeave={() => setIsHovered3(false)}
        >
          {/* Background Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-500/20 to-gray-800/20 rounded-xl"></div>

          {/* Logo Wrapper */}
          <motion.div
            className="relative z-10 flex flex-col items-center gap-2"
            animate={isHovered3 ? { y: -10 } : { y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* SVG Icon */}
            <motion.svg
              fill="#ffffff"
              viewBox="0 0 32 32"
              id="Camada_1"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              className="w-16 h-16 fill-[#9CA8C7] drop-shadow-[0_0_15px_#9CA8C7]"
              initial={{ filter: "drop-shadow(0px 0px 5px #9CA8C7)" }}
              whileHover={{
                filter: "drop-shadow(0px 0px 15px #9CA8C7)",
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M5,19.5c0-4.6,2.3-9.4,5-9.4c1.5,0,2.7,0.9,4.6,3.6c-1.8,2.8-2.9,4.5-2.9,4.5c-2.4,3.8-3.2,4.6-4.5,4.6 C5.9,22.9,5,21.7,5,19.5 M20.7,17.8L19,15c-0.4-0.7-0.9-1.4-1.3-2c1.5-2.3,2.7-3.5,4.2-3.5c3,0,5.4,4.5,5.4,10.1 c0,2.1-0.7,3.3-2.1,3.3S23.3,22,20.7,17.8 M16.4,11c-2.2-2.9-4.1-4-6.3-4C5.5,7,2,13.1,2,19.5c0,4,1.9,6.5,5.1,6.5 c2.3,0,3.9-1.1,6.9-6.3c0,0,1.2-2.2,2.1-3.7c0.3,0.5,0.6,1,0.9,1.6l1.4,2.4c2.7,4.6,4.2,6.1,6.9,6.1c3.1,0,4.8-2.6,4.8-6.7 C30,12.6,26.4,7,22.1,7C19.8,7,18,8.8,16.4,11"></path>
              </g>
            </motion.svg>
          </motion.div>
        </motion.div>

        {/* Name (Appears Below the Card) */}
        <motion.div
          className="absolute text-white -bottom-10 text-nowrap font-light mt-2"
          initial={{ opacity: 0, y: 5 }}
          animate={isHovered3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 5 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          Meta
        </motion.div>
      </div>
      <div className="relative flex flex-col items-center">
        {/* Main Card */}
        <motion.div
          className="p-5 rounded-xl z-50 pointer-events-auto border-[2px] border-[#7485B3] bg-transparent relative group cursor-pointer"
          initial={{
            scale: 1,
            boxShadow: "0px 0px 5px rgba(156, 168, 199, 0.3)",
          }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 20px rgba(156, 168, 199, 0.8)",
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          onMouseEnter={() => setIsHovered4(true)}
          onMouseLeave={() => setIsHovered4(false)}
        >
          {/* Background Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-500/20 to-gray-800/20 rounded-xl"></div>

          {/* Logo Wrapper */}
          <motion.div
            className="relative z-10 flex flex-col items-center gap-2"
            animate={isHovered4 ? { y: -10 } : { y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* SVG Icon */}
            <motion.svg
              fill="#ffffff"
              height="200px"
              width="200px"
              version="1.1"
              id="Icons"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-16 h-16 fill-[#9CA8C7] drop-shadow-[0_0_15px_#9CA8C7]"
              initial={{ filter: "drop-shadow(0px 0px 5px #9CA8C7)" }}
              whileHover={{
                filter: "drop-shadow(0px 0px 15px #9CA8C7)",
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path d="M23,0H9C4,0,0,4,0,9v14c0,5,4,9,9,9h14c5,0,9-4,9-9V9C32,4,28,0,23,0z M12,25c0,0.6-0.4,1-1,1H7c-0.6,0-1-0.4-1-1V13 c0-0.6,0.4-1,1-1h4c0.6,0,1,0.4,1,1V25z M9,11c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3S10.7,11,9,11z M26,25c0,0.6-0.4,1-1,1h-3 c-0.6,0-1-0.4-1-1v-3.5v-1v-2c0-0.8-0.7-1.5-1.5-1.5S18,17.7,18,18.5v2v1V25c0,0.6-0.4,1-1,1h-3c-0.6,0-1-0.4-1-1V13 c0-0.6,0.4-1,1-1h4c0.3,0,0.5,0.1,0.7,0.3c0.6-0.2,1.2-0.3,1.8-0.3c3,0,5.5,2.5,5.5,5.5V25z"></path>{" "}
              </g>
            </motion.svg>
          </motion.div>
        </motion.div>

        {/* Name (Appears Below the Card) */}
        <motion.div
          className="absolute text-white -bottom-10 text-nowrap font-light mt-2"
          initial={{ opacity: 0, y: 5 }}
          animate={isHovered4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 5 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          Linked In
        </motion.div>
      </div>
      <div className="relative flex flex-col items-center">
        {/* Main Card */}
        <motion.div
          className="p-5 rounded-xl z-50 pointer-events-auto border-[2px] border-[#7485B3] bg-transparent relative group cursor-pointer"
          initial={{
            scale: 1,
            boxShadow: "0px 0px 5px rgba(156, 168, 199, 0.3)",
          }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 20px rgba(156, 168, 199, 0.8)",
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          onMouseEnter={() => setIsHovered2(true)}
          onMouseLeave={() => setIsHovered2(false)}
        >
          {/* Background Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-500/20 to-gray-800/20 rounded-xl"></div>

          {/* Logo Wrapper */}
          <motion.div
            className="relative z-10 flex flex-col items-center gap-2"
            animate={isHovered2 ? { y: -10 } : { y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* SVG Icon */}
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0,0,256,256"
              className="w-16 h-16 fill-[#9CA8C7] drop-shadow-[0_0_15px_#9CA8C7]"
              initial={{ filter: "drop-shadow(0px 0px 5px #9CA8C7)" }}
              whileHover={{
                filter: "drop-shadow(0px 0px 15px #9CA8C7)",
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <g
                fill="#ffffff"
                fillRule="nonzero"
                stroke="none"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
                strokeDasharray=""
                strokeDashoffset="0"
                fontFamily="none"
                fontWeight="none"
                fontSize="none"
                textAnchor="none"
              >
                <g transform="scale(5.12,5.12)">
                  <path d="M5.91992,6l14.66211,21.375l-14.35156,16.625h3.17969l12.57617,-14.57812l10,14.57813h12.01367l-15.31836,-22.33008l13.51758,-15.66992h-3.16992l-11.75391,13.61719l-9.3418,-13.61719zM9.7168,8h7.16406l23.32227,34h-7.16406z"></path>
                </g>
              </g>
            </motion.svg>
          </motion.div>
        </motion.div>

        {/* Name (Appears Below the Card) */}
        <motion.div
          className="absolute text-white -bottom-10 text-nowrap font-light mt-2"
          initial={{ opacity: 0, y: 5 }}
          animate={isHovered2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 5 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          X
        </motion.div>
      </div>
    </div>
  );
}
