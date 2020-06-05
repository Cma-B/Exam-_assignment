describe ('Greeting with Users',() => {
    it ('users see the greeting phrase',() => {
        cy.visit('http://localhost:3001')
        cy.contains ('Greetings')
        cy.get('#quote').click()
    })
})