import React, { useEffect, useState } from 'react';
import { BsCurrencyDollar } from "react-icons/bs";
import { HiOutlineBookOpen } from "react-icons/hi";
const Home = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch("./courses.json")
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div className='w-[1200px] mx-auto'>
            <h4 className='text-3xl font-bold mb-12'>Course Registration</h4>

            <div className='flex'>
                <div className='w-9/12 grid lg:grid-cols-3 gap-4 md:grid-cols-2 grid-cols-1'>
                    {/* <div className='bg-gray-100 p-4 rounded-lg gap-4'>
                        <img src="https://img.freepik.com/premium-photo/web-development-concept_2227-1222.jpg?w=900" alt="" />
                        <h2 className='text-lg font-semibold my-2'>Introduction to C Programming</h2>
                        <p className='text-sm font-normal text-gray-500'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        <div className='flex justify-between my-4'>
                            <div className='flex items-center '>
                                <p className='text-xl mr-2'>  < BsCurrencyDollar /></p><span className='text-sm text-gray-500 font-semibold'>Price:1400</span>
                            </div>
                            <div className='flex items-center '>
                                <p className='text-xl mr-2'>  < HiOutlineBookOpen /></p><span className='text-sm text-gray-500 font-semibold'>Credit : 5hr</span>
                            </div>
                        </div>
                        <button className='w-full py-2 rounded text-white text-lg font-medium bg-[#2F80ED]'>Select</button>
                    </div> */}
                    {
                        courses.map(course => <div key={course.id} className='bg-gray-100 p-4 rounded-lg '>
                            <img src={course.image} alt="" />
                            <h2 className='text-lg font-medium text-[#0c0c0c] my-2'>{course.name}</h2>
                            <p className='text-sm font-normal text-gray-500'>{course.details}</p>
                            <div className='flex justify-between my-4'>
                                <div className='flex items-center '>
                                    <p className='text-xl mr-2'>  < BsCurrencyDollar /></p><span className='text-sm text-gray-500 font-semibold'>Price: {course.price}</span>
                                </div>
                                <div className='flex items-center '>
                                    <p className='text-xl mr-2'>  < HiOutlineBookOpen /></p><span className='text-sm text-gray-500 font-semibold'>Credit: {course.credit}</span>
                                </div>
                            </div>
                            <button className='w-full py-2 rounded text-white text-lg font-medium bg-[#2F80ED]'>Select</button>
                        </div>)
                    }
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