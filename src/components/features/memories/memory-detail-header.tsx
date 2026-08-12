import { Calendar, MapPin, Heart, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export function MemoryDetailHeader() {
  return (
    <div className="bg-surface border-border border-b pt-8 pb-12">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/explore">Memories</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-foreground line-clamp-1 font-medium">
                বিকেল হলেই আমরা মাঠে চলে যেতাম
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="mb-8 flex flex-col">
          <div className="text-muted-foreground mb-4 flex items-center gap-4 text-sm font-medium">
            <span className="bg-background border-border flex items-center gap-1.5 rounded-full border px-3 py-1">
              <Calendar className="h-4 w-4" /> 2003
            </span>
            <span className="bg-background border-border flex items-center gap-1.5 rounded-full border px-3 py-1">
              <MapPin className="h-4 w-4" /> Gazipur
            </span>
          </div>

          <h1 className="text-foreground mb-6 font-serif text-4xl leading-[1.2] font-bold md:text-5xl">
            বিকেল হলেই আমরা মাঠে চলে যেতাম
          </h1>

          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <Avatar className="border-border h-10 w-10 border">
                <AvatarFallback className="bg-primary/10 text-primary font-bold">SM</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-foreground text-sm font-medium">
                  সংরক্ষণ করেছেন: শাফায়াত মাহমুদ
                </p>
                <p className="text-muted-foreground flex items-center gap-1 text-xs italic">
                  <span className="bg-accent inline-block h-1.5 w-1.5 rounded-full"></span>
                  উৎস: নিজের স্মৃতি
                </p>
              </div>
            </div>

            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="border-border h-9 w-9">
                <Heart className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="border-border h-9 w-9">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
