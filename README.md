# Glasss

[![npm version](https://img.shields.io/npm/v/glasss.svg?style=flat-square)](https://www.npmjs.org/package/glasss) 
[![install size](https://packagephobia.com/badge?p=glasss)](https://packagephobia.com/result?p=glasss) 
[![npm downloads](https://img.shields.io/npm/dw/glasss.svg?style=flat-square)](http://npm-stat.com/charts.html?package=glasss) 

## What is dis?

>  A Glassmorphism based NPM Library 

## Installation

```
npm i glasss
```

## How to Use

* **For Single Class Glassmorphism**

Add an attribute with  ```class="glasscss"``` to your `html` element 

```html
<div class="glasscss"></div>
```

Then...

Add this to your `Javascript` file

```javascript 
import { glasscss } from 'glasss';

glasscss({
    back_ground: "rgba( 255, 255, 255, 0.25)", // alphalimit at [0 - 1] 
    backdrop_filter: "4px", // filter limit at [0.0 - 20.0] recommended
    border_radius: "10px", // 10px is recommended
    border_wide: true, // true for best results
    color_value: "white", // your color
    margin_value: "10px", // your value 
    padding_value: "10px", // your value 
});
```
<br>

* **For Multi-Class Glassmorphism**

Add AasManyAsPossible Classes to your `html` page 

```html
<div class="class1"></div>
<div class="class2"></div>
<div class="class3"></div>
```

Then...

Add this to your `Javascript` file

```javascript 
import { glassClass } from 'glasss';

glassClass({
    "class1": {
        back_ground: "rgba( 255, 255 , 255, 0.25)", 
        backdrop_filter: "5px", 
        border_radius: "0px", 
        border_wide: true, 
        color_value: "white", 
        margin_value: "0px", 
        padding_value: "0px"
    },
    "class2": {
        back_ground: "rgba( 225, 0, 0, 0.42)", 
        backdrop_filter: "10px", 
        border_radius: "10px", 
        border_wide: false, 
        color_value: "yellow", 
        margin_value: "10px", 
        padding_value: "10px"
    }, 
    "class3": {
        back_ground: "rgba( 0, 100, 255, 0.75)", 
        backdrop_filter: "10px", 
        border_radius: "10px", 
        border_wide: true, 
        color_value: "white", 
        margin_value: "20px", 
        padding_value: "20px"
    }
});
```
## Tools

- **[glasss-cli](https://npmjs.com/package/glasss-cli)** - A cli tool for this package

## Congratulations

That's all you have added **GLASSMORPHISM CSS** to your Web Page.

## License

> **MIT License**