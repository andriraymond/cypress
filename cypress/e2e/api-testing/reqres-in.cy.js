describe('reqres-in api testing with GET requests', () =>{
    const baseUrl = 'https://reqres.in';

    it('GET - LIST USERS', () => {
        cy.request('GET', `${baseUrl}/api/users?page=2`)
        .its('status')
        .should('equal', 200);
    });

    it('GET - SINGLE USER', () => {
        cy.request("GET", `${baseUrl}/api/users/2`)
        .its("status")
        .should("equal", 200);
    });

    it('GET - SINGLE USER NOT FOUND', () => {
        cy.request({
            method: 'GET',
            url: `${baseUrl}/api/users/23`,
            failOnStatusCode: false,
        }).then((response) => {
            cy.log('Response:', response);
        expect(response.status).to.equal(404);
        });
    });

    it('GET - LIST <RESOURCE>', () => {
        cy.request("GET", `${baseUrl}/api/unknown`)
        .its("status")
        .should("equal", 200);
    });

    it('GET - SINGLE <RESOURCE>', () => {
        cy.request("GET", `${baseUrl}/api/unknown/2`)
        .its("status")
        .should("equal", 200);
    });

    it('GET - SINGLE <RESOURCE> NOT FOUND', () => {
        cy.request({
            method: 'GET',
            url: `${baseUrl}/api/unknown/23`,
            failOnStatusCode: false,
        }).then((response) => {
            cy.log('Response:', response);
        expect(response.status).to.equal(404);
        });
    });
});

describe('reqres-in api testing with POST method', () => {
    const baseUrl = "https://reqres.in";

    it('POST - CREATE', () => {
        cy.request({
            method: "POST", 
            url:    `${baseUrl}/api/users`,
            body: {
                'name': 'morpheus',
                'job':  'leader'
            },
        }).then((response) => {
            cy.log('Response:', response);
        expect(response.status).to.equal(201);
        });
    });

    it('POST - REGISTER - SUCCESFUL', () => {
        cy.request({
            method: "POST", 
            url:    `${baseUrl}/api/register`,
            body: {
                'email': 'eve.holt@reqres.in',
                'password':  'pistol'
            },
        }).then((response) => {
            cy.log('Response:', response);
        expect(response.status).to.equal(200);
        });
    });

    it('POST - REGISTER - UNSUCCESFUL', () => {
        cy.request({
            method: "POST", 
            url:    `${baseUrl}/api/register`,
            body: {
                'email': "sydney@fife",
            },
            failOnStatusCode: false,
        }).then((response) => {
            cy.log('Response:', response);
        expect(response.status).to.equal(400);
        });
    });

    it('POST - LOGIN - SUCCESFUL', () => {
        cy.request({
            method: "POST", 
            url:    `${baseUrl}/api/login`,
            body: {
                'email': 'eve.holt@reqres.in',
                'password': 'cityslicka'
            },
        }).then((response) => {
            cy.log('Response:', response);
        expect(response.status).to.equal(200);
        });
    });

    it('POST - LOGIN - UNSUCCESFUL', () => {
        cy.request({
            method: "POST", 
            url:    `${baseUrl}/api/login`,
            body: {
                'email': 'peter@klaven'
            },
            failOnStatusCode: false,
        }).then((response) => {
            cy.log('Response:', response);
        expect(response.status).to.equal(400);
        });
    });


}); 