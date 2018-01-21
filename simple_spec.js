import { Selector } from 'testcafe';

fixture `My First Test`
    .page `http://teamspirit.hatenablog.com/`;

test('Search riririusei99', async t => {
    await t
      .typeText('input[type=text', 'riririusei99')
      .click('input[type=submit]');

    const title = await t.eval(() => document.title);
    await t.expect(title).eql('riririusei99 の検索結果 - TeamSpirit Developer Blog');
});
