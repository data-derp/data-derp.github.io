import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import Readingtime from "../components/ReadingTime";
import Authors from "../components/Authors";
export default {
    // Re-use the default mapping
    ...MDXComponents,
    // Map the "highlight" tag to our <Highlight /> component!
    // `Highlight` will receive all props that were passed to `highlight` in MDX
    Readingtime: Readingtime,
    Authors: Authors
};
