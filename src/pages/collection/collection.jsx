import React from "react";

import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selector"

import CollectionItem from "../../components/collection-item/collection-item";

import "./collection.scss";
import { withRouter } from "react-router-dom";

const CollectionPage = ({ collection, ...props }) => {
    const { title, items } = collection;
    return (
        <div className="collection-page">
            <h2> test</h2>
            <h2 className="title">{title}</h2>
            <div className="items">
                {
                    items.map(item => <CollectionItem key={item.id} item={item} />)
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        collection: selectCollection(state, ownProps.match.params.collectionId)
    }
}

export default withRouter(connect(mapStateToProps)(CollectionPage));