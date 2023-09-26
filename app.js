var profilepic = document.getElementById("profilepic")
var inputimg = document.getElementById("inputimg")

inputimg.onchange= function(){
    profilepic.src = URL.createObjectURL(inputimg.files[0])
    console.log(profilepic)
}
///////////////////////////////   pattern =1 base64

// inputimg.addEventListener("change",() =>{
//     const file = inputField.files[0];
//     const reader = new FileReader();
//     reader.addEventListener("load", ()=>{
//         console.log(reader.result);
//     });
//     reader.readAsDataURL(file);
// })

/////////////////////////////// pattern = 2 base 64

//  var img = profilepic;
//  img.crossOrigin = "Anonymous"
//  img.onload = function (){
//     var canvas = document.createElement("canvas");
//     // var ctx = canvas.getContext("2h")   /////////////// to get the image in time 
//     canvas.height = this.naturalHeight;
//     canvas.width = this.naturalwdith;
//     // ctx.drawImage(this,0,0);  ////////////////////// paste to the image in your web
//     var data = canvas.toDataURL("image/jpeg");
//     console.log(data);
//  };