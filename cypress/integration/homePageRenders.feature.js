describe('Portfolio interface', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    describe('successfully renders header',() => {
        it('displaying link to home page', () => {
            cy.get('#header').should('contain', 'My Portfolio')
        })

        it('displaying link to About Me page', () => {
            cy.get('#about-tab').should('contain', 'About Me')
        })

        it('displaying link to My Projects', () => {
            cy.get('#projects-tab').should('contain', 'My Projects')
        })

        it('displaying link to CV', () => {
            cy.get('#cv-tab').should('contain', 'CV')
        })

    })
    
    describe('successfully renders body', () => {
        it('displaying Hello World', () => {
            cy.get('#hello').should('contain', 'Hello World')
        })
    })

    describe('successfully renders footer', () => {
        it('displaying Made with {React.version}', () => {
        cy.get('#footer').should('contain', 'Made with React 16.13.1')
        })
    })
})