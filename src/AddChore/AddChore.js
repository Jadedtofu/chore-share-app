import React, { Component } from 'react';
import ShareForm from '../ShareForm/ShareForm';
import './AddChore.css';
import ApiContext from '../ApiContext';
import ValidationError from '../ValidationError/ValidationError';
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

    validateChoreRoomie(fieldValue) {
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
        e.preventDefault();
        const newChore = {
            chore: e.target['chore-name'].value,
            roomie_id: e.target['roomie-id'].value
        }

        fetch(`${config.API_ENDPOINT}/chores`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newChore)
        })
        .then(res => {
            if(!res.ok) {
                return res.json().then(e => Promise.reject(e));
            }
            return res.json()
        })
        .then(chore => {
            this.context.addChore(chore);
            this.props.history.push(`/home`);
        })
        .catch(error => {
            console.error({ error });
        });
    }

    render() {
        const { roomies=[] } = this.context;

        return (
        <main className="add-chore-page">
            <h2 className="add-chore-text">
                Add a Chore
            </h2>

            <ShareForm onSubmit={this.handleSubmit}>
                <div className='field'>
                    <label htmlFor="chore-input">
                        Chore
                    </label>
                    <input type='text' id="chore-input" name='chore-name' placeholder="Take out the trash" required 
                    onChange={e => this.updateChoreChore(e.target.value)} />
                    <ValidationError hasError={!this.state.choreChoreValid} message={this.state.validationMessages.choreChoreName} />
                </div>
                <div className='field'>
                    <label htmlFor="roomie-select">
                        Select a Roomie
                    </label>
                    <select id="roomie-input" name="roomie-id"
                    onChange={e => this.updateChoreRoomie(e.target.value)} >
                        <option value="empty">...</option>
                        {roomies.map(roomie => 
                            <option key={roomie.id} value={roomie.id}>
                                {roomie.name}
                            </option>
                        )}
                        {/* <option value="Jane Rom">Jane Rom</option>
                        <option value="James Mor">James Mor</option> */}
                    </select>
                    <ValidationError hasError={!this.state.choreRoomieValid} message={this.state.validationMessages.choreChoreRoomie} />
                </div>
                <div className="buttons">
                    <button type="submit" className="add-chore-form-btn" disabled={!this.state.formValid} >
                        Add Chore
                    </button>
                </div>
            </ShareForm>
        </main>
        );
    }
}

export default AddChore;