# flexmenu2 1.0.0
flexmenu2 is a jQuery plugin that lets you create responsive menus that automatically collapse into a drop-down when they run out of space.

[Demo](http://reachdevelopers.com/flexmenu2/)

[Source on GitHub](https://github.com/mylastore/flexmenu2)

The original flexMenu is written by [Ryan DeBeasi](http://www.ryandebeasi.com/) and [our fantastic contributors](https://github.com/352Media/flexMenu/graphs/contributors). Please got their respective links for info.

## Usage

npm install flexmenu2

Next, create an unordered list that contains your menu items. In CSS, use `display: inline-block;` or `float: left;` to get the  `li` elements to line up horizontally.

Finally, call flexMenu on an unordered list that contains your menu items:

```javascript
$( document ).ready(function() {
  $('ul').flexMenu();
});
```

### AMD/RequireJS

The plugin can be loaded using an AMD loader such as RequireJS:

```javascript
require(['jquery', 'flexmenu'], function ($) {
  $( document ).ready(function() {
    $('ul').flexMenu();
  });
});
```

## Dependencies

### jQuery
I've tested the plugin in jQuery 1.7-1.12. It probably works on older versions, but I haven't tested on those.

## Advanced usage

If you're feeling fancy, you can include any of the following options when calling flexMenu:

### threshold
(integer, defaults to 2)
If there are this many items or fewer in the list, we will not display a "View More" link and will instead let the list break to the next line. This is useful in cases where adding a "view more" link would actually cause more things to break  to the next line.

### cutoff
(integer, defaults to 2)
If there is space for this many or fewer items outside of our "more" popup, just move everything into the more menu. In that case, also use linkTextAll and linkTitleAll instead of linkText and linkTitle. To disable this feature, just set this value to 0.

### linkText
(string, defaults to 'More')
What text should we display on the "view  more" link?

### linkTitle
(string, defaults to 'View More')
What should the title of the "view more" button be?

### linkTextAll
(string, defaults to 'Menu')
If we hit the cutoff and collapse all the links into the dropdown, what text should we display on the "menu" link?

### linkTitleAll
(string, defaults to 'Menu')
If we hit the cutoff and collapse all the links into the dropdown, what should the title of the "menu" link be?

### shouldApply
(function)
Should we apply now ? Function called before moving anything. If it returns false, we'll move the list items back to where they were before, and remove the "View More" link.

### undo
(boolean, defaults to 'false')
If this is true, we'll move the list items back to where they were before, and remove the "View More" link. This is useful if you actually _do_ want list items to stack in some cases, or if you want to recalculate the menu.


## License

flexmenu2 is licensesed under the MIT License, and is free for commercial or personal use.

Copyright &copy; 2018 reachdevelopers.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
