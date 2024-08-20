import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ButtonLanguageProps {
  onClose: () => void;
  curriculumId: string;
}

const ButtonLanguage: React.FC<ButtonLanguageProps> = ({ onClose, curriculumId }) => {
  return (
    <Button
      className="bg-orange-500 hover:bg-orange-600 text-white mt-4"
      onClick={onClose}
    >
      <Link href={`/dashboard/curriculums/curriculum/${curriculumId}/languages`}>
        Liste des langues
      </Link>
    </Button>
  )
}

export default ButtonLanguage

