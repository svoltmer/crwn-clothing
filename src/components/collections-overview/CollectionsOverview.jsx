import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { CollectionsOverviewContainer } from "./CollectionsOverview.styles";

import CollectionPreview from "../collection-preview/CollectionPreview";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

import "./CollectionsOverview.styles.scss";

const CollectionsOverview = ({ collections }) => {
  console.log("Collections:", collections);
  return (
    <CollectionsOverviewContainer>
      {collections.map(({ id, ...otherCollectionProps }) => {
        return <CollectionPreview key={id} {...otherCollectionProps} />;
      })}
    </CollectionsOverviewContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
