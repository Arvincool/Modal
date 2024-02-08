

( function( window ) {




if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, r) {
    return elem.classList.contains( r );
  };
  addClass = function( elem, r ) {
    elem.classList.add( r );
  };
  removeClass = function( elem, r ) {
    elem.classList.remove( r );
  };
}
else {
  hasClass = function( elem, r) {
    return classReg( r ).test( elem.className );
  };
  addClass = function( elem, r ) {
    if ( !hasClass( elem, r ) ) {
      elem.className = elem.className + ' ' + r;
    }
  };
  removeClass = function( elem, r) {
    elem.className = elem.className.replace( classReg( r ), ' ' );
  };
}

function toggleClass( elem, r ) {
  var fn = hasClass( elem, r ) ? removeClass : addClass;
  fn( elem, r );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};


if ( typeof define === 'function' && define.amd ) {

} else {
  window.classie = classie;
}

})( window );
