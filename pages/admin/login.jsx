import React from 'react'
import LoginComponent from '../../components/admin/auth/login'
import Layout from '../../components/Layout'

export default function Login() {
  return (
    <Layout  noFooter={true} noNavbar={true}>
<LoginComponent/>


    </Layout>
  )
}
