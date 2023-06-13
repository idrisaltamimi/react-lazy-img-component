# React Image Loader Component

The React Image Loader Component is a versatile and customizable image loading component for React applications. It provides an elegant way to handle image loading states, such as showing placeholders or loading spinners while the image is being fetched from a server.

## Key Features

- Easy integration: Simply import the component and use it in your React application.
- Loading state management: Display placeholders or loading spinners while images are being loaded.
- Error handling: Show custom error messages or fallback images when image loading fails.
- Customizable styling: Easily customize the appearance of the image loader component to match your application's design.

## Installation

You can install the React Image Loader Component using npm:

```
npm install react-image-loader-component
```

## Usage

Import the component and use it in your React application like this:

```jsx
import React from "react"
import ImageLoader from "react-image-loader-component"

const App = () => {
  return (
    <div>
      <Image
        src={img1}
        placeholderSrc={img1Small}
        imageClass="img"
        loader="spinner"
        alt="a topical beach with a lot of palm trees with beautiful sea water"
      />
      <Image
        src={img2}
        placeholderSrc={img2Small}
        imageClass="img"
        loader="pulse"
        alt="a pinkish water with a big beautiful boulder in the middle that has a few small trees"
      />
    </div>
  )
}

export default App
```

## Props

The React Image Loader Component accepts the following props:

- `src` (string, required): The source URL of the image to be loaded.
- `placeholderSrc` (string, required): The placeholder small image to be displayed while the image is loading.
- `className` (string): custom class for the image wrapper.
- `imageClass` (string): custom class for the image.
- `loader` (string): choose loader style choose: spinner, pulse, or leave it empty.
