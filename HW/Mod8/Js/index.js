"use strict";
/*
  Создайте компонент галлереи изображений следующего вида.
  
       
    
    🔔 Превью компонента: https://monosnap.com/file/5rVeRM8RYD6Wq2Nangp7E4TkroXZx2
      
      
    Реализуйте функционал:
      
      - image-gallery есть изначально в HTML-разметке как контейнер для компонента.
    
      - fullview содержит в себе увеличенную версию выбранного изображения из preview, и
        создается динамически при загрузке страницы.
    
      - preview это список маленьких изображений, обратите внимание на атрибут data-fullview,
        он содержит ссылку на большое изображение. preview и его элементы, также создаются 
        динамически, при загрузке страницы.
        
      - При клике в элемент preview, необходимо подменить src тега img внутри fullview
        на url из data-атрибута выбраного элемента.
        
      - По умолчанию, при загрузке страницы, активным должен быть первый элемент preview.
        
      - Изображений может быть произвольное количество.
      
      - Используйте делегирование для элементов preview.
      
      - При клике, выбраный элемент из preview должен получать произвольный эффект выделения.
      
      - CSS-оформление и имена классов на свой вкус.
      
      
    🔔 Изображения маленькие и большие можно взять с сервиса https://www.pexels.com/, выбрав при скачивании
      размер. Пусть маленькие изображения для preview будут 320px по ширине, большие для fullview 1280px.
      Подберите изображения одинаковых пропорций.
*/

/*
  Массив объектов с данными для создания компонента выглядит следующим образом.
  Замените пути на соотвествующие вашим, или назовите изображения аналогично.
*/

const galleryItems = [
  {
    preview: "./images/preview-1.jpg",
    fullview: "./images/fullview-1.jpg",
    alt: "alt text 1"
  },
  {
    preview: "./images/preview-2.jpg",
    fullview: "./images/fullview-2.jpg",
    alt: "alt text 2"
  },
  {
    preview: "./images/preview-3.jpg",
    fullview: "./images/fullview-3.jpg",
    alt: "alt text 3"
  },
  {
    preview: "./images/preview-4.jpg",
    fullview: "./images/fullview-4.jpg",
    alt: "alt text 4"
  },
  {
    preview: "./images/preview-5.jpg",
    fullview: "./images/fullview-5.jpg",
    alt: "alt text 5"
  },
  {
    preview: "./images/preview-6.jpg",
    fullview: "./images/fullview-6.jpg",
    alt: "alt text 6"
  }
];
const previewGallery = document.querySelector(".preview");
const fullview = document.querySelector(".fullview");
const imgFullview = fullview.firstElementChild;

function changeFullview(event) {
  const target = event.target;
  if (target.nodeName !== "IMG") return;
  findPreview(target);
  lightPreview(target);
}

function findPreview(elem) {
  imgFullview.src = elem.dataset.fullview;
}

function lightPreview(elem) {
  const currentElem = document.querySelector(".newClass");
  if (currentElem) {
    currentElem.classList.remove("newClass");
  }
  elem.classList.add("newClass");
}

previewGallery.addEventListener("click", changeFullview);
