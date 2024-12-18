// allowing for click to premiere image and info on ramen menu
  const handleClick = (ramen) => {
  document.body.querySelector('.detail-image').src = ramen.image
  document.body.querySelector('.name').textContent = ramen.name
  document.body.querySelector('.restaurant').textContent = ramen.restaurant
  document.body.querySelector('#comment-display').textContent = ramen.comment
  document.body.querySelector('#rating-display').textContent = ramen.rating

};

// form submit event to add new ramen
const addSubmitListener = () => {
  let form = document.body.querySelector('#new-ramen')
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const newRamen = {
      name: event.target['new-name'].value,
      restaurant: event.target['new-restaurant'].value,
      image: event.target['new-image'].value,
      rating: event.target['new-rating'].value,
      comment: event.target['new-comment'].value
    }
    addRamenToMenu(newRamen);
    form.reset()
    })
};

//fetch ramen info
const displayRamens = () => {
  fetch('http://localhost:3000/ramens')
    .then(res => res.json())
    .then(ramens => {
      ramens.forEach(ramen => addRamenToMenu(ramen));
    });
//pass to addRamenToMenu
    };

// created an image element and placed it in ramen menu
  const addRamenToMenu = (ramen) => {
    const img = document.createElement('img')
    img.src = ramen.image
    const imgMenu = document.body.querySelector('#ramen-menu')
    imgMenu.appendChild(img);

// created a click event listener for the image
    img.addEventListener('click', () => {handleClick(ramen)})  
    };
  
  const main = () => {
    displayRamens()
    addSubmitListener() 
    
};

main();

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};
