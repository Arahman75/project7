import React, { useEffect, useState } from 'react';
import { BsCurrencyDollar } from "react-icons/bs";
import { HiOutlineBookOpen } from "react-icons/hi";
import Cart from '../Cart/Cart';
const Home = () => {
    const [courses, setCourses] = useState([]);
    const [selectCourses, setSelectCourses] = useState([]);

    useEffect(() => {
        fetch("./courses.json")
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);

    const handleSelectCourse = (course) => {
        const newCourses = [...selectCourses, course]
        setSelectCourses(newCourses);
    }
    // console.log(selectCourses);
    return (
        <div className='w-[1200px] mx-auto'>
            <h4 className='text-3xl font-bold mb-12'>Course Registration</h4>

            <div className='flex'>
                <div className='w-9/12 grid lg:grid-cols-3 gap-4 md:grid-cols-2 grid-cols-1'>
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
                            <button onClick={() => handleSelectCourse(course)} className='w-full py-2 rounded text-white text-lg font-medium bg-[#2F80ED]'>Select</button>
                        </div>)
                    }
                </div>
                <div className='w-3/12 ml-5'>
                    <Cart selectCourses={selectCourses}></Cart>
                </div>

            </div>
        </div>
    );
};

export default Home;