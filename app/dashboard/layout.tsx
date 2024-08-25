import DashboardNav from "../components/DashboardNav"
import ButtonSignOut from "../components/ButtonSignOut"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {getUser} from "@/lib/actionsUsers";
import {stripe} from "@/lib/stripe";
import { prisma } from "@/lib/db";



export default async function DashboardLayout({ children }: Readonly<{ children: React.ReactNode }>) {

  const user = await getUser();

  if(!user){
    return <div>Veuillez vous connecter</div>
  }
  if(!user?.stripeCustomerId){
    const stripeCustomer = await stripe.customers.create({
      email: user?.email as string,
    });

    await prisma.user.update({
      where: {
        id: user?.id as string,
      },
      data: {
        stripeCustomerId: stripeCustomer.id as string,
      }
    })
  }


  return (
    <section className=" mx-auto md:flex md:items-center md:gap-4 h-screen w-full mt-2 p-2">

      <DashboardNav/>


      <div className="w-full h-full">
        <ButtonSignOut/>
        {children}
        <ToastContainer />
      </div>

    </section>
  )

}