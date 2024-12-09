// Select the music collections and the music head container
const musicCollections = document.querySelectorAll('.music-collection');
const musicHeadAlbum = document.querySelector('.music-head .album-image iframe');
const musicHeadDescription = document.querySelector('.music-description p');

// Function to update the music-head and music-collection
function swapMusicContent(collection) {
  // Get the current content from the clicked collection
  const collectionIframe = collection.querySelector('iframe');
  const collectionDescription = collection.querySelector('.music-description p');
  
  // Store the current content of the music-head
  const tempIframeSrc = musicHeadAlbum.src;
  const tempDescription = musicHeadDescription.textContent; 
  
  // Swap the iframe src between the collection and the music-head
  musicHeadAlbum.src = collectionIframe.src;
  collectionIframe.src = tempIframeSrc;
  
  // Swap the descriptions between the collection and the music-head
  musicHeadDescription.textContent = collectionDescription.textContent;
  collectionDescription.textContent = tempDescription;
}

// Add event listeners to each music collection
musicCollections.forEach(collection => {
  collection.addEventListener('click', function() {
    // Swap the content between music-head and the clicked collection
    swapMusicContent(collection);
  });
});
 