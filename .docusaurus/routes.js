
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug','3d6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config','914'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content','c28'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry','0da'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes','244'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog','ea8'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','f4c'),
    exact: true
  },
  {
    path: '/blog/welcome-to-data-derp',
    component: ComponentCreator('/blog/welcome-to-data-derp','672'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page','be1'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','f8e'),
    routes: [
      {
        path: '/docs/data-engineering-the-good-parts/lesson-one',
        component: ComponentCreator('/docs/data-engineering-the-good-parts/lesson-one','9c0'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/data-engineering-the-good-parts/lesson-two',
        component: ComponentCreator('/docs/data-engineering-the-good-parts/lesson-two','e7c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/data-ingestion/lesson-one',
        component: ComponentCreator('/docs/data-ingestion/lesson-one','107'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/data-ingestion/lesson-two',
        component: ComponentCreator('/docs/data-ingestion/lesson-two','19a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/data-transformation/lesson-one',
        component: ComponentCreator('/docs/data-transformation/lesson-one','a37'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/data-transformation/lesson-two',
        component: ComponentCreator('/docs/data-transformation/lesson-two','355'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro','aed'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/','deb'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
