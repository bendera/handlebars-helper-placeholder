# handlebars-helper-placeholder

Handlebars helper which generate an inline placeholder svg.

## Usage example

```
<img src="{{placeholder width='100' height='100'}}" width="100" height="100" alt="example image">
```

## Options

* `width` Image width. Default: `100%`
* `height` Image height. Default: `100%`
* `bg` Background color. Default: `#dddddd`
* `fg` Foreground color. Default: `#ffffff`
* `font` Font family. Dfeault: `sans-serif`
* `size` Font size. Default: `14px`
* `weight` Font weight. Default: `bold`
* `text` Custom text. Default: `[width]x[height]`

## Installation

`npm install handlebars-helper-placeholder --save`

### Usage with [Fractal](http://fractal.build)

```
const placeholder = require('handlebars-helper-placeholder');

const hbs = require('@frctl/handlebars')({
    helpers: {
        placeholder: placeholder
    }
});

fractal.components.engine(hbs);
fractal.docs.engine(hbs);
```

### Usage with [Assemble](http://assemble.io/)

Coming soon...
