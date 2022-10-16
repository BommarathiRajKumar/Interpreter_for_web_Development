function outPUT(){
    let out1 = document.getElementById("outPutFrameId").contentWindow.document;
    let in1 = document.getElementById("inPutAreaId").value;
    out1.open();
    out1.write(in1);
    out1.close();
}
let f = 0;
function fullScreenButton(){
if(f == 0){
    let v1 = document.getElementById("outPutFrameId");
    let v2 = document.getElementById("inPutAreaId");
    let v3 = document.getElementById("fileButtonId");
    let v4 = document.getElementById("consoleId");
    let v5 = document.getElementById("conOutPutId");
    let v6 = document.getElementById("fullScreenButtonId");
    let v7 = document.getElementById("fileNameBoxId");
    let v8 = document.getElementById("saveFileButtonId");
    v1.style.width = "100%";
    v2.style.display = "none";
    v3.style.display = "none";
    v4.style.display = "none";
    v5.style.left = "690px";
    v6.style.left = "1430px";
    v6.innerHTML = "Minimise";
    v7.style.display = "none";
    v8.style.display = "none";
    f = 1;
}else{
    let v9 = document.getElementById("outPutFrameId");
    let v10 = document.getElementById("inPutAreaId");
    let v11 = document.getElementById("fileButtonId");
    let v12 = document.getElementById("consoleId");
    let v13 = document.getElementById("conOutPutId");
    let v14 = document.getElementById("fullScreenButtonId");
    v9.style.width = "50%";
    v10.style.display = "block";
    v11.style.display = "block";
    v12.style.display = "block";
    v13.style.left = "245px";
    v14.style.left = "650px";
    v14.innerHTML = "FullScreen";
    f = 0;
    }

}


let i = 0;
function fileButton(){
    if(i == 0){
     let v15 = document.getElementById("fileNameBoxId");
    let v16 = document.getElementById("saveFileButtonId");
    v15.style.display = "block";
    v16.style.display = "block";
    i = 1;
    }else{
    let v17 = document.getElementById("fileNameBoxId");
    let v18 = document.getElementById("saveFileButtonId");
    v17.style.display = "none";
    v18.style.display = "none";
    i = 0;
    }
}



function saveFile(){
    let fileName = document.getElementById("fileNameBoxId");
    let fileData = document.getElementById("inPutAreaId");
    let htmlContent = [fileData.value];
    let bl = new Blob(htmlContent, {type: "text/html"});
    let a = document.createElement("a");
    a.href = URL.createObjectURL(bl);
    a.download = fileName.value;
    a.hidden = true;
    document.body.appendChild(a);
    a.innerHTML = "something random - nobody will see this, it doesn't matter what you put here";
    a.click();
}