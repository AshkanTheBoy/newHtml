function negativeColors(){
  let elements = document.getElementById("home").getElementsByTagName('*');

  for (let element of elements){

    let computed = window.getComputedStyle(element);
    let colorsArr = computed.backgroundColor.split(", ");
    colorsArr[0] = colorsArr[0].substring(4,colorsArr[0].length);
    colorsArr[2] = colorsArr[2].substring(0,colorsArr[2].length-1);
    for (let i = 0; i<colorsArr.length; i++){
      colorsArr[i] = String(255-Number(colorsArr[i]));
      element.style.backgroundColor = `rgb(${colorsArr[0]},${colorsArr[1]},${colorsArr[2]})`;
    }
  }
  for (let element of elements){
    if (element.id!=="article"&&element.id!=="head"){
      let computed = window.getComputedStyle(element);
    let textColorsArr = computed.color.split(", ");
    textColorsArr[0] = textColorsArr[0].substring(4,textColorsArr[0].length);
    textColorsArr[2] = textColorsArr[2].substring(0,textColorsArr[2].length-1);
    for (let i = 0; i<textColorsArr.length; i++){
      textColorsArr[i] = String(255-Number(textColorsArr[i]));
    }
    element.style.color = `rgb(${textColorsArr[0]},${textColorsArr[1]},${textColorsArr[2]})`; 
    }
  }

}
  

function dropDown(){
  let id = this.id;
  let index = id[id.length-1];
  let sectionId = `section${index}`;
  $(`#section${index}`).collapse("toggle");
}