import React from "react";
import "./collectionsOverview.scss";

import  PreviewCollection  from "../preview-collection/preview-collection"


import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCollectionsForPreview } from "../../redux/shop/shop.selector";

const CollectionsOverview = ({ collections }) =>{
    return(
        <div className = "collections-overview">
             {
          collections.map(({id, ...otherCollectionProps}) =>{
              return(
                  <PreviewCollection key={id} {...otherCollectionProps} />
              )
          })}
        </div>
    )
}

 
const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);