import { pdfUrl } from "../utils/constants";

const PDFViewer = () => {
  return (
    <div className="w-full xs:w-[80vw] sm:w-[70vw] md:w-[60vw] lg:w-[50vw] h-[70vh]">
      <iframe
        src={`${pdfUrl}/preview`}
        title="Preview My CV"
        width="100%"
        height="100%"
      ></iframe>
    </div>
  );
};

export default PDFViewer;
