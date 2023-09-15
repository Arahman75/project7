import React from 'react';

const Cart = ({ selectCourses }) => {

    return (
        <div className='bg-gray-100 p-4 rounded-lg '>
            <h1>Credit Hour Remaining 7 hr</h1>

            {
                selectCourses.map((course) =>

                    <ol className='list-decimal list-inside type"1"' key={course.id}>
                        <li>{course.name}</li>
                    </ol>
                )
            }
            <h2>{name}</h2>
        </div>
    );
};

export default Cart;