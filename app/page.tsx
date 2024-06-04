import Profile from "@/components/shared/profile";
import TimelineSection from "@/components/shared/timeline-section";
import { education, experience } from "@/constants";

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <Profile />
      <TimelineSection
        title="Éducation"
        subtitle="Formation académique"
        items={education}
        isEducation={true}
      />
      <TimelineSection
        title="Expérience"
        subtitle="Parcours professionnel"
        items={experience}
        isEducation={false}
      />
    </div>
  );
}
