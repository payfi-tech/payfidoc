import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Payfi Instore',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        lets you provide Payfi as a payment method in your physical store.
      </>
    ),
  },
  {
    title: 'Payfi Checkout',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        lets you accept payments on your website with Payfi. No need for any client-side integration
      </>
    ),
  },
  {
    title: 'Payfi Payment Link',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Send your consumer a link by e-mail or sms to pay.
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