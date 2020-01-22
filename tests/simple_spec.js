import page from './simple_page.js';

fixture `My First Test`
    .page `http://riririusei99.hatenadiary.jp/`;

test('Search riririusei99', async t => {
    await t
      .typeText(page.searchInput, 'riririusei99')
      .click(page.searchSubmit);

    const title = await t.eval(() => document.title);
    await t.expect(title).eql('riririusei99 の検索結果 - riririusei99’s blog!!');
});
