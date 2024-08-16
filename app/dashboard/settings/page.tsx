"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { getUser, updateUser } from "@/lib/actionsUsers"
import Image from "next/image"
import { toast } from "react-toastify"




export default async function PageSettings() {

  const user = await getUser()

  const handleSubmit = () => {
    toast.success("Votre profil a été mis à jour")
  }


  return (
    <section className="border border-gray-200 rounded-md p-3">
      <h2 className="text-3xl uppercase font-black">Settings</h2>
      <p className="text-lg text-muted-foreground">Vos paramètres de profil</p>

      <div className="w-12 bg-white my-2 mx-1 h-[1px]"></div>

      <form action={updateUser} onSubmit={handleSubmit}>
        <Input type="hidden" name="id" value={user?.id} />

        <Card>
          <CardHeader>
            <CardTitle>Paramètres globaux</CardTitle>
            <CardDescription>Modifier vos informations puis sauvegarder</CardDescription>
          </CardHeader>
          <CardContent>



            {user?.image && (
              <Image width={100} height={100} alt="Profile image" src={user?.image}
                className="rounded-full w-16 h-16 object-contain mb-4"
              />
            )}



            <div className="space-y-1 mb-2">
              <Label htmlFor="idUser">ID</Label>
              <Input id="idUser" name="idUser" type="text" disabled defaultValue={user?.id || ''} />
            </div>
            <div className="space-y-1 mb-2">
              <Label htmlFor="name">Nom</Label>
              <Input id="name" name="name" type="text" defaultValue={user?.name || ''} />
            </div>
            <div className="space-y-1 mb-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" disabled defaultValue={user?.email || ''} />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="">Modifier</Button>
          </CardFooter>
        </Card>
      </form>

      <form action="">
        <Input type="hidden" name="id" value="" />
        <Button className="bg-red-500 mx-1 my-2 hover:bg-red-600 text-white">Supprimer votre compte</Button>



      </form>
    </section>
  )
}