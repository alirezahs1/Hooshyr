import Head from 'next/head'
import Image from 'next/image'
import { Intro, Achivments, Projects, Biography, Education, Skills } from 'components/pages/home-page'
import { Header } from 'components/ui'
import { Footer } from 'components/ui/footer'

export default function Home() {
  return (
    <div className="text-white bg-black">
      <Header />
	  <Intro />
	  <Achivments id="achivments" />
	  <Projects />
	  <Biography />
	  {/* <Education /> */}
	  <Skills />
	  <Footer />
    </div>
  )
}
