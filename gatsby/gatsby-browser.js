// Gatsby allows us to wrap every page in a custom component, in this case Layout
// It allows to avoid having to use Layout on every single page
// This is done via this hook (!Make sure it's in the root folder and not src)
// Note that whenever you modify this file, you have to quit the build and restart (at least for now)   - CTRL+C
import React from 'react';
import Layout from './src/components/Layout';

export function wrapPageElement({ element, props}) {
  return <Layout {...props}>{element}</Layout>
}

