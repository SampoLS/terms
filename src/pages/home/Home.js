import styled from "styled-components";
import Card from "../../components/Card";
import { card } from "./card";

// Showing the home page, the single card
const Home = () => {
  return (
    <>
      <Container>
        <section className="term-section">
          {card.map((data) => {
            const { id, title, path, text } = data;
            return <Card key={id} title={title} path={path} text={text} />;
          })}
        </section>
      </Container>
    </>
  );
};

export default Home;

const Container = styled.div`
  width: 100%;
  .term-section {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    grid-auto-rows: 100px;
    gap: 0.4rem;
    font-size: 0.875rem;
    font-family: Arial, Helvetica, sans-serif;
  }
  .term {
    padding: 0 15px;
    border: 1px solid white;
    box-shadow: 1px 1px 5px #ddd;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .term h3 {
    font-size: 18px;
    color: #555;
  }
  .term p {
    padding-top: 0.2rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    line-height: 1.1rem;
    font-size: 14px;
  }
  .term a {
    color: #333;
  }
`;
