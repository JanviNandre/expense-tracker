import React from 'react'

const InfoCard = () => {

    const isIncome = Math.random(Math.random());
    return (
        <div elevation={3} style={{ textAlign: "center", padding: "0 10px" }}>
            Try saying : <br />
            Add {isIncome ? "Income " : "Expense "} 
            for {isIncome ? "$100 " : "$50 "}
            in Category {isIncome ? "Business " : "Food "}
            for {isIncome ? "Monday " : "Tuesday "}
        </div>
    )
}

export default InfoCard
