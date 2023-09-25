# PKGE Driver

[Back to the Core Drivers list](./#core-drivers)

This is a driver for the [PKGE API](https://pkge.net). Check out the [repository on GitHub](https://github.com/parceltrap/driver-pkge) for more information.

- [Install](driver-pkge.md#installation)
- [Configuration](driver-pkge.md#configuration)
- [Usage](driver-pkge.md#usage)

## Installation

First, install the PKGE driver via the Composer package manager:

```shell
composer require parceltrap/driver-pkge
```

## Configuration

In your `config/parceltrap.php` configuration file, add the following to the `drivers` key:

```php
'pkge' => [
    'api_key' => env('PARCELTRAP_PKGE_API_KEY'),
],
```

You can get these details by registering for the [PKGE API](https://business.pkge.net/settings/api-key). To find
out more, visit the [Package Tracking API reference](https://business.pkge.net/docs/packages/get). This
documentation page also shows the raw PKGE-specific data that can be found in the returned `TrackingDetails` DTO.

## Usage

```php
$driver = \ParcelTrap\Facades\ParcelTrap::driver('pkge');

$driver->find('UA937578848US'); // ParcelTrap\DTOs\TrackingDetails
```
