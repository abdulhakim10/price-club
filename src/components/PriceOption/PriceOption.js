import React from 'react';
import Feature from '../Feature/Feature';


const PriceOption = ({option}) => {
    const {features} = option;
    return (
        <div className='bg-blue-300 m-3 rounded-md p-3'>
            <div>
                <h3>
                    <span className='text-6xl font-bold text-white'>{option.price}</span>
                    <span className='text-2xl text-gray-200'>/mon</span>
                </h3>
                <p className='text-3xl my-4'>{option.name}</p>
            </div>
            {
                features.map((feature, idx) => <Feature 
                key={idx} 
                feature={feature}
                ></Feature>)
            }
            <button className='bg-green-600 rounded-md py-2 w-full font-bold text-white mt-2 hover:bg-green-500'>Buy Now</button>
        </div>
    );
};

export default PriceOption;