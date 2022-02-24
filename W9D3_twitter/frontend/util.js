
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