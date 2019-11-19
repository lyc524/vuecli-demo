import About from '../views/About'
import Home from '../views/Home'
import User from '../components/User'
import Index from '@/views/Index'



let routes=[ 
    {
        path:'/index',
        component:Index,
        name:'Index', 
    },
    {
        path:'/about/:id/post/:pid',
        component:About,
        name:'About', 
     },
    {
        path:'/user',
        component:User,
        name:'User', 
    },
    {
        path:'*',
        redirect:'/index',
    }
];


export default routes;