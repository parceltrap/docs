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

<a name="usage-examples"></a>
## Usage Examples

All ParcelTrap drivers will return either an instance of `ParcelTrap\TrackingDetails` or will throw an exception such as `ParacelTrap\Exceptions\ApiLimitReachedException`.

```php
use ParcelTrap\Facades\ParcelTrap;
use ParcelTrap\Enums\Status;

$details = ParcelTrap::find('12345');


// The TrackingDetails object provides access to standardised data

echo $details->identifier;                               // "12345"
echo $details->summary:                                  // "Package status is: In Transit"
echo $details->status;                                   // Enum<Status>
echo $details->status->description();                    // "In Transit"
echo $details->estimatedDelivery->format('jS M Y');      // "12th Oct 2022"


// The TrackingDetails object also provides access to raw/unstandardised data from the API

$data->events; // array - Recorded events of the parcel from sender to receiver
$data->raw; // array - Raw payload response from the Tracking API.


// The ParcelTrap driver may throw exceptions as needed.

try {
   $details = ParcelTrap::find('ABCDEFG');
} catch (\ParcelTrap\Exceptions\ApiLimitReachedException $exception) {
   echo $exception->driver;                              // Driver<YourSelectedDriver>
   echo $exception->limit;                               // 10
   echo $exception->period;                              // "minute"
   echo $exception->getMessage();                        // "FedEx API limit reached (10 calls/minute)"
} catch (\ParcelTrap\Exceptions\ApiAuthenticationFailedException $exception) {
   echo $exception->driver;                              // Driver<YourSelectedDriver>
   echo $exception->getMessage();                        // "Failed to authenticate connection with FedEx"
} catch (\Throwable $throwable) {
   // something else went wrong
}

// All ParcelTrap Driver exceptions extend ParcelTrapDriverException so you can catch all:
try {
   $details = ParcelTrap::find('ABCDEFG');
} catch (\ParcelTrap\Exceptions\ParcelTrapDriverException $exception) {
   echo $exception->driver;                         // Driver<YourSelectedDriver>
}
```

[composer]: https://getcomposer.org
[drivers]: drivers
