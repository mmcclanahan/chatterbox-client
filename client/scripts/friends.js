// This object houses all the friend _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Friends = {
  // TODO: Define how you want to store your list of friends.

  _data: {},

  // TODO: Define methods which allow you to add, toggle,
  // and check the friendship status of other users.

  toggleStatus: function(username) {
    if (this._data[username] === undefined) {
      this.add(username);
    }
    if (this._data[username] === true) {
      this._data[username] === false;
    } else {
      this._data[username] === true;
    }
  },

  add: function(username) {
    this._data[username] = true;
  }
};