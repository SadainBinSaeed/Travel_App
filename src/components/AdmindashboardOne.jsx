import React from "react";
import {
  Search,
  ChevronUp,
  ChevronDown,
  Calendar,
  Upload,
  Download,
  Check,
  X,
  MoreHorizontal,
  Settings,
  ChevronRight,
} from "lucide-react";

// ✅ StatCard
const StatCard = ({ title, value, sublabel, trend = "up" }) => {
  return (
    <div className="bg-[#111827] rounded-xl border border-white/5 p-4 shadow-inner">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs text-white/60">{title}</p>
          <p className="mt-1 text-2xl font-semibold text-white tracking-tight">
            {value}
          </p>
          <p className="mt-1 text-[10px] text-white/40">{sublabel}</p>
        </div>
        <div
          className={`flex items-center gap-1 text-[10px] px-2 py-1 rounded-md ${
            trend === "up"
              ? "bg-emerald-500/10 text-emerald-400"
              : "bg-rose-500/10 text-rose-400"
          }`}
        >
          {trend === "up" ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
          <span>{trend === "up" ? "25.0%" : "15.0%"}</span>
        </div>
      </div>
    </div>
  );
};

// ✅ SocialIcon
const SocialIcon = ({ label }) => (
  <button
    className="h-8 w-8 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-[11px] text-white/60"
    aria-label={label}
    title={label}
  >
    {label.slice(0, 1)}
  </button>
);

// ✅ ActionBtn
const ActionBtn = ({ kind = "approve", onClick }) => {
  const isApprove = kind === "approve";
  return (
    <button
      onClick={onClick}
      className={`h-9 px-3 rounded-md text-xs font-medium tracking-wide border transition-colors shadow-sm ${
        isApprove
          ? "bg-emerald-600 hover:bg-emerald-500 text-white border-emerald-500"
          : "bg-sky-700 hover:bg-sky-600 text-white border-sky-600"
      }`}
    >
      <span className="inline-flex items-center gap-1">
        {isApprove ? <Check size={14} /> : <X size={14} />}
        {isApprove ? "Approve" : "Deny"}
      </span>
    </button>
  );
};

// ✅ CreatorCard
const CreatorCard = ({ idx }) => (
  <div className="bg-[#111827] rounded-xl border border-white/5 shadow-inner p-4 flex flex-col gap-3">
    <div className="flex items-start gap-3">
      <div className="h-9 w-9 rounded-full bg-white/10 ring-1 ring-white/10 overflow-hidden" />
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-white/90 leading-tight">
          Creator Name
        </p>
        <p className="text-[11px] text-white/50 truncate">
          john@demo{idx}.com
        </p>
      </div>
      <button className="h-8 w-8 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center">
        <MoreHorizontal size={16} className="text-white/60" />
      </button>
    </div>

    <div className="text-[11px] text-white/45 space-y-1">
      <p>
        <span className="text-white/60">Application Date:</span> Aug 23, 2025
      </p>
      <div>
        <span className="text-white/60">Bio</span>
        <p className="mt-0.5 text-white/45 line-clamp-2">
          Travel vlogger, lifestyle content.
        </p>
      </div>
    </div>

    <div>
      <p className="text-[11px] text-white/60 mb-2">Socials</p>
      <div className="flex items-center gap-2">
        <SocialIcon label="f" />
        <SocialIcon label="x" />
        <SocialIcon label="ig" />
      </div>
    </div>

    <div className="mt-2 flex items-center gap-2">
      <ActionBtn kind="approve" />
      <ActionBtn kind="deny" />
    </div>
  </div>
);

// ✅ TopBar
const TopBar = () => (
  <div className="w-full bg-[#0B1220] border-y border-white/5 rounded-xl">
    <div className="h-12 px-3 sm:px-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="h-7 w-7 rounded-full bg-sky-700 ring-1 ring-white/10" />
        <div className="hidden sm:flex items-center text-[12px] text-white/60">
          figma.com/proto/7p…
        </div>
      </div>

      <div className="flex-1 max-w-3xl mx-3">
        <div className="h-10 bg-[#0F172A] border border-white/5 rounded-xl flex items-center px-3 gap-2">
          <Search size={16} className="text-white/40" />
          <input
            placeholder="Search"
            className="bg-transparent outline-none text-sm text-white/80 placeholder-white/30 flex-1"
          />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button className="px-3 h-9 rounded-md text-xs bg-white/5 text-white/70 border border-white/10">
          My Content
        </button>
        <button className="px-3 h-9 rounded-md text-xs bg-white/5 text-white/70 border border-white/10">
          Analytics
        </button>
        <button className="h-9 w-9 rounded-md bg-white/5 border border-white/10 flex items-center justify-center">
          <Settings size={16} className="text-white/60" />
        </button>
        <button className="h-9 w-9 rounded-full bg-white/10 ring-1 ring-white/10" />
      </div>
    </div>
  </div>
);

// ✅ ControlsBar
const ControlsBar = () => (
  <div className="flex flex-wrap items-center gap-2 justify-end">
    <button className="h-9 px-3 rounded-md bg-white/5 text-white/70 text-xs border border-white/10 inline-flex items-center gap-2">
      <Calendar size={14} /> Nov 12, 2024
    </button>
    <button className="h-9 px-3 rounded-md bg-[#1e293b] text-white text-xs border border-white/10 inline-flex items-center gap-2">
      <Download size={14} /> Export
    </button>
    <button className="h-9 px-3 rounded-md bg-sky-700 hover:bg-sky-600 text-white text-xs border border-sky-600 inline-flex items-center gap-2">
      <Upload size={14} /> Upload
    </button>
  </div>
);

const SectionTitle = ({ children }) => (
  <p className="text-[11px] text-white/50">{children}</p>
);

const Divider = () => (
  <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-4" />
);

// ✅ Main Page
export default function AdminDashboardOne() {
  const creators = Array.from({ length: 8 });
  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <div className="max-w-[1300px] mx-auto px-3 sm:px-4 py-6">
        <TopBar />

        <div className="mt-6">
          <p className="text-white/80 text-sm">Welcome back, Alex</p>
          <SectionTitle>Ready to inspire your audience?</SectionTitle>
        </div>

        {/* Stats */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <StatCard
            title="Pending Creator Applications"
            value="35,834.22"
            sublabel="Increase of 2,456.87 in last 1 month"
            trend="up"
          />
          <StatCard
            title="Pending Content"
            value="25,834.22"
            sublabel="Increase of 23,456.21 in last 1 month"
            trend="up"
          />
          <StatCard
            title="Rejected Content"
            value="15,834.22"
            sublabel="Increase of 235 in the last 1 month"
            trend="down"
          />
          <StatCard
            title="Approved Content Today"
            value="15,834.22"
            sublabel="Increase of 265 in the last 1 month"
            trend="down"
          />
        </div>

        {/* Path + Controls */}
        <div className="mt-5 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-[11px] text-white/50">
            <button className="px-3 h-8 rounded-md bg-white/5 border border-white/10 text-white/70">
              All
            </button>
            <ChevronRight size={14} className="text-white/30" />
            <span>Moderation</span>
          </div>
          <ControlsBar />
        </div>

        <Divider />

        {/* Creator Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {creators.map((_, i) => (
            <CreatorCard key={i} idx={i + 1} />
          ))}
        </div>
      </div>
    </div>
  );
}
