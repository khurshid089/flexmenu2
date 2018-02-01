# flexmenu2 1.1.0
flexmenu2 is a jQuery plugin that lets you create responsive menus that automatically collapse into a drop-down when they run out of space.

[Source on GitHub](https://github.com/mylastore/flexmenu2)

The original flexMenu is written by [Ryan DeBeasi](http://www.ryandebeasi.com/) and [their fantastic contributors](https://github.com/352Media/flexMenu/graphs/contributors). Please got their respective links for info.

## Usage

npm install flexmenu2

Finally, call flexMenu on an unordered list that contains your menu items:

```javascript
$( document ).ready(function() {
  $('ul.flex').flexMenu();
});
```

### AMD/RequireJS

The plugin can be loaded using an AMD loader such as RequireJS:

```javascript
require(['jquery', 'flexmenu'], function ($) {
  $( document ).ready(function() {
    $('ul.flex').flexMenu();
  });
});
```

## Dependencies

### jQuery
Tested in jQuery 1.7-1.12. It probably works on older versions.

## Advanced usage

If you're feeling fancy, you can include any of the following options when calling flexMenu:

example usage: 

```javascript
$( document ).ready(function() {
  $('ul.flex').flexMenu({
    linkText: 'MY MENU',
    linkTitle: 'MY TITLE'
  });
});
```

### linkTitle
(string, defaults to 'Open/Close Menu')
What should the title of the "view more" button be?

### linkTex
(string, defaults to '&#9776; MORE')
If we hit the cutoff and collapse all the links into the dropdown, what text should we display on the "menu" link?


## License

flexmenu2 is licensesed under the MIT License, and is free for commercial or personal use.

Copyright &copy; 2018 reachdevelopers.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
