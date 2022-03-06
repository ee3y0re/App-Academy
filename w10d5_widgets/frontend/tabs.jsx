import React from 'react';

/*
Consider creating a Header subcomponent for the tabs.
*/
class SubClassHeaders extends React.Component {
  render() {
    // the index of the tab that is clicked
    const clickedOnTabIdx = this.props.tabIndex;
    // mapping through array of tabProps
    const headers = this.props.tabProps.map((tab, idx) => {
      // label/title
      const label = tab.label;
      // toggles the display or show
      const setClassName = idx === clickedOnTabIdx ? 'active' : "";
      return (
        <li
          key={idx}
          className={setClassName}
          /*
          Add a click handler to each header that updates the selected index in the Tabs component.
          */
          //it's responding to each click of the label of the tab
          //idk why we have interpolated an empty string there, we should test it after css styling
          onClick={() => this.props.indexArg(idx)}>
          {label}{' '}
        </li>
      );
    });

    /*     
      In the render method of Tabs, render a collection of < h1 > s(with titles) in a < ul > and the content of the selected tab in an < article >.
        Consider creating a Header subcomponent for the tabs. 
    */
    return(
      <ul className="tab-title">
        {/*
        In the render method of Tabs, render a collection of <h1>s (with titles) in a <ul> and the content of the selected tab in an <article>.
        */}
        {headers}
      </ul>
    );
  }
}

/* 
Make a Tabs component. 
*/
class Tabs extends React.Component {
  constructor(props) {
    // any constant that is from the root but we will specify later that it would be tab props
    super(props);
    /*
    Keep track of the selected tab's index in your Tabs component's state. Set it initially to zero.
    */
    this.state = {
      tabIndex: 0
    }
    //binding tabTracker function to tabs in order to keep context of tabs
    this.tabTracker = this.tabTracker.bind(this);
  }

  //tab tracker is setter for the index of the tab we are looking at
  tabTracker(selectIdx) {
    this.setState({tabIndex: selectIdx})
  }

  render() {
    //this.props links us to the props passed down from root
    //this.props.tabProps narrows the root's props to only the defined tabProps
    //this.state.tabIndex is the current index we are wanting to look at from the props
    const currentIdxTab = this.props.tabProps[this.state.tabIndex];

    return (
      <div className="tabs-container">
        <h1>Emotional Tabs</h1>
        {/*
        In the render method of Tabs, render a collection of <h1>s (with titles) in a <ul> and the content of the selected tab in an <article>.
        */}
        <SubClassHeaders
          tabIndex={this.state.tabIndex}
          indexArg={this.tabTracker}
          tabProps={this.props.tabProps}>
        </SubClassHeaders>
        <div className="tabs-notes">
          <article>
            {currentIdxTab.note}
          </article>
        </div>
      </div>
    );
  }
}

export default Tabs;
