package DSTPS.Automation.HybridDesktop.MemberLookupAutomation.stepDefinitions;

import java.util.Map;
import org.openqa.selenium.WebDriver;
import DSTPS.Automation.HybridDesktop.Apps.common.HybridDesktop_SharedResource;
import DSTPS.Automation.HybridDesktop.Apps.common.RxNova_Utlilty;
import DSTPS.Automation.HybridDesktop.MemberLookupApp.common.MemberLookup_Details_Steps;
import DSTPS.Automation.HybridDesktop.MemberLookupAutomation.steps.MemberLookup_Authorization_GI_Steps;
import cucumber.api.java.en.Then;

public class VerifyMemberLookUpAuthorizationGeneralInformation {
	
	private HybridDesktop_SharedResource SharedResource;
	private WebDriver driver;
	private RxNova_Utlilty utils;
	
	public MemberLookup_Details_Steps memberLookup_Details_Steps;
	public MemberLookup_Authorization_GI_Steps memberLookup_Authorization_GI_Steps;
	
	public VerifyMemberLookUpAuthorizationGeneralInformation(HybridDesktop_SharedResource SharedResource, RxNova_Utlilty utils) throws Throwable{
		this.SharedResource = SharedResource;
		driver = SharedResource.getDriver();	
		this.utils = utils;	
		init();
	}
	
	public void init() throws Throwable
	{
		// Initialize the step classes here
		memberLookup_Details_Steps = new MemberLookup_Details_Steps(SharedResource,utils);
		memberLookup_Authorization_GI_Steps = new MemberLookup_Authorization_GI_Steps(SharedResource,utils);
	}	
	
	
	@Then("^User click on General Information in Authorization screen$")
	public void user_click_on_general_information() throws Throwable{
		memberLookup_Details_Steps.verifyAuthorization();
		memberLookup_Authorization_GI_Steps.clickOnGeneralInformation();
	}
	
	@Then("^User verifies Authorization General Information details$")
	public void verify_general_information_details(Map<String,String> genInfoDetails) throws Throwable{
		memberLookup_Authorization_GI_Steps.verifyGeneralInformationDetails(genInfoDetails);
	}
}
