export function AboutHistory() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-primary mb-12 text-center">Our Journey</h2>

        <div className="space-y-8">
          <div className="flex gap-6 md:gap-12">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-accent text-primary font-bold flex items-center justify-center mb-4">
                2019
              </div>
              <div className="w-1 h-32 bg-accent/30" />
            </div>
            <div className="pb-8">
              <h3 className="text-2xl font-bold text-primary mb-2">Foundation Year</h3>
              <p className="text-muted-foreground">
                St. Augusta Public School was established with a vision to provide quality education blending tradition
                with modernity.
              </p>
            </div>
          </div>

          <div className="flex gap-6 md:gap-12">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-accent text-primary font-bold flex items-center justify-center mb-4">
                2021
              </div>
              <div className="w-1 h-32 bg-accent/30" />
            </div>
            <div className="pb-8">
              <h3 className="text-2xl font-bold text-primary mb-2">Expansion & Growth</h3>
              <p className="text-muted-foreground">
                Expanded campus infrastructure with new buildings, modern laboratories, and digital learning centers to
                support growing student population.
              </p>
            </div>
          </div>

          <div className="flex gap-6 md:gap-12">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-accent text-primary font-bold flex items-center justify-center mb-4">
                2022
              </div>
              <div className="w-1 h-32 bg-accent/30" />
            </div>
            <div className="pb-8">
              <h3 className="text-2xl font-bold text-primary mb-2">Digital Transformation</h3>
              <p className="text-muted-foreground">
                Embraced digital learning platforms and innovative teaching methodologies to ensure continuity and
                quality of education.
              </p>
            </div>
          </div>

          <div className="flex gap-6 md:gap-12">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-accent text-primary font-bold flex items-center justify-center mb-4">
                2024
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary mb-2">Excellence Today</h3>
              <p className="text-muted-foreground">
                Today, SAPS stands as a beacon of excellence with hundreds of successful alumni making meaningful
                contributions to society. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
