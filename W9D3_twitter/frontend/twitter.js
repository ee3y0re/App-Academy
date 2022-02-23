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
    $('button.follow-toggle').each((index, button) => new FollowToggle(button))
})//jquery instructed to run this after doc loaded