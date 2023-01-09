import React from "react"
import data from './data'
import Navbar from './components/Navbar'
import Card from './components/Card'

const App = () => {
    const cardData = data.map(item => {
    return (
        <Card 
            key={item.locTitle}
            {...item}
        />
        ) 
    })
    return (
        <div>
            <Navbar />
            {cardData}
        </div>
    )
}

export default App;