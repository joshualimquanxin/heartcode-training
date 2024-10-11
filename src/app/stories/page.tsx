"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export default function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-200 via-slate-400 to-slate-600 dark:from-slate-600 dark:via-slate-800 dark:to-slate-950 p-8">
      <div className="w-full h-full py-20">
        <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
          Check out these individuals' stories
        </h2>
        <Carousel items={cards} />
      </div>
    </div>
    
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const Content1 = () => {
    return (
      <>
        {[...new Array(1).fill(1)].map((_, index) => {
          return (
            <div
              key={"dummy-content" + index}
              className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
            >
              <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                <span className="font-bold text-neutral-700 dark:text-neutral-200">
                  His Advice:
                </span>{" "}
                <br/>
                To those who are walking this difficult journey of recovery, Joe has one piece of advice to offer, “Remove your ego, and ask for help.” His shame stemming from ego and pride was what hindered him from reaching out for help, resulting in a full-blown relapse.
              </p>
            </div>
          );
        })}
      </>
    );
  };

const Content2 = () => {
return (
    <>
    {[...new Array(1).fill(1)].map((_, index) => {
        return (
        <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
        >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">
                Finding Salvation:
            </span>{" "}
            <br/>
            It took him 11 years, multiple stints in either prison or the army detention barracks, and a leg amputation for him to overcome his addiction. He ended up admitting himself to a halfway house and finding religion, which helped him to see a different path in life.
            </p>
        </div>
        );
    })}
    </>
);
};

const Content3 = () => {
    return (
      <>
        {[...new Array(1).fill(1)].map((_, index) => {
          return (
            <div
              key={"dummy-content" + index}
              className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
            >
              <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                <span className="font-bold text-neutral-700 dark:text-neutral-200">
                  His Change:
                </span>{" "}
                <br/>
                It still intrigues me how I changed from a person who depended solely on drugs to help strike up conversations with people to someone who now shares genuine concern through heartfelt conversations. Each day, as I try to initiate such exchanges with patients, I am reminded of how exceptionally grateful I should be.
              </p>
            </div>
          );
        })}
      </>
    );
  };

  const Content4 = () => {
    return (
      <>
        {[...new Array(1).fill(1)].map((_, index) => {
          return (
            <div
              key={"dummy-content" + index}
              className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
            >
              <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                <span className="font-bold text-neutral-700 dark:text-neutral-200">
                  Hurt Caused:
                </span>{" "}
                <br/>
                At one point he actually threatened to take his daughter away from me if I didn't give him money for drugs it was really crazy I didn't know at that time was it my brother's speak speaking or the drug speaking.
              </p>
            </div>
          );
        })}
      </>
    );
  };

const Content5 = () => {
return (
    <>
    {[...new Array(1).fill(1)].map((_, index) => {
        return (
        <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
        >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">
                His Advice:
            </span>{" "}
            <br/>
            To those who are walking this difficult journey of recovery, Joe has one piece of advice to offer, “Remove your ego, and ask for help.” His shame stemming from ego and pride was what hindered him from reaching out for help, resulting in a full-blown relapse.
            </p>
        </div>
        );
    })}
    </>
);
};


const data = [
  {
    category: "Joe",
    title: "I know that it’s bad for me… but I just want to move away from the sadness, pain and stress that day",
    src: "/carousel1.png",
    content: <Content1 />,
  },
  {
    category: "Aaron Chew",
    title: "Neglected by his parents and six older siblings, Mr Aaron Chew first began smoking cigarettes at the age of 14",
    src: "/carousel3.png",
    content: <Content2 />,
  },
  {
    category: "Reuben, Senior Assistant Counsellor",
    title: "I felt terribly unwell as I slowly opened my eyes. It took me a while to figure out that I was lying in a hospital bed with one hand cuffed to the side of the bed.",
    src: "/carousel2.png",
    content: <Content3 />,
  },

  {
    category: "Gina, Sister of a Drug Abuser",
    title: "When I was 21 I quit my job so that I could take care of his daughter",
    src: "/carousel4.png",
    content: <Content4 />,
  },
  {
    category: "Sufian, Peer support specialist",
    title: "He realised that his youth had been misspent in prison. “I felt I had no life,” he says. “I wanted my life back.”",
    src: "/carousel5.jpg",
    content: <Content5 />,
  },
];
