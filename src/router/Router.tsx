import Logging from '../pages/logging/Logging'
import Error from '../pages/error/Error'
import Dashboard from '../pages/dashboard/Dashboard'
import {Routes, Route} from 'react-router-dom'

export default function Router() {
    const path = [
        {
            path: '/',
            element: <Logging />,
        },
        {
            path: '/dashboard/:id',
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
