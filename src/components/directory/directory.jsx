import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySection } from "../../redux/directory/directory.selector"

import MenuItem from "../menu-item/menu-item";
import "./directory.scss"


const Directory = ({ sections }) => {

  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => {
        return (<MenuItem key={id} {...otherSectionProps} />
        )
      })}
    </div>
  )

};

const mapStateToProps = createStructuredSelector ({
  sections: selectDirectorySection
})

export default connect(mapStateToProps)(Directory);