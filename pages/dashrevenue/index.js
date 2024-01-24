import React from 'react'
import { Table } from 'react-bootstrap'

const index = () => {
    return (
        <section className="wrapper revenue">
            
                <div className="pt-6 pb-6 px-4">
                    <Table responsive="lg" solid bordered hover>
                        <thead className="trborder2">
                            <tr>
                                <th colSpan={3} className="p-2  text-white bg-primary display-7 ">House Tax List of  Billing and Receipt</th>
                            </tr>
                            <tr>
                                <th className="p-1 text-black">Transaction ID</th>
                                <th className="p-1 text-black">Transaction type</th>
                                <th className="p-1 text-black">VchId</th>
                                <th className="p-1 text-black">DocNo</th>
                                <th className="p-1 text-black">Date</th>
                                <th className="p-1 text-black">Line Item</th>
                                <th className="p-1 text-black anwidth">AN</th>
                                <th className="p-1 text-black objectwidth">Object Head</th>
                                <th className="p-1 text-black">Details</th>
                                <th className="p-1 text-black">Mode Of Payment</th>
                                <th className="p-1 text-black">Ref - Others</th>
                                <th className="p-1 text-black refidwidth">RefID</th>
                                <th className="p-1 text-black refwidth">Ref</th>
                                <th className="p-1 text-black">Amount</th>
                                <th className="p-1 text-black">Remark</th>
                                <th className="p-1 text-black">Current Status</th>
                                <th className="p-1 text-black">Next Status</th>
                            </tr>
                        </thead>
                        <tbody  className="tbodyborder">
                            <tr>
                                <td className="p-1 text-black">1</td>
                                <td className="p-1 text-black"> R-Receipt  </td>
                                <td className="p-1 text-black">2021112901</td>
                                <td className="p-1 text-black">	3 </td>
                                <td className="p-1 text-black">11/29/2021</td>
                                <td className="p-1 text-black"> 1</td>
                                <td className="p-1 text-black">2 - Santosh Kumar</td>
                                <td className="p-1 text-black"> 0028-104 </td>
                                <td className="p-1 text-black">House Tax</td>
                                <td className="p-1 text-black">	S </td>
                                <td className="p-1 text-black"></td>
                                <td className="p-1 text-black"> HT/20-21/001 </td>
                                <td className="p-1 text-black">126/A-2</td>
                                <td className="p-1 text-black"> 748  </td>
                                <td className="p-1 text-black">Revenue receipt</td>
                                <td className="p-1 text-black">	</td>
                                <td className="p-1 text-black">	</td>
                            </tr>
                            <tr>
                            <td className="p-1 text-black">2</td>
                                <td className="p-1 text-black"> R-Receipt  </td>
                                <td className="p-1 text-black">2021112902</td>
                                <td className="p-1 text-black">	4 </td>
                                <td className="p-1 text-black">11/29/2021</td>
                                <td className="p-1 text-black"> 1</td>
                                <td className="p-1 text-black">3 - Anil Naik</td>
                                <td className="p-1 text-black"> 0028-103  </td>
                                <td className="p-1 text-black">Trade Licence Tax</td>
                                <td className="p-1 text-black">	C </td>
                                <td className="p-1 text-black"></td>
                                <td className="p-1 text-black"> TL/20-21/001 </td>
                                <td className="p-1 text-black">INW/20-21/005</td>
                                <td className="p-1 text-black"> 250  </td>
                                <td className="p-1 text-black">Revenue receipt</td>
                                <td className="p-1 text-black">INW</td>
                                <td className="p-1 text-black">DLH</td>
                            </tr>
                            <tr>
                            <td className="p-1 text-black">3</td>
                                <td className="p-1 text-black"> R-Receipt  </td>
                                <td className="p-1 text-black">2021112903</td>
                                <td className="p-1 text-black">	5 </td>
                                <td className="p-1 text-black">11/29/2021</td>
                                <td className="p-1 text-black">1 </td>
                                <td className="p-1 text-black">3 - Anil Naik</td>
                                <td className="p-1 text-black"> 0028-104  </td>
                                <td className="p-1 text-black">House Tax</td>
                                <td className="p-1 text-black">	S </td>
                                <td className="p-1 text-black"></td>
                                <td className="p-1 text-black">HT/20-21/002</td>
                                <td className="p-1 text-black">126/A-1</td>
                                <td className="p-1 text-black"> 445  </td>
                                <td className="p-1 text-black">Revenue receipt</td>
                                <td className="p-1 text-black">	</td>
                                <td className="p-1 text-black">	</td>
                            </tr>
                            <tr>
                            <td className="p-1 text-black">4</td>
                                <td className="p-1 text-black"> R-Receipt  </td>
                                <td className="p-1 text-black">2021112904</td>
                                <td className="p-1 text-black">	6 </td>
                                <td className="p-1 text-black">11/29/2021</td>
                                <td className="p-1 text-black">1 </td>
                                <td className="p-1 text-black">4 - Pritam Gaonkar</td>
                                <td className="p-1 text-black"> 0028-104  </td>
                                <td className="p-1 text-black">House Tax</td>
                                <td className="p-1 text-black">	S </td>
                                <td className="p-1 text-black"></td>
                                <td className="p-1 text-black">HT/20-21/003</td>
                                <td className="p-1 text-black">125</td>
                                <td className="p-1 text-black"> 1000  </td>
                                <td className="p-1 text-black">Revenue receipt</td>
                                <td className="p-1 text-black">	</td>
                                <td className="p-1 text-black">	</td>
                            </tr>
                            <tr>
                            <td className="p-1 text-black">5</td>
                                <td className="p-1 text-black"> R-Receipt  </td>
                                <td className="p-1 text-black">2021112905</td>
                                <td className="p-1 text-black">	4 </td>
                                <td className="p-1 text-black">11/29/2021</td>
                                <td className="p-1 text-black">1 </td>
                                <td className="p-1 text-black">3 - Anil Naik</td>
                                <td className="p-1 text-black"> 0028-103  </td>
                                <td className="p-1 text-black">Trade Licence Tax</td>
                                <td className="p-1 text-black">	C </td>
                                <td className="p-1 text-black"></td>
                                <td className="p-1 text-black">TL/20-21/002</td>
                                <td className="p-1 text-black">INW/20-21/003</td>
                                <td className="p-1 text-black"> 250  </td>
                                <td className="p-1 text-black">Revenue receipt</td>
                                <td className="p-1 text-black">	INW</td>
                                <td className="p-1 text-black">DLH</td>
                            </tr>
                            <tr>
                            <td className="p-1 text-black">6</td>
                                <td className="p-1 text-black"> R-Receipt  </td>
                                <td className="p-1 text-black">2021112906</td>
                                <td className="p-1 text-black">	4 </td>
                                <td className="p-1 text-black">11/29/2021</td>
                                <td className="p-1 text-black">1 </td>
                                <td className="p-1 text-black">3 - Anil Naik</td>
                                <td className="p-1 text-black"> 0028-103  </td>
                                <td className="p-1 text-black">Trade Licence Tax</td>
                                <td className="p-1 text-black">	C </td>
                                <td className="p-1 text-black"></td>
                                <td className="p-1 text-black">TL/20-21/003</td>
                                <td className="p-1 text-black">INW/20-21/006</td>
                                <td className="p-1 text-black"> 800  </td>
                                <td className="p-1 text-black">Revenue receipt</td>
                                <td className="p-1 text-black">INW</td>
                                <td className="p-1 text-black">DLH</td>
                            </tr>
                            <tr>
                            <td className="p-1 text-black">7</td>
                                <td className="p-1 text-black"> R-Receipt  </td>
                                <td className="p-1 text-black">2021112907</td>
                                <td className="p-1 text-black">	5 </td>
                                <td className="p-1 text-black">11/29/2021</td>
                                <td className="p-1 text-black">1 </td>
                                <td className="p-1 text-black">3 - Shawn Almeida</td>
                                <td className="p-1 text-black"> 0028-105  </td>
                                <td className="p-1 text-black">Income Certificate</td>
                                <td className="p-1 text-black">	C </td>
                                <td className="p-1 text-black">UTR46897879</td>
                                <td className="p-1 text-black">CE/20-21/001</td>
                                <td className="p-1 text-black">INW/20-21/007</td>
                                <td className="p-1 text-black"> 50  </td>
                                <td className="p-1 text-black">Revenue receipt</td>
                                <td className="p-1 text-black">	PROC</td>
                                <td className="p-1 text-black">	</td>
                            </tr>
                            <tr>
                            <td className="p-1 text-black">8</td>
                                <td className="p-1 text-black"> R-Receipt  </td>
                                <td className="p-1 text-black">2021112908</td>
                                <td className="p-1 text-black">	6 </td>
                                <td className="p-1 text-black">11/29/2021</td>
                                <td className="p-1 text-black "> 1</td>
                                <td className="p-1 text-black ">3 - Durga Amonkar</td>
                                <td className="p-1 text-black"> 0028-105  </td>
                                <td className="p-1 text-black">Income Certificate</td>
                                <td className="p-1 text-black">	C </td>
                                <td className="p-1 text-black">UTR12348979</td>
                                <td className="p-1 text-black">CE/20-21/002</td>
                                <td className="p-1 text-black">INW/20-21/008</td>
                                <td className="p-1 text-black"> 50  </td>
                                <td className="p-1 text-black">Revenue receipt</td>
                                <td className="p-1 text-black">	PROC</td>
                                <td className="p-1 text-black">	</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
           
        </section>
    )
}

export default index
