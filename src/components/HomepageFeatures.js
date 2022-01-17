import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Wide Breadth',
    Svg: require('../../static/img/wide-breadth.png').default,
    description: (
      <>
          Give enough context across the whole domain in order to enable deeper dive into relevant and advanced topics later
      </>
    ),
  },
  {
    title: 'Real World Slice',
    Svg: require('../../static/img/real-world-slice.png').default,
    description: (
      <>
          * Storage
          * Data Ingestion
          * Transformation
          * Visualisation
          * Streaming
          * Business Value
      </>
    ),
  },
  {
    title: 'Real World Scenario',
    Svg: require('../../static/img/real-world-scenario.png').default,
    description: (
      <>
          * Projecting and Visualising CO2 emissions vs. Global temperature
          * Perform analytics to interpret and communicate findings to stakeholders
          * Treat data problems mindfully
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
