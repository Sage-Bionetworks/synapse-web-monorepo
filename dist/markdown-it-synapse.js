(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// Process ${widgetname?param1=1&param2=2}

'use strict';

// same as UNESCAPE_MD_RE plus a space
var UNESCAPE_RE = /\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;

var suffix;
var widgetIndex;
function synapse(state, silent) {
  var found,
      content,
      token,
      max = state.posMax,
      start = state.pos;
  if (start + 3 >= max) { return false; }
  if (state.src.charCodeAt(start) !== 0x24/* $ */) { return false; }
  if (state.src.charCodeAt(start + 1) !== 0x7B/* { */) { return false; }
  if (silent) { return false; } // don't run any pairs in validation mode

  state.pos = start + 2;

  while (state.pos < max) {
    if (state.src.charCodeAt(state.pos) === 0x7D/* } */) {
      found = true;
      break;
    }

    state.md.inline.skipToken(state);
  }

  if (!found || start + 2 === state.pos) {
    state.pos = start;
    return false;
  }

  content = state.src.slice(start + 2, state.pos);

  // don't allow unescaped spaces/newlines inside
  if (content.match(/(^|[^\\])(\\\\)*\s/)) {
    state.pos = start;
    return false;
  }

  // found!
  state.posMax = state.pos;
  state.pos = start + 2;

  // Earlier we checked !silent, but this implementation does not need it
  token         = state.push('synapse_open', 'span', 1);
  token.markup  = '${';
  token.attrs = [ [ 'widgetparams', content.replace(UNESCAPE_RE, '$1') ],
    [ 'class', 'widgetContainer' ],
    [ 'id', 'widget-' + widgetIndex + suffix ] ];

  token         = state.push('synapse_close', 'span', -1);
  token.markup  = '}';

  state.pos = state.posMax + 1;
  state.posMax = max;
  widgetIndex = widgetIndex + 1;
  return true;
}


module.exports = function synapse_plugin(md, _suffix) {
  widgetIndex = 0;
  suffix = _suffix;
  md.inline.ruler.after('emphasis', 'synapse', synapse);
};

},{}]},{},[1]);
