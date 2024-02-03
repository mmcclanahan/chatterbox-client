// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    // MessagesView.$chats.on('click', '.message', MessagesView.handleClick);
    this.$chats.on('click', '.username', this.handleClick);

    // this.render();
  },

  render: function(messages) {
    // TODO: Render _all_ the messages.
    this.$chats.empty();
    // Iterate through array and call renderMessage on each item in array
    messages.forEach(message => {
      this.renderMessage(message);
    });
  },

  renderMessage: function(message) { //message is an object with Username:, text:, roomname:
    // TODO: Render a single message.
    // to give us nodes to append to chats
    var $messageNode = $(MessageView.render(message));
    //append to chats
    //debugger;
    this.$chats.append($messageNode);
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
    //call toggleStatus
    $('.username').on('click', function() {
      var user = $(this).text();
      Friends.toggleStatus(user);
    });
  }

};