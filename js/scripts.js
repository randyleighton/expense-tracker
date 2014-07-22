var Purchases = {
    totalCost: function() {
        var calculatedCost = this.price * this.quantity;
        return calculatedCost;
    }
};
var Categories = {
    initialize: function(name) {
        this.name = name;
        this.purchases = [];
    }
};

$(document).ready(function(){
    $("form#category").find("input#categories").focus();
    $("form#category").submit(function(event){
        event.preventDefault();
        var inputtedCategory = $("#categories").val();
        var newCategory = Object.create(Categories);
        newCategory.initialize(inputtedCategory); //create object with the inputted name
        $("form#category").find("input#categories").val("");
        $("#column-two h3").append("<div class = 'cat-added'>" + newCategory.name + "</div>");
        $("#column-three h3").text("Purchases for: " + newCategory.name);
        $("table#purchases-tab tbody").empty();

        //Click on category and enter purchases
        $(".cat-added").last().click(function() {
            $("#column-three h3").text("Purchases for: " + newCategory.name);
            $("table#purchases-tab tbody").empty();
            console.log(newCategory);
            newCategory.purchases.forEach(function(purchase) {
            $("table#purchases-tab tbody").append("<tr><td>" + purchase.description + "</td><td>" +
                                                  purchase.quantity + "</td><td>" + purchase.price +
                                                  "</td><td>" + purchase.totalCost() +
                                                  "</td></tr>");
            });
            $("form#purchase").unbind().submit(function(event){
                event.preventDefault();
                var inputtedDescription = $("input#add-desc").val();
                var inputtedQuantity = parseInt($("input#add-qty").val());
                var inputtedPrice =parseFloat($("input#add-the-price").val());
                var newPurchaseAmt = Object.create(Purchases);
                newPurchaseAmt.description = inputtedDescription;
                newPurchaseAmt.price = inputtedPrice;
                newPurchaseAmt.quantity = inputtedQuantity;
                newPurchaseAmt.totalCost();
                console.log(newPurchaseAmt);
                console.log(newPurchaseAmt.description + " total cost: " + newPurchaseAmt.totalCost() );
                newCategory.purchases.push(newPurchaseAmt);
                console.log(newCategory);
                $("table#purchases-tab tbody").empty();
                newCategory.purchases.forEach(function(purchase) {
                $("table#purchases-tab tbody").append("<tr><td>" + purchase.description + "</td><td>" +
                                                      purchase.quantity + "</td><td>" + purchase.price +
                                                      "</td><td>" + purchase.totalCost() +
                                                      "</td></tr>");
                });
                $("form#purchase").find("input").val("") // clear form fields
                $("form#purchase").find("#add-desc").focus(); //focus the cursor on the first text input
            });
        });
    });
});
