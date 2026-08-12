import Link from "next/link"
import { Button } from "@/components/ui/button"

export function GameInstructions() {
  return (
    <div className="prose prose-lg dark:prose-invert prose-headings:font-serif prose-a:text-primary max-w-none">
      <h2 className="text-foreground text-3xl font-bold">গোল্লাছুট কী?</h2>
      <p className="text-secondary-foreground text-lg leading-relaxed">
        গোল্লাছুট বাংলাদেশের একটি অন্যতম জনপ্রিয় গ্রামীণ খেলা। এই খেলায় দল বেঁধে দৌড়াদৌড়ি করতে
        হয়। মাঠের এক প্রান্তে একটি ছোট গোল ঘর (গোল্লা) থাকে, আর সেখান থেকে নির্দিষ্ট দূরত্বে
        একটি বড় সীমানা থাকে। এই খেলায় একজন 'রাজা' থাকে, যার কাজ হলো প্রতিপক্ষের ছোঁয়া থেকে
        বাঁচিয়ে সীমানার বাইরে যাওয়া।
      </p>

      <div className="my-12"></div>

      <h2 className="text-foreground text-3xl font-bold">কী কী লাগবে?</h2>
      <ul className="text-secondary-foreground">
        <li>একটি উন্মুক্ত মাঠ বা বড় ফাঁকা জায়গা</li>
        <li>মাটিতে দাগ কাটার জন্য একটি কাঠি বা চক</li>
        <li>৬ থেকে ১২ জন খেলোয়াড় (দুই দলে বিভক্ত)</li>
      </ul>

      <div className="my-12"></div>

      <h2 className="text-foreground text-3xl font-bold">কীভাবে খেলতে হয়?</h2>

      <div className="not-prose my-8 space-y-6">
        <div className="flex gap-4">
          <div className="bg-primary text-primary-foreground flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl font-serif text-xl font-bold shadow-sm">
            01
          </div>
          <div>
            <h4 className="text-foreground mb-1 text-lg font-bold">দলের গঠন</h4>
            <p className="text-secondary-foreground">
              খেলোয়াড়রা সমান দুই ভাগে বিভক্ত হয়ে দুটি দল গঠন করে। টসের মাধ্যমে ঠিক করা হয় কোন দল
              আগে 'রাজা' হবে আর কোন দল 'চোর' (পাহারাদার) হবে।
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="bg-primary text-primary-foreground flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl font-serif text-xl font-bold shadow-sm">
            02
          </div>
          <div>
            <h4 className="text-foreground mb-1 text-lg font-bold">মাঠ তৈরি</h4>
            <p className="text-secondary-foreground">
              মাঠের এক প্রান্তে একটি ছোট বৃত্ত আঁকা হয় যাকে 'গোল্লা' বলা হয়। সেখান থেকে ২৫-৩০
              হাত দূরে একটি সীমানা রেখা টানা হয়।
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="bg-primary text-primary-foreground flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl font-serif text-xl font-bold shadow-sm">
            03
          </div>
          <div>
            <h4 className="text-foreground mb-1 text-lg font-bold">খেলার শুরু</h4>
            <p className="text-secondary-foreground">
              আক্রমণকারী দলের সবাই গোল্লার ভেতরে থাকে। এদের মধ্যে একজন হয় 'রাজা'। প্রতিপক্ষ দলের
              খেলোয়াড়রা মাঠের চারদিকে ছড়িয়ে থাকে পাহারাদার হিসেবে।
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="bg-primary text-primary-foreground flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl font-serif text-xl font-bold shadow-sm">
            04
          </div>
          <div>
            <h4 className="text-foreground mb-1 text-lg font-bold">রাজার দৌড়</h4>
            <p className="text-secondary-foreground">
              রাজাকে নিরাপদে পাহারাদারদের চোখ এড়িয়ে বা ফাঁকি দিয়ে সীমানা রেখা পার হতে হয়। রাজা
              সীমানা পার হতে পারলে দল জয়ী হয়। কিন্তু রাজা পার হওয়ার আগে পাহারাদার কাউকে ছুঁয়ে
              দিলে সে আউট হয়ে যায়।
            </p>
          </div>
        </div>
      </div>

      <div className="my-12"></div>

      <div className="bg-surface border-border mb-12 rounded-2xl border p-8">
        <h2 className="text-foreground mt-0 mb-2 text-2xl font-bold">
          আমাদের এলাকায় একে কী নামে ডাকত?
        </h2>
        <p className="text-secondary-foreground mb-6">
          বাংলাদেশের বিভিন্ন অঞ্চলে গোল্লাছুট বিভিন্ন নামে পরিচিত। কোথাও একে "বউচি" বা
          "চোর-পুলিশ" এর ভিন্ন রূপ হিসেবে খেলা হতো।
        </p>
        <Button asChild className="bg-primary hover:bg-primary-hover text-primary-foreground">
          <Link href="/submit">আপনার এলাকার নিয়ম বা স্মৃতি যোগ করুন</Link>
        </Button>
      </div>
    </div>
  )
}
