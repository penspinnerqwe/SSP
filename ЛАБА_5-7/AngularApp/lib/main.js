var app = angular.module('app', []);

app.controller('AppController',function($http,$scope,imageService){

            $scope.books = [];
            $scope.filt ;
            $scope.sortparam='published_date';
            $scope.sortReverse  = true;
            $http.get('https://api.nytimes.com/svc/mostpopular/v2/mostemailed/Books/30.json?api-key=f5983cb286964bd1b0a1b0f264826bdc')
                .success(function(result){
                   $scope.books = result.results;
                });
     
            $scope.Addbook = function(title,abstract,url){
                $scope.books.push({
                    url: url,
                    count_type: "EMAILED",
                    column: "",
                    section: "Books",
                    byline: "WAS CREATED BY USER",
                    title: title,
                    abstract: abstract,
                    published_date: new Date().toDateString(),
                    source: "The New York Times",
                    des_facet: ["BOOKS AND LITERATURE"],
                    org_facet: "",
                    per_facet: "",
                    geo_facet: "",
                    media: imageService.media
                });
            };        
    });