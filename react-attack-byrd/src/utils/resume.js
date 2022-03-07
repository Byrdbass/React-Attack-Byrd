import FileSaver from 'file-saver';
// const FileSaver = require('file-saver');

const saveResume = () => {
    FileSaver.saveAs("dist/Resume.pdf", "leland-byrd-resume.pdf");
};

document.querySelector('.resumeBtn').addEventListener('click', saveResume);