describe("Purchases", function() {
    describe("totalCost", function() {
        it("utilize a method that calculates total cost for an item purchase with quantity and price", function() {
            var samplePurchase = Object.create(Purchases);
            samplePurchase.price = 5;
            samplePurchase.quantity = 5;
            samplePurchase.totalCost().should.equal(25);
        });
    });
});
