
import Image from 'next/image'
import Button from './../../components/Buttons/Button'
import PointImage from '@/assets/Points.png'
const Points = () => {
  return (
    <div className='w-full bg-[#FFFCEC]'>
    <div className='w-full laptop:max-w-[1152px] px-4 tablet:px-6 laptop:px-8 desktop:px-0 mx-auto py-[50px] tablet:py-[80px] laptop:py-[100px]'>
    <div className="flex flex-col gap-[50px] tablet:gap-20 laptop:flex-row  laptop:justify-between laptop:items-center">
    <div className="">
           <Image src={PointImage} alt='Point' className='w-full laptop:w-[390px] desktop:w-[432px]'/>
         </div>

         <div className="laptop:w-[490px]">
           <div className="flex flex-col gap-4 tablet:gap-6">
           <p className="text-[#1C1C1C] font-bold text-20 tablet:text-24 laptop:text-32 whitespace-nowrap">Points and credit rewards</p>
           <p className="text-[#1C1C1C] font-normal text-16 tablet:text-20">Get points when you guess a correct word, increase your points score to earn more reputation, Invite your friends to play and earn more credits.</p>
           </div>

           <div className="mt-10 tablet:h-12 text-sm tablet:text-16">
             <Button text='Learn a new word'style='w-full tablet:w-fit whitespace-nowrap tablet:py-3 tablet:px-4' />
           </div>
         </div>

       
       </div>
       
  </div>
        </div>
  )
}

export default Points