package stepDefinations;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ContactStepDefination {
	
	WebDriver driver;
	
	@Given("^user is on index Page$")
	public void user_is_on_index_Page(){
		System.setProperty("webdriver.gecko.driver", "C:\\SeleniumJars\\geckodriver.exe");
		driver = new FirefoxDriver(); 	
		driver.get("https://freecrm.com/");
	}

	@When("^title of login page is Free CRM$")
	public String title_of_login_page_is_Free_CRM(){
		String actualTitle = driver.getTitle();
		 System.out.println(actualTitle);
		Assert.assertEquals("Free CRM #1 cloud software for any business large or small", actualTitle);
		return actualTitle;
	}
/*
	@Then("^first close popup$")
	public void first_close_popup() throws Throwable{
	    cp.closePopup();
	}
*/
	@Then("^user should click login button$")
	public void user_should_click_login_button(){
		driver.findElement(By.xpath("//span[contains(text(),'Log In')]")).click();
	    
	}

	@Then("^user enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_and(String username, String password){
		driver.findElement(By.name("email")).sendKeys(username);
		driver.findElement(By.name("password")).sendKeys(password);
	}

	@Then("^user clicks on login button$")
	public void user_clicks_on_login_button(){
		driver.findElement(By.xpath("//div[@class='ui fluid large blue submit button']")).click();
	}

	@Then("^user is on homepage$")
	public void user_is_on_homepage() throws Throwable{
		Thread.sleep(2000);
		String usernamelabel =driver.findElement(By.xpath("//div[contains(text(),'Contacts activity stream')]")).getText();
		System.out.println(usernamelabel);
	}

	@Then("^user move to new contact page$")
	public void user_move_to_new_contact_page(){
		Actions action = new Actions(driver);
		action.moveToElement(driver.findElement(By.xpath("//span[contains(text(),'Contacts')]"))).build().perform();
		driver.findElement(By.xpath("//div[@id='main-nav']//div[3]//button/i")).click();
	}

	
	@Then("^user enters contact details \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_Contact_Details(String firstname, String lastname, String position){
		driver.findElement(By.name("first_name")).sendKeys(firstname);
		driver.findElement(By.name("last_name")).sendKeys(lastname);
		driver.findElement(By.name("position")).sendKeys(position);
		driver.findElement(By.xpath("//button[@class='ui linkedin button']")).click();
	}

	@Then("^user close the browser$")
	public void user_close_the_browser(){
		driver.quit();
	}

}
