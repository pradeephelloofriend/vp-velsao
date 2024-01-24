const API_URL = process.env.API_PATH

export default async function hallBookingByDate(req, res) {
    
    const {date} = req.body;
    //console.log("req nom", date)
    /**********
     * slug[0]=item id,slug[1]=quantity,slug[2]=userid
     */
    //let data
    try{
        const result= await fetch(`${API_URL}hall_booking?booking_date=${date}&_fields=acf.booking_date,acf.slot_taken,booking_date`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.JWT_TOKEN}`
                
            },
            
        })
        const data= await result.json()
        return res.json(data)

    }catch (error) {
        console.error(error)
        return res.status(error.status || 500).end(error.message)
    }
        
        
    
}