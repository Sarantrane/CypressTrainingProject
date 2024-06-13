import data from '../fixtures/usermgmt.json'
const token ='eyJhbGciOiJSUzI1NiIsImtpZCI6Ilg1ZVhrNHh5b2pORnVtMWtsMll0djhkbE5QNC1jNTdkTzZRR1RWQndhTmsiLCJ0eXAiOiJKV1QifQ.eyJ2ZXIiOiIxLjAiLCJpc3MiOiJodHRwczovL2NvcnBleHRkZXYuYjJjbG9naW4uY29tLzM0MGZjYzRiLThmZDktNGRiOS05MTFkLTI2OTIzZGE2MDIzMC92Mi4wLyIsInN1YiI6Ijk5YTk2NmNlLWM4YzYtNDU5YS1hMmJlLWJjZThhNDE2N2Q2OCIsImF1ZCI6IjMzMGNlOWFmLTQ2NWItNGI0My1iZmUzLTJhMjdkNDY3NDAxYSIsImV4cCI6MTcxODE4NzgyNCwiaWF0IjoxNzE4MTg0MjI0LCJhdXRoX3RpbWUiOjE3MTgxODQyMjQsImlkcCI6IkxvY2FsQWNjb3VudCIsInRmcCI6IkIyQ18xX1JPUEMiLCJhdF9oYXNoIjoiUS14WkZhZjYtRnpWN0Z3UTlpZ2pfZyIsIm5iZiI6MTcxODE4NDIyNH0.roWsi3iwKcz7FbspKZ9I5ngPrXvhSUJDB_ZJjWdv7HGSU85idnFG-A1mkapQ0JSOLBZnKPMTzwC1ElT3zR5LNnoQoJn6BqGveLVSa5dhMD7-rKM6m1Ye3xLFXT1zSMcD70ly3MWAVllV5ygWsiCm59wlau7YOFiQDkANXjMsDto_Nf0BNCS04v9JD555JS8xRa4if5mzbo15C0I93YeJeliASZmegiTDK0QsWoUvoImBwGIoIuiTSOhPFMlHm_Xmke1Wl8mC9_QAoEyr_HSGF0DTA2MPvlwBQPpF6UdzS0dviSYby7lktSpdVfvV1jFEzh94xXCx8CNZtSNHJ_M6yw'
const authtoken = ''

describe('Understanding API test Automation', () => {

    it('Authentication', () => {

        const requestBody = 
            {
                "username": "tranetistest+Superadmin@gmail.com",
                "password": "QWEqwe-123"
            }       

        cy.request( 
            {    
            method: "POST",
            url: 'https://api.tis-dev.trane.com/tis-security-context/securityContext',
            body: requestBody,
            headers:{
                Authorization: 'No Auth'
                 }
            // Authorization: {
            //     Username : 'tranetistest+Superadmin@gmail.com',
            //     Password : 'QWEqwe-123',
            
        })        
        .then((response) => {
    
            expect(response.status).to.equal(201)
            cy.writeFile('cypress/fixtures/apiresponseusermgmt.txt', response)
    
            // const tokenvar = response.body.securityContextList[0].token;
            // return tokenvar   
             cy.log(response)    
             expect(response.body).to.have.property('securityContextList')   
             const authtoken =     response.body.securityContextList[0].token
             cy.log(authtoken)   

        })
    
    })

   
// it('SImple GET Request', () => {

//     cy.request(
//         {

//         method: "GET",
//         url: 'https://api.tis-dev.trane.com/tis-security-context',
//         headers:{
//             Authorization:'Bearer '+token,
            
//         } ,  
//         qs:{
//             email:'tranetistest%2bSuperadmin@gmail.com'
//         } 
            
//         // Authorization: {
//         //     Username : 'tranetistest+Superadmin@gmail.com',
//         //     Password : 'QWEqwe-123',
        
        
//     }).then((response) => {

//         expect(response.status).to.equal(200)
//         cy.writeFile('cypress/fixtures/apiresponseusermgmt.txt', response)

//         // const tokenvar = response.body.securityContextList[0].token;
//         // return tokenvar   
//          cy.log(response)     
     

//     })

// })

//const token ='eyJhbGciOiJSUzI1NiIsImtpZCI6Ilg1ZVhrNHh5b2pORnVtMWtsMll0djhkbE5QNC1jNTdkTzZRR1RWQndhTmsiLCJ0eXAiOiJKV1QifQ.eyJ2ZXIiOiIxLjAiLCJpc3MiOiJodHRwczovL2NvcnBleHRkZXYuYjJjbG9naW4uY29tLzM0MGZjYzRiLThmZDktNGRiOS05MTFkLTI2OTIzZGE2MDIzMC92Mi4wLyIsInN1YiI6Ijk5YTk2NmNlLWM4YzYtNDU5YS1hMmJlLWJjZThhNDE2N2Q2OCIsImF1ZCI6IjMzMGNlOWFmLTQ2NWItNGI0My1iZmUzLTJhMjdkNDY3NDAxYSIsImV4cCI6MTcxODE4NzgyNCwiaWF0IjoxNzE4MTg0MjI0LCJhdXRoX3RpbWUiOjE3MTgxODQyMjQsImlkcCI6IkxvY2FsQWNjb3VudCIsInRmcCI6IkIyQ18xX1JPUEMiLCJhdF9oYXNoIjoiUS14WkZhZjYtRnpWN0Z3UTlpZ2pfZyIsIm5iZiI6MTcxODE4NDIyNH0.roWsi3iwKcz7FbspKZ9I5ngPrXvhSUJDB_ZJjWdv7HGSU85idnFG-A1mkapQ0JSOLBZnKPMTzwC1ElT3zR5LNnoQoJn6BqGveLVSa5dhMD7-rKM6m1Ye3xLFXT1zSMcD70ly3MWAVllV5ygWsiCm59wlau7YOFiQDkANXjMsDto_Nf0BNCS04v9JD555JS8xRa4if5mzbo15C0I93YeJeliASZmegiTDK0QsWoUvoImBwGIoIuiTSOhPFMlHm_Xmke1Wl8mC9_QAoEyr_HSGF0DTA2MPvlwBQPpF6UdzS0dviSYby7lktSpdVfvV1jFEzh94xXCx8CNZtSNHJ_M6yw'


it('POST', () => {

    cy.request(
        {

        method: "POST",
        url: 'https://api.tis-dev.trane.com/tis-security-context/user',
        headers:{
        Authorization:'Bearer '+authtoken
        },
        body: data,
    

        // Authorization: {
        //     Username : 'tranetistest+Superadmin@gmail.com',
        //     Password : 'QWEqwe-123',
        
        
    }).then((response) => {

        expect(response.status).to.equal(201)
        cy.writeFile('cypress/fixtures/apiresponseusermgmt.txt', response)

        // const tokenvar = response.body.securityContextList[0].token;
        // return tokenvar   
         cy.log(response)     
         expect(response.body).to.have.property('userIdentityList')

         expect(response.body.userIdentityList[0].email).to.equal('tranetistest+devtest12@gmail.com')

    })

})


it('DELETE', () => {

    cy.request(
        {

        method: "DELETE",
        url: 'https://api.tis-dev.trane.com/tis-security-context/user/68440',
        headers:{
        Authorization:'Bearer '+token
        }
    

        // Authorization: {
        //     Username : 'tranetistest+Superadmin@gmail.com',
        //     Password : 'QWEqwe-123',
        
        
    }).then((response) => {

        expect(response.status).to.equal(200)

        // const tokenvar = response.body.securityContextList[0].token;
        // return tokenvar   
         cy.log(response)     
    })

})

})


