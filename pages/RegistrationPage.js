exports.RegistrationPage =
class RegistrationPage {

constructor(page){
    this.page=page;
    this.realLogo=page.getByAltText('real-logo');
    this.firstNameInputBox=page.locator('[data-testid="text-input-First Name"]');
    this.lastNameInputBox=page.locator('[data-testid="text-input-Last Name"]');
    this.emailInputBox=page.locator('[data-testid="email-input-Email"]');
    this.userNameInputBox=page.locator('[data-testid="text-input-Username"]');
    this.passwordInputBox=page.locator('[data-testid="password-input-Password"]');
    this.cnfPasswordInputBox=page.locator('[data-testid="password-input-Password Confirmation"]');
    this.privacyPolicyCheckbox=page.locator('[data-testid="consentedToTerms"]');
    this.consentCheckBox=page.locator('[data-testid="consentedToCallMessage"]');
    this.createAccountButton=page.locator('//span[contains(text(),"Create Account")]');
    this.loginButton=page.locator('//span[contains(text(),"Log In")]');
}

async createAccount(firstName,lastName,userName,email,password,cnfPassword){
    await this.firstNameInputBox.fill(firstName);
    await this.lastNameInputBox.fill(lastName);
    await this.userNameInputBox.fill(userName);
    await this.emailInputBox.fill(email);
    await this.passwordInputBox.fill(password);
    await this.cnfPasswordInputBox.fill(cnfPassword);
    await this.privacyPolicyCheckbox.click();
    await this.consentCheckBox.click();
    await this.createAccountButton.click();
}

}

