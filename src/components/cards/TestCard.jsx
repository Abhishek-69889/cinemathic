import React from "react";

const TestCard = ({ test }) => {
  return (
    <div className="border border-[var(--border-strong)] rounded-3xl bg-[var(--card)] p-6 sm:p-8">

      {/* Top information */}
      <div className="flex justify-between items-center gap-3">

        <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.15em] border cinemathic-border bg-[var(--background)] rounded-full px-3 py-1.5">
          {test.type} · {test.date}
        </div>

        <div className="text-[9px] uppercase tracking-wider cinemathic-dark rounded-full px-3 py-1.5">
          {test.level}
        </div>

      </div>

      {/* Test title */}
      <h2 className="serif text-[28px] sm:text-[30px] mt-6">
        {test.title}
      </h2>

      {/* Test details */}
      <p className="mt-2 text-[13px] text-[var(--text-muted)]">
        {test.details}
      </p>

      {/* Button */}
      <div className="mt-8 flex items-center gap-3">

        <a
          href={test.link}
          className="cinemathic-button px-6 py-3 rounded-full text-[13px] font-medium hover:opacity-90 transition"
        >
          {test.buttonText}
        </a>

      </div>

    </div>
  );
};

export default TestCard;