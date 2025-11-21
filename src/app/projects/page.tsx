import ProjectCard from "@/components/ProjectCard";
import SectionContainer from "@/ui/SectionContainer";

// This will be replaced with actual data from Payload CMS
const projects = [
  {
    title: "E-Commerce Platform",
    description: "A modern e-commerce solution with real-time inventory management, secure payment processing, and personalized shopping experiences. Built with cutting-edge technologies for optimal performance.",
    image: "https://picsum.photos/1200/800?random=3",
    slug: "ecommerce-platform",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Redis"],
    category: "Web Development",
    featured: true,
  },
  {
    title: "Healthcare Dashboard",
    description: "Comprehensive patient management system with appointment scheduling, medical records, and telemedicine capabilities. HIPAA-compliant and highly secure.",
    image: "https://picsum.photos/1200/800?random=4",
    slug: "healthcare-dashboard",
    technologies: ["React", "Node.js", "MongoDB", "AWS", "WebRTC"],
    category: "Enterprise",
  },
  {
    title: "Fitness Tracking App",
    description: "Mobile application for tracking workouts, nutrition, and health metrics with social features and AI-powered recommendations for better fitness outcomes.",
    image: "https://picsum.photos/1200/800?random=5",
    slug: "fitness-app",
    technologies: ["React Native", "Firebase", "TensorFlow", "Swift"],
    category: "Mobile",
  },
  {
    title: "Real Estate Platform",
    description: "Property listing and management system with virtual tours, mortgage calculators, and agent matching features for seamless real estate transactions.",
    image: "https://picsum.photos/1200/800?random=6",
    slug: "real-estate-platform",
    technologies: ["Vue.js", "Laravel", "MySQL", "Mapbox"],
    category: "Web Development",
  },
  {
    title: "Learning Management System",
    description: "Comprehensive educational platform with course management, video streaming, assessments, and progress tracking for institutions and educators.",
    image: "https://picsum.photos/1200/800?random=7",
    slug: "learning-management-system",
    technologies: ["Angular", "Django", "PostgreSQL", "AWS S3"],
    category: "EdTech",
  },
  {
    title: "Food Delivery App",
    description: "On-demand food delivery platform connecting restaurants with customers, featuring real-time tracking, payment processing, and ratings system.",
    image: "https://picsum.photos/1200/800?random=8",
    slug: "food-delivery-app",
    technologies: ["React Native", "Node.js", "MongoDB", "Socket.io"],
    category: "Mobile",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-24">
      <SectionContainer sectionName="all-projects" background="base" noPadding={false}>
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm md:text-base uppercase tracking-wider mb-2">
            Portfolio
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-base-content mb-6">
            Our Projects
          </h1>
          <p className="text-lg md:text-xl text-base-content/70 max-w-3xl mx-auto">
            Explore our portfolio of successful projects across various industries. Each project showcases our commitment to quality, innovation, and client satisfaction.
          </p>
        </div>

        {/* Filter/Category Section - Placeholder for future enhancement */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["All", "Web Development", "Mobile", "Enterprise", "EdTech"].map((category) => (
            <button
              key={category}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                category === "All"
                  ? "bg-primary text-primary-content"
                  : "bg-base-200 text-base-content hover:bg-base-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              slug={project.slug}
              technologies={project.technologies}
              category={project.category}
              glassMorphism={true}
              featured={project.featured}
            />
          ))}
        </div>
      </SectionContainer>
    </main>
  );
}

export const metadata = {
  title: "Our Projects | YK Innovations",
  description: "Explore our portfolio of successful projects across web development, mobile apps, and enterprise solutions.",
};
