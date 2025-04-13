import React from 'react'
import ClientPage from './client-page'

export default async function Page() {

  return (
    <div>
      <ClientPage/>
    </div>
  )
}

export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'nl' },
  ];
}