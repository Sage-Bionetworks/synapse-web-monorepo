// Process ${widgetname?param1=1&param2=2}

'use strict';

// same as UNESCAPE_MD_RE plus a space
var UNESCAPE_RE = /\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;


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

  token         = state.push('text', '', 0);
  token.content = content.replace(UNESCAPE_RE, '$1');

  token         = state.push('synapse_close', 'span', -1);
  token.markup  = '}';

  state.pos = state.posMax + 1;
  state.posMax = max;
  return true;
}


module.exports = function synapse_plugin(md) {
  md.inline.ruler.after('sub', 'synapse', synapse);
};
