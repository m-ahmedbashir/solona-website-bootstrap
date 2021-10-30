// alert("I am linked");

'use strict';

const home = document.querySelector('.home');
const feature = document.querySelector('.feature');
const portfolio = document.querySelector('.portfolio');
const blog = document.querySelector('.blog');
const contact = document.querySelector('.contact');
const purchase = document.querySelector('.purchase');
const search = document.querySelector('.search');

const pricingContent = document.querySelector('.pricing-table');
const homef = function()
{
    home.classList.add('active-nav');
    feature.classList.remove('active-nav');
    portfolio.classList.remove('active-nav');
    blog.classList.remove('active-nav');
    contact.classList.remove('active-nav');
    purchase.classList.remove('active-nav');
    search.classList.remove('active-nav');
    pricingContent.style.display='block';
    pricingContent.innerHTML='Home';
   
}

const featuref = function()
{
    home.classList.remove('active-nav');
    feature.classList.add('active-nav');
    portfolio.classList.remove('active-nav');
    blog.classList.remove('active-nav');
    contact.classList.remove('active-nav');
    purchase.classList.remove('active-nav');
    search.classList.remove('active-nav');
    pricingContent.style.display='block';
   pricingContent.innerHTML='Pricing table';
}

const portfoliof = function()
{
    home.classList.remove('active-nav');
    feature.classList.remove('active-nav');
    portfolio.classList.add('active-nav');
    blog.classList.remove('active-nav');
    contact.classList.remove('active-nav');
    purchase.classList.remove('active-nav');
    search.classList.remove('active-nav');
    pricingContent.style.display='block';
   pricingContent.innerHTML='portfolio';
}
const blogf = function()
{
    home.classList.remove('active-nav');
    feature.classList.remove('active-nav');
    portfolio.classList.remove('active-nav');
    blog.classList.add('active-nav');
    contact.classList.remove('active-nav');
    purchase.classList.remove('active-nav');
    search.classList.remove('active-nav');
    pricingContent.style.display='block';
    pricingContent.innerHTML='blog';
}


const contactf = function()
{
    home.classList.remove('active-nav');
    feature.classList.remove('active-nav');
    portfolio.classList.remove('active-nav');
    blog.classList.remove('active-nav');
    contact.classList.add('active-nav');
    purchase.classList.remove('active-nav');
    search.classList.remove('active-nav');
    pricingContent.style.display='block';
    pricingContent.innerHTML='contact';
}

const purchasef = function()
{
    home.classList.remove('active-nav');
    feature.classList.remove('active-nav');
    portfolio.classList.remove('active-nav');
    blog.classList.remove('active-nav');
    contact.classList.remove('active-nav');
    purchase.classList.add('active-nav');
    search.classList.remove('active-nav');
    pricingContent.style.display='block';
    pricingContent.innerHTML='purchase';
}
const searchf = function()
{
    home.classList.remove('active-nav');
    feature.classList.remove('active-nav');
    portfolio.classList.remove('active-nav');
    blog.classList.remove('active-nav');
    contact.classList.remove('active-nav');
    purchase.classList.remove('active-nav');
    search.classList.add('active-nav');
    pricingContent.style.display='block';
    pricingContent.style.display = 'none';
}


home.addEventListener('click',homef);
feature.addEventListener('click',featuref);
portfolio.addEventListener('click',portfoliof);
blog.addEventListener('click',blogf);
contact.addEventListener('click',contactf);
purchase.addEventListener('click',purchasef);
search.addEventListener('click',searchf);

// cards title
const card1_title = document.querySelector('.card-1-title');
const card2_title = document.querySelector('.card-2-title');
const card3_title = document.querySelector('.card-3-title');
const card4_title = document.querySelector('.card-4-title');
const card5_title = document.querySelector('.card-5-title');
const card6_title = document.querySelector('.card-6-title');
const card7_title = document.querySelector('.card-7-title');
const card8_title = document.querySelector('.card-8-title');

// cards price

const card1_price = document.querySelector('.card-1-price');
const card2_price = document.querySelector('.card-2-price');
const card3_price = document.querySelector('.card-3-price');
const card4_price = document.querySelector('.card-4-price');

// cards sign up 
const card1_singup = document.querySelector('.card-1-btn');
const card2_singup = document.querySelector('.card-2-btn');
const card3_singup = document.querySelector('.card-3-btn');
const card4_singup = document.querySelector('.card-4-btn');
const card5_singup = document.querySelector('.card-5-btn');
const card6_singup = document.querySelector('.card-6-btn');
const card7_singup = document.querySelector('.card-7-btn');
const card8_singup = document.querySelector('.card-8-btn');

const card_1_mouseover = function()
{
   
  card1_title.classList.add('bg-warning');
  card1_title.classList.add('text-black');
card1_price.classList.add('bg-darkgray');
   
  card5_title.classList.add('bg-warning');
  card5_title.classList.add('text-black');

 card1_singup.classList.add('bg-warning');
 card1_singup.classList.add('text-black');

 card5_singup.classList.add('bg-warning');
  card5_singup.classList.add('text-black');
}

const card_2_mouseover = function()
{
   
  card2_title.classList.add('bg-warning');
  card2_title.classList.add('text-black');
card2_price.classList.add('bg-darkgray');
   
 card2_singup.classList.add('bg-warning');
 card2_singup.classList.add('text-black');
  card6_title.classList.add('bg-warning');
  card6_title.classList.add('text-black');
  
  card6_singup.classList.add('bg-warning');
  card6_singup.classList.add('text-black');
}

const card_3_mouseover = function()
{
   
  card3_title.classList.add('bg-warning');
  card3_title.classList.add('text-black');
card3_price.classList.add('bg-darkgray');
   
 card3_singup.classList.add('bg-warning');
 card3_singup.classList.add('text-black');
  card7_title.classList.add('bg-warning');
  card7_title.classList.add('text-black');
  
  card7_singup.classList.add('bg-warning');
  card7_singup.classList.add('text-black');
}
const card_4_mouseover = function()
{
   
  card4_title.classList.add('bg-warning');
  card4_title.classList.add('text-black');
card4_price.classList.add('bg-darkgray');
   
 card4_singup.classList.add('bg-warning');
 card4_singup.classList.add('text-black');
  card8_title.classList.add('bg-warning');
  card8_title.classList.add('text-black');
  
  card8_singup.classList.add('bg-warning');
  card8_singup.classList.add('text-black');
}

// card mouseout

const card_1_mouseout = function()
{
   
  card1_title.classList.remove('bg-warning');
  card1_title.classList.remove('text-black');
card1_price.classList.remove('bg-darkgray');
   
  card5_title.classList.remove('bg-warning');
  card5_title.classList.remove('text-black');

 card1_singup.classList.remove('bg-warning');
 card1_singup.classList.remove('text-black');

 card5_singup.classList.remove('bg-warning');
  card5_singup.classList.remove('text-black');
}

const card_2_mouseout = function()
{
   
  card2_title.classList.remove('bg-warning');
  card2_title.classList.remove('text-black');
card2_price.classList.remove('bg-darkgray');
   
 card2_singup.classList.remove('bg-warning');
 card2_singup.classList.remove('text-black');
  card6_title.classList.remove('bg-warning');
  card6_title.classList.remove('text-black');
  
  card6_singup.classList.remove('bg-warning');
  card6_singup.classList.remove('text-black');
}

const card_3_mouseout = function()
{
   
  card3_title.classList.remove('bg-warning');
  card3_title.classList.remove('text-black');
card3_price.classList.remove('bg-darkgray');
   
 card3_singup.classList.remove('bg-warning');
 card3_singup.classList.remove('text-black');
  card7_title.classList.remove('bg-warning');
  card7_title.classList.remove('text-black');
  
  card7_singup.classList.remove('bg-warning');
  card7_singup.classList.remove('text-black');
}
const card_4_mouseout = function()
{
   
  card4_title.classList.remove('bg-warning');
  card4_title.classList.remove('text-black');
card4_price.classList.remove('bg-darkgray');
   
 card4_singup.classList.remove('bg-warning');
 card4_singup.classList.remove('text-black');
  card8_title.classList.remove('bg-warning');
  card8_title.classList.remove('text-black');
  
  card8_singup.classList.remove('bg-warning');
  card8_singup.classList.remove('text-black');
}


document.querySelector('.card-1').addEventListener('mouseover',card_1_mouseover);
document.querySelector('.card-2').addEventListener('mouseover',card_2_mouseover);
document.querySelector('.card-3').addEventListener('mouseover',card_3_mouseover);
document.querySelector('.card-4').addEventListener('mouseover',card_4_mouseover);
document.querySelector('.card-1').addEventListener('mouseout',card_1_mouseout);
document.querySelector('.card-2').addEventListener('mouseout',card_2_mouseout);
document.querySelector('.card-3').addEventListener('mouseout',card_3_mouseout);
document.querySelector('.card-4').addEventListener('mouseout',card_4_mouseout);
