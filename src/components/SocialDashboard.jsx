import React, { useMemo, useState } from "react";
import { 
  Search, Bell, Settings, ChevronDown, MoreHorizontal, Heart, MessageCircle, Share2, ThumbsUp, 
  Image, Hash, Users, Wallet, Home, Mail, Grid, Bookmark, User, Shield, Crown, CheckCircle2, Circle 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Travel_icon from "../assets/images/TravelIcon.svg"

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
    <button className="inline-flex items-center gap-1 rounded-lg px-2 py-1 hover:bg-slate-700"><MessageCircle size={16}/> 14</button>
    <button className="inline-flex items-center gap-1 rounded-lg px-2 py-1 hover:bg-slate-700"><Share2 size={16}/> 44</button>
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
      <button className="rounded-xl bg-sky-600 hover:bg-sky-500 px-3 py-2 text-xs font-semibold">Share Post</button>
    </div>
    <div className="mt-3 flex flex-wrap items-center gap-2 text-slate-300 text-xs">
      <ActionButton icon={Image} label="Photo"/>
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
        <img src={avatar(14)} className="h-9 w-9 rounded-full"/>
        <div>
          <p className="text-slate-100 text-sm font-semibold">Angelina</p>
          <p className="text-slate-400 text-[11px]">2 minutes ago</p>
        </div>
      </div>
      <MoreHorizontal size={18} className="text-slate-500"/>
    </div>
    <div className="grid grid-cols-2 gap-2 px-4">
      <img src={img(640,360,1)} className="h-44 w-full rounded-xl object-cover"/>
      <img src={img(640,360,2)} className="h-44 w-full rounded-xl object-cover"/>
    </div>
    <div className="p-4 space-y-3">
      <p className="text-slate-300 text-sm leading-relaxed">
        Hi Designers, checkout this article. Learn more about the basics of UI Design; it's essential—practice will grow you.
      </p>
      <ReactionBar/>
    </div>
  </div>
);

// ---- Main Component ----
export default function SocialDashboard() {
  const stories = useMemo(() => [
    { id: 2, name: 'Leslie' },{ id: 3, name: 'Robert' },{ id: 4, name: 'Jenny' },{ id: 5, name: 'Cameron' },{ id: 6, name: 'Esther' },{ id: 7, name: 'Floyd' },{ id: 8, name: 'Wade' },{ id: 9, name: 'Theresa' },{ id: 11, name: 'Jacob' },{ id: 12, name: 'Darlene' }
  ], []);

  const [showGroups, setShowGroups] = useState(false);

  const groups = [
    { name: "Esther Howard", handle: "estherhowrd", imgId: 15 },
    { name: "Floyd Miles", handle: "floyd_miles", imgId: 16 },
    { name: "Wade Warren", handle: "wadewarren", imgId: 17 },
    { name: "Robert Fox", handle: "robertfox", imgId: 18 },
    { name: "Jacob Jones", handle: "jacobjones", imgId: 19 },
    { name: "Jenny Wilson", handle: "jennywilson", imgId: 20 },
  ];

  return (
    <div className="min-h-screen bg-[#0b1220] text-slate-100">
      {/* Top Nav */}
      <header className="sticky top-0 z-40 border-b border-slate-800/60 bg-[#0b1220]/80 backdrop-blur">
        <div className="mx-auto max-w-[1200px] px-4">
          <div className="flex h-14 items-center justify-between gap-4">
            
              <div className="h-10 w-10 rounded-full grid place-items-center font-black"><img src={Travel_icon} alt="travelicon"  /></div>
            
            <div className="flex-1 max-w-xl">
              <div className="relative">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"/>
                <input className="w-full rounded-full bg-slate-800/80 px-9 py-2 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-600" placeholder="Search location"/>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-5 text-sm text-slate-300">
              <button className="hover:text-slate-100">News Feed</button>
              <button className="hover:text-slate-100">Explore</button>
              <button className="hover:text-slate-100">Saved Content</button>
            </nav>
            <div className="flex items-center gap-2">
              <button className="rounded-xl bg-slate-800 p-2"><Bell size={16}/></button>
              <button className="rounded-xl bg-slate-800 p-2"><Settings size={16}/></button>
              <img src={avatar(5)} className="h-8 w-8 rounded-full ring-2 ring-slate-800"/>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1200px] px-4 py-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Sidebar */}
        <aside className="lg:col-span-3 space-y-4">
          <ProfileCard/>
          <div className="rounded-2xl bg-slate-900/60 backdrop-blur border border-slate-800 overflow-hidden">
            <div className="px-4 py-3 border-b border-slate-800 text-slate-300 font-medium flex items-center gap-2"><Grid size={16}/> Feed</div>
            <div className="p-2 space-y-1">
              <SideLink icon={Home} label="Feed" active/>
              <SideLink icon={Bell} label="Notifications"/>
              <SideLink icon={Mail} label="Messages"/>
              <SideLink icon={Users} label="Members"/>
              <SideLink icon={Bookmark} label="Collections"/>
              <SideLink icon={Crown} label="Subscriptions"/>
              <SideLink icon={Wallet} label="Add Wallet"/>
              <SideLink icon={User} label="My profile"/>
              <SideLink icon={Settings} label="More"/>
            </div>
          </div>
        </aside>

        {/* Center Feed */}
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
              <button onClick={() => setShowGroups(!showGroups)} className="text-xs text-slate-400 flex items-center gap-1">Filter <ChevronDown size={14}/></button>
            </div>
            <div className="p-4 space-y-3">
              <div className="flex items-center gap-3 text-xs text-slate-400">
                <button className="rounded-lg bg-slate-800 px-2 py-1 text-white">Newest</button>
                <button className="rounded-lg px-2 py-1 hover:bg-slate-800">Active</button>
                <button className="rounded-lg px-2 py-1 hover:bg-slate-800">Popular</button>
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
              <button onClick={() => setShowGroups(!showGroups)} className="w-full rounded-xl bg-slate-800 py-2 text-sm text-slate-300">{showGroups ? "Hide" : "See All"}</button>
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
