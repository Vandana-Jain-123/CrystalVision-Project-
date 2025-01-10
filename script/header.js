const header=()=>{
 
let  logoPart=`
<div id="logo">
<a href="index.html">
<img src="https://t4.ftcdn.net/jpg/01/32/02/45/360_F_132024597_csnDYBExJrtBUbCfbmGU5Fl413Vt3JpW.jpg" alt="logo">
<h3>CrystalVision</h3>
</a>
</div>

<div id="search" >
<input id="searchProduct" type="text" placeholder="What are you looking for?.."><i id="searchIcon" class="fa-regular fa-heart"></i>
<a href="signup.html"><button>SignUp</button></a>
<a href="login.html"><button>Login</button></a>
<a href="wishlist.html"><i class="fa-regular fa-heart"></i></a>
<a href="addToCart.html"><i class="fa-solid fa-cart-shopping"></i></a>
</div>


`    
  
let navbar=`
            <a href="sunGlasses.html">SunGlasses </a>
            <a href="contactLenses.html">Contact Lenses</a>
            <a href="eyeGlasses.html">EyeGlasses</a>
            <a href="screenGlasses.html">Screen Glasses</a>
            <a href="kidsGlasses.html">Kids Glasses</a>
           
           
`
document.getElementById("header").innerHTML = logoPart
document.getElementById("nav").innerHTML=navbar

}
header()