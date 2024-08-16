"use client"

import { Button} from "@/components/ui/button"
import { toast } from 'react-toastify';
import { Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { deleteCurriculum } from "@/lib/actionsCurriculums";

interface ButtonDeleteProps {
  id: string
}



export default function ButtonDelete({id}: ButtonDeleteProps) {

  const handleSubmit = ()=> {
    toast.success('Note supprimée avec succès')
  }

  return (
    <form action={deleteCurriculum} onClick={handleSubmit}>
      <Input type="hidden" name="id" value={id} />
      <Button type="submit" className="bg-red-500 hover:bg-red-600 text-white mt-1">
        <Trash2 />
      </Button>
      
    </form>
  )
}
