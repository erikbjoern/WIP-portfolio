describe('User can see a list of education and work experience', () => {
beforeEach(() => {
        cy.visit('http://localhost:3000/cv')
    })
    
    it('displays heading "Education"', () => {
        cy.get('#education-header').should('contain', 'Education')
    })

    it('displays heading "Work experience"', () => {
        cy.get('#work-header').should('contain', 'Work experience')
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
                cy.get('.ui.header').should('contain', 'Technology programme')
            })
        })
        it('image', () => {
            cy.get('#cvItem-2').within(() => {
                cy.get('.image').should('exist')
            })
        })
        it('description', () => {
            cy.get('#cvItem-2').within(() => {
                cy.get('.description').should('contain', 'With specialisation in design and product development.')
            })
        })
    })
    
    describe('displays third item, containing', () => {
        it('header', () => {
            cy.get('#cvItem-3').within(() => {
                cy.get('.ui.header').should('contain', 'Mark & Grund AB')
            })
        })
        it('image', () => {
            cy.get('#cvItem-3').within(() => {
                cy.get('.image').should('exist')
            })
        })
        it('description', () => {
            cy.get('#cvItem-3').within(() => {
                cy.get('.description').should('contain', 'Apprentice carpenter at a groundworks company.')
            })
        })
    })

    describe('displays fourth item, containing', () => {
        it('header', () => {
            cy.get('#cvItem-4').within(() => {
                cy.get('.ui.header').should('contain', 'Umeå municipality')
            })
        })
        it('image', () => {
            cy.get('#cvItem-4').within(() => {
                cy.get('.image').should('exist')
            })
        })
        it('description', () => {
            cy.get('#cvItem-4').within(() => {
                cy.get('.description').should('contain', 'Home care service.')
            })
        })
    })
    
    describe('displays fifth item, containing', () => {
        it('header', () => {
            cy.get('#cvItem-5').within(() => {
                cy.get('.ui.header').should('contain', 'Gjennestad VGS')
            })
        })
        it('image', () => {
            cy.get('#cvItem-5').within(() => {
                cy.get('.image').should('exist')
            })
        })
        it('description', () => {
            cy.get('#cvItem-5').within(() => {
                cy.get('.description').should('contain', 'Social/youth worker at a boarding school.')
            })
        })
    })

    describe('CV card images links to respective homepage', () => {
        it('first item links to Craft Academy', () => {
            cy.get('#cvItem-1').within(() => {
                cy.get('#image-link').click()
                cy.url().should('contain', 'craftacademy')
            })
        })

        it('second item links to Åkrahällskolan', () => {
            cy.get('#cvItem-2').within(() => {
                cy.get('#image-link').click()
                cy.url().should('contain', 'akrahall')
            })
        })
        
        it('third item links to Mark & Grund', () => {
            cy.get('#cvItem-3').within(() => {
                cy.get('#image-link').click()
                cy.url().should('contain', 'markogrund')
            })
        })

        it('fourth item links to Umeå kommun - Din kommunala hemtjänst', () => {
            cy.get('#cvItem-4').within(() => {
                cy.get('#image-link').click()
                cy.url().should('contain', 'umea')
            })
        })

        it('fifth item links to Gjennestad VGS', () => {
            cy.get('#cvItem-5').within(() => {
                cy.get('#image-link').click()
                cy.url().should('contain', 'gjennestad')
            })
        })
    })
})