import React from 'react';

export default function HomePage() {
  return (
    <>
      <p>Well hello! It's the homepage</p>
      <p>I am another element!</p>
    </>
  )
} 

// Instead of wrapping everything in a <div> or <Layout> tag we can wrap the content in a fragment, <> </>, which will render to nothing but will allow to have more than one element returned 