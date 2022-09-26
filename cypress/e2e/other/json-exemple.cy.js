describe('JSON exemple', () => {
    it('Show names', () => {
        const exemple = [{"name": "Artem"}, {"name": "Alex"} ,{"name": "Vika"}]  
        exemple.forEach(el => {
            cy.log(el.name)
        })
    })
})