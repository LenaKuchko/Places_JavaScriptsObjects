function Place(name, location, budget, famousFood) {
  this.Name = name;
  this.Location = location;
  this.Budget = budget;
  this.FamousFood = famousFood;
}

$(function() {
  $("#places").submit(function (event) {
    event.preventDefault();
    var name = $("input#name").val();
    var location = $("input#location").val();
    var budget = $("input#budget").val();
    var famousFood = $("input#famous_food").val();
    var place_info = new Place(name, location, budget, famousFood);
    console.log(place_info)
    places.push(place_info);

    $("#list_places").append("<li><span class='li_place'>" + place_info.Name + "</span></li>");
    $(".li_place").last().click(function() {
      $(".show_place").show();
      $("#place_name").text(place_info.Name);
      $("#place_location").text(place_info.Location);
      $("#place_budget").text(place_info.Budget);
      $("#place_famousfood").text(place_info.FamousFood);
    });
  });
});
