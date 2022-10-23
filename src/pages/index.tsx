import Head from "@modules/common/components/head"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import Layout from "@modules/layout/templates"
import { ReactElement } from "react"
import { NextPageWithLayout } from "types/global"
import Script from "next/script"

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Script id="rocket-chat" strategy="afterInteractive">
        {`
                    // paste the javascript code here
                    // the immediately invoked function is just an example
                    (function() {
                        // ...
                    })();
                    (function(w, d, s, u) {
		w.RocketChat = function(c) { w.RocketChat._.push(c) }; w.RocketChat._ = []; w.RocketChat.url = u;
		var h = d.getElementsByTagName(s)[0], j = d.createElement(s);
		j.async = true; j.src = 'https://learnearnfun.rocket.chat/livechat/rocketchat-livechat.min.js?_=201903270000';
		h.parentNode.insertBefore(j, h);
	})(window, document, 'script', 'https://learnearnfun.rocket.chat/livechat');
                `}
      </Script>
      <Head
        title="Home"
        description="Shop all available models only at the Getany. Worldwide Shipping. Secure Payment."
      />
      <Hero />
      <FeaturedProducts />
    </>
  )
}

Home.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default Home
