import Head from 'next/head'
import Header from '../components/Header'
import response from '../response'
import {useRouter} from 'next/router'
import SearchResults from '../components/SearchResults'
function Search({results}) {
  const router = useRouter()
  console.log(results)
  return (
    <div>
        <Head>
            <title>{router.query.q} - Google Search</title>
            <link rel="icon" href="/logo.ico" />
        </Head>
        <Header />
        <SearchResults results={results}/>
    </div>
  )
}

export default Search

export async function getServerSideProps(context){
  const useDummyData  = true
  const startIndex = context.query.start || '0'
  const key = process.env.API_KEY
  
  const data = useDummyData ? response : await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${key}&cx=${process.env.CONTEXT_KEY}
    &q=${context.query.q}&start=${startIndex}`
  ).then(response=>response.json())

  return{
    props:{
      results : data
    }
  }
}