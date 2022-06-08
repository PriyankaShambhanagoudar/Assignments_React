import React from "react";
import { Modal, Button } from 'react-bootstrap'
import Card from './Card'
import Classes from './modal.module.css'

const arr = []

function MyVerticallyCenteredModal(props) {


    const idDetails = (card) => {
        arr.push(card)
    }


    //checkbox behave like radio button
    const checkbox = document.querySelectorAll('.box')
    document.body.addEventListener('click', (e) => {
        for (const itrator of checkbox) {
            itrator.checked = false
        }
        const clickedCheckBox = [...checkbox].find((x) => x === e.target)
        clickedCheckBox.checked = true
    })

    // const submitHandler = (e) => {
    //     e.preventDefault()
    //     props.onHide = true
    // }

    //Creating form
    
    const FormCreate = (iplTeam, ind) => {
        return (
            <form key={ind}>
                <h1>{iplTeam.team}</h1>

                <div className={Classes.divMarg}>
                    <label htmlFor="name">Name</label>
                    <input className={Classes.inputName} type="text" placeholder="Enter name" />
                </div>

                <div className={Classes.divMarg}>
                    <label htmlFor="id"  >Category</label>
                    <select id="id" className={Classes.inputName} >
                        <option>Select Category</option>
                        <option id="Batsman">Batsman</option>
                        <option id="Bowler">Bowler</option>
                        <option id="All_rounder">All-rounder</option>
                        <option id="Wicket_keeper">Wicket keeper</option>
                    </select>
                </div>

                <div className={Classes.divMarg}>
                    <label  >
                        <input type="checkbox" name='captain' className="box" />
                        Captain
                    </label>
                    <label  >
                        <input type="checkbox" name='ViceCaptain' className="box" />
                        Vice- Captain
                    </label>
                </div>

                <button className={Classes.b1} type="Submit ">submit</button>
            </form>
        )
    }

    return (
        <div>
            {/* Pop-up Modal */}
            <Modal
                {...props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Select Team to create
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Card idDetails={idDetails} />
                </Modal.Body>
                <Modal.Footer>
                    <Button type="submit" onClick={props.onHide} >Continue</Button>
                    {/* props.onHide */}
                </Modal.Footer>
            </Modal>

            {/*  Adding form */}
            {<div>{arr.map((FormCreate))}</div>}

        </div>

    );
}
export default MyVerticallyCenteredModal



