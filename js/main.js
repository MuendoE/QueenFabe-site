/* ==========================================================================
   QUEEN OF FABULOUSNESS — Shared front-end behavior
   Loaded on every page after icons.js, products.js, courses.js, and cart.js.
   Each init function checks for its own root element first, so this single
   file can safely run on every page without errors.
   ========================================================================== */

/* ---- Product card template ------------------------------------------- */
function productCardHTML(p) {
  const badge = p.badge
    ? `<span class="product-badge${p.badge === "Sale" ? " sale" : ""}">${p.badge}</span>`
    : "";
  const priceHTML = p.oldPrice
    ? `<span class="price">${formatPrice(p.price)}</span><span class="price old">${formatPrice(p.oldPrice)}</span>`
    : `<span class="price">${formatPrice(p.price)}</span>`;
  return `
    <div class="product-card">
      <a href="product.html?slug=${p.slug}" class="product-media">
        ${badge}
        <span class="icon-feature">${featureIcon(p.icon)}</span>
        <span class="quick-add">
          <button class="btn btn-primary btn-block btn-sm" type="button" data-quick-add="${p.id}">Quick Add</button>
        </span>
      </a>
      <div class="product-info">
        <span class="cat-label">${p.category}</span>
        <h3><a href="product.html?slug=${p.slug}">${p.name}</a></h3>
        <div class="price-row">${priceHTML}</div>
      </div>
    </div>`;
}

/* ---- Course card template ---------------------------------------------- */
function courseCardHTML(c) {
  const badge = c.badge ? `<span class="product-badge">${c.badge}</span>` : "";
  const priceHTML = `<span class="price">${formatPrice(c.price)}</span>`;
  return `
    <div class="product-card">
      <a href="course.html?slug=${c.slug}" class="product-media">
        ${badge}
        <span class="icon-feature">${featureIcon(c.icon)}</span>
        <span class="quick-add">
          <button class="btn btn-primary btn-block btn-sm" type="button" data-quick-add="${c.id}">Enroll Now</button>
        </span>
      </a>
      <div class="product-info">
        <span class="cat-label">${c.category} · ${c.level}</span>
        <h3><a href="course.html?slug=${c.slug}">${c.name}</a></h3>
        <p class="course-meta">${c.duration} &middot; Next intake ${c.nextIntake}</p>
        <div class="price-row">${priceHTML}</div>
      </div>
    </div>`;
}

function bindQuickAddButtons(scope) {
  scope.querySelectorAll("[data-quick-add]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      addToCart(btn.getAttribute("data-quick-add"), 1);
      const original = btn.textContent;
      btn.textContent = "Added ✓";
      setTimeout(() => (btn.textContent = original), 1400);
    });
  });
}

/* ---- Header: mobile nav, search, active link -------------------------- */
function initNavToggle() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", () => nav.classList.toggle("mobile-open"));
}

function initSearchToggle() {
  const btn = document.getElementById("search-toggle");
  const box = document.getElementById("search-box");
  if (!btn || !box) return;
  btn.addEventListener("click", () => {
    box.classList.toggle("open");
    if (box.classList.contains("open")) {
      const input = box.querySelector("input");
      if (input) input.focus();
    }
  });
  const form = document.getElementById("search-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const q = form.querySelector("input").value.trim();
      window.location.href = "shop.html" + (q ? "?q=" + encodeURIComponent(q) : "");
    });
  }
}

function initActiveNav() {
  const path = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll(".main-nav a[href]").forEach((a) => {
    const href = a.getAttribute("href").toLowerCase();
    if (href === path) a.classList.add("active");
  });
}

/* ---- Newsletter + contact forms (demo only, no backend) --------------- */
function initNewsletterForms() {
  document.querySelectorAll(".newsletter-form").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const msg = form.parentElement.querySelector(".newsletter-msg");
      if (msg) msg.classList.add("show");
      form.reset();
    });
  });
}

function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const msg = document.getElementById("contact-msg");
    if (msg) msg.classList.add("show");
    form.reset();
  });
}

/* ---- Home page: bestsellers + featured courses grids -------------------- */
function initHomePage() {
  const grid = document.getElementById("featured-grid");
  if (grid) {
    const featured = PRODUCTS.filter((p) => p.badge === "Bestseller").slice(0, 4);
    grid.innerHTML = featured.map(productCardHTML).join("");
    bindQuickAddButtons(grid);
  }

  const courseGrid = document.getElementById("featured-courses-grid");
  if (courseGrid && typeof COURSES !== "undefined") {
    const featuredCourses = COURSES.filter((c) => c.badge === "Most Popular" || c.badge === "Bestseller").slice(0, 4);
    courseGrid.innerHTML = featuredCourses.map(courseCardHTML).join("");
    bindQuickAddButtons(courseGrid);
  }
}

/* ---- Shop page: filter, search, sort ----------------------------------- */
function initShopPage() {
  const grid = document.getElementById("shop-grid");
  if (!grid) return;

  const pills = document.querySelectorAll(".filter-pill");
  const sortSelect = document.getElementById("sort-select");
  const resultCount = document.getElementById("result-count");
  const params = new URLSearchParams(window.location.search);

  let activeCategory = params.get("category") || "All";
  const searchTerm = (params.get("q") || "").toLowerCase();

  const searchNotice = document.getElementById("search-notice");
  if (searchNotice && searchTerm) {
    searchNotice.textContent = `Showing results for “${params.get("q")}”`;
    searchNotice.style.display = "block";
  }

  function render() {
    let items = PRODUCTS.slice();

    if (searchTerm) {
      items = items.filter(
        (p) =>
          p.name.toLowerCase().includes(searchTerm) ||
          p.category.toLowerCase().includes(searchTerm) ||
          p.shortDesc.toLowerCase().includes(searchTerm)
      );
    }
    if (activeCategory !== "All") {
      items = items.filter((p) => p.category === activeCategory);
    }

    const sortVal = sortSelect ? sortSelect.value : "featured";
    if (sortVal === "price-asc") items.sort((a, b) => a.price - b.price);
    else if (sortVal === "price-desc") items.sort((a, b) => b.price - a.price);
    else if (sortVal === "name-asc") items.sort((a, b) => a.name.localeCompare(b.name));

    if (items.length) {
      grid.innerHTML = items.map(productCardHTML).join("");
      bindQuickAddButtons(grid);
    } else {
      grid.innerHTML = `<div class="empty-state" style="grid-column:1/-1">
          <h3>No products found</h3>
          <p>Try a different category, or clear your search.</p>
        </div>`;
    }

    if (resultCount) {
      resultCount.textContent = `${items.length} product${items.length === 1 ? "" : "s"}`;
    }
    pills.forEach((p) => p.classList.toggle("active", p.dataset.category === activeCategory));
  }

  pills.forEach((pill) => {
    pill.addEventListener("click", () => {
      activeCategory = pill.dataset.category;
      render();
    });
  });
  if (sortSelect) sortSelect.addEventListener("change", render);

  render();
}

/* ---- Courses page: filter, search, sort ---------------------------------- */
function initCoursesPage() {
  const grid = document.getElementById("courses-grid");
  if (!grid || typeof COURSES === "undefined") return;

  const pills = document.querySelectorAll(".course-filter-pill");
  const sortSelect = document.getElementById("course-sort-select");
  const resultCount = document.getElementById("course-result-count");
  const params = new URLSearchParams(window.location.search);

  let activeCategory = params.get("category") || "All";
  const searchTerm = (params.get("q") || "").toLowerCase();

  function render() {
    let items = COURSES.slice();

    if (searchTerm) {
      items = items.filter(
        (c) =>
          c.name.toLowerCase().includes(searchTerm) ||
          c.category.toLowerCase().includes(searchTerm) ||
          c.shortDesc.toLowerCase().includes(searchTerm)
      );
    }
    if (activeCategory !== "All") {
      items = items.filter((c) => c.category === activeCategory);
    }

    const sortVal = sortSelect ? sortSelect.value : "featured";
    if (sortVal === "price-asc") items.sort((a, b) => a.price - b.price);
    else if (sortVal === "price-desc") items.sort((a, b) => b.price - a.price);
    else if (sortVal === "name-asc") items.sort((a, b) => a.name.localeCompare(b.name));

    if (items.length) {
      grid.innerHTML = items.map(courseCardHTML).join("");
      bindQuickAddButtons(grid);
    } else {
      grid.innerHTML = `<div class="empty-state" style="grid-column:1/-1">
          <h3>No courses found</h3>
          <p>Try a different category, or clear your search.</p>
        </div>`;
    }

    if (resultCount) {
      resultCount.textContent = `${items.length} course${items.length === 1 ? "" : "s"}`;
    }
    pills.forEach((p) => p.classList.toggle("active", p.dataset.category === activeCategory));
  }

  pills.forEach((pill) => {
    pill.addEventListener("click", () => {
      activeCategory = pill.dataset.category;
      render();
    });
  });
  if (sortSelect) sortSelect.addEventListener("change", render);

  render();
}

/* ---- Product detail page ----------------------------------------------- */
function initProductPage() {
  const root = document.getElementById("pdp-root");
  if (!root) return;

  const params = new URLSearchParams(window.location.search);
  const product = getProductBySlug(params.get("slug")) || PRODUCTS[0];

  document.title = `${product.name} — Queen of Fabulousness`;

  const setText = (id, text) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  };

  setText("breadcrumb-name", product.name);
  setText("pdp-category", product.category);
  setText("pdp-name", product.name);
  setText("pdp-size", product.size);
  setText("pdp-desc", product.description);
  setText("pdp-rating-count", `(${product.reviews} reviews)`);

  const iconEl = document.getElementById("pdp-icon");
  if (iconEl) iconEl.innerHTML = featureIcon(product.icon);

  const starsEl = document.getElementById("pdp-stars");
  if (starsEl) starsEl.textContent = "★★★★★".slice(0, Math.round(product.rating));

  const priceRow = document.getElementById("pdp-price-row");
  if (priceRow) {
    priceRow.innerHTML = product.oldPrice
      ? `<span class="price">${formatPrice(product.price)}</span> <span class="price old">${formatPrice(product.oldPrice)}</span>`
      : `<span class="price">${formatPrice(product.price)}</span>`;
  }

  const howToUseEl = document.getElementById("pdp-howtouse");
  if (howToUseEl) howToUseEl.innerHTML = product.howToUse.map((s) => `<li>${s}</li>`).join("");

  const ingredientsEl = document.getElementById("pdp-ingredients");
  if (ingredientsEl) ingredientsEl.textContent = product.ingredients.join(", ");

  const badgeEl = document.getElementById("pdp-badge");
  if (badgeEl) {
    if (product.badge) {
      badgeEl.textContent = product.badge;
      badgeEl.style.display = "inline-block";
    } else {
      badgeEl.style.display = "none";
    }
  }

  const qtyInput = document.getElementById("pdp-qty");
  document.getElementById("pdp-qty-inc")?.addEventListener("click", () => {
    qtyInput.value = Math.max(1, Number(qtyInput.value) + 1);
  });
  document.getElementById("pdp-qty-dec")?.addEventListener("click", () => {
    qtyInput.value = Math.max(1, Number(qtyInput.value) - 1);
  });

  const addBtn = document.getElementById("pdp-add-btn");
  const addedMsg = document.getElementById("pdp-added-msg");
  if (addBtn) {
    addBtn.addEventListener("click", () => {
      addToCart(product.id, Math.max(1, Number(qtyInput.value) || 1));
      if (addedMsg) {
        addedMsg.textContent = "Added to your bag.";
        addedMsg.classList.add("show");
      }
    });
  }

  const relatedGrid = document.getElementById("related-grid");
  if (relatedGrid) {
    const related = PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);
    relatedGrid.innerHTML = related.map(productCardHTML).join("");
    bindQuickAddButtons(relatedGrid);
  }
}

/* ---- Course detail page -------------------------------------------------- */
function initCourseDetailPage() {
  const root = document.getElementById("course-root");
  if (!root || typeof COURSES === "undefined") return;

  const params = new URLSearchParams(window.location.search);
  const course = getCourseBySlug(params.get("slug")) || COURSES[0];

  document.title = `${course.name} — Queen of Fabulousness`;

  const setText = (id, text) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  };

  setText("breadcrumb-name", course.name);
  setText("course-category", `${course.category} · ${course.level}`);
  setText("course-name", course.name);
  setText("course-desc", course.description);
  setText("course-rating-count", `(${course.reviews} reviews)`);
  setText("course-duration", course.duration);
  setText("course-classsize", course.classSize);
  setText("course-intake", course.nextIntake);
  setText("course-mode", course.mode);

  const iconEl = document.getElementById("course-icon");
  if (iconEl) iconEl.innerHTML = featureIcon(course.icon);

  const starsEl = document.getElementById("course-stars");
  if (starsEl) starsEl.textContent = "★★★★★".slice(0, Math.round(course.rating));

  const priceRow = document.getElementById("course-price-row");
  if (priceRow) priceRow.innerHTML = `<span class="price">${formatPrice(course.price)}</span>`;

  const curriculumEl = document.getElementById("course-curriculum");
  if (curriculumEl) curriculumEl.innerHTML = course.curriculum.map((s) => `<li>${s}</li>`).join("");

  const instructorNameEl = document.getElementById("course-instructor-name");
  if (instructorNameEl) instructorNameEl.textContent = course.instructor.name;
  const instructorRoleEl = document.getElementById("course-instructor-role");
  if (instructorRoleEl) instructorRoleEl.textContent = course.instructor.role;
  const instructorBioEl = document.getElementById("course-instructor-bio");
  if (instructorBioEl) instructorBioEl.textContent = course.instructor.bio;
  const instructorInitialEl = document.getElementById("course-instructor-initial");
  if (instructorInitialEl) instructorInitialEl.textContent = course.instructor.name.charAt(0);

  const prereqEl = document.getElementById("course-prereq");
  if (prereqEl) {
    if (course.prerequisite) {
      prereqEl.textContent = `Prerequisite: ${course.prerequisite}`;
      prereqEl.style.display = "block";
    } else {
      prereqEl.style.display = "none";
    }
  }

  const badgeEl = document.getElementById("course-badge");
  if (badgeEl) {
    if (course.badge) {
      badgeEl.textContent = course.badge;
      badgeEl.style.display = "inline-block";
    } else {
      badgeEl.style.display = "none";
    }
  }

  const enrollBtn = document.getElementById("course-enroll-btn");
  const enrolledMsg = document.getElementById("course-enrolled-msg");
  if (enrollBtn) {
    enrollBtn.addEventListener("click", () => {
      addToCart(course.id, 1);
      if (enrolledMsg) {
        enrolledMsg.textContent = "Added to your bag — complete checkout to secure your seat.";
        enrolledMsg.classList.add("show");
      }
    });
  }

  const relatedGrid = document.getElementById("related-courses-grid");
  if (relatedGrid) {
    const related = COURSES.filter((c) => c.category === course.category && c.id !== course.id).slice(0, 4);
    relatedGrid.innerHTML = related.map(courseCardHTML).join("");
    bindQuickAddButtons(relatedGrid);
  }
}

/* ---- Cart page ----------------------------------------------------------- */
function initCartPage() {
  const tbody = document.getElementById("cart-body");
  if (!tbody) return;

  const layoutEl = document.getElementById("cart-layout");
  const emptyEl = document.getElementById("cart-empty");

  function render() {
    const items = cartLineItems();

    if (!items.length) {
      if (layoutEl) layoutEl.style.display = "none";
      if (emptyEl) emptyEl.style.display = "block";
      return;
    }
    if (layoutEl) layoutEl.style.display = "grid";
    if (emptyEl) emptyEl.style.display = "none";

    tbody.innerHTML = items
      .map(
        (item) => `
      <tr>
        <td>
          <div class="cart-item-cell">
            <div class="cart-item-thumb"><span class="icon-feature">${featureIcon(item.icon)}</span></div>
            <div>
              <h4>${item.name}</h4>
              <span>${item.kind === "course" ? "Course enrollment" : ""} ${item.size}</span><br/>
              <a href="#" class="cart-remove" data-id="${item.id}">Remove</a>
            </div>
          </div>
        </td>
        <td>${formatPrice(item.price)}</td>
        <td>
          <div class="qty-stepper">
            <button type="button" data-action="dec" data-id="${item.id}">&minus;</button>
            <input type="number" min="1" value="${item.qty}" data-id="${item.id}" class="qty-input" />
            <button type="button" data-action="inc" data-id="${item.id}">+</button>
          </div>
        </td>
        <td>${formatPrice(item.price * item.qty)}</td>
      </tr>`
      )
      .join("");

    const subtotalEl = document.getElementById("summary-subtotal");
    const shippingEl = document.getElementById("summary-shipping");
    const totalEl = document.getElementById("summary-total");
    if (subtotalEl) subtotalEl.textContent = formatPrice(cartSubtotal());
    if (shippingEl) {
      const shipping = cartShipping();
      shippingEl.textContent = shipping === 0 ? "Free" : formatPrice(shipping);
    }
    if (totalEl) totalEl.textContent = formatPrice(cartTotal());

    tbody.querySelectorAll("[data-action]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.id;
        const current = cartLineItems().find((i) => i.id === Number(id));
        if (!current) return;
        const newQty = btn.dataset.action === "inc" ? current.qty + 1 : current.qty - 1;
        updateCartQty(id, newQty);
        render();
      });
    });
    tbody.querySelectorAll(".qty-input").forEach((input) => {
      input.addEventListener("change", () => {
        updateCartQty(input.dataset.id, input.value);
        render();
      });
    });
    tbody.querySelectorAll(".cart-remove").forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        removeFromCart(link.dataset.id);
        render();
      });
    });
  }

  render();
}

/* ---- Checkout page -------------------------------------------------------- */
function initCheckoutPage() {
  const root = document.getElementById("checkout-root");
  if (!root) return;

  const formSection = document.getElementById("checkout-form-section");
  const confirmSection = document.getElementById("checkout-confirm");
  const emptyEl = document.getElementById("checkout-empty");
  const items = cartLineItems();

  if (!items.length) {
    if (formSection) formSection.style.display = "none";
    if (emptyEl) emptyEl.style.display = "block";
    return;
  }

  const linesEl = document.getElementById("checkout-order-lines");
  if (linesEl) {
    linesEl.innerHTML = items
      .map(
        (item) =>
          `<div class="order-line"><span>${item.name} × ${item.qty}</span><span>${formatPrice(item.price * item.qty)}</span></div>`
      )
      .join("");
  }
  const subtotalEl = document.getElementById("checkout-subtotal");
  const shippingEl = document.getElementById("checkout-shipping");
  const totalEl = document.getElementById("checkout-total");
  if (subtotalEl) subtotalEl.textContent = formatPrice(cartSubtotal());
  if (shippingEl) {
    const shipping = cartShipping();
    shippingEl.textContent = shipping === 0 ? "Free" : formatPrice(shipping);
  }
  if (totalEl) totalEl.textContent = formatPrice(cartTotal());

  /* South African payment method toggle — only "Card" shows card-detail
     fields; EFT/SnapScan/PayFast/Yoco show a redirect note instead, since
     this is a front-end demo with no live payment processing. */
  const payMethodSelect = document.getElementById("cf-pay-method");
  const cardFields = document.getElementById("cf-card-fields");
  const redirectNote = document.getElementById("pay-redirect-note");
  function applyPayMethod() {
    if (!payMethodSelect) return;
    const method = payMethodSelect.value;
    const isCard = method === "Card";
    if (cardFields) {
      cardFields.style.display = isCard ? "" : "none";
      cardFields.querySelectorAll("input").forEach((input) => {
        input.required = isCard;
      });
    }
    if (redirectNote) {
      if (isCard) {
        redirectNote.style.display = "none";
      } else {
        redirectNote.style.display = "block";
        redirectNote.textContent = `Demo checkout — you'd be redirected to ${method} to complete this payment securely.`;
      }
    }
  }
  if (payMethodSelect) {
    payMethodSelect.addEventListener("change", applyPayMethod);
    applyPayMethod();
  }

  const form = document.getElementById("checkout-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const orderNum = "QOF-" + Math.floor(100000 + Math.random() * 900000);
      const orderNumEl = document.getElementById("order-number");
      if (orderNumEl) orderNumEl.textContent = orderNum;
      clearCart();
      if (formSection) formSection.style.display = "none";
      if (confirmSection) confirmSection.style.display = "block";
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}

/* ---- Boot ------------------------------------------------------------------ */
document.addEventListener("DOMContentLoaded", () => {
  initNavToggle();
  initSearchToggle();
  initActiveNav();
  initNewsletterForms();
  initContactForm();
  initHomePage();
  initShopPage();
  initCoursesPage();
  initProductPage();
  initCourseDetailPage();
  initCartPage();
  initCheckoutPage();
});
