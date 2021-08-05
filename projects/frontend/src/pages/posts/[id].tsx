
import Head from 'next/head'
import Date from '../../shared/components/date'
import utilStyles from '../../styles/utils.module.css'
import Layout from '../../shared/components/layout'

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = [];
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = {}
  return {
    props: {
      postData
    }
  }
}
