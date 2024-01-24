import React from 'react'
import { Table } from 'react-bootstrap'

const index = () => {
    return (
        <section className="wrapper tenders">
            <div className="container-fluid p-8">
                <div>
                    <Table responsive="lg" solid bordered hover >
                        <thead className="trborder2">
                            <tr >
                                <th colSpan={2} className="p-2  text-white bg-primary display-7"> Tenders</th>
                            </tr>
                            <tr >
                                <th className="p-2 text-black">DocNo</th>
                                <th className="p-2 text-black">Date</th>
                                <th className="p-2 text-black">Tender Name</th>
                                <th className="p-2 text-black">Purpose</th>
                                <th className="p-2 text-black"> TenderID</th>
                                <th className="p-2 text-black"> Amount</th>
                                <th className="p-2 text-black"> Status</th>

                            </tr>
                        </thead>
                        <tbody className="tbodyborder">
                            <tr>
                                <td className="p-2 text-black text-center">1</td>
                                <td className="p-2 text-black"> 11/29/2021</td>
                                <td className="p-2 text-black">CCTV Tender</td>
                                <td className="p-2 text-black">To help monitor & Deter crime  </td>
                                <td className="p-2 text-black">TEN/20-21/001</td>
                                <td className="p-2 text-black">30,000</td>
                                <td className="p-2 text-black">Completed</td>
                            </tr>
                            <tr>
                                <td className="p-2 text-black text-center">2</td>
                                <td className="p-2 text-black"> 14/29/2021</td>
                                <td className="p-2 text-black">Eco-Friendly Bags</td>
                                <td className="p-2 text-black">	To promote green living & vocal for local</td>
                                <td className="p-2 text-black">TEN/20-21/002</td>
                                <td className="p-2 text-black">8,000</td>
                                <td className="p-2 text-black">In Progress</td>
                            </tr>
                            <tr>
                                <td className="p-2 text-black text-center">3</td>
                                <td className="p-2 text-black"> 15/29/2021</td>
                                <td className="p-2 text-black">Repairing of Roads</td>
                                <td className="p-2 text-black">Repairing roads for the smooth flow of traffic</td>
                                <td className="p-2 text-black">TEN/20-21/003</td>
                                <td className="p-2 text-black">15,000</td>
                                <td className="p-2 text-black">Completed</td>
                            </tr>
                            <tr>
                                <td className="p-2 text-black text-center">3</td>
                                <td className="p-2 text-black"> 15/29/2021</td>
                                <td className="p-2 text-black"> Construction of a community hall </td>
                                <td className="p-2 text-black">Building a hall for the community</td>
                                <td className="p-2 text-black">TEN/20-21/004</td>
                                <td className="p-2 text-black">70,000</td>
                                <td className="p-2 text-black">In Progress</td>
                            </tr>

                        </tbody>
                    </Table>
                </div>
            </div>
        </section>
    )
}

export default index
