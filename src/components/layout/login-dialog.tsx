import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export function LoginDialog() {
  return (
    <DialogContent className="sm:max-w-106.25">
      <DialogHeader>
        <DialogTitle className="text-primary mb-2 text-center text-2xl">
          Shoishob
        </DialogTitle>
        <DialogDescription className="text-center">
          আপনার অ্যাকাউন্টে লগইন করুন অথবা নতুন অ্যাকাউন্ট তৈরি করুন।
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <Button variant="outline" className="h-12 w-full">
          Continue with Google
        </Button>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="border-border w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background text-muted-foreground px-2">Or continue with email</span>
          </div>
        </div>
        <div className="grid gap-2">
          <label htmlFor="email" className="text-sm leading-none font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="m@example.com"
            className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>
      </div>
      <Button
        type="button"
        className="bg-primary text-primary-foreground hover:bg-primary-hover w-full"
      >
        লগইন
      </Button>
      <p className="text-muted-foreground mt-4 text-center text-sm">Only mock UI for now.</p>
    </DialogContent>
  )
}
