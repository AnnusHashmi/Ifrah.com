import React, { Component } from 'react';
import './contactUs.css';
import FormInput from '../../components/form-input/form-input.component'
import CustomButton from '../../components/custom-button/custom-button.component'

class ContactUs extends Component{

    constructor(props){
        super(props)
        this.state = {
            email : '',
            name : '', 
            number : '',
            address : ''
        }
    }

    handleChange = event => {
        const { name, value } = event.target;
    
        this.setState({ [name]: value });
      };

    render(){
        const {email , name, number, address} = this.state;
        return(
            <div>
                <div class="jumbotron jumbotron-fluid">
                    <div class="container" style={{textAlign:"center"}}>
                        <h1 class="display-4">Leave Us a message</h1>
                        <p class="lead">We'll be really happy to hear from you!</p>
                    </div>

                </div>

                <div className='container inputStyles' className='inputStyles'>
                <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                        required
                    />
                    <FormInput
                        type='text'
                        name='name'
                        value={name}
                        onChange={this.handleChange}
                        label='name'
                        required
                    />
                    <FormInput
                        type='text'
                        name='number'
                        value={number}
                        onChange={this.handleChange}
                        label='Number'
                        required
                    />
                    <FormInput
                        type='text'
                        name='address'
                        value={address}
                        onChange={this.handleChange}
                        label='address'
                        required
                    />
                    <CustomButton type='submit'>SEND FEEDBACK</CustomButton>
                    
                </div>
            </div>
        );
    }
}

export default ContactUs