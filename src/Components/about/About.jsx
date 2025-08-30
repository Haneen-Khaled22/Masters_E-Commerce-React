import { motion } from "framer-motion";
import aboutImg from "../../assets/About.png";
import marginImg from "../../assets/Margin.png";

function About() {
  const backgroundVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="flex flex-col gap-10 mt-20 w-full">
      {/* Section 1 – Hero Image */}
      <motion.section
        className="relative bg-cover bg-center bg-no-repeat overflow-hidden shadow-md rounded-lg mb-6 sm:mb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={backgroundVariants}
      >
        <div className="w-full relative">
          <img src={aboutImg} className="w-full h-[250px] sm:h-[400px] lg:h-[622px] object-cover" alt="About us banner" />
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center px-4 text-center">
            <h1 className="text-lg sm:text-2xl lg:text-3xl text-white mb-2">
              About for Bacola
            </h1>
            <p className="text-white text-sm sm:text-lg">
              WE CAN DO MORE FOR YOU
            </p>
          </div>
        </div>
      </motion.section>

      {/* Section 2 – Content */}
      <div className="bg-white relative px-4 md:px-10 max-w-7xl mx-auto">
        {/* Paragraph */}
        <p className="text-gray-600 mb-6 leading-relaxed text-base md:text-lg">
          At our core, we aim to bring you a seamless online shopping experience
          with a wide range of products. Whether you're upgrading your wardrobe,
          building your dream PC, or hunting for the latest gadgets, we've got
          you covered.
        </p>

        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
          We deliver quality electronics, fashion, and tech essentials{" "}
          <br className="hidden md:block" /> all in one place
        </h1>

        <p className="text-gray-600 mb-10 leading-relaxed text-base md:text-lg">
          Our platform is built for convenience, offering everything from
          stylish clothing to cutting-edge electronics. We carefully select
          products to ensure quality, affordability, and reliability. Whether
          you're upgrading your tech or refreshing your wardrobe, we’ve got you
          covered. Shop with confidence, knowing we’re committed to your
          satisfaction every step of the way.
        </p>

        {/* CEO Section */}
        <div className="flex flex-col lg:flex-row gap-6 items-center">
          <div className="w-full lg:w-1/2">
            <img src={marginImg} className="w-full h-[250px] sm:h-[400px] lg:h-[500px] object-cover rounded-md" alt="CEO" />
          </div>

          <div className="w-full lg:w-1/2 mt-4 lg:mt-0 px-2">
            <h2 className="text-lg sm:text-xl font-medium mb-2">
              Youssef Assal - Basket CEO
            </h2>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
              Led by our visionary CEO, we strive to redefine online shopping
              with trust and innovation
            </h1>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
              Our CEO brings a passion for technology and customer experience to
              everything we do. With a clear vision and hands-on leadership,
              they drive our mission to make smart shopping simple. Their
              leadership empowers our team to stay agile, creative, and focused
              on delivering excellence. Committed to transparency and growth,
              they guide the company with purpose and integrity.
            </p>
          </div>
        </div>

        {/* Floating Div - now relative not fixed top */}
        <div className="w-full md:w-[85%] px-4 sm:px-8 py-6 sm:py-10 bg-white border border-gray-300 rounded-lg shadow-md mx-auto mt-10">
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Our CEO is a forward-thinking leader with a deep passion for
            innovation and customer satisfaction. With a strong background in
            both retail and technology, they bridge the gap between vision and
            execution. Their leadership empowers our team to stay agile,
            creative, and focused on delivering excellence. Committed to
            transparency and growth, they guide the company with purpose and
            integrity.
          </p>
        </div>

        {/* Website Info */}
        <div className="mt-10 sm:mt-16 lg:mt-20 px-2 sm:px-4">
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
            Our website is designed to offer a seamless and intuitive shopping
            experience. With a vast selection ranging from fashion to
            electronics, we cater to every need. Fast load times, secure
            checkout, and responsive design ensure convenience across all
            devices. We continuously optimize to deliver value, variety, and
            satisfaction with every visit.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
