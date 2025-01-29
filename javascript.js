const imgs = document.querySelectorAll('.hero-section ul img');
const prev_btn = document.querySelector('.prev-arrow');
const next_btn = document.querySelector('.next-arrow');

let img_no = 0 ;

function changeSlider(){
    for(let i = 0 ; i < imgs.length ; i++){
        imgs[i].style.display = 'none';
    }
    imgs[img_no].style.display = 'block';
}
changeSlider();

prev_btn.addEventListener('click',(e)=>{
        if (img_no > 0) {
            img_no--;
        } else {
            img_no = imgs.length - 1 ;
        }
        changeSlider();
})
next_btn.addEventListener('click',(e)=>{
    if (img_no < imgs.length -1) {
        img_no++;
    } else {
        img_no = 0 ;
    }
    changeSlider();
})


const product_slider=document.querySelectorAll('.items');
 
for (const items of product_slider) {
    items.addEventListener('wheel',(evt)=>{
        evt.preventDefault();
        items.scrollLeft += evt.deltaY;
    })
}

//  Back To Top

const back_to_top = document.querySelector(".back-to-top");

back_to_top.addEventListener('click',(ent)=>{
    window.scrollTo(0, 0);
});