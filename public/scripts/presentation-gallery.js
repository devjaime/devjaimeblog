class PresentationGallery extends HTMLElement {
  connectedCallback() {
    if (this.dataset.ready === "true") return;

    this.slides = Array.from(
      this.querySelectorAll("[data-presentation-slide]"),
    );
    this.previousButton = this.querySelector("[data-presentation-previous]");
    this.nextButton = this.querySelector("[data-presentation-next]");
    this.status = this.querySelector("[data-presentation-status]");
    this.controls = this.querySelector("[data-presentation-controls]");

    if (this.slides.length === 0) return;

    this.currentSlide = 0;
    this.dataset.ready = "true";
    this.dataset.enhanced = "true";
    this.setAttribute("tabindex", "0");

    this.previousButton?.addEventListener("click", () => {
      this.showSlide(this.currentSlide - 1);
    });
    this.nextButton?.addEventListener("click", () => {
      this.showSlide(this.currentSlide + 1);
    });
    this.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        this.showSlide(this.currentSlide - 1);
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        this.showSlide(this.currentSlide + 1);
      }
    });

    if (this.slides.length === 1 && this.controls) {
      this.controls.hidden = true;
    }

    this.showSlide(0);
  }

  showSlide(index) {
    this.currentSlide =
      (index + this.slides.length) % this.slides.length;

    this.slides.forEach((slide, slideIndex) => {
      const isCurrent = slideIndex === this.currentSlide;
      slide.hidden = !isCurrent;
      slide.setAttribute("aria-hidden", String(!isCurrent));
    });

    if (this.status) {
      this.status.textContent = `${this.currentSlide + 1} / ${this.slides.length}`;
    }
  }
}

if (!customElements.get("presentation-gallery")) {
  customElements.define("presentation-gallery", PresentationGallery);
}
