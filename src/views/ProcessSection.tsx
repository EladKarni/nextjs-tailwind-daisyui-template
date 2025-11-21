import { FC } from "react";
import SectionContainer from "@/ui/SectionContainer";
import IconCard from "@/components/IconCard";

interface ProcessStep {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ProcessSectionProps {
  title?: string;
  subtitle?: string;
  steps?: ProcessStep[];
}

const defaultSteps: ProcessStep[] = [
  {
    number: "01",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Discovery & Ideation",
    description: "We start by understanding your vision, goals, and challenges. Through collaborative workshops and research, we define the project scope and strategy.",
  },
  {
    number: "02",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    title: "Design & Prototyping",
    description: "Our design team creates intuitive interfaces and user experiences, delivering interactive prototypes for feedback and validation.",
  },
  {
    number: "03",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "Development & Testing",
    description: "We build your solution using modern technologies and best practices, with continuous testing to ensure quality and performance.",
  },
  {
    number: "04",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: "Launch & Support",
    description: "We deploy your solution to production and provide ongoing support, monitoring, and optimization to ensure continued success.",
  },
];

const ProcessSection: FC<ProcessSectionProps> = ({
  title = "Our Process",
  subtitle = "How We Work",
  steps = defaultSteps,
}) => {
  return (
    <SectionContainer sectionName="process" background="alt">
      <div className="text-center mb-16">
        <p className="text-primary font-semibold text-sm md:text-base uppercase tracking-wider mb-2">
          {subtitle}
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-base-content">
          {title}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            {/* Connector Line (hidden on last item and mobile) */}
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-primary/20 z-0" />
            )}

            <div className="relative z-10">
              {/* Number Badge */}
              <div className="inline-block bg-primary text-primary-content font-bold text-lg px-4 py-2 rounded-full mb-4">
                {step.number}
              </div>

              <IconCard
                icon={step.icon}
                title={step.title}
                description={step.description}
                variant="glass"
              />
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default ProcessSection;
