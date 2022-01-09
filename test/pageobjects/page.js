
export default class Page {

    url(path="") {
        return `${browser.options.baseUrl}${path}`;
    }
}
