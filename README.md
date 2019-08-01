# SmartCharge Plus
An annex to the SmartCharge Rewards™ dashboard.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Context

I stumbled upon [Puppeteer](https://github.com/GoogleChrome/puppeteer), which I found to be awesome since I have been interested in the world of browser automation and web scraping. So I developed this app to help myself learn the library, while automating some calcuations I found myself doing manually.

I am a proud owner of an eletric vehicle. Here the NYC area, there is a cool program called [SmartCharge Rewards](https://www.fleetcarma.com/smartchargenewyork/) that I am a part of.

Fleetcarma has partnered with Con Edison in New York to help track EV stats and automatically earn rewards each month by charging in the Con Edison service territory.

****I share my electric bill, so I wanted to solve the problem of automating each months total cost of charging my car.****

As a MVP, my app aims to leverage the Puppeteer library find out how much electric I have consumed from the 1st of the curent month until todays date. Then I can calcuate how much I expect to pay as part of my share of the electric bill.  


## Technologies Used

- ReactJS
- NodeJS
- ExpressJS
- Puppeteer

## Challenges

Being that Fleetcarma does not have a documented API that one can use to get data, we have to use puppeteer to help us intercept data **after** a user has logged in.

Another challenege was learning the Puppeteer library and having it work once it was deployed on a cloud platform like Heroku. Puppeteer relies on layers of sandboxing, which is supposed to protect the host enviornment from unsafe web content. Thus I needed to specify **–no-sandbox**: 
~~~~
const browser = await puppeteer.launch({
  args: ['--no-sandbox', '--disable-setuid-sandbox'] // Specify –no-sandbox to run Puppeteer on Heroku
})
~~~~

Lastly, Heroku needs a buildpack so that Puppeteer can then be executed on a dyno instance inside Heroku. Buildpacks are composed of a set of scripts, and depending on the programming language, the scripts will retrieve dependencies, output generated assets or compiled code, and more. The buildpack I used was from [Jon Tweks](https://github.com/jontewks/puppeteer-heroku-buildpack).

## Possible Enhancements

There are many avenues that can be taken from here. I have thought about major enhancements to this app:

1. ****Reduce**** the response time for my api call that does the "Puppeteer-ing" of the SmartCharge Rewards dashboard. Currently, it seems to take ~12s for the data to render onto the client.
2. Provide a view of on how much electric was consumed and how much it cost for a given day, week, or date range.
3. Adding a login form so that other SmartCharge users can also use this app and have a more insightful look on the economic impact of their charging.

