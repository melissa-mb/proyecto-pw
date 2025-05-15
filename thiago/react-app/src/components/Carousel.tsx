export default function Carousel() {
  return (
    <div className="container">
      <div id="carouselSection" className="carousel slide mt-4" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselSection"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"></button>
          <button
            type="button"
            data-bs-target="#carouselSection"
            data-bs-slide-to="1"
            aria-label="Slide 2"></button>
          <button
            type="button"
            data-bs-target="#carouselSection"
            data-bs-slide-to="2"
            aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="5000">
            <img
              src="/carousel/titanfall.jpg"
              className="d-block w-100"
              style={{ height: "800px" }}
            />
          </div>
          <div className="carousel-item" data-bs-interval="5000">
            <img
              src="/carousel/infinityblade.jpg"
              className="d-block w-100"
              style={{ height: "800px" }}
            />
          </div>
          <div className="carousel-item" data-bs-interval="5000">
            <img
              src="/carousel/ironsight.jpg"
              className="d-block w-100"
              style={{ height: "800px" }}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselSection"
          data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselSection"
          data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}
