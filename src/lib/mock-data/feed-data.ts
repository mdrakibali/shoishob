// Strongly typed mock data for the 3-column social feed layout

import {
  EraTimelineItem,
  FeedFilterTabItem,
  FeedPost,
  PopularGameItem,
  PromptCategoryItem,
  WeeklyFeaturedItem,
} from "@/types"

export const PROMPT_CATEGORIES: PromptCategoryItem[] = [
  { id: "game", label: "খেলা", iconName: "game", href: "/games" },
  { id: "heart", label: "স্মৃতি", iconName: "heart", href: "/memories" },
  { id: "location", label: "জায়গা", iconName: "location", href: "/places" },
  { id: "food", label: "খাবার", iconName: "food", href: "/food" },
  { id: "more", label: "আরও", iconName: "more", href: "/memories" },
]

export const FEED_FILTER_TABS: FeedFilterTabItem[] = [
  { id: "latest", label: "সর্বশেষ" },
  { id: "popular", label: "জনপ্রিয়" },
  { id: "recent", label: "নতুন যোগ হয়েছে" },
  { id: "following", label: "ফলো করা" },
]

export const MOCK_FEED_POSTS: FeedPost[] = [
  {
    id: "post-1",
    author: {
      id: "u1",
      name: "রিফাত হাসান",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format&fit=crop&q=80",
    },
    era: "২০০০s",
    timestamp: "১৪ মিনিট আগে",
    title: "আমাদের স্কুলের বার্ষিক ক্রীড়া প্রতিযোগিতা ২০০২",
    content:
      "সেই দিনটার কথা আজও মনে আছে। আমাদের সবাই সাদা টি-শার্ট আর নীল প্যান্ট পরে মাঠে নামতাম। ১০০ মিটার দৌড়, লং জাম্প, দড়ি টানাটানি— কি আনন্দই না ছিল!",
    images: [
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1526676037777-05a232554f77?w=600&auto=format&fit=crop&q=80",
    ],
    totalImagesCount: 7,
    location: "চট্টগ্রাম",
    tags: ["স্কুল জীবন"],
    likesCount: 128,
    commentsCount: 12,
    isLiked: false,
    isSaved: false,
  },
  {
    id: "post-2",
    author: {
      id: "u2",
      name: "সায়মা আক্তার",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80",
    },
    era: "১৯৯০s",
    timestamp: "১ ঘণ্টা আগে",
    title: "ঈদের আগের সেই বাজার",
    content:
      "মা এর সাথে ঈদের বাজার করতে যাওয়ার স্মৃতিটা আলাদা ছিল। নতুন জামা, জুতা আর অনেক মজার খাবার!",
    images: [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=600&auto=format&fit=crop&q=80",
    ],
    totalImagesCount: 2,
    tags: ["ঈদ", "পারিবারিক স্মৃতি", "বাজার"],
    likesCount: 98,
    commentsCount: 8,
    isLiked: true,
    isSaved: false,
  },
  {
    id: "post-3",
    author: {
      id: "u3",
      name: "তানভীর রহমান",
      avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=120&auto=format&fit=crop&q=80",
    },
    era: "১৯৯০s",
    timestamp: "৩ ঘণ্টা আগে",
    title: "বিকেল হলেই পাড়ার মাঠে গোল্লাছুট",
    content:
      "স্কুল ছুটির পর বাড়ি ফিরে দ্রুত খাওয়া শেষ করেই মাঠে চলে যাওয়া। সূর্য ডোবার আগ পর্যন্ত চিৎকার চেঁচামেচি আর দৌড়াদৌড়ি। কারোর কোনো ক্লান্তি ছিল না তখন।",
    images: [
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?w=600&auto=format&fit=crop&q=80",
    ],
    totalImagesCount: 3,
    location: "বরিশাল",
    tags: ["গ্রামীণ খেলা", "শৈশব"],
    likesCount: 215,
    commentsCount: 19,
    isLiked: false,
    isSaved: true,
  },
]

export const ERA_TIMELINE_ITEMS: EraTimelineItem[] = [
  {
    id: "era-1990",
    era: "১৯৯০s",
    title: "১৯৯০s",
    countText: "১,২৪৫ স্মৃতি",
    imageUrl: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=120&auto=format&fit=crop&q=80",
    href: "/memories?era=1990",
  },
  {
    id: "era-2000",
    era: "২০০০s",
    title: "২০০০s",
    countText: "২,৩৩১ স্মৃতি",
    imageUrl: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=120&auto=format&fit=crop&q=80",
    href: "/memories?era=2000",
  },
  {
    id: "era-2010",
    era: "২০১০s",
    title: "২০১০s",
    countText: "১,৭৮৫ স্মৃতি",
    imageUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=120&auto=format&fit=crop&q=80",
    href: "/memories?era=2010",
  },
  {
    id: "era-2020",
    era: "২০২০s",
    title: "২০২০s",
    countText: "৪৭৫ স্মৃতি",
    imageUrl: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=120&auto=format&fit=crop&q=80",
    href: "/memories?era=2020",
  },
  {
    id: "era-2026",
    era: "২০২৬",
    title: "২০২৬",
    countText: "২৩ স্মৃতি",
    imageUrl: "https://images.unsplash.com/photo-1526676037777-05a232554f77?w=120&auto=format&fit=crop&q=80",
    href: "/memories?era=2026",
  },
]

export const POPULAR_GAMES_ITEMS: PopularGameItem[] = [
  {
    id: "game-kabaddi",
    slug: "kabaddi",
    title: "কাবাডি",
    countText: "৩২৪ স্মৃতি",
    imageUrl: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=120&auto=format&fit=crop&q=80",
  },
  {
    id: "game-gollachhut",
    slug: "gollachhut",
    title: "গোল্লাছুট",
    countText: "২৯৪ স্মৃতি",
    imageUrl: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=120&auto=format&fit=crop&q=80",
  },
  {
    id: "game-dariabandha",
    slug: "dariabandha",
    title: "দাঁড়িয়াবান্ধা",
    countText: "২৭৬ স্মৃতি",
    imageUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=120&auto=format&fit=crop&q=80",
  },
  {
    id: "game-lukochuri",
    slug: "lukochuri",
    title: "লুকোচুরি",
    countText: "২৪১ স্মৃতি",
    imageUrl: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=120&auto=format&fit=crop&q=80",
  },
  {
    id: "game-hadudu",
    slug: "hadudu",
    title: "হাডুডু",
    countText: "১৪৭ স্মৃতি",
    imageUrl: "https://images.unsplash.com/photo-1526676037777-05a232554f77?w=120&auto=format&fit=crop&q=80",
  },
]

export const WEEKLY_FEATURED_ITEM: WeeklyFeaturedItem = {
  id: "featured-eid-mela",
  slug: "amader-parar-eider-mela",
  title: "আমাদের পাড়ার ঈদের মেলা",
  authorName: "by তানভীর রহমান",
  imageUrl: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=300&auto=format&fit=crop&q=80",
}

