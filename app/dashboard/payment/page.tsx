import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { createCustomerPortal, createSubscription, getDataStripeUser } from '@/lib/actionsStripe'
import { getUser } from '@/lib/actionsUsers'
import BadgePremium from '@/public/premium-badge-svgrepo-com.svg'
import Image from 'next/image'

export default async function PagePayment() {
  const user = await getUser()
  const dataStripe = await getDataStripeUser(user?.id as string)

  const itemsPremium = [
    { name: "Hébergement Web fiable et sécurisé" },
    { name: "Conception responsive et optimisée" },
    { name: "Fonctionnalités avancées" },
    { name: "Support technique et mises à jour" },
    { name: "Sauvegarde des données" },
    { name: "Référencement naturel" },
    { name: "Statistiques de visites" },
  ]

  if (dataStripe?.status === "active") {
    return (
      <div className="max-w-lg mx-auto space-y-4 mt-3">
        <Card className='flex flex-col'>
          <CardContent className='py-8'>
            <h3 className="text-md font-black uppercase bg-orange-900 text-orange-500 p-3 rounded-md inline">
              Pass Premium
            </h3>
            <p className="m-4 text-sm text-muted-foreground">Modifier votre abonnement premium</p>
            <Image src={BadgePremium} width={100} height={100} alt='badge' className='block my-4' />

            <form className='w-full mt-4' action={createCustomerPortal}>
              <Button className='bg-orange-500 hover:bg-orange-600 text-white w-full'>
                Modifier mon abonnement
              </Button>
            </form>
            
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className='max-w-lg mx-auto space-y-4 mt-3'>
      <Card className="flex flex-col">
        <CardContent className="py-8">
          <div>
            <h3 className="text-md font-black uppercase bg-orange-900 bg-opacity-20 text-orange-500 p-3 rounded-e-md inline">
              Pass Premium
            </h3>
          </div>
          <div className="mt-4 text-6xl font-black">
            <span>19.99€</span>
            <span className="text-sm text-muted-foreground">/mois</span>
          </div>
          <p className="mt-4 text-muted-foreground">
            Accédez à des fonctionnalités web avancées et bénéficiez d&apos;une expérience inégalée avec notre pass premium!
          </p>
          <div className="flex-1 flex-col justify-between px-6 py-4 bg-secondary rounded-lg space-y-3 m-1 p-3 mt-3">
            <ul className='space-y-3'>
              {itemsPremium.map((item, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item.name}</span>
                </li>
              ))}
            </ul>
            <form action="" className="w-full mt-4">
              <Button className='bg-orange-500 hover:bg-orange-600 text-white'>Devenir membre Premium</Button>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}