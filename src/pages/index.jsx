import P from 'prop-types';
import { Home } from '../templates/Home';
import { loadPages } from '../api/load-page';

export default function Index({ data = null }) {
  return <Home data={data} />;
}

export const getStaticProps = async () => {
  let data;
  try {
    data = await loadPages('landing-page');
  } catch (e) {
    //
  }

  if (!data || !data.length) {
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

Index.propTypes = {
  data: P.array,
};
