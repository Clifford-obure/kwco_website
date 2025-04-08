import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";

const LandingBottom = () => {
  const cases = [
    {
      img: "/Images/Kenya police.jpeg",
      date: "17 February, 2021",
      incident: "The Case of  Kenyan Police Brutality",
      title: "Landmark ruling on police use of force in arrests",
      info: "This case addresses police brutality and the limits of force in arrests, setting a significant precedent for the protection of human rights in Kenya.",
      link: "/",
    },
    {
      img: "/Images/OIP (1).jpeg",
      date: "22 August, 2018",
      incident: "Kenya Human Rights Commission v. Attorney General",
      title: "Court orders government to protect human rights defenders",
      info: "This case saw a ruling that enforced the protection of human rights defenders, clarifying the responsibilities of the state to ensure their safety.",
      link: "/",
    },
    {
      img: "/Images/National bank of kenya.jpeg",
      date: "5 July, 2019",
      incident: "National Bank of Kenya v. Gitau",
      title: "Supreme Court ruling on bank loan defaults and collateral",
      info: "This landmark case set a precedent on how banks can enforce loan repayment terms and the rights of debtors regarding collateral and property seizure.",
      link: "/",
    },
    {
      img: "/images/OIP.png",
      date: "30 March, 2020",
      incident: "Matiang’i v. Independent Electoral and Boundaries Commission",
      title: "Case against electoral body over credibility of elections",
      info: "This case challenged the IEBC's conduct in the general elections, focusing on allegations of manipulation and mismanagement of voter registration.",
      link: "/",
    },
  ];

  return (
    <div className="p-4 pt-14 md:px-28 md:pt-20 bg-[#2F4B79] pb-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">
          Recent Trending Cases
        </h1>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {cases.map((caseItem, index) => (
            <motion.div
              key={index}
              className={`flex flex-col lg:flex-row gap-4 pb-8 ${
                index === cases.length - 1
                  ? ""
                  : "border-b border-gray-300 border-solid border-opacity-50"
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-60 h-60 overflow-hidden">
                <img
                  src={caseItem.img}
                  alt="CaseImage"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-sm font-extralight text-white">
                    {caseItem.date}
                  </p>
                  <h2 className="text-xl font-semibold text-white mt-2">
                    {caseItem.incident}
                  </h2>
                  <h3 className="text-sm font-extralight text-white mt-1">
                    {caseItem.title}
                  </h3>
                  <p className="text-sm mt-2 font-extralight text-white">
                    {caseItem.info}
                  </p>
                </div>
                <div className="text-right mt-4 lg:mt-0">
                  <a
                    href={caseItem.link}
                    className="bg-[#CEA252] p-2 rounded-full inline-block hover:bg-yellow-400 h-fit transition duration-300 ease-in-out"
                  >
                    <MdArrowOutward className="text-white text-xl" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#CEA252] h-fit text-white flex text-sm md:text-base items-center p-2 px-4 rounded-full gap-1.5"
          >
            <span>View All Case Studies</span>
            <MdArrowOutward className="text-xl" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default LandingBottom;
