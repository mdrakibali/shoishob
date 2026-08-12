"use client"
import { useState } from "react"
import { Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { MOCK_SUBMISSIONS } from "@/lib/mock-data"
import { ReviewDialog } from "./review-dialog"
import { SubmissionData } from "@/types"

export function SubmissionsTable() {
  const [submissions, setSubmissions] = useState(MOCK_SUBMISSIONS)

  const handleUpdateStatus = (id: string, newStatus: SubmissionData["status"]) => {
    setSubmissions((prev) =>
      prev.map((sub) => (sub.id === id ? { ...sub, status: newStatus } : sub))
    )
  }

  return (
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
          {submissions.map((sub) => (
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
                <ReviewDialog
                  submission={sub}
                  onUpdateStatus={handleUpdateStatus}
                  trigger={
                    <Button variant="ghost" size="sm">
                      <Eye className="mr-2 h-4 w-4" /> Review
                    </Button>
                  }
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
