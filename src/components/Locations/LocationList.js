import "./Locations.css"
import {useNavigate} from "react-router-dom"
import { useEffect, useState } from "react"



export const LocationList = () => {
    const [locations, setLocations] = useState([])
    // const [filteredLocations, setFiltered] = useState([])
       const navigate = useNavigate()

       useEffect(
        () => {
            fetch('http://localhost:8088/locations')
            .then(response => response.json())
            .then((locationArray) => {
                setLocations(locationArray)
            })
            console.log("Initial state of locations", locations) // View the initial state of locations
        },
        [] // When this array is empty, you are observing initial component state
    )

return <>
    <h2>List of Locations</h2><article className="locations">
        {locations.map(
            (location) => {
                return <section className="location" key={`location--${location.id}`}>
                    <header>{location.address}</header>
                    <footer>Sq Ft: {location.sqFt}</footer>
                </section>
            }
        )}
    </article></>
} 

