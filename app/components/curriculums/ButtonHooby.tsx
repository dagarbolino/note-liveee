import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ButtonHoobyProps {
  onClose: () => void;
  curriculumId: string;
}

const ButtonHooby: React.FC<ButtonHoobyProps> = ({ onClose, curriculumId }) => {
  return (
    <Button className="bg-orange-500 hover:bg-orange-600 text-white mt-4"
      onClick={onClose}
    >
      <Link href={`/dashboard/curriculums/curriculum/${curriculumId}/hobbies/create`}>
        Liste des hobbies
      </Link>
    </Button>
  )
}

export default ButtonHooby
