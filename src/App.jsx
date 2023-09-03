import { useState } from "react";

import {
  CustomerReview,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
  Nav,
} from "./sections";

const App = () => (
  <main className="relative">
    <Nav />
    <Hero />
    <PopularProducts />
    <SuperQuality />
    <Services />
    <SpecialOffer />
    <CustomerReview />
    <Subscribe />
    <Footer />
  </main>
);

export default App;
