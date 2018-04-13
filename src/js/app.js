var myApp = angular.module("myApp", ["ngRoute", "ngAnimate"]);

myApp.config(function($routeProvider){
	$routeProvider
		.when("/books", {
			templateUrl: "partials/book-list.html",
			controller: "BookListCtrl"
		})
		.when("/kart", {
			templateUrl: "partials/kart-list.html",
			controller: "kartListCtrl"
		})
		.otherwise({
			redirectTo: "/books"
		});
});

myApp.factory("kartService", function() {
	var kart = [];

	return {
		getKart: function() {
			return kart;
		},
		addToKart: function(book) {
			kart.push(book);
		},
		buy: function(book) {
			alert("thanks for buying", book.name);
		}
	}
})

myApp.factory("bookService", function() {
	var books = [
		{
			imgUrl: "iphone-8.png",
			name: "iPhone 8",
			price: 54999,
			rating: 4.3,
			binding: "Amazon",
			publisher: "Apple Inc",
			releaseDate: "06-08-2017",
			details: "Linda, in her thitles, begins to questions the routine and predictability of her days. In everybody books."
		},
		{
			imgUrl: "nokia-8.jpg",
			name: "Nokia 8",
			price: 29990,
			rating: 4,
			binding: "Flipkart",
			publisher: "Nokia",
			releaseDate: "01-04-2018",
			details: "Linda, in her thitles, begins to questions the routine and predictability of her days. In everybody books."
		},
		{
			imgUrl: "moto-z.jpg",
			name: "Moto-Z",
			price: 12999,
			rating: 4,
			binding: "Amazon",
			publisher: "Motorola",
			releaseDate: "12-08-2017",
			details: "Linda, in her thitles, begins to questions the routine and predictability of her days. In everybody books."
		},
		{
			imgUrl: "mi-6.jpg",
			name: "MI 6",
			price: 23990,
			rating: 4.5,
			binding: "Flipkart",
			publisher: "MI",
			releaseDate: "30-10-2017",
			details: "Linda, in her thitles, begins to questions the routine and predictability of her days. In everybody books."
		},
		{
			imgUrl: "pixel-2.jpg",
			name: "Pixel 2",
			price: 51599,
			rating: 5,
			binding: "Amazon",
			publisher: "Google",
			releaseDate: "25-12-2017",
			details: "Linda, in her thitles, begins to questions the routine and predictability of her days. In everybody books."
		}
	];

	return {
		getBooks: function() {
			return books;
		}
	}
})

myApp.controller("kartListCtrl", function($scope, kartService) {
	$scope.kart = kartService.getKart();

	$scope.buy = function(book) {
		kartService.buy(book);
	}
});

myApp.controller("HeaderCtrl", function($scope, $location) {
	$scope.appDetails = {};
	$scope.appDetails.title = "BooKart";
	$scope.appDetails.tagline = "Smart Online Collentions For You";

	$scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
});

myApp.controller("BookListCtrl", function($scope, bookService, kartService){
	$scope.books = bookService.getBooks();

	$scope.addToKart = function(book) {
		kartService.addToKart(book);
	}

}); 
