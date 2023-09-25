# USPS Driver

[Back to the Core Drivers list](./#core-drivers)

This is a driver for the [USPS API](https://usps.com). Check out
the [repository on GitHub](https://github.com/parceltrap/driver-usps) for more information.

- [Installation](driver-usps.md#installation)
- [Configuration](driver-usps.md#configuration)
- [Usage](driver-usps.md#usage)

## Installation

First, install the USPS driver via the Composer package manager:

```shell
composer require parceltrap/driver-usps
```

## Configuration

In your `config/parceltrap.php` configuration file, add the following to the `drivers` key:

```php
'usps' => [
    'api_key' => env('PARCELTRAP_USPS_API_KEY'),
    'source_id' => env('PARCELTRAP_USPS_SOURCE_ID', env('APP_NAME')),
],
```

You can get these details by registering for the [USPS API](https://registration.shippingapis.com). To find
out more, visit the [Track & Confirm API reference](https://usps.com/business/web-tools-apis/track-and-confirm-api.pdf).
This documentation page also shows the raw USPS-specific data that can be found in the returned `TrackingDetails` DTO.

## Usage

```php
$driver = \ParcelTrap\Facades\ParcelTrap::driver('usps');

$driver->find('XXXXXXXXXXXXXXXXXX'); // ParcelTrap\DTOs\TrackingDetails
```
