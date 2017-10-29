(function() {
  var popOver = document.querySelector('#pop-over'),
    images = document.querySelector('#pop-over-images'),
    close = document.querySelector('#close'),
    chisel = document.querySelector('#chisel'),
    shaving = document.querySelector('#shaving');

  if (sessionStorage.getItem('popover-loaded') != '1') {
    sessionStorage.setItem('popover-loaded', '1');
    var popovercounter = 0;
    var timer = 0;
    window.setInterval(function() {
      timer++;
      if (timer === 3) {
        if (popovercounter < 1) {
          console.log("opened");
          var tl = new TimelineMax();
          tl.to(popOver, 0.1, {display: "block"});
          tl.to(images, 0.1, {display: "block"});
          tl.to(popOver, 0.5, {opacity: 1});
          tl.to(images, 0.5, {opacity: 1});
        }
      }
    }, 1000);
  }

  function closed() {
    var tl = new TimelineMax();
    tl.to(popOver, 0.5, {opacity: 0});
    tl.to(images, 0.5, {opacity: 0});
    tl.to(popOver, 0.5, {display: "none"});
    tl.to(images, 0.5, {display: "none"});
  }

  function parallax() {
    var scrolltop = window.pageYOffset;
    chisel.style.top = -scrolltop * 0.2 + 'px';
    shaving.style.top = -scrolltop * 0.2 + 'px';
  }

  window.addEventListener('scroll', parallax, false);
  close.addEventListener('click', closed, false);
})();
