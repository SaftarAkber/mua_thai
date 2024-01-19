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
      <div className="text-white bg-[#161616] py-20 p-4">
        <h2 className="text-5xl text-[#ECDBBA] text-center font-medium m-8">FAQ</h2>
        <ul className="list-inside mx-auto max-w-screen-sm list-none list-disc font-mono space-y-2">
          {faqData.map((faq, index) => (
            <li key={index} className="border-double bg-[#6D9886] font-bold font-sans border-4 border-orange-500 rounded-lg p-4 mb-4">
              <button
                className="flex items-center justify-between w-full text-left text-orange-800 hover:text-white focus:outline-none"
                onClick={() => toggleExpanded(index)}
              >
                <span className="text-3xl font-medium font-sans decoration-orange-500">{faq.question}</span>
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