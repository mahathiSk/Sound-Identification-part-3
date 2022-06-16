function start() {
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier= ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/5UVS-hYvP/model.json",modelReady)
}

function modelReady() {
classifier.classify(gotResult);
console.log("model is Loaded!")
}

function gotResult(error, results) {
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        console.log("Red "+random_number_r);
        console.log("Green "+random_number_g);
        console.log("Blue "+random_number_b);

        document.getElementById("detected").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("detected").style.fontFamily = 'Courier New'+","+'Courier'+","+'monospace';

        document.getElementById("voice").innerHTML = "Detected Voice Is Of - "+results[0].label;
        document.getElementById("voice").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("voice").style.fontFamily = 'Courier New'+","+'Courier'+","+'monospace';

        img = document.getElementById("image");

        if(results[0].label == "Dog sound"){
            img.src = "funny-animals-dog.gif";
            dog = dog+1;
            document.getElementById("detected").innerHTML = "Detected Dog - "+ dog;
        }
        else if(results[0].label == "Cat Sound"){
            img.src = "giphy.gif";
            cat = cat+1;
            document.getElementById("detected").innerHTML = "Detected Cat - "+ cat;
        }
    }
}