import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ButtonSkillProps {
  onClose: () => void;
  curriculumId: string;
}

const ButtonSkill: React.FC<ButtonSkillProps> = ({ onClose, curriculumId }) => {
  return (
    <Button className="bg-orange-500 hover:bg-orange-600 text-white mt-4"
      onClick={onClose}
    >
      <Link href={`/dashboard/curriculums/curriculum/${curriculumId}/skills`}>
        Liste des skills
      </Link>
    </Button>
  )
}

export default ButtonSkill
