class FollowToggle {
    constructor(el) {
        this.$el = $(el) //jquery wrapped element
        this.userId = this.$el.data('user-id')
        this.followState = this.$el.data('initial-follow-state')
        // debugger
        console.log(this)
        //on click
    }

    //render - set text of button
}

module.exports = FollowToggle;