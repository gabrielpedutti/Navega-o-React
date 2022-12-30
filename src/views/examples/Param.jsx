import React from 'react'
import { useParams } from 'react-router-dom'

const Param = props => {
    const { id } = useParams()
    // O ID é o que foi passado como ID pela URL no Menu.jsx
    return (
        <div className="Param">
            <h1>Param</h1>
            <h2>Valor: {id}!</h2>
        </div>
    )
}

export default Param