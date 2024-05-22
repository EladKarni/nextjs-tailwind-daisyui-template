import { faqItems } from "@/constants/faq";
import FAQSection from "@/views/faq";

export default function Home() {
  return (
    <main className="text-center max-w-[1100px] mx-4 xl:mx-auto">
      <h1>Tailwind + NextJS Accodion Example </h1>
      <FAQSection faqItems={faqItems} />
    </main>
  );
}
