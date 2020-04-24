// Подключение бургера

import $ from 'jquery';
import { inherits } from "util";


(function() {

    var btnBurger = $('.j-nav-toggle');
    var mainNav = $('.j-nav-toggle');
    var isShown = false;

    // Method to change states which works in IE7+ / IE8+
    var btn = document.querySelector('.j-nav-toggle');

    // asdf
    var toggleState = function(elm, att, one, two) {
        var elm = document.querySelector(elm);
        elm.setAttribute(att, elm.getAttribute(att) === one ? two : one);
    };

    // setup
    btn.setAttribute('aria-pressed', 'false');

    // turn active state on or off
    btn.onclick = function(e) {
        toggleState('.j-nav-toggle', 'data-state', 'off', 'on');
        toggleState('.btn-wrapper', 'aria-pressed', 'false', 'true');
        e.preventDefault();
    }

    $('.j-nav-toggle').click(function() {
        $('.j-mobile-nav').toggleClass('is-open');
        $('.t-header').toggleClass('t-header_active');

    });
})();


// Модальное окно 

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Программа молодая семья 

// Get the modal
var modal = document.getElementById("myModalFam");

// Get the button that opens the modal
var btn = document.getElementById("myBtnModalFam");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeFam")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Поддержка семьи

// Get the modal
var modal = document.getElementById("myModalGos");

// Get the button that opens the modal
var btn = document.getElementById("myBtnModalGos");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeGos")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



// Get the modal
var modal = document.getElementById("myModalMil");

// Get the button that opens the modal
var btn = document.getElementById("myBtnModalMil");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeMil")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// Попап с окном формы заказа

var modalPopup = document.getElementById("myPopup");

var span = document.getElementsByClassName("closePopup")[0];

var btnPopup = document.getElementById("myBtnPopup");

document.getElementById('myBtnPopup').onclick = function() {
  modalPopup.style.display = "block";
  modal.style.display = "none";
}

span.onclick = function() {
  modalPopup.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modalPopup) {
    modalPopup.style.display = "none";
  }
}

// рефенсирование

var modalPopupRef = document.getElementById("myPopupRef");

var btnPopupRef = document.getElementById("myBtnPopupRef");

var span = document.getElementsByClassName("closePopupRef")[0];

document.getElementById('myBtnPopupRef').onclick = function() {
  modalPopupRef.style.display = "block";
}

span.onclick = function() {
  modalPopupRef.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modalPopup) {
    modalPopupRef.style.display = "none";
  }
}

// материнский капитал

var modalPopupMat = document.getElementById("myPopupMat");

var btnPopupMat = document.getElementById("myBtnPopupMat");

var span = document.getElementsByClassName("closePopupMat")[0];

document.getElementById('myBtnPopupMat').onclick = function() {
  modalPopupMat.style.display = "block";
}

span.onclick = function() {
  modalPopupMat.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modalPopup) {
    modalPopupMat.style.display = "none";
  }
}

// Программа молодая семья

var modalPopupFam = document.getElementById("myPopupFam");

var btnPopupFam = document.getElementById("myBtnPopupFam");

var span = document.getElementsByClassName("closePopupFam")[0];

document.getElementById('myBtnPopupFam').onclick = function() {
  modalPopupFam.style.display = "block";
  modal.style.display = "none";
}

span.onclick = function() {
  modalPopupFam.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modalPopupFam) {
    modalPopupFam.style.display = "none";
  }
}


// Программа поддержки семей с детьми

var modalPopupGos = document.getElementById("myPopupGos");

var btnPopupGos = document.getElementById("myBtnPopupGos");

var span = document.getElementsByClassName("closePopupGos")[0];

document.getElementById('myBtnPopupGos').onclick = function() {
  modalPopupGos.style.display = "block";
  modal.style.display = "none";
}

span.onclick = function() {
  modalPopupGos.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modalPopupGos) {
    modalPopupGos.style.display = "none";
  }
}


// Военная ипотека

var modalPopupMil = document.getElementById("myPopupMil");

var btnPopupMil = document.getElementById("myBtnPopupMil");

var span = document.getElementsByClassName("closePopupMil")[0];

document.getElementById('myBtnPopupMil').onclick = function() {
  modalPopupMil.style.display = "block";
  modal.style.display = "none";
}

span.onclick = function() {
  modalPopupMil.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modalPopupMil) {
    modalPopupMil.style.display = "none";
  }
}

// рефенсирование

var modalPopupContact = document.getElementById("myPopupContact");

var btnPopupContact = document.getElementById("myBtnPopupContact");

var span = document.getElementsByClassName("closePopupContact")[0];

document.getElementById('myBtnPopupContact').onclick = function() {
  modalPopupRef.style.display = "block";
}

span.onclick = function() {
  modalPopupContact.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modalPopup) {
    modalPopupContact.style.display = "none";
  }
}


// Стилизация select

var x, i, j, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("o-form__custom-select");
for (i = 0; i < x.length; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < selElmnt.length; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        h = this.parentNode.previousSibling;
        for (i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            for (k = 0; k < y.length; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);




