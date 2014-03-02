# jQuery plugin: Shift Heading Levels

Shifts heading levels up or down.

## Use

```js
$( selector ).shiftHeadingLevels( shift_amt );
```

`shift_amt` can be positive or negative, and defaults to 1. Heading levels will not be shifted below 1 or above 6.

If something other than a heading is selected, the headings it contains will be shifted.

Attributes and contents are maintained.

## Examples

```js
// Changes all <h1> to <h2>.
$( 'h1' ).shiftHeadingLevels();

// Changes all <h2> to <h4>.
$( 'h2' ).shiftHeadingLevels( 2 );

// Changes all <h3> to <h2>.
$( 'h3' ).shiftHeadingLevels( -1 );

// Changes all <h4> to <h6>.
$( 'h4' ).shiftHeadingLevels( 100 );

// Changes <h5 id="this-is-an-h5"> to <h6 id="this-is-an-h5">.
$( '#this-is-an-h5' ).shiftHeadingLevels();

// Shifts all headings in <div id="this-is-a-div"> up by 1.
$( '#this-is-a-div' ).shiftHeadingLevels();
```
