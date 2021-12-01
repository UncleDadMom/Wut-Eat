import {useState} from 'react'
export default function RestaurantVote({restaurants}){
    const [chosenRestaurant, setChosenRestaurant] = useState({})
    let vote = (e) => setChosenRestaurant(e.target.id)
    let random = restaurants[Math.floor(Math.random() * restaurants.length)]


    return(
        <main>
            <img src={random.image_url} id={random.id}/>
        </main>
    )
}