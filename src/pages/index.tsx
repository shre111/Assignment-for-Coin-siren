import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import axios from 'axios';
import Footer from '../components/footer';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

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

  // Slide the items every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length); // Loop through items
    }, 5000); // Change item every 5 seconds

    return () => clearInterval(interval); // Clean up on component unmount
  }, [items.length]);

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="bg-darkBg text-white min-h-screen">
        {data.cards.map((card) => (
          <div key={card.title} className="bg-darkCard p-4 m-4 rounded-lg shadow-lg">
            <h1 className="text-xl font-bold">{card.title}</h1>
            <p>{card.description}</p>
          </div>
        ))}
        <div className="text-center">
          {/* Title with FadeIn effect */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }} // FadeIn duration
            className="text-4xl font-bold">
            sdfasdfsdafdsfdfdsf
          </motion.h1>

          {/* Subtitle with FadeIn effect, with a delay */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }} // 300ms delay
            className="text-xl text-gray-600">
            afsfsadfsdafasdfdsaf
          </motion.h2>
        </div>

        {/*FadeInUp(duration 500ms)*/}
        <div className="text-center">
          {/* Title with FadeInUp effect */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }} // Start with opacity 0 and slightly down
            animate={{ opacity: 1, y: 0 }} // FadeIn and move to the normal position
            transition={{ duration: 0.5 }} // Duration of 500ms
            className="text-4xl font-bold">
            qwewq
          </motion.h1>

          {/* Subtitle with FadeInUp effect, with a delay */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }} // Start with opacity 0 and slightly down
            animate={{ opacity: 1, y: 0 }} // FadeIn and move to the normal position
            transition={{ duration: 0.5, delay: 0.3 }} // Duration 500ms with 300ms delay
            className="text-xl text-gray-600">
            qwqwqwqwqwqwqw
          </motion.h2>
        </div>

        {/*FadeInUp(500ms)*/}
        <div className="text-center">
          {/* Title with FadeInUp effect */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }} // Start with opacity 0 and move it down a bit
            animate={{ opacity: 1, y: 0 }} // FadeIn and move to the normal position (y: 0)
            transition={{ duration: 0.5 }} // Duration of 500ms
            className="text-4xl font-bold">
            tytryrty
          </motion.h1>

          {/* Subtitle with FadeInUp effect, with a delay */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }} // Start with opacity 0 and move it down a bit
            animate={{ opacity: 1, y: 0 }} // FadeIn and move to the normal position (y: 0)
            transition={{ duration: 0.5, delay: 0.3 }} // Delay of 300ms before animation
            className="text-xl text-gray-600">
            tyhfghfhgfghfgjhfgj
          </motion.h2>
        </div>

        {/* fade in 3 at once(500ms)*/}
        <div className="text-center space-y-4">
          {/* Title with FadeIn effect */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }} // 500ms fade-in duration
            className="text-4xl font-bold">
            sdf
          </motion.h1>

          {/* Subtitle with FadeIn effect */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }} // 500ms fade-in duration
            className="text-xl text-gray-600">
            hjhgjhgjhgjhgj
          </motion.h2>

          {/* Description with FadeIn effect */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }} // 500ms fade-in duration
            className="text-base text-gray-800">
            hjhgjhjhgjhjhj hjhgjhgjhgj ghjhgjhjhgjhg jghjhgjhgj
          </motion.p>
        </div>

        {/*fadeIn(500ms), Slides to the left by one every 5 seconds*/}
        <div className="overflow-hidden">
          <motion.div
            className="flex"
            initial={{ opacity: 0, x: 20 }} // FadeIn and start slightly to the right
            animate={{ opacity: 1, x: 0 }} // FadeIn and slide to the original position
            transition={{ duration: 0.5 }} // Duration for the fadeIn and slide
          >
            {/* Display the current item */}
            <motion.div
              key={currentIndex} // Key to trigger the re-render on index change
              initial={{ opacity: 0, x: 20 }} // Slide in from the right
              animate={{ opacity: 1, x: 0 }} // Slide back to the left
              transition={{ duration: 0.5 }} // Duration of 500ms for the fadeIn and slide
              className="flex-shrink-0 w-full">
              <h1 className="text-4xl font-bold text-center">{items[currentIndex]}</h1>
            </motion.div>
          </motion.div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Home;
