import { ArrowUpRight, Minus, Plus } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const page = () => {

  const companyLogos = [
    "/assets/hero/companylogo.svg",
    "/assets/hero/companylogo1.svg",
    "/assets/hero/companylogo2.svg",
    "/assets/hero/companylogo3.svg",
    "/assets/hero/companylogo4.svg",
    "/assets/hero/companylogo5.svg",
  ]

  return (

    // Hero Section

    <div className='md:px-25 px-5 w-full'>

      <section>

        <div className=' w-full grid grid-cols-1 md:grid-cols-[auto_auto] md:gap-30 mt-5 md:mt-17.5 items-center justify-between'>

          {/* Left side */}
          <div className='grid grid-cols-1 md:gap-8.75 gap-4 text-left justify-start bg-white'>

            <h1 className='text-4xl md:text-6xl font-medium'>
              Navigating the digital landscape for success
            </h1>

            <h4 className='text-[14px] md:text-[20px]'>
              Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
            </h4>

            <button className=' bg-black text-white px-5 md:px-8.75 md:py-5 py-3.5 rounded-[14px] cursor-pointer w-max'>
              <h4 className='text-[14px] md:text-[20px]'>Book a consultation</h4>
            </button>

          </div>

          {/* Right side */}
          <div className='md:max w-full md:block flex items-center justify-center md:mt-0 mt-10'>
            {/* Desktop */}
            <Image src={"/assets/hero/Illustration.svg"} width={600.46} height={515} alt='Illustration' className='md:block hidden' />

            {/* Mobile */}
            <Image src={"/assets/hero/Illustration.svg"} width={250} height={415} alt='Illustration' className='md:hidden block ml-auto mr-auto' />
          </div>
        </div>

        {/* Company logos */}

        <div className=' flex items-center md:flex-nowrap flex-wrap md:gap-0 gap-2 justify-evenly ml-auto mr-auto md:mt-17.5 mt-10 grayscale-100 md:w-full w-full'>
          {
            companyLogos.map((logo, index) => {
              return (
                <Image key={index} src={logo} width={100} height={50} alt='Company Logo' className=' md:w-30 w-17' />
              )
            })
          }
        </div>

      </section>

      {/* Services section */}

      <section className=' md:mt-35 mt-17'>

        {/* Heading */}

        <div className=' grid grid-cols-1 md:grid-cols-[auto_auto] md:place-items-center place-items-start place-content-start md:gap-10 gap-6 w-full'>
          <h2 className=' md:text-[40px] text-[23px] bg-[#B9FF66] font-medium px-1.75 rounded-[7px] w-max'>
            Services
          </h2>

          <p className=' md:text-[18px] text-[14px] font-normal md:w-150 w-full'>
            At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
          </p>
        </div>

        {/* Services cards */}

        <div className=' w-full grid grid-cols-1 md:grid-cols-2 gap-10 mt-20'>

          {/* Card 1 */}
          <div className="md:w-150 md:h-77.5 h-max bg-[#F3F3F3] rounded-[45px] md:p-12.5 p-6 box-border grid grid-cols-1 md:grid-cols-2 border border-black shadow-[0px_5px_0px_#191A23]">
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h3 className="md:text-[30px] text-[20px] bg-[#B9FF66] font-medium px-1.75 rounded-[7px] w-max">
                  Search engine
                </h3>
                <h3 className="md:text-[30px] text-[20px] bg-[#B9FF66] font-medium px-1.75 rounded-[7px] w-max">
                  Optimization
                </h3>
              </div>

              {/* Desktop Learn More */}
              <div className="hidden md:flex items-center justify-between w-max md:gap-3.75 gap-2">
                <Image src="/assets/services/arrowicon.svg" alt="Arrow" width={41} height={41} className="md:w-10.25 w-7.5" />
                <p className="md:text-[20px] text-[14px] font-normal cursor-pointer">Learn more</p>
              </div>
            </div>

            {/* Illustration */}
            <div className="w-full mt-6 md:mt-0 flex items-center justify-center">
              <Image src="/assets/services/illustration.svg" alt="SEO" width={210} height={166.05} className="md:w-52.5 w-50" />
            </div>

            {/* Mobile Learn More */}
            <div className="md:hidden flex items-center justify-between w-max gap-2 mt-6">
              <Image src="/assets/services/arrowicon.svg" alt="Arrow" width={41} height={41} className="w-7.5" />
              <p className="text-[14px] font-normal cursor-pointer">Learn more</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="md:w-150 md:h-77.5 h-max bg-[#B9FF66] rounded-[45px] md:p-12.5 p-6 box-border grid grid-cols-1 md:grid-cols-2 border border-black shadow-[0px_5px_0px_#191A23]">
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h3 className="md:text-[30px] text-[20px] bg-[#FFFFFF] font-medium px-1.75 rounded-[7px] w-max">
                  Pay-per-click
                </h3>
                <h3 className="md:text-[30px] text-[20px] bg-[#FFFFFF] font-medium px-1.75 rounded-[7px] w-max">
                  Advertising
                </h3>
              </div>

              {/* Desktop Learn More */}
              <div className="hidden md:flex items-center justify-between w-max md:gap-3.75 gap-2">
                <Image src="/assets/services/arrowicon.svg" alt="Arrow" width={41} height={41} className="md:w-10.25 w-7.5" />
                <p className="md:text-[20px] text-[14px] font-normal cursor-pointer">Learn more</p>
              </div>
            </div>

            {/* Illustration */}
            <div className="w-full mt-6 md:mt-0 flex items-center justify-center">
              <Image src="/assets/services/illustration2.svg" alt="PPC" width={210} height={166.05} className="md:w-52.5 w-50" />
            </div>

            {/* Mobile Learn More */}
            <div className="md:hidden flex items-center justify-between w-max gap-2 mt-6">
              <Image src="/assets/services/arrowicon.svg" alt="Arrow" width={41} height={41} className="w-7.5" />
              <p className="text-[14px] font-normal cursor-pointer">Learn more</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="md:w-150 md:h-77.5 h-max bg-[#191A23] rounded-[45px] md:p-12.5 p-6 box-border grid grid-cols-1 md:grid-cols-2 border border-black shadow-[0px_5px_0px_#191A23]">
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h3 className="md:text-[30px] text-[20px] bg-[#FFFFFF] text-black font-medium px-1.75 rounded-[7px] w-max">
                  Social Media
                </h3>
                <h3 className="md:text-[30px] text-[20px] bg-[#FFFFFF] text-black font-medium px-1.75 rounded-[7px] w-max">
                  Marketing
                </h3>
              </div>

              {/* Desktop Learn More */}
              <div className="hidden md:flex items-center justify-between w-max md:gap-3.75 gap-2">
                <Image src="/assets/services/arrowicon2.svg" alt="Arrow" width={41} height={41} className="md:w-10.25 w-7.5" />
                <p className="md:text-[20px] text-[14px] font-normal cursor-pointer text-white">Learn more</p>
              </div>
            </div>

            {/* Illustration */}
            <div className="w-full mt-6 md:mt-0 flex items-center justify-center">
              <Image src="/assets/services/illustration3.svg" alt="Social Media" width={210} height={166.05} className="md:w-52.5 w-50" />
            </div>

            {/* Mobile Learn More */}
            <div className="md:hidden flex items-center justify-between w-max gap-2 mt-6">
              <Image src="/assets/services/arrowicon2.svg" alt="Arrow" width={41} height={41} className="w-7.5" />
              <p className="text-[14px] font-normal cursor-pointer text-white">Learn more</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="md:w-150 md:h-77.5 h-max bg-[#F3F3F3] rounded-[45px] md:p-12.5 p-6 box-border grid grid-cols-1 md:grid-cols-2 border border-black shadow-[0px_5px_0px_#191A23]">
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h3 className="md:text-[30px] text-[20px] bg-[#B9FF66] font-medium px-1.75 rounded-[7px] w-max">
                  Email
                </h3>
                <h3 className="md:text-[30px] text-[20px] bg-[#B9FF66] font-medium px-1.75 rounded-[7px] w-max">
                  Marketing
                </h3>
              </div>

              {/* Desktop Learn More */}
              <div className="hidden md:flex items-center justify-between w-max md:gap-3.75 gap-2">
                <Image src="/assets/services/arrowicon.svg" alt="Arrow" width={41} height={41} className="md:w-10.25 w-7.5" />
                <p className="md:text-[20px] text-[14px] font-normal cursor-pointer">Learn more</p>
              </div>
            </div>

            {/* Illustration */}
            <div className="w-full mt-6 md:mt-0 flex items-center justify-center">
              <Image src="/assets/services/illustration4.svg" alt="Email Marketing" width={210} height={166.05} className="md:w-52.5 w-50" />
            </div>

            {/* Mobile Learn More */}
            <div className="md:hidden flex items-center justify-between w-max gap-2 mt-6">
              <Image src="/assets/services/arrowicon.svg" alt="Arrow" width={41} height={41} className="w-7.5" />
              <p className="text-[14px] font-normal cursor-pointer">Learn more</p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="md:w-150 md:h-77.5 h-max bg-[#B9FF66] rounded-[45px] md:p-12.5 p-6 box-border grid grid-cols-1 md:grid-cols-2 border border-black shadow-[0px_5px_0px_#191A23]">
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h3 className="md:text-[30px] text-[20px] bg-[#FFFFFF] font-medium px-1.75 rounded-[7px] w-max">
                  Content
                </h3>
                <h3 className="md:text-[30px] text-[20px] bg-[#FFFFFF] font-medium px-1.75 rounded-[7px] w-max">
                  Creation
                </h3>
              </div>

              {/* Desktop Learn More */}
              <div className="hidden md:flex items-center justify-between w-max md:gap-3.75 gap-2">
                <Image src="/assets/services/arrowicon.svg" alt="Arrow" width={41} height={41} className="md:w-10.25 w-7.5" />
                <p className="md:text-[20px] text-[14px] font-normal cursor-pointer">Learn more</p>
              </div>
            </div>

            {/* Illustration */}
            <div className="w-full mt-6 md:mt-0 flex items-center justify-center">
              <Image src="/assets/services/illustration5.svg" alt="Content Creation" width={210} height={166.05} className="md:w-52.5 w-50" />
            </div>

            {/* Mobile Learn More */}
            <div className="md:hidden flex items-center justify-between w-max gap-2 mt-6">
              <Image src="/assets/services/arrowicon.svg" alt="Arrow" width={41} height={41} className="w-7.5" />
              <p className="text-[14px] font-normal cursor-pointer">Learn more</p>
            </div>
          </div>

          {/* Card 6 */}
          <div className="md:w-150 md:h-77.5 h-max bg-[#191A23] rounded-[45px] md:p-12.5 p-6 box-border grid grid-cols-1 md:grid-cols-2 border border-black shadow-[0px_5px_0px_#191A23]">
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h3 className="md:text-[30px] text-[20px] bg-[#B9FF66] text-black font-medium px-1.75 rounded-[7px] w-max">
                  Analytics And
                </h3>
                <h3 className="md:text-[30px] text-[20px] bg-[#B9FF66] text-black font-medium px-1.75 rounded-[7px] w-max">
                  Tracking
                </h3>
              </div>

              {/* Desktop Learn More */}
              <div className="hidden md:flex items-center justify-between w-max md:gap-3.75 gap-2">
                <Image src="/assets/services/arrowicon2.svg" alt="Arrow" width={41} height={41} className="md:w-10.25 w-7.5" />
                <p className="md:text-[20px] text-[14px] font-normal cursor-pointer text-white">Learn more</p>
              </div>
            </div>

            {/* Illustration */}
            <div className="w-full mt-6 md:mt-0 flex items-center justify-center">
              <Image src="/assets/services/illustration6.svg" alt="Analytics" width={210} height={166.05} className="md:w-52.5 w-50" />
            </div>

            {/* Mobile Learn More */}
            <div className="md:hidden flex items-center justify-between w-max gap-2 mt-6">
              <Image src="/assets/services/arrowicon2.svg" alt="Arrow" width={41} height={41} className="w-7.5" />
              <p className="text-[14px] font-normal cursor-pointer text-white">Learn more</p>
            </div>
          </div>

        </div>

      </section>

      {/* Lets make things happen */}
      <section className=''>

        <div className=' grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#F3F3F3] rounded-[45px] md:p-15 p-7.5 md:py-15 py-11 mt-[123.5px]'>

          {/* Copy and CTA */}
          <div className=' grid grid-cols-1 md:gap-6.5 gap-3.5'>
            <h3 className=' md:text-[30px] text-[24px] font-medium text-left'>
              Let’s make things happen
            </h3>

            <p className=' md:text-[18px] text-[14px] font-normal'>
              Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
            </p>

            <button className=' bg-black text-white md:px-8.75 md:py-5 px-5 py-3.5 rounded-[14px] cursor-pointer w-max'>
              <h4 className='md:text-[20px] text-[14px]'>Get your free proposal</h4>
            </button>
          </div>

          <div className=' grid grid-cols-1 place-items-center place-content-center relative'>
            <Image src="/assets/ctacard/illustration.svg" alt="Illustration" width={400} height={400} className=' md:absolute relative md:w-100 w-50' />
          </div>

        </div>

      </section>

      <section>

        {/* Heading */}

        <div className=' grid grid-cols-1 md:grid-cols-[auto_auto] md:place-items-center place-items-start place-content-start md:gap-10 gap-6 w-full md:mt-35 mt-17'>
          <h2 className=' md:text-[40px] text-[23px] bg-[#B9FF66] font-medium px-1.75 rounded-[7px] w-max'>
            Case Studies
          </h2>

          <p className=' md:text-[18px] text-[14px] font-normal md:w-150 w-full'>
            Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies
          </p>
        </div>

        {/* Card */}

        <div className=' block md:flex items-center justify-evenly bg-[#191A23] w-full mt-20 px-10 md:px-12.5 md:py-17.5 py-15 rounded-[45px] gap-16'>

          {/* Column 1 */}
          <div className="flex-1 flex flex-col justify-between md:gap-5 gap-2 md:pr-10">
            <p className="text-[14px] md:text-[18px] font-normal text-white leading-relaxed">
              For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.
            </p>

            <p className="text-[#B9FF66] text-[15px] md:text-[20px] font-normal cursor-pointer flex items-center md:gap-3.75 gap-1.5 w-max">
              Learn more
              <Image src="/assets/case-studies/arrow-icon.svg" alt="Arrow" width={17.32} height={10} className="md:w-[17.32px] w-3" />
            </p>
          </div>

          {/* Divider 1 */}
          <div className="w-full md:w-px h-px md:h-auto bg-white md:bg-white self-stretch md:my-0 my-6" />

          {/* Column 2 */}
          <div className="flex-1 flex flex-col justify-between md:gap-5 gap-2 md:px-10">
            <p className="text-[14px] md:text-[18px] font-normal text-white leading-relaxed">
              For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.
            </p>

            <p className="text-[#B9FF66] text-[15px] md:text-[20px] font-normal cursor-pointer flex items-center md:gap-3.75 gap-1.5 w-max">
              Learn more
              <Image src="/assets/case-studies/arrow-icon.svg" alt="Arrow" width={17.32} height={10} className="md:w-[17.32px] w-3" />
            </p>
          </div>

          {/* Divider 2 */}
          <div className="w-full md:w-px h-px md:h-auto bg-white md:bg-white self-stretch md:my-0 my-6" />

          {/* Column 3 */}
          <div className="flex-1 flex flex-col justify-between md:gap-5 gap-2 md:pl-10">
            <p className="text-[14px] md:text-[18px] font-normal text-white leading-relaxed">
              For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.
            </p>

            <p className="text-[#B9FF66] text-[15px] md:text-[20px] font-normal cursor-pointer flex items-center md:gap-3.75 gap-1.5 w-max">
              Learn more
              <Image src="/assets/case-studies/arrow-icon.svg" alt="Arrow" width={17.32} height={10} className="md:w-[17.32px] w-[12px]" />
            </p>
          </div>

        </div>

      </section>

      <section>
        {/* Heading */}

        <div className=' grid grid-cols-1 md:grid-cols-[auto_auto] md:place-items-center place-items-start place-content-start md:gap-10 gap-6 w-full md:mt-35 mt-17'>
          <h2 className=' md:text-[40px] text-[23px] bg-[#B9FF66] font-medium px-1.75 rounded-[7px] w-max'>
            Our Working Process
          </h2>

          <p className=' md:text-[18px] text-[14px] font-normal md:w-150 w-full'>
            Step-by-Step Guide to Achieving Your Business Goals
          </p>
        </div>

        {/* Card 1 */}
        <div className="w-full bg-[#B9FF66] rounded-[45px] md:px-15 px-8 md:py-10.25 py-6 flex flex-col gap-4 md:gap-7.5 box-border border border-black shadow-[0px_5px_0px_#191A23] md:mt-20 mt-10">
          <div className="flex items-center justify-between gap-3 md:gap-4">
            <div className="flex items-center gap-3 md:gap-6.25">
              <p className="text-[30px] sm:text-[35px] md:text-[60px] font-medium leading-none">
                01
              </p>
              <h3 className="text-[16px] sm:text-[24px] md:text-[30px] font-medium leading-tight">
                Consultation
              </h3>
            </div>

            {/* Circle */}
            <div className="w-8.5 h-8.5 md:w-14.5 md:h-14.5 bg-white border border-black rounded-full flex items-center justify-center shrink-0">
              <Minus className="w-4 h-4 md:w-6 md:h-6" />
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-black" />

          {/* Copy */}
          <p className="text-[14px] md:text-[18px] font-normal leading-relaxed">
            During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.
          </p>
        </div>

        {/* Card 2 */}
        <div className="w-full bg-[#F3F3F3] rounded-[45px] md:px-15 px-8 md:py-10.25 py-6 flex flex-col gap-4 md:gap-7.5 box-border border border-black shadow-[0px_5px_0px_#191A23] mt-5 md:mt-[30px]">
          <div className="flex items-center justify-between gap-3 md:gap-4">
            <div className="flex items-center gap-3 md:gap-6.25">
              <p className="text-[30px] sm:text-[35px] md:text-[60px] font-medium leading-none">
                02
              </p>
              <h3 className="text-[16px] sm:text-[24px] md:text-[30px] font-medium leading-tight">
                Research and Strategy Development
              </h3>
            </div>

            {/* Circle */}
            <div className="w-8.5 h-8.5 md:w-14.5 md:h-14.5 bg-white border border-black rounded-full flex items-center justify-center shrink-0">
              <Plus className="w-4 h-4 md:w-6 md:h-6" />
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-full bg-[#F3F3F3] rounded-[45px] md:px-15 px-8 md:py-10.25 py-6 flex flex-col gap-4 md:gap-7.5 box-border border border-black shadow-[0px_5px_0px_#191A23] mt-5 md:mt-[30px]">
          <div className="flex items-center justify-between gap-3 md:gap-4">
            <div className="flex items-center gap-3 md:gap-6.25">
              <p className="text-[30px] sm:text-[35px] md:text-[60px] font-medium leading-none">
                03
              </p>
              <h3 className="text-[16px] sm:text-[24px] md:text-[30px] font-medium leading-tight">
                Implementation
              </h3>
            </div>

            {/* Circle */}
            <div className="w-8.5 h-8.5 md:w-14.5 md:h-14.5 bg-white border border-black rounded-full flex items-center justify-center shrink-0">
              <Plus className="w-4 h-4 md:w-6 md:h-6" />
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="w-full bg-[#F3F3F3] rounded-[45px] md:px-15 px-8 md:py-10.25 py-6 flex flex-col gap-4 md:gap-7.5 box-border border border-black shadow-[0px_5px_0px_#191A23] mt-5 md:mt-[30px]">
          <div className="flex items-center justify-between gap-3 md:gap-4">
            <div className="flex items-center gap-3 md:gap-6.25">
              <p className="text-[30px] sm:text-[35px] md:text-[60px] font-medium leading-none">
                04
              </p>
              <h3 className="text-[16px] sm:text-[24px] md:text-[30px] font-medium leading-tight">
                Monitoring and Optimization
              </h3>
            </div>

            {/* Circle */}
            <div className="w-8.5 h-8.5 md:w-14.5 md:h-14.5 bg-white border border-black rounded-full flex items-center justify-center shrink-0">
              <Plus className="w-4 h-4 md:w-6 md:h-6" />
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div className="w-full bg-[#F3F3F3] rounded-[45px] md:px-15 px-8 md:py-10.25 py-6 flex flex-col gap-4 md:gap-7.5 box-border border border-black shadow-[0px_5px_0px_#191A23] mt-5 md:mt-[30px]">
          <div className="flex items-center justify-between gap-3 md:gap-4">
            <div className="flex items-center gap-3 md:gap-6.25">
              <p className="text-[30px] sm:text-[35px] md:text-[60px] font-medium leading-none">
                05
              </p>
              <h3 className="text-[16px] sm:text-[24px] md:text-[30px] font-medium leading-tight">
                Reporting and Communication
              </h3>
            </div>

            {/* Circle */}
            <div className="w-8.5 h-8.5 md:w-14.5 md:h-14.5 bg-white border border-black rounded-full flex items-center justify-center shrink-0">
              <Plus className="w-4 h-4 md:w-6 md:h-6" />
            </div>
          </div>
        </div>

        {/* Card 6 */}
        <div className="w-full bg-[#F3F3F3] rounded-[45px] md:px-15 px-8 md:py-10.25 py-6 flex flex-col gap-4 md:gap-7.5 box-border border border-black shadow-[0px_5px_0px_#191A23] mt-5 md:mt-[30px]">
          <div className="flex items-center justify-between gap-3 md:gap-4">
            <div className="flex items-center gap-3 md:gap-6.25">
              <p className="text-[30px] sm:text-[35px] md:text-[60px] font-medium leading-none">
                06
              </p>
              <h3 className="text-[16px] sm:text-[24px] md:text-[30px] font-medium leading-tight">
                Continual Improvement
              </h3>
            </div>

            {/* Circle */}
            <div className="w-8.5 h-8.5 md:w-14.5 md:h-14.5 bg-white border border-black rounded-full flex items-center justify-center shrink-0">
              <Plus className="w-4 h-4 md:w-6 md:h-6" />
            </div>
          </div>
        </div>

      </section>

    </div>
  )
}

export default page