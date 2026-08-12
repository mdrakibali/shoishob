import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function MemoryComments() {
  return (
    <div id="comments">
      <div className="mb-8 flex items-center gap-2">
        <MessageCircle className="text-primary h-6 w-6" />
        <h3 className="text-foreground text-2xl font-bold">
          এই স্মৃতি নিয়ে কথা বলুন (৩)
        </h3>
      </div>

      <div className="bg-surface border-border mb-8 flex flex-col items-center justify-center rounded-xl border p-6 text-center">
        <p className="text-muted-foreground mb-4">মন্তব্য করতে লগইন করুন</p>
        <Button className="bg-primary hover:bg-primary-hover text-primary-foreground">
          লগইন করুন
        </Button>
      </div>

      <div className="space-y-6">
        {/* COMMENT THREAD */}
        <div className="flex gap-4">
          <Avatar className="border-border h-10 w-10 border">
            <AvatarFallback className="bg-secondary text-secondary-foreground">RD</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="bg-surface border-border rounded-xl rounded-tl-none border p-4">
              <div className="mb-2 flex items-start justify-between">
                <p className="text-foreground text-sm font-semibold">Rahimul Deep</p>
                <p className="text-muted-foreground text-xs">২ দিন আগে</p>
              </div>
              <p className="text-secondary-foreground text-sm">
                একদম ঠিক কথা বলেছেন! আমাদের এলাকার মাঠটাও এখন দখল হয়ে গেছে। সেই বিকেলগুলো আসলেই খুব
                মিস করি।
              </p>
            </div>
            <div className="mt-2 ml-2 flex gap-4">
              <button className="text-muted-foreground hover:text-primary text-xs font-medium transition-colors">
                Upvote (12)
              </button>
              <button className="text-muted-foreground hover:text-primary text-xs font-medium transition-colors">
                Reply
              </button>
            </div>

            {/* REPLY */}
            <div className="mt-4 ml-8 flex gap-4">
              <Avatar className="border-border h-8 w-8 border">
                <AvatarFallback className="bg-primary/10 text-primary">SM</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="bg-background border-border rounded-xl rounded-tl-none border p-3">
                  <div className="mb-1 flex items-start justify-between">
                    <p className="text-foreground text-xs font-semibold">
                      শাফায়াত মাহমুদ{" "}
                      <span className="bg-primary text-primary-foreground ml-1 rounded px-1.5 py-0.5 text-[10px]">
                        Author
                      </span>
                    </p>
                    <p className="text-muted-foreground text-[10px]">১ দিন আগে</p>
                  </div>
                  <p className="text-secondary-foreground text-xs">
                    ধন্যবাদ ভাই। আমাদের সবার গল্পই আসলে অনেকটা একই রকম।
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ANOTHER COMMENT */}
        <div className="flex gap-4">
          <Avatar className="border-border h-10 w-10 border">
            <AvatarFallback className="bg-secondary text-secondary-foreground">TS</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="bg-surface border-border rounded-xl rounded-tl-none border p-4">
              <div className="mb-2 flex items-start justify-between">
                <p className="text-foreground text-sm font-semibold">Tania Sultana</p>
                <p className="text-muted-foreground text-xs">৫ দিন আগে</p>
              </div>
              <p className="text-secondary-foreground text-sm">
                কড়ই গাছের নিচে এক টাকার আইসক্রিমের কথা মনে করিয়ে দিলেন! আমরাও এরকম খেতাম।
              </p>
            </div>
            <div className="mt-2 ml-2 flex gap-4">
              <button className="text-muted-foreground hover:text-primary text-xs font-medium transition-colors">
                Upvote (5)
              </button>
              <button className="text-muted-foreground hover:text-primary text-xs font-medium transition-colors">
                Reply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
