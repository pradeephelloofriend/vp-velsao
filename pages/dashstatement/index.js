import React from 'react'
import { Table } from 'react-bootstrap'

const index = () => {
    return (
        <section className="wrapper statement">
        <div className="container-fluid pt-10 pb-10">
         <div>
         <Table responsive="lg" solid bordered hover>
             <thead className="trborder2">
                 <tr>
                     <th colSpan={5} className="p-2 fw-bolder text-white bg-primary display-7 mainheader">Voucher List</th>
                     <th className="bg-white p-2 text-black text-center mainheader">Fee Element(55,FE)</th>
                 </tr>
                 <tr>
                     <th className="p-2 text-black">CO</th>
                     <th className="p-2 text-black">FY</th>
                     <th className="p-2 text-black">Transaction Type</th>
                     <th className="p-2 text-black">Transaction ID/Bill</th>
                     <th className="p-2 text-black">Date</th>
                     <th className="p-2 text-black">Particulatrs </th>
                     <th className="p-2 text-black"> Work</th>
                     <th className="p-2 text-black">Ref Id</th>
                     <th className="p-2 text-black">Nature Payment</th>
                     <th className="p-2 text-black">Account Head</th>
                     <th className="p-2 text-black">Amount</th>
                     <th className="p-2 text-black">Remark</th>

                 </tr>
             </thead>
             <tbody className="tbodyborder">
                 <tr>
                     <td className="p-2 text-black">CH</td>
                     <td className="p-2 text-black">21-22</td>
                     <td className="p-2 text-black">E-Bill</td>
                     <td className="p-2 text-black">2021112901 </td>
                     <td className="p-2 text-black">11/29/2021</td>
                     <td className="p-2 text-black">Billed towards Nala Construction</td>
                     <td className="p-2 text-black">5054:Construction of Village road</td>
                     <td className="p-2 text-black">WRK/20-21/001</td>
                     <td className="p-2 text-black">1-Scheme </td>
                     <td className="p-2 text-black">BRGF</td>
                     <td className="p-2 text-black">40000</td>
                     <td className="p-2 text-black">Expenses</td>
                 </tr>
                 <tr>
                     <td className="p-2 text-black">CH</td>
                     <td className="p-2 text-black">21-22</td>
                     <td className="p-2 text-black">I-Bill</td>
                     <td className="p-2 text-black">2021112902 </td>
                     <td className="p-2 text-black">11/29/2021</td>
                     <td className="p-2 text-black">Billed towards House Tax</td>
                     <td className="p-2 text-black">REV:Fees and Taxes</td>
                     <td className="p-2 text-black">20-21</td>
                     <td className="p-2 text-black">1-Own Resources </td>
                     <td className="p-2 text-black">PR-Panchayat Revenue</td>
                     <td className="p-2 text-black">1150</td>
                     <td className="p-2 text-black">Revenue Outstanding</td>
                 </tr>
                 <tr>
                     <td className="p-2 text-black">CH</td>
                     <td className="p-2 text-black">21-22</td>
                     <td className="p-2 text-black">R-Receipt</td>
                     <td className="p-2 text-black">2021112903</td>
                     <td className="p-2 text-black">11/30/2021</td>
                     <td className="p-2 text-black">Receipt towards Hosue Tax</td>
                     <td className="p-2 text-black">RCPT:Fees and Taxes</td>
                     <td className="p-2 text-black">20-21</td>
                     <td className="p-2 text-black">C-Cash Payment </td>
                     <td className="p-2 text-black">PF-Panchayat Receipt</td>
                     <td className="p-2 text-black">2193</td>
                     <td className="p-2 text-black">Revenue receipt</td>
                 </tr>
             </tbody>
         </Table>

         </div>
         </div>
     </section>
    )
}

export default index
