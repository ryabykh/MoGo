const tabBtn = document.querySelectorAll('.service__tab-button');
const tabItems = document.querySelectorAll('.service__tab-text');
const linkUp = document.querySelector('.up');

tabBtn.forEach(clickTab);

function clickTab(item){
  let currentBtn = item
  let tabId = currentBtn.getAttribute('data-tab');
  let currentTab = document.querySelector(tabId);
  currentBtn.addEventListener('click', function (){

    if (! currentBtn.classList.contains('service__tab-button_active')){

    tabBtn.forEach(function(item){
      item.classList.remove('service__tab-button_active')
    });

    tabItems.forEach(function(item){
      item.classList.remove('service__tab-text_active')
    });

    currentBtn.classList.add('service__tab-button_active');

    currentTab.classList.add('service__tab-text_active');
    }
  });
}

window.addEventListener('scroll', function(){
  let scrollPos = window.scrollY;
  if(scrollPos>500){
    linkUp.classList.add('up_active')
  }
  else{
    linkUp.classList.remove('up_active')
  }
})



