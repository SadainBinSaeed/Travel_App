import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaUser,
  FaEdit,
  FaEnvelope,
  FaCog,
  FaQuestionCircle,
  FaSignOutAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ProfileDropdown = ({ avatar, name, username }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Click outside se close
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Avatar Button */}
      <img
        src={avatar}
        alt={name}
        className="h-10 w-10 rounded-full ring-2 ring-slate-800 cursor-pointer"
        onClick={() => setOpen(!open)}
      />

      {/* Dropdown Card */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-3 w-64 bg-slate-900 text-white rounded-2xl shadow-xl p-4 z-50"
          >
            {/* Profile Header */}
            <div className="flex flex-col items-center border-b border-slate-700 pb-3">
              <img
                src={avatar}
                alt={name}
                className="w-16 h-16 rounded-full ring-2 ring-sky-500"
              />
              <h3 className="mt-2 text-[14px] font-bold">{name}</h3>
              <p className="text-slate-400 text-[11px]">@{username}</p>
            </div>

            {/* Menu Items */}
            <ul className="mt-3 space-y-2">
              <li
                className="flex items-center gap-4 p-2 hover:bg-slate-800 rounded-lg cursor-pointer text-[12px]"
                onClick={() => {
                  navigate("/profile");
                  setOpen(false);
                }}
              >
                <FaUser /> My Profile
              </li>
              <li className="flex items-center gap-4 p-2 hover:bg-slate-800 rounded-lg cursor-pointer text-[12px]">
                <FaEdit /> Edit Profile
              </li>
              <li className="flex items-center gap-4 p-2 hover:bg-slate-800 rounded-lg cursor-pointer text-[12px]">
                <FaEnvelope /> Inbox
              </li>
              <li className="flex items-center gap-4 p-2 hover:bg-slate-800 rounded-lg cursor-pointer text-[12px]">
                <FaCog /> Settings
              </li>
              <li className="flex items-center gap-4 p-2 hover:bg-slate-800 rounded-lg cursor-pointer text-[12px]">
                <FaQuestionCircle /> Help
              </li>
              <li className="flex items-center gap-4 p-2 text-red-400 hover:bg-slate-800 rounded-lg cursor-pointer text-[12px]">
                <FaSignOutAlt /> Logout
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProfileDropdown;
