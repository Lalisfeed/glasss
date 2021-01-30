# Glasss

# What is dis?
### A Glassmorphism based NPM Library 

# Installation

```
npm i glasss --save
```

# How to Use

Add an attribute with  ```class="glasscss"``` to your `html` element 

```html
<div class="glasscss"></div>
```

Then...

Add this to your `Javascript` file

```javascript 
import { glasscss } from 'glasss';

glasscss({
    back_ground: "rgba( 255, 255, 255, 0.20)", // alpha limit at [0 - 0.25]
    backdrop_filter: "10px", // filter limit at [0.0 - 20.0]
    border_radius: "10px", // 10px is nice
    border_width: true, // true for best resuts
    color_value: "black", // your color
    margin_value: "10px", // your value
    padding_value: "10px", // your value
});
```

# Congratulations

That's All You have added GLASSMORPHISM TO ALL YOUR .
