let btnelement = document.getElementById('btn-element');

btnelement.addEventListener('click',function() {
    alert('"Book Now" functionality is not available right now')
});

let navigationElement = document.getElementById('navElement');
let burgerBar = document.getElementById('burgerBar');

burgerBar.addEventListener('click',function () {
    navigationElement.classList.toggle("newNavigation");
});


