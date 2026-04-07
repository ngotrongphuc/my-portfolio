import { CV_FILE_ID } from '../utils/constants';

export const PDFViewer = () => {
  return (
    <div className="w-full xs:w-[80vw] sm:w-[70vw] md:w-[60vw] lg:w-[50vw] h-[70vh]">
      <iframe
        src={`https://drive.google.com/file/d/${CV_FILE_ID}/preview`}
        title="Preview My CV"
        width="100%"
        height="100%"
      />
    </div>
  );
};
