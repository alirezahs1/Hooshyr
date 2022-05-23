import Head from 'next/head'
import Image from 'next/image'
import { Intro, Achivments, Projects, Biography, Education, Skills } from 'components/pages/home-page'
import { Header } from 'components/ui'
import { Footer } from 'components/ui/footer'

export default function Home() {
  return (
    <div className="text-white bg-black">
		<Head>
			<title>Home - Hooshyr</title>
			<link rel="icon" href="/favicon.ico" />
			<meta name="description" content="Hooshyr is a web developer based in Tehran, Iran. He is a passionate about web development." />
			{/* og tags */}
			<meta property="og:title" content="Home - Hooshyr" />
			<meta property="og:description" content="Hooshyr is a web developer based in Tehran, Iran. He is a passionate about web development." />
			<meta property="og:image" content="https://hooshyr.com/media/logo.jpg" />
			<meta property="og:url" content="https://hooshyr.com" />
			<meta property="og:type" content="website" />
			<meta property="og:site_name" content="Hooshyr" />
			<meta property="og:locale" content="en_US" />
			<meta property="og:locale:alternate" content="fa_IR" />
			<meta property="og:locale:alternate" content="fa" />
			<meta property="og:locale:alternate" content="en" />
		</Head>
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
