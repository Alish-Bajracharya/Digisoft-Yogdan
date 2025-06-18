import React from "react";
import BlogCard from "./BlogCard";

const MemberSection = ({ title, members }) => {
  const isManka = title === "Manka Oil Mill Committee";
  const topOne = members.slice(0, 1);
  const nextTwo = members.slice(1, 3);
  const others = members.slice(3);

  return (
    <section className="bg-emerald-50 py-20 px-6">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-emerald-600 underline decoration-emerald-500 decoration-4 underline-offset-8">
          {title}
        </h2>

        {/* Top 1 */}
        {topOne.length > 0 && (
          <div className="flex justify-center">
            {topOne.map((member) => (
              <BlogCard key={member.id} {...member} />
            ))}
          </div>
        )}

        {/* Manka Layout */}
        {isManka ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 justify-items-center">
            {members.slice(1).map((member) => (
              <BlogCard key={member.id} {...member} />
            ))}
          </div>
        ) : (
          <>
            {/* 2 cards layout */}
            {nextTwo.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 ml-40 gap-12 justify-center">
                {nextTwo.map((member) => (
                  <BlogCard key={member.id} {...member} />
                ))}
              </div>
            )}

            {/* 4-column layout */}
            {others.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 justify-items-center">
                {others.map((member) => (
                  <BlogCard key={member.id} {...member} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default MemberSection;
