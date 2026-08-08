import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Services from "./components/Services";
import Solutions from "./components/Solutions";
import Clients from "./components/Clients";
import LeadForm from "./components/LeadForm";

export default function Home() {
  return (
    <>
      <Hero />
      <About/>
      <Products />
      <Services />
      <Solutions />
      <Clients />
      <LeadForm />
    </>
  );
}
