let btnelement = document.getElementById('btn-element');

btnelement.addEventListener('click',function() {
    alert('please wait')
});

let navigationElement = document.getElementById('navElement');
let burgerBar = document.getElementById('burgerBar');

burgerBar.addEventListener('click',function () {
    navigationElement.classList.toggle("newNavigation");
});


console.log(typeof age);