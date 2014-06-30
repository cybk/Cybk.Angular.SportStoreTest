angular.module("cart", [])
    .factory("cart", function(){
        var cartData = [];
        
        return {
            addProduct: function(id, name, price){
             var addToExisting = false;
                angular.forEach(cartData, function(item, key){
                    if (item.id == id){
                        item.count++;
                        addToExisting = true;
                        break;
                    }
                });
                
                if (!addToExisting){
                    cartData.push({
                        count:1, id:id, price:price, name:name
                    })
                }
            },
            
            removeProduct: function(id){
                angular.forEach(cartData, function(item, key){
                    if (item.id == id){
                        cartData.splice(key, 1)
                    }
                });
            },
            
            getProducts: function(){
                return cartData;
            }
        }
    })
.directive("cartSummary", function(cart){
    return {
        restrict: "E",
        templateUrl: "components/cart/cartSummary.html",
        controller: function ($scope){
            var cartData = cart.getProducts();
            
            $scope.total = function(){
                var total = 0;
                angular.forEach(cartData, function(item, key){
                   total += item.price * item.count; 
                });
                
                return total;
            }
            
            $scope.itemCount = function(){
                var total = 0;
                angular.forEach(cartData, function(item, key){
                   total += item.count; 
                });
                
                return total;
            }
        }
    };
});