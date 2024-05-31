import { createBrowserRouter } from 'react-router-dom'

import Root from '../Layouts/Root'
import Home from '../Pages/Home/Home'
import Error from '../Pages/Error/Error'
import LogIn from '../Pages/LogIn/LogIn'
import SignUp from '../Pages/SignUp/SignUp'
// import Login from '../pages/Login/Login'
// import SignUp from '../pages/SignUp/SignUp'
// import RoomDetails from '../pages/RoomDetails/RoomDetails'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            // {
            //     path: '/room/:id',
            //     element: <RoomDetails />,
            // },
        ],
    },
    { path: '/logIn', element: <LogIn /> },
    { path: '/signUp', element: <SignUp /> },
])
