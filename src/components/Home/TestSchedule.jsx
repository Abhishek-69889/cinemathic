import React from "react";
import TestCard from "../cards/TestCard";

const TestShedule = () => {

  const tests = [
    {
      type: "Weekly",
      date: "14 Oct",
      level: "Intermediate",
      title: "Weekly Test — Algebra",
      details: "30 mins · 20 Qs · Negative marking",
      buttonText: "Start Test →",
      link: "#",
    },
    {
      type: "Full Mock",
      date: "19 Oct",
      level: "Advanced",
      title: "Full Mock — JEE Pattern",
      details: "3 hrs · 75 Qs · All India Rank",
      buttonText: "Start Test →",
      link: "#",
    },
  ];

  return (
    <section
      id="tests"
      className="bg-[var(--background)] text-[var(--text)] transition-colors"
    >
      <div className="max-w-[1220px] mx-auto px-5 sm:px-8 lg:px-2 py-14 sm:py-16 lg:py-20">

        {/* Test cards */}
        {/* Test cards */}
        <div className="mt-10 grid md:grid-cols-2 gap-8">

          {tests.map((test, index) => (
            <TestCard
            key={index}
            test={test}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestShedule;