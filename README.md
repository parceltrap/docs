# Installation

1. First, you'll need to install ParcelTrap via [Composer][].
   ```shell
   composer require parceltrap/parceltrap
   ```

1. Next, install any relevant [ParcelTrap drivers][drivers].
   ```shell
   # Install the Royal Mail driver
   composer require parceltrap/driver-royal-mail
   ```

<a name="initial-configuration"></a>
## Initial Configuration

All the configuration for ParcelTrap is stored in arrays. Each option is documented for each driver, so feel free to look at the [driver documentation][drivers].

The ParcelTrap manager is bound to the Laravel container and can be retrieved as follows:

```php
// Resolve from container
$this->app->make(\ParcelTrap\ParcelTrap::class)->find(...);

// Resolve via `app()` helper
app(\ParcelTrap\ParcelTrap::class)->find(...);

// Resolve via Facade
\ParcelTrap\Facades\ParcelTrap::find(...);
```

[composer]: https://getcomposer.org
[drivers]: drivers
