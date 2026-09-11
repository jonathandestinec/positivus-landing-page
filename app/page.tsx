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

    <div className='px-25 w-full'>

      <section>

        <div className=' max-w-7xl w-full flex flex-col md:flex-row items-center justify-between mt-17.5 '>

          {/* Left side */}
          <div className='flex flex-1 flex-col items-start gap-8.75 text-left'>

            <h1 className='text-6xl font-medium'>
              Navigating the digital landscape for success
            </h1>

            <h4 className='text-[20px]'>
              Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
            </h4>

            <button className=' bg-black text-white px-8.75 py-5 rounded-[14px] cursor-pointer'>
              <h4 className='text-[20px]'>Book a consultation</h4>
            </button>

          </div>

          {/* Right side */}
          <div className='w-full flex flex-1 items-center justify-center'>
            <Image src={"/assets/hero/Illustration.svg"} width={600.46} height={515} alt='Illustration' />
          </div>
        </div>

        {/* Company logos */}

        <div className=' w-full flex items-center justify-between ml-auto mr-auto mt-17.5 grayscale-100'>
          {
            companyLogos.map((logo, index) => {
              return (
                <Image src={logo} width={100} height={50} alt='Company Logo' key={index} />
              )
            })
          }
        </div>

      </section>

      {/* Services section */}

      <section className=' mt-35'>

        {/* Heading */}

        <div className=' flex items-center justify-start gap-10 w-full'>
          <h2 className=' text-[40px] bg-[#B9FF66] font-medium px-1.75 rounded-[7px]'>
            Services
          </h2>

          <p className=' text-[18px] font-normal w-145'>
            At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
          </p>
        </div>

        {/* Services cards */}

        <div className=' w-full grid grid-cols-1 md:grid-cols-2 gap-10 mt-20'>

          {/* Card 1 */}
          <div className='md:w-150 md:h-77.5 bg-[#F3F3F3] rounded-[45px] p-12.5 box-border flex items-center justify-between border border-black shadow-[0px_5px_0px_#191A23]'>

            <div className=' flex-1 flex flex-col gap-23.25'>

              <div>
                <h3 className=' text-[30px] bg-[#B9FF66] font-medium px-1.75 rounded-[7px] w-max'>
                  Search engine
                </h3>
                <h3 className=' text-[30px] bg-[#B9FF66] font-medium px-1.75 rounded-[7px] w-max'>
                  Optimization
                </h3>
              </div>

              {/* Arrow btn and Learn more link */}

              <div className=' flex items-center justify-between w-max gap-3.75'>

                {/* Arrow icon */}
                <Image src="/assets/services/arrowicon.svg" alt="Arrow" width={41} height={41} />

                <p className=' text-[20px] font-normal cursor-pointer'>Learn more</p>
              </div>

            </div>

            {/* Illustration */}
            <div className='flex flex-1 items-center justify-center'>
              <Image src="/assets/services/illustration.svg" alt="SEO" width={210} height={166.05} />
            </div>

          </div>


          {/* Card 2 */}
          <div className='md:w-150 md:h-77.5 bg-[#B9FF66] rounded-[45px] p-12.5 box-border flex items-center justify-between border border-black shadow-[0px_5px_0px_#191A23]'>

            <div className=' flex-1 flex flex-col gap-23.25'>

              <div>
                <h3 className=' text-[30px] bg-[#FFFFFF] font-medium px-1.75 rounded-[7px] w-max'>
                  Pay-per-click
                </h3>
                <h3 className=' text-[30px] bg-[#FFFFFF] font-medium px-1.75 rounded-[7px] w-max'>
                  Adverising
                </h3>
              </div>

              {/* Arrow btn and Learn more link */}

              <div className=' flex items-center justify-between w-max gap-3.75'>

                {/* Arrow icon */}
                <Image src="/assets/services/arrowicon.svg" alt="Arrow" width={41} height={41} />

                <p className=' text-[20px] font-normal cursor-pointer'>Learn more</p>
              </div>

            </div>

            {/* Illustration */}
            <div className='flex flex-1 items-center justify-center'>
              <Image src="/assets/services/illustration2.svg" alt="SEO" width={210} height={166.05} />
            </div>
          </div>

          {/* Card 3 */}
          <div className='md:w-150 md:h-77.5 bg-[#191A23] rounded-[45px] p-12.5 box-border flex items-center justify-between border border-black shadow-[0px_5px_0px_#191A23]'>

            <div className=' flex-1 flex flex-col gap-23.25'>

              <div>
                <h3 className=' text-[30px] bg-[#FFFFFF] font-medium px-1.75 rounded-[7px] w-max'>
                  Social Media
                </h3>
                <h3 className=' text-[30px] bg-[#FFFFFF] font-medium px-1.75 rounded-[7px] w-max'>
                  Marketing
                </h3>
              </div>

              {/* Arrow btn and Learn more link */}

              <div className=' flex items-center justify-between w-max gap-3.75'>

                {/* Arrow icon */}
                <Image src="/assets/services/arrowicon2.svg" alt="Arrow" width={41} height={41} />

                <p className=' text-[20px] font-normal cursor-pointer text-white'>Learn more</p>
              </div>

            </div>

            {/* Illustration */}
            <div className='flex flex-1 items-center justify-center'>
              <Image src="/assets/services/illustration3.svg" alt="SEO" width={210} height={166.05} />
            </div>
          </div>

          {/* Card 4 */}
          <div className='md:w-150 md:h-77.5 bg-[#F3F3F3] rounded-[45px] p-12.5 box-border flex items-center justify-between border border-black shadow-[0px_5px_0px_#191A23]'>

            <div className=' flex-1 flex flex-col gap-23.25'>

              <div>
                <h3 className=' text-[30px] bg-[#B9FF66] font-medium px-1.75 rounded-[7px] w-max'>
                  Email
                </h3>
                <h3 className=' text-[30px] bg-[#B9FF66] font-medium px-1.75 rounded-[7px] w-max'>
                  Marketing
                </h3>
              </div>

              {/* Arrow btn and Learn more link */}

              <div className=' flex items-center justify-between w-max gap-3.75'>

                {/* Arrow icon */}
                <Image src="/assets/services/arrowicon.svg" alt="Arrow" width={41} height={41} />

                <p className=' text-[20px] font-normal cursor-pointer'>Learn more</p>
              </div>

            </div>

            {/* Illustration */}
            <div className='flex flex-1 items-center justify-center'>
              <Image src="/assets/services/illustration4.svg" alt="SEO" width={210} height={166.05} />
            </div>
          </div>

          {/* Card 5 */}
          <div className='md:w-150 md:h-77.5 bg-[#B9FF66] rounded-[45px] p-12.5 box-border flex items-center justify-between border border-black shadow-[0px_5px_0px_#191A23]'>

            <div className=' flex-1 flex flex-col gap-23.25'>

              <div>
                <h3 className=' text-[30px] bg-[#FFFFFF] font-medium px-1.75 rounded-[7px] w-max'>
                  Content
                </h3>
                <h3 className=' text-[30px] bg-[#FFFFFF] font-medium px-1.75 rounded-[7px] w-max'>
                  Creation
                </h3>
              </div>

              {/* Arrow btn and Learn more link */}

              <div className=' flex items-center justify-between w-max gap-3.75'>

                {/* Arrow icon */}
                <Image src="/assets/services/arrowicon.svg" alt="Arrow" width={41} height={41} />

                <p className=' text-[20px] font-normal cursor-pointer'>Learn more</p>
              </div>

            </div>

            {/* Illustration */}
            <div className='flex flex-1 items-center justify-center'>
              <Image src="/assets/services/illustration5.svg" alt="SEO" width={210} height={166.05} />
            </div>
          </div>

          {/* Card 6 */}
          <div className='md:w-150 md:h-77.5 bg-[#191A23] rounded-[45px] p-12.5 box-border flex items-center justify-between border border-black shadow-[0px_5px_0px_#191A23]'>

            <div className=' flex-1 flex flex-col gap-23.25'>

              <div>
                <h3 className=' text-[30px] bg-[#B9FF66] font-medium px-1.75 rounded-[7px] w-max'>
                  Analytics And
                </h3>
                <h3 className=' text-[30px] bg-[#B9FF66] font-medium px-1.75 rounded-[7px] w-max'>
                  Tracking
                </h3>
              </div>

              {/* Arrow btn and Learn more link */}

              <div className=' flex items-center justify-between w-max gap-3.75'>

                {/* Arrow icon */}
                <Image src="/assets/services/arrowicon2.svg" alt="Arrow" width={41} height={41} />

                <p className=' text-[20px] font-normal cursor-pointer text-white'>Learn more</p>
              </div>

            </div>

            {/* Illustration */}
            <div className='flex flex-1 items-center justify-center'>
              <Image src="/assets/services/illustration6.svg" alt="SEO" width={210} height={166.05} />
            </div>
          </div>

        </div>

      </section>


      {/* Lets make things happen */}
      <section className=''>

        <div className=' grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#F3F3F3] rounded-[45px] p-15 mt-[123.5px]'>

          {/* Copy and CTA */}
          <div className=' grid grid-cols-1 gap-6.5'>
            <h3 className=' text-[30px] font-medium text-left'>
              Let’s make things happen
            </h3>

            <p className=' text-[18px] font-normal'>
              Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
            </p>

            <button className=' bg-black text-white px-8.75 py-5 rounded-[14px] cursor-pointer w-max'>
              <h4 className='text-[20px]'>Get your free proposal</h4>
            </button>
          </div>

          <div className=' grid grid-cols-1 place-items-center place-content-center relative'>
            <Image src="/assets/ctacard/illustration.svg" alt="Illustration" width={400} height={400} className=' absolute' />
          </div>

        </div>

      </section>

      <section>

        {/* Heading */}

        <div className=' flex items-center justify-start gap-10 w-full mt-35'>
          <h2 className=' text-[40px] bg-[#B9FF66] font-medium px-1.75 rounded-[7px]'>
            Case Studies
          </h2>

          <p className=' text-[18px] font-normal w-145'>
            Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies
          </p>
        </div>

        {/* Card */}

        <div className=' flex items-center justify-evenly bg-[#191A23] w-full mt-20 px-12.5 py-17.5 rounded-[45px] gap-16'>

          <div className='grid grid-cols-1 gap-5'>

            <p className=' text-[18px] font-normal text-white'>
              For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.
            </p>

            <p className='text-[#B9FF66] text-[20px] font-normal cursor-pointer flex items-center gap-3.75'>
              Learn more
              <Image src="/assets/case-studies/arrow-icon.svg" alt="Arrow" width={17.32} height={10} />
            </p>

          </div>

          {/* Divider */}
          <div className='w-px bg-white h-auto self-stretch' />

          {/* Row 2 */}
          <div className='grid grid-cols-1 gap-5'>

            <p className=' text-[18px] font-normal text-white'>
              For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.
            </p>

            <p className='text-[#B9FF66] text-[20px] font-normal cursor-pointer flex items-center gap-3.75'>
              Learn more
              <Image src="/assets/case-studies/arrow-icon.svg" alt="Arrow" width={17.32} height={10} />
            </p>

          </div>

          {/* Divider */}
          <div className='w-px bg-white h-auto self-stretch' />

          {/* Row 3 */}
          <div className='grid grid-cols-1 gap-5'>

            <p className=' text-[18px] font-normal text-white'>
              For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.
            </p>

            <p className='text-[#B9FF66] text-[20px] font-normal cursor-pointer flex items-center gap-3.75'>
              Learn more
              <Image src="/assets/case-studies/arrow-icon.svg" alt="Arrow" width={17.32} height={10} />
            </p>

          </div>

        </div>

      </section>

      <section>
        {/* Heading */}

        <div className=' flex items-center justify-start gap-10 w-full mt-35'>
          <h2 className=' text-[40px] bg-[#B9FF66] font-medium px-1.75 rounded-[7px]'>
            Our Working Process
          </h2>

          <p className=' text-[18px] font-normal w-145'>
            Step-by-Step Guide to Achieving Your Business Goals
          </p>
        </div>

        {/* Card 1 */}
        <div className='w-full bg-[#B9FF66] rounded-[45px] px-15 py-10.25 grid grid-cols-1 gap-7.5 box-border border border-black shadow-[0px_5px_0px_#191A23] mt-20'>

          <div className='flex items-center justify-between'>
            <div className=' flex items-center justify-between'>

              <div className=' flex items-center justify-between w-max gap-6.25'>
                <p className='text-[60px] font-medium'>
                  01
                </p>

                <h3 className='text-[30px] font-medium'>
                  Consultation
                </h3>
              </div>
            </div>

            {/* Circle */}
            <div className='w-14.5 h-14.5 bg-white border border-black rounded-full flex items-center justify-center'>
              <Minus className='' />
            </div>
          </div>

          {/* Divider */}
          <div className='w-full h-px bg-black' />

          {/* Copy */}
          <p className='text-[18px] font-normal'>
            During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.
          </p>

        </div>

        {/* Card 2 */}
        <div className='w-full bg-[#F3F3F3] rounded-[45px] px-15 py-10.25 grid grid-cols-1 gap-7.5 box-border border border-black shadow-[0px_5px_0px_#191A23] mt-7.5'>

          <div className='flex items-center justify-between'>
            <div className=' flex items-center justify-between'>

              <div className=' flex items-center justify-between w-max gap-6.25'>
                <p className='text-[60px] font-medium'>
                  02
                </p>

                <h3 className='text-[30px] font-medium'>
                  Research and Strategy Development
                </h3>
              </div>
            </div>

            {/* Circle */}
            <div className='w-14.5 h-14.5 bg-white border border-black rounded-full flex items-center justify-center'>
              <Plus size={25} />
            </div>
          </div>

        </div>

        {/* Card 3 */}
        <div className='w-full bg-[#F3F3F3] rounded-[45px] px-15 py-10.25 grid grid-cols-1 gap-7.5 box-border border border-black shadow-[0px_5px_0px_#191A23] mt-7.5'>

          <div className='flex items-center justify-between'>
            <div className=' flex items-center justify-between'>

              <div className=' flex items-center justify-between w-max gap-6.25'>
                <p className='text-[60px] font-medium'>
                  03
                </p>

                <h3 className='text-[30px] font-medium'>
                  Implementation
                </h3>
              </div>
            </div>

            {/* Circle */}
            <div className='w-14.5 h-14.5 bg-white border border-black rounded-full flex items-center justify-center'>
              <Plus size={25} />
            </div>
          </div>

        </div>

        {/* Card 4 */}
        <div className='w-full bg-[#F3F3F3] rounded-[45px] px-15 py-10.25 grid grid-cols-1 gap-7.5 box-border border border-black shadow-[0px_5px_0px_#191A23] mt-7.5'>

          <div className='flex items-center justify-between'>
            <div className=' flex items-center justify-between'>

              <div className=' flex items-center justify-between w-max gap-6.25'>
                <p className='text-[60px] font-medium'>
                  04
                </p>

                <h3 className='text-[30px] font-medium'>
                  Monitoring and Optimization
                </h3>
              </div>
            </div>

            {/* Circle */}
            <div className='w-14.5 h-14.5 bg-white border border-black rounded-full flex items-center justify-center'>
              <Plus size={25} />
            </div>
          </div>

        </div>

        {/* Card 5 */}
        <div className='w-full bg-[#F3F3F3] rounded-[45px] px-15 py-10.25 grid grid-cols-1 gap-7.5 box-border border border-black shadow-[0px_5px_0px_#191A23] mt-7.5'>

          <div className='flex items-center justify-between'>
            <div className=' flex items-center justify-between'>

              <div className=' flex items-center justify-between w-max gap-6.25'>
                <p className='text-[60px] font-medium'>
                  05
                </p>

                <h3 className='text-[30px] font-medium'>
                  Reporting and Communication
                </h3>
              </div>
            </div>

            {/* Circle */}
            <div className='w-14.5 h-14.5 bg-white border border-black rounded-full flex items-center justify-center'>
              <Plus size={25} />
            </div>
          </div>

        </div>

        {/* Card 6 */}
        <div className='w-full bg-[#F3F3F3] rounded-[45px] px-15 py-10.25 grid grid-cols-1 gap-7.5 box-border border border-black shadow-[0px_5px_0px_#191A23] mt-7.5'>

          <div className='flex items-center justify-between'>
            <div className=' flex items-center justify-between'>

              <div className=' flex items-center justify-between w-max gap-6.25'>
                <p className='text-[60px] font-medium'>
                  06
                </p>

                <h3 className='text-[30px] font-medium'>
                  Continual Improvement
                </h3>
              </div>
            </div>

            {/* Circle */}
            <div className='w-14.5 h-14.5 bg-white border border-black rounded-full flex items-center justify-center'>
              <Plus size={25} />
            </div>
          </div>

        </div>

      </section>

    </div>
  )
}

export default page