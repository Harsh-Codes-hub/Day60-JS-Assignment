//  Exercise 1

function afterDelay(time, cb) {
  setTimeout(cb, time);
}

afterDelay(2000, function () {
  console.log("Callback Executed");
});

// Exercise 2

function getUser(username, cb) {
  console.log("Fetching Data...");
  setTimeout(() => {
    cb({
      username: "Harsh",
      id: 3098,
    });
  }, 1000);
}

function getUsersPosts(id, cb) {
  console.log("Fetching Posts...");
  setTimeout(() => {
    cb(["Yoooo", "Its About time", "MUSIC and ART"]);
  }, 1000);
}

getUser(`Frag`, function (data) {
  getUsersPosts(data.id, function (allPosts) {
    console.log(
      `Username: ${data.username}\nUser ID: ${data.id}\nPosts: ${allPosts}`,
    );
  });
});

//  Exercise 3

function loginUser(username, cb) {
  console.log("Fetching User Data...");
  setTimeout(() => {
    cb({
      username: "harsh",
      userID: 3098,
    });
  }, 1000);
}

function fetchPermissions(userID, cb) {
  console.log("Fetching Permissions...");
  setTimeout(() => {
    cb(["yes", "no"]);
  }, 1000);
}

function loadDashboard(permission, cb) {
  console.log("Loading User Dashboard...");
  setTimeout(() => {
    cb();
  }, 1000);
}

loginUser("harsh", function (data) {
  fetchPermissions(data.userID, function (permissions) {
    loadDashboard(permissions, function () {
      console.log("Dashboard Loaded");
    });
  });
});
