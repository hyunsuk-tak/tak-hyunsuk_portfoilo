
/* HEADER */
window.onload = function () { scrollFunction() };
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    var header = document.getElementById('header');

    if (document.documentElement.scrollTop > 70) {
        if (!header.classList.contains('navbar-fixed')) {
            header.classList.add('navbar-fixed');
            document.getElementsByTagName('body')[0].style.marginTop = '70px';
            header.style.display = 'none';
            setTimeout(function () {
                header.style.display = 'block';
            }, 40);
        }
    } else {
        if (header.classList.contains('navbar-fixed')) {
            header.classList.remove('navbar-fixed');
            document.getElementsByTagName('body')[0].style.marginTop = '0';
        }
    }
}
//navbar toggle button
function menuToggle() {
    document.getElementById('menu').classList.toggle('show');
}

document.getElementById('toggleBtn').addEventListener('click', menuToggle);


var acc = document.getElementsByClassName('btn');
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
