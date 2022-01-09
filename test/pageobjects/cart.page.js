import Page from './page';
class CartPage extends Page {

    get products(){
        return $$('h2.product-name a');
    }

    url() {
        return super.url("checkout/cart/");
    };

    async verifyProductIsAddedToCart(productName){
        var isMatch = false; 
        const productList = await this.products;
        for (var elem of productList) {
            var productText = await elem.getText();
            if (productText === productName.toUpperCase()){
                isMatch = true;
            }
        }
        expect(isMatch).toEqual(true);
    }
}

export default new CartPage();
