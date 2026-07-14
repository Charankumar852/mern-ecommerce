import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT '} text2={'US'}/>

      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Forever is your trusted online destination for stylish, high-quality fashion at affordable prices. We offer carefully curated collections for every occasion, combining comfort, quality, and the latest trends. Our mission is to make online shopping simple, secure, and enjoyable while ensuring complete customer satisfaction. Shop with confidence and discover fashion you'll love, only at Forever.</p>
        <p>At Forever, stylish fashion means combining the latest trends with comfort, quality, and affordability. Our collections are designed to help you express your unique style with confidence, whether it's for everyday wear or special occasions.</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>Our mission is to make fashion accessible to everyone by offering high-quality, stylish, and affordable clothing. We are committed to delivering an exceptional shopping experience through trusted service, customer satisfaction, and continuous innovation</p>

        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY '} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance
          </b>
          <p className='text-gray-600'>At Forever, quality is our top priority. Every product is carefully selected and inspected to ensure it meets our high standards of comfort, durability, and style, so you can shop with confidence.</p>

        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience: </b>
          <p className='text-gray-600'>At Forever, we make shopping convenient with an easy-to-use platform, secure payments, and fast delivery. Our goal is to provide a smooth and hassle-free experience from browsing to checkout.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>At Forever, customer satisfaction is our highest priority. Our dedicated support team is always ready to assist with your questions, ensuring a smooth, friendly, and reliable shopping experience from start to finish.</p>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About