// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

//add options to .room select
var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    RoomsView.$button.on('click', this.handleClick);
    RoomsView.$select.on('click', this.handleChange);
  },

  render: function() {
    // TODO: Render out the list of rooms.
    RoomsView.$select.html('');
    Rooms.items().each(RoomsView.renderRoom);
    RoomsView.$select.val(Rooms.selected);
  },

  renderRoom: function(roomname) {

    // TODO: Render out a single room.

    var $roomNode = $('<option>').val(roomname).text(roomname);
    // Append room node to options id
    RoomsView.$select.append($roomNode);
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
      Rooms.add(roomName), () => {
        RoomsView.render();
        MessagesView.render();
      };
    }
    // $('#rooms button').on('click', function() {
    //   var room = $(this).text();
    //   Rooms.add(room);
    // });
  },

  // roomTemplate: _.template(`
  //     <option class="roomname"><%- roomname %></option>
  // `)

};
