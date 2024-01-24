import React from 'react'
import { Table } from 'react-bootstrap'

const index = () => {
    return (
       <> <section className="wrapper">
           <div className="container-fluid mt-10 mb-10">
            <div>
            <Table responsive="lg" solid bordered hover>
                <thead className="trborder2">
                    <tr>
                        <th colSpan={2} className="p-0 fw-bolder text-black bg-primary display-7">Voucher List</th>
                        <th className="bg-white p-0 text-black text-center">VCH List</th>
                    </tr>
                    <tr>
                        <th className="p-1 text-black">CO</th>
                        <th className="p-1 text-black">FY</th>
                        <th className="p-1 text-black">Transaction Type</th>
                        <th className="p-1 text-black">Transaction ID/Bill</th>
                        <th className="p-1 text-black">Date</th>
                        <th className="p-1 text-black">Fee Element(55,FE) </th>
                        <th className="p-1 text-black">Ref Id</th>
                        <th className="p-1 text-black">Work</th>
                        <th className="p-1 text-black">Nature Scheme</th>
                        <th className="p-1 text-black">Scheme Name</th>
                        <th className="p-1 text-black">Mode Of Payment</th>
                        <th className="p-1 text-black">Amount</th>
                        <th className="p-1 text-black">Remark</th>

                    </tr>
                </thead>
                <tbody className="tbodyborder">
                    <tr>
                        <td className="p-1 text-black">CH</td>
                        <td className="p-1 text-black">21-22</td>
                        <td className="p-1 text-black">B</td>
                        <td className="p-1 text-black">2021112901 </td>
                        <td className="p-1 text-black"></td>
                        <td className="p-1 text-black">Htax</td>
                        <td className="p-1 text-black"></td>
                        <td className="p-1 text-black"></td>
                        <td className="p-1 text-black">1 </td>
                        <td className="p-1 text-black">BRGF</td>
                        <td className="p-1 text-black">C </td>
                        <td className="p-1 text-black">1648</td>
                        <td className="p-1 text-black"></td>
                    </tr>
                    <tr>
                    <td className="p-1 text-black">CH</td>
                        <td className="p-1 text-black">21-22</td>
                        <td className="p-1 text-black">R</td>
                        <td className="p-1 text-black">2021112901 </td>
                        <td className="p-1 text-black"></td>
                        <td className="p-1 text-black">Htax</td>
                        <td className="p-1 text-black"></td>
                        <td className="p-1 text-black"></td>
                        <td className="p-1 text-black">1 </td>
                        <td className="p-1 text-black">BRGF</td>
                        <td className="p-1 text-black">C </td>
                        <td className="p-1 text-black">1648</td>
                        <td className="p-1 text-black"></td>
                    </tr>
                </tbody>
            </Table>

            </div>
            </div>
        </section>
        
        
        <section className="wrapper">
            <div>
<Table responsive="lg" solid bordered hover>
    <thead className="trborder2">
        <tr>
            <th colSpan={4} className="p-0 fw-bolder text-black bg-primary display-7">Fees Element  Header List of  Billing and Receipt</th>
            <th className="bg-white p-0 text-black text-center" >Feehdr</th>
        </tr>
        <tr>
                        <th className="p-1 text-black">CO</th>
                        <th className="p-1 text-black">FY</th>
                        <th className="p-1 text-black">Transaction Type</th>
                        <th className="p-1 text-black">VchId</th>
                        <th className="p-1 text-black">Transaction ID</th>
                        <th className="p-1 text-black">Date</th>
                        <th className="p-1 text-black">AN</th>
                        <th className="p-1 text-black">Fee Element</th>
                        <th className="p-1 text-black">RefId</th>
                        <th className="p-1 text-black">Mode Of Payment</th>
                        <th className="p-1 text-black">Ref</th>
                        <th className="p-1 text-black">CRSTS</th>
                        <th className="p-1 text-black">NXSTS</th>
                        <th className="p-1 text-black">Amount</th>
                        <th className="p-1 text-black">Remark</th>
                        <th className="p-1 text-black">Details</th>
                    </tr>
    </thead>
    <tbody className="tbodyborder">
        <tr>
            <td className="p-1 text-black">CH</td>
            <td className="p-1 text-black"> 21-22  </td>
            <td className="p-1 text-black">B-Bill</td>
            <td className="p-1 text-black">	2021112901 </td>
            <td className="p-1 text-black">1</td>
            <td className="p-1 text-black"> </td>
            <td className="p-1 text-black">1 - Santosh Kumar</td>
            <td className="p-1 text-black"> House tax  </td>
            <td className="p-1 text-black"></td>
            <td className="p-1 text-black">	C </td>
            <td className="p-1 text-black"></td>
            <td className="p-1 text-black">  </td>
            <td className="p-1 text-black"></td>
            <td className="p-1 text-black"> 1648  </td>
            <td className="p-1 text-black"></td>
            <td className="p-1 text-black">	</td>
        </tr>
        <tr>
        <td className="p-1 text-black">CH</td>
            <td className="p-1 text-black"> 21-22  </td>
            <td className="p-1 text-black">R-Receipt</td>
            <td className="p-1 text-black">	2021112901 </td>
            <td className="p-1 text-black">1</td>
            <td className="p-1 text-black"> </td>
            <td className="p-1 text-black">1 - Santosh Kumar</td>
            <td className="p-1 text-black"> House tax  </td>
            <td className="p-1 text-black"></td>
            <td className="p-1 text-black">	C </td>
            <td className="p-1 text-black"></td>
            <td className="p-1 text-black">  </td>
            <td className="p-1 text-black"></td>
            <td className="p-1 text-black"> 1648  </td>
            <td className="p-1 text-black"></td>
            <td className="p-1 text-black">	</td>
      
        </tr>
    </tbody>
</Table>

</div>
</section>


<section className="wrapper">
            <div>
<Table responsive="sm" solid bordered hover>
    <thead className="trborder2">
        <tr>
            <th colSpan={4} className="p-0 fw-bolder text-black bg-primary display-7">Fee Detail List of  Billing and Receipt</th>
            <th className="bg-white p-0 text-black text-center" >Feehdr</th>
        </tr>
        <tr>
                        <th className="p-1 text-black">CO</th>
                        <th className="p-1 text-black">FY</th>
                        <th className="p-1 text-black">Transaction Type</th>
                        <th className="p-1 text-black">VchId</th>
                        <th className="p-1 text-black">Transaction ID</th>
                        <th className="p-1 text-black">Date</th>
                        <th className="p-1 text-black">AN</th>
                        <th className="p-1 text-black">Fee Element</th>
                        <th className="p-1 text-black">RefId</th>
                        <th className="p-1 text-black">Mode Of Payment</th>
                        <th className="p-1 text-black">Ref</th>
                        <th className="p-1 text-black">CRSTS</th>
                        <th className="p-1 text-black">NXSTS</th>
                        <th className="p-1 text-black">Amount</th>
                        <th className="p-1 text-black">Remark</th>
                        <th className="p-1 text-black">Details</th>
                    </tr>
    </thead>
    <tbody className="tbodyborder">
        <tr>
            <td className="p-1 text-black">CH</td>
            <td className="p-1 text-black"> 21-22  </td>
            <td className="p-1 text-black">B-Bill</td>
            <td className="p-1 text-black">	2021112901 </td>
            <td className="p-1 text-black">1</td>
            <td className="p-1 text-black"> </td>
            <td className="p-1 text-black">1 - Santosh Kumar</td>
            <td className="p-1 text-black"> House tax  </td>
            <td className="p-1 text-black"></td>
            <td className="p-1 text-black">	C </td>
            <td className="p-1 text-black"></td>
            <td className="p-1 text-black">  </td>
            <td className="p-1 text-black"></td>
            <td className="p-1 text-black"> 1648  </td>
            <td className="p-1 text-black"></td>
            <td className="p-1 text-black">	</td>
        </tr>
        <tr>
        <td className="p-1 text-black">CH</td>
            <td className="p-1 text-black"> 21-22  </td>
            <td className="p-1 text-black">R-Receipt</td>
            <td className="p-1 text-black">	2021112901 </td>
            <td className="p-1 text-black">1</td>
            <td className="p-1 text-black"> </td>
            <td className="p-1 text-black">1 - Santosh Kumar</td>
            <td className="p-1 text-black"> House tax  </td>
            <td className="p-1 text-black"></td>
            <td className="p-1 text-black">	C </td>
            <td className="p-1 text-black"></td>
            <td className="p-1 text-black">  </td>
            <td className="p-1 text-black"></td>
            <td className="p-1 text-black"> 1648  </td>
            <td className="p-1 text-black"></td>
            <td className="p-1 text-black">	</td>
      
        </tr>
    </tbody>
</Table>

</div>
</section>
</>
    )
}

export default index
