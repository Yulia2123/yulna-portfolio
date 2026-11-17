import SectionStar from "@/components/SectionStar/SectionStar";
import css from "./SectionHeading.module.css";

interface SectionHeadingProps {
  children: React.ReactNode;
}

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <div className={css.heading}>
      <SectionStar />
      <h2>{children}</h2>
      <SectionStar />
    </div>
  );
}
