import React, { Component } from "react";
import PropTypes from "prop-types";

import constants from "./lib/constants";
import { bem } from "./lib/common";
import dictionaries from "./i18n";
import components from "./components";

import DefaultEditor from "./DefaultEditor";

class PlotlyReactEditor extends Component {
  getChildContext() {
    var gd = this.props.graphDiv || {};
    var dataSourceNames = Object.keys(this.props.dataSources || {});
    return {
      locale: this.props.locale,
      dictionaries: dictionaries,
      data: gd.data,
      fullData: gd._fullData,
      layout: gd.layout,
      fullLayout: gd._fullLayout,
      handleUpdate: this.updateProp.bind(this),
      dataSources: this.props.dataSources,
      dataSourceNames: dataSourceNames,
    };
  }

  updateProp(attr, value) {
    this.props.onUpdate &&
      this.props.onUpdate(this.props.graphDiv, attr, value);
  }

  render() {
    return (
      <div className={bem()}>
        {this.props.graphDiv &&
          (this.props.children ? this.props.children : <DefaultEditor />)}
      </div>
    );
  }
}

PlotlyReactEditor.defaultProps = {
  locale: "en",
};

PlotlyReactEditor.childContextTypes = {
  locale: PropTypes.string,
  dictionaries: PropTypes.object,
  dataSources: PropTypes.object,
  dataSourceNames: PropTypes.array,
  data: PropTypes.array,
  fullData: PropTypes.array,
  layout: PropTypes.object,
  fullLayout: PropTypes.object,
  handleUpdate: PropTypes.func,
};

Object.assign(PlotlyReactEditor, components);

export default PlotlyReactEditor;