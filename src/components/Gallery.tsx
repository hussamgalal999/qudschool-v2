import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Gallery = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1611996575749-79a3a250f948?w=800&q=80",
      title: "Kids Learning Robotics"
    },
    {
      url: "https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?w=800&q=80",
      title: "AI Workshop"
    },
    {
      url: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&q=80",
      title: "Coding Class"
    },
    {
      url: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&q=80",
      title: "Design Thinking"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Learning in Action</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See how our students are transforming their future through technology
          </p>
        </motion.div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="gallery-swiper"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative rounded-xl overflow-hidden shadow-lg"
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <h3 className="text-white text-xl font-semibold">{image.title}</h3>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Gallery;