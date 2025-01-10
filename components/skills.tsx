import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";

export default function Skills() {
  const { ref } = useSectionInView({ sectionName: "Skills", threshold: 0.75 });
  return (
    <section>
      <SectionHeading title="My Skills" />
    </section>
  );
}
