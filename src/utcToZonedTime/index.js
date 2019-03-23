import tzParseTimezone from '../_lib/tzParseTimezone'
import subMilliseconds from 'date-fns/subMilliseconds'
import toDate from 'date-fns/toDate'

/**
 * @name utcToZonedTime
 * @category Time Zone Helpers
 * @summary Get a date/time representing local time in a given time zone from the UTC date
 *
 * @description
 * Returns a date instance with values representing the local time in the time zone
 * specified of the UTC time from the date provided. In other words, when the new date
 * is formatted it will show the equivalent hours in the target time zone regardless
 * of the current system time zone.
 *
 * @param {Date|Number} date - the date or timestamp with the relevant UTC time
 * @param {String} timeZone - the time zone to get local time for, can be an offset or IANA time zone
 * @returns {Date} the new date with the equivalent time in the time zone
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // In June 10am UTC is 6am in New York (-04:00)
 * const result = utcToZonedTime('2014-06-25T10:00:00.000Z', 'America/New_York')
 * //=> Jun 25 2014 06:00:00
 */
export default function utcToZonedTime(dirtyDate, timeZone) {
  if (arguments.length < 1) {
    throw new TypeError(
      '2 arguments required, but only ' + arguments.length + ' present'
    )
  }

  var date = toDate(dirtyDate)

  // This date has the UTC time values of the input date at the system time zone
  var utcDate = new Date(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds()
  )
  // We just need to apply the offset indicated by the time zone to this localized date
  var offsetMilliseconds = tzParseTimezone(timeZone, date)

  return offsetMilliseconds
    ? subMilliseconds(utcDate, offsetMilliseconds)
    : utcDate
}
