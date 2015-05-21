window.document.addEventListener("keypress", function(e){
  var element = document.getElementById(String.fromCharCode(e.keyCode));
  if(element){
    var originalClassName = element.className;
    var classes = originalClassName.split(' ');
    var alreadyJumping = classes.indexOf('jump') > -1;
    if(!alreadyJumping){
      element.className = element.className + " jump";
      setTimeout(function(){element.className = originalClassName}, 1000);
    };
  };
});
