import React from "react";
import { FaTimes, FaGlobe, FaUserFriends, FaLock, FaImage, FaPaperclip, FaVideo, FaHashtag, FaAt } from "react-icons/fa";

const CreatePostCard = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Card */}
      <div className="relative bg-slate-900 text-white rounded-xl shadow-lg max-w-lg w-full p-6 z-10">
        {/* Header */}
        <div className="flex justify-between items-center border-b border-slate-700 pb-3 mb-4">
          <h2 className="text-lg font-semibold text-center">Create Post</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-white">
            <FaTimes size={20} />
          </button>
        </div>

        {/* Profile Section */}
        <div className="flex items-center gap-3 mb-4">
          <img
            src="https://picsum.photos/40"
            alt="profile"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h4 className="font-semibold text-sm">Carnegie Witsonrock</h4>
            <select className="mt-1 text-xs bg-slate-800 border border-slate-700 rounded-md px-2 py-1 focus:outline-none">
              <option className="bg-slate-900" value="public">
                🌍 Public
              </option>
              <option className="bg-slate-900" value="friends">
                👥 Friends
              </option>
              <option className="bg-slate-900" value="private">
                🔒 Only Me
              </option>
            </select>
          </div>
        </div>

        {/* Input */}
        <textarea
          className="w-full bg-transparent border-none resize-none text-sm text-slate-200 placeholder-slate-500 focus:ring-0 focus:outline-none"
          rows={2}
          placeholder="What's on your mind, Carnegie?"
        ></textarea>

        {/* Big Image */}
        <div className="mt-3 rounded-lg overflow-hidden">
          <img
            src="https://picsum.photos/600/300"
            alt="post"
            className="w-full h-52 object-cover"
          />
          <p className="text-xs text-slate-400 mt-1">📍 Lahore, Pakistan</p>
        </div>

        {/* Action Row */}
        <div className="flex items-center justify-between text-sm text-slate-400 mt-4 border-y border-slate-700 py-3">
          <button className="flex items-center gap-2 hover:text-sky-400">
            <FaImage /> Images/Video
          </button>
          <button className="flex items-center gap-2 hover:text-sky-400">
            <FaPaperclip /> Attachment
          </button>
          <button className="flex items-center gap-2 hover:text-sky-400">
            <FaVideo /> Live
          </button>
          <button className="flex items-center gap-2 hover:text-sky-400">
            <FaHashtag /> Hashtag
          </button>
          <button className="flex items-center gap-2 hover:text-sky-400">
            <FaAt /> Mention
          </button>
        </div>

        {/* Post Button */}
        <button className="w-full mt-4 py-2 bg-sky-500 text-white font-semibold rounded-lg hover:bg-sky-600 transition">
          Post
        </button>
      </div>
    </div>
  );
};

export default CreatePostCard;
