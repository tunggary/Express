const fs = require("fs");
const path = require("path");

const folder = process.argv[2] || "test";
const workingDir = path.join(__dirname, folder);

if (!folder || !fs.existsSync(workingDir)) {
  console.error("파일이름을 제대로 입력하세요");
  process.exit();
}

videoDir = path.join(workingDir, "video");
capturedDir = path.join(workingDir, "captured");
duplicatedDir = path.join(workingDir, "duplicated");
!fs.existsSync(videoDir) && fs.mkdirSync(videoDir);
!fs.existsSync(capturedDir) && fs.mkdirSync(capturedDir);
!fs.existsSync(duplicatedDir) && fs.mkdirSync(duplicatedDir);

fs.promises
  .readdir(workingDir) //
  .then((files) => {
    files.forEach((file) => {
      if (isVideo(file)) {
        move(videoDir, file);
      } else if (isCaptured(file)) {
        move(capturedDir, file);
      } else if (isDuplicated(files, file)) {
        move(duplicatedDir, file);
      }
    });
  })
  .catch(console.error);

const isVideo = (file) => {
  reg = /(mov|mp4)$/g;
  result = file.match(reg);
  return !!result;
};

const isCaptured = (file) => {
  reg = /(png|aae)$/g;
  result = file.match(reg);
  return !!result;
};

const isDuplicated = (files, file) => {
  if (!file.startsWith("IMG") || file.startsWith("IMG_E")) {
    return false;
  }

  const edited = `IMG_E${file.split("_")[1]}`;
  const result = files.find((file) => file.includes(edited));
  return !!result;
};

const move = (targetDir, file) => {
  const oldPath = path.join(workingDir, file);
  const newPath = path.join(targetDir, file);
  fs.renameSync(oldPath, newPath);
};
