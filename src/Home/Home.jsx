import React from 'react';

const Home = () => {
    return (
        <div className='w-[1200px] mx-auto'>
            <h4 className='text-3xl font-bold mb-12'>Course Registration</h4>
            <div className='flex'>

                <div className='w-9/12 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
                    <div className='bg-gray-100 p-4 rounded-lg gap-4'>
                        <img src="https://img.freepik.com/premium-photo/web-development-concept_2227-1222.jpg?w=900" alt="" />
                        <h2 className='text-lg font-semibold my-2'>Introduction to C Programming</h2>
                        <p className='text-sm font-normal text-gray-400'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>

                </div>
                <div className='w-3/12'>
                    <h1 className="text-3xl font-bold underline">
                        Hello world!
                    </h1>
                </div>

            </div>
        </div>
    );
};

export default Home;