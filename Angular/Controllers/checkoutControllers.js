angular.module("sportsStore")
.controller("cartSummaryController", function($scope, cart){
    
    $scope.cartData = cart.getProducts();
    
    $scope.total = function(){
        var total = 0;
        angular.forEach($scope.cartData, function(item, key){
            total += item.price * item.count;
        });
        
        return total;
    }
    
    $scope.remove = function(id){
        cart.removeProduct(id);
    }
});