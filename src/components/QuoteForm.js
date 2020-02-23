import React from 'react';
import './QuoteForm.css';

class QuoteForm extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            character: 'Homer Simpson',
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event) => {
        this.setState ({character: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }

    render() {
      return (
        <form
          className="QuoteForm" onSubmit={this.handleSubmit}
        >
          <label htmlFor="character">Character:</label>
          <input
            id="name"
            name="character"
            type="text"
            value= {this.state.character}
            onChange={this.handleChange}
          />
        </form>
      );
    }
  }

export default QuoteForm
