import React from "react";
import { Bell, Settings } from "lucide-react";
import CreatorProfileDropDown from "../CreatorProfileDropDown";


import {
  BarChart,
Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import Travel_Icon from "../pages/images/TravelIcon.svg"





const data = [
    { name: "12 Mar", value: 1500 },
    { name: "17 Mar", value: 1000 },
    { name: "21 Apr", value: 1800 },
    { name: "11 May", value: 1200 },
    { name: "17 Jun", value: 1600 },
    { name: "31 Aug", value: 1400 },
    { name: "21 Sep", value: 1700 },
    { name: "11 Oct", value: 1100 },
];

export default function CreatorDashboard() {

  
    return (
    <div className="bg-[#0d1117] text-white min-h-screen p-6">

    <div className="w-full flex items-center justify-between bg-[#111827] px-6 py-4 border-b border-gray-800">
      {/* Left Side - Title */}
     
    <img src={Travel_Icon} alt="icon"  />

      {/* Right Side - Buttons + Icons */}
      <div className="flex items-center space-x-6">
        {/* Buttons */}
        <button className="px-4 py-2 bg-[#1f2937] text-gray-300 rounded-lg hover:bg-[#2d3748] hover:text-white transition-colors">
          My Content
        </button>
        <button className="px-4 py-2 bg-[#1f2937] text-gray-300 rounded-lg hover:bg-[#2d3748] hover:text-white transition-colors">
          Analytics
        </button>

        {/* Icons */}
        <button>
          <Settings className="w-6 h-6 text-gray-300 hover:text-white transition-colors" />
        </button>

 <button className="relative">
          <Bell className="w-6 h-6 text-gray-300 hover:text-white transition-colors" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full"></span>
        </button>
 {/* <img
      src="https://picsum.photos/24"  // 👈 icon ke barabar size
      alt="icon"
      className="w-6 h-6 rounded-full cursor-pointer relative"
    />
 */}

<div className="p-4 flex justify-end relative">
      {/* Avatar Dropdown */}
      <CreatorProfileDropDown
      
             avatar="https://i.pravatar.cc/150?img=5"
         name="Cameron Williamson"
         username="cameronwills" 
      />
    </div>






      </div>
    </div>
  



      {/* Navbar */}
      <div className="flex items-center justify-between bg-[#161b22] p-4 rounded-xl mb-6">
        <div className="flex items-center gap-3">
         
          <div>
            <h2 className="font-semibold text-lg">Welcome back, Alex</h2>
            <p className="text-sm text-gray-400">
              Check the latest updates on your content
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <input
            type="date"
            className="bg-[#0d1117] border border-gray-600 rounded-md px-3 py-1 text-sm"
          />
          <button className="bg-[#1f6feb] px-4 py-1 rounded-md">Export</button>
          {/* <Link to="/fileuploadcard"> 
          <button className="bg-blue-600 px-4 py-1 rounded-md">Upload</button>
        </Link> */}

<button

  className="px-4 py-2 flex items-center gap-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition cursor-pointer"
>
  Upload
</button>


        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {[
          {
            title: "Pending Approval",
            value: "35,834.22",
            change: "+20.5%",
            color: "text-green-400",
          },
          {
            title: "Approved Content",
            value: "25,834.22",
            change: "+21.0%",
            color: "text-green-400",
          },
          {
            title: "Rejected Content",
            value: "15,834.22",
            change: "-10.7%",
            color: "text-red-400",
          },
          {
            title: "Total Content",
            value: "15,834.22",
            change: "-16.0%",
            color: "text-red-400",
          },
        ].map((card, i) => (
          <div key={i} className="bg-[#161b22] rounded-xl p-4">
            <h3 className="text-gray-400 text-sm">{card.title}</h3>
            <p className="text-2xl font-bold">{card.value}</p>
            <p className={`${card.color} text-sm`}>{card.change}</p>
          </div>
        ))}
      </div>

      {/* Metrics Snapshot */}
      <div className="bg-[#161b22] rounded-xl p-4 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold">Metrics Snapshot</h3>
          <div className="flex gap-3 text-sm">
            <button className="px-3 py-1 bg-[#0d1117] rounded-md">Daily</button>
            <button className="px-3 py-1 bg-[#0d1117] rounded-md">
              Weekly
            </button>
            <button className="px-3 py-1 bg-[#0d1117] rounded-md">
              See Details
            </button>
          </div>
        </div>


         <ResponsiveContainer width="100%" height={250}>
          <BarChart data={data}>
            <CartesianGrid vertical stroke="#006400" strokeDasharray="3 3" />
            <XAxis dataKey="name" stroke="#888" />
            <YAxis stroke="#888" />
            <Tooltip
              contentStyle={{ backgroundColor: "#161b22", border: "none" }}
              labelStyle={{ color: "white" }}
            />
            <Bar dataKey="value" fill="url(#colorGreen)" radius={[6, 6, 0, 0]} />
            <defs>
              <linearGradient id="colorGreen" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#74C365" stopOpacity={0.5} />
                <stop offset="95%" stopColor="#74C36500" stopOpacity={0.5} />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer> 
      </div>

    
<div className="bg-[#111827] p-4 rounded-xl mt-4">
  <h2 className="text-white text-lg mb-4">Recent Uploads</h2>

  <div className="space-y-3">
    {[
      { title: "Sunset Bali", status: "Approved", date: "August/24" },
      { title: "Mountain Hike", status: "Approved", date: "August/26" },
      { title: "City Lights", status: "Approved", date: "August/28" },
    ].map((item, idx) => (
      <div
        key={idx}
        className="grid grid-cols-5 items-center bg-[#1e2533] p-3 rounded-lg text-gray-300"
      >
        {/* Image + Title */}
        <div className="flex items-center space-x-3">
          <img
            src="https://via.placeholder.com/40"
            alt="thumb"
            className="w-10 h-10 rounded-md"
          />
          <span className="font-medium text-white">{item.title}</span>
        </div>

        {/* Status */}
        <div className="text-[#667085]">{item.status}</div>

        {/* Date */}
        <div className="text-[#667085]"> {item.date}</div>

        {/* View */}
        <div className="text-[#667085] cursor-pointer hover:underline text-center">
          View
        </div>

        {/* Edit */}
        <div className="text-[#667085] cursor-pointer hover:underline text-center">
          Edit
        </div>
      </div>
    ))}
  </div>
</div>    


</div>


  );
}
