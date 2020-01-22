import { Selector } from 'testcafe';

class Page {
    constructor () {
        this.searchInput = Selector('input[type=text]');
        this.searchSubmit = Selector('input[type=submit]');
    }
}

export default new Page();
