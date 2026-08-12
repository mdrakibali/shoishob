import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function StepFormMetadata() {
  return (
    <>
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
    </>
  )
}
