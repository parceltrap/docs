# DHL Driver

[Back to the Core Drivers list](./#core-drivers)

This is a driver for the [DHL API](https://dhl.com). Check out
the [repository on GitHub](https://github.com/parceltrap/driver-dhl) for more information.

- [Install](driver-dhl.md#installation)
- [Configuration](driver-dhl.md#configuration)
- [Usage](driver-dhl.md#usage)

## Installation

First, install the DHL driver via the Composer package manager:

```shell
composer require parceltrap/driver-dhl
```

## Configuration

In your `config/parceltrap.php` configuration file, add the following to the `drivers` key:

```php
'dhl' => [
    'client_id' => env('PARCELTRAP_DHL_CLIENT_ID'),
],
```

You can get these details by registering for the [DHL API](https://developer.dhl.com/user/apps). To find
out more, visit the [Shipment Tracking API reference](https://developer.dhl.com/api-reference/shipment-tracking). This
documentation page also shows the raw DHL-specific data that can be found in the returned `TrackingDetails` DTO.

## Usage

```php
$driver = \ParcelTrap\Facades\ParcelTrap::driver('dhl');

$driver->find('7777777770'); // ParcelTrap\DTOs\TrackingDetails
```
