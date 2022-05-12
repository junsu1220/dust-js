import $ from "jquery";

$.ajax({
  type: "GET",
  url: "",
  success: function (data) {
    console.log(data);
  },
  error: function (e) {
    console.log(e);
  },
});
