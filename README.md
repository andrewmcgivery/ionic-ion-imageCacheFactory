# ionic-ion-imageCacheFactory
A factory to preload images for your Ionic app.

##Usage
First, import the script into your page.

```
<script src="lib/ionic.ion.imagecachefactory.js">
</script>
```

Next, import the module into your app.

```
angular.module('myCoolApp', ['ionic','ionic.ion.imageCacheFactory'])
```

Finally, you can call the factory by passing it an array of image URLs to preload.

```
$ImageCacheFactory.Cache([
		"http://domain.com/path/to/kittens.jpg",
		"http://domain.com/path/to/kittens2.jpg",
		"http://domain.com/path/to/kittens3.jpg"
	]);
```

The ```Cache``` method retuns a promise when all images have been loaded.

```
$ImageCacheFactory.Cache([
		"http://domain.com/path/to/kittens.jpg",
		"http://domain.com/path/to/kittens2.jpg",
		"http://domain.com/path/to/kittens3.jpg"
	]).then(function(){
		console.log("Images done loading!");
	});
```

If any of the images result in an error, you can handle that as well by passing a second function to your ```then```.

```
$ImageCacheFactory.Cache([
		"http://domain.com/path/to/kittens.jpg",
		"http://domain.com/path/to/kittens2.jpg",
		"http://domain.com/path/to/kittens3.jpg"
	]).then(function(){
		console.log("Images done loading!");
	},function(failed){
		console.log("An image failed: "+failed);
	});
```
