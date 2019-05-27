package CdefgProje;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
//@CucumberOptions(features = "src\\test\\Resources\\Fearure",tags = "@category",
// format = {"pretty","html:target/cucumber-reports"})
@CucumberOptions(features = "src\\test\\Resources\\Fearure",tags = "@Category",
        format = {"pretty","html:target/cucumber-reports"})

public class RunTest
{

}
