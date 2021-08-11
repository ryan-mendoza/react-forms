import React, { Component } from 'react';
import './styles.css';
import Loading from './loading.gif';

class FormControl extends Component {
  state = {
    value: '',
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  render() {
    const { id, label, onInputComplete, ...restProps } = this.props;
    const { value } = this.state;
    return (
      <div className='reactForm'>
        <form>
          <div className='formControl'>
            {/* <label htmlFor={id}>{label}</label> */}
            <input
              id='email'
              value={this.state.value}
              type='email'
              placeholder='Please enter your email'
              onChange={this.handleChange}
              // {...restProps}
            />
          </div>
        </form>
        {value.trim().length > 0 ? (
          <output>input value {value} updated!</output>
        ) : (
          <output>
            <br />
            waiting for input
            <br />
            <img src={Loading} height={50} />
          </output>
        )}
      </div>
    );
  }
}

export default FormControl;
