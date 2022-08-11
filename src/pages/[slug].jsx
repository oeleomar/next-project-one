import P from 'prop-types';
import { loadPages, loadFullPages } from '../api/load-page';
import { Home } from '../templates/Home';

export default function Page({ data = null }) {
  return <Home data={data} />;
}

Page.propTypes = {
  data: P.array,
};

export const getStaticPaths = async () => {
  const arrPaths = await loadFullPages();
  const paths = arrPaths.map((page) => {
    return {
      params: {
        slug: page.attributes.slug,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (ctx) => {
  let data = null;
  try {
    data = await loadPages(ctx.params.slug);
  } catch (e) {
    data = null;
  }

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
  };
};
