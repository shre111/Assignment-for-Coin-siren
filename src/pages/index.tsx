import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import axios from 'axios';
import Footer from '../components/templates/footer';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Navbar } from '../components/templates/navbar';
import { Box } from '../components/atoms/Box';
import { Typography } from '../components/atoms/Typography';
import { MiddlePage } from '../components/templates/Herosection';

interface profile {
  name: string;
  experience: string;
  profile: string;
  flag: string;
  skills: string[];
}

interface HomeProps {
  data: {
    userData: profile[];
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
    <Box className="min-h-[90vh]">
      <Box className="top-section">
        <Navbar />
        <MiddlePage data={data?.userData} />
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;
