
import Home from "../pages/Home";
import About from "../pages/About";
import Contacts from "../pages/Contacts";
import Projects from "../pages/Projects";

const routes = [
    {
        name:'home',
        element:<Home />,
        path:'/home',
    },
    {
        name:'about',
        element:<About />,
        path:'/about',
    },
    {
        name:'contacts',
        element:<Contacts />,
        path:'/contacts',
    },
    {
        name:'projects',
        element:<Projects />,
        path:'/project',
    },
  
];

export default routes