"use client"

import { AlertTriangle, Check, Eye, Filter, Search, X } from "lucide-react"
import * as React from "react"

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
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const submissions = [
  { id: "1", title: "মাঠের কোণে গোল্লাছুট", type: "খেলা", year: "2005", district: "ঢাকা", submitter: "rakib@example.com", status: "Pending", created: "2 hours ago" },
  { id: "2", title: "বৃষ্টির দিনে ফুটবল", type: "শৈশবের স্মৃতি", year: "1998", district: "বরিশাল", submitter: "user22@example.com", status: "Pending", created: "5 hours ago" },
  { id: "3", title: "স্কুলের পেছনের পুকুর", type: "একটি জায়গা", year: "2010", district: "সিলেট", submitter: "anon@example.com", status: "Approved", created: "1 day ago" },
  { id: "4", title: "মার্বেল খেলার নিয়ম", type: "খেলা", year: "1995", district: "রাজশাহী", submitter: "test@example.com", status: "Rejected", created: "2 days ago" },
]

export default function SubmissionsPage() {
  const [selectedSub, setSelectedSub] = React.useState(null)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-1">Submissions</h1>
          <p className="text-muted-foreground">Review and moderate incoming content.</p>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search..." className="w-[300px] pl-8 bg-background" />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="rounded-md border border-border bg-card overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50 hover:bg-muted/50">
              <TableHead>Title</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Year / Dist</TableHead>
              <TableHead>Submitter</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {submissions.map((sub) => (
              <TableRow key={sub.id}>
                <TableCell className="font-medium">{sub.title}</TableCell>
                <TableCell>{sub.type}</TableCell>
                <TableCell>{sub.year} • {sub.district}</TableCell>
                <TableCell>{sub.submitter}</TableCell>
                <TableCell>
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                    sub.status === 'Pending' ? 'bg-[#D49A4A]/20 text-[#D49A4A]' :
                    sub.status === 'Approved' ? 'bg-[#58745A]/20 text-[#58745A]' :
                    'bg-[#A85C55]/20 text-[#A85C55]'
                  }`}>
                    {sub.status}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <Eye className="mr-2 h-4 w-4" /> Review
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden flex flex-col p-0 border-border">
                      <DialogHeader className="p-6 border-b border-border">
                        <DialogTitle className="text-2xl font-serif">Review Submission: {sub.title}</DialogTitle>
                        <DialogDescription>
                          Submitted by {sub.submitter} • {sub.created}
                        </DialogDescription>
                      </DialogHeader>
                      
                      <div className="flex-1 overflow-y-auto p-6 bg-surface grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="md:col-span-2 space-y-6">
                          <div className="space-y-2">
                            <h3 className="font-medium text-sm text-muted-foreground uppercase">Content</h3>
                            <div className="bg-background border border-border rounded-lg p-4 font-serif text-lg leading-relaxed">
                              বিকেল হলেই মাঠে গোল্লাছুট খেলা শুরু হয়ে যেত। আমরা দুই দল ভাগ হয়ে যেতাম... 
                              (Mock full content goes here)
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <h3 className="font-medium text-sm text-muted-foreground uppercase">Media</h3>
                            <div className="w-full h-48 bg-muted rounded-lg flex items-center justify-center border border-border">
                              No media attached
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-6">
                          <div className="bg-background border border-border rounded-lg p-4 space-y-4">
                            <h3 className="font-medium border-b border-border pb-2">Metadata</h3>
                            <div className="grid grid-cols-2 gap-y-2 text-sm">
                              <span className="text-muted-foreground">Type:</span> <span>{sub.type}</span>
                              <span className="text-muted-foreground">Year:</span> <span>{sub.year}</span>
                              <span className="text-muted-foreground">District:</span> <span>{sub.district}</span>
                              <span className="text-muted-foreground">Source:</span> <span>Own Memory</span>
                            </div>
                          </div>
                          
                          <div className="space-y-3">
                            <Button className="w-full bg-[#58745A] hover:bg-[#58745A]/90 text-white justify-start">
                              <Check className="mr-2 h-4 w-4" /> Approve & Publish
                            </Button>
                            
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button variant="outline" className="w-full justify-start text-[#A85C55] hover:text-[#A85C55] hover:bg-[#A85C55]/10 border-[#A85C55]/50">
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
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
