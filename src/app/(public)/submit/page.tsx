"use client"
import * as React from "react"
import Link from "next/link"
import { Upload, ChevronRight, CheckCircle2, Joystick, Image as ImageIcon, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
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
            <div className="text-center mb-12">
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
                আপনি কী সংরক্ষণ করতে চান?
              </h1>
              <p className="text-lg text-muted-foreground">
                আপনার যেকোনো একটি স্মৃতি নির্বাচন করুন যা আপনি আর্কাইভ করতে চান
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <button 
                onClick={() => { setType("game"); setStep("form"); }}
                className="flex flex-col items-center text-center p-8 rounded-2xl border-2 border-border bg-surface hover:border-primary hover:bg-primary/5 transition-all group"
              >
                <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Joystick className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-2">খেলা</h3>
                <p className="text-sm text-secondary-foreground">হারিয়ে যাওয়া কোনো গ্রামীণ বা শহরের খেলা ও তার নিয়মকানুন</p>
              </button>
              
              <button 
                onClick={() => { setType("memory"); setStep("form"); }}
                className="flex flex-col items-center text-center p-8 rounded-2xl border-2 border-border bg-surface hover:border-primary hover:bg-primary/5 transition-all group"
              >
                <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <ImageIcon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-2">শৈশবের স্মৃতি</h3>
                <p className="text-sm text-secondary-foreground">ছেলেবেলার কোনো মজার ঘটনা বা নস্টালজিক স্মৃতি</p>
              </button>
              
              <button 
                onClick={() => { setType("place"); setStep("form"); }}
                className="flex flex-col items-center text-center p-8 rounded-2xl border-2 border-border bg-surface hover:border-primary hover:bg-primary/5 transition-all group"
              >
                <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-2">একটি জায়গা</h3>
                <p className="text-sm text-secondary-foreground">স্কুল, পাড়ার মাঠ বা কোনো বিশেষ জায়গার স্মৃতি</p>
              </button>
              
            </div>
          </div>
        )}

        {step === "form" && (
          <div className="animate-in fade-in slide-in-from-right-8 duration-500">
            <div className="mb-8 flex items-center gap-2">
              <button onClick={() => setStep("type")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                ধরন নির্বাচন
              </button>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium text-foreground">
                {type === "game" ? "খেলা যোগ করুন" : type === "memory" ? "স্মৃতি যোগ করুন" : "জায়গা যোগ করুন"}
              </span>
            </div>
            
            <div className="bg-surface border border-border rounded-2xl p-6 md:p-10 shadow-sm">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-8">
                {type === "game" ? "খেলার তথ্য" : type === "memory" ? "স্মৃতির গল্প" : "জায়গার বিবরণ"}
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                
                <div className="space-y-3">
                  <Label htmlFor="title" className="text-base">শিরোনাম <span className="text-destructive">*</span></Label>
                  <Input id="title" placeholder="যেমন: বিকেল হলেই মাঠে গোল্লাছুট" required className="h-12 text-base" />
                </div>
                
                <div className="space-y-3">
                  <Label htmlFor="story" className="text-base">গল্পটি লিখুন <span className="text-destructive">*</span></Label>
                  <Textarea id="story" placeholder="আপনার স্মৃতি বা গল্পটি বিস্তারিতভাবে লিখুন..." required className="min-h-[150px] text-base resize-y" />
                </div>
                
                {type === "game" && (
                  <div className="space-y-3">
                    <Label htmlFor="howToPlay" className="text-base">কীভাবে খেলতে হয়?</Label>
                    <Textarea id="howToPlay" placeholder="খেলার নিয়ম, কতজন লাগে, কী কী জিনিস লাগে..." className="min-h-[120px] text-base resize-y" />
                  </div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label htmlFor="year" className="text-base">সময়কাল (আনুমানিক)</Label>
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
                    <Label htmlFor="district" className="text-base">জেলা</Label>
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
                  <Label className="text-base">তথ্যের উৎস <span className="text-destructive">*</span></Label>
                  <RadioGroup defaultValue="self" className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3 bg-background border border-border p-4 rounded-lg">
                      <RadioGroupItem value="self" id="self" />
                      <Label htmlFor="self" className="font-normal cursor-pointer">এটা আমার নিজের স্মৃতি</Label>
                    </div>
                    <div className="flex items-center space-x-3 bg-background border border-border p-4 rounded-lg">
                      <RadioGroupItem value="parents" id="parents" />
                      <Label htmlFor="parents" className="font-normal cursor-pointer">বাবা-মায়ের কাছ থেকে শুনেছি</Label>
                    </div>
                    <div className="flex items-center space-x-3 bg-background border border-border p-4 rounded-lg">
                      <RadioGroupItem value="grandparents" id="grandparents" />
                      <Label htmlFor="grandparents" className="font-normal cursor-pointer">দাদা/নানার কাছ থেকে শুনেছি</Label>
                    </div>
                    <div className="flex items-center space-x-3 bg-background border border-border p-4 rounded-lg">
                      <RadioGroupItem value="others" id="others" />
                      <Label htmlFor="others" className="font-normal cursor-pointer">অন্য কারও কাছ থেকে শুনেছি</Label>
                    </div>
                  </RadioGroup>
                </div>
                
                <div className="space-y-3">
                  <Label className="text-base">ছবি বা মিডিয়া (ঐচ্ছিক)</Label>
                  <div className="border-2 border-dashed border-border rounded-xl p-8 text-center bg-background hover:bg-secondary/50 transition-colors cursor-pointer">
                    <Upload className="h-10 w-10 text-muted-foreground mx-auto mb-4" />
                    <p className="text-sm text-foreground font-medium mb-1">ক্লিক করে ছবি আপলোড করুন</p>
                    <p className="text-xs text-muted-foreground">PNG, JPG, বা GIF (সর্বোচ্চ ৫ মেগাবাইট)</p>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-border space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="name" className="text-base">আপনার নাম <span className="text-destructive">*</span></Label>
                      <Input id="name" placeholder="আপনার নাম" required className="h-12 text-base" />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="email" className="text-base">ইমেইল <span className="text-destructive">*</span></Label>
                      <Input id="email" type="email" placeholder="example@email.com" required className="h-12 text-base" />
                      <p className="text-xs text-muted-foreground">আপনার ইমেইল প্রকাশ্যে দেখানো হবে না।</p>
                    </div>
                  </div>
                  
                  {/* Turnstile Placeholder */}
                  <div className="bg-muted w-full max-w-[300px] h-[65px] rounded-sm border border-border flex items-center justify-center p-2">
                    <div className="flex items-center gap-3 w-full">
                      <div className="w-6 h-6 border-2 border-muted-foreground rounded-sm"></div>
                      <span className="text-sm font-medium text-secondary-foreground">Verify you are human</span>
                    </div>
                  </div>
                </div>
                
                <Button type="submit" size="lg" className="w-full h-14 text-lg bg-primary hover:bg-primary-hover text-primary-foreground">
                  সংরক্ষণ করুন
                </Button>
                
              </form>
            </div>
          </div>
        )}

        {(step === "submitting" || step === "success") && (
          <div className="animate-in fade-in zoom-in-95 duration-500 bg-surface border border-border rounded-2xl p-10 md:p-16 text-center max-w-xl mx-auto shadow-sm mt-12">
            
            {step === "submitting" && (
              <div className="flex flex-col items-center">
                <div className="h-20 w-20 border-4 border-primary/20 border-t-primary rounded-full animate-spin mb-8"></div>
                <h2 className="font-serif text-3xl font-bold text-foreground mb-4">সংরক্ষণ করা হচ্ছে...</h2>
                <p className="text-secondary-foreground">দয়া করে অপেক্ষা করুন, আপনার স্মৃতিটি আর্কাইভে জমা হচ্ছে।</p>
              </div>
            )}
            
            {step === "success" && (
              <div className="flex flex-col items-center">
                <div className="h-24 w-24 bg-success/10 rounded-full flex items-center justify-center mb-8">
                  <CheckCircle2 className="h-12 w-12 text-success" />
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">আপনার স্মৃতি সংরক্ষণের পথে!</h2>
                <p className="text-lg text-secondary-foreground mb-8">
                  আমাদের টিম এটি দেখে প্রকাশ করবে। ভবিষ্যৎ প্রজন্মের জন্য ইতিহাস সংরক্ষণে অংশ নেওয়ার জন্য ধন্যবাদ।
                </p>
                <div className="flex gap-4">
                  <Button asChild variant="outline" className="border-border text-foreground hover:bg-secondary">
                    <Link href="/">হোমে ফিরে যান</Link>
                  </Button>
                  <Button 
                    onClick={() => { setStep("type"); setType(null); }}
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
