import React, { Component } from 'react';
// import { Document } from 'react-pdf/dist/esm/entry.webpack';
// import { Document } from 'react-pdf/dist/esm/entry.webpack';

import { Document } from 'react-pdf';
// import resume from '../../../public/resume.pdf';
import { pdfjs } from 'react-pdf';
// import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import resume from './resume.pdf';
import test from './test.pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
// import { PDFViewer } from '../PDFViewer/PDFViewer';

export const Resume = () => {
	return (
		<div style={{ width: '100vw', height: '100vh', backgroundColor: '#0009' }}>
			{/* <Document className="resume" file={test}></Document> */}

			{/* <PDFViewer src={resume}></PDFViewer> */}
			<embed type="application/pdf” src=“./resume.pdf”/>
		</div>
	);
};
