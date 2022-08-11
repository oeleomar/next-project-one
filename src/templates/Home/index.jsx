import P from 'prop-types';
import Head from 'next/head';

import { Base } from '../Base';
import { PageNotFound } from '../PageNotFound';

import config from '../../config';

import { GridTwoColumn } from '../../components/GridTwoColumn';
import { GridContent } from '../../components/GridContent';
import { GridText } from '../../components/GridText';
import { GridImage } from '../../components/GridImage';

export const Home = ({ data }) => {
  const { menu, sections, footerHtml, slug, title } = data[0];
  const { links, text, link, srcImg } = menu;
  return (
    <>
      <Head>
        <title>
          {title} | {config.siteName}
        </title>
      </Head>
      <Base links={links} footerHtml={footerHtml} logoData={{ text, link, srcImg }}>
        {sections.map((section, index) => {
          const { component } = section;
          const key = `${slug}-${index + 1}`;
          if (component === 'section.section-two-columns') {
            return <GridTwoColumn key={key} {...section} />;
          }

          if (component === 'section.section-one-colum') {
            return <GridContent key={key} {...section} />;
          }

          if (component === 'section.section-grid-text') {
            return <GridText key={key} {...section} />;
          }

          if (component === 'section.section-grid-image') {
            return <GridImage key={key} {...section} />;
          }
        })}
      </Base>
    </>
  );
};

Home.propTypes = {
  data: P.array,
};
