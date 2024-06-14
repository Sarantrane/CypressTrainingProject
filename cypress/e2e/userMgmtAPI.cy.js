import data from '../fixtures/usermgmt.json'
import data1 from '../fixtures/usermgmt1.json'

const token ='eyJhbGciOiJSUzI1NiIsImtpZCI6Ilg1ZVhrNHh5b2pORnVtMWtsMll0djhkbE5QNC1jNTdkTzZRR1RWQndhTmsiLCJ0eXAiOiJKV1QifQ.eyJ2ZXIiOiIxLjAiLCJpc3MiOiJodHRwczovL2NvcnBleHRkZXYuYjJjbG9naW4uY29tLzM0MGZjYzRiLThmZDktNGRiOS05MTFkLTI2OTIzZGE2MDIzMC92Mi4wLyIsInN1YiI6Ijk5YTk2NmNlLWM4YzYtNDU5YS1hMmJlLWJjZThhNDE2N2Q2OCIsImF1ZCI6IjMzMGNlOWFmLTQ2NWItNGI0My1iZmUzLTJhMjdkNDY3NDAxYSIsImV4cCI6MTcxODM1MjYxNiwiaWF0IjoxNzE4MzQ5MDE2LCJhdXRoX3RpbWUiOjE3MTgzNDkwMTYsImlkcCI6IkxvY2FsQWNjb3VudCIsInRmcCI6IkIyQ18xX1JPUEMiLCJhdF9oYXNoIjoibFIzUlZBLUZiU3BxTV9xemkwUWZLdyIsIm5iZiI6MTcxODM0OTAxNn0.R-dlXSoexnQDKYqC9ddB_9JBbXc-efR4bGoGQxjt2W5f7iB5nQg94q0_T10uaSfSYFp992X_cmTwk0zpHRyNCwM3ScgyYFxV02XTYYSpNtxIsNjbBSZ9zQ7b_-StGC637kd7HOIdhoKt2M259MasKE71sdTatjgSwS7yUySmxuaI-O2scdSxecVvmmJmNCrIzx5FJc1ApmdduVq3e2ioHe79MPCzVRr6Tp4qP3T_3NNq6U6or3ww5-1bGBwd0uW7nxcAox4iVJ6r-HZV2HRio5qWYDwKo9yZeWZZKIU5iCZACTCu5HXs0ifHjrfUFeZFOOXFq3IHlAg7_DArTJ6s4w'
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
            url: 'https://api.tis-stg.net/tis-security-context/securityContext',
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
             const authtoken = response.body.securityContextList[0].token
             cy.log(authtoken)   

        })
    
    })

   
it('POST', () => {

    cy.request(
        {

        method: "POST",
        url: 'https://api.tis-stg.net/tis-security-context/user',
        headers:{
        Authorization:'Bearer '+token
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

         expect(response.body.userIdentityList[0].email).to.equal('tranetistest+stgtest1@gmail.com')
         //expect(response.body.userIdentityList[0].firstName).to.equal('stgupdated')
         expect(response.body.userIdentityList[0].organizationIds[2]).to.equal('175890')
         expect(response.body.userIdentityList[0].roles[2]).to.equal('SuperAdmin')
         expect(response.body.userIdentityList[0].salesOfficeIds[5]).to.equal('12')

    })

})

it('PUT', () => {

    cy.request(
        {

        method: "PUT",
        url: 'https://api.tis-stg.net/tis-security-context/user/8153',
        headers:{
        Authorization:'Bearer '+token
        },
        body: data,
    

        // Authorization: {
        //     Username : 'tranetistest+Superadmin@gmail.com',
        //     Password : 'QWEqwe-123',
        
        
    }).then((response) => {

        expect(response.status).to.equal(200)
        cy.writeFile('cypress/fixtures/apiresponseusermgmt.txt', response)

        // const tokenvar = response.body.securityContextList[0].token;
        // return tokenvar   
         cy.log(response)     
         expect(response.body).to.have.property('userIdentityList')

         expect(response.body.userIdentityList[0].email).to.equal('tranetistest+stgtest1@gmail.com')
         expect(response.body.userIdentityList[0].firstName).to.equal('stg')
         expect(response.body.userIdentityList[0].organizationIds[2]).to.equal('175890')
         expect(response.body.userIdentityList[0].roles[2]).to.equal('SuperAdmin')
         expect(response.body.userIdentityList[0].salesOfficeIds[5]).to.equal('12')

    })

})



it('DELETE', () => {

    cy.request(
        {

        method: "DELETE",
        url: 'https://api.tis-stg.net/tis-security-context/user/8153',
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


