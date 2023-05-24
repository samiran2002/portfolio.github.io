
let imageAnim = document.getElementById("image");
let imageArray = [ "sam.jpg","sam1.jpg","sam2.jpg","sam3.jpg","sam4.jpg"];
let imageIndex = 0;

const startImage = () => {
    imageAnim.setAttribute("src", imageArray[imageIndex]);
    imageIndex++;
    if (imageIndex >= imageArray.length) {
        imageIndex = 0;
    }
}
setInterval(startImage, 900);

var i=0 , txt ;
txt = " Hi, myself Samiran Patra people generally call me Sami . I am an undergrad at GITA AUTONOMOUS COLLEGE who is a passionate web developer , love to spend my spare time in sketching and you can click on the button below to see some of my sketches . I enjoy discovering who I am and my hidden talents. For more details you can download my resume ";
function typing() {
    if(i<txt.length) {
        document.getElementById("text").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typing,90);
    }
}
typing();



