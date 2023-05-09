import React from 'react';
import Content from '@theme-original/DocItem/Content';
import Readingtime from '@site/src/components/ReadingTime';

export default function ContentWrapper(props) {
  return (
    <>
      <Readingtime/>
      <Content {...props} />
    </>
  );
}
