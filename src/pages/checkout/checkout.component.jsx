import React, {useState} from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CustomButton from '../../components/custom-button/custom-button.component'
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import {
  selectCartItems,
  selectCartTotal
} from '../../redux/cart/cart.selectors';

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  WarningContainer
} from './checkout.styles';

const CheckoutPage = ({ cartItems, total } , props) => {
    const {
      className
    } = props;
  
    const [modal, setModal] = useState(false);
  
    const toggle = () => setModal(!modal);
  
    return(
<CheckoutPageContainer>
    <CheckoutHeaderContainer>
      <HeaderBlockContainer>
        <span>Product</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Description</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Quantity</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Price</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Remove</span>
      </HeaderBlockContainer>
    </CheckoutHeaderContainer>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <TotalContainer>TOTAL: ${total}</TotalContainer>
    
    
    <div className='total'>
        <CustomButton  onClick={toggle}> Proceed to Billing </CustomButton>
      </div>

      <div>
        <Modal isOpen={modal} toggle={toggle} className={className}>
          <ModalHeader toggle={toggle}>Purchase Now</ModalHeader>
          <ModalBody>
          <div className="container">
                <div className="row justify-content-md-center mt-5">
                  <div className="col-12">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">Implementation for the 2Pay.js client with style injection</h5>
                          
                        <form type="post" id="payment-form">
                          <div className="form-group">
                            <label for="name" className="label control-label">Name</label>
                            <input type="text" id="name" className="field form-control" />
                          </div>

                          <div id="card-element">
                            
                          </div>

                          <button className="btn btn-primary" type="submit">Generate token</button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>Confrim Purchase</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
  </CheckoutPageContainer>
    )
  
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);