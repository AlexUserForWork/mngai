'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import ChatComponent from './ChatComponent';
import Navbar from './NavBar';
import Link from 'next/link';
import Popup from './Popup';
import { MusicButton } from './MusicButton';

const icons = [
   { img: 'ico_1', url: 'https://t.me' },
   { img: 'ico_2', url: 'https://x.com' },
   { img: 'ico_3', url: 'https://www.dextools.io/app/en/' },
   { img: 'ico_4', url: 'https://dexscreener.com/solana/' }
];

export default function Home() {
   const [isPlayMusic, setIsPlayMusic] = useState(false);

   const [audio, setAudio] = useState(null);

   useEffect(() => {
      if (typeof window !== 'undefined') {
         const audioInstance = new Audio('/media/312312.mp3'); // Загружаем аудиофайл
         setAudio(audioInstance);
      }
   }, []);

   return (
      <div className='flex items-center justify-center font-[Delicious]'>
         <MusicButton
            isPlayMusic={isPlayMusic}
            setIsPlayMusic={setIsPlayMusic}
            audio={audio}
         />
         <Popup setIsPlayMusic={setIsPlayMusic}/>
         <div className='w-full max-w-[1280px] font-[edo] flex flex-col items-center justify-center'>
            <Navbar />
            <Image
               src='/images/main.gif'
               alt='main'
               className='w-full h-full mt-16'
               priority
               width={1280}
               height={1280}
            />

            <div className='flex flex-col gap-6 text-center mt-12'>
               <h2 className='text-[48px]'>TRUTH TERMINALS MANGAI</h2>

               <div className='max-w-[560px]'>
                  <p className='text-[24px] flex items-center justify-center leading-none'>
                     Truth Terminal MANGAI
                     <span className='text-[32px] font-[Delicious] mx-2 flex items-center'>
                        |
                     </span>
                     <span className='text-[36px] font-[Delicious] flex items-center relative top-[-2px]'>
                        $
                     </span>
                     MANGAI
                  </p>

                  <div className='flex gap-2 items-center justify-center mt-4'>
                     {icons.map((icon, index) => (
                        <Link key={index} target='_blank' href={icon.url}>
                           <Image
                              src={'/images/' + icon.img + '.png'}
                              alt={icon.img}
                              className='w-full h-full cursor-pointer'
                              priority
                              width={60}
                              height={60}
                           />
                        </Link>
                     ))}
                  </div>
               </div>
            </div>

            <div className='mt-8'>
               {' '}
               <ChatComponent />
            </div>

            <div className='bg-[#022405] w-[500px] h-[50px] mt-16 flex items-center justify-center text-center'>
               <p className='text-[18px]'>
                  CA: frcfshgo8ytbuden2yov1uljzmq9rgjc9vtgy5gltgqe
               </p>
            </div>

            <div id='about' className='flex flex-col gap-8 mt-24'>
               <p className='text-[36px] flex items-center justify-center leading-none'>
                  About
                  <span className='pl-2 text-[48px] font-[Delicious] flex items-center relative top-[-2px]'>
                     $
                  </span>
                  MANGAI
               </p>
            </div>
            <div className='flex flex-col md:flex-row w-full mt-4'>
               <div className='w-full md:w-1/2 flex flex-col  p-4'>
                  <div className='mx-auto md:mx-0 bg-[#022405] border border-[#03cd1b] rounded p-4 w-full max-w-[90%] text-white break-words h-[350px]'>
                     123123123123123123123123123123123123123123123123123123123123123123123123
                  </div>
                  <div className='mt-8 mx-auto md:mx-0'>
                     <Link
                        href='https://raydium.io/'
                        target='_blank'
                        className='bg-[#079117] text-white px-10 py-2 hover:bg-[green] transition'
                     >
                        Buy $MANGAI
                     </Link>
                  </div>
               </div>

               <div className='w-full md:w-1/2 flex mt-4 justify-center'>
                  <Image
                     src='/images/woman.gif'
                     alt='main'
                     className='w-full max-h-[500px] object-contain'
                     priority
                     width={600}
                     height={600}
                  />
               </div>
            </div>

            <div
               id='tokenomics'
               className='mt-24 flex flex-col items-center justify-center'
            >
               <h2 className='text-[36px]'>Tokenomics</h2>

               <div className='flex flex-col lg:flex-row gap-8 mt-4'>
                  <Image
                     src='/images/girlDancing.gif'
                     alt='main'
                     className='w-full max-h-[500px] object-contain'
                     priority
                     width={600}
                     height={600}
                  />
                  <div className='mx-auto bg-[#022405] border border-[#03cd1b] rounded p-4 w-full max-w-[90%] text-white break-words h-[350px]'>
                     123123123123123123123123123123123123123123123123123123123123123123123123
                  </div>
               </div>
            </div>

            <div className='mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center text-center max-w-4xl mx-auto px-4'>
               {/* Левая часть с текстом */}
               <div>
                  <h2
                     id='how-to-buy'
                     className='text-2xl md:text-3xl font-bold text-white'
                  >
                     How to buy{' '}
                     <span className='text-[40px] font-[Delicious]'>$</span>
                     MANGAI
                  </h2>
                  <p className='font-[Delicious] text-[18px] text-white mt-4  font-normal'>
                     Setting Up a Phantom Wallet: First, choose and install the
                     Phantom wallet. Once installed, create your wallet and
                     securely store your private key or seed phrase.
                     <br />
                     <br />
                     Acquiring Solana (SOL): Purchase SOL from a cryptocurrency
                     exchange like Coinbase or Binance. After purchasing,
                     transfer the SOL to your Solana wallet.
                     <br />
                     <br />
                     Exchanging for $MANGAI on Raydium: Visit Raydium and
                     connect your Phantom wallet. Use the swap feature on
                     Raydium to exchange your SOL for $MANGAI tokens.
                  </p>

                  {/* Кнопки */}
                  <div className='mt-6 flex flex-col sm:flex-row gap-4 justify-center'>
                     <Link
                        href='https://phantom.app/'
                        target='_blank'
                        className='bg-[#079117] text-white px-10 py-2 hover:bg-green-600 transition'
                     >
                        Get Phantom
                     </Link>
                     <Link
                        href='https://raydium.io/'
                        target='_blank'
                        className='bg-[#079117] text-white px-10 py-2 hover:bg-green-600 transition'
                     >
                        Go Raydimu
                     </Link>
                  </div>
               </div>

               {/* Правая часть с изображением */}
               <div className='flex justify-center'>
                  <Image
                     src='/images/4.jpg'
                     alt='Ethereum Wallet Setup'
                     width={500}
                     height={350}
                     className='rounded-lg shadow-lg object-cover w-full max-w-xs md:max-w-sm'
                     priority
                  />
               </div>
            </div>

            <div className='mt-24'>FOOTER TODO !!!</div>
         </div>
      </div>
   );
}
