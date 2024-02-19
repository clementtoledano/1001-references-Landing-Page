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

const LOREM = `
  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it to make a type
  specimen book.
`;

export default function Home() {
  return (
    <div>
      <Head>
        <title>{Global.product}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Notice id="subscribed">Thank you for subscribing</Notice>
      <Header id="top" title={Global.product} />

      <main>
        <Hero
          title={Global.product}
          subtitle="
          1001 Références : La solution pour booster votre activité
          Faites connaître vos produits à de nouveaux clients et développez votre réseau !
          
          1001 Références est une plateforme unique qui met en relation producteurs et distributeurs de produits alimentaires.
          
          Que vous soyez producteur ou distributeur, 1001 Références a la solution pour vous :
          
          Producteurs :
          
          Boostez votre communication avec les distributeurs
          Organisez votre communication en un seul outil
          Gagnez en visibilité et faites connaître vos produits à de nouveaux clients
          Bénéficiez d'une vitrine sur internet
          Distributeurs :
          
          Accédez à une large gamme de produits et de producteurs
          Facilitez la prise de contact avec les producteurs
          Enrichissez vos cartes et proposez des produits innovants à vos clients
          Développez votre activité en découvrant de nouveaux produits
          N'hésitez plus, rejoignez dès maintenant la communauté 1001 Références !
          
          Découvrez les avantages de 1001 Références :
          
          Simple et efficace : Un seul outil pour gérer toute votre communication
          Gain de temps : Fini les recherches interminables, trouvez les produits et les producteurs dont vous avez besoin en quelques clics
          Visibilité accrue : Mettez en avant vos produits et développez votre notoriété
          Nouvelles opportunités : Développez votre réseau et accédez à de nouveaux marchés
          1001 Références, c'est la solution pour booster votre activité !
          
          Inscrivez-vous dès aujourd'hui sur notre newsLetter !"
          illustration=""
          subscribePlaceholder="you@email.com"
          subscribeAction="When is it ready?"
          foot="Rejoignez la communauté 1001 Références et boostez votre activité !

          #1001references #producteurs #distributeurs #alimentaire #reseau #communication #visibilite #developpement"
        />

        <Benefits
          background="alternate"
          title="Headline that describes how your product solves the problem"
          subtitle="Start by defining the pain your customer has right now, for example: clients not paying their invoices. Then write how your solution solves this problem for your customers."
          benefits={[
            {
              illustration: "",
              title: "Main benefit of your product",
              text: "Brief explanation of why and how this benefit will help your customers",
            },
            {
              illustration: "",
              title: "Main benefit of your product",
              text: "Brief explanation of why and how this benefit will help your customers",
            },
            {
              illustration: "",
              title: "Main benefit of your product",
              text: "Brief explanation of why and how this benefit will help your customers",
            },
          ]}
        />

        <Break
          title="Risk Reduction: Try Product free for 14 days"
          subtitle="This is an in-betwen CTA for visitors that already got convinced."
          illustration=""
          action="When is it ready?"
          onActionClick={() =>
            window.scrollTo({ top: 99999, behavior: "smooth" })
          }
        />

        <Highlights
          title="Highlights of your product"
          subtitle="Explain why your solution deserves attention"
          highlights={[
            {
              illustration: "",
              title:
                "Now go deeper into what your product offers. Word it as benefits, not as features",
              text: "“Save your favorite links” is a feature. “Never lose your favorite websites again” is a benefit. Users don’t care about your product, they only care about what’s in it for them.",
            },
            {
              illustration: "",
              title:
                "Now go deeper into what your product offers. Word it as benefits, not as features",
              text: "“Save your favorite links” is a feature. “Never lose your favorite websites again” is a benefit. Users don’t care about your product, they only care about what’s in it for them.",
            },
            {
              illustration: "",
              title:
                "Now go deeper into what your product offers. Word it as benefits, not as features",
              text: "“Save your favorite links” is a feature. “Never lose your favorite websites again” is a benefit. Users don’t care about your product, they only care about what’s in it for them.",
            },
          ]}
        />

        <Features
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
        />

        <Epilogue
          title="Ask if your visitor wants to solve problem X today"
          subtitle="Explain how your solution will solve this problem and ask them to start a free trial, or any other low-key CTA they could take"
          illustration=""
          subscribePlaceholder="you@email.com"
          subscribeAction="When is it ready?"
        />
      </main>

      <Footer title={Global.product} />
    </div>
  );
}
