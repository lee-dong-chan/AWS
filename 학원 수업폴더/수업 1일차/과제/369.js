const func369 = function (n) {
  let count = 0;
  for (let i = 1; i < n + 1; i++) {
    // if (
    //   temp.indexOf("3") > -1 ||
    //   temp.indexOf("6") > -1 ||
    //   temp.indexOf("9") > -1
    // ) {
    //   let tempstr = "";
    //   if ((i % 10) % 3 == 0) {
    //     tempstr += "짝";
    //     count++;
    //   }
    //   if (i > 10 && parseInt(i / 10) % 3 == 0) {
    //     tempstr += "짝";
    //     count++;
    //   }

    //   console.log(tempstr);
    // } else {
    //   console.log(i);

    let temp = i.toString();
    //     if (i.indexOf("3")-1) {
    //       temp = temp.replaceAll("3", "짝" );
    //     }

    //   if (i.indexOf("6")> -1) {
    //     temp = temp.replaceAll("6", "짝" );
    //   }
    //   if (i.indexOf("9") > -1) {
    //     temp = temp.replaceAllL("9", "짝");
    //   }
    //   if (temp.indexOf("짝") > -1) {
    //     temp = temp.replaceAll("1", "");
    //     temp = temp.replaceAll("2", "");
    //     temp = temp.replaceAll("3", "");
    //     temp = temp.replaceAll("4", "");
    //     temp = temp.replaceAll("5", "");
    //     temp = temp.replaceAll("6", "");
    //     temp = temp.replaceAll("7", "");
    //     temp = temp.replaceAll("8", "");
    //     temp = temp.replaceAll("0", "");
    //     count += temp.length;
    //   }

    temp = temp.replace(/[3,6,9]/g, "짝"); //---->//정규표현식 []-->문자를 이용
    if (temp.indexOf("짝") > -1) {
      temp = temp.replace(/\d/g, ""); ///\ d == /[0-9]/
      count += temp.length;
    }
    console.log(temp);
  }
  return count;
};
const tempcount = func369(100);
// console.log(tempcount)

//arr.reduce()
