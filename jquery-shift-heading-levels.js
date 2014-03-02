( function( factory ) {

  if ( typeof define === 'function' && define.amd ) {
    // AMD. Register as an anonymous module.
    define( [ 'jquery' ], factory );
  } else if ( typeof exports === 'object' ) {
    // Node/CommonJS
    factory( require( 'jquery' ) );
  } else {
    // Browser globals
    factory( jQuery );
  }

}( function( $ ) {

  $.fn.shiftHeadingLevels = function( shift ) {

    var self = this;
    shift = parseInt( shift ) || 1;

    self.each( function( i, el ) {

      $el = $( el );
      
      if ( el.tagName.match( /H[1-6]/ ) ) {

        var old_lvl = parseInt( el.tagName[ 1 ] );
        var new_lvl = old_lvl + shift;
        new_lvl = new_lvl < 1 ? 1 : new_lvl;
        new_lvl = new_lvl > 6 ? 6 : new_lvl;

        var $new_el = $( '<h' + new_lvl + '>' + $el.html() + '</h' + new_lvl + '>' );
        
        var atts = el.attributes;
        for ( var n = 0; n < atts.length; n++ )
          $new_el.attr( atts[ n ].name, atts[ n ].value );

        $el.replaceWith( $new_el );

      } else $el.find( 'h1,h2,h3,h4,h5,h6' ).shiftHeadingLevels( shift );

    } );

    return self;

  };

} ) );
