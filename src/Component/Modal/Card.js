import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import classes from './modal.module.css'


const CardCreate = (props) => {


    const [selectTeam, setSelectTeam] = useState(false)

    const IplTeam = [
        { id: 1, team: 'RCB' },
        { id: 2, team: 'RR' },
        { id: 3, team: 'KKR' },
        { id: 4, team: 'MI' },
        { id: 5, team: 'CSK' },
    ]


    const handlerChange = (event) => {
        setSelectTeam(event.target.value)
    }


    const renderCard = (card, index) => {
        return (
            <div key={index} >
                {/* Creating Card */}
                <Card style={{ width: '18rem' }} className='box' >
                    <Card.Body>
                        <Card.Title>{card.team}</Card.Title>
                        <Card.Text>
                            IPL Team
                        </Card.Text>
                    </Card.Body>

                </Card>
                <input type='checkbox' value={selectTeam} onChange={handlerChange} onClick={() => props.idDetails(card)} />

            </div>

        )
    }
    return (
        <div className='grid'> {IplTeam.map((renderCard))}</div>
    );


}

export default CardCreate;
