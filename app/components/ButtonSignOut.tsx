"use client"

import { Button } from "@/components/ui/button"
import { signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import { LogOut } from 'lucide-react';


export default function ButtonSignOut() {

  const router = useRouter()

  const handleSignOut = async () => {
    await signOut()
    router.push("/")
  }

  return (
    <div className="flex items-center justify-end mb-2 mt-2 lg:mt-0 p-3">
      <Button onClick={handleSignOut}
        className="bg-orange-500 hover:bg-orange-600 text-white">
            <LogOut/>
      </Button>

    </div>
  )

}
