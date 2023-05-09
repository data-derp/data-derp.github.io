import React from 'react';
import clsx from 'clsx';
import styles from './CuratorFeatures.module.css';

const CuratorsList = [
    {
        title: 'Kelsey Beyer',
        img: 'https://github.com/kelseymok.png',
        url: 'https://github.com/kelseymok',
        description: (
          <>
            Kelsey does software engineering, infrastructure, and data. She is passionate about understanding how people learn and shaping content according to their learning styles. Aside from the serious stuff, ask her about Permaculture and composting.
          </>
        ),
    },
    {
        title: 'Pawarit Laosunthara',
        img: 'https://github.com/pawaritl.png',
        url: 'https://github.com/pawaritl',
        description: (
          <>
          </>
        ),
    },
    {
        title: 'Syed Ali Masroor Rizvi',
        img: 'https://github.com/masroorrizvi.png',
        url: 'https://github.com/masroorrizvi',
        description: (
          <>
          </>
        ),
    },
    {
        title: 'Tim Kläsener',
        img: 'https://github.com/tklae.png',
        url: 'https://github.com/tklaei',
        description: (
          <>
          </>
        ),
    },
    {
        title: 'Kris Simon',
        img: 'https://github.com/petershaw',
        url: 'https://github.com/petershaw.png',
        description: (
            <>
            </>
        ),
    },
];

function Feature({img, url, title, description}) {
    if (img != null) {
        return (
            <div className={clsx('col col--4')}>
                <div className="text--center">
                    <a href={url}><img src={img} className={styles.featureSvg} alt={title}/></a>
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

export default function CuratorFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
          <h2>Meet the Curators!</h2>
        <div className="row">
          {CuratorsList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
