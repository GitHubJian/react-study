import Index from './index';
import Index1 from './index1';

const router = [
    { path: '/', component: Index, exact: true },
    { path: '/about', component: Index1 }
];

export default router;
