import Page from './page';
export class HeaderSection extends Page{
    get search() {
        return $('#search');
    }

    get btnSubmit(){
        return $('button[title="Search"]');
    }

    get navSale(){
        return $('.nav-5');
    }

    get filter() {
        return $("#narrow-by-list");
    }

    async enterSearch (text) {
        await this.search.clearValue();
        await this.search.setValue(text);
        await this.btnSubmit.click();
    }

    async selectNav (navItem){
        await this.navSale.moveTo();
        let saleNav = await this.navSale.$(`=${navItem}`);
        await saleNav.click();
    }

    async applyFilter (queryParameter, queryValue){
        await this.filter.$(`dt=${queryParameter}`).scrollIntoView();
        const filterElement = await this.filter.$(`dt=${queryParameter}`).nextElement();
        await filterElement.$(`*=${queryValue}`).click();
    }
}

export default new HeaderSection();