# Fast Js
Fast js is library to make typing long boring js lines easier with only one line of code 

## requirements
jquery

## How its work
- Redirect method

```
//old  
window.location = url;
//new 
redirect(url);
```

- console.log method

```
//old  
console.log(data)
//new 
cl(data);
```
```
//old  
console.error(data)
//new 
ce(data);
```

- inArray method

```
//old  
return arr.indexOf(data) > -1
//new 
inArray(arr,data);
```




### Installing

You can just install it from npm 

npm command 

```
npm i --save fastjs.shortcuts
```

then 

if you use webpack 

```
require('fastjs.shortcuts');
```
if you use plain js 

```
<script src="path/to/fastjs.shortcuts/index.js"></script>
```

in both cases dont forget to install jquery to the project

## Authors

* **ISSAM ABBAS** - *Initial work* - [mlk1](https://github.com/issamlk1/)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

