import { useEffect, useState } from 'react';

const PDFViewer = () => {
  const [baseUrl, setBaseUrl] = useState<string>('');
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setBaseUrl(window.location.origin);
    }
  }, []);

  return (
    <div className="w-[50vw] h-[70vh]">
      <iframe
        src={`https://docs.google.com/gview?url=${baseUrl}/my-cv.pdf&embedded=true`}
        title="Preview My CV"
        width="100%"
        height="100%"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default PDFViewer;
