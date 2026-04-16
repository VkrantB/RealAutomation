exports.LoginPage =
class LoginPage {

    constructor(page){
        this.page=page;
        this.userNameInput=page.locator('[data-testid="usernameOrEmail"]');
        this.passwordInput=page.locator('[data-testid="password"]');
        this.loginButton=page.locator('//span[contains(text(),Login)]');
        this.JoinRealLink=page.getByText('Join Real', { exact: true });
        this.resetPasswordLink=page.getByText('Trouble logging in?', { exact: true });
    }

    async gotoLoginPage(){
        await this.page.goto('https://bolt.playrealbrokerage.com/login');
    }

    async login(username, password){
        await this.userNameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async navigateToRegisterPage(){

        await this.JoinRealLink.click();
    }
}