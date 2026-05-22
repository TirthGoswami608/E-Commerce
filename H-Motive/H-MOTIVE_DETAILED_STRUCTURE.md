# H-MOTIVE Detailed Project Structure

This document lists the entire `H-Motive` frontend project structure with every file name, excluding `node_modules`.

```
H-Motive/
├── .env.example
├── .gitignore
├── eslint.config.js
├── FOLDER_STRUCTURE.md
├── index.html
├── MVC_ARCHITECTURE.md
├── package-lock.json
├── package.json
├── README.md
├── STRUCTURE_TREE.md
├── vite.config.example.js
├── vite.config.js
├── public/
│   ├── favicon.svg
│   └── icons.svg
└── src/
    ├── App.example.jsx
    ├── App.jsx
    ├── main.jsx
    ├── app/
    │   ├── App.tsx
    │   ├── routes.tsx
    │   ├── components/
    │   │   ├── AdminLayout.tsx
    │   │   ├── Footer.tsx
    │   │   ├── Header.tsx
    │   │   ├── Layout.tsx
    │   │   ├── ProductCard.tsx
    │   │   ├── figma/
    │   │   │   └── ImageWithFallback.tsx
    │   │   └── ui/
    │   │       ├── accordion.tsx
    │   │       ├── alert-dialog.tsx
    │   │       ├── alert.tsx
    │   │       ├── aspect-ratio.tsx
    │   │       ├── avatar.tsx
    │   │       ├── badge.tsx
    │   │       ├── breadcrumb.tsx
    │   │       ├── button.tsx
    │   │       ├── calendar.tsx
    │   │       ├── card.tsx
    │   │       ├── carousel.tsx
    │   │       ├── chart.tsx
    │   │       ├── checkbox.tsx
    │   │       ├── collapsible.tsx
    │   │       ├── command.tsx
    │   │       ├── context-menu.tsx
    │   │       ├── dialog.tsx
    │   │       ├── drawer.tsx
    │   │       ├── dropdown-menu.tsx
    │   │       ├── form.tsx
    │   │       ├── hover-card.tsx
    │   │       ├── input-otp.tsx
    │   │       ├── input.tsx
    │   │       ├── label.tsx
    │   │       ├── menubar.tsx
    │   │       ├── navigation-menu.tsx
    │   │       ├── pagination.tsx
    │   │       ├── popover.tsx
    │   │       ├── progress.tsx
    │   │       ├── radio-group.tsx
    │   │       ├── resizable.tsx
    │   │       ├── scroll-area.tsx
    │   │       ├── select.tsx
    │   │       ├── separator.tsx
    │   │       ├── sheet.tsx
    │   │       ├── sidebar.tsx
    │   │       ├── skeleton.tsx
    │   │       ├── slider.tsx
    │   │       ├── sonner.tsx
    │   │       ├── switch.tsx
    │   │       ├── table.tsx
    │   │       ├── tabs.tsx
    │   │       ├── textarea.tsx
    │   │       ├── toggle-group.tsx
    │   │       ├── toggle.tsx
    │   │       ├── tooltip.tsx
    │   │       ├── use-mobile.ts
    │   │       └── utils.ts
    │   ├── context/
    │   │   └── CartContext.tsx
    │   ├── data/
    │   │   ├── customers.ts
    │   │   ├── orders.ts
    │   │   └── products.ts
    │   └── pages/
    │       ├── CartPage.tsx
    │       ├── HomePage.tsx
    │       ├── OrderTrackingPage.tsx
    │       ├── ProductDetailPage.tsx
    │       ├── ProductsPage.tsx
    │       ├── UserDashboardPage.tsx
    │       └── admin/
    │           ├── AdminCustomers.tsx
    │           ├── AdminDashboard.tsx
    │           ├── AdminOrders.tsx
    │           ├── AdminRewards.tsx
    │           ├── AdminSettings.tsx
    │           └── ManageProducts.tsx
    ├── components/
    │   ├── BtnO.jsx
    │   ├── BtnP.jsx
    │   ├── FormInput.jsx
    │   ├── HeroSlider.jsx
    │   ├── Navbar.jsx
    │   ├── ProductCard.jsx
    │   ├── ReviewCard.jsx
    │   ├── SectionCard.jsx
    │   ├── StarRating.jsx
    │   ├── Stars.jsx
    │   ├── admin/
    │   │   ├── AdminHeader.jsx
    │   │   ├── AdminSidebar.jsx
    │   │   └── AdminStatCard.jsx
    │   ├── common/
    │   │   └── index.js
    │   ├── features/
    │   │   └── index.js
    │   └── ui/
    │       └── index.js
    ├── constants/
    │   ├── data.js
    │   ├── index.js
    │   └── theme.js
    ├── controllers/
    │   └── index.js
    ├── hooks/
    │   ├── useCart.js
    │   └── useMVC.js
    ├── middleware/
    │   └── interceptors.js
    ├── models/
    │   ├── entities.js
    │   └── repositories/
    │       └── index.js
    ├── pages/
    │   ├── AboutPage.jsx
    │   ├── AdminPage.jsx
    │   ├── CartPage.jsx
    │   ├── CheckoutPage.jsx
    │   ├── ContactPage.jsx
    │   ├── DashboardPage.jsx
    │   ├── LoginPage.jsx
    │   ├── OrdersPage.jsx
    │   ├── ProductDetailPage.jsx
    │   ├── RedeemPage.jsx
    │   ├── ShopPage.jsx
    │   └── SignupPage.jsx
    ├── services/
    │   └── api.js
    ├── stores/
    │   └── index.js
    ├── styles/
    │   ├── fonts.css
    │   ├── index.css
    │   ├── tailwind.css
    │   └── theme.css
    ├── types/
    │   └── index.ts
    ├── utils/
    │   └── helpers.js
    └── views/
        ├── EXAMPLE_MVC_COMPONENT.js
        └── README.md
```

## Notes
- `src/app/` contains the current app shell and route-based pages.
- `src/pages/` contains legacy standalone page components.
- `src/components/` contains reusable UI components and admin widgets.
- `src/views/` is the new MVC view layer.
- `src/models/`, `src/controllers/`, `src/stores/`, and `src/hooks/` are the new MVC backbone.

Use this structured tree as the definitive layout for `H-Motive`.
