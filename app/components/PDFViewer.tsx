import { BASE_URL } from '../utils/constants';

const PDFViewer = () => {
  return (
    <div className="w-[50vw] h-[70vh]">
      <iframe
        src={`https://docs.google.com/gview?url=${BASE_URL}/my-cv.pdf&embedded=true`}
        title="Preview My CV"
        width="100%"
        height="100%"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default PDFViewer;
