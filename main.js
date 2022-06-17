// We use the Objects below to control toggling like / unlike status
const EMPTY_HEART = "♡";
const FULL_HEART = "♥"




const likeHearts = document.querySelectorAll(".like-glyph");
const errorMessage = document.getElementById('modal');

for (const like of likeHearts) {
  like.addEventListener("click", () => {
    mimicServerCall(url="http://mimicServer.example.com")
    .then(() => {
      if(like.innerHTML === EMPTY_HEART){
        like.innerHTML = FULL_HEART;
        like.className = "activated-heart";

      }else {
        like.innerText = ERROR;
      }
    })
    .catch(err => {
      errorMessage.className = "";
      errorMessage.innerText = err;
      setTimeout(() => errorMessage.className = "hidden", 3000);

    })
  })
}





function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}