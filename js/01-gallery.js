import { galleryItems } from './gallery-items.js'
// Change code below this line
const galleryContainer = document.querySelector('.gallery')

const galleryMarkup = galleryItems
  .map(
    ({ preview, description, original }) => `
    <li class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</li>
  `
  )
  .join('')

galleryContainer.insertAdjacentHTML(`beforeend`, galleryMarkup)

galleryContainer.addEventListener('click', (event) => {
  event.preventDefault()
  if (event.target.nodeName !== 'IMG') {
    return
  }

  const originalSource = event.target.dataset.source
  const instance = basicLightbox.create(`
    <img src="${originalSource}">
  `)
  instance.show()
})
