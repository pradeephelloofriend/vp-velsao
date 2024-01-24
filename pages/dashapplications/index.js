import React from 'react'
import { Table } from 'react-bootstrap'

const index = () => {
    return (
        <section className="wrapper application">
            <div className="container-fluid p-8">
                <div>
                    <Table responsive="lg" solid bordered hover >
                        <thead className="trborder2">
                            <tr >
                                <th colSpan={2} className="p-2  text-white bg-primary display-7">Applications</th>
                            </tr>
                            <tr >
                                <th className="p-2 text-black">DocNo</th>
                                <th className="p-2 text-black">Date</th>
                                <th className="p-2 text-black">AN</th>
                                <th className="p-2 text-black">Purpose</th>
                                <th className="p-2 text-black"> RefID</th>
                                <th className="p-2 text-black">Status</th>

                            </tr>
                        </thead>
                        <tbody className="tbodyborder">
                            <tr>
                                <td className="p-2 text-black text-center">1</td>
                                <td className="p-2 text-black"> 11/29/2021</td>
                                <td className="p-2 text-black">2-Santosh Kumar</td>
                                <td className="p-2 text-black">	Trade Tax </td>
                                <td className="p-2 text-black">INW/20-21/004</td>
                                <td className="p-2 text-black"> Inward</td>
                            </tr>
                            <tr>
                                <td className="p-2 text-black text-center">2</td>
                                <td className="p-2 text-black"> 11/29/2021</td>
                                <td className="p-2 text-black">3-Anil Naik</td>
                                <td className="p-2 text-black">	Trade Licence Tax </td>
                                <td className="p-2 text-black">INW/20-21/005</td>
                                <td className="p-2 text-black"> Inward</td>
                            </tr>
                            <tr>
                                <td className="p-2 text-black text-center">3</td>
                                <td className="p-2 text-black"> 11/29/2021</td>
                                <td className="p-2 text-black">3-Anil Naik</td>
                                <td className="p-2 text-black">	Trade Licence Tax </td>
                                <td className="p-2 text-black">INW/20-21/006</td>
                                <td className="p-2 text-black"> Process</td>
                            </tr>
                            <tr>
                                <td className="p-2 text-black text-center">4</td>
                                <td className="p-2 text-black"> 11/29/2021</td>
                                <td className="p-2 text-black">3-Shawn Almeida</td>
                                <td className="p-2 text-black">Income Certificate</td>
                                <td className="p-2 text-black">INW/20-21/007</td>
                                <td className="p-2 text-black"> Outward</td>
                            </tr>
                            <tr>
                                <td className="p-2 text-black text-center">5</td>
                                <td className="p-2 text-black"> 11/29/2021</td>
                                <td className="p-2 text-black">3-Durga Amonkar</td>
                                <td className="p-2 text-black">Income Certificate </td>
                                <td className="p-2 text-black">INW/20-21/008</td>
                                <td className="p-2 text-black"> Outward</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </section>
    )
}

export default index
