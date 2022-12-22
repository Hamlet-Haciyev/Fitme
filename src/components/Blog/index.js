import React from "react";
import clock3 from "../../images/clock3.png";
import sweet from "../../images/sweet.png";
import labtest from "../../images/lab-test.png";
import deliciousPizza from "../../images/delicious-pizza-isolated-white 1.png";
import mandalin from "../../images/Без имени-7 1.png";
const Blog = () => {
  return (
    <section id="blog-main">
      <h2>Blog</h2>
      <div className="vitamin-c">
        <img className="orange" src={mandalin} alt="" />
        <h4>Vitamin C - what has the most vitamin C?</h4>

        <figure className="vitamin-icon">
          <img src={clock3} alt="clock3" />
        </figure>
        <h5>Esther Howard</h5>
        <p>
          Maecenas at bibendum orci, nec gravida elit. Sed viverra in est ac
          consequat. Nulla facilisi. Donec efficitur malesuada scelerisque.
          Praesent luctus, nisi eget viverra pulvinar, dolor sem dapibus dolor,
          vel congue dolor massa vitae dolor. Integer aliquet orci non...
        </p>
      </div>

      <div className="blog-part2">
        <div className="fast-food">
          <img className="fast-food-img" src={deliciousPizza} alt="" />
          <h4>
            Fast food - why should we avoid it? How does it affect our health?
          </h4>
          <p>
            Efficitur malesuada scelerisque. Praesent luctus, nisi eget viverra
            pulvinar, dolor sem dapibus dolor, vel congue dolor massa vitae...
          </p>
          <h5>Jerome Bell</h5>
          <figure className="fast-food">
            <img src={clock3} alt="" />
          </figure>
        </div>

        <div className="test-blood">
          <img className="test-blood-img" src={labtest} alt="labtest" />
          <h4>Blood tests - why should they be done regularly?</h4>
          <h5>Esther Howard</h5>
          <figure className="test-blood">
            <img src={clock3} alt="" />
          </figure>
        </div>

        <div className="blog-sweet">
          <img className="blog-sweet-img" src={sweet} alt="sweet" />
          <h4>Sweets on a diet - can you eat them?</h4>
          <p>
            Efficitur malesuada scelerisque. Praesent luctus, nisi eget viverra
            pulvinar, dolor sem dapibus dolor, vel congue dolor massa vitae...
          </p>
          <h5>Courtney Henry</h5>
          <figure className="blog-sweet">
            <img src={clock3} alt="" />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Blog;
