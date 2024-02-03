// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

//add options to .room select
var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    this.$button.on('click', this.handleClick);
  },

  render: function() {
    // TODO: Render out the list of rooms.
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    // Create room node and call roomTemplate within it
    var obj = {roomname: roomname};
    var $roomNode = $(this.roomTemplate(obj));
    // Append room node to options id
    this.$select.append($roomNode);
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
    var roomName = prompt('Enter new room name: ');
    if (roomName) {
      Rooms.add(roomName);
      RoomsView.renderRoom(roomName);
    }
    // $('#rooms button').on('click', function() {
    //   var room = $(this).text();
    //   Rooms.add(room);
    // });
  },

  roomTemplate: _.template(`
      <option class="roomname"><%- roomname %></option>
  `)

};
