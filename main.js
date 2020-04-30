window.onload=function(){

  const audio=document.querySelector("audio")
  const playPause=document.querySelector(".playPause") 
  const next=document.querySelector(".next")
  const previous=document.querySelector(".previous")
  let index=0
 

  const playlist=["Blinding Lights - The weeknd.mp3",
  "Dark Necessities - Red Hot Chili Peppers.mp3",
  "Death Bed - Powfu.mp3"]
  
  audio.volume=0.3

  playPause.onclick = function (){
  	if (audio.paused) {
      audio.play()
      console.log(index)
      console.log(playlist[index])
      } else {
  	    audio.pause()
  	  } 
  }
  
   next.onclick = function() {
    if (index<playlist.length-1) {
      index=index+1
      audio.src=playlist[index]
      audio.play()
      console.log(playlist[index])
      console.log(index)

      }  else {
    	index=0
    	audio.src=playlist[index]
    	audio.play()
    	console.log(playlist[index])
        console.log(index)
    }
   }

   previous.onclick = function() {
    if (index<1) {
      index=playlist.length-1
      audio.src=playlist[index]
      audio.play()
      console.log(index)
      } else {
      	index=index-1
      	audio.src=playlist[index]
    	audio.play()
    	console.log(index)
      }
   }
}