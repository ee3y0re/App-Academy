//entry point
//import
const FollowToggle = require('./follow_toggle.js');

// document.addEventListener('DOMContentLoaded', (event) => {
//     //constructor?
// });

// what is a doc ready cb
// $ says we want to enter jquery library
// const = () => {
//     //jquery search for button follow toggle
//     $('button.follow-toggle').on('click', e => {
//         e.preventDefault();
//         //constructor - call helper to switch follow status
//     })
// }

//define helper
//uses util

$(function(){
    //grab all follow toggle      //callback
    const buttons = $('button.follow-toggle');
    buttons.each((index) => {
        new FollowToggle(buttons.eq(index));
    })
})//jquery instructed to run this after doc loaded