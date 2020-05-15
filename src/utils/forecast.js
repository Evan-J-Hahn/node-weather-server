const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/027838e8fc260699d264b86056d1e85e/' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature.toFixed(0) + '°F out. With a high of ' + body.daily.data[0].temperatureHigh.toFixed(0) + '°F, and a low of ' + body.daily.data[0].temperatureLow.toFixed(0) + '°F. There is a ' + body.currently.precipProbability.toFixed(0) + '% chance of rain.')
        }
    })
}

module.exports = forecast