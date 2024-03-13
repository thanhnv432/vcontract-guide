$(function() {
  let divSideScroll = document.querySelector('div.wy-side-scroll');
  let menuCurrent = document.querySelectorAll('a.reference.internal.current');
  let divSearch = document.querySelector('div.wy-side-nav-search');
  if (menuCurrent && menuCurrent.length > 0) {
      divSideScroll.scrollTo({ left: 0, top: menuCurrent[0].offsetTop - divSearch.scrollHeight });
  } else {
      divSideScroll.scrollTo({ left: 0, top: 0 });
  }
})