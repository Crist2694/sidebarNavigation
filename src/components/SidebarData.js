import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
    {
        tittle: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        tittle: 'Reports',
        path: '/reports',
        icon: <IoIcons.IoIosPaper/>,
        cName: 'nav-text'
    },
    {
        tittle: 'Products',
        path: '/products',
        icon: <FaIcons.FaCartPlus/>,
        cName: 'nav-text'
    },
    {
        tittle: 'Team',
        path: '/',
        icon: <IoIcons.IoMdPeople/>,
        cName: 'nav-text'
    },
    {
        tittle: 'Messages',
        path: '/messages',
        icon: <FaIcons.FaEnvelopeOpenText/>,
        cName: 'nav-text'
    },
    {
        tittle: 'Support',
        path: '/support',
        icon: <IoIcons.IoMdHelpCircle/>,
        cName: 'nav-text'
    },    
]