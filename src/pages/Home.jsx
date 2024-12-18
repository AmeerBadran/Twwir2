
import shap1 from '../assets/images/decor/hero-3-shape3.png'
import shap2 from '../assets/images/decor/hero-3-shape4.png'
import shap3 from '../assets/images/decor/shape-5-2.png'
import shap4 from '../assets/images/decor/shape-5-6.png'
import shap5 from '../assets/images/decor/shape-1-2.png'
import shap6 from '../assets/images/decor/shape-1-1.png'
import shap10 from '../assets/images/decor/shape-2-1.png'
import shap7 from '../assets/images/decor/shape-1-3.png'
import shap8 from '../assets/images/decor/shape-1-4.png'
import shap9 from '../assets/images/decor/shape-1-5.png'

import main_home from '../assets/images/January_life_style_working_08-removebg-preview.png'
import BouncingImage from '../components/atoms/BouncingImage'
import SocialLinks from '../components/molecule/SocialLinks'
import TypeAnimationComp from '../components/molecule/TypeAnimationComp'
import featuresData from '../constants/features'
import FeatureCard from '../components/molecule/FeatureCard'
import ServicesCard from '../components/molecule/ServicesCard'
import { servicesCardData } from '../constants/servicesCardData'
import ProjectsCard from '../components/molecule/ProjectsCard'
import { projectsData } from '../constants/projectsData'
import { FaWhatsapp } from "react-icons/fa";
import { TbTriangleFilled } from "react-icons/tb";
import Footer from '../components/molecule/Footer'

export default function Home() {
  return (
    <div className='mx-auto min-h-screen'>
      <section className="min-h-screen w-full bg-my-color pt-24 text-white flex flex-col justify-center pb-10 px-5">
        <div className='relative max-w-[1400px] w-full mx-auto flex slg:flex-row flex-col justify-between items-center gap-3 slg:mt-24 2md:-mt-8 -mt-10'>
          <BouncingImage
            animationType="bouncey"
            duration={5}
            easing="easeInOut"
            className="absolute w-32 right-[10%] -top-20 slg:-top-32 lg:-top-24 hidden slg:block"
          >
            <img src={shap2} alt="decor" className='' />
          </BouncingImage>
          <BouncingImage
            animationType="rotate"
            duration={10}
            easing="linear"
            className="absolute left-24 -top-20 hidden slg:block"
          >
            <img src={shap3} alt="decor" className='' />
          </BouncingImage>
          <BouncingImage
            animationType="rotate"
            duration={10}
            easing="linear"
            className="absolute w-32 rounded-full left-3/4 -bottom-10  slg:left-1/3 slg:-bottom-20 overflow-hidden"
          >
            <img src={shap4} alt="decor" className='' />
          </BouncingImage>
          <div className='max-w-[600px] xl:max-w-[700px] flex flex-col gap-10 slg:border-l slg:text-start text-center py-10 mt-10'>
            <p className='text-3xl lg:text-4xl xl:text-5xl font-bold xl:leading-[1.7] lg:leading-[1.5] leading-[1.5] xl:h-[150px] md:h-[100px] mobile:h-[140px] h-auto '>
              مع <span className='text-sec-color'>طوّر</span>، نحقق لك النجاح الرقمي في &nbsp;
              <TypeAnimationComp />
            </p>
            <p className='text-sm lg:text-base xl:text-lg font-bold text-gray-200 leading-loose'>طوّر يساعدك في تصميم وتطوير مواقع إلكترونية تفاعلية ومتكاملة لتناسب احتياجاتك الرقمية.</p>
            <div className='relative'>
              <SocialLinks />
              <BouncingImage
                animationType="bouncex"
                duration={3}
                easing="linear"
                className="absolute w-32 right-32 bottom-3 "
              >
                <img src={shap1} alt="decor" className='rotate-180' />
              </BouncingImage>
            </div>
          </div>
          <div className='  flex max-w-[700px] mx-auto justify-center items-center'>
            <BouncingImage
              animationType="bouncey"
              duration={5}
              easing="easeInOut"
              className=""
            >
              <div className="relative rounded-[100px] z-10 w-11/12 aspect-square slg:size-[350px] lg:size-[450px] sxl:size-[500px] xl:size-[590px] shadow-out-shadow overflow-hidden flex justify-center items-center">
                <img src={main_home} alt="main_home" className="m-7 size-full" />
                <div className="shadow-inner-shadow rounded-[100px] absolute w-full h-full border-[10px] border-[#cce6e6]"></div>
              </div>
            </BouncingImage>
          </div>
        </div>
      </section>
      <section className='relative mb-20'>
        <div className='curved-edge absolute -z-10 w-full h-[70%] max-h-96 bg-my-color'></div>
        <div className='max-w-[1400px] mx-auto px-4 2xmobile:px-10 md:px-20 py-24'>
          <div className='grid  2md:grid-cols-2 xl:grid-cols-4 rounded-xl bg-teal-600 w-full text-white'>
            {featuresData.map((feature, index) => (
              <FeatureCard
                key={index}
                imgSrc={feature.imgSrc}
                title={feature.title}
                description={feature.description}
                additionalClasses={feature.additionalClasses}
              />
            ))}
          </div>
        </div>
        <div className='max-w-[1400px] mx-auto px-4 mt-20 text-white overflow-x-hidden pb-12'>
          <div className='flex  flex-col items-center gap-10'>
            <p className='text-4xl md:text-[54px] lg:text-6xl font-black text-my-color text-shadow'>خدماتنا <span className='text-sec-color'>المميزة</span></p>
            <p className='bg-teal-950 bg-opacity-80 w-fit px-5 py-1 text-center rounded-xl'>نقدم حلولًا مبتكرة تلبي احتياجاتك وتفوق توقعاتك.</p>
          </div>
          <div className="grid 2md:grid-cols-2 xl:grid-cols-3 gap-y-20 gap-x-16 mt-20">
            {servicesCardData.map((data) => (
              <ServicesCard key={data.id} {...data} />
            ))}
          </div>
        </div>
      </section>
      <section className='py-24 bg-gradient-to-t from-gray-100 from-90% to-white'>
        <div className='flex flex-col items-center gap-10'>
          <p className='text-4xl md:text-[54px] lg:text-6xl font-black text-my-color text-shadow'>معرض <span className='text-sec-color'>المشاريع</span></p>
        </div>
        <div className='max-w-[1400px] xl:mx-auto grid 2md:grid-cols-2 xl:grid-cols-3 gap-x-20 gap-y-28 px-4 mt-24 text-white pr-14'>
          {projectsData.map((project) => (
            <ProjectsCard key={project.id} {...project} />
          ))}
        </div>
      </section>
      <section className="relative w-full h-[500px] bg-teal-950 bg-contactbg bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-my-color bg-opacity-40"></div>
        <img src={shap5} alt='' className=' absolute top-0 right-0 z-10' />
        <img src={shap6} alt='' className=' absolute top-0 right-0' />
        <img src={shap10} alt='' className=' absolute bottom-0 left-0 max-w-96' />
        <BouncingImage
          animationType="rotate"
          duration={10}
          easing="linear"
          className="absolute left-44 top-20 hidden slg:block"
        >
          <img src={shap7} alt="decor" className='' />
        </BouncingImage>
        <BouncingImage
          animationType="rotate"
          duration={10}
          easing="linear"
          className="absolute right-1/3 bottom-20 hidden slg:block"
        >
          <img src={shap8} alt="decor" className='' />
        </BouncingImage>
        <BouncingImage
          animationType="bouncex"
          duration={3}
          easing="linear"
          className="absolute w-32 left-1/3 top-28 "
        >
          <img src={shap9} alt="decor" className='rotate-180' />
        </BouncingImage>
        <div className='max-w-[1400px] h-full mx-auto grid 2md:grid-cols-2 p-4 2md:p-10'>
          <div className="text-white z-10 flex flex-col justify-center h-full">
            <p className="text-xl font-semibold mb-14">ابدأ تواجدك الرقمي اليوم!</p>
            <p className="text-3xl font-bold mb-4">اطلب موقعك الآن!</p>
            <p className="text-3xl font-bold text-right tracking-wider" dir="ltr">(+972)569697622</p>

            <a href='https://api.whatsapp.com/send/?phone=972569697622&text&type=phone_number&app_absent=0' target='_blanck' className="flex items-center justify-center w-fit gap-3 h-16 bg-teal-600 hover:bg-teal-800 transition duration-300 ease-in-out rounded-lg mt-10 px-5 shadow-lg">
              <FaWhatsapp className="text-3xl mr-3 text-white" />
              <span className="text-lg font-medium text-white">تواصل عبر واتساب</span>
            </a>
          </div>
          <div className='flex h-full w-full 2md:justify-end 2md:pl-20 items-center'>
            <button className='size-32 relative bg-white rounded-full z-10 shadow-out-shadow hover:bg-my-color hover:shadow-2xl hover:shadow-black group transition-all duration-300'>
              <TbTriangleFilled className=' rotate-90 text-4xl text-my-color group-hover:text-white absolute top-[47px] right-[45px] transition-all duration-300' />
            </button>
            <p></p>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}
