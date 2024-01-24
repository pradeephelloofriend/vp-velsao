import React from 'react'

import { getHallBookingList } from '../../lib/api'
import jsPDF from "jspdf";
import "jspdf-autotable";
const HallBookListComponent = () => {
    const[isLoading,setIsLoading]=React.useState(false)
    const [crData,setCrData]=React.useState(null)
    React.useEffect(()=>{
        let isApiSubscribed = true;
        setIsLoading(true)
        async function fetchData() {
            const cData = await getHallBookingList()//applo client  
            // 👇️ only update state if component is mounted
            if (isApiSubscribed) {
                let arr=[]
                cData.forEach(element => {
                    arr.push(element.hall_booking)
                });
                setCrData(arr)
                setIsLoading(false)
            }
          }
          fetchData()
        
          return () => {
            // cancel the subscription
            isApiSubscribed = false;
          };
    },[])
    const exportPDF = () => {
        const unit = "pt";
        const size = "A4"; // Use A1, A2, A3 or A4
        const orientation = "landscape"; // portrait or landscape
    
        const marginLeft = 40;
        const doc = new jsPDF(orientation, unit, size);
    
        doc.setFontSize(15);
    
        const title = "Hall Booking List"; 
        const headers = [["Id","Name","Event", "Date","Contact","Address","Facility"]];
    
        const data = crData.map(elt=> [elt.booingId, elt.hirer,elt.event,elt.bookingDate,elt.contactNumber,elt.address,elt.facilityInformation]);
    
        let content = {
          startY: 50,
          head: headers,
          body: data
        };
    
        doc.text(title, marginLeft, 40);
        doc.autoTable(content);
        doc.save("report.pdf")
      }
    //console.log('halllist',crData)
    return (
        <section className="wrapper bg-gray">
            <div className="container-fluid  py-10 py-md-12">
                <div className="row">
                    <div className='col-12'>
                        <div className='text-align center'>
                            <button onClick={() => exportPDF()}>Generate Report</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default HallBookListComponent