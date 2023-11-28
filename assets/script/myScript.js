$(document).ready(function(){
    $('.owl-one').owlCarousel({
        loop:true,
        autoplay: true,
        margin:10,
        nav:false,
        dots: false,
        autoplayTimeout: 2000,
        
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    $('.owl-two').owlCarousel({
        loop:true,
        autoplay: true,
        margin:10,
        nav:false,
        dots: false,
        autoplayTimeout: 2000,
        
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    });

    $('.owl-three').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
});



// Product Images Gallery 

let product_img = document.querySelector('.product-img img');
let product_thumbnail = document.querySelectorAll('.product-thumbnail');

product_thumbnail.forEach((product) => {
  product.addEventListener('click', () => {
    product_thumbnail.forEach((product) => {
      product.classList.remove('active');
    });
    product.classList.add('active');

    let img = product.querySelector('img').getAttribute('src');
    let index = product.querySelector('img').getAttribute('data-index');

    product_img.setAttribute('src', img);
    product_img.setAttribute('data-index', index);

    product_img.classList.add('product-down-animation');
    setTimeout(() => {
      product_img.classList.remove('product-down-animation');
    }, 500);
  });
});


function toggleContent() {
    var content = document.getElementById("content");
    var seeMoreLink = document.getElementById("seeMore");

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      seeMoreLink.innerHTML = "See More";
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      seeMoreLink.innerHTML = "See Less";
    }
  }