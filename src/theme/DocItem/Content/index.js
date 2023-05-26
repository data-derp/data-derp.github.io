import React from 'react';
import Content from '@theme-original/DocItem/Content';
import Readingtime from '@site/src/components/ReadingTime';
import Authors from '@site/src/components/Authors';

export default function ContentWrapper(props) {
  return (
    <>
      <Readingtime/>
      <Authors/>
      <Content {...props} />
    </>
  );
}
