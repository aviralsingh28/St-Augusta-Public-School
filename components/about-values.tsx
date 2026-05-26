import { Scale, Trophy, Shield, Users, Lightbulb, Globe } from "lucide-react"

const coreValues = [
  {
    title: "Discipline",
    description: "Fostering self-control, responsibility, and respect for rules and authority.",
    icon: Scale,
  },
  {
    title: "Excellence",
    description: "Pursuing the highest standards in academics, sports, and extracurricular activities.",
    icon: Trophy,
  },
  {
    title: "Integrity",
    description: "Promoting honesty, transparency, and ethical conduct in all dealings.",
    icon: Shield,
  },
  {
    title: "Inclusivity",
    description: "Creating a welcoming environment where every student feels valued and respected.",
    icon: Users,
  },
  {
    title: "Innovation",
    description: "Encouraging creative thinking and embracing modern educational approaches.",
    icon: Lightbulb,
  },
  {
    title: "Community",
    description: "Building strong bonds between students, staff, parents, and the wider community.",
    icon: Globe,
  },
]

export function AboutValues() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-primary mb-12 text-center">Core Values</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreValues.map((value, index) => {
            const IconComponent = value.icon
            const colorClass = index % 3 === 0 ? "text-primary" : index % 3 === 1 ? "text-[#76001F]" : "text-[#76001F]"
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-lg border border-accent/20 hover:border-accent hover:shadow-lg transition-all group"
              >
                <IconComponent className={`w-12 h-12 mb-4 ${colorClass} group-hover:scale-110 transition-transform`} />
                <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
