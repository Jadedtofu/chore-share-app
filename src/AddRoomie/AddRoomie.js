import React, { Component } from 'react';
import ShareForm from '../ShareForm/ShareForm';
import './AddRoomie.css';
// import { Link } from 'react-router-dom';
import ApiContext from '../ApiContext';
import ValidationError from '../ValidationError/ValidationError';
import config from '../config';

class AddRoomie extends Component {
    static defaultProps = {
        history: {
            push: () => { }
        },
    }

    constructor(props) {
        super(props);
        this.state = {
            roomieName: '',
            roomieNameValid: false,
            formValid: false,
            validationMessages: {
                roomieNameName: ''
            }
        }
    }

    updateRoomieName(roomieName) {
        this.setState({roomieName}, () => {this.validateRoomieName(roomieName)});
    }

    validateRoomieName(fieldValue) {
        const fieldErrors = { ...this.state.validationMessages};
        let hasError = false;

        fieldValue = fieldValue.trim();
        if(fieldValue.length === 0) {
            fieldErrors.roomieNameName = 'Please type a Name for this roomie';
            hasError = true;
        }

        this.setState({
            validationMessages: fieldErrors,
            roomieNameValid: !hasError
        }, this.formValid);
    }

    formValid() {
        this.setState({
            formValid: this.state.roomieNameValid
        });
    }

    static contextType = ApiContext;

    // adds roomie, but won't update state until refresh. Also won't go to Home after
    handleSubmit = e => {
        e.preventDefault()
        const roomie = {
            name: e.target['roomie-name'].value,
            note: e.target['roomie-note'].value
        }

        fetch(`${config.API_ENDPOINT}/roomies`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(roomie)
        })
        // .then(res => {
        //     console.log(roomie);
        // })
        .then(res => {
            if (!res.ok) {
                return res.json().then(e => Promise.reject(e))
            }
            return res.json()
        })
        .then(roomie => {
            this.context.addRoomie(roomie)
            this.props.history.push(`/home`)
        }) // this pushes to the endpoint
        .catch(error => {
            console.error({error})
        });
    }

    render() {
        return (
        <section className="add-roomie">
            <h2>
                Add a Roomie
            </h2>
            <ShareForm onSubmit={this.handleSubmit}>
                <div className='field'>
                    <label htmlFor="roomie-input">
                        Roomie
                    </label>
                    <input type='text' id="roomie-input" name='roomie-name' placeholder="Jane Rom" required 
                    onChange={e => this.updateRoomieName(e.target.value)} />
                    <ValidationError hasError={!this.state.roomieNameValid} message={this.state.validationMessages.roomieNameName} />
                </div>
                <div className='field'>
                    <label htmlFor="roomie-note-input">
                        Notes
                    </label>
                    <textarea id="roomie-note-input" name='roomie-note' rows="6" placeholder="Rooming for 6 months, likes cats" />
                </div>
                <div className="buttons">
                    <button type="submit" disabled={!this.state.formValid}>
                        Add Roomie
                    </button>
                    {/* This needs to go to the Home page when it's done submitting :( */}
                </div>
            </ShareForm>
        </section>
        );
    }
}

export default AddRoomie;