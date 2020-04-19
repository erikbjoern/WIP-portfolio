describe('User can see a list of education and work experience', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/cv')
    })
    describe('displays first item, containing', () => {
        it('header', () => {
            cy.get('#cvItem-1').within(() => {
                cy.get('.ui.header').should('contain', 'Craft Academy')
            })
        })
        it('image', () => {
            cy.get('#cvItem-1').within(() => {
                cy.get('.image').should('exist')
            })
        })
        it('description', () => {
            cy.get('#cvItem-1').within(() => {
                cy.get('.description').should('contain', '12 week Full Stack Developer Bootcamp.')
            })
        })
    })

    describe('displays second item, containing', () => {
        it('header', () => {
            cy.get('#cvItem-2').within(() => {
                cy.get('.ui.header').should('contain', 'Mark & Grund AB')
            })
        })
        it('image', () => {
            cy.get('#cvItem-2').within(() => {
                cy.get('.image').should('exist')
            })
        })
        it('description', () => {
            cy.get('#cvItem-2').within(() => {
                cy.get('.description').should('contain', 'Apprentice carpenter at a groundworks company.')
            })
        })
    })

    describe('displays third item, containing', () => {
        it('header', () => {
            cy.get('#cvItem-3').within(() => {
                cy.get('.ui.header').should('contain', 'Umeå municipality')
            })
        })
        it('image', () => {
            cy.get('#cvItem-3').within(() => {
                cy.get('.image').should('exist')
            })
        })
        it('description', () => {
            cy.get('#cvItem-3').within(() => {
                cy.get('.description').should('contain', 'Home care service.')
            })
        })
    })
})