/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/follow_toggle.js":
/*!***********************************!*\
  !*** ./frontend/follow_toggle.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Util = __webpack_require__(/*! ./util.js */ "./frontend/util.js")

class FollowToggle {
    constructor($el) {
        this.$el = $el //jquery wrapped element
        this.userId = $el.data('user-id')
        this.followState = $el.data('initial-follow-state')
        // debugger
        // console.log(this)
        //on click
        this.render()
        this.handleClick()
    }

    //render - set text of button

    render() {
      let state = '';

      if (this.followState === 'followed') {
        state = 'Unfollow!';
      } else {
        state = 'Follow!';
      }
      this.$el.html(state)
    }

    handleClick() {
      this.$el.on('click', (e) => {
        e.preventDefault();

        if (this.followState === 'unfollowed') {
          Util.followUser(this.userId)
          .then(this.followState = 'followed')
          .then(this.render())
        } else {
          Util.unfollowUser(this.userId)
          .then(this.followState = 'unfollowed')
          .then(this.render())
        }
      })
    }
}

module.exports = FollowToggle;

/***/ }),

/***/ "./frontend/util.js":
/*!**************************!*\
  !*** ./frontend/util.js ***!
  \**************************/
/***/ ((module) => {


const APIUtil = {
  followUser: arg => { //expect userArg to have keys of username and followee arg
    console.log(arg)
    return $.ajax({
      url: `/users/${arg}/follow`, //Matching our rails routes; `/users/${userArgs}/follow
      method: "POST",
      dataType: 'JSON'
    })
  },
  unfollowUser: arg => {
    return $.ajax({
      url: `/users/${arg}/follow`, //Matching our custom rails route
      method: 'DELETE',
      dataType: 'JSON'
    })
  }
};

module.exports = APIUtil;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./frontend/twitter.js ***!
  \*****************************/
//entry point
//import
const FollowToggle = __webpack_require__(/*! ./follow_toggle.js */ "./frontend/follow_toggle.js");

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
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map