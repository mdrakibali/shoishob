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
import { X } from "lucide-react"
import { RejectDialogProps } from "@/types"

export function RejectDialog({
  isOpen,
  onOpenChange,
  onReject,
  isRejecting,
  disabled,
}: RejectDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogTrigger
        render={
          <Button
            variant="outline"
            disabled={disabled}
            className="text-destructive hover:text-destructive hover:bg-destructive/10 border-destructive/50 w-full justify-start"
          >
            <X className="mr-2 h-4 w-4" /> Reject
          </Button>
        }
      />
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
          <Button variant="outline" onClick={() => onOpenChange(false)} disabled={isRejecting}>
            Cancel
          </Button>
          <Button variant="destructive" onClick={onReject} disabled={isRejecting}>
            {isRejecting ? "Rejecting..." : "Confirm Reject"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
