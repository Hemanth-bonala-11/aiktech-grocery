import { useRef } from "react"
import './InvoicePdfTemplate.scss'

const InvoicePdfTemplate=()=>{
	const invoiceRef = useRef(null)
    return(
        <div className="invoice-pdf-template" id="pdfWrapper" ref={invoiceRef}
		>
            
		<div className="header">
			<h1>RealValueMart Invoice</h1>
			<address >
				<p>Jonathan Neal</p>
				<p>101 E. Chapman Ave<br/>Orange, CA 92866</p>
				<p>(800) 555-1234</p>
			</address>
			{/* <span><img alt="" src="http://www.jonathantneal.com/examples/invoice/logo.png"/><input type="file" accept="image/*"/></span> */}
		</div>
		<article>
			<h1>Recipient</h1>
			<address >
				<p>Some Company<br/>c/o Some Guy</p>
			</address>
			<table className="meta">
				<tr>
					<th><span >Invoice #</span></th>
					<td><span >101138</span></td>
				</tr>
				<tr>
					<th><span >Date</span></th>
					<td><span >January 1, 2012</span></td>
				</tr>
				<tr>
					<th><span >Amount Due</span></th>
					<td><span id="prefix" >$</span><span>600.00</span></td>
				</tr>
			</table>
			<table className="inventory">
				<thead>
					<tr>
						<th><span >Item</span></th>
						<th><span >Description</span></th>
						<th><span >Rate</span></th>
						<th><span >Quantity</span></th>
						<th><span >Price</span></th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><span >Front End Consultation</span></td>
						<td><span >Experience Review</span></td>
						<td><span data-prefix>$</span><span >150.00</span></td>
						<td><span >4</span></td>
						<td><span data-prefix>$</span><span>600.00</span></td>
					</tr>
				</tbody>
			</table>
			<table class="balance">
				<tr>
					<th><span >Total</span></th>
					<td><span data-prefix>$</span><span>600.00</span></td>
				</tr>
			</table>
		</article>
		

        </div>
    )
}

export default InvoicePdfTemplate