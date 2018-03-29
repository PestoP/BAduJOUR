module.exports = {
  'Select different page': function (browser) {
    const selectBA = '//*[@id="app"]/div[1]/button[1]'
    const selectStory = '//*[@id="app"]/div[1]/button[2]'
    let selectPropose = '//*[@class="second"]'
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .useXpath()
      .click(selectBA)
      .waitForElementPresent('//*[@id="app"]/div[3]/h1', 1000)
      .assert.containsText('//*[@id="app"]/div[3]/h1', 'La bonne action du jour')
      .click(selectStory)
      .waitForElementPresent('//*[@id="app"]/div[3]/span', 1000)
      .assert.containsText('//*[@id="app"]/div[3]/span', "l'histoire du jour")
      // .waitForElementPresent(selectVille + '/option[contains(text(), "Montpellier")]', 1000)
      // .click(selectVille)
      // .screenshot()
      .end()
  }
}
