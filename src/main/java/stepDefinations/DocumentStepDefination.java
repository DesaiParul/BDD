package stepDefinations;

import java.util.Map;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;
import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class DocumentStepDefination {
	
	WebDriver driver;

	@Given("^user is on index Page$")
	public void user_is_on_index_Page() {
		System.setProperty("webdriver.gecko.driver", "C:\\SeleniumJars\\geckodriver.exe");
		driver = new FirefoxDriver(); 
		driver.get("https://freecrm.com/");
	}

	@When("^title of login page is Free CRM$")
	public String title_of_login_page_is_Free_CRM() {
		String actualTitle = driver.getTitle();
		 System.out.println(actualTitle);
		Assert.assertEquals("Free CRM #1 cloud software for any business large or small", actualTitle);
		return actualTitle;
	}

	/*@Then("^first close popup$")
	public void first_close_popup() throws Throwable {
		docp.closePopup();
	}*/

	@Then("^user should click login button$")
	public void user_should_click_login_button() {
		driver.findElement(By.xpath("//span[contains(text(),'Log In')]")).click();
	}

	@Then("^user enters username and password$")
	public void user_enters_username_and_password(DataTable credentials) {
		 for(Map<String, String>  data  : credentials.asMaps(String.class, String.class)) {
				driver.findElement(By.name("email")).sendKeys(data.get("username"));
				driver.findElement(By.name("password")).sendKeys(data.get("password"));
				 }

	}

	@Then("^user clicks on login button$")
	public void user_clicks_on_login_button() {
		driver.findElement(By.xpath("//div[@class='ui fluid large blue submit button']")).click();
	}

	@Then("^user is on homepage$")
	public void user_is_on_homepage() throws Throwable {
		Thread.sleep(2000);
		String usernamelabel =driver.findElement(By.xpath("//div[contains(text(),'Contacts activity stream')]")).getText();
		System.out.println(usernamelabel);
		}

	@Then("^user move to new document page$")
	public void user_move_to_new_document_page() throws Throwable {
		Actions action = new Actions(driver);
		action.moveToElement(driver.findElement(By.xpath("//span[contains(text(),'Documents')]"))).build().perform();
		driver.findElement(By.xpath("//div[@id='main-nav']/div[9]/button[1]")).click();

	}

	@Then("^user enters documents details$")
	public void user_enters_documents_details(DataTable dealData) throws Throwable {
		for(Map<String, String>  data  : dealData.asMaps(String.class, String.class)) {
			driver.findElement(By.name("title")).sendKeys(data.get("title"));
			Thread.sleep(3000);
			driver.findElement(By.xpath("//form[@class='ui form segment custom-form-container']/div[5]//div[@name='deal']/input")).sendKeys(data.get("deal"));
			driver.findElement(By.xpath("//button[@class='ui linkedin button']/i")).click();
			Thread.sleep(2000);
			//move to new deal page
			Actions action = new Actions(driver);
			action.moveToElement(driver.findElement(By.xpath("//span[contains(text(),'Documents')]"))).build().perform();
			driver.findElement(By.xpath("//div[@id='main-nav']/div[9]/button[1]")).click();
		}
	}

	@Then("^user close the browser$")
	public void user_close_the_browser() {
		driver.quit();
	}

}
