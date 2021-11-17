import { server } from '../config'
import Head from 'next/head'
import ArticleList from '../components/ArticleList'


export default function Home({ articles }) {

  return (
    <div>
      <Head>
        <title>WebDev Newz</title>
        <meta name='keywords' content='web development, programing'/>
      </Head>

      <ArticleList articles={articles}/>
    </div>
  )
}


//ORIGINAL FETCH TO JSON PLACEHOLDER API

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)

  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}








//NEW FETCH CALL TO LOCAL API

// export const getStaticProps = async () => {
//   const res = await fetch(`${server}/api/articles`)

//   const articles = await res.json()

//   return {
//     props: {
//       articles
//     }
//   }
// }
