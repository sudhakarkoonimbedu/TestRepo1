package DSTPS.Automation.HybridDesktop.MemberLookupAutomation.stepDefinitions;

import java.util.Map;
import org.openqa.selenium.WebDriver;
import DSTPS.Automation.HybridDesktop.Apps.common.HybridDesktop_SharedResource;
import DSTPS.Automation.HybridDesktop.Apps.common.RxNova_Utlilty;
import DSTPS.Automation.HybridDesktop.MemberLookupApp.common.MemberLookup_Details_Steps;
import DSTPS.Automation.HybridDesktop.MemberLookupAutomation.steps.MemberLookup_Claim_MedicarePartD_Steps;
import cucumber.api.java.en.Then;

public class VerifyMemberLookUpClaimMedicarePartD {
	
	private HybridDesktop_SharedResource SharedResource;
	private WebDriver driver;
	private RxNova_Utlilty utils;
	
	public MemberLookup_Details_Steps memberLookup_Details_Steps;
	public MemberLookup_Claim_MedicarePartD_Steps memberLookup_Claim_MedicarePartD_Steps;	 
	
	
	public VerifyMemberLookUpClaimMedicarePartD(HybridDesktop_SharedResource SharedResource, RxNova_Utlilty utils) throws Throwable{
		this.SharedResource = SharedResource;
		driver = SharedResource.getDriver();	
		this.utils = utils;	
		init();    
	}
	
	public void init() throws Throwable
	{
		// Initialize the step classes here
		
		memberLookup_Details_Steps = new MemberLookup_Details_Steps(SharedResource,utils);
		memberLookup_Claim_MedicarePartD_Steps = new MemberLookup_Claim_MedicarePartD_Steps(SharedResource,utils);		 
	}	
	

	@Then("^User click on Medicare Part D in Claim screen$")
	public void user_click_on_Medicare_Part_D() throws Throwable{		 
		memberLookup_Claim_MedicarePartD_Steps.clickOnMedicarePartD();	
	}
	
	@Then("^User verifies Medicare Part D$")
	public void verify_the_Medicare_Part_D(Map<String,String> medicarePartD) throws Throwable{
		memberLookup_Claim_MedicarePartD_Steps.verifyMedicarePartD(medicarePartD);		
	}
			
}
