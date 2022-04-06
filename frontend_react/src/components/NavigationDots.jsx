import React from "react";

const NavigationDots = ({ active }) => {
  const appPages = [
    "home",
    "about",
    "work",
    "skills",
    "testimonial",
    "contact",
  ];

  return (
    <div className="app__navigation">
      {appPages.map((item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: "#313BAC" } : {}}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
