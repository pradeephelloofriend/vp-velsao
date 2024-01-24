import React from 'react'
import { Table } from 'react-bootstrap'

const index = () => {
    return (
        <section className="wrapper project">
            <div className="container-fluid p-8">
                <div>
                    <Table responsive="lg" solid bordered hover >
                        <thead className="trborder2">
                            <tr >
                                <th colSpan={2} className="p-2  text-white bg-primary display-7">Projects</th>
                            </tr>
                            <tr >
                                <th className="p-2 text-black">DocNo</th>
                                <th className="p-2 text-black">Date</th>
                                <th className="p-2 text-black">Project Name</th>
                                <th className="p-2 text-black">Purpose</th>
                                <th className="p-2 text-black"> ProjectID</th>

                            </tr>
                        </thead>
                        <tbody className="tbodyborder">
                            <tr>
                                <td className="p-2 text-black text-center">1</td>
                                <td className="p-2 text-black"> 11/29/2021</td>
                                <td className="p-2 text-black">Cleaning Drive</td>
                                <td className="p-2 text-black">	Cleaning of Plastic </td>
                                <td className="p-2 text-black">PRJ/20-21/001</td>
                            </tr>
                            <tr>
                                <td className="p-2 text-black text-center">2</td>
                                <td className="p-2 text-black"> 14/29/2021</td>
                                <td className="p-2 text-black">Door To Door Garbage collection</td>
                                <td className="p-2 text-black">	Maintaining Hygiene </td>
                                <td className="p-2 text-black">PRJ/20-21/002</td>
                            </tr>
                            <tr>
                                <td className="p-2 text-black text-center">3</td>
                                <td className="p-2 text-black"> 15/29/2021</td>
                                <td className="p-2 text-black">Health And safety concern</td>
                                <td className="p-2 text-black">	Protection from waterbon Diseases </td>
                                <td className="p-2 text-black">PRJ/20-21/003</td>
                            </tr>
                            <tr>
                                <td className="p-2 text-black text-center">3</td>
                                <td className="p-2 text-black"> 15/29/2021</td>
                                <td className="p-2 text-black">Health And safety concern</td>
                                <td className="p-2 text-black">	Sanitization in Public places</td>
                                <td className="p-2 text-black">PRJ/20-21/004</td>
                            </tr>
                            <tr>
                                <td className="p-2 text-black text-center">4</td>
                                <td className="p-2 text-black"> 16/29/2021</td>
                                <td className="p-2 text-black">Mask And Sanitizer distribution</td>
                                <td className="p-2 text-black">Protection from Covid</td>
                                <td className="p-2 text-black">PRJ/20-21/005</td>
                            </tr>
                          
                        </tbody>
                    </Table>
                </div>
            </div>
        </section>
    )
}

export default index
