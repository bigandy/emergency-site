const { DateTime } = require('luxon')
const CleanCSS = require('clean-css')

module.exports = {
    dateToFormat: function (date, format) {
        return DateTime.fromJSDate(date, { zone: 'utc' }).toFormat(
            String(format)
        )
    },

    dateToISO: function (date) {
        return DateTime.fromJSDate(date, { zone: 'utc' }).toISO({
            includeOffset: false,
            suppressMilliseconds: true
        })
    },

    cssmin: function (css) {
        return new CleanCSS({ level: 2 }).minify(css).styles
    },

    firstNElements: function (array, n) {
        if (n < 0) {
            return array.slice(n)
        }

        return array.slice(0, n)
    }
}
