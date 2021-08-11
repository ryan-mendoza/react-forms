import React, { Component } from 'react';
import './styles.css';

class FormControl extends Component {
  state = {
    value: '',
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value }, () =>
      this.props.onInputComplete(this.state.value)
    );
  };

  render() {
    const { id, label, onInputComplete, ...restProps } = this.props;
    return (
      <form>
        <div className='formControl'>
          <label htmlFor={id}>{label}</label>
          <input
            id={id}
            value={this.state.value}
            type='email'
            placeholder='Please enter your email'
            onChange={this.handleChange}
            {...restProps}
          />
        </div>
      </form>
    );
  }
}

export default FormControl;
