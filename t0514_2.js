const songList = [
  "너에게 닿기를",
  "like JENNIE",
  "Drowning",
  "모르시나요(PROD.로코베리)",
  "TOO BAD",
  "HOME SWEET HOME",
  "나는 반딧불",
  "Whiplash",
  "REBEL HEART",
  "HOT",
];

const songDetails = {
  "너에게 닿기를": { artist: "10CM", likes: 58471 },
  "like JENNIE": { artist: "제니", likes: 76168 },
  "Drowning": { artist: "WOODZ", likes: 189248 },
  "모르시나요(PROD.로코베리)": { artist: "조째즈", likes: 70040 },
  "TOO BAD": { artist: "G-DRAGON", likes: 146178 },
  "HOME SWEET HOME": { artist: "G-DRAGON", likes: 211539 },
  "나는 반딧불": { artist: "황가람", likes: 141198 },
  "Whiplash": { artist: "aespa", likes: 132606 },
  "REBEL HEART": { artist: "IVE (아이브)", likes: 98429 },
  "HOT": { artist: "LE SSERAFIM (르세라핌)", likes: 35001 },
};



const songListElement = document.getElementById("songList");
songListElement.innerHTML = "";

// for (let a = 0; a < songList.length; a++) {
//   const listItem = document.createElement("li");
//   listItem.classList.add("list-group-item");
//   listItem.textContent = `${a + 1}. ${songList[a]}`;
//   songListElement.appendChild(listItem);
// }
// let a=0;
// while(a<songList.length)
// {
//   const listItem = document.createElement("li");
//   listItem.classList.add("list-group-item");
//   listItem.textContent = `${a + 1}. ${songList[a]}`;
//   songListElement.appendChild(listItem);
//   a++;
// }

// songList.forEach((title, index )=> {
//   const listItem = document.createElement("li");
//   listItem.classList.add("list-group-item");
//   listItem.textContent = `${index}. ${title}`;
//   songListElement.appendChild(listItem);
// });
/////////////////////////

/* let c=1;
for (const title of songList) {
  const listItem = document.createElement("li");
  listItem.classList.add("list-group-item");
  listItem.textContent = `${c}.${title}`;
  songListElement.appendChild(listItem);
  c++
}

const person = { name: "Lee", age: 30 };



const songDetail = document.getElementById("songDetail");
songDetail.innerHTML = "";

for (let song in songDetails) 
{
  // console.log(song);ß
  // console.log(songDetails[song].artist);
  // console.log(songDetails[song].likes);
   const listItem = document.createElement("li");
   listItem.classList.add("list-group-item");
   listItem.innerHTML = `${song} <br> 가수 : ${songDetails[song].artist}  | 
   좋아요 : ${songDetails[song].likes} 👍`;
   songDetail.appendChild(listItem);
  
} */

/* const songDetailLike = document.getElementById("songDetailLike");
songDetailLike.innerHTML = "";

for (let song in songDetails) 
{
  if(songDetails[song].likes>=60000){
   const listItem = document.createElement("li");
   listItem.classList.add("list-group-item");
   listItem.innerHTML = `${song} <br> 
   가수 : ${songDetails[song].artist}  | 
   좋아요 : ${songDetails[song].likes} 👍`;
   songDetailLike.appendChild(listItem);
  } 
}*/
 drawList();
  

function add_song()
{
  const song_title = document.getElementById("song_title").value;
  const singer = document.getElementById("singer").value;
  const song_likes = document.getElementById("song_likes").value;

  // console.log(song_title);
  // console.log(singer);
  // console.log(song_likes);

  // const songDetailLike = document.getElementById("songDetailLike");
  // const listItem = document.createElement("li");
  //  listItem.classList.add("list-group-item");
  //  listItem.innerHTML = `${song_title} <br> 
  //  가수 : ${singer}  | 
  //  좋아요 : ${song_likes} 👍`;
  //  songDetailLike.appendChild(listItem);

  songDetails[song_title]={
    artist:singer,
    likes:song_likes
  };
  console.log(songDetails);
  
  drawList();
}


function drawList()
{
  const songDetailLike = document.getElementById("songDetailLike");
  songDetailLike.innerHTML = "";

  for (let song in songDetails) 
  {
    if(songDetails[song].likes>=60000)
    {
      const listItem = document.createElement("li");
      listItem.classList.add("list-group-item");
      listItem.innerHTML = `${song} <br> 
      가수 : ${songDetails[song].artist}  | 
      좋아요 : ${songDetails[song].likes} 👍`;
      songDetailLike.appendChild(listItem);
    }
  }
}