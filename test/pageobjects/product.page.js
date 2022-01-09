import Page from './page';
class ProductPage extends Page {

    get color(){
        return $('#attribute92');
    }

    get size(){
        return $('#attribute180');
    }

    get btnAddToCart(){
        return $('.add-to-cart-buttons button');
    }

    async selectProduct(color, size) {
        await this.color.selectByVisibleText(color);
        await this.size.selectByVisibleText(size);
        await this.btnAddToCart.click();
    }
}

export default new ProductPage();
