import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <section className='landing' style={{ backgroundImage: 'url(/Rwanda.jpg)' }}>
        <div>
          <h1>Buy and Sell Online in Kigali, Rwanda</h1>
          <p>People use our program to find amazing classified listings in Kigali. Are you a visitor? It can also help you to find what you are are searching for.
            <div className='search'>
              <input type="text" id="productName" name="productName" />
              <input type="text" id="location" name="location" />
              <input type="text" id="category" name="category" />
              <button>Search</button>
            </div>
          </p>
        </div>
      </section>
    </>
  )
}
