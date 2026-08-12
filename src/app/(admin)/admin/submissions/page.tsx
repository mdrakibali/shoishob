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

import { MOCK_SUBMISSIONS } from "@/lib/mock-data"

export default function SubmissionsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="mb-1 text-3xl font-bold tracking-tight">Submissions</h1>
          <p className="text-muted-foreground">Review and moderate incoming content.</p>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="text-muted-foreground absolute top-2.5 left-2.5 h-4 w-4" />
            <Input type="search" placeholder="Search..." className="bg-background w-[300px] pl-8" />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="border-border bg-card overflow-hidden rounded-md border">
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
            {MOCK_SUBMISSIONS.map((sub) => (
              <TableRow key={sub.id}>
                <TableCell className="font-medium">{sub.title}</TableCell>
                <TableCell>{sub.type}</TableCell>
                <TableCell>
                  {sub.year} • {sub.district}
                </TableCell>
                <TableCell>{sub.submitter}</TableCell>
                <TableCell>
                  <span
                    className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                      sub.status === "Pending"
                        ? "bg-accent/20 text-accent"
                        : sub.status === "Approved"
                          ? "bg-success/20 text-success"
                          : "bg-destructive/20 text-destructive"
                    }`}
                  >
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
                            <h3 className="text-muted-foreground text-sm font-medium uppercase">
                              Content
                            </h3>
                            <div className="bg-background border-border rounded-lg border p-4 font-serif text-lg leading-relaxed">
                              বিকেল হলেই মাঠে গোল্লাছুট খেলা শুরু হয়ে যেত। আমরা দুই দল ভাগ হয়ে
                              যেতাম... (Mock full content goes here)
                            </div>
                          </div>

                          <div className="space-y-2">
                            <h3 className="text-muted-foreground text-sm font-medium uppercase">
                              Media
                            </h3>
                            <div className="bg-muted border-border flex h-48 w-full items-center justify-center rounded-lg border">
                              No media attached
                            </div>
                          </div>
                        </div>

                        <div className="space-y-6">
                          <div className="bg-background border-border space-y-4 rounded-lg border p-4">
                            <h3 className="border-border border-b pb-2 font-medium">Metadata</h3>
                            <div className="grid grid-cols-2 gap-y-2 text-sm">
                              <span className="text-muted-foreground">Type:</span>{" "}
                              <span>{sub.type}</span>
                              <span className="text-muted-foreground">Year:</span>{" "}
                              <span>{sub.year}</span>
                              <span className="text-muted-foreground">District:</span>{" "}
                              <span>{sub.district}</span>
                              <span className="text-muted-foreground">Source:</span>{" "}
                              <span>Own Memory</span>
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
                                    <input
                                      type="radio"
                                      id="r1"
                                      name="reason"
                                      className="text-primary"
                                    />
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
