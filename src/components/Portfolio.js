import "./portfolio.scss";
var $ = require("jquery");
var jQueryBridget = require("jquery-bridget");

function Portfolio({ id }) {
  var Isotope = require("isotope-layout");
  jQueryBridget("isotope", Isotope, $);
  var $grid = $(".portfolio-projects").isotope({
    layoutMode: "fitRows",
    itemSelector: ".portfolio-projects-item",
  });
  $(".button-group").each(function (i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on("click", "button", function () {
      $buttonGroup.find(".is-checked").removeClass("is-checked");
      $(this).addClass("is-checked");
    });
  });
  $(".portfolio-filters").on("click", "button", function () {
    var filterValue = $(this).attr("data-filter");
    $grid.isotope({ filter: filterValue });
  });
  return (
    <section className="section-portfolio" id={id}>
      <h2>Portfolio</h2>
      <div className="portfolio-block-holder">
        <div className="portfolio-filters button-group" id="filters">
          <button
            className="portfolio-filter-all button is-checked"
            data-filter="*"
          >
            All
          </button>
          <button className="portfolio-filter-code button" data-filter=".code">
            Code
          </button>
          <button className="portfolio-filter-ui button" data-filter=".ui">
            UI
          </button>
        </div>
        <div className="portfolio-projects">
          <div
            className="code portfolio-projects-item portfolio-projects-item-1"
            data-category="code"
          >
            <div className="bubble-block">
              <h4>Project 1</h4>
              <p>
                Donec pede, rhoncus ut, imperdiet a, venenatis vitae, justo.
                Nullam dictum felis eu pede mollis{" "}
              </p>
              <a href="https://precious-tarsier-4aa7d8.netlify.app">
                View resource
              </a>
            </div>
          </div>
          <div
            className="portfolio-projects-item portfolio-projects-item-2 ui"
            data-category="ui"
          >
            <div className="bubble-block">
              <h4>Project 2</h4>
              <p>
                Donec pede, rhoncus ut, imperdiet a, venenatis vitae, justo.
                Nullam dictum felis eu pede mollis{" "}
              </p>
              <a href="https://precious-tarsier-4aa7d8.netlify.app">
                View resource
              </a>
            </div>
          </div>
          <div
            className="portfolio-projects-item portfolio-projects-item-3 code"
            data-category="code"
          >
            <div className="bubble-block">
              <h4>Project 3</h4>
              <p>
                Donec pede, rhoncus ut, imperdiet a, venenatis vitae, justo.
                Nullam dictum felis eu pede mollis{" "}
              </p>
              <a href="https://precious-tarsier-4aa7d8.netlify.app">
                View resource
              </a>
            </div>
          </div>
          <div
            className="portfolio-projects-item portfolio-projects-item-4 ui"
            data-category="ui"
          >
            <div className="bubble-block">
              <h4>Project 4</h4>
              <p>
                Donec pede, rhoncus ut, imperdiet a, venenatis vitae, justo.
                Nullam dictum felis eu pede mollis{" "}
              </p>
              <a href="https://precious-tarsier-4aa7d8.netlify.app">
                View resource
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
