exports.AgentOnboardingPage =
class AgentOnboardingPage {

    constructor(page){
        this.page=page;
        this.Logo='//img[@alt="logo"]';
        this.loggedInUsername=page.locator('.flex.flex-row.items-center.justify-center.opacity-100.self-center.border-0.relative.rounded-full');
        this.logoutButton=page.locator('//p[contains(text(),"Logout")]');
    }

    async checkLogo() {
        const element = this.page.locator(this.Logo);
        if (await element.isVisible()) {
            return await element.textContent();
        }
        return null;
    }

    async clickOnLogout() {
        await this.logoutButton.click();
    }
}
/*
async getImg() {
    return this.page.getByRole('img', { name: 'logo' });
  }

  async getVikingKumar() {
    return this.page.getByText('Viking Kumar', { exact: true });
  }

  async clickOnLogout() {
    return this.page.locator('div.flex.flex-row');
  }


*/
