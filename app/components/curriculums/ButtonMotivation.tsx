import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ButtonMotivationProps {
  onClose: () => void;
  curriculumId: string;
}

const ButtonMotivation: React.FC<ButtonMotivationProps> = ({ onClose, curriculumId }) => {
  return (
    <Button
      className="bg-orange-500 hover:bg-orange-600 text-white mt-4"
      onClick={onClose}
    >
      <Link href={`/dashboard/curriculums/curriculum/${curriculumId}/motivation`}>
        Fiche de motivation
      </Link>
    </Button>
  )
}

export default ButtonMotivation

