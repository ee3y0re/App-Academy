//entry point
const FollowToggle = require('./follow_toggle.js');

// document.addEventListener('DOMContentLoaded', (event) => {
//     //constructor?
// });

document.setEventListeners = () => {
    $('.follow-toggle').on('click', e => {
        e.preventDefault();
        //call helper to switch
    })
}

//define helper
//uses util