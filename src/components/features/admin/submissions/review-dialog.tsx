"use client"
import { AlertTriangle, Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface ReviewDialogProps {
  submission: any
  trigger: React.ReactNode
}

export function ReviewDialog({ submission: sub, trigger }: ReviewDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="border-border flex max-h-[90vh] max-w-4xl flex-col overflow-hidden p-0">
        <DialogHeader className="border-border border-b p-6">
          <DialogTitle className="font-serif text-2xl">
            Review Submission: {sub.title}
          </DialogTitle>
          <DialogDescription>
            Submitted by {sub.submitter} • {sub.created}
          </DialogDescription>
        </DialogHeader>

        <div className="bg-surface grid flex-1 grid-cols-1 gap-6 overflow-y-auto p-6 md:grid-cols-3">
          <div className="space-y-6 md:col-span-2">
            <div className="space-y-2">
              <h3 className="text-muted-foreground text-sm font-medium uppercase">Content</h3>
              <div className="bg-background border-border rounded-lg border p-4 font-serif text-lg leading-relaxed">
                বিকেল হলেই মাঠে গোল্লাছুট খেলা শুরু হয়ে যেত। আমরা দুই দল ভাগ হয়ে
                যেতাম... (Mock full content goes here)
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-muted-foreground text-sm font-medium uppercase">Media</h3>
              <div className="bg-muted border-border flex h-48 w-full items-center justify-center rounded-lg border">
                No media attached
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-background border-border space-y-4 rounded-lg border p-4">
              <h3 className="border-border border-b pb-2 font-medium">Metadata</h3>
              <div className="grid grid-cols-2 gap-y-2 text-sm">
                <span className="text-muted-foreground">Type:</span> <span>{sub.type}</span>
                <span className="text-muted-foreground">Year:</span> <span>{sub.year}</span>
                <span className="text-muted-foreground">District:</span> <span>{sub.district}</span>
                <span className="text-muted-foreground">Source:</span> <span>Own Memory</span>
              </div>
            </div>

            <div className="space-y-3">
              <Button className="bg-success hover:bg-success/90 w-full justify-start text-white">
                <Check className="mr-2 h-4 w-4" /> Approve & Publish
              </Button>

              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="text-destructive hover:text-destructive hover:bg-destructive/10 border-destructive/50 w-full justify-start"
                  >
                    <X className="mr-2 h-4 w-4" /> Reject
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Reject Submission</DialogTitle>
                    <DialogDescription>
                      Please provide a reason for rejecting this submission.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="flex items-center gap-2">
                      <input type="radio" id="r1" name="reason" className="text-primary" />
                      <label htmlFor="r1">Duplicate Content</label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="radio" id="r2" name="reason" />
                      <label htmlFor="r2">Inappropriate</label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="radio" id="r3" name="reason" />
                      <label htmlFor="r3">Incorrect Information</label>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button variant="outline">Cancel</Button>
                    <Button variant="destructive">Confirm Reject</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <Button variant="outline" className="w-full justify-start">
                <AlertTriangle className="mr-2 h-4 w-4" /> Request Edit
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
