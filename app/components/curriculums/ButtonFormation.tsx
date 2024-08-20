import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ButtonFormationProps {
  onClose: () => void;
  curriculumId: string;
}

const ButtonFormation: React.FC<ButtonFormationProps> = ({ onClose, curriculumId }) => {
  return (
    <Button className="bg-orange-500 hover:bg-orange-600 text-white mt-4"
      onClick={onClose}
    >
      <Link href={`/dashboard/curriculums/curriculum/${curriculumId}/formations`}>
        Liste des formations
      </Link>
    </Button>
  )
}

export default ButtonFormation
