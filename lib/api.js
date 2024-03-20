const API_URL = process.env.GQL_API_PATH
const TEMP_API_URL = process.env.TEMP_GQL_API_PATH
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
    console.log("json ", json)
    if (json.errors) {
      console.error(json.errors)
      throw new Error('Failed to fetch API')
    }
    return json.data
  }

  
  export async function getMenuItems() {
    const data = await fetchAPI(`
    query getMenuItems{
        menuItems(where: {location: HCMS_MENU_HEADER, parentId: "0"}, first: 20) {
            edges {
              node {
                label
                path
                uri
                route {
                  code
                  link
                  name
                  iscomplete
                }
                childItems {
                  edges {
                    node {
                      label
                      uri
                      route {
                        code
                        link
                        name
                        iscomplete
                        
                      }
                    }
                  }
                }
                
              }
            }
          }
      }
    `)
    return data?.menuItems?.edges
  }
export async function getFootMenuItems() {
  const data = await fetchAPI(`
    query getFootMenuItems{
      menuItems(where: {location: HCMS_MENU_FOOTER, parentId: "0"}) {
        edges {
          node {
            label
            url
            childItems {
              edges {
                node {
                  label
                  url
                  
                }
              }
            }
          }
        }
      }
      }
    `)
  return data?.menuItems?.edges
}


export async function getCommitteeData(tabKey) {
  //console.log('tabKey-applo',tabKey)
  const data = await fetchAPI(`
  query getCommitteeData {
    committeeBy(uri: "${tabKey}") {
      committee {
        fieldGroupName
        title
        desc
        members {
          name
          designation
          contactNo
          emailId
          fieldGroupName
        }
        
      }
      slug
      uri
    }
  }
    `)
  return data?.committeeBy?.committee
}

export async function getTenderData(tabKey) {
  //console.log('tabKey-applo',tabKey)
  const data = await fetchAPI(`
    query getTenderData {
      tenderBy(uri: "/tender/tenders/") {
        title
        tender {
          tenders {
            title
            date
            document {
              mediaItemUrl
              sourceUrl
            }
          }
        }
      }
    }
    `)
  return data?.tenderBy?.tender
}


export async function gettaxes(tabKey) {
  //console.log('tabKey-applo',tabKey)
  const data = await fetchAPI(`
  query taxes {
    pageBy(uri: "/taxes-fees/") {
      slug
      title
      taxes_fees {
        fees {
          fieldGroupName
          feesInformation {
            entry
            for
            rate
          }
        }
        taxes {
          fieldGroupName
          taxInformation {
            entry
            taxes
            for
            rate
          }
        }
      }
    }
  }
  `)
  return data?.pageBy?.taxes_fees
}

export async function getpower(tabKey) {
  //console.log('tabKey-applo',tabKey)
  const data = await fetchAPI(`
  query power {
    pageBy(uri: "/powers-duties-of-officers/") {
      slug
      title
      obligations {
        fieldGroupName
        obligation {
          title
          desc
        }
      }
    }
  }
  `)
  return data?.pageBy?.obligations
}

export async function getobligations(tabKey) {
  //console.log('tabKey-applo',tabKey)
  const data = await fetchAPI(`
  query poweroblig {
    pageBy(uri: "/v-p-obligations/") {
      slug
      title
      obligations {
        fieldGroupName
        obligation {
          title
          desc
        }
      }
    }
  }
  `)
  return data?.pageBy?.obligations
}


export async function getCertificateData(tabKey) {
  //console.log('tabKey-applo',tabKey)
  const data = await fetchAPI(`
    query getCertificateData{
      pageBy(uri: "${tabKey}") {
        certificates {
          applicationTab {
            desc
            fieldGroupName
            cardMenuBox {
              fieldGroupName
              manuName
              menuDesc
              menuButton {
                btnLink
                btnName
                fieldGroupName
              }
            }
          }
          faqTab {
            desc
            fieldGroupName
            ttitle
          }
          otherTabs {
            desc
            fieldGroupName
            tabName
          }
          requiredDocuments {
            name
            description
            id
            termTaxonomyId
          }
        }
        slug
        title
      }
      }
    `)
  return data?.pageBy?.certificates
}
export async function getRtiPageData(tabKey) {
  //console.log('tabKey-applo',tabKey)
  const data = await fetchAPI(`
    query getRtiPageData{
      pageBy(uri: "${tabKey}") {
        
    slug
    title
    rti {
      description
      button {
        link
        name
      }
      imageBlock {
        desc
        images {
          link
          sizes
          title
          uri
        }
      }
    }
      }
      }
    `)
  return data?.pageBy?.rti
}
export async function getAllSchemeData(tabKey) {
  //console.log('tabKey-applo',tabKey)
  const data = await fetchAPI(`
    query getAllSchemeData{
      allSchemes {
        nodes {
          title
          slug
          uri
        }
      }
    }
  `)
  return data?.allSchemes?.nodes
}
export async function getNewsLetterData(tabKey) {
  //console.log('tabKey-applo',tabKey)
  const data = await fetchAPI(`
    query getNewsLetterData{
      newsLetters {
        nodes {
          slug
          title
          date
          newsLetter {
            date
            downloadUrl
            title
          }
          
        }
      }
    }
  `)
  return data?.newsLetters?.nodes
}

export async function getAuditReportData(tabKey) {
  //console.log('tabKey-applo',tabKey)
  const data = await fetchAPI(`
    query getAuditReportData {
      auditReports {
        nodes {
          slug
          title
          date
          auditReport {
            date
            downloadUrl
            title
            desc
            mainDesc
          }
        }
      }
    }
  `)
  return data?.auditReports?.nodes
}

export async function getAnnualFormData(tabKey) {
  //console.log('tabKey-applo',tabKey)
  const data = await fetchAPI(`
    query getAnnualFormData {
      annualForms {
        nodes {
          slug
          title
          date
          annualForm {
            date
            downloadUrl
            desc
            mainDesc
            title
          }
        }
      }
    }
  `)
  return data?.annualForms?.nodes
}

export async function getDevWorkData(tabKey) {
  //console.log('tabKey-applo',tabKey)
  const data = await fetchAPI(`
    query getDevWorkData {
      developmentWorks {
        nodes {
          slug
          title
          date
          develop {
            date
            desc
            downloadUrl
            mainDesc
            title
          }
        }
      }
    }
  `)
  return data?.developmentWorks?.nodes
}

export async function getFormSevenData(tabKey) {
  //console.log('tabKey-applo',tabKey)
  const data = await fetchAPI(`
    query getFormSevenData {
      form7s {
        nodes {
          slug
          title
          date
          form7 {
            date
            desc
            downloadUrl
            mainDesc
            title
          }
        }
      }
    }
  `)
  return data?.form7s?.nodes
}

export async function getPublicNoticeData(tabKey) {
  //console.log('tabKey-applo',tabKey)
  const data = await fetchAPI(`
    query getPublicNoticeData{
      allNotices {
        nodes {
          uri
          title
          slug
          notices {
            date
            desc
            title
            downloadUrl
          }
        }
      }
    }
  `)
  return data?.allNotices?.nodes
}
export async function getVillageData(tabKey) {
  //console.log('tabKey-applo',tabKey)
  const data = await fetchAPI(`
  query getVillageData {
    pageBy(uri: "/village/") {
      slug
      title
      village {
        desc
        otherDesc
        imageUrl
        title
        image {
          uri
          sourceUrl
        }
      }
    }
  }
  `)
  return data?.pageBy?.village
}
export async function getSarpanchMsg(tabKey) {
  //console.log('tabKey-applo',tabKey)
  const data = await fetchAPI(`
  query getSarpanchMsg {
    pageBy(uri: "/message-from-the-sarpanch/") {
      slug
      title
      sarpanchMsg {
        desc
        imageUrl
        image {
          sourceUrl
          uri
        }
      }
    }
  }
  `)
  return data?.pageBy?.sarpanchMsg
}
export async function getMediaGalleryData() {
  //console.log('tabKey-applo',tabKey)
  const data = await fetchAPI(`
  query getMediaGalleryData {
    mediaGalleries {
      edges {
        node {
          title
          slug
          gallery {
            content {
              categoryName {
                name
                slug
                taxonomyName
                termTaxonomyId
                uri
              }
              image {
                slug
                mediaItemUrl
              }
            }
          }
        }
      }
    }
  }
  `)
  return data?.mediaGalleries?.edges
}

export async function getGalleryCat() {
  //console.log('tabKey-applo',tabKey)
  const data = await fetchAPI(`
  query getGalleryCat {
    mediaSubcategories {
      nodes {
        termTaxonomyId
        name
      }
    }
  }
  `)
  return data?.mediaSubcategories?.nodes
}

export async function getGalleryByCat(catId) {
  //console.log('tabKey-applo',tabKey)
  const data = await fetchAPI(`
  query getGalleryByCat {
    mediaSubcategories(where: {termTaxonomyId: "${catId}"}) {
      nodes {
        termTaxonomyId
        name
        mediaGalleries {
          nodes {
            title
            gallery {
              content {
                categoryName {
                  name
                  termTaxonomyId
                }
                image {
                  title
                  mediaItemUrl
                }
              }
            }
          }
        }
      }
    }
  }
  `)
  return data?.mediaSubcategories?.nodes
}

export async function getNoticeHomeData() {
  //console.log('tabKey-applo',tabKey)
  const data = await fetchAPI(`
  query getNoticeHome {
    allNotices(first: 5) {
      nodes {
        notices {
           title
          date
          downloadUrl
        }
      }
    }
  }
  `)
  return data?.allNotices?.nodes
}
export async function getSliderHomeData() {
  //console.log('tabKey-applo',tabKey)
  const data = await fetchAPI(`
  query getSliderHomeData {
    pageBy(pageId: 578) {
      homePage {
        slider {
          image {
            sourceUrl
          }
        }
      }
    }
  }
  `)
  return data?.pageBy?.homePage?.slider
}
export async function getAllSchemeDataHome(tabKey) {
  //console.log('tabKey-applo',tabKey)
  const data = await fetchAPI(`
    query getAllSchemeDataHome{
      allSchemes {
        nodes {
          title
          slug
          uri
          schemes {
            title
            image {
              sourceUrl
            }
          }
        }
      }
    }
  `)
  return data?.allSchemes?.nodes
}
export async function getNewsLetterDataHome(tabKey) {
  //console.log('tabKey-applo',tabKey)
  const data = await fetchAPI(`
    query getNewsLetterDataHome{
      newsLetters(first: 5) {
        nodes {
          slug
          title
          date
          newsLetter {
            date
            downloadUrl
            title
            desc
          }
        }
      }
    }
  `)
  return data?.newsLetters?.nodes
}
export async function getHTDataTest(tabKey) {
  //console.log('tabKey-applo',tabKey)
  const data = await fetchAPI(`
  query getHTDataTest {
    pageBy(uri: "/housetax-test/") {
      slug
      title
      village {
        desc
        otherDesc
        imageUrl
        title
        image {
          uri
          sourceUrl
        }
      }
    }
  }
  `)
  return data?.pageBy?.village
}
export async function getAppTest(tabKey) {
  //console.log('tabKey-applo',tabKey)
  const data = await fetchAPI(`
  query getAppTest {
    pageBy(uri: "/applications/") {
      slug
      title
      village {
        desc
        otherDesc
        title
      }
    }
  }
  `)
  return data?.pageBy?.village
}
export async function getGrantsTest(tabKey) {
  //console.log('tabKey-applo',tabKey)
  const data = await fetchAPI(`
  query getGrantsTest {
    pageBy(uri: "/grants-received/") {
      slug
      title
      village {
        desc
        otherDesc
        title
      }
    }
  }
  `)
  return data?.pageBy?.village
}
export async function getTendersTest(tabKey) {
  //console.log('tabKey-applo',tabKey)
  const data = await fetchAPI(`
  query getTendersTest {
    pageBy(uri: "/tenders/") {
      slug
      title
      village {
        desc
        otherDesc
        title
      }
    }
  }
  `)
  return data?.pageBy?.village
}
export async function getAdminAuditTest(tabKey) {
  //console.log('tabKey-applo',tabKey)
  const data = await fetchAPI(`
  query getAdminAuditTest {
    pageBy(uri: "/admin-and-audit/") {
      slug
      title
      village {
        desc
        otherDesc
        title
      }
    }
  }
  `)
  return data?.pageBy?.village
}


export async function getInfraData(tabKey) {
  //console.log('tabKey-applo',tabKey)
  const data = await fetchAPI(`
  query getInfraData {
    infrastructures(first: 10) {
      nodes {
        slug
        uri
        title
        infrastructure {
          infraTitle
          infraDetails {
            desc
            image {
              sourceUrl
            }
            name
          }
        }
      }
    }
  }
  `)
  return data?.infrastructures?.nodes
}


export async function getRecentDevData(tabKey) {
  //console.log('tabKey-applo',tabKey)
  const data = await fetchAPI(`
  query getRecentDevData {
    developments(first: 50) {
      nodes {
        developments {
          desc
          title
          image {
            sourceUrl
          }
        }
      }
    }
  }
  `)
  return data?.developments?.nodes
}

export async function getPanchMemData(tabKey) {
  //console.log('tabKey-applo',tabKey)
  const data = await fetchAPI(`
  query getPanchMemData {
    pageBy(uri: "panchayat-members") {
      slug
      title
      members {
        directorateOfPanchayats {
          blockDevelopmentOfficer {
            designation
            name
            image {
              sourceUrl
            }
            members {
              designation
              image {
                sourceUrl
                title
              }
              member {
                designation
                name
                wordNo
                image {
                  sourceUrl
                  title
                }
                fieldGroupName
              }
              name
              fieldGroupName
            }
            fieldGroupName
          }
          designation
          name
          fieldGroupName
          image {
            sourceUrl
          }
        }
        fieldGroupName
      }
    }
  }
  `)
  return data?.pageBy?.members
}

export async function getFacilityTypes(tabKey) {
  //console.log('tabKey-applo',tabKey)
  const data = await fetchAPI(`
  query getFacilityTypes {
    facilityTypes {
      nodes {
        termTaxonomyId
        name
      }
    }
  }
  `)
  return data?.facilityTypes?.nodes
}

export async function getHallBookingList(tabKey) {
  //console.log('tabKey-applo',tabKey)
  const data = await fetchAPI(`
  query getHallBookingList {
    hallBookings(first: 100) {
      nodes {
        title
        databaseId
        hall_booking {
          address
          booingId
          bookingDate
          contactNumber
          event
          facilityInformation
          hirer
          numberOfHour
          slotTaken
          idProof {
            sourceUrl
            mediaItemUrl
          }
        }
      }
    }
  }
  `)
  return data?.hallBookings?.nodes
}
export async function getHallBookingById(id) {
  //console.log('tabKey-applo',tabKey)
  const data = await fetchAPI(`
  query getHallBookingById {
    hallBookingBy(hallBookingId:${Number(id)}) {
      databaseId
      hall_booking {
        address
        booingId
        bookingDate
        contactNumber
        event
        facilityInformation
        hirer
        numberOfHour
        slotTaken
      }
    }
  }
  `)
  return data?.hallBookingBy
}
export async function getHallBookingSlots (id) {
  //console.log('tabKey-applo',tabKey)
  const data = await fetchAPI(`
  query getHallBookingSlots {
    hallbookingSlots {
      nodes {
        termTaxonomyId
        name
        slug
        taxonomyName
      }
    }
  }
  `)
  return data?.hallbookingSlots?.nodes
}
export async function getPanchStaff(tabKey) {
  //console.log('tabKey-applo',tabKey)
  const data = await fetchAPI(`
  query getPanchStaff {
    pageBy(uri: "/panch-staff-members/") {
      slug
      title
      panchStaffMembers {
        panchStaffMembers {
          fieldGroupName
          membersInformation {
            entry
            designation
            name
            mobileNo
          }
        }
      }
    }
  }
  `)
  return data?.pageBy?.panchStaffMembers
}
export async function getSliderEventData() {
  //console.log('tabKey-applo',tabKey)
  const data = await fetchAPI(`
  query getSliderEventData {
    pageBy(pageId: 578) {
      homePage {
        eventSlider {
          image {
            sourceUrl
          }
          entry
          title
          link
        }
      }
    }
  }
  `)
  return data?.pageBy?.homePage?.eventSlider
}
export async function getTenureOfSarpanch() {
  //console.log('tabKey-applo',tabKey)
  const data = await fetchAPI(`
  query getTenureOfSarpanch {
    pageBy(uri: "/tenure-of-sarpanch/") {
      slug
      tenureOfSarpanch {
        tenureSarpanch {
          tenureInformation {
            entry
            designation
            nameOfSarpanch
            tenureSarpanchesFrom
            tenureSarpanchesTo
          }
        }
      }
    }
  }
`)
return data?.pageBy?.tenureOfSarpanch
}

export async function getGalleryV2Data(tabKey) {
  //console.log('tabKey-applo',tabKey)
  const data = await fetchAPI(`
  query getGalleryV2Data {
    mediaGalleriesv2 {
      nodes {
        title
        slug
        galleryv2 {
          image {
            mediaItemUrl
          }
          title
          articleGallery {
            mediaItemUrl
          }
        }
      }
    }
  }
  `)
  return data?.mediaGalleriesv2?.nodes
}