import data from '../fixtures/usermgmt.json'

describe('Understanding API test Automation', () => {


    it('Get Users Automation', () => {


        cy.request({

            method: "POST",
            url: 'https://api.tis-dev.trane.com/tis-security-context/securityContext',
            Authorization:'No Auth',
            body: 
            {
                "username": "tranetistest+Superadmin@gmail.com",
                "password": "QWEqwe-123"
            },

            Authorization: {
              Username : 'tranetistest+Superadmin@gmail.com',
              Password : 'QWEqwe-123',
            },
            
            
        }).then((response) => {

            expect(response.status).to.equal(201)
            cy.writeFile('cypress/fixtures/apiresponseusermgmt.txt', response)

            const tokenvar = response.body.securityContextList[0].token;
            return tokenvar   
            // cy.log(tokenvar)     
        })

    })

})


//    // it('Get Token And pass Directly in header in other GET User Request', () => {

//     .then((token) => {

//         cy.request({

//             method: "GET",
//             url: 'https://api.tis-dev.trane.com/tis-security-context/user?email=tranetistest+Superadmin@gmail.com',
//             headers: {

//            Authorization: 'Bearer ' +token
//             }
//         }).then((response) => {

//             expect(response.status).to.equal(200)
//             expect(response.body).to.have.property('userId');
//         })

// })

// //it('POST Request', () => {

// .then((token) => {

//     cy.request({

//         method: "POST",
//         url: 'https://api.tis-dev.trane.com//tis-security-context/user',
//         headers: {

//        Authorization: 'Bearer ' +token
//         },
//         body: data

//     }).then((response) => {

//         expect(response.status).to.equal(200)
//         expect(response.body).to.have.property("username", "tranetistest+devtest1@gmail.com")
//         expect(response.body).to.have.property("firstName", "dev")

//         expect(response.body.userIdentityList[0].email).to.equal("tranetistest+devtest1@gmail.com")
//         var userid = JSON.stringify(userIdentityList[0].userId)
//         const userid = response.body.userIdentityList[0].userId;
//         return userid    
//         cy.log(userid)


//     })


//    // it('Cypress Test Case - Understanding DELETE Method', function () {
//     .then((token,userid) => {

//         cy.request({
//         method: "DELETE",
//         url: 'https://api.tis-dev.trane.com//tis-security-context/user/${userid}',
//         headers: {

//        Authorization: 'Bearer ' +token
//         },
//        }).then((response) => {

//           expect(response.status).equal(200);
    
//         })
    
//       })

//})





   