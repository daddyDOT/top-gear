import React from 'react'

const models = [
    "Audi",
    "Mercedes",
    "Volvo",
    "Mazda",
    "Škoda",
    "Renault",
    "Peugeot"
]

const Recommended = () => {
    const firstRandom = Math.floor(Math.random() * models.length);
    let secondRandom = Math.floor(Math.random() * models.length);

    while(firstRandom == secondRandom)
    {
        secondRandom = Math.floor(Math.random() * models.length);
    }

    return (
        <div>
            <div className='box'>{firstRandom}</div>
            <div className='box'>{secondRandom}</div>
        </div>
    )
}

export default Recommended