import React, { Component } from 'react';
import ShareForm from '../ShareForm/ShareForm';
import './AddChore.css';
import ApiContext from '../ApiContext';
import config from '../config';

class AddChore extends Component {
    static defaultProps = {
        history: {
            push: () => { }
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            choreChore: '',
            choreRoomie: '',
            choreChoreValid: false,
            choreRoomieValid: false,
            formValid: false,
            validationMessages: {
                choreChoreName: '',
                choreChoreRoomie: ''
            }
        }
    }

    updateChoreChore(choreChore) {
        this.setState({choreChore}, () => {this.validateChoreChore(choreChore)});
    }

    updateChoreRoomie(choreRoomie) {
        this.setState({choreRoomie}, () => {this.validateChoreRoomie(choreRoomie)});
    }

    validateChoreChore(fieldValue) {
        const fieldErrors = {...this.state.validationMessages};
        let hasError = false;

        fieldValue = fieldValue.trim();
        if(fieldValue.length === 0) {
            fieldErrors.choreChoreName = 'Please type a Chore in this field';
            hasError = true;
        }

        this.setState({
            validationMessages: fieldErrors,
            choreChoreValid: !hasError
        }, this.formValid);
    }

    validateChoreRoomie(choreRoomie) {
        const fieldErrors = {...this.state.validationMessages};
        let hasError = false;

        if(fieldValue === "empty") {
            fieldErrors.choreRoomie = 'Please select a Roomie';
            hasError = true;
        }

        this.setState({
            validationMessages: fieldErrors,
            choreRoomieValid: !hasError
        }, this.formValid);
    }

    formValid() {
        this.setState({
            formValid: this.state.choreChoreValid && this.state.choreRoomieValid
        });
    }

    static contextType = ApiContext;

    handleSubmit = e => {
        e.preventDefault()
    }

    render() {
        const { roomies=[] } = this.context;

        return (
        <section className="add-chore">
            <h2>
                Add a Chore
            </h2>
            <ShareForm>
                <div className='field'>
                    <label htmlFor="chore-input">
                        Chore
                    </label>
                    <input type='text' id="chore-input" name='chore-name' placeholder="Take out Trash" required />
                </div>
                <div className='field'>
                    <label htmlFor="roomie-select">
                        Select a Roomie
                    </label>
                    <select id="roomie-id" name="roomie-id-select">
                        <option value="empty">...</option>
                        {roomies.map(roomie => 
                            <option key={roomie.id} value={roomie.id}>
                                {roomie.name}
                            </option>
                        )}
                        {/* <option value="Jane Rom">Jane Rom</option>
                        <option value="James Mor">James Mor</option> */}
                    </select>
                </div>
                <div className="buttons">
                    <button type="submit">
                        Add chore
                    {/* This needs to go to /home page when submitted */}
                    </button>
                </div>
            </ShareForm>
        </section>
        );
    }
}

export default AddChore;