import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../collection-preview/collection-preview.component';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

import './collections-overview.styles.scss';

const CollectionsOverview = ({ collections }) => (
  <div className='collections-overview'>
    <div class="jumbotron jumbotron-fluid">
        <div class="container" style={{textAlign : "center"}}>
          <h1 class="display-4">CHECKOUT ARE BEST SELLING PRODUCTS</h1>
          <p class="lead">Why wait when you can wear LUXURY! BUY NOW</p>
        </div>
      </div>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);
