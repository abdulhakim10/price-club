import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const Pricing = () => {
    const pricingOptions = [
        {id: 1, name: 'Free', price: 0, features: [
            'Awesome Feature',
            'Extra Feature',
            'Unnecessary Feature',
            'Will Never Use Feature',
            'Hudai Feature',
            'Ajeira Feature'
        ]},
        {id: 2, name: 'Medium', price: 9.99, features: [
            'Awesome Feature',
            'Extra Feature',
            'Unnecessary Feature',
            'Will Never Use Feature',
            'Hudai Feature',
            'Ajeira Feature'
        ]},
        {id: 3, name: 'Premium', price: 19.99, features: [
            'Awesome Feature',
            'Extra Feature',
            'Unnecessary Feature',
            'Will Never Use Feature',
            'Hudai Feature',
            'Ajeira Feature'
        ]},
    ]
    return (
        <div>
            <h2 className='text-5xl font-bold bg-blue-300 text-white p-12'>Best Deal of The Town..!</h2>
            <div className='grid md:grid-cols-3 gap-3 mt-4'>
            {
                pricingOptions.map(option => <PriceOption 
                    key={option.id} 
                    option={option}
                    ></PriceOption>)
            }
            </div>
        </div>
    );
};

export default Pricing;