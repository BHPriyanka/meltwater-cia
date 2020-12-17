
const fs = require('fs');

const fileUpload = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      message: "file received successfully"
    })
  } catch (error) {
    return res.status(422).json({ error, success: false });
  }
};

const maskContent = async (req, res) => {
  console.log(req.query);
  try {
    fs.readFile(`./public/uploads/${req.query.fileName}`, 'utf8', function (err, data) {
      if (err) {
        return console.log(err);
      }
      var keywords = req.query.keywords
      var arr = keywords.split(",");

      console.log(arr);

      var i;
      var result;
      for (i = 0; i < arr.length; i++) {
        arr[i] = arr[i].trimStart();
        arr[i] = arr[i].trimEnd();
        /*arr[i] = arr[i].replace(/\s/g,' ');
        if (arr[i].indexOf('\'') >= 0 || arr[i].indexOf('"') >= 0) {
            arr[i] = arr[i].substring(1,arr[i].length-1);
        }
        console.log(arr[i]);*/
        result = data.replace(new RegExp(arr[i], "gi"), 'XXXX');
      }

      fs.writeFile(`./public/uploads/${req.query.fileName}`, result, 'utf8', function (err) {
        if (err) return console.log(err);
      });

    });

    return res.status(200).json({
      success: true,
      message: "Masked successfully"
    })
  } catch (error) {
    return res.status(422).json({ error, success: false });
  }
}

module.exports = {
  fileUpload,
  maskContent,
};
