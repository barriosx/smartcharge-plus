const puppeteer = require('puppeteer');
// const CREDS = require('../cred'); // hide these variables in a senstive file
const usr = process.env.USERNAME;
const pw = process.env.PASSWORD;  

async function getSmartCharge() {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'] // Specify –no-sandbox to run Puppeteer on Heroku
})
  const page = await browser.newPage()
  var responseData = {};
  // EventEmmiter set up
  // Intercept xhr request that contain the data I need 
  page.on('response', response => {
    if ((response.url().includes('summary')) && (response.status() == 200)) {
      response.json().then(data => Object.assign(responseData, data))
      .catch(err => console.log(`Ran into error, here it is: \n${err}\nNext time we will ignore this`))
    }
  })

  // Login to dashboard 
  await page.goto('https://smartchargerewards.fleetcarma.com/login')
  await page.waitForSelector('button.auth0-lock-submit', { visible: true })
  await page.type('input[name="email"]', usr) 
  await page.type('input[name="password"]', pw) 
  await page.click('button.auth0-lock-submit') // Clicking login button

  await page.waitForNavigation({ waitUntil: 'networkidle0'}) // wait until we successfully login
  
  // Done
  await browser.close()
  return responseData;
}

module.exports = (router) => {
  router.get('/', (request,response) => {
    getSmartCharge().then(data => {
      response.status(200).json({success: true, data: data});
    })
    .catch(err => {
      response.status(500).json({success: false, message: err });
    })
  });
  return router;
}
