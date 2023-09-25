# Australian Post (AusPost) Driver

[Back to the Core Drivers list](./#core-drivers)

This is a driver for the [Australian Post API](https://auspost.com.au). Check out
the [repository on GitHub](https://github.com/parceltrap/driver-auspost) for more information.

- [Install](driver-auspost.md#installation)
- [Configuration](driver-auspost.md#configuration)
- [Usage](driver-auspost.md#usage)

## Installation

First, install the AusPost driver via the Composer package manager:

```shell
composer require parceltrap/driver-auspost
```

## Configuration

In your `config/parceltrap.php` configuration file, add the following to the `drivers` key:

```php
'auspost' => [
    'api_key' => env('PARCELTRAP_AUSPOST_API_KEY'),
    'password' => env('PARCELTRAP_AUSPOST_PASSWORD'),
    'account_number' => env('PARCELTRAP_AUSPOST_ACCOUNT_NUMBER'),
],
```

You can get these details by registering for
the [Shipping & Tracking API](https://developers.auspost.com.au/apis/st-registration). To find out more, visit
the [Track Items API reference](https://developers.auspost.com.au/apis/shipping-and-tracking/reference/track-items).
This documentation page also shows the raw AusPost-specific data that can be found in the returned `TrackingDetails`
DTO.

## Usage

```php
$driver = \ParcelTrap\Facades\ParcelTrap::driver('auspost');

$driver->find('7XX1000634011427'); // ParcelTrap\DTOs\TrackingDetails
```
