import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { fetchImages } from "./js/pixabay-api";
import { renderImages, clearGallery } from "./js/render-functions";

const form = document.querySelector(".search-form");
const loader = document.querySelector(".loader");

function showLoader() {
  loader.classList.remove("is-hidden");
}

function hideLoader() {
  loader.classList.add("is-hidden");
}
form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const query = event.target.elements["search-text"].value.trim();

  if (!query) return;

  clearGallery();
  showLoader();

  try {
    const data = await fetchImages(query);

    if (data.hits.length === 0) {
      iziToast.error({
        message:
          "Sorry, there are no images matching your search query. Please try again!",
      });
      return;
    }

    renderImages(data.hits);
  } catch (error) {
    iziToast.error({
      message: "Something went wrong. Please try again later.",
    });
  } finally {
    hideLoader(); 
  }
});