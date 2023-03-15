import React from 'react'
import Head from 'next/head'
import Script from 'next/script'
import AdminProjectsComponent from '../../components/admin/projects/allProjects'

export default function AdminProjects() {
  return (
    <div>
<Head>

<Script
onLoad={()=>console.log('LOADED PLUGINS FILE 🔸️🔷️🔶️▫️')}

src="/assets/js/plugins.js" async   strategy='lazyOnload' ></Script>




<Script 

onLoad={()=>console.log('LOADED MAIN FILE 🔸️🔷️🔶️▫️')}
type="text/javascript" src="/assets/js/main.js" async  strategy='lazyOnload'   ></Script>

</Head>


<AdminProjectsComponent/>



    </div>
  )
}
