import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { HeroSection, Navbar, Footer } from '../components/templates';
import { Box } from '../components/atoms';
import axios from 'axios';

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
  const response = await axios.get(`https://assignment-for-coin-siren.vercel.app/api/data`);
  const data: HomeProps['data'] = response.data;

  return { props: { data } };
};

const Home = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <Box className="min-h-[90vh]">
      <Box className="top-section relative">
        <Navbar />
        <HeroSection data={data?.userData} />
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;
