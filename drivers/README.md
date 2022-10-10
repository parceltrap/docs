# Drivers

- [Core Drivers](#core-drivers)
- [Custom Drivers](#custom-drivers)
- [Creating Drivers](#creating-drivers)

<a name="core-drivers"></a>
## Core Drivers

ParcelTrap provides the following drivers as part of the core collection:

- [AusPost](driver-auspost.md)
- [DHL](driver-dhl.md)
- [PKGE](driver-pkge.md)
- [Royal Mail](driver-royal-mail.md)
- [TrackingMore](driver-trackingmore.md)
- [USPS](driver-usps.md)

<a name="custom-drivers"></a>
## Custom Drivers

You can find any custom or core drivers on [Packagist][packagist] by searching using the [`parceltrap-driver` keyword][packagist-drivers].

Alternatively, you can check the [`parceltrap-driver` topic on GitHub][github-drivers].

<a name="creating-drivers"></a>
## Creating Drivers

To get started creating a driver, first clone the [`driver-skeleton`](https://github.com/parceltrap/driver-skeleton) repository.

Once this has been cloned, update any relevant details such as the package name, description, and namespace.

You can then rename the [`Skeleton`](https://github.com/parceltrap/driver-skeleton/blob/main/src/Skeleton.php) and  [`SkeletonServiceProvider`](https://github.com/parceltrap/driver-skeleton/blob/main/src/SkeletonServiceProvider.php) classes to the name of your driver.

Inside the `Skeleton` class, there are multiple methods, here is an overview of what each does:

- The public `__construct` method - this is where the class should be instantiated, and anything class properties derived from the configuration should be initialised.
- The public `find()` method - this should return an instance of the [`TrackingDetails` DTO](https://github.com/parceltrap/parceltrap/blob/main/src/DTOs/TrackingDetails.php), and is where the tracking details should be received from an API.
- The private `mapStatus()` and `getHeaders()` methods - these two methods are utility helper methods for mapping delivery values from the API to a [`Status` enum](https://github.com/parceltrap/parceltrap/blob/main/src/Enums/Status.php) instance, and for retrieving any relevant headers for the requests such as API `Authorization` headers.

Once the driver has been created, it's important to [add tests](https://github.com/parceltrap/driver-skeleton/blob/main/tests/Feature/SkeletonTest.php), these can be mocked via a `MockHandler`, but should reflect the result of the actual API.

> **Note:** All custom exceptions should implement the `ParcelTrap\Contracts\ParcelTrapException` interface.

The driver can then be published to Packagist, make sure to use the [`parceltrap-driver` keyword](https://github.com/parceltrap/driver-skeleton/blob/main/composer.json#L6-L8) so that your driver can be discovered more easily.

[github-drivers]: https://github.com/topics/parceltrap-driver
[packagist]: https://packagist.org
[packagist-drivers]: https://packagist.org/explore?tags=parceltrap%20driver
