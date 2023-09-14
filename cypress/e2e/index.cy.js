it("titles are correct", () => {
  const clientId = Cypress.env("CF_ACCESS_CLIENT_ID");
  const clientSecret = Cypress.env("CF_ACCESS_CLIENT_SECRET");
  const page = cy.visit("/", {
    headers: {
      "CF-Access-Client-Id": clientId,
      "CF-Access-Client-Secret": clientSecret,
    },
  });

  page
    .get("title")
    .should("have.text", "Ben's Coding: Programming is my language.");
  page.get("h1").should("have.text", "Ben's Coding");
});
