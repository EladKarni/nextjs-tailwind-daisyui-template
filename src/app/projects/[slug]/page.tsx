import Image from "next/image";
import Link from "next/link";
import CTAButton from "@/ui/CTAButton";
import SectionContainer from "@/ui/SectionContainer";
import { notFound } from "next/navigation";

// Mock data - will be replaced with Payload CMS data
const projectsData: Record<string, any> = {
  "ecommerce-platform": {
    title: "E-Commerce Platform",
    description: "A comprehensive e-commerce solution built for modern retail businesses.",
    longDescription: "We developed a cutting-edge e-commerce platform that revolutionizes online shopping. The platform features real-time inventory management, secure payment processing with Stripe integration, personalized product recommendations using machine learning, and a seamless checkout experience. The admin dashboard provides comprehensive analytics and inventory management tools.",
    image: "https://picsum.photos/1920/1080?random=3",
    category: "Web Development",
    client: "RetailCo Inc.",
    duration: "6 months",
    year: "2024",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Redis", "Tailwind CSS"],
    features: [
      "Real-time inventory management",
      "Secure payment processing",
      "Personalized recommendations",
      "Advanced search and filtering",
      "Order tracking system",
      "Admin analytics dashboard",
    ],
    challenges: "Scaling to handle high traffic during peak shopping seasons while maintaining performance and data consistency.",
    solution: "Implemented Redis caching, database optimization, and deployed on a scalable cloud infrastructure with auto-scaling capabilities.",
    results: [
      { metric: "Page Load Time", value: "< 2 seconds" },
      { metric: "Conversion Rate", value: "+45%" },
      { metric: "Customer Satisfaction", value: "4.8/5.0" },
    ],
    gallery: [
      "https://picsum.photos/1200/800?random=9",
      "https://picsum.photos/1200/800?random=10",
      "https://picsum.photos/1200/800?random=11",
    ],
  },
  // Add other projects as needed
};

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projectsData[params.slug];

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] bg-base-200">
        <div className="relative w-full h-full">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-4">
              <div className="inline-block bg-primary text-primary-content px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
                {project.category}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                {project.title}
              </h1>
              <p className="text-xl md:text-2xl text-white/90">
                {project.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <SectionContainer sectionName="project-details" background="base">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <div>
              <h2 className="text-3xl font-bold text-base-content mb-4">Overview</h2>
              <p className="text-lg text-base-content/80 leading-relaxed">
                {project.longDescription}
              </p>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-3xl font-bold text-base-content mb-4">Key Features</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-base-content/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Challenge & Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-base-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-base-content mb-3">Challenge</h3>
                <p className="text-base-content/80">{project.challenges}</p>
              </div>
              <div className="bg-base-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-base-content mb-3">Solution</h3>
                <p className="text-base-content/80">{project.solution}</p>
              </div>
            </div>

            {/* Results */}
            <div>
              <h2 className="text-3xl font-bold text-base-content mb-6">Results</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {project.results.map((result: any, index: number) => (
                  <div key={index} className="bg-primary/10 rounded-lg p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">{result.value}</div>
                    <div className="text-sm text-base-content/70">{result.metric}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Project Info Card */}
            <div className="bg-base-200 rounded-lg p-6 space-y-4 sticky top-24">
              <div>
                <div className="text-sm font-semibold text-base-content/60 mb-1">Client</div>
                <div className="text-base-content">{project.client}</div>
              </div>
              <div>
                <div className="text-sm font-semibold text-base-content/60 mb-1">Duration</div>
                <div className="text-base-content">{project.duration}</div>
              </div>
              <div>
                <div className="text-sm font-semibold text-base-content/60 mb-1">Year</div>
                <div className="text-base-content">{project.year}</div>
              </div>
              <div>
                <div className="text-sm font-semibold text-base-content/60 mb-2">Technologies</div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech: string, index: number) => (
                    <span
                      key={index}
                      className="text-xs px-3 py-1 rounded-full bg-base-100 text-base-content"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 space-y-3">
                <CTAButton href="/#contact" variant="primary" size="md" className="w-full">
                  Start Your Project
                </CTAButton>
                <CTAButton href="/projects" variant="ghost" size="md" className="w-full">
                  View All Projects
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Gallery Section (if images exist) */}
      {project.gallery && project.gallery.length > 0 && (
        <SectionContainer sectionName="project-gallery" background="alt">
          <h2 className="text-3xl font-bold text-base-content mb-8 text-center">Project Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.gallery.map((image: string, index: number) => (
              <div key={index} className="relative h-64 rounded-lg overflow-hidden group">
                <Image
                  src={image}
                  alt={`${project.title} gallery image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </SectionContainer>
      )}

      {/* CTA Section */}
      <SectionContainer sectionName="project-cta" background="gradient">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-base-content mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-base-content/70 mb-8">
            Let's discuss how we can help bring your vision to life with innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/#contact" variant="primary" size="lg">
              Get in Touch
            </CTAButton>
            <CTAButton href="/projects" variant="ghost" size="lg">
              View More Projects
            </CTAButton>
          </div>
        </div>
      </SectionContainer>
    </main>
  );
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const project = projectsData[params.slug];

  if (!project) {
    return {
      title: "Project Not Found | YK Innovations",
    };
  }

  return {
    title: `${project.title} | YK Innovations`,
    description: project.description,
  };
}
