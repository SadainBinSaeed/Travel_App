import React, { useMemo, useState, useEffect, useRef } from "react";
import ProfileDropdown from "../ProfileDropdown";
import {
  Search, Bell, Settings, ChevronDown, MoreHorizontal, ThumbsUp,
  Image as ImageIcon, Hash, Users, Wallet, Home, Mail, Grid, Bookmark, User, Shield, Crown, CheckCircle2, Circle
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Travel_icon from "../../assets/images/TravelIcon.svg";

// ---- Utility ----
const avatar = (id) => `https://i.pravatar.cc/100?img=${id}`;
const img = (w=600,h=360,seed=1) => `https://picsum.photos/seed/${seed}/${w}/${h}`;

// ---- Small UI bits ----
const Badge = ({ children }) => (
  <span className="inline-flex items-center gap-1 rounded-full bg-sky-500/10 text-sky-400 px-2 py-0.5 text-[10px] font-semibold">
    {children}
  </span>
);

const StoryCircle = ({ src, name, active }) => (
  <div className="flex flex-col items-center gap-2">
    <div className={`relative h-14 w-14 rounded-full p-[2px] ${active ? 'bg-gradient-to-tr from-sky-500 to-indigo-500' : 'bg-slate-700'}`}>
      <img src={src} alt={name} className="h-full w-full rounded-full object-cover" />
      {active && <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-emerald-500 ring-2 ring-slate-900"/>}
    </div>
    <p className="text-[10px] text-slate-300 truncate w-16 text-center">{name}</p>
  </div>
);


// const StoryCircle = ({ stories, avatar }) => {
//   const scrollRef = useRef(null);
//   let isDown = false;
//   let startX;
//   let scrollLeft;

//   const handleMouseDown = (e) => {
//     isDown = true;
//     startX = e.pageX - scrollRef.current.offsetLeft;
//     scrollLeft = scrollRef.current.scrollLeft;
//   };

//   const handleMouseLeave = () => {
//     isDown = false;
//   };

//   const handleMouseUp = () => {
//     isDown = false;
//   };

//   const handleMouseMove = (e) => {
//     if (!isDown) return;
//     e.preventDefault();
//     const x = e.pageX - scrollRef.current.offsetLeft;
//     const walk = (x - startX) * 2; // speed multiplier
//     scrollRef.current.scrollLeft = scrollLeft - walk;
//   };



const SideLink = ({ icon: Icon, label, active=false }) => (
  <button className={`group w-full flex items-center gap-3 rounded-xl px-3 py-2 text-sm ${active ? 'bg-slate-800 text-slate-100' : 'text-slate-300 hover:bg-slate-800/70'} transition`}> 
    <Icon size={16} className="shrink-0 opacity-80"/>
    <span className="truncate">{label}</span>
  </button>
);

const Stat = ({ label, value }) => (
  <div className="flex flex-col items-center justify-center rounded-xl bg-slate-800 px-3 py-2">
    <p className="text-slate-300 text-[10px]">{label}</p>
    <p className="text-slate-100 text-sm font-semibold">{value}</p>
  </div>
);

const GroupItem = ({ name, handle, imgId }) => (
  <div className="flex items-center justify-between rounded-xl bg-slate-800 px-3 py-2">
    <div className="flex items-center gap-3">
      <img src={avatar(imgId)} alt={name} className="h-8 w-8 rounded-full"/>
      <div>
        <p className="text-slate-100 text-sm font-medium">{name}</p>
        <p className="text-slate-400 text-[11px]">@{handle}</p>
      </div>
    </div>
  </div>
);

const OnlineItem = ({ name, status='Online', imgId }) => (
  <div className="flex items-center justify-between rounded-xl bg-slate-800 px-3 py-2">
    <div className="flex items-center gap-3">
      <div className="relative">
        <img src={avatar(imgId)} alt={name} className="h-8 w-8 rounded-full"/>
        <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-emerald-500 ring-2 ring-slate-900"/>
      </div>
      <div>
        <p className="text-slate-100 text-sm font-medium">{name}</p>
        <p className="text-slate-400 text-[11px]">{status}</p>
      </div>
    </div>
    <Circle size={10} className="text-emerald-500"/>
  </div>
);

const ActionButton = ({ icon: Icon, label }) => (
  <button className="flex items-center gap-2 rounded-xl bg-slate-800 px-3 py-2 text-slate-300 hover:bg-slate-700 transition">
    <Icon size={16}/>
    <span className="text-xs">{label}</span>
  </button>
);

const ReactionBar = () => (
  <div className="flex items-center gap-3 text-slate-300">
    <button className="inline-flex items-center gap-1 rounded-lg px-2 py-1 hover:bg-slate-700"><ThumbsUp size={16}/> 400</button>
    <button className="inline-flex items-center gap-1 rounded-lg px-2 py-1 hover:bg-slate-700"><MoreHorizontal size={16}/> 14</button>
    <button className="inline-flex items-center gap-1 rounded-lg px-2 py-1 hover:bg-slate-700"><MoreHorizontal size={16}/> 44</button>
  </div>
);

// ---- Cards ----
const ProfileCard = () => (
  <div className="rounded-2xl bg-slate-900/60 backdrop-blur border border-slate-800 p-4">
    <div className="flex items-center gap-3">
      <img src={avatar(7)} className="h-11 w-11 rounded-full" alt="Cameron"/>
      <div className="min-w-0">
        <div className="flex items-center gap-1">
          <p className="text-slate-100 font-semibold truncate">Cameron Williamson</p>
          <CheckCircle2 size={14} className="text-sky-400"/>
        </div>
        <p className="text-slate-400 text-[12px]">@cameronwills</p>
      </div>
    </div>
    <div className="grid grid-cols-3 gap-2 mt-3">
      <Stat label="My Comments" value="2.3k"/>
      <Stat label="Landscape" value="6.3k"/>
      <Stat label="Post" value="80"/>
    </div>
  </div>
);

const Composer = () => (
  <div className="rounded-2xl bg-slate-900/60 backdrop-blur border border-slate-800 p-4">
    <div className="flex items-center gap-3">
      <img src={avatar(10)} className="h-9 w-9 rounded-full" alt="me"/>
      <input className="flex-1 rounded-xl bg-slate-800/70 px-3 py-2 text-sm text-slate-200 placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-sky-600" placeholder="What's on your mind?"/>
      <button className="rounded-xl bg-sky-600 hover:bg-sky-500 px-3 py-2 text-xs font-semibold cursor-pointer">Share Post</button>
    </div>
    <div className="mt-3 flex flex-wrap items-center gap-2 text-slate-300 text-xs">
      <ActionButton icon={ImageIcon} label="Photo" />
      <ActionButton icon={Hash} label="Topic"/>
      <ActionButton icon={Users} label="Tag Friends"/>
      <ActionButton icon={Shield} label="Privacy"/>
    </div>
  </div>
);

const FeedCard = () => (
  <div className="rounded-2xl bg-slate-900/60 backdrop-blur border border-slate-800 overflow-hidden">
    <div className="p-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img src={avatar(14)} className="h-9 w-9 rounded-full" alt="Angelina"/>
        <div>
          <p className="text-slate-100 text-sm font-semibold">Angelina</p>
          <p className="text-slate-400 text-[11px]">2 minutes ago</p>
        </div>
      </div>
      <MoreHorizontal size={18} className="text-slate-500"/>
    </div>
    <div className="grid grid-cols-2 gap-2 px-4">
      <img src={img(640,360,1)} className="h-44 w-full rounded-xl object-cover" alt="feed-1"/>
      <img src={img(640,360,2)} className="h-44 w-full rounded-xl object-cover" alt="feed-2"/>
    </div>
    <div className="p-4 space-y-3">
      <p className="text-slate-300 text-sm leading-relaxed">
        Hi Designers, checkout this article. Learn more about the basics of UI Design; it's essential—practice will grow you.
      </p>
      <ReactionBar/>
    </div>
  </div>
);

// ---- Notification Item (popup list rows) ----
const NotificationItem = ({ name, time, imgId }) => (
  <div className="flex items-center justify-between rounded-xl bg-slate-800 px-3 py-2">
    <div className="flex items-center gap-3">
      <img src={avatar(imgId)} alt={name} className="h-10 w-10 rounded-full"/>
      <div>
        <p className="text-slate-100 text-sm font-medium">{name}</p>
        <p className="text-slate-400 text-[11px]">{time}</p>
      </div>
    </div>
    <div className="flex gap-2">
      <button className="px-3 py-1 rounded-lg bg-sky-600 text-xs font-semibold hover:bg-sky-500 cursor-pointer">Confirm</button>
      <button className="px-3 py-1 rounded-lg bg-slate-700 text-xs font-semibold hover:bg-slate-600 cursor-pointer">Delete</button>
    </div>
  </div>
);

// ---- Main Component ----
export default function SocialDashboard() {
  // stories & groups from your original
  const stories = useMemo(() => [
    { id: 2, name: 'Leslie' },{ id: 3, name: 'Robert' },{ id: 4, name: 'Jenny' },{ id: 5, name: 'Cameron' },{ id: 6, name: 'Esther' },{ id: 7, name: 'Floyd' },{ id: 8, name: 'Wade' },{ id: 9, name: 'Theresa' },{ id: 11, name: 'Jacob' },{ id: 12, name: 'Darlene' }
  ], []);

  const groups = [
    { name: "Esther Howard", handle: "estherhowrd", imgId: 15 },
    { name: "Floyd Miles", handle: "floyd_miles", imgId: 16 },
    { name: "Wade Warren", handle: "wadewarren", imgId: 17 },
    { name: "Robert Fox", handle: "robertfox", imgId: 18 },
    { name: "Jacob Jones", handle: "jacobjones", imgId: 19 },
    { name: "Jenny Wilson", handle: "jennywilson", imgId: 20 },
  ];

  const [showGroups, setShowGroups] = useState(false);

  // Notification popup state
  const [openNotif, setOpenNotif] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const notifRef = useRef(null);

  const notifications = [
    { name: "Jacob Jones", time: "5 min ago", imgId: 21 },
    { name: "Esther Howard", time: "10 min ago", imgId: 22 },
    { name: "Robert Fox", time: "20 min ago", imgId: 23 },
    { name: "Jenny Wilson", time: "30 min ago", imgId: 24 },
    { name: "Floyd Miles", time: "1 hr ago", imgId: 25 },
    { name: "Theresa Webb", time: "2 hr ago", imgId: 26 },
  ];

  // Close on click outside
  useEffect(() => {
    function handleClickOutside(e){
      if(openNotif && notifRef.current && !notifRef.current.contains(e.target)){
        setOpenNotif(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [openNotif]);

  return (
    <div className="min-h-screen bg-[#0b1220] text-slate-100">
      {/* Top Nav */}
      <header className="sticky top-0 z-40 border-b border-slate-800/60 bg-[#0b1220]/80 backdrop-blur">
        <div className="Max-w-7xl w-[100%] px-4">
          <div className="flex h-14 items-center justify-between gap-4">
            <div className="h-10 w-10 rounded-full grid place-items-center font-black"><img src={Travel_icon} alt="travelicon"  /></div>
            <div className="flex-1 max-w-xl">
              <div className="relative">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"/>
                <input className="w-full rounded-full bg-slate-800/80 px-9 py-2 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-600" placeholder="Search location"/>
              </div>
            </div>

            <div className="flex items-center gap-2 relative" ref={notifRef}>
              {/* 🔔 Notification Button */}
              <button
                onClick={() => setOpenNotif((v)=>!v)}
                className="rounded-xl bg-slate-800 p-2 relative ring-1 ring-transparent focus:ring-sky-700/50 outline-none"
              >
                <Bell size={16} className="cursor-pointer"/>
                <span className="absolute -top-1 -right-1 h-4 w-4 text-[10px] flex items-center justify-center rounded-full bg-red-500 text-white">6</span>
              </button>

              {/* ⚡ Notification Popup (smooth, not jhatka) */}
              <AnimatePresence>
                {openNotif && (
                  <motion.div
                    key="notif"
                    initial={{ opacity: 0, y: -8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.98 }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                    className="absolute right-0 top-12 w-80 rounded-2xl bg-slate-900/95 backdrop-blur border border-slate-800 shadow-xl p-4 space-y-4 z-50"
                  >
                    <div>
                      <h3 className="text-slate-100 font-semibold text-sm">you have new friend suggestions</h3>
                      <p className="text-slate-400 text-xs">{notifications.length} new requests • Updated just now</p>
                    </div>

                    <div className="space-y-3">
                      {(showAll ? notifications : notifications.slice(0,2)).map((n,i) => (
                        <NotificationItem key={i} {...n}/>
                      ))}
                    </div>

                    <button
                      onClick={() => setShowAll((v)=>!v)}
                      className="w-full text-center text-xs text-sky-400 hover:underline cursor-pointer"
                    >
                      {showAll ? "Hide notifications" : "View all notifications"}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              <button className="rounded-xl bg-slate-800 p-2  cursor-pointer"><Settings size={16}/></button>




  <div className="p-4 flex justify-end">
      {/* Avatar Dropdown */}
      <ProfileDropdown
       avatar="https://i.pravatar.cc/150?img=5"
         name="Cameron Williamson"
         username="cameronwills" 
      />
    </div>


            </div>
          </div>
        </div>
      </header>

      <main className="Max-w-7xl w-[100%] px-4 py-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Sidebar */}
        <aside className="lg:col-span-3 space-y-4">
          <ProfileCard/>
          <div className="rounded-2xl bg-slate-900/60 backdrop-blur border border-slate-800 overflow-hidden">
            <div className="px-4 py-3 border-b border-slate-800 text-slate-300 font-medium flex items-center gap-2"><Grid size={16}/> Feed</div>
            <div className="p-2 space-y-1">
              <SideLink icon={Home} label="Feed" active className="cursor-pointer"/>
              <SideLink icon={Bell} label="Notifications" className="cursor-pointer"/>
              <SideLink icon={Mail} label="Messages" className="cursor-pointer"/>
              <SideLink icon={Users} label="Members" className="cursor-pointer"/>
              <SideLink icon={Bookmark} label="Collections" className="cursor-pointer"/>
              <SideLink icon={Crown} label="Subscriptions" className="cursor-pointer"/>
              <SideLink icon={Wallet} label="Add Wallet" className="cursor-pointer"/>
              <SideLink icon={User} label="My profile" className="cursor-pointer"/>
              <SideLink icon={Settings} label="More" className="cursor-pointer"/>
            </div>
          </div>
        </aside>

        {/* Center Feed (your original structure) */}
        <section className="lg:col-span-6 space-y-4">
          <div className="rounded-2xl bg-slate-900/60 backdrop-blur border border-slate-800 p-4">
            <div className="flex items-center gap-3 overflow-x-auto no-scrollbar">
              {stories.map((s, idx) => (
                <StoryCircle key={s.id} src={avatar(s.id)} name={s.name} active={idx%3===0}/>
              ))}
            </div>




       
          </div>
          <Composer/>
          <FeedCard/>
        </section>

        {/* Right Sidebar */}
        <aside className="lg:col-span-3 space-y-4">
          <div className="rounded-2xl bg-slate-900/60 backdrop-blur border border-slate-800 overflow-hidden">
            <div className="px-4 py-3 border-b border-slate-800 flex items-center justify-between">
              <p className="text-slate-300 font-medium">Groups</p>
              <button onClick={() => setShowGroups(!showGroups)} className="text-xs text-slate-400 flex items-center gap-1 cursor-pointer">Filter <ChevronDown size={14}/></button>
            </div>
            <div className="p-4 space-y-3">
              <div className="flex items-center gap-3 text-xs text-slate-400 ">
                <button className="rounded-lg bg-slate-800 px-2 py-1 text-white cursor-pointer">Newest</button>
                <button className="rounded-lg px-2 py-1 hover:bg-slate-800 cursor-pointer">Active</button>
                <button className="rounded-lg px-2 py-1 hover:bg-slate-800 cursor-pointer">Popular</button>
              </div>
              <div className="space-y-2">
                <AnimatePresence>
                  {(showGroups ? groups : groups.slice(0,4)).map((g,i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <GroupItem {...g}/>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
              <button onClick={() => setShowGroups(!showGroups)} className="w-full rounded-xl bg-slate-800 py-2 text-sm text-slate-300 cursor-pointer">{showGroups ? "Hide" : "See All"}</button>
            </div>
          </div>

          <div className="rounded-2xl bg-slate-900/60 backdrop-blur border border-slate-800 overflow-hidden">
            <div className="px-4 py-3 border-b border-slate-800 flex items-center justify-between">
              <p className="text-slate-300 font-medium">Who's Online</p>
              <div className="text-[11px] text-slate-400">Connection • <span className="text-emerald-400">●</span></div>
            </div>
            <div className="p-4 space-y-2">
              <OnlineItem name="Esther Howard" imgId={25}/>
              <OnlineItem name="Floyd Miles" imgId={26}/>
              <OnlineItem name="Wade Warren" imgId={27}/>
              <OnlineItem name="Theresa Webb" imgId={28}/>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}