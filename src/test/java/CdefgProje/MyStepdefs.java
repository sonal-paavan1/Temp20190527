package CdefgProje;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MyStepdefs {
    HomePage homePage = new HomePage();
    RegisterPage registerPage = new RegisterPage();
    Registersuccessful registersuccessful = new Registersuccessful();
    CurrencyChange currencyChange = new CurrencyChange();

    @Given("^user is on register page$")
    public void user_is_on_register_page()
    {
        homePage.clickOnRegisterButton();
        registerPage.useEnterRegistersIsOnRegisterPage();
        //verificationPage.verifyUserIsOnHomepage();

    }

    @When("^user enters all registration details$")
    public void user_enters_all_registration_details()  {

        registerPage.userEntersRegistratoinDetails();
    }

    @Then("^user should able to register successfully$")
    public void user_should_able_to_register_successfully() {
        registersuccessful.verifyUserSeeSuccessfulMessage();

    }
    @Given("^user is on the home page$")
    public void userIsOnTheHomePage() {
        homePage.clickOnRegisterButton();

    }

    @When("^user hover on Clothing$")
    public void userHoverOnClothing() {
        currencyChange.priceCurrency();

    }

    @And("^user click on change currency$")
    public void userClickOnChangeCurrency() {

    }

    @Then("^All product should show in Dollar value$")
    public void allProductShouldShowInDollarValue() {
    }

    @Given("^user is on homepage$")
    public void userIsOnHomepage() {

    }

    @When("^user clicks on \"([^\"]*)\" link from the menu$")
    public void userClicksOnLinkFromTheMenu(String link)  {
        homePage.navigatePage(link);
    }


    @Then("^user should able to navigate to \"([^\"]*)\"successfully$")
    public void userShouldAbleToNavigateToSuccessfully(String link){
        Utils.assertCurrentURL(link);
    }

    @Given("^user is on Home page$")
    public void userIsOnHomePage() {

    }

    @When("^user navigate to login Page$")
    public void userNavigateToLoginPage() {

    }

    @And("^user enter invalid \"([^\"]*)\" and \"([^\"]*)\"$")
    public void userEnterInvalidAnd(String arg0, String arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @Then("^user should not be logged in Successfully$")
    public void userShouldNotBeLoggedInSuccessfully() {

    }

    @And("^user see \"([^\"]*)\"$")
    public void userSee(String arg0)  {
        throw new PendingException();
    }
}
