import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

const Resume = () => {
  return (
    <div style={{ height: "600px", margin: "20px" }}>
      <Worker workerUrl={`https://unpkg.com/pdfjs-dist@2.9.359/build/pdf.worker.min.js`}>
        <Viewer fileUrl="../public/YaashnaGupta_Resume.pdf.pdf" />
      </Worker>
    </div>
  );
};

export default Resume;
