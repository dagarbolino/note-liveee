import { Button } from '@/components/ui/button';
import {signIn} from 'next-auth/react';

export default function ButtonsProvider() {
  return (
    <div className='flex flex-col space-y-4'>
      <Button onClick={()=> signIn('google')}>Continer avec Google</Button>
      <Button onClick={()=> signIn('github')}>Continer avec Github</Button>
    </div>
  )
}
