import aboutImg from "../../assets/About.png";
import marginImg from "../../assets/Margin.png";

function About() {
  return (
    <div className="flex flex-col gap-10  w-full">
      {/* Section 1 – Hero Image */}

      <div className="w-full relative">
        <img
          src={aboutImg}
          className="w-full h-[250px] sm:h-[400px] lg:h-[622px] object-cover"
          alt="About us banner"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-lg sm:text-2xl lg:text-3xl text-white mb-2">
            About for Bacola
          </h1>
          <p className="text-white text-sm sm:text-lg">
            WE CAN DO MORE FOR YOU
          </p>
        </div>
      </div>

      {/* Section 2 – Content */}
      <div className="bg-white relative px-4 md:px-10 max-w-7xl mx-auto">
        {/* Paragraph */}
        <p className="text-gray-600 mb-6 leading-relaxed text-base md:text-lg">
          In nec purus eget neque accumsan finibus. Duis condimentum elit ut
          libero commodo iaculis. Donec augue diam, tristique et ultricies nec,
          consectetur quis enim. Nullam id rutrum ex. Aliquam a lectus id lacus
          rhoncus dapibus non ac justo. Vivamus lacinia vestibulum metus in
          dapibus. Vestibulum sit amet sollicitudin enim. Ut id interdum turpis.
          Curabitur porta auctor quam, pretium facilisis nisl. Pellentesque
          efficitur elit ante, vel vulputate tortor blandit nec.
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
          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <img
              src={marginImg}
              className="w-full h-[300px] sm:h-[400px] lg:h-[600px] object-cover rounded-md"
              alt="CEO"
            />
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2 mt-4 lg:mt-0 px-2">
            <h2 className="text-lg sm:text-xl font-medium mb-2">
              Rachel Leonard - Bacola CEO
            </h2>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
              Duis convallis luctus pretium. Pellentesque habitant morbi
            </h1>
            <p
              className="text-gray-600 text-sm sm:text-base leading-snug sm:leading-relaxed mb-2 sm:mb-4 max-w-prose px-3 sm:px-6 
   max-h-40 sm:max-h-none overflow-hidden sm:overflow-visible"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
              <br />
              <br />
              In fermentum mi ut sapien semper, a sagittis lorem vulputate.
              Integer gravida, dui eget aliquet tempus, turpis orci vehicula
              ipsum, eget porttitor sapien tortor at neque. Cras id pulvinar
              lacus, ac volutpat neque. Ut at magna id justo bibendum lobortis.
              Integer tortor nulla, ultricies et nisi sit amet, interdum dictum
              felis. In semper laoreet dui vitae pharetra. Etiam sit amet
              molestie nulla, eu efficitur orci. Praesent rutrum ante justo,
              eget malesuada ante ornare ac. Ut dignissim blandit urna, eget
              euismod leo rhoncus nec. Vestibulum ante ipsum primis in faucibus
              orci luctus et ultrices posuere cubilia curae; Quisque lobortis
              libero ante. Nullam in feugiat erat. Aenean sed justo dapibus,
              sodales nisi ut, fringilla lorem. Vestibulum in orci ac nisl
              condimentum fermentum at et sem. Curabitur fermentum dolor eu
              lacus consectetur varius.
            </p>
          </div>
        </div>

        {/* Floating Div */}
        <div
          className="
    w-[95%] sm:w-[85%] lg:w-[75%]
    px-4 sm:px-8 py-6 sm:py-10 
    bg-white border border-gray-300 rounded-lg shadow-md 
    mx-auto mt-6 sm:mt-10
    relative lg:absolute lg:top-[70%] lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:z-10
  "
        >
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            In nec purus eget neque accumsan finibus. Duis condimentum elit ut
            libero commodo iaculis. Donec augue diam, tristique et ultricies
            nec, consectetur quis enim. Nullam id rutrum ex. Aliquam a lectus id
            lacus rhoncus dapibus non ac justo. Vivamus lacinia vestibulum metus
            in dapibus. Vestibulum sit amet sollicitudin enim. Ut id interdum
            turpis. Curabitur porta auctor quam, pretium facilisis nisl.
            Pellentesque efficitur elit ante, vel vulputate tortor blandit nec.
          </p>
        </div>

        {/* Website Info */}
        <div className="mt-[360px] md:mt-[280px] lg:mt-[150px]  sm:mt-16 px-2 sm:px-4">
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
