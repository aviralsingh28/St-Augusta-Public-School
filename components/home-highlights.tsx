const highlights = [
  {
    icon: "👨‍🏫",
    title: "Highly Experienced Faculty",
    description:
      "Our qualified and dedicated teachers bring years of academic experience, mentoring students with care, discipline, and expertise.",
  },
  {
    icon: "📚",
    title: "Academic Excellence",
    description:
      "A well-structured curriculum aligned with modern education standards, focusing on conceptual clarity and lifelong learning.",
  },
  {
    icon: "🖥️",
    title: "Smart Learning Environment",
    description:
      "Technology-enabled teaching with smart boards, digital resources, and interactive learning methods for better understanding.",
  },
  {
    icon: "🏃‍♂️",
    title: "Sports & Physical Education",
    description:
      "Regular sports activities, yoga, and physical training to promote fitness, teamwork, and overall well-being.",
  },
  {
    icon: "🎨",
    title: "Co-Curricular Activities",
    description:
      "Opportunities in art, music, dance, debates, competitions, and cultural programs to encourage creativity and confidence.",
  },
  {
    icon: "🛡️",
    title: "Safe & Secure Campus",
    description:
      "A disciplined and secure campus with student safety as our top priority, ensuring a healthy and positive learning environment.",
  },
  {
    icon: "🤝",
    title: "Parent–Teacher Partnership",
    description:
      "Regular communication and meetings to ensure transparency, collaboration, and continuous student progress.",
  },
  {
    icon: "🌍",
    title: "Future-Ready Education",
    description:
      "Preparing students with critical thinking, communication skills, and confidence to succeed in a rapidly changing world.",
  },
]


export function HomeHighlights() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Why Choose SAPS?</h2>
          <p className="text-lg text-muted-foreground">Excellence in every aspect of education</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg border border-accent/20 hover:border-accent/50 hover:shadow-lg transition-all group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{highlight.icon}</div>
              <h3 className="text-xl font-bold text-primary mb-3">{highlight.title}</h3>
              <p className="text-muted-foreground">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
