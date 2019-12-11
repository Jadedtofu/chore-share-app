import React, { Component } from 'react';
import './Chore.css';
import ApiContext from '../ApiContext';
import config from '../config';
import { promised } from 'q';

class Chore extends Component {
  static defaultProps = {
    match: {
      params: {}
    },

    onDeleteChore: () => {}
  }

  static contextType = ApiContext;

  handleClickDeleteChore = e => {
    e.preventDefault();
    const chore_id = this.props.id
    console.log(chore_id);

    fetch(`${config.API_ENDPOINT}/chores/${chore_id}`, {
      method: `DELETE`,
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(res => {
      if(!res.ok) {
        return res.json().then(e => Promise.reject(e))
      }
    })
    .then(() => {
      this.context.deleteChore(chore_id)
      this.props.onDeleteChore(chore_id)
    })
    .catch(error => {
      console.error({ error })
    });
  }

    render() {
        const { chore, checked } = this.props;
        // console.log(this.props);

        // will have to do something with the checked prop for crossing out chore

        return(
            <>
              <p className ="chore">
                {chore}
              </p>
              <button type="button" className="done-button">Done</button>
              <button type="button" className="delete-button"
                onClick={this.handleClickDeleteChore}
              >
                  Delete
              </button>
            </>
        )
    }
}

export default Chore;