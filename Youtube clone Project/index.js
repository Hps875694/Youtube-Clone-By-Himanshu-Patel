/*

Need 2 Things:
(1) Show/Display Videos on Homepage
(2) Search When Something is typed in the searchbox

Creat two function
display()
- Show/Display Videos on Home Page
-Based Upon Most Popular Videos
-Should be called Directly Without ANY event
(No Hover , No Click, No On click)
- On Page Load





searchVideo()
 Search When Something is typed in the searchbox
- Take the "String " typed in search box and search on this 

*/
let div = document.getElementById("videodiv");


// (1) Show / display videos on home page


async function display(){
    let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=popular%20video&key=AIzaSyA000xUbfdfVAjHn-9148s0t-n_j7CBbNs&maxResults=25`);  
    let data = await res.json();
    
    
       for(id:{videoId}}of data.items){
            let videodiv= document.createElement("iframe")
            videodiv.setAttribute("class" , "mons")
            videodiv.src = `https://www.youttube.com/embed/${videoId}`;
            videodiv.allow = 'fullscreen'
            div.append(videodiv)
        }
    }



display();



//(1) Search When Something is typed in the searchbox


async function searchVideos(){
    document.getElementById("videodiv").innerHTML="";
    let video = document.getElementById("video").value;
    let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${query}&type=video&key=AIzaSyA000xUbfdfVAjHn-9148s0t-n_j7CBbNs&maxResults=25`);  
    let data = await res.json();
    
    for({
        id:{videoId}}of data.items){
            let videodiv= document.createElement("iframe")
            videodiv.setAttribute("class" , "mons")
            videodiv.src = `https://www.youttube.com/embed/${videoId}`;
            videodiv.allow = 'fullscreen'
            div.append(videodiv)
        }
    }

}
