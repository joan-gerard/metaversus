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
      <div className="relative">
        <About />
        <div className="gradient-03 z-0" />
        <Explore />
      </div>
      <div className="relative">
        <GetStarted />
        <div className="gradient-04 z-0" />
        <WhatsNew />
      </div>

      <World />
      <div className="relative">
        <Insights />
        <div className="gradient-04 z-0" />
        <Feedback />
      </div>

      <Footer />
    </div>
  );
}
