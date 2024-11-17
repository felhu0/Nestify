## Nestify

Nestify is a platform that simplifies the process of finding, booking, and paying for accommodations, with a special focus on accessibility for older adults and individuals with limited mobility. The application prioritizes clarity, simplicity, and accessibility in both design and functionality.

Open [https://nestify-roan.vercel.app](https://nestify-roan.vercel.app) to view the website.

## Features

- Search Bar - Search for accommodations based on location.

- Filters - Filter by wheelchair accessibility, pet-friendliness, proximity to water or nature. Results update in real time.

- Overview - The homepage displays cards with the accommodation's name, location, and specifications. Data is fetched at page load using SSR.

- Login and Registration - Secure authentication with Firebase and session management on the server side.

- Accommodation Details - Each accommodation has a dedicated page with images, descriptions, pricing, and specifications.

- Profile and Booking History - Users can view their profile and booking history.

- Booking System - Users can select check-in and check-out dates, specify the number of guests, and view the total cost before confirming the booking.

- Payment System - Stripe securely handles payments and sends status updates via webhooks.

- Responsive Design - Optimized for all devices.

- SEO Optimization - SSR and metadata enhance visibility in search results. Robots.txt and sitemap.xml are used to guide search engine crawlers.

## Technologies Used

- Next.js
- Firebase
- Stripe
- Tailwind CSS
- React Hot Toast
- TypeScript
- Vercel
