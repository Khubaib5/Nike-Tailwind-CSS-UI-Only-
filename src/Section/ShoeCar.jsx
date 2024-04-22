import React from 'react'

const ShoeCar = ({imgURL, changeBigShoeImage, bigShoeImg}) => {

    // const handleClick = () => {
    //     if (bigShoeImg !== imgURL.bigShoe) {
    //       changeBigShoeImage(imgURL.bigShoe);
    //     }
    //   };

    const handleClick = () => {
      if (bigShoeImg !== imgURL.bigShoe){
        changeBigShoeImage(imgURL.bigShoe);
      }
    }
    
      return (
        <div
          className={`border-2 rounded-xl ${
            bigShoeImg === imgURL.bigShoe
              ? "border-coral-red"
              : "border-transparent"
          } cursor-pointer max-sm:flex-1`}
          onClick={handleClick}
        >
          <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-1'>
            <img
              src={imgURL.thumbnail}
              alt='shoe colletion'
              width={127}
              height={103.34}
              className='object-contain bg-blue-300 rounded-md py-3 px-3 w-40 h-40'
            />
          </div>
        </div>
  )
}

export default ShoeCar