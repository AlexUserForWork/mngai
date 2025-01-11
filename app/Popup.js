import { useRef, useState } from 'react';

const Popup = ({ setIsPlayMusic }) => {
   const [isOpen, setIsOpen] = useState(true);

   const handleClick = () => {
      setIsPlayMusic(true);
      setIsOpen(false);
   };

   return (
      isOpen && (
         <div className='fixed inset-0 bg-black bg-opacity-50 backdrop-blur-[20px] flex justify-center items-center z-50'>
            <div className='text-center'>
               {/* Кнопка для взаимодействия */}
               <div
                  className='cursor-pointer bg-[#157e05] border-4 border-white rounded-[1rem] py-3 px-6 mt-12 text-white flex justify-center items-center
                       transition-all duration-[200ms] ease-in-out hover:scale-x-[2] hover:scale-y-[1.2] hover:animate-bubble'
                  onClick={handleClick}
               >
                  <h1 className='text-5xl font-extrabold'>
                     CLICK TO ENTER $MANGAI
                  </h1>
               </div>
            </div>
         </div>
      )
   );
};

export default Popup;
