import config from '../config/index';
import Error404 from '../pages/Error404/Error404';
import Contact from '../pages/Contact/Contact';
import Home from '../pages/Home';
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
    { path: config.Routes.contact, component: Contact },
    { path: config.Routes.skills, component: Skill },
    { path: config.Routes.services, component: Service },
    { path: config.Routes.project, component: Project },
    { path: config.Routes.error, component: Error404, layout: null },
];

const privateRoute: Array<TRouters> = [
    { path: config.Routes.home, component: Home },
    { path: config.Routes.error, component: Error404, layout: null },
];

export { publishRoute, privateRoute };
