import React from 'react'
import Invoiceslip from './Invoiceslip'
import './Invoice.scss'
import { useParams } from 'react-router-dom';
import {jsPDF} from 'jspdf';
import htmlToPdfMake from 'html-to-pdfmake';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import InvoicePdfTemplate from './InvoicePdfTemplate';
import ReactDOMServer from "react-dom/server";

pdfMake.vfs = pdfFonts.pdfMake.vfs;
export default function Invoice(props) {
    const { orderid } = useParams();
    console.log(orderid,"order id");
    const doc=new jsPDF();
    const handleDownloadInvoice = () => {
        // doc.autoTable({html:'.invoice-container'})
        // doc.save('invoice.pdf')
        const pdfContent=ReactDOMServer.renderToStaticMarkup(<InvoicePdfTemplate/>)
        const pdfMakeContent = htmlToPdfMake(pdfContent);
        const pdfDoc = {
            content: [pdfMakeContent],
          };

          pdfMake.createPdf(pdfDoc).download('invoice.pdf');
    
      };
    return (
        <>
            <div className="invoice-container">
                {/* <Invoiceslip id={orderid} /> */}
                
                <InvoicePdfTemplate/>
                
                
            </div>
            <button onClick={handleDownloadInvoice}>Download Invoice</button>
        </>
    )
}
