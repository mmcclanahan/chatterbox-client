// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: new Set,
  selected: 'lobby',

  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.
  items: function() {
    return _.chain([...Rooms._data]);
  },

  isSelected: function(roomname) {
    return roomname === Rooms.selected || (!roomname && Rooms.selected === 'lobby');
  },

  add: function (room, callback = ()=>{}) {

    Rooms._data.add(room);
    Rooms.selected = room;
    callback(Rooms.items());
    //this._data = ArrayOfObjects;
    //store just strings whether from a string or object
    //render the drop down with just the data array
    //use messages data to render the messages view for the specific room with filter function elsewhere
    //if (this._data[roomName] === undefined) {
    //this._data[roomName] = roomName;
    //}
  },


  retrieve: function(messages, callback = ()=>{}) {
    var length = Rooms._data.size;
    _.chain(messages).pluck('roomname').uniq().each(room => Rooms._data.add(room));

    if (Rooms._data.size !== length) {
      callback(Rooms.items());
    }
  },
};