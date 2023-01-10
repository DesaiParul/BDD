package runner;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = {"C:\\Selenium_WorkSpace\\BDDFramework\\src\\main\\java\\features\\contacts.feature"},//the path of the feature files
		glue={"stepDefinations"},//step Definition Package Name
		format= {"pretty","html:test-output", "json:json_output/cucumber.json", "junit:junit.xml/cucumber.xml"}, // to generate different types of reports
		monochrome = true, //display the console output in readable format
		strict = true, //it will check if any step is not defined in step definition file
		dryRun=false // to check the mapping is proper between feature file and step definition file
		)


public class Testrunner {

}
