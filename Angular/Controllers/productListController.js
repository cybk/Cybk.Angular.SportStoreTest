angular.module("sportsStore")
.constant("productListActiveClass", "btn-primary")
.constant("productListPageCount", 3)
.controller("productListCtrl", function($scope, $filter, productListActiveClass, productListPageCount){
    var selectedCategory = null;
    
    $scope.selectedPage = 1;
    $scope.pageSize = productListPageCount;
    
    $scope.selectedCategory = function(newCategory){
        selectedCategory = newCategory;
        $scope.selectedPage = 1;
    }
    
    $scope.selectPage = function(page){
        $scope.selectedPage = page;
    }
    
    $scope.categoryFilterFn = function (product){
        return selectedCategory == null || product.Category == selectedCategory;
    }
    
    $scope.getCategoryClass = function(category){
        return selectedCategory == category ? productListActiveClass : "";
    }
    
    $scope.getPageClass = function(page){
        return $scope.selectedPage == page ? productListActiveClass:null;
    }
    
});