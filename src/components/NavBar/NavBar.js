import React, { useState } from 'react';
import Link from '../Links/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        {id: 1, name: 'Home', path: '/home'},
        {id: 2, name: 'Products', path: '/products'},
        {id: 3, name: 'Order', path: '/order'},
        {id: 4, name: 'Contact', path: '/contact'},
        {id: 5, name: 'About', path: '/about'},
    ]
    return (
        <nav className='bg-blue-300 w-full'>
            <div  onClick={() => setOpen(!open)} className='md:hidden h-6 w-6'>
            {
                open ? <XMarkIcon/> : <Bars3Icon/>
             
            }
            </div>
             
            <ul className={`md:flex justify-center bg-blue-300 w-full absolute md:static duration-500 ease-out ${open ? 'top-6' : 'top-[-120px]'}`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;