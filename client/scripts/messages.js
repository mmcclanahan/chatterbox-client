// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages.
  _data: [],

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.
  retrieve: function() {
    //could use counter to keep track of whats been retrieved
    App.fetch((data) => {
      Messages.add(data);
      MessagesView.render(Messages._data);
    });
  },

  add: function(ArrayOfObjects) {
    this._data = ArrayOfObjects;
  },

  filterByRoom: function(selectedRoom) {
    return this._data.filter(index => {
      return index['roomname'] === selectedRoom;
    });
  }
};