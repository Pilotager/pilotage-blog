import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import routes from './Routers';

// 路由类型
interface IRoute {
    component: any;
    path: string;
    exact: boolean;
}

// 重定向
const RedirectComp = (): JSX.Element => {
    return <Redirect to="/home" />;
};

class App extends React.Component<any, any> {
    public render(): React.ReactNode {
        return (
            <Switch>
                {
                    routes.map((route: IRoute, i: number) =>
                        <Route key={i} exact={route.exact} path={route.path} component={route.component}/>
                    )
                }
                <Route path="/" exact={true} render={RedirectComp}/>
            </Switch>
        );
    }
}

export default App;
