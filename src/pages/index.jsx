import React from "react";
import {
  Hero,
  Card,
  CardSwipper,
  CardVideo,
  Testimonial
} from '../components';
import MainLayout from "@/layouts/mainLayout";


const Home = () => {

  return (
    <MainLayout>
      <Hero />
      <Card />
      <CardSwipper />
      <CardVideo />
      {/* <Testimonial/> */}
    </MainLayout>
  )
}

export default Home;
