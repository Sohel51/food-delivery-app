import React from 'react'
import Delivery from '../Images/delivery.png';
import HeroBg from '../Images/heroBg.png';

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
            <div className='py-2 flex-1 flex items-center'>
                <img src={HeroBg} className='ml-auto h-420 w-full lg:w-auto lg:h-600' alt="Right Container Background img" />
            </div>
            <div className='w-full h-full absolute flex items-center justify-center'></div>
        </section>
    );
};

export default HomeContainer;