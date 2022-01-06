/**
 * 1- Detect someone clicking the hamburger menu icon (addEventListener)
 * 2- Add a class to the menu (.menu-open)
 * 3- Detect when someone clicks the 'close-menu' ID
 * 4- Remove the .menu-open class
 * 
 * 'toggling a class'
 */
 const menuController = document.getElementById('menu-hamburger');
 menuController.addEventListener('click', function() {
   
   // setAttribute way
   // Warning: This over-writes previous classes. Use add/remove/toggle to impact just one class
   //document.querySelector('.menu').setAttribute('class', 'menu menu-open');
 
   // classList way
   document.querySelector('.menu').classList.toggle('menu-open');
 });
 
 document.getElementById('menu-close').addEventListener('click', function() {
   console.log('close anonymous function was clicked');
   document.querySelector('.menu').classList.toggle('menu-close');
   document.querySelector('.menu').classList.toggle('menu-open');
 });