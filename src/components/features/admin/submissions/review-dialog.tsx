"use client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { SubmissionData } from "@/types"
import { Check } from "lucide-react"
import * as React from "react"
import { RejectDialog } from "./reject-dialog"

interface ReviewDialogProps {
  submission: SubmissionData
  trigger: React.ReactElement
  onUpdateStatus: (id: string, newStatus: SubmissionData["status"]) => void
}

export function ReviewDialog({ submission: sub, trigger, onUpdateStatus }: ReviewDialogProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [rejectDialogOpen, setRejectDialogOpen] = React.useState(false)
  const [isApproving, setIsApproving] = React.useState(false)
  const [isRejecting, setIsRejecting] = React.useState(false)

  const handleApprove = () => {
    setIsApproving(true)
    setTimeout(() => {
      onUpdateStatus(sub.id, "Approved")
      setIsApproving(false)
      setIsOpen(false)
    }, 1500)
  }

  const handleReject = () => {
    setIsRejecting(true)
    setTimeout(() => {
      onUpdateStatus(sub.id, "Rejected")
      setIsRejecting(false)
      setRejectDialogOpen(false)
      setIsOpen(false)
    }, 1500)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger render={trigger} />
      <DialogContent className="border-border flex max-h-[90vh] max-w-4xl flex-col overflow-hidden p-0">
        <DialogHeader className="border-border border-b p-6">
          <DialogTitle className="font-serif text-2xl">Review Submission: {sub.title}</DialogTitle>
          <DialogDescription>
            Submitted by {sub.submitter} • {sub.created}
          </DialogDescription>
        </DialogHeader>

        <div className="bg-surface grid flex-1 grid-cols-1 gap-6 overflow-y-auto p-6 md:grid-cols-3">
          <div className="space-y-6 md:col-span-2">
            <div className="space-y-2">
              <h3 className="text-muted-foreground text-sm font-medium uppercase">Content</h3>
              <div className="bg-background border-border rounded-lg border p-4 font-serif text-lg leading-relaxed">
                বিকেল হলেই মাঠে গোল্লাছুট খেলা শুরু হয়ে যেত। আমরা দুই দল ভাগ হয়ে যেতাম... (Mock full
                content goes here)
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
              <Button
                onClick={handleApprove}
                disabled={isApproving || sub.status !== "Pending"}
                className="bg-success hover:bg-success/90 w-full justify-start text-white"
              >
                <Check className="mr-2 h-4 w-4" />
                {isApproving ? "Approving..." : "Approve & Publish"}
              </Button>

              <RejectDialog
                isOpen={rejectDialogOpen}
                onOpenChange={setRejectDialogOpen}
                onReject={handleReject}
                isRejecting={isRejecting}
                disabled={isApproving || sub.status !== "Pending"}
              />

              <Button
                variant="outline"
                onClick={() => setIsOpen(false)}
                className="w-full justify-start"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
