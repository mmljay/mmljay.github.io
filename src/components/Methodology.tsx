
import React, { useState } from 'react';
import { 
  Search, 
  Code, 
  ListChecks, 
  Zap, 
  BarChart, 
  Shield, 
  GitBranch,
  RotateCcw
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Methodology = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  
  const methodologySteps = [
    {
      icon: <Search className="h-10 w-10 text-teal" />,
      title: "Requirements Analysis",
      description: "Deep dive into business and technical requirements to identify testing needs and potential risks.",
      activities: [
        "Stakeholder interviews and requirement gathering",
        "Risk assessment and prioritization",
        "Test strategy development aligned with project goals",
        "Definition of quality metrics and acceptance criteria"
      ]
    },
    {
      icon: <GitBranch className="h-10 w-10 text-teal" />,
      title: "Test Planning",
      description: "Comprehensive test planning that covers all aspects of application quality and risk areas.",
      activities: [
        "Test plan development with detailed scope and approach",
        "Testing environment setup requirements",
        "Resource allocation and scheduling",
        "Tool selection and framework architecture decisions"
      ]
    },
    {
      icon: <Code className="h-10 w-10 text-teal" />,
      title: "Test Design",
      description: "Creating effective test cases that provide maximum coverage with optimized effort.",
      activities: [
        "Test case development using BDD/TDD methodologies",
        "Boundary value analysis and equivalence partitioning",
        "Data preparation for various test scenarios",
        "Traceability matrix creation linking requirements to test cases"
      ]
    },
    {
      icon: <Zap className="h-10 w-10 text-teal" />,
      title: "Test Execution",
      description: "Methodical execution of test cases with comprehensive documentation and issue management.",
      activities: [
        "Manual and automated test execution",
        "Exploratory testing sessions",
        "Defect reporting with detailed reproduction steps",
        "Regression testing for affected areas"
      ]
    },
    {
      icon: <Shield className="h-10 w-10 text-teal" />,
      title: "Security & Performance",
      description: "Ensuring the application meets security and performance requirements under various conditions.",
      activities: [
        "Security vulnerability assessment and penetration testing",
        "Load and stress testing under various user scenarios",
        "Endurance testing for long-term stability",
        "Security compliance verification"
      ]
    },
    {
      icon: <BarChart className="h-10 w-10 text-teal" />,
      title: "Reporting & Analysis",
      description: "Detailed reporting on test results with actionable insights for quality improvement.",
      activities: [
        "Test metrics analysis and visualization",
        "Quality gate assessments for release readiness",
        "Trend analysis for recurring issues",
        "Risk assessment for discovered defects"
      ]
    },
    {
      icon: <RotateCcw className="h-10 w-10 text-teal" />,
      title: "Continuous Improvement",
      description: "Refinement of testing processes based on retrospectives and lessons learned.",
      activities: [
        "Test process effectiveness analysis",
        "Automation coverage expansion",
        "Knowledge sharing and team upskilling",
        "Tool and framework optimizations"
      ]
    }
  ];

  const frameworkTypes = [
    {
      value: "functional",
      label: "Functional Automation",
      code: `// Page Object Model implementation for test maintainability
public class LoginPage {
  private WebDriver driver;
  private By usernameInput = By.id("username");
  private By passwordInput = By.id("password");
  private By loginButton = By.id("loginBtn");
  
  public LoginPage(WebDriver driver) {
    this.driver = driver;
  }
  
  public void enterUsername(String username) {
    driver.findElement(usernameInput).sendKeys(username);
  }
  
  public void enterPassword(String password) {
    driver.findElement(passwordInput).sendKeys(password);
  }
  
  public DashboardPage clickLoginButton() {
    driver.findElement(loginButton).click();
    return new DashboardPage(driver);
  }
  
  public DashboardPage loginWith(String username, String password) {
    enterUsername(username);
    enterPassword(password);
    return clickLoginButton();
  }
}`
    },
    {
      value: "api",
      label: "API Testing",
      code: `// RestAssured API testing framework with custom reporting
@Test
public void testCreateUser() {
  // Test data preparation
  Map<String, Object> userData = new HashMap<>();
  userData.put("name", "John Doe");
  userData.put("job", "QA Engineer");
  
  // Request execution with validation
  Response response = 
    given()
      .contentType(ContentType.JSON)
      .body(userData)
      .log().all()
    .when()
      .post("/api/users")
    .then()
      .log().all()
      .statusCode(201)
      .body("name", equalTo("John Doe"))
      .body("job", equalTo("QA Engineer"))
      .body("id", notNullValue())
      .body("createdAt", matchesPattern(ISO_8601_PATTERN))
      .extract().response();
  
  // Additional validations and reporting
  String userId = response.jsonPath().getString("id");
  ReportManager.logInfo("Created user with ID: " + userId);
  
  // Store data for subsequent test dependencies
  TestContext.getInstance().setData("userId", userId);
}`
    },
    {
      value: "performance",
      label: "Performance Testing",
      code: `// JMeter script for load testing critical workflows
import java.time.Duration;
import io.gatling.javaapi.core.*;
import io.gatling.javaapi.http.*;
import static io.gatling.javaapi.core.CoreDsl.*;
import static io.gatling.javaapi.http.HttpDsl.*;

public class CheckoutSimulation extends Simulation {

  HttpProtocolBuilder httpProtocol = http
    .baseUrl("https://e-commerce-app.example")
    .acceptHeader("application/json")
    .userAgentHeader("Gatling Performance Test");

  ScenarioBuilder checkoutScenario = scenario("Checkout Process")
    .exec(http("Login")
      .post("/api/login")
      .body(StringBody("{\\"username\\":\\"testuser\\",\\"password\\":\\"password\\"}"))
      .check(jsonPath("$.token").saveAs("authToken")))
    .pause(Duration.ofSeconds(2))
    
    .exec(http("Browse Products")
      .get("/api/products")
      .header("Authorization", "Bearer #{authToken}")
      .check(jsonPath("$[0].id").saveAs("productId")))
    .pause(Duration.ofSeconds(1))
    
    .exec(http("Add to Cart")
      .post("/api/cart/add")
      .header("Authorization", "Bearer #{authToken}")
      .body(StringBody("{\\"productId\\":\\"#{productId}\\",\\"quantity\\":1}"))
      .check(status().is(200)))
    .pause(Duration.ofSeconds(2))
    
    .exec(http("Checkout")
      .post("/api/checkout")
      .header("Authorization", "Bearer #{authToken}")
      .check(status().is(200))
      .check(jsonPath("$.orderId").exists()));

  {
    setUp(
      checkoutScenario.injectOpen(
        rampUsers(100).during(Duration.ofSeconds(30)),
        constantUsersPerSec(50).during(Duration.ofMinutes(5))
      )
    ).protocols(httpProtocol)
     .assertions(
       global().responseTime().percentile(95).lt(2000),
       global().successfulRequests().percent().gt(99.0)
     );
  }
}`
    },
    {
      value: "mobile",
      label: "Mobile Testing",
      code: `// Appium test for cross-platform mobile testing
public class BankingAppTest extends BaseTest {

  @Parameters({"deviceName", "platformVersion", "platformName"})
  @BeforeMethod
  public void setUp(String deviceName, String platformVersion, String platformName) {
    DesiredCapabilities caps = new DesiredCapabilities();
    caps.setCapability(MobileCapabilityType.DEVICE_NAME, deviceName);
    caps.setCapability(MobileCapabilityType.PLATFORM_VERSION, platformVersion);
    caps.setCapability(MobileCapabilityType.PLATFORM_NAME, platformName);
    caps.setCapability(MobileCapabilityType.AUTOMATION_NAME, 
      platformName.equalsIgnoreCase("Android") ? "UiAutomator2" : "XCUITest");
    caps.setCapability(MobileCapabilityType.APP, getAppPath(platformName));
    
    driver = new AppiumDriver<>(new URL("http://localhost:4723/wd/hub"), caps);
    wait = new WebDriverWait(driver, Duration.ofSeconds(10));
  }
  
  @Test(description = "Verify user can transfer funds between accounts")
  public void testFundTransfer() {
    // Login to the app
    LoginPage loginPage = new LoginPage(driver);
    DashboardPage dashboardPage = loginPage.loginWithValidCredentials();
    
    // Verify account balance before transfer
    double initialBalance = dashboardPage.getSavingsAccountBalance();
    
    // Navigate to transfer page and perform transfer
    TransferPage transferPage = dashboardPage.navigateToTransferFunds();
    transferPage.selectFromAccount("Checking");
    transferPage.selectToAccount("Savings");
    transferPage.enterAmount("100.00");
    transferPage.enterDescription("Test Transfer");
    
    // Complete transfer and verify confirmation
    TransferConfirmationPage confirmationPage = transferPage.submitTransfer();
    Assert.assertTrue(confirmationPage.isTransferSuccessful());
    Assert.assertEquals(confirmationPage.getTransferAmount(), "100.00");
    
    // Navigate back to dashboard and verify updated balance
    dashboardPage = confirmationPage.navigateToDashboard();
    double updatedBalance = dashboardPage.getSavingsAccountBalance();
    Assert.assertEquals(updatedBalance, initialBalance + 100.00);
    
    // Take screenshot for reporting
    takeScreenshot("successful_transfer");
  }
}`
    }
  ];

  return (
    <section id="methodology" className="py-20 bg-white dark:bg-navy pattern-background">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Testing Methodology</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="relative">
              <div className="absolute top-0 bottom-0 left-6 w-0.5 bg-teal/30"></div>
              
              {methodologySteps.map((step, index) => (
                <div 
                  key={index}
                  className={`relative pl-16 py-4 mb-4 cursor-pointer transition-all duration-300 ${activeStep === index ? 'bg-navy/5 dark:bg-platinum/5 rounded-lg' : ''}`}
                  onClick={() => setActiveStep(index)}
                >
                  <div className={`absolute left-0 flex items-center justify-center w-12 h-12 rounded-full ${activeStep === index ? 'bg-teal text-white' : 'bg-navy/10 dark:bg-platinum/10 text-navy dark:text-platinum'}`}>
                    {index + 1}
                  </div>
                  
                  <h3 className={`text-lg font-semibold ${activeStep === index ? 'text-teal' : 'text-navy dark:text-platinum'}`}>
                    {step.title}
                  </h3>
                  
                  <p className={`text-sm ${activeStep === index ? 'text-navy/80 dark:text-platinum/80' : 'text-navy/60 dark:text-platinum/60'}`}>
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="glass-card border-none rounded-xl p-6">
              <div className="flex items-center mb-6">
                {methodologySteps[activeStep].icon}
                <h3 className="text-2xl font-semibold ml-4 text-navy dark:text-platinum">
                  {methodologySteps[activeStep].title}
                </h3>
              </div>
              
              <p className="text-navy/80 dark:text-platinum/80 mb-6">
                {methodologySteps[activeStep].description}
              </p>
              
              <h4 className="text-lg font-medium mb-4 text-navy dark:text-platinum">Key Activities</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {methodologySteps[activeStep].activities.map((activity, index) => (
                  <div key={index} className="flex items-start bg-navy/5 dark:bg-platinum/5 p-4 rounded-lg">
                    <div className="mr-3 mt-1">
                      <div className="w-6 h-6 rounded-full bg-teal/20 flex items-center justify-center">
                        <ListChecks className="h-3 w-3 text-teal" />
                      </div>
                    </div>
                    <p className="text-navy/80 dark:text-platinum/80 text-sm">{activity}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-medium mb-4 text-navy dark:text-platinum">Testing Framework Examples</h4>
                
                <Tabs defaultValue="functional">
                  <TabsList className="w-full bg-navy/5 dark:bg-platinum/5 p-1">
                    {frameworkTypes.map((type) => (
                      <TabsTrigger 
                        key={type.value} 
                        value={type.value}
                        className="flex-1 data-[state=active]:bg-teal data-[state=active]:text-white"
                      >
                        {type.label}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                  
                  {frameworkTypes.map((type) => (
                    <TabsContent key={type.value} value={type.value}>
                      <div className="mt-4 bg-navy/10 dark:bg-platinum/10 p-4 rounded-lg overflow-x-auto">
                        <pre className="text-sm text-navy/90 dark:text-platinum/90 font-mono">
                          <code>{type.code}</code>
                        </pre>
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
