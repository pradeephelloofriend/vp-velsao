const API_URL = process.env.API_PATH
import formidable from 'formidable';
import fs from 'fs';

export const config = {
    api: {
      bodyParser: false,
    },
  }
  
export default async function idUpload(req, res) {
    const data = await new Promise((resolve, reject) => {
        const form = formidable({
            keepExtensions: true,
            maxFileSize: 10_000_000,
            maxFieldsSize: 10_000_000,
            maxFields: 7,
            allowEmptyFiles: false,
            multiples: false,
        })
    
        form.parse(req, (err, fields, files) => {
          if (err) reject({ err })
          resolve({fields,files })
        }) 
      })
    //formData.append("title", "Hello World!");
    //console.log("req nom",data.files.file[0])
  
    
    /**********
     * slug[0]=item id,slug[1]=quantity,slug[2]=userid
     */
    //let data
    try{
        const result= await fetch(`${API_URL}media`, {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${process.env.JWT_TOKEN}`,
                "Content-Disposition": `attachment; filename=${data.files.file[0].newFilename}`,
                'Content-Type': `${data.files.file[0].mimetype}`, 
                
                //"content-type":"multipart/form-data"

            },
            body: fs.readFileSync(data.files.file[0].filepath, (err, data) => {
              if (err) {
                console.log('fs-error',err);
              }
              //console.log('fs-data',data)
            })
            
        })
        const answer= await result.json()
        return res.json(answer)

    }catch (error) {
        console.error(error)
        return res.status(error.status || 500).end(error.message)
    }
        
        
    
}