
const TwitterApiUtil = {
    followUserAJAX: function (userArgs) { //expect userArg to have keys of username and followee id
        return $.ajax({
            url: `/users/${userArgs}`, //Matching our rails routes; `/users/${userArgs}/follow
            method: "POST",
            data: {
                //
            },
            dataType: 'JSON'
        })
    },
    unfollowUserAJAX: function () {
        return $.ajax({
            url: `/gifs/${titleArg}`, //Matching our custom rails route
            method: 'GET',
            dataType: 'JSON'
        })
    }
};

module.exports = TwitterApiUtil;