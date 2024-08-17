import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ButtonHoobyProps {
  onClose: () => void;
}

const ButtonHooby: React.FC<ButtonHoobyProps> = ({ onClose }) => {
  return (
    <Button className="bg-orange-500 hover:bg-orange-600 text-white mt-4" onClick={onClose}>
      <Link href="/dashboard/curriculums/createTitles/create">Créer un nouveau hobby</Link>
    </Button>
  )
}

export default ButtonHooby
