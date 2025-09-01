import React from "react";
import { CheckCircle, CalendarDays, ChevronDown, Upload, Settings, Download } from "lucide-react";
import Travel_icon from "../pages/images/TravelIcon.svg"

// Utility: status pill
const StatusPill = ({ status }) => {
  const isApproved = status === "Approved";
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ring-1 ring-inset ${
        isApproved
          ? "bg-emerald-900/20 text-emerald-300 ring-emerald-700/50"
          : "bg-amber-900/20 text-amber-300 ring-amber-700/50"
      }`}
    >
      <span
        className={`h-2 w-2 rounded-full ${isApproved ? "bg-emerald-400" : "bg-amber-400"}`}
      />
      {status}
    </span>
  );
};

// Utility: tiny thumbnail placeholder
const Thumb = () => (
  <div className="h-12 w-12 shrink-0 overflow-hidden rounded-md ring-1 ring-white/10">
    <div className="h-full w-full bg-gradient-to-br from-slate-500 to-slate-800" />
  </div>
);

const uploads = Array.from({ length: 7 }).map((_, i) => ({
  id: i + 1,
  title: "Sunset Bali",
  status: i % 2 === 0 ? "Approved" : "Pending",
  date: "August/24",
  images: 8,
  activity: 'Your post "Summer Vibes" was approved',
}));

export default function UploadSection() {
  return (
    <div className="min-h-screen bg-[#0b0f17] text-zinc-100 antialiased">
      {/* Top bar */}
      <header className="sticky top-0 z-30 w-full border-b border-white/10 bg-[#0b0f17]/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-600 text-xs font-bold ring-1 ring-white/20">
              <img src={Travel_icon} alt="travel-icon" />
            </div>
           
       

          </div>

          <div className="flex items-center gap-2">
           
             <nav className="hidden gap-2 sm:flex">
              <button className="rounded-md px-3 py-1.5 text-sm text-zinc-300 hover:bg-white/5">
                My Content
              </button>
              <button className="rounded-md px-3 py-1.5 text-sm text-zinc-300 hover:bg-white/5">
                Analytics
              </button>
            </nav>
              <Settings className="h-4 w-4" />
          
            <div className="ml-1 h-9 w-9 overflow-hidden rounded-full ring-1 ring-white/10">
              <div className="h-full w-full bg-gradient-to-br from-zinc-600 to-zinc-900" />
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-7xl px-4 pb-20 pt-8">
        <div className="mb-8 flex justify-between">
        <div>
            <h1 className="text-xl font-semibold text-zinc-100">Welcome back, Alex</h1>
          <p className="mt-1 text-sm text-zinc-400">Ready to inspire your audience?</p>
        </div>

<div>
        <button className="inline-flex items-center gap-2 rounded-md border border-white/10 px-3 py-1.5 text-sm text-zinc-200 hover:bg-white/5">
              <CalendarDays className="h-4 w-4" />
              <span>Nov 12, 2024</span>
              <ChevronDown className="h-4 w-4" />
            </button>
            <button className="inline-flex items-center gap-2 rounded-md border border-white/10 px-3 py-1.5 text-sm text-zinc-200 hover:bg-white/5">
              <Download className="h-4 w-4" />
              Export
            </button>
            <button className="inline-flex items-center gap-2 rounded-md bg-sky-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-sky-500">
              <Upload className="h-4 w-4" />
              Upload
            </button>
      
</div>
</div>

        <div className="overflow-hidden rounded-xl border border-white/10 bg-black/40 shadow-2xl shadow-black/40">
          {/* Table header */}
          <div className="grid grid-cols-12 items-center gap-4 border-b border-white/10 px-4 py-3 text-xs uppercase tracking-wider text-zinc-400">
            <div className="col-span-4 sm:col-span-4">Your Uploads</div>
            <div className="hidden sm:block sm:col-span-2">Status</div>
            <div className="hidden sm:block sm:col-span-1">Date</div>
            <div className="hidden sm:block sm:col-span-2">Content Breakdown</div>
            <div className="hidden md:block md:col-span-2">Latest Activity</div>
            <div className="col-span-2 text-right sm:col-span-1">Action</div>
          </div>

          {/* Rows */}
          <ul className="divide-y divide-white/10">
            {uploads.map((u) => (
              <li
                key={u.id}
                className="grid grid-cols-12 items-center gap-4 px-4 py-4"
              >
                {/* Title + thumb */}
                <div className="col-span-8 flex items-center gap-3 sm:col-span-4">
                  <Thumb />
                  <div>
                    <p className="text-sm font-medium text-zinc-100">{u.title}</p>
                    <p className="mt-0.5 text-xs text-zinc-400">—</p>
                  </div>
                </div>

                {/* Status */}
                <div className="hidden sm:block sm:col-span-2">
                  <StatusPill status={u.status} />
                </div>

                {/* Date */}
                <div className="hidden sm:block sm:col-span-1 text-sm text-zinc-300">
                  {u.date}
                </div>

                {/* Breakdown */}
                <div className="hidden sm:block sm:col-span-2 text-sm text-zinc-300">
                  Images: {u.images}
                </div>

                {/* Latest Activity */}
                <div className="hidden md:flex md:col-span-2 md:items-center md:gap-2 text-sm text-zinc-300">
                  <CheckCircle className="h-4 w-4 text-emerald-400" />
                  <span className="truncate">{u.activity}</span>
                </div>

                {/* Actions */}
                <div className="col-span-4 flex items-center justify-end gap-4 sm:col-span-1">
                  <button className="text-sm text-sky-300 hover:underline">View</button>
                  <button className="text-sm text-sky-300 hover:underline">Edit</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
