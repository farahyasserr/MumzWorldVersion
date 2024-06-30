# Mumzworld Version - React Native App

## Features
- Product Listings: Displaying a list of products with images, names, prices, and discounts.
- Product Details: Detailed view of individual products including descriptions, specifications, image gallery
- Search: Interactive search functionality for products
- Localization: Support for Arabic and English with RTL for Arabic.
- Responsive Design: Ensures the app adapts well to different screen sizes and orientations.

## Shared and resuable Components
- SearchBar: Interactive search component with auto-suggest and clear functionality.
- ImageGallery: Horizontal image gallery with snap-to-item scrolling.
- DiscountBadge: Component for displaying discounts on product images.
- ProductListItem: Component for displaying a single product item in a list view.
- Dividor: Component for displaying a dividor line
- HeartIcon: Add to Wishlist button with animation
- TitleValueItem: Component for displaying title and value used in product details
- ToggleLanguageButton: Component that switches/toggles language from Arabic to English and vice versa

## Enhancements that can be done to the API

- Add pagination
- too many nested objects until I reach list data
- Pass language in params instead of getting 2 objects for 2 languages
- Prices could be simpler and more straightforward
- Too many nested items: e.g. product.base_price_range.minimum_price.regular_price.value - minimum_price can be removed for example
- Remove __typename attribute if it’s not needed
- allery images have the wrong link


## Important Notes
- This is work of 2.5 days (started working on task in weekend due to personal stuff)
- I replaced the gallery images with a small image link from one of the products because provided API for product details had no images for image gallery
- Usually I would not use numbers directly in paddings and margins, I use a transformative function for height and width based on my current screen height and width and also the designs height and width. To ensure pixel perfect ui and responsive ui for all devices.
- Product details of course should be based on id, but since I was asked to use this API that’s why product details screen is always the same
- Expo Go resets RTL preferences when opening the launcher or individual projects. To test RTL dynamically, please use the development build not Expo Go.
Translations are only done inside product details screen
