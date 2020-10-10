Webcam.set
({
height:300,
width:320,
image_format:'png',
png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot()
{
Webcam.snap(function(data_uri)
{
document.getElementById("result").innerHTML='<img id="captured_img"src="'+data_uri+'"/>';
}
);
}
console.log("ml5 version: ", ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ldHLQZny9/model.json',modelLoaded);
function modelLoaded(){
console.log("modelLoaded!");
}
function check()
{img=document.getElementById("captured_img");
classifier.classify(img,gotResult);
}

function gotResult(error,results)
{
if(error)
{
    console.error(error);
}
else{
console.log(result);
document.getElementById("result_emotion_name").innerHTML=results[0].label;
document.getElementById("result_emotion_name2").innerHTML=results[1].label;
if(results[0].label=="happy")
{
document.getElementById("update_emoji").innerHTML="&#128512;";
}
if(results[0].label=="sad")
{
document.getElementById("update_emoji").innerHTML="&#128546;";
}
if(results[0].label=="angry")
{
document.getElementById("update_emoji").innerHTML="&#128545;";
}
if(results[1].label=="happy")
{
document.getElementById("update_emoji2").innerHTML="&#128512;";
}
if(results[1].label=="sad")
{
document.getElementById("update_emoji2").innerHTML="&#128546;";
}
if(results[1].label=="angry")
{
document.getElementById("update_emoji2").innerHTML="&#128545;"; 
}






























}















}






























































