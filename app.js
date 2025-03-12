let iconSearsh = document.querySelector('.fa-magnifying-glass');
let iconCart = document.querySelector('.fa-cart-shopping');
let bar = document.querySelector('.fa-bars');
let cart = document.querySelector('.container-cart');
let searsh = document.querySelector('.searsh-form');
let mainhead = document.querySelector('.main-head');
let  remove= document.querySelector(".main-head .remove-container");
let  remove2= document.querySelector(".container-cart .remove-container");

remove.onclick = ()=>{
    cart.classList.remove('open')
    mainhead.classList.remove('open')
}
remove2.onclick = ()=>{
    cart.classList.remove('open')
    mainhead.classList.remove('open')
}
bar.onclick = ()=>{
    mainhead.classList.toggle('open')
    cart.classList.remove('open')
    searsh.classList.remove('open')
}
iconSearsh.onclick = ()=>{
    searsh.classList.toggle('open')
    cart.classList.remove('open')
    mainhead.classList.remove('open')
}
iconCart.onclick = ()=>{
    cart.classList.toggle('open')
    searsh.classList.remove('open')
    mainhead.classList.remove('open')
};

let buttons = document.querySelectorAll(".btn-box-menu button");

// تحديد الـ container الخاص بالسلة
let cartContainer = document.querySelector(".container-cart");
let placeholderImg = document.querySelector(".img-cart");


// دالة التحقق من السلة
function checkcartContainer() {
    if (placeholderImg) {
        let cartItems = cartContainer.querySelectorAll(".box-cart"); // جلب جميع العناصر المضافة فقط
        placeholderImg.style.display = cartItems.length > 0 ? "none" : "block";
    }
}


// إضافة حدث عند الضغط على أي زر
buttons.forEach(button => {
    button.addEventListener("click", function () {
        // جلب معلومات المنتج القريب من الزر المضغوط عليه
        let box = button.closest(".box-menu"); // البحث عن أقرب div يحتوي على المنتج
        let imgSrc = box.querySelector(".img-box-menu img").src;
        let productName = box.querySelector(".des-box-menu h2").textContent;
        let productPrice = box.querySelector(".des-box-menu h3").textContent.trim();
        
        // إنشاء عنصر جديد للمنتج داخل السلة
        let cartItem = document.createElement("div");
        cartItem.classList.add("box-cart");
        
        cartItem.innerHTML = `
                <div class="content">
                    <img src="${imgSrc}">
                    <div class="description">
                        <h2>${productName}</h2>
                        <p>${productPrice}</p>
                    </div>
                </div>
                <div>
                    <i class="fa-solid fa-xmark remove-item"></i>
                </div>
            `;

        // إضافة العنصر الجديد داخل السلة
        cartContainer.prepend(cartItem); // إضافة المنتج في أعلى القائمة
        checkcartContainer(); // تحديث حالة الصورة

        // إضافة حدث لحذف العنصر عند الضغط على زر الإزالة
        cartItem.querySelector(".remove-item").addEventListener("click", function () {
            cartItem.remove();
            checkcartContainer(); // تحديث حالة الصورة بعد الحذف
        });
    });
});


document.getElementById("search").addEventListener("keyup", function () {
    let input = this.value.toLowerCase();
    let items = document.querySelectorAll(".box-menu");

    items.forEach(item => {
        let title = item.querySelector("h2").textContent.toLowerCase();
        if (title.includes(input)) {
            item.style.display = "flex";
        } else {
            item.style.display = "none";
        }
    });
});
