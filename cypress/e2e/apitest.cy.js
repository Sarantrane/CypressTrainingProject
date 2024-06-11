
import data from '../../fixtures/employeedata.json'
describe('Understanding API test Automation', () => {
    it.only('Get request Automation', () => {


        cy.request("GET", "https://reqres.in/api/users?page=2").then((response) => {

            expect(response.status).to.equal(200)

            expect(response.body.data[2].first_name).to.equal('Tobias')
            expect(response.body).to.have.property("page", 2)
            expect(response.body).to.have.property("per_page", 6)
            expect(response.body.data[0].id).to.equal(7)


        })

    })


    it('Get Employess Automation', () => {


        cy.request({

            method: "GET",
            url: Cypress.env('getemployees'),
            headers: {

                "Cookie": Cypress.env('cookivalue'),
                "Referer": "https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList"
            }
        }).then((response) => {

            expect(response.status).to.equal(200)
            cy.writeFile('cypress/fixtures/apires.txt', response)
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

            cy.writeFile('cypress/fixtures/module1/test10.json', { "Id": idvalue });

        })
    })


    it.only('Create Employees Automation', () => {


        cy.request({

            method: "POST",
            url: 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees',
            headers: {

                "Cookie": Cypress.env('cookivalue'),
                "Referer": "https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/166"
            },
            body: data
        }).then((response) => {

            expect(response.status).to.equal(200)

        })

    })
})