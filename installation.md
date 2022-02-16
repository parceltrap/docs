# Installation

1. First, you'll need to install ParcelTrap via [Composer][].
   ```shell
   composer require parceltrap/parceltrap
   ```

1. If using Laravel, you may also require the Laravel package which will allow configuring drivers in your config.
   ```shell
   composer require parceltrap/parceltrap-laravel
   ```

1. Next, install any relevant [ParcelTrap drivers](https://packagist.org/explore?tags=parceltrap%20driver).
   ```shell
   # Install the Royal Mail driver
   composer require parceltrap/driver-royal-mail
   ```

## Initial Configuration

All of the configuration for ParcelTrap is stored in arrays. Each option is documented for each driver, so feel free to look at the [driver documentation][drivers].

To instantiate an instance of ParcelTrap, you will need to provide an initial array of drivers, or manually add each driver using the `addDriver()` method.

```php
use ParcelTrap\ParcelTrap;
use ParcelTrap\Skeleton\Skeleton;

$drivers = [
    // Specify a driver name which is used to retrieve the driver from the container
    'driver_name' => Skeleton::make([
        // Add any configuration for the driver
    ]),
];

$parcelTrap = new ParcelTrap($drivers);
```

There is also a static `make()` method if you prefer using static methods for instantiating the class.

```php
$parcelTrap = ParcelTrap::make($drivers);
```

[composer]: https://getcomposer.org
[drivers]: drivers.md
