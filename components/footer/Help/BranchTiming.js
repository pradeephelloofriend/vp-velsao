import React from 'react'

const BranchTiming = () => {
    return (
        <section className="wrapper bg-light">
    <div className="container py-10 py-md-6">
        <table className="table table-bordered border-dark">
            <thead>
                <tr className="banknameheading2">
                    <th colSpan="2" scope="row">Pirna Bank Timings</th>
                </tr>
                <tr className="secondrowbgcolor">
                    <th  scope="row" className="mainheaders2"><b>Days</b></th>
                    <th scope="col" className="secondcolspace2"><b>Business Days</b></th>
                </tr>
            </thead>
            <tbody>
                <tr className="detailscontentbgcolor">
                    <th scope="row" className="Daysdetails">Bank Timings Weekdays<br></br>(Monday to Friday)</th>
                    <td scope="col" className="Daysdetails">Open Till 4 PM</td>
                    
                </tr>
                <tr className="detailscontentbgcolor">
                    <th scope="row" className="Daysdetails">Bank Timings On Saturday<br></br>(1<sup>st</sup>,3<sup>rd</sup>,5<sup>th</sup> Saturday of Every Month)</th>
                    <td scope="col" className="Daysdetails">Open Till 4 PM</td>
                        
                </tr>
                <tr className="detailscontentbgcolor">
                <th scope="row" className="Daysdetails">Bank Timings On Saturday<br></br>(2<sup>nd</sup>,4<sup>th</sup> Saturday of Every Month)</th>
                        <td scope="col" className="Daysdetails">Bank is Closed On These Days</td>
                       
                </tr>
            </tbody>
        </table>
    </div>
</section>
    )
}

export default BranchTiming
