import React, {Component, PropTypes} from 'react';
import {List, ListItem, makeSelectable} from 'material-ui/List';

let SelectableList = makeSelectable(List);

function wrapState(ComposedComponent) {
  return class SelectableList extends Component {
    static propTypes = {
      children: PropTypes.node.isRequired,
      defaultValue: PropTypes.number.isRequired,
    };

    componentWillMount() {
      this.setState({
        selectedIndex: this.props.defaultValue,
      });
    }

    handleRequestChange = (event, index) => {
      this.setState({
        selectedIndex: index,
      });
    };

    render() {
      return (
        <ComposedComponent
          value={this.state.selectedIndex}
          onChange={this.handleRequestChange}
          {...this.props}
        >
          {this.props.children}
        </ComposedComponent>
      );
    }
  };
}

SelectableList = wrapState(SelectableList);

const ListExampleSelectable = () => (
    <SelectableList defaultValue={1} style={{width: 200, bottom: 0, borderRight: 'solid 1px #d9d9d9', marginTop: 75, minHeight: 700}}>
      <ListItem
        value={1}
        primaryText="Dashboard"
      />
      <ListItem
        value={2}
        primaryText="Accounts"
      />
    </SelectableList>
);

export default ListExampleSelectable;
