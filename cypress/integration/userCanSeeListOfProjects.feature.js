describe('User can see list of projects', () => {
    beforeEach (() => {
        cy.visit('http://localhost:3000')
        cy.get('#projects-tab').click()
    })

    describe('displays first project, containing', () => {
        it('header', () => {
            cy.get('#project-1').within(() => {
                cy.get('.ui.header').should('contain', 'My First Website')
            })    
        })
        
        it('image', () => {
            cy.get('#project-1').within(() => {
                cy.get('.image').should('exist')
            })
        })

        it('description', () => {
            cy.get('#project-1').within(() => {
                cy.get('.description').should('contain', 'This was my first project.')
            })
        })
    })
    
    describe('displays second project, containing', () => {
        it('header', () => {
            cy.get('#project-2').within(() => {
                cy.get('.ui.header').should('contain', 'UI Design')
            })    
        })
        
        it('image', () => {
            cy.get('#project-2').within(() => {
                cy.get('.image').should('exist')
            })
        })
    
        it('description', () => {
            cy.get('#project-2').within(() => {
                cy.get('.description').should('contain', 'Designing user interface is fun.')
            })
        })
    })
        
    describe('displays third project, containing', () => {
        it('header', () => {
            cy.get('#project-3').within(() => {
                cy.get('.ui.header').should('contain', 'Mobile UX')
            })    
        })
        
        it('image', () => {
            cy.get('#project-3').within(() => {
                cy.get('.image').should('exist')
            })
        })
    
        it('description', () => {
            cy.get('#project-3').within(() => {
                cy.get('.description').should('contain', 'I like to design for the mobile platform.')
            })
        })
    })
})