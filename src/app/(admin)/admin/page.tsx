
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Clock, Inbox, MessageSquare, XCircle } from "lucide-react"

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <div className="flex gap-2">
          <Button variant="outline">Download Report</Button>
          <Button className="bg-primary text-primary-foreground hover:bg-primary-hover">
            New Memory
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-t-accent border-t-4 shadow-sm">
          <CardHeader className="pb-2">
            <CardDescription>Pending Review</CardDescription>
            <CardTitle className="text-accent flex items-center text-3xl">
              <Clock className="mr-2 h-5 w-5" /> 24
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">Requires moderation</p>
          </CardContent>
        </Card>

        <Card className="border-t-success border-t-4 shadow-sm">
          <CardHeader className="pb-2">
            <CardDescription>Approved</CardDescription>
            <CardTitle className="text-success flex items-center text-3xl">
              <CheckCircle className="mr-2 h-5 w-5" /> 1,432
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">Published memories</p>
          </CardContent>
        </Card>

        <Card className="border-t-destructive border-t-4 shadow-sm">
          <CardHeader className="pb-2">
            <CardDescription>Rejected</CardDescription>
            <CardTitle className="text-destructive flex items-center text-3xl">
              <XCircle className="mr-2 h-5 w-5" /> 89
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">Spam or inappropriate</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Flagged Comments</CardTitle>
            <MessageSquare className="text-muted-foreground h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-destructive text-2xl font-bold">3</div>
            <p className="text-muted-foreground text-xs">Requires immediate review</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Recent Submissions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="bg-secondary text-secondary-foreground flex h-10 w-10 items-center justify-center rounded text-xs font-bold">
                    IMG
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm leading-none font-medium">গ্রামের সেই বিকেল</p>
                    <p className="text-muted-foreground text-sm">Submitter: rakib@example.com</p>
                  </div>
                  <div className="text-sm font-medium text-amber-600">Pending Review</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button className="w-full justify-start" variant="outline">
              <Inbox className="mr-2 h-4 w-4" /> Review Submissions (12)
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <MessageSquare className="mr-2 h-4 w-4" /> Moderate Comments (3)
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
