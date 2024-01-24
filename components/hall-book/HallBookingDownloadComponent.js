import React from 'react'
import {Result,Button} from 'antd'
import { getHallBookingById, getHallBookingSlots } from '../../lib/api';
import jsPDF from "jspdf";
import "jspdf-autotable";
const HallBookingDownloadComponent = ({onHide,bookingId}) => {
    const[isLoading,setIsLoading]=React.useState(false)
    const [crData,setCrData]=React.useState(null)
    const [hbSlotData,setHbslotData]=React.useState(null)
    React.useEffect(()=>{
        let isApiSubscribed = true;
        setIsLoading(true)
        async function fetchData() {
            const cData = await getHallBookingById(Number(bookingId))//applo client  
            const hbSlot=await getHallBookingSlots()
            // 👇️ only update state if component is mounted
            //console.log('cddatahalllist',cData)
            if (isApiSubscribed) {
                let arr=[]
                
                /*cData.forEach(elt => {
                    arr.push({
                        booingId:elt.databaseId, 
                        hirer:elt.hall_booking.hirer,
                        event:elt.hall_booking.event,
                        bookingDate:elt.hall_booking.bookingDate,
                        contactNumber:elt.hall_booking.contactNumber,
                        address:elt.hall_booking.address,
                        facilityInformation:elt.hall_booking.facilityInformation
                    })
                });*/
                setHbslotData(hbSlot)
                setCrData(cData)
                //console.log('arr',arr)
                setIsLoading(false)
            }
          }
          if (bookingId!==null) {
            fetchData()
          }
          
        
          return () => {
            // cancel the subscription
            isApiSubscribed = false;
          };
    },[bookingId])
    const exportPDF = () => {
      const sTaken=crData.hall_booking.slotTaken.split(',')
                const sArry=[]
                        sTaken.forEach(ex => {
                           const tempData=hbSlotData.find((x)=>{return ex==x.termTaxonomyId})
                           //console.log('tempdata',tempData)
                           
                           /*tempData.forEach(ed => {
                            
                           });*/
                           sArry.push(tempData.name)
                            
                        });
        const unit = "pt";
        const size = "A4"; // Use A1, A2, A3 or A4
        const orientation = "portrait"; // portrait or landscape
    
        const marginLeft = 40;
        const doc = new jsPDF(orientation, unit, size);
    
        doc.setFontSize(20);
    
        const title = "Chicalim Panchayat Hall Booking Form",
        xOffset = (doc.internal.pageSize.width / 2) - (doc.getStringUnitWidth(title) * doc.internal.getFontSize() / 2); 
        const headers = [["Id","Name","Event", "Date","Slot","Contact","Address","Facility"]];
        
        const ID = 'ID : ' + crData.databaseId;
        const Name = 'Name of Hirer: ' + crData.hall_booking.hirer;
        const Event = 'Event : ' + crData.hall_booking.event;
        const Date = 'Date of Hall Booking: ' + crData.hall_booking.bookingDate;
        const Slot = 'Slot : ' + sArry.toString();
        const Contact = 'Contact No: ' + crData.hall_booking.contactNumber;
        const Address = 'Address : ' + crData.hall_booking.address;
        // const Facility = 'Facility : ' + crData.hall_booking.facilityInformation ;
        const FacilityString = crData.hall_booking.facilityInformation ;
        const delimiter = ',';
        const Facility = FacilityString.split(delimiter);
        const FacAr=[]

        Facility.forEach(element => {
          FacAr.push(element)
        });

        let FacArData='\r\n'+FacAr.join('\r\n').toString()
        const FacilityDtls = 'Facility : ' + FacArData;

        const titleRules = "Rules and Regulations",
        xOffset2 = (doc.internal.pageSize.width / 2) - (doc.getStringUnitWidth(titleRules) * doc.internal.getFontSize() / 2); 
        
        const textRules = "I have read and understood the rules and regulations to hire the Panchayat hall. Further, I hereby agree to follow \r\nand comply to the rules and regulations thereof."
        const signatureRules = "Signature : _______________"
        const dateRules = "Date : _______________"

        const data =[[
            crData.databaseId, 
            crData.hall_booking.hirer,
            crData.hall_booking.event,
            crData.hall_booking.bookingDate,
            sArry.toString(),
            crData.hall_booking.contactNumber,
            crData.hall_booking.address,
            crData.hall_booking.facilityInformation 
        ]]
    
        let content = {
          startY: 50,
          head: headers,
          body: data
        };
    
        doc.text(title, xOffset, 20);
        // doc.autoTable(content);

        doc.setFontSize(10);
        doc.text(ID, marginLeft, 60)
        doc.text(Name, marginLeft, 100)
        doc.text(Event, marginLeft, 140)
        doc.text(Date, marginLeft, 180)
        doc.text(Slot, marginLeft, 220)
        doc.text(Contact, marginLeft, 260)
        doc.text(Address, marginLeft, 300)
        doc.text(FacilityDtls, marginLeft, 340)
        doc.setFontSize(15);
        doc.text(titleRules, xOffset2, 600)
        doc.setFontSize(10);
        doc.text(textRules, marginLeft, 640)
        doc.text(signatureRules, marginLeft, 700)
        doc.text(dateRules, marginLeft, 760)
        doc.save("report.pdf")

        window.location.href = window.location.href;
      }
  return (
    <>
    <Result maskClosable = {false}
                      status="success"
                      title="Hall is booked"
                      subTitle={<a>Please save your Booking Number: <span className='text-danger'><b><u>{bookingId}</u></b></span></a> }
                      extra={[
                          
                          <Button onClick={() => onHide()} key="buy">Close</Button>,
                          <Button onClick={() => exportPDF()} key="1buiy1">View/Download</Button>
                      ]}
                  />
    </>
  )
}

export default HallBookingDownloadComponent