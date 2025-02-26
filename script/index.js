const bnrSwiper = new Swiper('.bnr_swiper', {
    autoplay:{delay:0,},
    loop:true,
    speed: 5000,
    slidesPerView:4,
    spaceBetween:30,
})
const snsSwiper = new Swiper('.sns_swiper', {
    autoplay:{delay:0,},
    loop:true,
    speed: 7000,
    slidesPerView:4,
    spaceBetween:30,
})
/* other design 팝업 */
const img_popup_bg = document.querySelector('.img_popup_bg')
const bnrImg = document.querySelectorAll('.bnr_swiper img')
const snsImg = document.querySelectorAll('.sns_swiper img')
console.log(bnrImg)

img_popup_bg.style.display = 'none';
for(let i of bnrImg){
    i.addEventListener('click',()=>{
        img_popup_bg.style.display = 'block';
        console.log(i.src)
        img_popup_bg.children[0].children[0].src = i.src;
        img_popup_bg.children[0].style.width = i.src;
    })
}
for(let i of snsImg){
    i.addEventListener('click',()=>{
        img_popup_bg.style.display = 'block';
        console.log(i.src)
        img_popup_bg.children[0].children[0].src = i.src;
        img_popup_bg.children[0].style.width = i.src;
    })
}
img_popup_bg.addEventListener('click',()=>{
    img_popup_bg.style.display = 'none'
})