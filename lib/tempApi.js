const API_URL = process.env.TEMP_GQL_API_PATH

async function fetchAPI(query = '', { variables } = {}) {
    const headers = { 'Content-Type': 'application/json' }
  
    if (process.env.GQL_JWT_TOKEN) {
      headers[
        'Authorization'
      ] = `Bearer ${process.env.GQL_JWT_TOKEN}`
    }
  
    // WPGraphQL Plugin must be enabled
    const res = await fetch(`${API_URL}`, {
      headers,
      method: 'POST',
      body: JSON.stringify({
        query,
        variables,
      }),
    })
  
    const json = await res.json()
    if (json.errors) {
      console.error(json.errors)
      throw new Error('Failed to fetch API')
    }
    return json.data
  }

  export async function getProccedingData() {
    //console.log('tabKey-applo',tabKey)
    const data = await fetchAPI(`
    query getProccedings {
      proceedings {
        nodes {
          title
          uri
          proceedings {
            title
            description
            dateAndTime
            duration
            startTime
            venue
            proceedingsPeriods {
              termTaxonomyId
              name
            }
            attachments {
              sourceUrl
              mediaItemUrl
            }
            attendanceDetails {
              noOfAttendees
              uploadAttendanceSheets {
                sourceUrl
                mediaItemUrl
              }
            }
            chair {
              termTaxonomyId
              name
              description
            }
            individualProceedings {
              title
              seconder
              proposer
              description
            }
            recorder {
              designation {
                description
                name
                termTaxonomyId
              }
            }
          }
        }
      }
    }
    `)
    return data?.proceedings?.nodes
  }