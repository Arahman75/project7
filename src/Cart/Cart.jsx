import React from 'react';

const Cart = ({ selectCourses, totalCredit, remainingCredit, totalPrices }) => {

    return (
        <div className='bg-gray-100 p-4 rounded-lg  text-start'>
            <h1 className='text-[#2F80ED] text-lg font-semibold mb-2'>Credit Hour Remaining: {totalCredit} hr</h1>
            <div className=' border border-gray-200'></div>
            <h3 className='text-xl font-semibold text-[#1C1B1B] my-4'>Course Name</h3>

            <ol className='list-decimal list-inside text-left' >
                {
                    selectCourses.map((course) =>


                        <li className='text-[#1C1B1B99] text-[16px] mb-2  text-gray-500' key={course.id}>{course.name}</li>

                    )
                }
            </ol>
            <div className=' border my-3 border-gray-200'></div>
            <h1 className='text-gray-800 text-[16px] font-medium'>Total Credit Hour :  {remainingCredit} hr</h1>
            <div className=' border my-3 border-gray-200'></div>
            <h1 className='text-gray-800 text-[16px] font-medium'>Total Price: {totalPrices}</h1>
        </div>
    );
};

export default Cart;