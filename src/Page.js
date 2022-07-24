import React from 'react'
import {GET_COMPANIES} from './Page.queries'
import {useQuery} from '@apollo/client'
import Name from 'components/Name'
import Size from 'components/Size'
import Sector from 'components/Sector'

export const Page = () => {
  const {loading, error, data: companyData} = useQuery(GET_COMPANIES)

  if (loading) {
    return <span>Loading data...</span>
  }

  if (error) {
    return (
      <span>
        <pre>
          {JSON.stringify(error, null, 2)}
        </pre>
      </span>
    )
  }

  const {companies} = companyData  

  return (
    <div>
      {companies && <Sector companies={companies}/>}
      {companies && <Size companies={companies}/>}
      {companies && <Name companies={companies}/>}
    </div>
)
}

export default Page
