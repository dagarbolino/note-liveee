import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Ban } from "lucide-react"
import Link from 'next/link'



export default function CancelPage() {
  return (
    <section className='w-full h-screen pt-20 text-center'>
      <Card className='w-[400px] mx-auto p-4'>
        <Ban className='text-red-500 text-8xl w-full text-center mb-3 size-28' />
        <h1 className='text-xl font-bold mb-2'>Paiement réussi</h1>
        <p className='text-muted-foreground mb-2 text-sm'>Vous êtes maintenant membre premium</p>
        <Link href='/'>
          <Button className='w-full bg-orange-500 hover:bg-orange-600 text-white'>Retour au tableau de bord</Button>
        </Link>

      </Card>
    </section>
  )
}