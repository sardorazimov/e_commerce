/* eslint-disable @next/next/no-img-element */
const Product = () => {
    return (
      <div className='mx-auto grid grid-cols-3 p-6 gap-3 '>
        <div className='border border-blue-600  cursor-pointer shadow shadow-blue-700 transition delay-150 duration-300 ease-in-out'>
          <img src="/airpods/1.png" alt="phone"  className='transition delay-150 duration-300 ease-in-out'/>      
        </div>
        <div className='border border-blue-600 shadow shadow-blue-800 cursor-pointer'>
          <img src="/airpods/1.png" alt="phone" />
        </div>
        <div className='border border-blue-600 shadow shadow-blue-700 cursor-pointer'>
          <img src="/airpods/1.png" alt="phone" /> 
      </div>
      </div>
    )
  }
  
  export default Product