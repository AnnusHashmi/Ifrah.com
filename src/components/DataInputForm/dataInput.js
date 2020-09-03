import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import {db} from '../../firebase/firebase.utils';

class DataInput extends Component{

    constructor(props){
        super(props);
        this.state = {
            id : '',
            name : '',
            imgUrl : '',
            price : '',
            quantity : '',
            size : ''
        }
    }

    handleInputChange = (e) => {
        let {name, value} = e.target;
        this.setState({[name] : value});
    }

    hanleSubmit = (e) => {
        e.preventDefault();
        db.child('items').push(
            this.state
        )
    }

    render(){
        return(
            <div>
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h1 class="display-4"> ADD DATA TO YOUR WEBSITE FROM HERE</h1>
                    </div>        
                </div>

                <Form onSubmit={this.hanleSubmit}>
                        <FormGroup>
                                    <Label for="id"> Enter any random ID for the product  </Label>
                                    <Input type="text" name="id" id="id" placeholder="Enter the ID" value={this.state.id} onChange={this.handleInputChange} />    
                        </FormGroup> 

                        <FormGroup>
                                    <Label for="name"> Name of the Product  </Label>
                                    <Input type="text" name="name" id="name" placeholder="Enter the name" value={this.state.name} onChange={this.handleInputChange} />    
                        </FormGroup> 

                        <FormGroup>
                                    <Label for="imgUrl"> Img URL </Label>
                                    <Input type="text" name="imgUrl" id="imgUrl" placeholder="Enter the imgUrl" value={this.state.imgUrl} onChange={this.handleInputChange} />    
                        </FormGroup> 

                        <FormGroup>
                                    <Label for="price"> Enter Price </Label>
                                    <Input type="price" name="price" id="price" placeholder="Enter the price" value={this.state.price} onChange={this.handleInputChange} />    
                        </FormGroup> 

                        <FormGroup>
                                    <Label for="quantity"> Enter quantity </Label>
                                    <Input type="quantity" name="quantity" id="quantity" placeholder="Enter the quantity" value={this.state.quantity} onChange={this.handleInputChange} />    
                        </FormGroup>

                        <FormGroup>
                            <Label>Choose the size for this dress</Label>
                            <Input type="select" className="form-control" placeholder="Choose your size" aria-label="Recipient's username" aria-describedby="basic-addon2" >
                                <option>3 Months</option>
                                <option>6 Months</option>
                                <option>9 Months</option>
                                <option>1-2 Years</option>
                                <option>2-3 Years</option>
                                <option>3-4 Years</option>
                                <option>4-5 Years</option>
                                <option>5-6 Years</option>
                                <option>6-7 Years</option>
                                <option>7-8 Years</option>
                                <option>8-9 Years</option>
                                <option>9-10 Years</option>
                                <option>10-12 Years</option>
                            </Input>
                        </FormGroup>

                        <Button color='success' size="lg" type='submit'>Submit</Button>
                </Form>
            </div>
        );
    }
}

export default DataInput;