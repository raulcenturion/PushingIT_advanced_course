import cy from 'cypress';
import loginLocators from '../locators/loginLocators';


class LoginPage {
    
    login(username, password) {
        cy.get(loginLocators.DBL_CLIC_ISESION).dblclick();
        cy.get(loginLocators.USERNAME_TXTBOX).type(username);
        cy.get(loginLocators.PASSWORD_TXTBOX).type(password);
        cy.get(loginLocators.LOGIN_BUTTON).click();
    }

    getMessageError() {
        return cy.get(loginLocators.MESSAGE_ERROR).invoke('text');
    }
    getErrorMessage() {
        return cy.get(loginLocators.ERROR_MESSAGE).invoke('text');
    }
}
export default LoginPage;
