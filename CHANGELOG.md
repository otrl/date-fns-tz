# Change Log

## v2.0.0

This release brings `date-fns-tz` in line with `date-fns@2.0.0-alpha.27`. This was the first 
release in a while to bring truly breaking changes, most notably that date string inputs are
no longer accepted by any of the `date-fns` functions. It is now necessary to parse date strings
first using `parse` or `parseISO`. This library now provides an extended `parse` function that
supports a `timeZone` option to handle date strings that do not include a time zone part correctly. 

### Changed (Breaking)

- Requires `date-fns@2.0.0-alpha.27` or later
- `utcToZonedTime` and `zonedTimeToUtc` no longer accept string inputs
- `format` no longer accepts string inputs; passes all `date-fns@2.0.0-alpha.27#format` tests

### Added
 
- Added `parse` which works like `date-fns@2.0.0-alpha.27#parse` and supports a `timeZone` option 

### Removed

- `toDate` which used to have functionality similar to the new `parse` method, but that is no longer 
  relevant in the new definition of `toDate` in `date-fns@2.0.0-alpha.27`

## v1.0.7

### Fixed

- Typings

## v1.0.0

Initial stable release
