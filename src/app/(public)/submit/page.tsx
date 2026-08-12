"use client"
import * as React from "react"
import Link from "next/link"
import {
  Upload,
  ChevronRight,
  CheckCircle2,
  Joystick,
  Image as ImageIcon,
  MapPin,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"

export default function SubmitPage() {
  const [step, setStep] = React.useState<"type" | "form" | "submitting" | "success">("type")
  const [type, setType] = React.useState<"game" | "memory" | "place" | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep("submitting")

    // Mock API call
    setTimeout(() => {
      setStep("success")
    }, 2000)
  }

  return (
    <div className="bg-background min-h-screen py-12 md:py-20">
      <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {step === "type" && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-12 text-center">
              <h1 className="text-foreground mb-4 font-serif text-4xl font-bold md:text-5xl">
                আপনি কী সংরক্ষণ করতে চান?
              </h1>
              <p className="text-muted-foreground text-lg">
                আপনার যেকোনো একটি স্মৃতি নির্বাচন করুন যা আপনি আর্কাইভ করতে চান
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <button
                onClick={() => {
                  setType("game")
                  setStep("form")
                }}
                className="border-border bg-surface hover:border-primary hover:bg-primary/5 group flex flex-col items-center rounded-2xl border-2 p-8 text-center transition-all"
              >
                <div className="bg-primary/10 mb-6 flex h-16 w-16 items-center justify-center rounded-full transition-transform group-hover:scale-110">
                  <Joystick className="text-primary h-8 w-8" />
                </div>
                <h3 className="text-foreground mb-2 font-serif text-2xl font-bold">খেলা</h3>
                <p className="text-secondary-foreground text-sm">
                  হারিয়ে যাওয়া কোনো গ্রামীণ বা শহরের খেলা ও তার নিয়মকানুন
                </p>
              </button>

              <button
                onClick={() => {
                  setType("memory")
                  setStep("form")
                }}
                className="border-border bg-surface hover:border-primary hover:bg-primary/5 group flex flex-col items-center rounded-2xl border-2 p-8 text-center transition-all"
              >
                <div className="bg-primary/10 mb-6 flex h-16 w-16 items-center justify-center rounded-full transition-transform group-hover:scale-110">
                  <ImageIcon className="text-primary h-8 w-8" />
                </div>
                <h3 className="text-foreground mb-2 font-serif text-2xl font-bold">
                  শৈশবের স্মৃতি
                </h3>
                <p className="text-secondary-foreground text-sm">
                  ছেলেবেলার কোনো মজার ঘটনা বা নস্টালজিক স্মৃতি
                </p>
              </button>

              <button
                onClick={() => {
                  setType("place")
                  setStep("form")
                }}
                className="border-border bg-surface hover:border-primary hover:bg-primary/5 group flex flex-col items-center rounded-2xl border-2 p-8 text-center transition-all"
              >
                <div className="bg-primary/10 mb-6 flex h-16 w-16 items-center justify-center rounded-full transition-transform group-hover:scale-110">
                  <MapPin className="text-primary h-8 w-8" />
                </div>
                <h3 className="text-foreground mb-2 font-serif text-2xl font-bold">একটি জায়গা</h3>
                <p className="text-secondary-foreground text-sm">
                  স্কুল, পাড়ার মাঠ বা কোনো বিশেষ জায়গার স্মৃতি
                </p>
              </button>
            </div>
          </div>
        )}

        {step === "form" && (
          <div className="animate-in fade-in slide-in-from-right-8 duration-500">
            <div className="mb-8 flex items-center gap-2">
              <button
                onClick={() => setStep("type")}
                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              >
                ধরন নির্বাচন
              </button>
              <ChevronRight className="text-muted-foreground h-4 w-4" />
              <span className="text-foreground text-sm font-medium">
                {type === "game"
                  ? "খেলা যোগ করুন"
                  : type === "memory"
                    ? "স্মৃতি যোগ করুন"
                    : "জায়গা যোগ করুন"}
              </span>
            </div>

            <div className="bg-surface border-border rounded-2xl border p-6 shadow-sm md:p-10">
              <h2 className="text-foreground mb-8 font-serif text-3xl font-bold">
                {type === "game"
                  ? "খেলার তথ্য"
                  : type === "memory"
                    ? "স্মৃতির গল্প"
                    : "জায়গার বিবরণ"}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-3">
                  <Label htmlFor="title" className="text-base">
                    শিরোনাম <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="title"
                    placeholder="যেমন: বিকেল হলেই মাঠে গোল্লাছুট"
                    required
                    className="h-12 text-base"
                  />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="story" className="text-base">
                    গল্পটি লিখুন <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="story"
                    placeholder="আপনার স্মৃতি বা গল্পটি বিস্তারিতভাবে লিখুন..."
                    required
                    className="min-h-[150px] resize-y text-base"
                  />
                </div>

                {type === "game" && (
                  <div className="space-y-3">
                    <Label htmlFor="howToPlay" className="text-base">
                      কীভাবে খেলতে হয়?
                    </Label>
                    <Textarea
                      id="howToPlay"
                      placeholder="খেলার নিয়ম, কতজন লাগে, কী কী জিনিস লাগে..."
                      className="min-h-[120px] resize-y text-base"
                    />
                  </div>
                )}

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="space-y-3">
                    <Label htmlFor="year" className="text-base">
                      সময়কাল (আনুমানিক)
                    </Label>
                    <Select>
                      <SelectTrigger id="year" className="h-12 text-base">
                        <SelectValue placeholder="দশক নির্বাচন করুন" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2020s">২০২০-এর দশক</SelectItem>
                        <SelectItem value="2010s">২০১০-এর দশক</SelectItem>
                        <SelectItem value="2000s">২০০০-এর দশক</SelectItem>
                        <SelectItem value="1990s">১৯৯০-এর দশক</SelectItem>
                        <SelectItem value="1980s">১৯৮০-এর দশক</SelectItem>
                        <SelectItem value="older">তারও আগের</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="district" className="text-base">
                      জেলা
                    </Label>
                    <Select>
                      <SelectTrigger id="district" className="h-12 text-base">
                        <SelectValue placeholder="জেলা নির্বাচন করুন" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dhaka">ঢাকা</SelectItem>
                        <SelectItem value="chittagong">চট্টগ্রাম</SelectItem>
                        <SelectItem value="rajshahi">রাজশাহী</SelectItem>
                        <SelectItem value="khulna">খুলনা</SelectItem>
                        <SelectItem value="barisal">বরিশাল</SelectItem>
                        <SelectItem value="sylhet">সিলেট</SelectItem>
                        <SelectItem value="rangpur">রংপুর</SelectItem>
                        <SelectItem value="mymensingh">ময়মনসিংহ</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-4">
                  <Label className="text-base">
                    তথ্যের উৎস <span className="text-destructive">*</span>
                  </Label>
                  <RadioGroup defaultValue="self" className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="bg-background border-border flex items-center space-x-3 rounded-lg border p-4">
                      <RadioGroupItem value="self" id="self" />
                      <Label htmlFor="self" className="cursor-pointer font-normal">
                        এটা আমার নিজের স্মৃতি
                      </Label>
                    </div>
                    <div className="bg-background border-border flex items-center space-x-3 rounded-lg border p-4">
                      <RadioGroupItem value="parents" id="parents" />
                      <Label htmlFor="parents" className="cursor-pointer font-normal">
                        বাবা-মায়ের কাছ থেকে শুনেছি
                      </Label>
                    </div>
                    <div className="bg-background border-border flex items-center space-x-3 rounded-lg border p-4">
                      <RadioGroupItem value="grandparents" id="grandparents" />
                      <Label htmlFor="grandparents" className="cursor-pointer font-normal">
                        দাদা/নানার কাছ থেকে শুনেছি
                      </Label>
                    </div>
                    <div className="bg-background border-border flex items-center space-x-3 rounded-lg border p-4">
                      <RadioGroupItem value="others" id="others" />
                      <Label htmlFor="others" className="cursor-pointer font-normal">
                        অন্য কারও কাছ থেকে শুনেছি
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-3">
                  <Label className="text-base">ছবি বা মিডিয়া (ঐচ্ছিক)</Label>
                  <div className="border-border bg-background hover:bg-secondary/50 cursor-pointer rounded-xl border-2 border-dashed p-8 text-center transition-colors">
                    <Upload className="text-muted-foreground mx-auto mb-4 h-10 w-10" />
                    <p className="text-foreground mb-1 text-sm font-medium">
                      ক্লিক করে ছবি আপলোড করুন
                    </p>
                    <p className="text-muted-foreground text-xs">
                      PNG, JPG, বা GIF (সর্বোচ্চ ৫ মেগাবাইট)
                    </p>
                  </div>
                </div>

                <div className="border-border space-y-6 border-t pt-6">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="space-y-3">
                      <Label htmlFor="name" className="text-base">
                        আপনার নাম <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="name"
                        placeholder="আপনার নাম"
                        required
                        className="h-12 text-base"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="email" className="text-base">
                        ইমেইল <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="example@email.com"
                        required
                        className="h-12 text-base"
                      />
                      <p className="text-muted-foreground text-xs">
                        আপনার ইমেইল প্রকাশ্যে দেখানো হবে না।
                      </p>
                    </div>
                  </div>

                  {/* Turnstile Placeholder */}
                  <div className="bg-muted border-border flex h-[65px] w-full max-w-[300px] items-center justify-center rounded-sm border p-2">
                    <div className="flex w-full items-center gap-3">
                      <div className="border-muted-foreground h-6 w-6 rounded-sm border-2"></div>
                      <span className="text-secondary-foreground text-sm font-medium">
                        Verify you are human
                      </span>
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="bg-primary hover:bg-primary-hover text-primary-foreground h-14 w-full text-lg"
                >
                  সংরক্ষণ করুন
                </Button>
              </form>
            </div>
          </div>
        )}

        {(step === "submitting" || step === "success") && (
          <div className="animate-in fade-in zoom-in-95 bg-surface border-border mx-auto mt-12 max-w-xl rounded-2xl border p-10 text-center shadow-sm duration-500 md:p-16">
            {step === "submitting" && (
              <div className="flex flex-col items-center">
                <div className="border-primary/20 border-t-primary mb-8 h-20 w-20 animate-spin rounded-full border-4"></div>
                <h2 className="text-foreground mb-4 font-serif text-3xl font-bold">
                  সংরক্ষণ করা হচ্ছে...
                </h2>
                <p className="text-secondary-foreground">
                  দয়া করে অপেক্ষা করুন, আপনার স্মৃতিটি আর্কাইভে জমা হচ্ছে।
                </p>
              </div>
            )}

            {step === "success" && (
              <div className="flex flex-col items-center">
                <div className="bg-success/10 mb-8 flex h-24 w-24 items-center justify-center rounded-full">
                  <CheckCircle2 className="text-success h-12 w-12" />
                </div>
                <h2 className="text-foreground mb-4 font-serif text-3xl font-bold md:text-4xl">
                  আপনার স্মৃতি সংরক্ষণের পথে!
                </h2>
                <p className="text-secondary-foreground mb-8 text-lg">
                  আমাদের টিম এটি দেখে প্রকাশ করবে। ভবিষ্যৎ প্রজন্মের জন্য ইতিহাস সংরক্ষণে অংশ নেওয়ার
                  জন্য ধন্যবাদ।
                </p>
                <div className="flex gap-4">
                  <Button
                    asChild
                    variant="outline"
                    className="border-border text-foreground hover:bg-secondary"
                  >
                    <Link href="/">হোমে ফিরে যান</Link>
                  </Button>
                  <Button
                    onClick={() => {
                      setStep("type")
                      setType(null)
                    }}
                    className="bg-primary hover:bg-primary-hover text-primary-foreground"
                  >
                    আরেকটি স্মৃতি যোগ করুন
                  </Button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
