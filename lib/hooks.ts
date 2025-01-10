import { useActiveSectionContext } from "@/context/active-section-context";
import type { SectionName } from "./types";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";


type useSectionInViewProps = {
    sectionName: SectionName;
    threshold: number;
}

export const useSectionInView = ({sectionName, threshold} : useSectionInViewProps) => {
  const { ref, inView } = useInView({
    threshold: threshold,
  });

  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref
  }
};
