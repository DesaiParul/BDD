package stepDefinations;

import java.awt.peer.LabelPeer;
import java.util.List;

import javax.xml.xpath.XPath;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.w3c.dom.css.CSSPageRule;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDefination {
	
	WebDriver driver;
	
	
	@Given("^user is on index Page$")
	public void user_is_on_index_Page(){
		System.setProperty("webdriver.gecko.driver", "C:\\SeleniumJars\\geckodriver.exe");
		driver = new FirefoxDriver();
	}

	@When("^title of login page is Free CRM$")
	public String title_of_login_page_is_Free_CRM(){
		driver.get("https://freecrm.com/");
		String actualTitle = driver.getTitle();
		 System.out.println(actualTitle);
		Assert.assertEquals("Free CRM #1 cloud software for any business large or small", actualTitle);
		return actualTitle;
	}


	@Then("^user should click login button$")
	public void user_should_click_login_button() {
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
	
//	@Then("user check error")
//	public void user_check_error() {
//		String errorString = driver.findElement(By.xpath("//div[@class='header']")).getText().toString();
//		Assert.assertEquals(errorString, "cwjnda adn","Error does not match");
//	}
	@Then("^user is on homepage$")
	public void user_is_on_homepage() throws Throwable{
		Thread.sleep(2000);
		Boolean boolean1 = driver.findElement(By.xpath("//span[contains(text(),'Parul Desai')]")).isDisplayed();
		Assert.assertTrue(boolean1);
	}
	@Then("^user close the browser$")
	public void user_close_the_browser(){
			driver.quit();
	}


}
