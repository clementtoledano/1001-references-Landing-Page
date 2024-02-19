import Head from "next/head";
import Benefits from "../blocks/Benefits";
import Break from "../blocks/Break";
import Epilogue from "../blocks/Epilogue";
import Features from "../blocks/Features";
import Footer from "../blocks/Footer";
import Header from "../blocks/Header";
import Hero from "../blocks/Hero";
import Highlights from "../blocks/Highlights";
import Notice from "../components/Notice";
import Global from "../styles/global.json";

export default function Home() {
  return (
    <div>
      <Head>
        <title>{Global.product}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Notice id="subscribed">Thank you for subscribing</Notice>
      {/* <Header id="top" title={Global.product} /> */}

      <main>
        <Hero
          title="1001 Références : La solution pour booster votre activité."
          subtitle="        
          Faites connaître vos produits à de nouveaux clients et développez votre réseau !
          
          1001 Références est une plateforme unique qui met en relation producteurs et distributeurs de produits alimentaires.
          
          Que vous soyez producteur ou distributeur, 1001 Références a la solution pour vous !
          
          

          
          Inscrivez-vous dès aujourd'hui sur notre newsLetter !"
          illustration=""
          subscribePlaceholder="you@email.com"
          subscribeAction="Inscrivez vous!"
          foot=""
        />

        <Benefits
          background="alternate"
          title="N'hésitez plus, rejoignez dès maintenant la communauté 1001 Références !"
          subtitle=""
          benefits={[
            {
              illustration: "./../../public/vigneron.jpg",
              title: "Nouveaux Producteurs",
              textList: [
                "Boostez votre communication avec les distributeurs.",
                "Organisez votre communication en un seul outil.",
                "Gagnez en visibilité.",
                "Bénéficiez d'une vitrine sur internet.",
              ],
            },
            {
              illustration: "/public/personne.jpg",
              title: "Producteur déjà en activité",
              textList: [
                "Centraliser la communication en une seule et même outil.",
                "Faites connaître vos produits à de nouveaux clients",
              ],
            },
            {
              illustration: "",
              title: "Distributeurs",
              textList: [
                "Accédez à une large gamme de produits et de producteurs.",
                "Facilitez la prise de contact avec les producteurs.",
                "Enrichissez vos cartes et proposez des produits innovants à vos clients.",
                "Développez votre activité en découvrant de nouveaux produits.",
              ],
            },
          ]}
        />

        <Break
          title="Pour être informé des avancées du projet !"
          subtitle="N'hésitez plus, rejoignez dès maintenant la communauté 1001 Références !"
          illustration=""
          action="Inscrivez vous!"
          onActionClick={() =>
            window.scrollTo({ top: 99999, behavior: "smooth" })
          }
        />

        <Highlights
          title="1001 Références, c'est la solution pour booster votre activité !"
          subtitle="Rejoignez la communauté 1001 Références et boostez votre activité !"
          highlights={[
            {
              illustration: "",
              title: "Simple et efficace",
              text: "Un seul outil pour gérer toute votre communication",
            },
            {
              illustration: "",
              title: "Gain de temps",
              text: "Fini les recherches interminables, trouvez les produits et les producteurs dont vous avez besoin en quelques clics",
            },
            {
              illustration: "",
              title: "Visibilité accrue",
              text: "Mettez en avant vos produits et développez votre notoriété",
            },
            {
              illustration: "",
              title: "Nouvelles opportunités",
              text: "Développez votre réseau et accédez à de nouveaux marchés ",
            },
          ]}
        />

        {/* <Features
          background="alternate"
          title="But wait, there is more"
          subtitle="Describe the full extent of your product"
          features={[
            {
              illustration: "",
              title: "Product feature",
              text: "Brief explanation of why and how this feature will help your customers",
            },
            {
              illustration: "",
              title: "Product feature",
              text: "Brief explanation of why and how this feature will help your customers",
            },
            {
              illustration: "",
              title: "Product feature",
              text: "Brief explanation of why and how this feature will help your customers",
            },
            {
              illustration: "",
              title: "Product feature",
              text: "Brief explanation of why and how this feature will help your customers",
            },
            {
              illustration: "",
              title: "Product feature",
              text: "Brief explanation of why and how this feature will help your customers",
            },
            {
              illustration: "",
              title: "Product feature",
              text: "Brief explanation of why and how this feature will help your customers",
            },
          ]}
        /> */}

        {/* <Epilogue
          title="Ask if your visitor wants to solve problem X today"
          subtitle="Explain how your solution will solve this problem and ask them to start a free trial, or any other low-key CTA they could take"
          illustration=""
          subscribePlaceholder="you@email.com"
          subscribeAction="Inscrivez vous!"
        /> */}
      </main>

      <Footer title={Global.product} />
    </div>
  );
}
