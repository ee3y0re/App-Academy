const Util = require('./util.js')

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