// This is a self invoking function
(function() {
  // This is a constructor
  this.Tabs = function() {
    //defaults
    var defaults = {
        activeButtonClass: 'active',
        activeContainerClass: 'active',
        tabOuter: null,
        buttonContainer: null,
        contentContainer: null
      }
      // Since there are required options so we are going without if condition.
    // Since all arguments are under one object, so technically there is only a single argument passed.
    var newer = arguments[0];
    this.options = replaceDefaults(defaults, newer);
    startTab(this.options);
  }
  Tabs.prototype.activeTabId=function(e){
	  var contentWrap=document.querySelector('.tab-content');
	  var anyElement=document.querySelector(e);
	  for(var i=0; i<contentWrap.children.length;i++){
		  if(contentWrap.children[i].classList.contains(this.options.activeContainerClass)) anyElement.innerHTML=contentWrap.children[i].id;
	  }
  }
  function replaceDefaults(older, newer) {
      var anyOption;
      // Accessing each newer option
      for (anyOption in newer) {
        // Check whether this option present in argument[0] object
        if (newer.hasOwnProperty(anyOption)) {
          older[anyOption] = newer[anyOption]
        }
      }
      return older;
    }
    // Function to make tab functional
  function startTab(e) {
    // All options are accessed here through "e"
    var a = document.querySelector(e.tabOuter),
      b = document.querySelector(e.buttonContainer),
      c = document.querySelector(e.contentContainer),
      d = e.activeButtonClass,
      f = e.activeContainerClass;
    changeTab(a, b, c, d, f, b.children[0]);
    for (var i = 0; i < a.children.length; i++) {
      // if current child is actually the button container then...
      if (a.children[i] == b) {
        for (var o = 0; o < b.children.length; o++) {
          
          b.children[o].addEventListener('click', function() {
            // Arguments passed are tab outer, button outer, content outer, button active class, tab active class and clicked button
            changeTab(a, b, c, d, f, this);
          });
        }
      }
    }
  }

  function changeTab(outer, button, content, bactive, cactive, current) {
    // Id for tab
    var currentId = current.hash;
    for (var i = 0; i < outer.children.length; i++) {
      // Works only if content container is under the tab container
      if (outer.children[i] == content) {
        for (var x = 0; x < content.children.length; x++) {
			// Remove active class from all content and hide them all
          content.children[x].classList.remove(cactive);
          content.children[x].style.display='none';
          if (content.children[x] == content.querySelector(currentId)) {
            content.children[x].classList.add(cactive);
            content.children[x].style.display='block';
          }
        }
      }
	  // Check if button wrap is under outer wrap
      if (outer.children[i] == button) {
		  // Loop on each button
        for (var o = 0; o < button.children.length; o++) {
			// Remove active from all buttons
          button.children[o].classList.remove(bactive);
        }
		// Add button to current button
        current.classList.add(bactive);
      }
    }
  }
  var tab1 = new Tabs({
    tabOuter: '.tab-outer',
    buttonContainer: '.tab-button',
    contentContainer: '.tab-content',
    activeButtonClass: 'select'
  });
  document.querySelector('.showme').onclick=function(){
  tab1.activeTabId('.foo');
  }
})();
