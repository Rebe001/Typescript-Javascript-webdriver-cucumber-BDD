import Page from './page';
class SearchResultPage extends Page {

    url() {
        return super.url('catalogsearch/result/?q=');
    }

    async clickProductByText (productText) {
        const product = await $(`a=${productText}`);
        await product.click();
    }
}

export default new SearchResultPage();
