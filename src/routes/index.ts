import config from '../config/index';
import Error404 from '../pages/Error404/Error404';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';
import Home from '../pages/Home/Home';
import Project from '../pages/Project/Project';
import Skill from '../pages/Skill/Skill';
import Service from '../pages/Service/Service';

type TRouters = {
    path: string;
    component: React.ComponentType;
    layout?: React.ComponentType | null;
};

const publishRoute: Array<TRouters> = [
    { path: config.Routes.home, component: Home },
    { path: config.Routes.about, component: About },
    { path: config.Routes.contact, component: Contact },
    { path: config.Routes.skills, component: Skill },
    { path: config.Routes.services, component: Service },
    { path: config.Routes.project, component: Project },
    { path: config.Routes.error, component: Error404, layout: null },
];

// required sign in
const privateRoute: Array<TRouters> = [
    { path: config.Routes.home, component: Home },
    { path: config.Routes.error, component: Error404, layout: null },
];

export { publishRoute, privateRoute };
