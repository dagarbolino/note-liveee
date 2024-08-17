import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ButtonContactProps {
  onClose: () => void;
}

const ButtonContact: React.FC<ButtonContactProps> = ({ onClose }) => {
  return (
    <Button 
      className="bg-orange-500 hover:bg-orange-600 text-white mt-4"
      onClick={onClose}
    >
      <Link href="/dashboard/curriculums/curriculum/addContact">
        Créer votre fiche contact
      </Link>
    </Button>
  )
}

export default ButtonContact
