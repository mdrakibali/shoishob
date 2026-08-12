import { SectionHeader } from "@/components/ui/section"
import { CheckCircle2 } from "lucide-react"

interface GameInstructionsProps {
  instructions: { title: string; description: string }[]
  rules: string[]
}

export function GameInstructions({ instructions, rules }: GameInstructionsProps) {
  return (
    <div className="mx-auto w-full max-w-4xl space-y-16">
      
      {/* Instructions Section */}
      <div>
        <SectionHeader 
          title="খেলার প্রস্তুতি" 
          description="কীভাবে খেলা শুরু করবেন তার ধাপসমূহ" 
          className="mb-8"
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {instructions.map((inst, index) => (
            <div 
              key={index} 
              className="bg-card text-card-foreground flex flex-col gap-4 rounded-xl border p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex items-center gap-4 border-b pb-4">
                <div className="bg-primary text-primary-foreground flex size-10 shrink-0 items-center justify-center rounded-lg text-lg font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold">{inst.title}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {inst.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Rules Section */}
      <div>
        <SectionHeader 
          title="খেলার নিয়মকানুন" 
          description="যে নিয়মগুলো মেনে চলতে হবে" 
          className="mb-8"
        />
        <div className="bg-surface border-border overflow-hidden rounded-xl border shadow-sm">
          <div className="flex flex-col">
            {rules.map((rule, index) => (
              <div 
                key={index} 
                className="flex items-start gap-4 border-b p-6 last:border-b-0 hover:bg-muted/50 transition-colors"
              >
                <div className="text-primary mt-1 shrink-0">
                  <CheckCircle2 className="size-6" />
                </div>
                <p className="text-foreground text-lg">{rule}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}
