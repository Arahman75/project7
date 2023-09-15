import React from 'react';

const Cart = ({ selectCourses, totalCredit, remainingCredit, totalPrices }) => {

    return (
        <div className='bg-gray-100 p-4 rounded-lg '>
            <h1>Credit Hour Remaining: {totalCredit} hr</h1>
            <h1>Total Remaining: {remainingCredit} hr</h1>
            <h1>Total Price: {totalPrices}</h1>
            <ol className='list-decimal list-inside text-left' >
                {
                    selectCourses.map((course) =>


                        <li key={course.id}>{course.name}</li>

                    )
                }
            </ol>

        </div>
    );
};

export default Cart;