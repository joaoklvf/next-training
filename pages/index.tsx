import Link from 'next/link';
import Date from '../components/date';
import Head from 'next/head'
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';

interface HomeProps {
  allPostsData:
  {
    date: string;
    title: string;
    id: string
  }[];
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }: HomeProps) {
  return (
    <Layout home>
      <Head>
        <title>João Victor Figueredo</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Programador</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}