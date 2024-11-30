import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import axios from 'axios';
import Footer from '../components/templates/footer';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Navbar } from '../components/templates/navbar';
import { Box } from '../components/atoms/Box';
import { Typography } from '../components/atoms/Typography';
import { MiddlePage } from '../components/atoms/Middlepage';

interface Card {
  title: string;
  description: string;
}

interface HomeProps {
  data: {
    cards: Card[];
  };
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE || ''}/api/data`);
  const data: HomeProps['data'] = response.data;

  return { props: { data } };
};

const Home = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const items = ['Welcome to My Site', 'Explore Amazing Content', 'Learn and Grow with Us'];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <Box customStyles="bg-blue-400 min-h-[100vh]">
      <Navbar />
      <MiddlePage />
      <Footer />
    </Box>
  );
};

export default Home;
