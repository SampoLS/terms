import { memo, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Breadcrumbs = memo(({ path, length }) => {
  const ref = useRef(null);
  // To hold the last index.
  let lastIndex = 0;
  // Add the active class to next click element and remove the active class of the last click.
  const addStyle = (anchorLists, i) => {
    anchorLists[i].classList.add("active");
    anchorLists[lastIndex].classList.remove("active");
    lastIndex = i;
    if (anchorLists[i].classList) {
      anchorLists[i].classList.add("active");
    }
  };
  useEffect(() => {
    // Get the list of a elements.
    const anchorLists = ref.current.childNodes;
    for (let i = 0; i < anchorLists.length; i++) {
      anchorLists[i].addEventListener("click", () => {
        // Reset the scroll position to the top left of the document.
        window.scroll(0, 0);
        addStyle(anchorLists, i);
      });
    }
  });
  // Calculate the number of the total pages.
  const totalPages = length / 15;
  // For holding the a link element.
  let links = [];
  // For storing the calculated the paths based on the number of total pages.
  const subPath = [];
  // Do a loop
  for (let i = 0; i < Math.ceil(totalPages); i++) {
    subPath.push("p" + (i + 1));
    const link = (
      <NavLink
        to={subPath[i] === "p1" ? `/${path}` : `/${path}/${subPath[i]}`}
        key={i}
      >
        {i + 1}
      </NavLink>
    );
    links.push(link);
  }
  return (
    <Footer>
      <section ref={ref} id="breadcrumbs">
        {links}
      </section>
    </Footer>
  );
});

const Footer = styled.footer`
  section {
    width: 90%;
    height: 100px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    a {
      width: 40px;
      height: 30px;
      background: #eee;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      font-family: "Segoe UI";
      &:hover {
        cursor: pointer;
      }
    }
    .active {
      background-color: #333;
      color: white;
    }
  }
`;
export default Breadcrumbs;
