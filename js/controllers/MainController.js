app.controller('MainController', ['$scope', function($scope) { 
    $scope.shows = [
      {
        series: "Sherlock",
        series_img: "img/sherlock.jpg",
        genre: "Crime drama",
        season: 3,
        episode: "The Empty Hearse",
        description: "Two years after his reported Reichenbach Fall demise, Sherlock, who has been cleared of all fraud charges against him, returns with Mycroft's help to a London under threat of terrorist attack. John has moved on and has a girlfriend, Mary Morstan. Sherlock enlists Molly to assist him, but when John is kidnapped by unknown assailants and is rescued by Sherlock and Mary, John returns to help find the terrorists and an underground plot to blow up the Houses of Parliament during an all night sitting on Guy Fawkes Night.",
        datetime: new Date(2014, 11, 31, 21, 00, 00, 00)
      },
      {
        series: "Unbreakable Kimmy Schmidt",
        series_img: "http://frescurinha.com.br/wp-content/uploads/2015/03/Unbreakable-Kimmy.jpg",
        genre: "Comedy",
        season: 1,
        episode: "Kimmy Goes to a Party!",
        description: "Jacqueline's husband Julian (Mark Harelik) finally makes it home and is throwing a surprise cocktail party, which Jacqueline believes she can use to prove his infidelity. Jacqueline invites Kimmy as a guest/accomplice and Kimmy invites Titus to sing at the party. While at the party, Kimmy flirts with an upscale guest Logan Beekman (Adam Campbell) and Titus seeks to impress a guest he believes works on Broadway.",
        datetime: new Date(2014, 11, 31, 21, 00, 00, 00)
      }
    ];
}]);