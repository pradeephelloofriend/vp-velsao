const API_URL = process.env.API_PATH

export default async function addNewBooking(req, res) {
    //console.log("req nom", req.query.slug[0])
    const{dataTemp}=req.body
    /**********
     * slug[0]=item id,slug[1]=quantity,slug[2]=userid
     */
    //let data
    
    try{
        const result= await fetch(`${API_URL}hall_booking`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${process.env.JWT_TOKEN}`
            },
            body: JSON.stringify({
                "title": dataTemp.event,
                "status": "publish",
                "fields": {
                    "booking_date": dataTemp.dob,
                    "event": dataTemp.event,
                    "hirer": dataTemp.hirer,
                    "address": dataTemp.address,
                    "contact_number": dataTemp.contact,
                    "id_proof":{
                        "ID": dataTemp.imgId,
                       "id":dataTemp.imgId 
                    } ,
                    "facility_information": dataTemp.fInfo,
                    "slot_taken":dataTemp.noh.toString()

                }
            })
        })
        const answer= await result.json()
        return res.json(answer)

    }catch (error) {
        console.error(error)
        return res.status(error.status || 500).end(error.message)
    }
        
        
    
}