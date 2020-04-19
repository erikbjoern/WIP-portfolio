describe('User can navigate the app', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    describe('to About tab, and it', () => {
        beforeEach( () => {
            cy.get('#about-tab').click()    
        })
        
        it('displays About Me header',() => {
            cy.get('#about-header').should('contain', 'About Me')
        })

        it('displays component name in URL', () => {
            cy.url().should('contain', 'about')
        })
        
        it('does not display My Projects header', () => {
            cy.get('#projects-header').should('not.exist')
        })
        
        it('does not display Hello World', () => {
            cy.get('#hello').should('not.exist')
        })

        it('does not display CV header', () => {
            cy.get('#cv-header').should('not.exist')
        })
    })
    
    describe('to My Projects tab, and it', () => {
        beforeEach(() => {
            cy.get('#projects-tab').click()    
        })
        
        it('displays My Projects header', () => {
            cy.get('#projects-header').should('contain', 'My Projects')
        })
        
        it('displays component name in URL', () => {
            cy.url().should('contain', 'projects')
        })
        
        it('does not display About Me header', () => {
            cy.get('#about-header').should('not.exist')    
        })
        
        it('does not display Hello World', () => {
            cy.get('#hello').should('not.exist')
        })

        it('does not display CV header', () => {
            cy.get('#cv-header').should('not.exist')
        })
    })
    
    describe('to CV tab, and it', () => {
        beforeEach(() => {
            cy.get('#cv-tab').click()
        })
        
        it('displays CV header', () => {
            cy.get('#cv-header').should('contain', 'CV')
        })
        
        it('displays component name in URL', () => {
            cy.url().should('contain', 'cv')
        })
        
        it('does not display Hello World', () => {
            cy.get('#hello').should('not.exist')
        })
        
        it('does not display About Me header', () => {
            cy.get('#about-header').should('not.exist')    
        })

        it('does not display My Projects header', () => {
            cy.get('#projects-header').should('not.exist')
        })
    })
    
    describe('back to My Portfolio tab', () => {
        beforeEach(() => {
            cy.get('#about-tab').click()
            cy.get('#header').click()    
        })
        
        it('displays Hello World', () => {
            cy.get('#hello').should('contain', 'Hello World')    
        })

        it('displays correct URL', () => {
            cy.url().should('not.contain', 'about')
            cy.url().should('not.contain', 'projects')
        })

        it('does not display About Me header', () => {
            cy.get('#about-header').should('not.exist')
        })
        
        it('does not display My Projects header', () => {
            cy.get('#projects-header').should('not.exist')
        })
        
        it('does not display CV header', () => {
            cy.get('#cv-header').should('not.exist')
        })
    })
})