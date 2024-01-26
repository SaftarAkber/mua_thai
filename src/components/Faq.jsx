import React, { useState } from 'react';

const faqData = [
  {
    question: 'How many NFTs are there in all collections?',
    answer: 'The total number of NFTs in all collections varies and is subject to change. Please check the specific collection for the latest information.'
  },
  {
    question: 'How much will an NFT cost?',
    answer: 'The cost of an NFT can vary widely depending on the collection, rarity, and market demand. Some NFTs can sell for just a few dollars, while others can sell for thousands or even millions of dollars.'
  },
  {
    question: 'What is the project\'s purpose?',
    answer: 'Our project aims to create unique and valuable NFTs that can be collected, traded, and used in games and other applications. We believe that NFTs have the potential to revolutionize the way we think about digital ownership and value.'
  },
  {
    question: 'Why focus on tigers?',
    answer: 'Tigers are majestic and powerful animals that have long been admired for their beauty and strength. By focusing on tigers, we hope to create NFTs that are not only valuable but also meaningful and inspiring.'
  },
  {
    question: 'Why choose a fighting game genre?',
    answer: 'We believe that the fighting game genre is a great fit for NFTs because it allows for a wide range of creative and strategic possibilities. By creating a fighting game with NFTs, we hope to offer a unique and engaging experience for players and collectors alike.'
  },
  {
    question: 'How are donations utilized?',
    answer: 'A percentage of the company`s profits is allocated to conservation efforts. Revenue generated in-game will also be donated to relevant organizations.      '
  },
  {
    question: 'How can I get involved?',
    answer: 'You can join our social channels, play our game, and make donations. Change the World with us!'
  }
];

const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const toggleExpanded = (index) => {
    if (index === expandedIndex) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div className="text-white pt-10 bg-center p-24 w-full bg-cover w-full bg-cover h-[100%] bg-[url('/src/17.jpg')]">
      <ul className=" max-w-screen-sm list-none list-disc mx-auto pb-20 pt-5 font-mono space-y-2">
        {faqData.map((faq, index) => (
          <li key={index} className="hover:bg-[#075b0787] bg-[#00000063] font-bold font-sans border-2 p-4 mb-4">
            <button
              className="flex items-center justify-between w-full text-left focus:outline-none"
              onClick={() => toggleExpanded(index)}
            >
              <span className="text-3xl font-medium font-sans text-white hover:text-white">{faq.question}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 transform ${expandedIndex === index ? 'rotate-180' : 'rotate-0'}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {expandedIndex === index && (
              <p className="mt-2 text-white">{faq.answer}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQ;