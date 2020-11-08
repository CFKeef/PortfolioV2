import React from 'react';
import { Document, Page} from 'react-pdf'

import resume from '../../assets/GolebiewskiPatryckResume.pdf';

const Resume = () => {

    const generateResume = () => {
        return (
            <Document 
                file={resume}
                loading="Please wait! Loading resume"
                renderMode='canvas'
            >
                <Page 
                    pageNumber={1} 
                    scale={1.3}    
                />
            </Document>
        )
    }

    return (
        <section className="resume">
            {generateResume()}
            <div className="btn">
                <a download="GolebiewskiPatryckResume.pdf" href={resume}>Download</a>
            </div>
        </section>
    )
}

export default Resume;