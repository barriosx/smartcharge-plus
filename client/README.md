# SmartCharge Plus
An annex to the SmartCharge Rewards™ dashboard.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Context

I stumbled upon [Puppeteer](https://github.com/GoogleChrome/puppeteer), which I found to be awesome since I have been interested in the world of browser automation and web scraping. So I developed this app to help myself learn the library, while making an app that would help me automate some calcuations I found myself doing monthly.

I am a proud owner of an eletric vehicle, and here in NY, there is a cool program called [SmartCharge Rewards](https://www.fleetcarma.com/smartchargenewyork/) that I am a part of.

Fleetcarma has partnered with Con Edision in New York to help track EV stats and automatically earn rewards each month by charging in the Con Edison service territory.

I share my electric bill, so I wanted to solve the problem of automating each months total cost of charging my car.

As a MVP, my app aims to leverage the Puppeteer library find out how much electric I have consumed from the 1st of the curent month until todays date. Then I can calcuate how much I expect to pay in utility to consume that quantity.  


## Technologies Used

- ReactJS
- NodeJS
- ExpressJS
- Puppeteer

## Possible Enhancements

There are many avenues that can be taken from here. I have thought about a major enhancement to this app:

1. Provide a view of on how much electric was consumed and how much it cost for a given day, week, or date range.
2. Adding a login form so that other SmartCharge users can also use this app and have a more insightful look on the economic impact of their charging.

