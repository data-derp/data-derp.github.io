import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Wide Breadth',
    img: require('@site/static/img/wide-breadth.png').default,
    description: (
      <>
          Give enough context across the whole domain in order to enable deeper dive into relevant and advanced topics later
      </>
    ),
  },
  {
    title: 'Real World Slice',
    img: require('../../static/img/real-world-slice.png').default,
    description: (
      <>
          <ul style="list-style-type:none;">
              <li>Storage</li>
              <li>Data Ingestion</li>
              <li>Data Transformation</li>
              <li>Visualisation</li>
              <li>Streaming</li>
              <li>Business Value</li>
          </ul>
      </>
    ),
  },
  {
    title: 'Real World Scenario',
    img: require('../../static/img/real-world-scenario.png').default,
    description: (
      <>
          <ul style="list-style-type:none;">
              <li>Projecting and Visualising CO2 emissions vs. Global temperature</li>
              <li>Perform analytics to interpret and communicate findings to stakeholders</li>
              <li>Treat data problems mindfully</li>
          </ul>

      </>
    ),
  },
  {
      title: 'Prerequisites',
      // img: require('../../static/img/real-world-scenario.png').default,
      description: (
          <>
              <ul style="list-style-type:none;">
                  <li>Data Curiosity</li>
                  <li>Basic Understanding of AWS</li>
                  <li>Docker</li>
                  <li>Terraform</li>
                  <li>Python</li>
              </ul>

          </>
      ),
  },
  {
      title: 'Concepts',
      // img: require('../../static/img/real-world-scenario.png').default,
      description: (
          <>
              <ul style="list-style-type:none;">
                  <li>Batch vs. Streaming</li>
                  <li>Distributed Systems: CAP Theorem</li>
                  <li>Storage & Compute Considerations</li>
                  <li>Apache Spark</li>
                  <li>Intro to Modern Data Science</li>
                  <li>Intro to Streaming Technologies</li>
                  <li>Challenges with Big Data</li>
                  <li>Data Mesh Paradigm</li>
              </ul>
          </>
      ),
  },
  {
      title: 'Practice',
      // img: require('../../static/img/real-world-scenario.png').default,
      description: (
          <>
              <ul style="list-style-type:none;">
                  <li>Databricks exercises</li>
                  <li>Ingesting data into AWS S3</li>
                  <li>Data Wrangling in Apache Spark</li>
                  <li>Interactive Analysis via Notebooks</li>
                  <li>Data Visualization & Storytelling</li>
                  <li>Practice with Kafka</li>
                  <li>Practice with Spark Streaming</li>
                  <li>Intro to Delta Lake</li>
              </ul>
          </>
      ),
  },
];

function Feature({img, title, description}) {
    if (img != null) {
        return (
            <div className={clsx('col col--4')}>
                <div className="text--center">
                    <img src={img} className={styles.featureSvg} alt={title}/>
                    {/*<Png className={styles.featureSvg} alt={title} />*/}
                </div>
                <div className="text--center padding-horiz--md">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </div>
        )
    }
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
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
