import React from "react";
import Pretitle from "./Pretitle";
import FaqItem from "./ui/FaqItem";

const faqItemsData = [
  {
    title: "How long does a construction project typically take?",
    description:
      "The duration of a construction project varies greatly depending on the size and complexity of the project. Smaller projects can be completed in a few weeks, while larger ones may take several months or even years. We will work with you to develop a timeline that meets your needs and budget.",
  },
  {
    title: "What is the typical timeline for a construction project?",
    description:
      "The duration of a construction project varies greatly depending on the size and complexity of the project. Smaller projects can be completed in a few weeks, while larger ones may take several months or even years. We will work with you to develop a timeline that meets your needs and budget.",
  },
  {
    title: "What kind of material do you use ?",
    description:
      "We use only the highest quality materials for all of our projects. Our team is experienced in selecting the perfect materials for each project, ensuring that the finished product is both functional and beautiful.",
  },
  {
    title: "Do I need permits for my project  ?",
    description:
      "We use only the highest quality materials for all of our projects. Our team is experienced in selecting the perfect materials for each project, ensuring that the finished product is both functional and beautiful.",
  },
  {
    title: "Can I Make Changes after construction starts ?",
    description:
      "We use only the highest quality materials for all of our projects. Our team is experienced in selecting the perfect materials for each project, ensuring that the finished product is both functional and beautiful.",
  },
  {
    title: "How much will my construction project cost?",
    description:
      "The duration of a construction project varies greatly depending on the size and complexity of the project. Smaller projects can be completed in a few weeks, while larger ones may take several months or even years. We will work with you to develop a timeline that meets your needs and budget.",
  },
  {
    title: "How do you ensure quality and safety on-site ",
    description:
      "We use only the highest quality materials for all of our projects. Our team is experienced in selecting the perfect materials for each project, ensuring that the finished product is both functional and beautiful.",
  },
];

const faqItemsVariant = {
  hidden: {},
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.1, duration: 0.3 }, // staggered animation
  }),
};

const Faq = () => {
  return (
    <section className="pt-12 sm:pt-16 xl:pt-32 px-4 sm:px-0">
      <div className="container mx-auto">
        {/* text */}
        <div className="text-center max-w-[540px] mx-auto mb-8 sm:mb-12 xl:mb-20">
          <Pretitle text="Faq" center />
          <h2 className="text-2xl sm:text-3xl xl:text-4xl font-bold mb-3">Got Questions ? We've Got You Covered</h2>
          <p className="mb-8 sm:mb-11 max-w-[480px] mx-auto text-sm sm:text-base px-4 sm:px-0">
            From project planning to final touches, we've answered the most
            common questions to help you make informed decisions{" "}
          </p>
        </div>
        {/* faq items */}
        <ul className="w-full flex flex-col px-4 sm:px-0">
          {faqItemsData.map((item, index) => {
            return (
              <li key={index}>
                <FaqItem title={item.title} description={item.description} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Faq;
