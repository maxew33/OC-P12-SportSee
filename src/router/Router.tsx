import Error from '../pages/error/Error'
import Dashboard from '../pages/dashboard/Dashboard'
import {Routes, Route} from 'react-router-dom'
import LogIn from '../pages/login/LogIn'

export default function Router() {
    const basePath = process.env.BASE_URL

    const path = [
        {
            path: `${basePath}`,
            element: <LogIn />,
        },
        {
            path: `${basePath}dashboard/:id`,
            element: <Dashboard />,
        },
        {
            path: '*',
            element: <Error />,
        },
    ]
    return (
        <Routes>
            {path.map((e, idx) => (
                <Route path={e.path} element={e.element} key={idx} />
            ))}
        </Routes>
    )
}