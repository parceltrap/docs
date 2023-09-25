# TrackingMore Driver

[Back to the Core Drivers list](./#core-drivers)

This is a driver for the [TrackingMore API](https://trackingmore.com). Check out
the [repository on GitHub](https://github.com/parceltrap/driver-trackingmore) for more information.

- [Installation](driver-trackingmore.md#installation)
- [Configuration](driver-trackingmore.md#configuration)
- [Usage](driver-trackingmore.md#usage)

## Installation

First, install the TrackingMore driver via the Composer package manager:

```shell
composer require parceltrap/driver-trackingmore
```

## Configuration

In your `config/parceltrap.php` configuration file, add the following to the `drivers` key:

```php
'trackingmore' => [
    'api_key' => env('PARCELTRAP_TRACKINGMORE_API_KEY'),
],
```

You can get these details by registering for the [TrackingMore API](https://admin.trackingmore.com/developer/apikey). To
find out more, visit the [Tracking API reference](https://trackingmore.com/v3/api-index.html?language=CURL#get-results).
This documentation page also shows the raw TrackingMore-specific data that can be found in the
returned `TrackingDetails` DTO.

## Usage

```php
$driver = \ParcelTrap\Facades\ParcelTrap::driver('trackingmore');

$driver->find('UB209300714LV'); // ParcelTrap\DTOs\TrackingDetails
```
