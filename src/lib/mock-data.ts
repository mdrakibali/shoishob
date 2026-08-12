import { GameData, MemoryData, SubmissionData } from "@/types"

export const MOCK_MEMORIES: MemoryData[] = [
  {
    id: "1",
    slug: "bikel-holei-mathe",
    title: "বিকেল হলেই আমরা মাঠে চলে যেতাম",
    excerpt: "স্কুল ছুটি হলেই ব্যাগটা কোনোমতে ঘরে রেখেই দৌড় দিতাম মাঠে...",
    year: "২০০৩",
    district: "গাজীপুর",
    type: "নিজের স্মৃতি",
    source: "নিজের স্মৃতি",
    imageUrl: "/assets/memory_placeholder.png"
  },
  {
    id: "2",
    slug: "load-shedding-er-raat",
    title: "বিদ্যুৎ চলে গেলে সবাই বাইরে বের হতাম",
    excerpt: "তখন তো এত আইপিএস ছিল না। কারেন্ট গেলেই পাড়ার সব ছেলেপুলে রাস্তায়...",
    year: "১৯৯৮",
    district: "ঢাকা",
    type: "শৈশবের স্মৃতি",
    source: "বড় ভাইয়ের কাছে শোনা",
    imageUrl: "/assets/memory_placeholder.png"
  },
  {
    id: "3",
    slug: "school-er-shei-jhalmuri",
    title: "স্কুল গেটের সেই ঝালমুড়ি আর আচার",
    excerpt: "দুই টাকায় এক ঠোঙা ঝালমুড়ি পাওয়া যেত। স্কুলের টিফিনের টাকা জমিয়ে...",
    year: "২০০৫",
    district: "সিলেট",
    type: "একটি জায়গা",
    source: "নিজের স্মৃতি",
    imageUrl: "/assets/memory_placeholder.png"
  },
  {
    id: "4",
    slug: "eid-er-salam",
    title: "ঈদের দিন সালামি জমানো",
    excerpt: "ঈদের দিন সকালে নতুন জামা পরে সবার আগে বের হতাম সালামি জোগাড় করতে...",
    year: "২০০৮",
    district: "চট্টগ্রাম",
    type: "শৈশবের স্মৃতি",
    source: "নিজের স্মৃতি",
    imageUrl: "/assets/memory_placeholder.png"
  },
  {
    id: "5",
    slug: "bristi-te-veja",
    title: "প্রথম বৃষ্টিতে ফুটবল খেলা",
    excerpt: "বৈশাখ মাসের প্রথম বৃষ্টি মানেই পাড়ার সবাই মিলে কাদা মেখে ফুটবল খেলা...",
    year: "২০০১",
    district: "রাজশাহী",
    type: "নিজের স্মৃতি",
    source: "বন্ধুর কাছে শোনা",
    imageUrl: "/assets/memory_placeholder.png"
  },
  {
    id: "6",
    slug: "dada-barir-pukur",
    title: "দাদাবাড়ির সেই বিশাল পুকুর",
    excerpt: "গরমের ছুটিতে দাদাবাড়ি গেলে সারাদিন পুকুরেই কেটে যেত। কে কতক্ষণ ডুব দিয়ে...",
    year: "১৯৯৫",
    district: "বরিশাল",
    type: "একটি জায়গা",
    source: "নিজের স্মৃতি",
    imageUrl: "/assets/memory_placeholder.png"
  }
]

export const MOCK_GAMES: GameData[] = [
  {
    id: "1",
    slug: "gollachhut",
    title: "গোল্লাছুট",
    description: "দল বেঁধে খেলার এক অন্যতম মজাদার গ্রামীণ খেলা, যেখানে একজন 'রাজা' থাকে আর বাকিরা তাকে রক্ষা করে দৌড়ে নির্দিষ্ট স্থানে যাওয়ার চেষ্টা করে।",
    timePeriod: "1990s–2000s",
    players: "6–12 জন",
    imageUrl: "/assets/game_placeholder.png"
  },
  {
    id: "2",
    slug: "dariabandha",
    title: "দাঁড়িয়াবান্ধা",
    description: "মাটিতে দাগ কেটে ঘর তৈরি করে দুই দলের মধ্যে খেলা হয়। একদল ঘর পার হতে চায় আর অন্যদল তাদের ছোঁয়ার চেষ্টা করে।",
    timePeriod: "1990s–2000s",
    players: "8–10 জন",
    imageUrl: "/assets/game_placeholder.png"
  },
  {
    id: "3",
    slug: "danguli",
    title: "ডাংগুলি",
    description: "ছোট একটি লাঠি (গুলি) কে বড় লাঠি (ডাং) দিয়ে আঘাত করে দূরে ছুঁড়ে মারার খেলা। ক্রিকেটের আদি রূপ বলা যেতে পারে।",
    timePeriod: "1980s–2000s",
    players: "2–6 জন",
    imageUrl: "/assets/game_placeholder.png"
  },
  {
    id: "4",
    slug: "marble",
    title: "মার্বেল",
    description: "কাঁচের ছোট ছোট গোলক দিয়ে খেলা। একটি মার্বেল দিয়ে অন্য মার্বেলকে আঘাত করাই মূল লক্ষ্য।",
    timePeriod: "1990s–2010s",
    players: "2–4 জন",
    imageUrl: "/assets/game_placeholder.png"
  },
  {
    id: "5",
    slug: "latim",
    title: "লাটিম",
    description: "কাঠের তৈরি লাটিমে সুতো পেঁচিয়ে মাটিতে ছুঁড়ে ঘুরানোর একটি দারুণ আকর্ষণীয় খেলা।",
    timePeriod: "1980s–2010s",
    players: "1–5 জন",
    imageUrl: "/assets/game_placeholder.png"
  },
  {
    id: "6",
    slug: "bouchi",
    title: "বউচি",
    description: "একজন 'বউ' থাকে যাকে নির্দিষ্ট একটি ঘর থেকে আরেক ঘরে নিরাপদে পৌঁছে দেওয়ার খেলা।",
    timePeriod: "1990s–2000s",
    players: "8–12 জন",
    imageUrl: "/assets/game_placeholder.png"
  }
]

export const MOCK_SUBMISSIONS: SubmissionData[] = [
  { id: "1", title: "মাঠের কোণে গোল্লাছুট", type: "খেলা", year: "2005", district: "ঢাকা", submitter: "rakib@example.com", status: "Pending", created: "2 hours ago" },
  { id: "2", title: "বৃষ্টির দিনে ফুটবল", type: "শৈশবের স্মৃতি", year: "1998", district: "বরিশাল", submitter: "user22@example.com", status: "Pending", created: "5 hours ago" },
  { id: "3", title: "স্কুলের পেছনের পুকুর", type: "একটি জায়গা", year: "2010", district: "সিলেট", submitter: "anon@example.com", status: "Approved", created: "1 day ago" },
  { id: "4", title: "মার্বেল খেলার নিয়ম", type: "খেলা", year: "1995", district: "রাজশাহী", submitter: "test@example.com", status: "Rejected", created: "2 days ago" },
]
