import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ButtonExperienceProps {
  onClose: () => void;
  curriculumId: string;
}

const ButtonExperience: React.FC<ButtonExperienceProps> = ({ onClose, curriculumId }) => {
  return (
    <Button className="bg-orange-500 hover:bg-orange-600 text-white mt-4"
      onClick={onClose}
    >
      <Link href={`/dashboard/curriculums/curriculum/${curriculumId}/experiences`}>
        Liste des experiences
      </Link>
    </Button>
  )
}

export default ButtonExperience
