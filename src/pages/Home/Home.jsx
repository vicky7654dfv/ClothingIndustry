import React from 'react'
import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner'
import Companies from '../../components/Companies/Companies'
import Grid1 from '../../components/Grid1/Grid1'
import Total from '../../components/Total/Total'

export default function Home() {
  return (
    <>
     <Banner />  
     <Companies /> 
     <Grid1 />
     <Total />
    </>
  )
}
