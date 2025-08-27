"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

//Створити сторінку, що показує нумерований список пісень
var playList = [{
  author: "LED ZEPPELIN",
  song: "STAIRWAY TO HEAVEN"
}, {
  author: "QUEEN",
  song: "BOHEMIAN RHAPSODY"
}, {
  author: "LYNYRD SKYNYRD",
  song: "FREE BIRD"
}, {
  author: "DEEP PURPLE",
  song: "SMOKE ON THE WATER"
}, {
  author: "JIMI HENDRIX",
  song: "ALL ALONG THE WATCHTOWER"
}, {
  author: "AC/DC",
  song: "BACK IN BLACK"
}, {
  author: "QUEEN",
  song: "WE WILL ROCK YOU"
}, {
  author: "METALLICA",
  song: "ENTER SANDMAN"
}];
var main = document.createElement("main");
main.id = "main-content";
var div = document.createElement("div");
div.className = "container";
addElement(main, div);
var h1 = document.createElement("h1");
h1.style.margin = "10px 0";
h1.append("Song's List");
addElement(div, h1);
var ol = document.createElement("ol");
ol.id = "list";
addElement(div, ol);
addListElement();

function addListElement() {
  playList.forEach(function (song) {
    var li = document.createElement("li");
    li.style.paddingBottom = "5px";
    li.textContent = "".concat(song.author, " - ").concat(song.song);
    ol.appendChild(li);
  });
}

function addElement(parent, tag) {
  parent.appendChild(tag);
  document.body.appendChild(parent);
}
/*TASK2*/


if (document.body.dataset.page === 'modal') {
  var open = document.getElementById('open');
  var close = document.getElementById('close');
  var modal = document.getElementById('modal');
  open.addEventListener('click', function () {
    modal.style.display = 'flex';
  });
  close.addEventListener('click', function () {
    modal.style.display = 'none';
  });
  modal.addEventListener('click', function (e) {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
}
/*TASK3*/


var lights = {
  red: document.getElementById('red'),
  yellow: document.getElementById('yellow'),
  green: document.getElementById('green')
};
var current = 0;
var colors = ['red', 'yellow', 'green'];

function selectorLight() {
  var activeColor = colors[current];
  Object.entries(lights).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        color = _ref2[0],
        el = _ref2[1];

    el.style.backgroundColor = color === activeColor ? color : '';
  });
  current = (current + 1) % colors.length;
}
/*
import { CoffeComponents }
    from "./components/CoffeComponents.js";
import { ShopsComponents }
    from "./components/ShopsComponents.js";

const output = document.querySelector("#output");
const coffeesButton = document
    .querySelector("#coffeesButton");
const shopsButton = document
    .querySelector("#shopsButton");
const themeInput = document
    .querySelector("#themeInput");

themeInput.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme")

})

coffeesButton.addEventListener("click", () => {
    setActiveButton(coffeesButton);
    output.replaceChildren(
        new CoffeComponents().render());
});

shopsButton.addEventListener("click", () => {
    setActiveButton(shopsButton);
    output.replaceChildren(
        new ShopsComponents().render());
});

function setActiveButton(activeButton) {
    const buttons = document
        .querySelectorAll("#menu button");
    for (const button of buttons) {
        if (button === activeButton)
            button.classList.add("activeButton")
        else
            button.classList.remove("activeButton");
    }
}



const itemInput = document.querySelector("#itemInput");
const addButton = document.querySelector("#addButton");
const list = document.querySelector("#list");

itemInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        addItem();
    }
})

addButton.addEventListener("click", addItem)

function addItem() {
    const listItem = document.createElement("li");
    const textNode = document.createTextNode(itemInput.value);
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.style.margin = "2px 5px";
    removeButton.addEventListener("click", removeItem);

    listItem.append(textNode, removeButton);

    list.prepend(listItem);

    itemInput.value = "";
    itemInput.focus();
}

function removeItem(e) {
    const removeButton = e.target;
    const listItem = removeButton.parentElement;
    listItem.remove();
}

const div = document.querySelector("#app")

const p = document.createElement("p");

p.textContent = "Welcome to our coffee shop";

div.append(p);

const h1 = document.querySelector("h1")
h1.textContent = "Skazko";

const body = document.querySelector("body");
body.style.backgroundColor = "black";
body.style.color = "green"


 //як пройтись по дереву нод використовуючи рекурсію
walkNode(document);

function walkNode(node) {
    if (node.nodeType === Node.ELEMENT_NODE) { // відоюразити тільки елементи нод
    console.log(node.nodeName);
    }
    node.childNodes.forEach(child => walkNode(child));
}

 //як пройтись по дереву нод за допомогою обєкта TreeWalker
const treeWalker = document.createTreeWalker(
    document,NodeFilter.SHOW_ELEMENT);

    let node = treeWalker.nextNode();

    while(node){
        if(node instanceof HTMLParagraphElement) {
            node.style.backgroundColor = "#CCC";
        }
        console.log(node.nodeName);
        node = treeWalker.nextNode();
    }

// достукатись до елемента
const elements = document.getElementsByTagName("p");
let count = 1;
for ( const el of elements) {
el.style.backgroundColor = "#CCC";
el.textContent = `${count++}. ${el.textContent}`;
}


const elements = document.getElementsByClassName("list");
let count = 1;
for ( const el of elements) {
el.style.backgroundColor = "#CCC";
el.textContent = `${count++}. ${el.textContent}`;
}


const element = document.querySelectorAll("#app .list");
for (const el of element) {
el.style.backgroundColor = "#CCC";
}
*/