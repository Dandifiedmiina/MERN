$.loadGuestbook("guestbook.json", function (data) {
  let messages = `<table>
          <thead><tr><th>Name</th><th>Country</th><th>Message</th></tr></thead><tbody>`;
  for (var x = 0; x < data.length; x++) {
    messages +=
      "<tr>" +
      "<td>" +
      data[x].name +
      "</td>" +
      "<td>" +
      data[x].country +
      "</td>" +
      "<td>" +
      data[x].message +
      "</td>" +
      "<td>" ;
  }
  messages += "</tbody></table>";

  $("#target").html(messages);
});
