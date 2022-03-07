// importing react and each class into the root
import React from 'react';
import Clock from './clock';
import Tabs from './tabs';

/* 
Root should pass the Tabs component an array of 
Javascript objects that each have title and content as keys.
 */
const tabProps = [
  { label: "validation", note: "I know you've been feeling frustrated on how hard this project is."},
  { label: "reassurance", note: "It will be okay! As long as you keep trying, you're bound to figure it out."},
  { label: "perspective-taking", note: "This isn't a test or a race. This is just practice ^^"}
];

function Root() {
  return (
    <div id="rendered-root">
      <Clock />
      {/* without the tabProps={tabProps}, it makes everything undefined */}
      <Tabs tabProps={tabProps}/>
    </div>
  )
}

export default Root;
