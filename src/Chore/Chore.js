import React, { Component } from 'react';
import './Chore.css';
import ApiContext from '../ApiContext';
import config from '../config';

class Chore extends Component {
  static defaultProps = {
    match: {
      params: {}
    },

    onCheckChore: () => {},
    onDeleteChore: () => {},
  }

  constructor(props) {
    super(props);
    this.state = {
      choreChecked: false
    }
  }

  static contextType = ApiContext;

  handleClickCheckChore = e => {
    e.preventDefault();
    const chore = this.props.chore
    // let choreChecked = this.props.checked;
    // console.log(chore);
    // console.log(choreChecked);
    
    this.context.checkChore(chore);
    this.props.onCheckChore(chore);

    // this.setState({
    //   choreChecked: !choreChecked
    // })

    this.setState({
      choreChecked: !this.state.choreChecked
    });
  }

  handleClickDeleteChore = e => {
    e.preventDefault();
    const chore_id = this.props.id
    // console.log(chore_id);

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
        const { chore } = this.props;
        // console.log(this.props);
        return(
            <>
              <p className={this.state.choreChecked ? "chore linethrough" : "chore"} >
                {chore}
              </p>
              <button type="button" className={this.state.choreChecked ? "undo-btn" : "done-btn" }
                onClick={this.handleClickCheckChore}>
                {this.state.choreChecked ? 'Undo' : 'Done'}
              </button>
              <button type="button" className="delete-btn"
                onClick={this.handleClickDeleteChore}>
                  Delete
              </button>
            </>
        )
    }
}

export default Chore;