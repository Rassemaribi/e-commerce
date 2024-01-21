import Accueil from './components/accueil.vue';
import viewCategory from './components/categories/viewCategory.vue';
import Addcategorie from './components/categories/Addcategorie.vue';
import Viewarticles from "./components/articles/Viewarticles.vue"
import Addaticle from "./components/articles/addarticle.vue"
import Menu from "./components/Menu.vue"
import Editarticle from "./components/articles/Editarticle.vue"
import Viwearticletable from "./components/articles/Viewarticletable.vue";
import HomeCart from './components/cart/HomeCart.vue';
import Cart from './components/cart/Cart.vue';
import Payment from './components/cart/Payment.vue';
import Login from './components/authentification/login.vue'
import Register from './components/authentification/register.vue'
import Dashboard from './components/admin/dashboard.vue'


export const routes = [


{
name: 'homeCategories',
path: '/categories',
component: viewCategory
},
{
name: 'createCategory',
path: '/createCategory',
component: Addcategorie

},
{
    name:"menu",
    path:"/menu",
    component:Menu
    },
{
    name:"Viewarticles",
    path:"/articles",
    component:Viewarticles
    },
    {
    name:"Addarticle",
    path:"/addarticle",
    component:Addaticle
    },
    
{

name:"editarticle",
path:"/editarticle/:id",
component:Editarticle
},


{
name:"Viewarticletable",
path:"/articletable",
component:Viwearticletable
},
{
    path:'/shopping',
    name:'HomeCart',
    component:HomeCart
    },
    {
        path:'/cart',
        name:'Cart',
        component:Cart
        },

        {
            path:'/payment',
            name:'Payment',
            component:Payment
            },
            {
                name: "login",
                path: "/login",
                component: Login,
                },
                {
                name: "register",
                path: "/register",
                component: Register,
                },
                {
                
                name: "dashboard",
                path: '/dashboard',
                component: Dashboard,
                
                }
                
            
                
                
];