import Image from "next/image"
import { Clock, Users, Info, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export function GameDetailHeader() {
  return (
    <div className="bg-surface border-border border-b pt-8 pb-16">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/games">Games</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-foreground font-medium">গোল্লাছুট</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="mb-8 flex flex-col items-start gap-8 md:flex-row md:items-end">
          <div className="flex-1">
            <h1 className="text-foreground mb-4 font-serif text-5xl font-bold md:text-6xl">
              গোল্লাছুট
            </h1>

            <div className="text-secondary-foreground flex flex-wrap items-center gap-6 text-sm font-medium">
              <div className="flex items-center gap-2">
                <div className="bg-primary/10 text-primary rounded-full p-2">
                  <Clock className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-muted-foreground text-xs tracking-wider uppercase">সময়</p>
                  <p className="text-foreground">1990s–2000s</p>
                </div>
              </div>

              <Separator orientation="vertical" className="hidden h-10 sm:block" />

              <div className="flex items-center gap-2">
                <div className="bg-primary/10 text-primary rounded-full p-2">
                  <Users className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-muted-foreground text-xs tracking-wider uppercase">
                    খেলোয়াড়
                  </p>
                  <p className="text-foreground">6–12 জন</p>
                </div>
              </div>

              <Separator orientation="vertical" className="hidden h-10 sm:block" />

              <div className="flex items-center gap-2">
                <div className="bg-primary/10 text-primary rounded-full p-2">
                  <Info className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-muted-foreground text-xs tracking-wider uppercase">ধরন</p>
                  <p className="text-foreground">Outdoor</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-full gap-3 md:w-auto">
            <Button className="flex-1 md:flex-none" variant="outline">
              <Share2 className="mr-2 h-4 w-4" /> শেয়ার
            </Button>
          </div>
        </div>

        <div className="border-border relative aspect-video w-full overflow-hidden rounded-2xl border shadow-lg">
          <Image
            src="/assets/game_placeholder.png"
            alt="গোল্লাছুট"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  )
}
