import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    /* Pass your questions in here */
    { message: "Type the URL", name: "URL" },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url = answers.URL;
    const qr_png = qr.image(url);
qr_png.pipe(fs.createWriteStream('generateQR.png'));
fs.writeFile("qrLink.txt",url,(err)=>{
 if (err) console.log(err);
 
})
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
