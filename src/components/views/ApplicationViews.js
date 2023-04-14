
import { Outlet, Route, Routes } from "react-router-dom"

import { LocationList } from "../Locations/LocationList"

export const ApplicationViews = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>Kandy Korner</h1>
                    <div>Your one-stop-shop to get all your favorite candies!</div>

                    <Outlet />
                </>
            }>

                <Route path="locations" element={ <LocationList /> } />


            </Route>
        </Routes>
    )
}