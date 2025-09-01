import React, { useState } from "react";
import { FaHeart, FaComment, FaShare, FaEye, FaCheckCircle } from "react-icons/fa";
import FileUploadCard from "../FileUploadCard";
import CreatePostCard from "../CreatePostCard";
import { Link } from "react-router";

const ProfilePage = () => {
    const [open, setOpen] = useState(false);

    return (
    <div className="min-h-screen bg-slate-950 text-white flex justify-center">
      {/* Yeh container-fluid ka kaam karega */}
      <div className="w-full max-w-[1400px] px-6">
        {/* Cover Section */}
        <div className="relative w-full h-52 md:h-64 rounded-b-xl overflow-hidden">
          <img
            src="https://picsum.photos/1400/400"
            alt="Cover"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Main 3 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 -mt-16 relative z-10">
     
          {/* Left Sidebar - Profile Card */}
          <div className="md:col-span-3 bg-slate-900 rounded-xl p-5 shadow-lg h-fit">
            {/* Profile Pic */}
            <div className="flex flex-col items-center">
              <img
                src="https://picsum.photos/120"
                alt="Avatar"
                className="w-28 h-28 rounded-full ring-4 ring-slate-800"
              />
              <FaCheckCircle className="text-sky-500 text-xl -mt-6 ml-20" />
            </div>
            {/* Profile Info */}
            <div className="mt-4 text-center">
              <h2 className="text-lg font-bold">Carnegie Witsonrock</h2>
              <p className="text-slate-400 text-sm">@username</p>
              <p className="mt-2 text-slate-300 text-sm">
                Simple, decent & little sprinkle developer journey ✨
              </p>
              <button className="mt-3 px-4 py-1.5 bg-sky-500 hover:bg-sky-600 rounded-full text-sm font-semibold">
                Edit Profile
              </button>
            </div>
            {/* Extra Info */}
            <div className="mt-5 space-y-2 text-sm text-slate-400">
              <p>📍 Lahore, Pakistan</p>
              <p>📅 Joined August 2022</p>
              <p>
                👥 <span className="text-white font-semibold">120</span> Following
              </p>
              <p>
                ⭐ <span className="text-white font-semibold">450</span> Followers
              </p>
            </div>
          </div>

          {/* Center Section - Posts */}
          <div className="md:col-span-6 mt-[50px]">
            <div className="flex items-center justify-between border-b border-slate-700">
              {/* Tabs */}
              <div className="flex text-sm text-slate-400">
                <button className="py-3 px-4 border-b-2 border-sky-500 text-white font-semibold">
                  Posts
                </button>
                <button className="py-3 px-4 hover:text-white">About</button>
                <button className="py-3 px-4 hover:text-white">Media</button>
                <button className="py-3 px-4 hover:text-white">Likes</button>
              </div>
            </div>

            {/* Posts */}
            <div className="mt-6 space-y-6">
              <PostCard />
              <PostCard />
              <PostCard />
            </div>
          </div>

          {/* Right Sidebar - Buttons */}
          <div className="md:col-span-3 flex justify-between items-start  gap-3 mt-[55px]">
            {/* <button className="px-4 py-2 rounded-lg bg-sky-500 hover:bg-sky-600 text-white text-sm font-semibold shadow">
              Upload
            </button> */}
  <button
                onClick={() => setOpen(true)}
                className="px-4 py-2 rounded-lg bg-sky-500 hover:bg-sky-600 text-white text-sm font-semibold shadow cursor-pointer"
              >
                Upload
               </button>
               {open && <FileUploadCard onClose={() => setOpen(false)} />}
          <Link to="/creatorprofile/uploadsection" >
            <button className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold shadow cursor-pointer">
              Export
            </button>
          </Link>
            <select className="px-3 py-2 rounded-lg bg-slate-800 text-sm text-white shadow cursor-pointer">
              <option value="2025">2025</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};


const PostCard = () => {
  const [showCreatePost, setShowCreatePost] = useState(false);

  return (
    <div className="bg-slate-900 rounded-xl p-6 shadow-md relative">
      {/* User */}
      <div className="flex items-center gap-3">
        <img
          src="https://picsum.photos/40"
          alt="User"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <h4 className="text-sm font-semibold flex items-center gap-1">
            Carnegie Witsonrock
            <FaCheckCircle className="text-sky-500" />
          </h4>
          <p className="text-xs text-slate-400">2 mins ago</p>
        </div>
      </div>

      {/* Post Text */}
      <p className="mt-3 text-sm text-slate-200">
        This is my journey — from the trails to the stars. 🌌 Stay tuned!
      </p>

      {/* Post Images */}
      <div className="mt-3 grid grid-cols-3 gap-2 rounded-lg overflow-hidden">
        <img src="https://picsum.photos/300/200?1" className="rounded-lg" alt="" />
        <img src="https://picsum.photos/300/200?2" className="rounded-lg" alt="" />
        <img src="https://picsum.photos/300/200?3" className="rounded-lg" alt="" />
      </div>

      {/* Actions */}
      <div className="flex justify-between mt-4 text-slate-400 text-sm items-center">
        <div className="flex gap-2">
          <button className="flex items-center gap-2 hover:text-red-500">
            <FaHeart /> 122
          </button>
          <button className="flex items-center gap-2 hover:text-sky-500">
            <FaComment /> 48
          </button>
          <button className="flex items-center gap-2 hover:text-sky-500">
            <FaShare /> 10
          </button>
        </div>
        <div className="flex items-center gap-2">
          <FaEye /> 2.4k
        </div>
        <button
          className="bg-sky-500 text-white py-1 px-5 rounded-2xl font-semibold cursor-pointer"
          onClick={() => setShowCreatePost(true)}
        >
          Share Post
        </button>
      </div>

      {/* Modal */}
      {showCreatePost && <CreatePostCard onClose={() => setShowCreatePost(false)} />}
    </div>
  );
};



export default ProfilePage;