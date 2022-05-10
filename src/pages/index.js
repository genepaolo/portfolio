import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import About from '../components/About/About';
import { Layout } from '../layout/Layout';

import Aos from "aos";
import "aos/dist/aos.css"
import {useEffect} from "react";

const Home = () => {
  useEffect(()=>{
    Aos.init({duration: 1000});
  }, []);

  return (
    <Layout>
      <Hero />
      <About dataaos="fade-left"/>
      <Technologies dataaos="fade-left"/>
      <Projects dataaos="fade-left" />
    </Layout>
  );
};

export default Home;
