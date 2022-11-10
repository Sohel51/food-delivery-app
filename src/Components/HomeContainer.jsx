import React from 'react'
import Delivery from '../Images/delivery.png';
import HeroBg from '../Images/heroBg.png';
import { heroData } from '../utils/data';

const HomeContainer = () => {
    return (
        <section className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full' id='home'>
            <div className='py-2 flex-1 flex flex-col items-start md:items-start justify-center gap-2'>
                <div className='flex gap-2 px-4 py-1 rounded-full bg-orange-100 items-center justify-center'>
                    <p className='text-base text-orange-500 font-semibold'>Bike Delivery</p>
                    <div className='h-8 w-8 bg-white rounded-full overflow-hidden drop-shadow-xl '>
                        <img className='h-full w-full object-contain' src={Delivery} alt="Delivery Bike" />
                    </div>
                </div>

                <p className='text-[2.5rem] lg:text-[3.5rem] font-bold text-headingColor tracking-wide'>
                    The Fastest Delivery in <span className='text-orange-600 text-[3rem] lg:text-[4.5rem]'>Your City</span>
                </p>
                <p className='text-center text-base text-textColor md:text-left md:w-[85%] md:text-lg'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, voluptas. Cum omnis perspiciatis pariatur perferendis earum corporis fugiat, deserunt ea explicabo vitae atque possimus consectetur, blanditiis dicta expedita accusantium ducimus.
                </p>
                <button type='button' className='bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-3 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100'>
                    Order Now
                </button>
            </div>
            <div className='py-2 flex-1 flex items-center relative'>
                <img src={HeroBg} className='ml-auto h-420 w-full lg:w-auto lg:h-650' alt="Right Container Background img" />

                <div className="w-full h-full absolute top-0 left-0 flex flex-wrap items-center justify-center py-4 gap-8 lg:gap-8">
                    {heroData && heroData.map(n => (
                        <div key={n.id} className=' lg:w-190 p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center'>
                            <img src={n.imageSrc} className="w-20 lg:w-40 -mt-10 lg:-mt-20" alt="Icecream" />
                            <p className='text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4'>{n.name}</p>
                            <p className='text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3'>{n.descp}</p>
                            <p className='text-sm font-semibold text-headingColor'>
                                <span className='text-xs text-red-600'>$</span> {n.price}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeContainer;