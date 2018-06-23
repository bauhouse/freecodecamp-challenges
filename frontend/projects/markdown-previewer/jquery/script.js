/*--------------------------------*/
/* Markdown Previewer             */
/*--------------------------------*/
/* by Stephen Bau                 */
/*--------------------------------*/

var debug = false,
    editor = $('#editor');

setScreenClass();
toggleLinks();
initHelp();

function initHelp() {
  $('#help').css('display', 'none');
}

// Active toggle links for markdown and preview code panels on large screens
function toggleLinks() {
  $('.large-screen #btn-markdown').unbind('click').click(togglePanels);
  $('.large-screen #btn-preview').unbind('click').click(togglePanels);
  $('.small-screen #btn-markdown').unbind('click').click(togglePanelsSmallScreens);
  $('.small-screen #btn-preview').unbind('click').click(togglePanelsSmallScreens);
}

// Fix width of code editors when resizing smaller than 768px
var TO = false;
$(window).resize(function() {
  setScreenClass();
  resetPanelMetrics();

  // Run resizeComplete() function only when the window resize is complete
  // http://stackoverflow.com/questions/667426/javascript-resize-event-firing-multiple-times-while-dragging-the-resize-handle/668185#668185
  if(TO !== false)
    clearTimeout(TO);
  TO = setTimeout(resizeComplete, 200); //200 is time in miliseconds
});

// Add or remove toggle links for code panels
function resizeComplete() {
  toggleLinks();
}

// Set screen size class on body element
function setScreenClass() {
  if($(window).width() < 768) {
    $('body').addClass('small-screen').removeClass('large-screen');
  } else {
    $('body').addClass('large-screen').removeClass('small-screen');
  }
}

function resetPanelMetrics() {
  $('.large-screen .markdown').css({ left: '0', width: '50%' });
  $('.large-screen .preview').css({ left: '50%', width: '50%' });
  $('.markdown-only .preview').css({ left: '100%', width: '50%' });
  $('.markdown-only .markdown').css({ left: '0', width: '100%' });
  $('.preview-only .preview').css({ left: '0', width: '100%' });
  $('.preview-only .markdown').css({ left: '-50%', width: '50%' });
  $('.small-screen .code').css({ left: '0', width: '100%' });
}

function togglePanels() {
  // determine which side was clicked
  var panel = $(this).is('#btn-markdown') ? 'markdown' : 'preview',
      otherpanel = panel == 'markdown' ? 'preview' : 'markdown',
      speed = 150,
      animatePanel = animateOtherPanel = {};

  if (editor.is('.' + panel + '-only')) { // showing the panel
    // only the preview tab could have been clicked
    animatePanel = panel == 'preview' ? { left: '50%', width: '50%' } : { left: '0%', width: '50%' };
    animateOtherPanel = otherpanel == 'markdown' ? { left: '0%' } : { left: '50%' };
    editor.find('div.' + panel).animate(animatePanel, speed);
    editor.find('div.' + otherpanel).show().animate(animateOtherPanel, speed, function () {
      editor.removeClass(panel + '-only');
    });
    $(this).toggleClass('current');
  } else { // hiding other panel
    if ($(this).not('.current') && editor.is('.' + otherpanel + '-only')) {
      animatePanel = panel == 'preview' ? { left: '0', width: '100%' } : { left: '0', width: '100%' };
      animateOtherPanel = otherpanel == 'markdown' ? { left: '-50%', width: '50%' } : { left: '100%', width: '50%' };
      editor.find('div.' + panel).show().animate(animatePanel, speed);
      editor.find('div.' + otherpanel).animate(animateOtherPanel, speed, function () {
        editor.removeClass(otherpanel + '-only');
        editor.addClass(panel + '-only');
        $('#btn-' + otherpanel).toggleClass('current');
        $('#btn-' + panel).toggleClass('current');
      }).hide();
    } else {
      animatePanel = panel == 'preview' ? { left: '0%', width: '100%' } : { width: '100%' };
      animateOtherPanel = otherpanel == 'markdown' ? { left: '-50%' } : { left: '100%' };
      editor.find('div.' + panel).animate(animatePanel, speed);
      editor.find('div.' + otherpanel).animate(animateOtherPanel, speed, function () {
        $(this).hide();
        editor.addClass(panel + '-only');
      });
      $(this).toggleClass('current');
    }
  }
  return false;
}

function togglePanelsSmallScreens() {
  var panel = $(this).is('#btn-markdown') ? 'markdown' : 'preview',
      otherpanel = panel == 'markdown' ? 'preview' : 'markdown';

  if (editor.is('.' + panel + '-only')) { // showing the panel
    editor.find('div.' + otherpanel).show();
    editor.removeClass(panel + '-only');
    $(this).toggleClass('current');
  } else { // hiding other panel
    if ($(this).not('.current') && editor.is('.' + otherpanel + '-only')) {
      editor.find('div.' + panel).show();
      editor.find('div.' + otherpanel).hide();
      editor.removeClass(otherpanel + '-only');
      editor.addClass(panel + '-only');
      $('#btn-' + otherpanel).toggleClass('current');
      $('#btn-' + panel).toggleClass('current');
    } else {
      editor.find('div.' + otherpanel).hide();
      editor.addClass(panel + '-only');
      $(this).toggleClass('current');
    }
  }
  return false;
}

// Toggle Help
$helpBtn = $('#header div.help a:last');
$helpBtn.click(function () {
  $(window).trigger('togglehelp');
  return false;
});


// Find the state of the Help panel from local storage
var helpOpen;
if (localStorage['helpOpen'] == 'true') {
  helpOpen = true;
} else {
  helpOpen = false;
}

// Open the Help Panel
if (helpOpen == true) {
  $('#help').css('right', '0');
  $('#control').css('margin-right', '300px');
  editor.find('> div').css('right', '300px');
  $('#btn-about').toggleClass('current');
}

$(window).bind('togglehelp', function () {
  var s = 100, right = helpOpen ? 0 : 300;

  $('#help').css('display', 'block');

  $('#control').animate({ marginRight: right }, { duration: s });
  editor.find('> div').animate({ right: right }, { duration: s });

  $('#help').animate({ right: helpOpen ? -300 : 0 }, { duration: s});

  $('#btn-about').toggleClass('current');

  helpOpen = helpOpen ? false : true;

  if (helpOpen) {
    localStorage['helpOpen'] = 'true';
  } else {
    localStorage['helpOpen'] = 'false';
  }
});

$(document).keyup(function (event) {
  if (helpOpen && event.keyCode == 27) {
    $(window).trigger('togglehelp');
  }
});
