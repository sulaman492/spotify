console.log('hello world');

async function getsongs(){
    let a=await fetch("http://127.0.0.1:5500/songs/");
    let response=await a.text();
    console.log(response)
    let div=document.createElement("div");
    div.innerHTML=response;
    let as=div.getElementsByTagName("a");
    let songs=[];
    for (let index = 0; index < as.length; index++) {
        const element=as[index]
        if(element.href.endsWith(".mp3")){
            songs.push(element.href.split("/songs/")[1])
        }
    }
    return songs;
}
async function main(){
    let songs=await getsongs();
    console.log(songs);

    var audio=new Audio(songs[0]);
   
    let songUL=document.querySelector(".songsList").getElementsByTagName("ul")[0];
    for (const song of songs) {
        songUL.innerHTML=songUL.innerHTML+`<li>
        <img class="invert" src="music.svg" alt="">
                        <div class="info">
                            <div>${song.replaceAll("%20","")}</div>
                            <div>harry</div>
                        </div>
                        <div class="playNow">
                            <span>Play</span>
                            <img class="invert" src="playcircle.svg" alt="">
                        </div>
                        
        
        </li>`;
    }


    // audio.play();

    // document.getElementsByClassName("songbuttons")[0].addEventListener("click", async () => {
    // let songs = await getsongs();
    // console.log(songs);

    // let audio = new Audio(songs[0]);
    // audio.play();
    // })
}
main()