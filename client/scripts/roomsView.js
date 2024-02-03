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
    this.$select.on('click', this.handleChange);
  },

  render: function(rooms) {
    // TODO: Render out the list of rooms.
    this.$select.empty();
    //call the filter function on rooms
    //var filteredRooms stores the array
    //filterRooms for each
    rooms.forEach((room) => {
      this.renderRoom(room);
    });
  },

  renderRoom: function(roomname) {

    // TODO: Render out a single room.
    // Create room node and call roomTemplate within it
    if (typeof roomname === 'string') {
      var obj = {roomname: roomname};
      var $roomNode = $(this.roomTemplate(roomname));
      // Append room node to options id
      this.$select.append($roomNode);
    }
    //var obj = {roomname: roomname};

    var $roomNode = $(this.roomTemplate(roomname));
    // Append room node to options id
    this.$select.append($roomNode);
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
    var selectedRoom = RoomsView.$select.val();
    //RoomsView.render(Rooms.filterByRoom(selectedRoom));
    MessagesView.render(Messages.filterByRoom(selectedRoom));

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
