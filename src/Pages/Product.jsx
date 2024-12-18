import React from 'react'
import phone1 from '../assets/phone1.jpg';
import phone2 from '../assets/phone2.jpg';
import phone3 from '../assets/phone3.jpg';
import phone4 from '../assets/phone4.jpg';
import phone5 from '../assets/phone5.jpg';
import phone6 from '../assets/phone6.jpg';
import phone7 from '../assets/phone7.jpg';
import phone8 from '../assets/phone8.jpg';
import phone9 from '../assets/phone9.jpg';
import phone10 from '../assets/phone10.jpg';
import phone11 from '../assets/phone11.jpg';
import phone12 from '../assets/phone12.jpg';
import { motion, useAnimation } from "framer-motion";

const Product = () => {
  const animation = useAnimation();
  return (
    <div className='pt-[10vh] '>
     <div className='flex gap-10 items-center justify-center flex-wrap p-10 md:p-1'>
      <motion.div initial={{ y: 500, opacity: 0}} animate={{y: 0, opacity: 1, transition: { duration:3 } }} >
      <div>     
        <img src={phone1} alt="/" width={300}  />
        <h1 className='text-[25px]'> Iphone15</h1>
        <p>&#x20A6;20,000</p>    
        <button className='w-[139px] h-[50px] rounded-[3px] mt-2 bg-red-600 text-center justify-center items-center'>Buy Now</button>
      </div>
      </motion.div>

      <motion.div initial={{ y: 500, opacity: 0}} animate={{y: 0, opacity: 1, transition: { duration:4 } }} >
      <div>        
        <img src={phone2} alt="/" width={300}/>
        <h1 className='text-[25px]'>Oppo</h1>
        <p>&#x20A6;10,000</p>
        <button className='w-[139px] h-[50px] rounded-[3px] mt-2 bg-red-600 text-center justify-center items-center'>Buy Now</button>
      </div>
      </motion.div>

      <motion.div initial={{ y: 500, opacity: 0}} animate={{y: 0, opacity: 1, transition: { duration:5 } }} >
      <div>
        <img src={phone3} alt="/" width={300}/>
        <h1 className='text-[25px]'>Redmi</h1>
        <p>&#x20A6;22,200</p>
        <button className='w-[139px] h-[50px] rounded-[3px] mt-2 bg-red-600 text-center justify-center items-center'>Buy Now</button>
      </div>
      </motion.div>

      <motion.div initial={{ y: 500, opacity: 0}} animate={{y: 0, opacity: 1, transition: { duration:6 } }} >
      <div>
        <img src={phone4} alt="/" width={300}/>
        <h1 className='text-[25px]'>Samsung</h1>
        <p>&#x20A6;90,000</p>
        <button className='w-[139px] h-[50px] rounded-[3px] mt-2 bg-red-600 text-center justify-center items-center'>Buy Now</button>
      </div>
      </motion.div>
      
      <motion.div initial={{ y: 500, opacity: 0}} animate={{y: 0, opacity: 1, transition: { duration:3 } }} >
      <div>
        <img src={phone5} alt="/"  width={300}/>
        <h1 className='text-[25px]'>Vivo</h1>
        <p>&#x20A6;45,000</p>
        <button className='w-[139px] h-[50px] rounded-[3px] mt-2 bg-red-600 text-center justify-center items-center'>Buy Now</button>
      </div>
      </motion.div>
       
      <motion.div initial={{ y: 500, opacity: 0}} animate={{y: 0, opacity: 1, transition: { duration:4 } }} >
      <div>
        <img src={phone6} alt="/" width={300}/>
        <h1 className='text-[25px]'>Vivo Y20s</h1>
        <p>&#x20A6;61,000</p>        
        <button className='w-[139px] h-[50px] rounded-[3px] mt-2 bg-red-600 text-center justify-center items-center'>Buy Now</button>
      </div>
      </motion.div>

      <motion.div initial={{ y: 500, opacity: 0}} animate={{y: 0, opacity: 1, transition: { duration:5 } }} >
      <div>     
        <img src={phone7} alt="/" width={300} />
        <h1 className='text-[25px]'>SamsungA54</h1>
        <p>&#x20A6;20,000</p>    
        <button className='w-[139px] h-[50px] rounded-[3px] mt-2 bg-red-600 text-center justify-center items-center'>Buy Now</button>
      </div>
      </motion.div>

      <motion.div initial={{ y: 500, opacity: 0}} animate={{y: 0, opacity: 1, transition: { duration:6 } }} >
      <div>     
        <img src={phone8} alt="/" width={300} />
        <h1 className='text-[25px]'>VivoV30 </h1>
        <p>&#x20A6;55,000</p>    
        <button className='w-[139px] h-[50px] rounded-[3px] mt-2 bg-red-600 text-center justify-center items-center'>Buy Now</button>
      </div>
      </motion.div>

      <motion.div initial={{ y: 500, opacity: 0}} animate={{y: 0, opacity: 1, transition: { duration:3 } }} >  
      <div>     
        <img src={phone9} alt="/" width={300} />
        <h1 className='text-[25px]'>HuaweiNova12i</h1>
        <p>&#x20A6;32,000</p>    
        <button className='w-[139px] h-[50px] rounded-[3px] mt-2 bg-red-600 text-center justify-center items-center'>Buy Now</button>
      </div>
      </motion.div>

      <motion.div initial={{ y: 500, opacity: 0}} animate={{y: 0, opacity: 1, transition: { duration:4 } }} >
      <div>     
        <img src={phone10} alt="/" width={300} />
        <h1 className='text-[25px]'>HuaweiP50</h1>
        <p>&#x20A6;25,000</p>    
        <button className='w-[139px] h-[50px] rounded-[3px] mt-2 bg-red-600 text-center justify-center items-center'>Buy Now</button>
      </div>
      </motion.div>

      <motion.div initial={{ y: 500, opacity: 0}} animate={{y: 0, opacity: 1, transition: { duration:5 } }} >
      <div>     
        <img src={phone11} alt="/" width={300} />
        <h1 className='text-[25px]'>Iphone 16</h1>
        <p>&#x20A6;202,000</p>    
        <button className='w-[139px] h-[50px] rounded-[3px] mt-2 bg-red-600 text-center justify-center items-center'>Buy Now</button>
      </div>
      </motion.div>

      <motion.div initial={{ y: 500, opacity: 0}} animate={{y: 0, opacity: 1, transition: { duration:6 } }} >
      <div>     
        <img src={phone12} alt="/" width={300} />
        <h1 className='text-[25px]'>SamsungS21</h1>
        <p>&#x20A6;206,000</p>    
        <button className='w-[139px] h-[50px] rounded-[3px] mt-2 bg-red-600 text-center justify-center items-center'>Buy Now</button>
      </div>
      </motion.div>

     </div>
    </div>
    
  )
}

export default Product;
