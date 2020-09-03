import React, { Component } from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';
import {db} from '../../firebase/firebase.utils'
import { selectCollection } from '../../redux/shop/shop.selectors';

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer
} from './collection.styles';

class CollectionPage extends Component{

  constructor(props){
    super(props)
    this.state = {
      items : []
    }
  }
  componentDidMount(){
    db.child('items').on('value' , snapshot => {
      if(snapshot.val() != null){
        this.setState({
          ...this.state,
          items : snapshot.val()
        })
      }
    });
    
  };

  render(){
    {
      var arrayOfRecords = Object.values(this.state.items);
    }
    const {title} = this.props.collection
    return (
      <CollectionPageContainer>
        <CollectionTitle>{title}</CollectionTitle>
        <CollectionItemsContainer>
          {arrayOfRecords.map(record => (
            <CollectionItem key={record.id} item={record} />
          ))}
        </CollectionItemsContainer>
      </CollectionPageContainer>
    );
  }
  
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);