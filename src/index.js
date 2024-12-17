// click event
const handleClick = (ramen) => {
  document.body.querySelector('.detail-image').src = ramen.image
  document.body.querySelector('.name').textContent = ramen.name
  document.body.querySelector('.restaurant').textContent = ramen.restaurant
  document.body.querySelector('#comment-display').textContent = ramen.comment
  document.body.querySelector('#rating-display').textContent = ramen.rating
};

// form submit event
const addSubmitListener = () => {
  let form = document.body.querySelector('#new-ramen')
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    
    
    
  })
};

const displayRamens = () => {
  // fetched the ramen
  fetch('http://localhost:3000/ramens')
    .then(res => res.json())
    .then(ramens => {
      ramens.forEach(ramen => addRamenToMenu(ramen));
    });
    //pass to addRamenToMenu
    
  };
  
  const addRamenToMenu = (ramen) => {
    
// created an image element and placed it in ramen menu
    const img = document.createElement('img')
    img.src = ramen.image
    document.body.querySelector('#ramen-menu').appendChild(img)

    // created a click event listener for the image
    img.addEventListener('click', () => {handleClick(ramen)})  
    
  };
  displayRamens()
  handleClick
  addSubmitListener() 
  
  const main = () => {
    
};

main();

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};
