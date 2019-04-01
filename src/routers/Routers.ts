import {
    Home
} from '../pages';

export default [
    {
        path: '/home', // 路由名称
        component: Home, // 组件
        exact: true // 是否开启强匹配
    }
];
