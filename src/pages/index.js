import Head from 'next/head'
import Image from 'next/image'
import { Intro, Achivments, Projects } from 'components/pages/home-page'
import { Header } from 'components/ui'

export default function Home() {
  return (
    <div className="text-white bg-black">
      <Header />
	  <Intro />
	  <Achivments id="achivments" />
	  <Projects />
	  <div className="h-screen"></div>
    </div>
  )
}
