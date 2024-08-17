import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ButtonContactProps {
  onClose: () => void;
  curriculumId: string;
}

const ButtonContact: React.FC<ButtonContactProps> = ({ onClose, curriculumId }) => {
  return (
    <Button
      className="bg-orange-500 hover:bg-orange-600 text-white mt-4"
      onClick={onClose}
    >
      <Link href={`/dashboard/curriculums/curriculum/${curriculumId}/contact`}>
        Fiche contact
      </Link>
    </Button>
  )
}

export default ButtonContact

