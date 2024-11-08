# Project: Juneau Vacation Home Website

## Overview
This project is a fully responsive website for a vacation home rental in Juneau. The website provides detailed information about the property, amenities, pricing, gallery, and booking options, making it easy for potential guests to learn more about the property and make a reservation.

## Features
- **Gallery View**: A beautiful gallery of the property, including mobile-friendly carousels.
- **Responsive Design**: Optimized for both desktop and mobile views, ensuring a great experience for all users.
- **Booking Information**: Details about availability, pricing, and cancellation policies.
- **Map Integration**: Embedded Google Maps to help guests locate the property and nearby attractions.
- **Social Sharing**: Ability to share the property through different social platforms (X, Facebook, WhatsApp, Telegram).

## Technology Stack
- **HTML5, CSS3**: For creating the layout and styling the website.
- **JavaScript**: For interactive elements, such as modal pop-ups and image galleries.
- **Font Awesome**: Used for the icons throughout the website.
- **Google Fonts**: The "Inter" font is used for a consistent and clean look.
- **GitHub Pages**: Used to host the website and make it publicly accessible.

## Installation
Follow these steps to set up the project locally:

1. Clone the repository to your local machine using the following command:
   ```sh
   git clone https://github.com/arman-007/Assignment-2
   ```

2. Navigate into the project directory:
   ```sh
   cd Assignment-2
   ```

3. Open `index.html` in your preferred web browser to view the site.

## New Changes Implemented
Based on the feedback from the previous version:

1. **Added Git Clone Instruction**: The README now includes the `git clone` command to facilitate easy project setup.
2. **Improved Mobile Design**: Fixed the issue with the mobile view to match the reference designs. Removed the horizontal scroll bar by correcting CSS issues.
3. **Simplified Design**: Updated the design to reduce the clutter, providing a cleaner user experience for both desktop and mobile views.
4. **Optimized Project Structure**: Restructured the folders to create a more organized file hierarchy, including separating CSS and JavaScript assets into dedicated folders.
5. **HTML Comments**: Added comments to the HTML file to provide a clear understanding of each section for easier maintenance.
6. **Fixed Typos in CSS**: Corrected typographical errors in the CSS file to ensure consistency and improve readability.
7. **Horizontal Scroll Bar Fix**: Ensured no unnecessary horizontal scrolling by adjusting styles, especially in the mobile view.

## Project Structure
```
├── assets
│   ├── css
│   │   └── styles.css
│   ├── js
│   │   └── script.js
│   └── images
│       └── (all image files)
├── index.html
├── README.md
```

## Known Issues
- **Map Embedding Restrictions**: The embedded Google Maps iframe might require appropriate API settings if access is restricted.
- **Cross-browser Compatibility**: Minor issues in layout consistency might be present in older versions of certain browsers.

## Future Improvements
- **Lazy Loading for Images**: To enhance page load speed, implement lazy loading for images in the gallery.
- **Accessibility Features**: Further improvements can be made to improve accessibility for users with disabilities.
- **Add a Back-End for Bookings**: Integrate a back-end to manage booking requests and store reservation data.
