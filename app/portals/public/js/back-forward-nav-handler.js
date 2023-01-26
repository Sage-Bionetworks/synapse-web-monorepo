/**
 * PORTALS-1188 (Persist query parameters to URL in portals - update correctly on back/forward navigation). Related to SWC-5131.
 * Detect Back/Forward navigation, and force a page reload.
 */


// See https://stackoverflow.com/questions/25806608/how-to-detect-browser-back-button-event-cross-browser

var html = document.getElementsByTagName("HTML")[0];

html.onmouseenter = function() {
	//User's mouse is inside the page.
	window.innerDocClick = true;
}

html.onmouseleave = function() {
	//User's mouse has left the page.
	window.innerDocClick = false;
}

window.onpopstate = function() {
	if (!window.innerDocClick) {
		// history change invoked by action outside of window (like the back/forward button).
		console.log('detected popstate change outside of doc, reloading');
		location.reload();
	} else {
		console.log('detected popstate change inside of doc, propagating');
	}
}