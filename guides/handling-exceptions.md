# Handling Exceptions

All ParcelTrap exceptions implement the `ParcelTrap\Contracts\ParcelTrapException` interface, so you can catch all of
them with:

```php
try {
   $details = ParcelTrap::find('ABCDEFG');
} catch (\ParcelTrap\Contracts\ParcelTrapException $exception) {
}
```

All ParcelTrap Driver exceptions extend the `ParcelTrap\Exceptions\ParcelTrapDriverException` class, so you can catch
all of them with:

```php
try {
   $details = ParcelTrap::find('ABCDEFG');
} catch (\ParcelTrap\Exceptions\ParcelTrapDriverException $exception) {
   echo $exception->driver;  // Driver<YourSelectedDriver>
}
```
