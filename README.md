# Landiing Page Bento Grid 

## Built Using and Initialised with 
- Next.js 14 
- Tailwind CSS
- Shadcn Components + Themes

## Table of Contents

- [Overview](#overview)
- [Key Components](#key-components)
  - [SVG Graphics](#svg-graphics)
  - [Responsive Grid Layout](#responsive-grid-layout)
- [Detailed Section Breakdown](#detailed-section-breakdown)
  - [Hero Section](#hero-section)
  - [Content Grid](#content-grid)
  - [Sponsors Section](#sponsors-section)
  - [Call to Action (CTA) Sections](#call-to-action-cta-sections)
  - [Footer](#footer)
  - [HorizontalGallery Section](#horizontal-gallery)
- [Accessibility and Responsiveness](#accessibility-and-responsiveness)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Overview

The application is structured to captivate and engage users from the moment they arrive. It features a variety of sections, each tailored to present information, showcase sponsors, and encourage user interaction through calls to action. The design emphasizes accessibility and responsiveness, ensuring a seamless experience across different devices and for users with disabilities.

## Key Components

### SVG Graphics

The application incorporates SVG graphics to enhance visual appeal. These scalable graphics ensure high-quality visuals that are efficient and adaptable to various screen sizes.

### Responsive Grid Layout

A responsive grid system organizes the content, ensuring it is accessible and aesthetically pleasing on any device. This layout adapts to screen size changes, providing an optimal viewing experience.

## Detailed Section Breakdown

### Hero Section

The entry point of the application, featuring a striking SVG graphic and a concise introduction. This section aims to grab the user's attention and succinctly convey the application's purpose.

### Content Grid

A versatile section that follows the hero section, displaying information and features in an organized manner. It includes:

- **Informational Content**: Titles and paragraphs that delve deeper into the application's offerings.
- **Dynamic Visual Elements**: Background gradients and SVG patterns that add depth and engagement to the visual presentation.

### Sponsors Section

Acknowledges the sponsors or technologies supporting the application, each represented by a card that includes:

- **CardTitle**: Name of the sponsor or technology.
- **CardDescription**: A brief acknowledgment or description.
- **Image**: A logo or visual representation, enhancing brand recognition.

### Call to Action (CTA) Sections

Strategically placed CTAs guide users through the application, encouraging interaction. These include:

- **Join Now**: Prompts users to become part of the community.
- **About**: Offers detailed information about the application or organization.
- **Events**: Invites users to explore upcoming events.
- **Work**: Highlights opportunities for work or collaboration.

### Footer

Provides additional information and navigation options, including links, contact information, and legal notices, ensuring users have access to essential resources throughout the application.

### HorizontalGallery 
This TypeScript React component, named `App`, is designed to create a horizontally scrolling section with a series of images that animate based on the user's scroll position. It utilizes the `gsap` library for animations and the `ScrollTrigger` plugin to synchronize the scroll position with the animation. The component is structured to be responsive and visually engaging, making it suitable for showcasing skills or projects in a portfolio-like section.

#### Component Overview

- **`scroller` Ref**: A React ref that targets the container div element. This div acts as the scrolling viewport for the horizontally aligned sections.
- **`skills` Ref**: Another React ref intended to target individual sections within the scrolling container. However, in the current implementation, it's reassigned multiple times, which is not the intended use of refs in React. This should be addressed for correct usage.

#### Animation Setup

Upon component mount, the `useEffect` hook initializes the GSAP animation:

- **Skill Set Array**: Converts elements with the class `.skill-set` into an array for animation purposes. This allows GSAP to animate each section as part of a collective sequence.
- **GSAP Animation**: Animates the `skillSet` array to move horizontally based on the user's scroll. The `xPercent` property calculates the total movement required to scroll through all sections.
- **ScrollTrigger Configuration**: Configures the ScrollTrigger specific to the `scroller` ref, enabling features like pinning, scrubbing, and snapping to enhance the scroll-based animation.

#### Cleanup

- A cleanup function is returned from the `useEffect` hook to kill the GSAP animation when the component unmounts, preventing potential memory leaks.

#### Render Method

The component renders a div structure designed for horizontal scrolling:

- **Outer Divs**: Serve as containers with `overflow-hidden` to ensure the scrolling content is clipped properly.
- **Scrolling Container (`scroller`)**: A div that contains all sections to be scrolled through. It's set to a wide width (`400vw`) to accommodate the horizontal layout of sections.
- **Sections (`skills`)**: Multiple sections, each containing an image. These sections are intended to represent different skills or projects. Each section uses the `skill-set` class for animation targeting and is styled to be full-screen height with varying padding.

#### Accessibility and Responsiveness

- The component uses the `Image` component from `next/image` for optimized image loading and rendering. The `layout="fill"` and `objectFit="contain"` properties ensure images are responsive and maintain aspect ratio.
- Text accessibility is not directly addressed in the provided code, but alt text is provided for images, enhancing web accessibility.

#### Potential Improvements

- **Ref Usage**: The `skills` ref is reassigned multiple times, which is not effective. A different approach should be used to reference and animate individual sections.
- **Responsive Design**: While the component is designed to be responsive, further testing and adjustments may be needed to ensure optimal viewing across all device sizes.

This documentation provides an overview of the `App` component's functionality, focusing on its use of GSAP for scroll-triggered animations and the structure of its render method for displaying content.

## Accessibility and Responsiveness

The application is designed with accessibility and responsiveness at its core, featuring `sr-only` classes for screen readers and a layout that adjusts to various screen sizes and devices.

## Usage

To use the application, ensure Node.js and npm are installed. Clone the repository, install dependencies with `npm install`, and start the development server with `npm run dev`. The application will be available at `http://localhost:3000`.

## Contributing

Contributions are welcome. Fork the repository, create a new branch for your changes, and submit a pull request. Ensure your code adheres to the project's standards and includes appropriate documentation and tests.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contact

For questions or contributions, please contact the project maintainers via GitHub.

This documentation aims to provide a clear and comprehensive guide to our web application, highlighting its structure, functionality, and the thoughtfulness behind its design.
