class FollowToggle {
    constructor(el) {
        this.userId = $(el.user-id) //el.dataset.user-id
        this.followState = $(el.initial-follow-state)
    }
}

module.exports = FollowToggle;