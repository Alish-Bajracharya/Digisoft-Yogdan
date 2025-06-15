import React from "react";
import BlogCard from "./BlogCard";

const MemberSection = ({ title, members }) => {
  const isManka = title === "Manka Oil Mill Committee";
  const topOne = members.slice(0, 1);
  const nextTwo = members.slice(1, 3);
  const others = members.slice(3);

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto space-y-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-emerald-600 underline decoration-green-700 decoration-4">
          {title}
        </h2>

        {/* Top Card */}
        {topOne.length > 0 && (
          <div className="flex justify-center">
            {topOne.map((member) => (
              <BlogCard key={member.id} {...member} />
            ))}
          </div>
        )}

        {/* Manka Special Layout */}
        {isManka ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-items-center">
            {members.slice(1).map((member) => (
              <BlogCard key={member.id} {...member} />
            ))}
          </div>
        ) : (
          <>
            {/* 2-Column Layout */}
            {nextTwo.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-3 ml-80  gap-10 justify-items-center">
                {nextTwo.map((member) => (
                  <BlogCard key={member.id} {...member} />
                ))}
              </div>
            )}

            {/* 4-Column Layout */}
            {others.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 justify-items-center">
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
