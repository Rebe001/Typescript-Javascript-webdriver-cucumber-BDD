import Page from './page';
class SalePage extends Page {

    get categoryProduct(){
        return $('.category-products');
    }

    get current(){
        return $('.currently');
    }

    url() {
        return super.url("sale.html");
    }

    async getPriceFilterElement(minPrice, maxPrice){
        return this.current.$(`span=${minPrice} - ${maxPrice}`);
    }

    async verifyProductItemsWithinPriceRange(minPrice, maxPrice) {
        const categoryProduct = await this.categoryProduct;
        const specialPrices = await categoryProduct.$$(".special-price");
        for (var elem of specialPrices) {
            var priceText = parseFloat((await elem.$(".price").getText()).replace("$",""));
            expect(parseFloat(maxPrice) >= priceText && parseFloat(minPrice) <= priceText).toEqual(true);
        }
    }
}

export default new SalePage();
