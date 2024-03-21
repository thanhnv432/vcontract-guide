$(function() {
  let divSideScroll = document.querySelector('div.wy-side-scroll');
  let menuCurrent = document.querySelectorAll('a.reference.internal.current');
  let divSearch = document.querySelector('div.wy-side-nav-search');
  if (menuCurrent && menuCurrent.length > 0) {
      divSideScroll.scrollTo({ left: 0, top: menuCurrent[0].offsetTop - divSearch.scrollHeight });
  } else {
      divSideScroll.scrollTo({ left: 0, top: 0 });
  }

  let a = document.querySelector('nav.wy-nav-top');
  // let button = document.createElement('button');
  // button.textContent = 'Click me';
  // a.appendChild(button);
  // <svg style="float: right; margin-top: 7px;" class="fa fa-bars" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  //   <path fill-rule="evenodd" clip-rule="evenodd" d="M28.0047 13.3333C28.7411 13.3333 29.338 12.7363 29.338 12V3.99996C29.338 3.26359 28.7411 2.66663 28.0047 2.66663H19.9999C19.2635 2.66663 18.6666 3.26357 18.6666 3.99996C18.6666 4.73633 19.2635 5.33329 19.9999 5.33329H24.786L13.3105 16.8088C12.7898 17.3294 12.7898 18.1737 13.3105 18.6944C13.8312 19.2152 14.6754 19.2152 15.196 18.6944L26.6714 7.21912V12C26.6714 12.7363 27.2683 13.3333 28.0047 13.3333ZM6.66669 6.66663C4.45755 6.66663 2.66669 8.45749 2.66669 10.6666V25.3333C2.66669 27.5425 4.45755 29.3333 6.66669 29.3333H21.3334C23.5426 29.3333 25.3334 27.5425 25.3334 25.3333V17.3333C25.3334 16.5969 24.7364 16 24 16C23.2636 16 22.6667 16.5969 22.6667 17.3333V25.3333C22.6667 26.0697 22.0698 26.6666 21.3334 26.6666H6.66669C5.93031 26.6666 5.33335 26.0697 5.33335 25.3333V10.6666C5.33335 9.93025 5.93031 9.33329 6.66669 9.33329H14.6667C15.4031 9.33329 16 8.73633 16 7.99996C16 7.26359 15.4031 6.66663 14.6667 6.66663H6.66669Z" fill="white"/>
  // </svg>
  // Tạo một thẻ SVG
let svgElement = document.createElement('svg');

// Thêm các thuộc tính cho thẻ SVG
svgElement.setAttribute('style', 'float: right; margin-top: 7px;');
svgElement.setAttribute('class', 'fa fa-bars');
svgElement.setAttribute('width', '32');
svgElement.setAttribute('height', '32');
svgElement.setAttribute('viewBox', '0 0 32 32');
svgElement.setAttribute('fill', 'none');
svgElement.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

// Tạo một phần tử <path> trong thẻ <svg>
let pathElement = document.createElement('path');
pathElement.setAttribute('fill-rule', 'evenodd');
pathElement.setAttribute('clip-rule', 'evenodd');
pathElement.setAttribute('d', 'M28.0047 13.3333C28.7411 13.3333 29.338 12.7363 29.338 12V3.99996C29.338 3.26359 28.7411 2.66663 28.0047 2.66663H19.9999C19.2635 2.66663 18.6666 3.26357 18.6666 3.99996C18.6666 4.73633 19.2635 5.33329 19.9999 5.33329H24.786L13.3105 16.8088C12.7898 17.3294 12.7898 18.1737 13.3105 18.6944C13.8312 19.2152 14.6754 19.2152 15.196 18.6944L26.6714 7.21912V12C26.6714 12.7363 27.2683 13.3333 28.0047 13.3333ZM6.66669 6.66663C4.45755 6.66663 2.66669 8.45749 2.66669 10.6666V25.3333C2.66669 27.5425 4.45755 29.3333 6.66669 29.3333H21.3334C23.5426 29.3333 25.3334 27.5425 25.3334 25.3333V17.3333C25.3334 16.5969 24.7364 16 24 16C23.2636 16 22.6667 16.5969 22.6667 17.3333V25.3333C22.6667 26.0697 22.0698 26.6666 21.3334 26.6666H6.66669C5.93031 26.6666 5.33335 26.0697 5.33335 25.3333V10.6666C5.33335 9.93025 5.93031 9.33329 6.66669 9.33329H14.6667C15.4031 9.33329 16 8.73633 16 7.99996C16 7.26359 15.4031 6.66663 14.6667 6.66663H6.66669Z');
pathElement.setAttribute('fill', 'white');

// Thêm phần tử <path> vào thẻ <svg>
svgElement.appendChild(pathElement);

// Thêm thẻ <svg> vào phần tử 'a'
a.appendChild(svgElement);
})


