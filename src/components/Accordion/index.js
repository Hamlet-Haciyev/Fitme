import React from "react";

const Accordion = () => {
  return (
    <div id="faq">
      <div className="faq__holder">
        <hr />
        <details className="faq__detail">
          <summary className="faq__summary">
            <span className="faq__question">How do I place an order?</span>
          </summary>
          <p className="faq__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            aperiam nemo nesciunt qui maiores at ab enim placeat illo sapiente.
          </p>
        </details>

        <details className="faq__detail">
          <summary className="faq__summary">
            <span className="faq__question">
              On which days and at what hours does the delivery take place?
            </span>
          </summary>
          <p className="faq__text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos natus
            enim, esse in voluptatum aliquid exercitationem. Suscipit quia cum
            expedita eveniet delectus ullam molestiae est?
          </p>
        </details>

        <details className="faq__detail">
          <summary className="faq__summary">
            <span className="faq__question">
              For how long can I order a diet?
            </span>
          </summary>
          <p className="faq__text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos nam
            placeat obcaecati consequuntur numquam culpa? Commodi rerum sed est
            dicta.
          </p>
        </details>

        <details className="faq__detail">
          <summary className="faq__summary">
            <span className="faq__question">
              Can I change the delivery address?
            </span>
          </summary>
          <p className="faq__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
            quidem! Provident suscipit sit consectetur cupiditate hic nisi
            eveniet quis dicta!
          </p>
        </details>

        <details className="faq__detail">
          <summary className="faq__summary">
            <span className="faq__question">Can I suspend catering?</span>
          </summary>
          <p className="faq__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit modi
            soluta dicta nam sapiente odio sunt laudantium amet aliquid
            praesentium?
          </p>
        </details>
      </div>
    </div>
  );
};

export default Accordion;
