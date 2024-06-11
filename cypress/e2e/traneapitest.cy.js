
import data from '../fixtures/payload.json'
describe('Undserstanding API test automation', () => {
    it.only('Simple Get Request', () => {


        cy.request("GET", "https://reqres.in/api/users?page=2").then((response) => {

           expect(response.status).to.equal(200)
           expect(response.body).to.have.property('total_pages')
           expect(response.body).to.have.property('per_page', 6)

           expect(response.body.data[0].email).to.equal('michael.lawson@reqres.in')

           cy.writeFile('cypress/fixtures/API/response.txt', response)
        })
    })


    it('POst Request Automation', () => {


        cy.request({
            method : "POST",
            url: Cypress.env('createemployee'),
            headers: {

                Cookie: Cypress.env("cookievalue"),
                Origin: "https://opensource-demo.orangehrmlive.com",
                Referer: "https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee"
            },
            body: data

        }).then((response) => {

           expect(response.status).to.equal(200)

           cy.writeFile('cypress/fixtures/API/employee.txt', response)
        })
    })


    it.only('Cypress Test Case - Understanding POST Method', function () {



        const payload = {
          "name": "Raju",
          "job": "Trainer"
        }
    
        cy.request('POST', 'https://reqres.in/api/users', payload).then((response) => {
    
          expect(response.status).equal(201);
          expect(response.body).to.have.property("name", "Raju")
    
          expect(response.body).to.have.property("job", "Trainer")
    
           var time = JSON.stringify(response.body.createdAt)
           var idvalue = JSON.stringify(response.body.id)
    
          cy.log(time)
          cy.log(idvalue)
    
           
    
        })
    
      })
})