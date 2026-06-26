/* ==========================================================================
   QUEEN OF FABULOUSNESS — Cart logic
   Client-side cart stored in localStorage. Holds both shop products and
   course enrollments in one unified cart — depends on PRODUCTS / getProductById
   (products.js) and COURSES / getCourseById (courses.js), both of which must
   be loaded first.

   NOTE: This is a front-end demo cart. "Place order" on checkout.html simulates
   a confirmation — it does not process real payments. Wire this up to a real
   South African payment gateway (PayFast, Yoco, SnapScan, etc.) before taking
   real orders or enrollments.
   ========================================================================== */

const CART_KEY = "qof_cart_v1";
const FREE_SHIPPING_THRESHOLD = 750;
const SHIPPING_FLAT_RATE = 65;

function getCart() {
  try {
    const raw = localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadges();
}

function addToCart(id, qty = 1) {
  const cart = getCart();
  const existing = cart.find((line) => line.id === Number(id));
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id: Number(id), qty });
  }
  saveCart(cart);
}

function updateCartQty(id, qty) {
  let cart = getCart();
  qty = Math.max(0, Number(qty) || 0);
  if (qty === 0) {
    cart = cart.filter((line) => line.id !== Number(id));
  } else {
    const line = cart.find((line) => line.id === Number(id));
    if (line) line.qty = qty;
  }
  saveCart(cart);
}

function removeFromCart(id) {
  const cart = getCart().filter((line) => line.id !== Number(id));
  saveCart(cart);
}

function clearCart() {
  saveCart([]);
}

/* Looks an id up across both catalogs — products (1–20-ish) and courses
   (1001+) — so the cart, cart page, and checkout can render either kind of
   line item through the same code path. Tags each result with `kind` so
   callers can branch on it if they need to (e.g. "Enrollment" vs "Qty"). */
function getCatalogItemById(id) {
  const product = getProductById(id);
  if (product) return { ...product, kind: "product" };
  const course = typeof getCourseById === "function" ? getCourseById(id) : null;
  if (course) return { ...course, kind: "course" };
  return null;
}

function cartLineItems() {
  return getCart()
    .map((line) => {
      const item = getCatalogItemById(line.id);
      return item ? { ...item, qty: line.qty } : null;
    })
    .filter(Boolean);
}

function cartCount() {
  return getCart().reduce((sum, line) => sum + line.qty, 0);
}

function cartSubtotal() {
  return cartLineItems().reduce((sum, item) => sum + item.price * item.qty, 0);
}

/* Course enrollments ship nothing — only physical shop products count
   toward the shipping calculation and the free-shipping threshold. */
function cartShipping() {
  const items = cartLineItems();
  const physicalSubtotal = items
    .filter((item) => item.kind !== "course")
    .reduce((sum, item) => sum + item.price * item.qty, 0);
  if (physicalSubtotal === 0) return 0;
  return physicalSubtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_FLAT_RATE;
}

function cartTotal() {
  return cartSubtotal() + cartShipping();
}

/* Updates every cart-count badge present on the current page (header icon, etc.) */
function updateCartBadges() {
  const count = cartCount();
  document.querySelectorAll(".cart-count").forEach((el) => {
    el.textContent = count;
    el.setAttribute("data-count", String(count));
  });
}

document.addEventListener("DOMContentLoaded", updateCartBadges);
