# Royal Mail Driver

[Back to the Core Drivers list](./#core-drivers)

This is a driver for the [Royal Mail API](https://royalmail.com). Check out
the [repository on GitHub](https://github.com/parceltrap/driver-royal-mail) for more information.

- [Install](driver-royal-mail.md#installation)
- [Configuration](driver-royal-mail.md#configuration)
- [Usage](driver-royal-mail.md#usage)

## Installation

First, install the Royal Mail driver via the Composer package manager:

```shell
composer require parceltrap/driver-royal-mail
```

## Configuration

In your `config/parceltrap.php` configuration file, add the following to the `drivers` key:

```php
'royal_mail' => [
    'client_id' => env('PARCELTRAP_ROYAL_MAIL_CLIENT_ID'),
    'client_secret' => env('PARCELTRAP_ROYAL_MAIL_CLIENT_SECRET'),
    'accept_terms' => env('PARCELTRAP_ROYAL_MAIL_ACCEPT_TERMS', true),
],
```

You can get these details by registering for the [Royal Mail API](https://developer.royalmail.net/application). To find
out more, visit the [Tracking v2 API reference](https://developer.royalmail.net/node/1885385). This
documentation page also shows the raw Royal Mail-specific data that can be found in the returned `TrackingDetails` DTO.

## Usage

```php
$driver = \ParcelTrap\Facades\ParcelTrap::driver('royal_mail');

$driver->find('090367574000000FE1E1B'); // ParcelTrap\DTOs\TrackingDetails
```
