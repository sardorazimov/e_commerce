const Color = () => {
    return (
      <div className='grid grid-cols-4 gap-4'>
        <div className='rounded-[50%] bg-neutral-500 w-8 h-8 cursor-pointer'></div>
        <div className='rounded-[50%] bg-black w-8 h-8 cursor-pointer'></div>
        <div className='rounded-[50%] bg-white border border-slate-500 w-8 h-8 cursor-pointer'></div>
      </div>
    )
  }
  
  export default Color