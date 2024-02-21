import Head from "next/head";
import Benefits from "../blocks/Benefits";
import Break from "../blocks/Break";
import Epilogue from "../blocks/Epilogue";
import Footer from "../blocks/Footer";
import Header from "../blocks/Header";
import Hero from "../blocks/Hero";
import Highlights from "../blocks/Highlights";
import Notice from "../components/Notice";
import Global from "../styles/global.json";
import { FaChartLine, FaClock, FaCommentsDollar, FaEye } from "react-icons/fa6";

export default function Home() {
  return (
    <div>
      <Head>
        <title>{Global.product}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Notice id="subscribed">Thank you for subscribing</Notice>
      <Header id="top" title="En cours de developpement" />

      <main>
        <Hero
          title="1001 Références : La solution pour booster votre activité."
          subtitle={[
            "Diversifiez votre clientèle ou votre offre de produits grâce à 1001 Références ! Que vous soyez producteur cherchant à élargir votre audience ou distributeur souhaitant étoffer votre catalogue, notre plateforme en ligne vous offre une solution sur mesure.",
            "Pour les nouveaux producteurs, notre plateforme simplifie la communication avec les distributeurs en centralisant tous les échanges. Créez votre vitrine en ligne pour exposer vos produits à de nouveaux clients potentiels, et facilitez la gestion de vos relations commerciales.",
            "Les distributeurs bénéficient quant à eux d'un accès à une large gamme de produits et de fournisseurs, favorisant ainsi la diversification de leur offre. Notre plateforme leur offre également la possibilité de nouer des contacts aisément avec les producteurs et de découvrir des produits innovants.",
            "Optimisez votre activité dès maintenant en rejoignant la communauté 1001 Références !",
            "Inscrivez-vous dès aujourd'hui sur notre newsLetter !",
          ]}
          illustration="/assets/images/logo.jpg"
          subscribePlaceholder="votre@email.com"
          subscribeAction="Inscrivez vous!"
          foot=""
        />

        <Benefits
          background="alternate"
          title="N'hésitez plus, rejoignez dès maintenant la communauté 1001 Références !"
          subtitle=""
          benefits={[
            {
              illustration: "/assets/images/vigneron.jpg",
              title: "Nouveaux Producteurs",
              textList: [
                "Boostez votre communication avec les distributeurs.",
                "Organisez votre communication en un seul outil.",
                "Gagnez en visibilité.",
                "Bénéficiez d'une vitrine sur internet.",
              ],
            },
            {
              illustration: "/assets/images/personne.jpg",
              title: "Producteurs déjà en activité",
              textList: [
                "Centraliser la communication en une seule et même outil.",
                "Faites connaître vos produits à de nouveaux clients",
              ],
            },
            {
              illustration: "/assets/images/epicier.jpg",
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
          illustration="/assets/images/logo.jpg"
          action="Inscrivez vous!"
          onActionClick={() => window.scrollTo({ top: 10, behavior: "smooth" })}
        />

        <Highlights
          title="1001 Références, c'est la solution pour booster votre activité !"
          subtitle="Rejoignez la communauté 1001 Références et boostez votre activité !"
          highlights={[
            {
              illustration: "",
              title: "Simple et efficace",
              text: "Un seul outil pour gérer toute votre communication",
              icon: <FaCommentsDollar className="highlight-icon" size={100} />,
            },
            {
              illustration: "",
              title: "Gain de temps",
              text: "Fini les recherches interminables, trouvez les produits et les producteurs dont vous avez besoin en quelques clics",
              icon: <FaClock className="highlight-icon" size={100} />,
            },
            {
              illustration: "",
              title: "Visibilité accrue",
              text: "Mettez en avant vos produits et développez votre notoriété",
              icon: <FaEye className="highlight-icon" size={100} />,
            },
            {
              illustration: "",
              title: "Nouvelles opportunités",
              text: "Développez votre réseau et accédez à de nouveaux marchés ",
              icon: <FaChartLine className="highlight-icon" size={100} />,
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

        {
          <Epilogue
            title="Ne vous demandez pas si vous en avez besoin, venez rejoindre la communauté 1001 Références !"
            // subtitle="Explain how your solution will solve this problem and ask them to start a free trial, or any other low-key CTA they could take"
            illustration=""
            subscribePlaceholder="votre@email.com"
            subscribeAction="Inscrivez vous!"
          />
        }
      </main>

      <Footer title={Global.product} />
    </div>
  );
}
