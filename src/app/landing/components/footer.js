import Logo from '/public/Logo.svg'
import Link from "next/link"
import Image from 'next/image'


const Footer = () => {
  return (
    <div className='w-full'>
      <div className='w-full laptop:max-w-[1152px] px-4 tablet:px-6 laptop:px-8 xl:px-0  mx-auto py-[40px] tablet:py-[80px] laptop:py-[100px]'>
        <div className='flex flex-col gap-10 laptop:flex-row laptop:items-start laptop:justify-between'>
          <a href="index.html" className="flex items-center">
            <Image src={Logo} className="w-[149px] h-[37px] mr-3"
              alt="PPTDesign Logo" />
          </a>

          <div className='flex flex-col gap-3 desktop:gap-4'>
            <p className='text-[16px] font-semibold leading-[22px] text-[#484848] mb-2'>PRODUCTS</p>
            <Link smooth href='/#works' className='text-sm font-normal text-[#484848] laptop:text-[16px] leading-[22px] '>How it works</Link>
            <Link smooth href='/#faq' className='text-sm font-normal text-[#484848] laptop:text-[16px] leading-[22px] '>Points system</Link>
            <Link smooth href='/#pricing' className='text-sm font-normal text-[#484848] laptop:text-[16px] leading-[22px] '>Leaderboard</Link>
          </div>
          <div className='flex flex-col gap-3 desktop:gap-4'>
            <p className='text-[16px] font-semibold leading-[22px] text-[#484848] mb-2'>LEGAL</p>
            <Link href='/terms' className='text-sm font-normal text-[#484848] laptop:text-[16px] leading-[22px] '>Terms and Conditions</Link>
            <Link href='/policy' className='text-sm font-normal text-[#484848] laptop:text-[16px] leading-[22px] '>Privacy policy</Link>
          </div>
          <div className='flex flex-col gap-3 desktop:gap-4'>
            <p className='text-[16px] font-semibold leading-[22px] text-[#484848] mb-2'>CONTACT INFORMATION</p>
            <a href="mailto:pixelgum.design@gmail.com" className='text-sm font-normal text-[#484848] laptop:text-[16px] leading-[22px] underline'>Pixelgum.design@gmail.com</a>
          </div>
        </div>
      </div>
    </div>)
}

export default Footer