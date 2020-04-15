describe('User can see list of projects', () => {
    beforeEach (() => {
        cy.visit('http://localhost:3000')
        cy.get('#projects-tab').click()
    })

    it('displays first project', () => {
        cy.get('#project-1').within(() => {
            cy.get('.ui.header').should('contain', 'My First Website')
            cy.get('.image').should('exist')
            cy.get('.description').should('contain', 'This was my first project.')
        })
    })

    it('displays second project', () => {
        cy.get('#project-2').within(() => {
            cy.get('.ui.header').should('contain', 'UI Design')
            cy.get('.image').should('exist')
            cy.get('.description').should('contain', 'Designing user interface is fun.')
        })
    })

    it('displays third project', () => {
        cy.get('#project-3').within(() => {
            cy.get('.ui.header').should('contain', 'Mobile UX')
            cy.get('.image').should('exist')
            cy.get('.description').should('contain', 'I like to design for the mobile platform.')
        })
    })
})