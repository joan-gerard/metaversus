import type { V2_MetaFunction } from "@remix-run/node";
import {
  Navbar,
  About,
  Explore,
  Feedback,
  GetStarted,
  Hero,
  Insights,
  WhatsNew,
  World,
  Footer,
} from "../organisms";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Metaversus" },
    { name: "description", content: "Welcome to Metaversus" },
  ];
};

export default function Index() {
  return (
    <div className="bg-primary-black overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Explore />
      <GetStarted />
      <WhatsNew />
      <World />
      <Insights />
      <Feedback />
      <Footer />
    </div>
  );
}
