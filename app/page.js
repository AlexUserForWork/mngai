'use client';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import ChatComponent from './ChatComponent';
import Navbar from './NavBar';

export default function Home() {
   return (
      <div className='font-[edo]'>
         <Navbar />
      </div>
   );
}
