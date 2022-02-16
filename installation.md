# Installation

1. First, you'll need to install ParcelTrap via [Composer][].
   ```shell
   composer require parceltrap/parceltrap
   ```

1. If using Laravel, you may also require the Laravel package which will allow configuring drivers in your config.
   ```shell
   composer require parceltrap/parceltrap-laravel
   ```

1. Next, install any relevant [ParcelTrap drivers](https://packagist.org/explore/?tags=parceltrap%20driver).
   ```shell
   # Install the Royal Mail driver
   composer require parceltrap/driver-royal-mail
   ```

[composer]: https://getcomposer.org
