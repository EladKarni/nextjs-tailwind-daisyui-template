import { FC } from "react";
import SectionContainer from "@/ui/SectionContainer";
import ProjectCard from "@/components/ProjectCard";
import CTAButton from "@/ui/CTAButton";

interface Project {
  title: string;
  description: string;
  image: string;
  slug: string;
  technologies?: string[];
  category?: string;
  featured?: boolean;
}

interface FeaturedProjectsSectionProps {
  title?: string;
  subtitle?: string;
  projects?: Project[];
  showViewAll?: boolean;
}

const defaultProjects: Project[] = [
  {
    title: "E-Commerce Platform",
    description: "A modern e-commerce solution with real-time inventory management, secure payment processing, and personalized shopping experiences.",
    image: "https://picsum.photos/1200/800?random=3",
    slug: "ecommerce-platform",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    category: "Web Development",
    featured: true,
  },
  {
    title: "Healthcare Dashboard",
    description: "Comprehensive patient management system with appointment scheduling, medical records, and telemedicine capabilities.",
    image: "https://picsum.photos/1200/800?random=4",
    slug: "healthcare-dashboard",
    technologies: ["React", "Node.js", "MongoDB", "AWS"],
    category: "Enterprise",
  },
  {
    title: "Fitness Tracking App",
    description: "Mobile application for tracking workouts, nutrition, and health metrics with social features and AI-powered recommendations.",
    image: "https://picsum.photos/1200/800?random=5",
    slug: "fitness-app",
    technologies: ["React Native", "Firebase", "TensorFlow"],
    category: "Mobile",
  },
];

const FeaturedProjectsSection: FC<FeaturedProjectsSectionProps> = ({
  title = "Featured Projects",
  subtitle = "Our Work",
  projects = defaultProjects,
  showViewAll = true,
}) => {
  return (
    <SectionContainer sectionName="projects" background="alt">
      <div className="text-center mb-16">
        <p className="text-primary font-semibold text-sm md:text-base uppercase tracking-wider mb-2">
          {subtitle}
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-base-content">
          {title}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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

      {showViewAll && (
        <div className="text-center">
          <CTAButton href="/projects" variant="ghost" size="lg">
            View All Projects
          </CTAButton>
        </div>
      )}
    </SectionContainer>
  );
};

export default FeaturedProjectsSection;
