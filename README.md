This is a User-Friendly Platform for Booking Accommodations

## Nestify

Nestify is a platform that simplifies the process of finding, booking, and paying for accommodations, with a special focus on accessibility for older adults and individuals with limited mobility. The application prioritizes clarity, simplicity, and accessibility in both design and functionality.

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Features

- Search Bar: Search for accommodations based on location.

- Filters: Filter by wheelchair accessibility, pet-friendliness, proximity to water or nature. Results update in real time.

- Overview: The homepage displays cards with the accommodation's name, location, and specifications. Data is fetched at page load using SSR.

- Login and Registration: Secure authentication with Firebase and session management on the server side.

- Accommodation Details: Each accommodation has a dedicated page with images, descriptions, pricing, and specifications.

- Profile and Booking History: Users can view their profile and booking history.

- Booking System: Users can select check-in and check-out dates, specify the number of guests, and view the total cost before confirming the booking.

- Payment System: Stripe securely handles payments and sends status updates via webhooks.

- Responsive Design: Optimized for all devices.

- SEO Optimization: SSR and metadata enhance visibility in search results. Robots.txt and sitemap.xml are used to guide search engine crawlers.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Technologies Used

- Next.js
- Firebase
- Stripe
- Tailwind CSS
- React Hot Toast
- TypeScript
- Vercel

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
