import React from 'react'
// import { Link } from 'gatsby'
import '../../node_modules/fork-awesome/css/fork-awesome.min.css'
import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <main>
      <article className='article-body'>
        <div className='home-page-box'>
          <Image />
          <h1 style={{'marginTop': '0rem'}}>John Kane</h1>
          <h3 style={{'marginTop': '0rem'}}>Programmer</h3>
          <div className='brand-box'>
            <div className='brand-link'>
              <p>
                <i className='fa fa-ethereum fa-lg' />
                <a href='http://johnkane.eth'>johnkane.eth</a>
              </p>
            </div>
            <div className='brand-link'>
              <p>
                <i className='fa fa-github fa-lg' />
                <a href='https://github.com/kanej'>Github</a>
              </p>
            </div>
            <div className='brand-link'>
              <p>
                <i className='fa fa-scuttlebutt fa-lg' />
                <a href='ssb:@ZRgNSa/KMk+bNPITor1AQVr0S0q+Fs48zaIn4s8WB6A=.ed25519
                '>Scuttlebutt</a>
              </p>
            </div>
            <div className='brand-link'>
              <p>
                <i className='fa fa-twitter fa-lg' />
                <a href='https://twitter.com/john_kane'>Twitter</a>
              </p>
            </div>
          </div>
        </div>
      </article>
    </main>
  </Layout>
)

export default IndexPage
