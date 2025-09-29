// ========== PRODUCTS ARRAY ==========
let products = [
  { id: 1, brand: "MSI", name: "Full Gaming PC", price: "Rs.560,000", img: ["img/Products/p1.jpg","img/Products/p1-2.jpg","img/Products/p1-3.jpg"], desc: "High-performance gaming PC with RTX 4070Ti, Intel i9 CPU, 32GB DDR5 RAM, and 1TB SSD.", specs:["CPU: Intel i9-13900K","GPU: NVIDIA RTX 4070 Ti","RAM: 32GB DDR5","Storage: 1TB NVMe SSD","Motherboard: MSI Z790","PSU: 850W Gold"] },
  { id: 2, brand: "Asus", name: "Full Gaming PC", price: "Rs.620,000", img: ["img/Products/p2.jpg","img/Products/p2-2.jpg"], desc: "Asus high-performance gaming PC with latest components for smooth 4K gameplay.", specs:["CPU: Intel i7-13700KF","GPU: NVIDIA RTX 4080","RAM: 32GB DDR5","Storage: 1TB SSD + 2TB HDD","Cooling: Liquid RGB Cooler"] },
  { id: 3, brand: "Asus", name: "G15 Gaming Laptop", price: "Rs.840,000", img: ["img/Products/p3.jpg","img/Products/p3-2.jpg"], desc: "Portable high-performance laptop for gaming and streaming.", specs:["CPU: AMD Ryzen 9 7945HX","GPU: RTX 4070 Laptop","RAM: 32GB DDR5","Storage: 1TB SSD","Display: 15.6\" 240Hz"] },
  { id: 4, brand: "MSI", name: "Vector-Ultra 9", price: "Rs.755,000", img: ["img/Products/p4.jpg","img/Products/p4-2.jpg"], desc: "Powerful desktop PC with top-notch gaming specs.", specs:["CPU: Intel i9-13900K","GPU: RTX 4080","RAM: 32GB DDR5","Storage: 2TB SSD","Motherboard: MSI Z790","PSU: 850W Gold"] },
  { id: 5, brand: "Asus ROG", name: "Astral GeForce RTX 5090 32GB GDDR7 OC Edition", price: "Rs.1,100,000", img: ["img/Products/p5.jpg","img/Products/p5-2.jpg"], desc: "Extreme gaming GPU for 4K and AI tasks with 32GB GDDR7 memory.", specs:["GPU: RTX 5090","VRAM: 32GB GDDR7","OC Edition","PCIe 5.0","Cooling: Triple Fan"] },
  { id: 6, brand: "Corsair", name: "K100 RGB Mechanical Keyboard", price: "Rs.55,000", img: ["img/Products/p6.jpg"], desc: "Premium RGB mechanical keyboard with programmable macros and optical switches.", specs:["Switches: Optical-Mechanical","RGB: Full customization","Macros: Programmable","Connectivity: USB"] },
  { id: 7, brand: "Logitech", name: "G502 HERO High-Performance Mouse", price: "Rs.18,000", img: ["img/Products/p7.jpg"], desc: "High-precision gaming mouse with customizable DPI and RGB lighting.", specs:["DPI: 100-16,000","Buttons: 11 programmable","RGB: 16.8M colors","Sensor: HERO 25K"] },
  { id: 8, brand: "Razer", name: "Kraken X USB Gaming Headset", price: "Rs.25,000", img: ["img/Products/p8.jpg"], desc: "Lightweight headset with 7.1 surround sound for immersive gaming.", specs:["Audio: 7.1 Surround","Weight: 250g","Mic: Bendable","Connectivity: USB"] },
  { id: 9, brand: "Elgato", name: "Stream Deck MK.2", price: "Rs.60,000", img: ["img/Products/n1.jpg"], desc: "Customizable control deck for streamers with LCD keys.", specs:["Keys: 15 LCD keys","Software: Elgato Stream Deck","Connectivity: USB 2.0","Use: Streaming, Editing"] },
  { id: 10, brand: "FIFINE", name: "RGB USB Gaming Microphone", price: "Rs.8,500", img: ["img/Products/n2.jpg"], desc: "Affordable USB mic with RGB lighting for gaming and streaming.", specs:["Connection: USB","RGB: Yes","Polar Pattern: Cardioid","Sample Rate: 48kHz"] },
  { id: 11, brand: "Logitech", name: "G502 HERO Mouse", price: "Rs.18,000", img: ["img/Products/p7.jpg"], desc: "High-precision gaming mouse with customizable DPI and RGB lighting.", specs:["DPI: 100-16,000","Buttons: 11 programmable","RGB: 16.8M colors","Sensor: HERO 25K"] },
  { id: 12, brand: "HyperX", name: "Fury S Pro XL Mousepad", price: "Rs.8,500", img: ["img/Products/n3.jpg"], desc: "Large gaming mousepad with smooth surface and anti-fray edges.", specs:["Size: XL","Surface: Textile","Anti-Fray: Yes","Thickness: 5mm"] },
  { id: 13, brand: "SteelSeries", name: "Apex Pro Mechanical Keyboard", price: "Rs.70,000", img: ["img/Products/n5.jpg"], desc: "Advanced mechanical keyboard with adjustable actuation switches and RGB.", specs:["Switch: OmniPoint","RGB: Full","Actuation: Adjustable","Connectivity: USB"] },
  { id: 14, brand: "Logitech", name: "G Pro X Superlight Mouse", price: "Rs.35,000", img: ["img/Products/n6.jpg"], desc: "Ultra-lightweight wireless gaming mouse for competitive esports.", specs:["Weight: 63g","Sensor: HERO 25K","Wireless: LIGHTSPEED","Battery: 70h"] },
  { id: 15, brand: "Corsair", name: "Virtuoso RGB Wireless XT Headset", price: "Rs.38,000", img: ["img/Products/n7.jpg"], desc: "High-end wireless headset with immersive sound and RGB lighting.", specs:["Audio: 7.1 Surround","Wireless: 2.4GHz & BT","RGB: Yes","Battery: 20h"] },
  { id: 16, brand: "Xbox", name: "Series X Wireless Controller", price: "Rs.22,000", img: ["img/Products/n8.jpg"], desc: "Official Xbox controller with ergonomic design and wireless connectivity.", specs:["Connectivity: Wireless","Battery: AA or rechargeable","Buttons: Standard Xbox layout","Compatibility: Xbox & PC"] }
];

// ========== SHOP PAGE ==========
function displayProducts() {
  const shop = document.getElementById("shop-products");
  if (!shop) return;
  shop.innerHTML = "";
  products.forEach(product => {
    let div = document.createElement("div");
    div.classList.add("pro");
    div.innerHTML = `
      <img src="${product.img[0]}" alt="${product.name}" />
      <div class="des">
        <span>${product.brand}</span>
        <h5>${product.name}</h5>
        <h4>${product.price}</h4>
      </div>
    `;
    div.addEventListener("click", () => viewProduct(product.id));
    shop.appendChild(div);
  });
}

// ========== SINGLE PRODUCT ==========
function viewProduct(id){ localStorage.setItem("productId", id); window.location.href = "sproduct.html"; }

function loadProductPage() {
  const id = localStorage.getItem("productId");
  if (!id) return;
  const p = products.find(x => x.id == id);
  if (!p) return;

  document.getElementById("MainImg").src = p.img[0];
  document.getElementById("prodName").innerText = p.name;
  document.getElementById("prodBrand").innerText = p.brand;
  document.getElementById("prodPrice").innerText = p.price;
  document.getElementById("prodDesc").innerText = p.desc;
  document.getElementById("prodDescTab").innerText = p.desc;
  document.getElementById("prodBreadcrumb").innerText = p.name;

  const specsList = document.getElementById("prodSpecs");
  specsList.innerHTML = "";
  p.specs.forEach(s => { const li = document.createElement("li"); li.innerText = s; specsList.appendChild(li); });

  const thumbDiv = document.getElementById("thumbnails");
  thumbDiv.innerHTML = "";
  p.img.forEach(src => {
    const img = document.createElement("img");
    img.src = src; img.classList.add("thumb");
    img.addEventListener("click", () => { document.getElementById("MainImg").src = src; });
    thumbDiv.appendChild(img);
  });

  const relatedDiv = document.getElementById("relatedProducts");
  if (relatedDiv) {
    relatedDiv.innerHTML = "";
    products.filter(r => r.brand === p.brand && r.id !== p.id).forEach(r => {
      const card = document.createElement("div");
      card.classList.add("pro");
      card.innerHTML = `
        <img src="${r.img[0]}" alt="${r.name}">
        <div class="des"><span>${r.brand}</span><h5>${r.name}</h5><h4>${r.price}</h4></div>
      `;
      card.addEventListener("click", () => viewProduct(r.id));
      relatedDiv.appendChild(card);
    });
  }
}

// ========== CART ==========
function addToCart(productId, quantity=1){
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const ex = cart.find(i => i.id == productId);
  if (ex) ex.qty += quantity; else cart.push({ id: productId, qty: quantity });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount(){
  const el = document.querySelector(".cart-count");
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const total = cart.reduce((s,i)=>s+(i.qty||1),0);
  if (el) el.textContent = total;
}

function loadCartPage(){
  const wrap = document.getElementById("cartItems");
  if (!wrap) return;
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  wrap.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    const p = products.find(x => x.id == item.id);
    if (!p) return;
    const priceNum = parseInt(p.price.replace(/\D/g,'')) || 0;
    const qty = item.qty || 1;
    const sub = priceNum * qty;
    total += sub;

    const row = document.createElement("div");
    row.className = "cart-item";
    row.innerHTML = `
      <img src="${p.img[0]}" alt="${p.name}" width="100">
      <div class="item-details">
        <h4>${p.name}</h4>
        <p>Rs.${priceNum.toLocaleString()}</p>
        <input type="number" min="1" value="${qty}" class="item-qty">
        <button class="remove-btn"><i class="fas fa-trash-alt"></i> Remove Item</button>
      </div>
      <p class="item-total">Rs.${sub.toLocaleString()}</p>
    `;
    row.querySelector(".item-qty").addEventListener("change", e=>{
      item.qty = Math.max(1, parseInt(e.target.value)||1);
      localStorage.setItem("cart", JSON.stringify(cart));
      loadCartPage();
    });
    row.querySelector(".remove-btn").addEventListener("click", ()=>{
      const idx = cart.findIndex(c=>c.id==item.id);
      if (idx>-1) cart.splice(idx,1);
      localStorage.setItem("cart", JSON.stringify(cart));
      loadCartPage();
    });
    wrap.appendChild(row);
  });

  const totalEl = document.getElementById("cartTotal");
  if (totalEl) totalEl.textContent = total.toLocaleString();
  updateCartCount();
}

// ========== PAY PAGE ==========
function priceToNumber(s){ return parseInt((s||"").replace(/\D/g,""),10)||0; }
function populatePayPageCart(){
  const itemsEl = document.getElementById("payCartItems");
  const totalEl = document.getElementById("payCartTotal");
  if (!itemsEl || !totalEl) return;

  const cart = JSON.parse(localStorage.getItem("checkoutCart")) || [];
  itemsEl.innerHTML = "";
  let total = 0;

  cart.forEach(it=>{
    const p = products.find(x=>x.id==it.id);
    const name = p?.name || `Item #${it.id}`;
    const unit = p ? priceToNumber(p.price) : priceToNumber(it.price);
    const qty = it.qty || 1;
    const sub = unit * qty;
    total += sub;

    const row = document.createElement("div");
    row.className = "pay-item";
    row.innerHTML = `<span>${name} x ${qty}</span><span>Rs.${sub.toLocaleString()}</span>`;
    itemsEl.appendChild(row);
  });

  totalEl.textContent = `Rs.${total.toLocaleString()}`;
}

// Validation + formatting
function setErr(el,msgEl,msg){ el.setAttribute("aria-invalid","true"); if(msgEl) msgEl.textContent=msg; }
function clrErr(el,msgEl){ el.removeAttribute("aria-invalid"); if(msgEl) msgEl.textContent=""; }
function validatePayForm(){
  const name=document.getElementById("cc-name");
  const number=document.getElementById("cc-number");
  const exp=document.getElementById("cc-exp");
  const cvc=document.getElementById("cc-cvc");
  const eName=document.getElementById("err-name");
  const eNum=document.getElementById("err-number");
  const eExp=document.getElementById("err-exp");
  const eCvc=document.getElementById("err-cvc");
  let ok=true;

  if(!name?.value.trim()){ setErr(name,eName,"Enter cardholder name"); ok=false; } else clrErr(name,eName);

  const digits=(number?.value||"").replace(/\D/g,"");
  if(!/^\d{16}$/.test(digits)){ setErr(number,eNum,"16-digit card number required"); ok=false; } else clrErr(number,eNum);

  const m=exp?.value.match(/^(\d{2})\/(\d{2})$/);
  if(!m){ setErr(exp,eExp,"Use MM/YY"); ok=false; }
  else{
    const mm=+m[1], yy=+m[2];
    const now=new Date(), curYY=now.getFullYear()%100, curMM=now.getMonth()+1;
    if(mm<1||mm>12 || yy<curYY || (yy===curYY && mm<curMM)){ setErr(exp,eExp,"Expired date"); ok=false; } else clrErr(exp,eExp);
  }

  if(!/^\d{3,4}$/.test(cvc?.value||"")){ setErr(cvc,eCvc,"3–4 digit CVC"); ok=false; } else clrErr(cvc,eCvc);

  return ok;
}
function formatCardNumber(val){
  const digits = val.replace(/\D/g,"").slice(0,16);
  return digits.replace(/(\d{4})(?=\d)/g,"$1 ").trim();
}

// ========== PAGE BOOT (single DOMContentLoaded only) ==========
document.addEventListener("DOMContentLoaded", ()=>{
  // General
  if (document.getElementById("shop-products")) displayProducts();
  if (document.getElementById("sproduct")) loadProductPage();
  if (document.getElementById("cartItems")) loadCartPage();
  updateCartCount();

  // Attach Add-to-Cart on single product page
  const cartBtn = document.querySelector(".cart-btn");
  if (cartBtn){
    cartBtn.addEventListener("click", ()=>{
      const prodId = Number(localStorage.getItem("productId"));
      const qty = Math.max(1, parseInt(document.getElementById("quantity")?.value)||1);
      if (!prodId) { alert("No product selected."); return; }
      addToCart(prodId, qty);
    });
  }

  // Checkout step (Cart -> details page)
  const checkoutBtn = document.querySelector(".checkout-btn");
  if (checkoutBtn){
    checkoutBtn.addEventListener("click", ()=>{
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      localStorage.setItem("checkoutCart", JSON.stringify(cart));
      window.location.href = "GamerX.html"; // your details page
    });
  }

  // Details form -> Pay page
  const submitBtn = document.getElementById("submitOrderBtn");
  if (submitBtn){
    submitBtn.addEventListener("click", ()=>{
      const formData = {
        fullname: document.querySelector("input[name='fullname']")?.value || "",
        email: document.querySelector("input[name='email']")?.value || "",
        location: document.querySelector("input[name='location']")?.value || "",
        phone: document.querySelector("input[name='phone']")?.value || "",
        province: document.querySelector("input[name='province']")?.value || "",
        distric: document.querySelector("input[name='distric']")?.value || "",
        city: document.querySelector("input[name='city']")?.value || ""
      };
      localStorage.setItem("checkoutForm", JSON.stringify(formData));
      window.location.href = "pay.html";
    });
  }

  // Pay page init
  populatePayPageCart();

  const number = document.getElementById("cc-number");
  if (number){
    number.addEventListener("input", (e)=>{
      const before = e.target.value;
      e.target.value = formatCardNumber(before);
      e.target.selectionStart = e.target.selectionEnd = e.target.value.length;
    });
  }

  const payBtn = document.getElementById("payNow");
  if (payBtn){
    payBtn.addEventListener("click", async ()=>{
      if (!validatePayForm()) return;

      // Build payload for your PHP (optional; keep if you have the endpoint)
      const checkoutForm = JSON.parse(localStorage.getItem("checkoutForm") || "{}");
      const checkoutCart = JSON.parse(localStorage.getItem("checkoutCart") || "[]");

      const productsMap = Object.fromEntries(products.map(p => [p.id, p]));
      let totalCents = 0;
      const cartPayload = checkoutCart.map(it=>{
        const p = productsMap[it.id];
        const unit = p ? parseInt(p.price.replace(/\D/g,"")) : 0;
        const qty = it.qty || 1;
        const sub = unit * qty;
        totalCents += sub;
        return { id: it.id, name: p?.name || `Item #${it.id}`, unit_price_cents: unit, qty };
      });

      const digits = (document.getElementById("cc-number")?.value || "").replace(/\D/g,"");
      const last4 = digits.slice(-4);

      try{
        const res = await fetch("api/create_order.php", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            customer: checkoutForm,
            cart: cartPayload,
            total_cents: totalCents,
            card_brand: "card",
            card_last4: last4
          })
        });
        const json = await res.json();
        if (!res.ok || !json.ok){ alert("Server error creating order."); return; }

        localStorage.removeItem("cart");
        localStorage.removeItem("checkoutCart");
        window.location.href = `thankyou.php?order=${json.order_id}`;
      } catch (e){
        // Fallback (no server) – show success & clear cart
        alert("Payment successful! (Local simulation)");
        localStorage.removeItem("cart");
        localStorage.removeItem("checkoutCart");
        window.location.href = "thankyou.html";
      }
    });
  }
});

// ...all your function definitions above...

document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("shop-products")) displayProducts();
  if (document.getElementById("sproduct"))       loadProductPage();
  if (document.getElementById("cartItems"))      loadCartPage();
  updateCartCount();

  const cartBtn = document.querySelector(".cart-btn");
  if (cartBtn){
    cartBtn.addEventListener("click", ()=>{
      const prodId = Number(localStorage.getItem("productId"));
      const qty = Math.max(1, parseInt(document.getElementById("quantity")?.value)||1);
      if (!prodId) { alert("No product selected."); return; }
      addToCart(prodId, qty);
    });
  }

  const checkoutBtn = document.querySelector(".checkout-btn");
  if (checkoutBtn){
    checkoutBtn.addEventListener("click", ()=>{
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      localStorage.setItem("checkoutCart", JSON.stringify(cart));
      window.location.href = "GamerX.html";
    });
  }

  const submitBtn = document.getElementById("submitOrderBtn");
  if (submitBtn){
    submitBtn.addEventListener("click", ()=>{
      const formData = {
        fullname: document.querySelector("input[name='fullname']")?.value || "",
        email:    document.querySelector("input[name='email']")?.value || "",
        location: document.querySelector("input[name='location']")?.value || "",
        phone:    document.querySelector("input[name='phone']")?.value || "",
        province: document.querySelector("input[name='province']")?.value || "",
        distric:  document.querySelector("input[name='distric']")?.value || "",
        city:     document.querySelector("input[name='city']")?.value || ""
      };
      localStorage.setItem("checkoutForm", JSON.stringify(formData));
      window.location.href = "pay.html";
    });
  }

  populatePayPageCart();

  const number = document.getElementById("cc-number");
  if (number){
    number.addEventListener("input", (e)=>{
      const before = e.target.value;
      e.target.value = formatCardNumber(before);
      e.target.selectionStart = e.target.selectionEnd = e.target.value.length;
    });
  }

  const payBtn = document.getElementById("payNow");
  if (payBtn){
    payBtn.addEventListener("click", async ()=>{
      if (!validatePayForm()) return;
      // ... your fetch/create_order.php logic (unchanged) ...
    });
  }
});

// ========= ORDER REVIEW (GamerX.html) =========
function initOrderReviewPage(){
  // fallbacks: if "checkoutCart" isn't set yet, try "cart"
  const checkoutCart = JSON.parse(localStorage.getItem("checkoutCart") || "[]");
  const cart = checkoutCart.length ? checkoutCart : (JSON.parse(localStorage.getItem("cart") || "[]"));
  const form = JSON.parse(localStorage.getItem("checkoutForm") || "{}");

  // targets
  const itemsWrap     = document.getElementById("orderItems");
  const shipNameEl    = document.getElementById("shipName");
  const shipPhoneEl   = document.getElementById("shipPhone");
  const shipAddr1El   = document.getElementById("shipAddress1");
  const shipAddr2El   = document.getElementById("shipAddress2");
  const subEl         = document.getElementById("orderSubtotal");
  const shipFeeEl     = document.getElementById("orderShipping");
  const totalEl       = document.getElementById("orderTotal");
  const shipMethodEl  = document.getElementById("shipMethodName");
  const shipFeeLblEl  = document.getElementById("shipFee");
  const shipEtaEl     = document.getElementById("shipEta");

  if (!itemsWrap) return;

  // --- Address block ---
  const fullName  = form.fullname || "—";
  const phone     = form.phone    || "—";
  const line1     = [form.location, form.city].filter(Boolean).join(", ") || "—";
  const line2     = [form.distric, form.province].filter(Boolean).join(", ") || "—";

  shipNameEl && (shipNameEl.textContent = fullName);
  shipPhoneEl && (shipPhoneEl.textContent = phone);
  shipAddr1El && (shipAddr1El.textContent = line1);
  shipAddr2El && (shipAddr2El.textContent = line2);

  // --- Items + totals ---
  itemsWrap.innerHTML = "";
  let subtotal = 0;

  // quick index for product lookup
  const prodMap = Object.fromEntries(products.map(p => [String(p.id), p]));

  cart.forEach(it => {
    const p   = prodMap[String(it.id)];
    const qty = Math.max(1, it.qty || 1);

    // handle unknown items gracefully
    const name   = p?.name || `Item #${it.id}`;
    const img    = p?.img?.[0] || "img/placeholder.png";
    const unitRs = p ? priceToNumber(p.price) : priceToNumber(it.price); // allows fallback if price was stored on item
    const line   = unitRs * qty;

    subtotal += line;

    const row = document.createElement("div");
    row.className = "item";
    row.innerHTML = `
      <img class="thumb" src="${img}" alt="${name}">
      <div class="meta">
        <div class="name" title="${name}">${name}</div>
        <div class="row"><span>Qty: <strong>${qty}</strong></span></div>
      </div>
      <div class="price">Rs.${line.toLocaleString()}</div>
    `;
    itemsWrap.appendChild(row);
  });

  // --- Shipping calc (adjust as you like) ---
  // Example: Free shipping over Rs. 300,000 else Rs. 2,000
  const shippingFee = subtotal > 300000 ? 0 : (subtotal > 0 ? 2000 : 0);

  // --- Delivery ETA (simple example: 3–5 business days) ---
  shipMethodEl && (shipMethodEl.textContent = "Standard Shipping");
  shipFeeLblEl && (shipFeeLblEl.textContent = `Rs.${shippingFee.toLocaleString()}`);
  shipEtaEl && (shipEtaEl.textContent = "Delivers in 3–5 business days");

  // --- Summary ---
  const total = subtotal + shippingFee;
  subEl   && (subEl.textContent   = `Rs.${subtotal.toLocaleString()}`);
  shipFeeEl && (shipFeeEl.textContent = `Rs.${shippingFee.toLocaleString()}`);
  totalEl && (totalEl.textContent = `Rs.${total.toLocaleString()}`);

  // cart badge
  updateCartCount();

  // "Place Order" -> pay.html (you can rename the button text if you want)
  const goBtn = document.getElementById("goToPaymentBtn");
  if (goBtn){
    goBtn.addEventListener("click", () => {
      // Ensure checkoutCart exists for pay page
      if (!checkoutCart.length) {
        localStorage.setItem("checkoutCart", JSON.stringify(cart || []));
      }
      window.location.href = "pay.html";
    });
  }

  // optional page styling
  document.body.classList.add("order-bg");
}

