package DSTPS.Automation.HybridDesktop.MemberLookupAutomation.steps;

import java.util.ArrayList;
import java.util.Map;
import org.openqa.selenium.WebDriver;
import org.testng.asserts.SoftAssert;
import DSTPS.Automation.HybridDesktop.Apps.common.HybridDesktop_SharedResource;
import DSTPS.Automation.HybridDesktop.Apps.common.RxNova_Utlilty;
import DSTPS.Automation.HybridDesktop.MemberLookupAutomation.pages.MemberLookup_BenefitsEligibility_CoverageCopaySelector;

public class MemberLookup_BenefitsEligibility_CoverageCopay_Steps {

	MemberLookup_BenefitsEligibility_CoverageCopaySelector memberLookup_BenefitsEligibility_CoverageCopaySelector;
	
	private HybridDesktop_SharedResource SharedResource;
	private WebDriver driver;
	private RxNova_Utlilty utils;
	
	public ArrayList<String> expBECoverageCopayDetails = new ArrayList<String>();
	public SoftAssert coverageCopayDetailsSoft = new SoftAssert();
	
	public MemberLookup_BenefitsEligibility_CoverageCopay_Steps(HybridDesktop_SharedResource SharedResource, RxNova_Utlilty utils) throws Throwable{
		this.SharedResource = SharedResource;
		this.driver = SharedResource.getDriver();	
		this.utils = utils;	
		init();
	}
	
	public void init() throws Throwable
	{
		// Initialize all the pages you are handling 
		memberLookup_BenefitsEligibility_CoverageCopaySelector = new MemberLookup_BenefitsEligibility_CoverageCopaySelector(SharedResource,utils);
	}
	
	public void clickOnCoverageCopay() throws Throwable{
		memberLookup_BenefitsEligibility_CoverageCopaySelector.clickOnCoverageAndCopayLink();
	}
	
	public void verifyCoverageCopayDetails(Map<String,String> coverageCopayDetails)throws Throwable {
		String strCoverageCode1 = coverageCopayDetails.get("CoverageCode1");
		String strCoverageCode2 = coverageCopayDetails.get("CoverageCode2");		
		String strDescription = coverageCopayDetails.get("Description");
		String strStartDate = coverageCopayDetails.get("StartDate");
		String strCoverageFlag = coverageCopayDetails.get("CoverageFlag");
		String strPriority = coverageCopayDetails.get("Priority");
		String strConditionDescription = coverageCopayDetails.get("ConditionDescription");
		String strCopayField = coverageCopayDetails.get("CopayField");
		String strCopayValues1 = coverageCopayDetails.get("CopayValues1");
		String strCopayValues2 = coverageCopayDetails.get("CopayValues2");
		String strCopayValues3 = coverageCopayDetails.get("CopayValues3");
		String strCopayValues4 = coverageCopayDetails.get("CopayValues4");
		String strCopayValues5 = coverageCopayDetails.get("CopayValues5");
		String strCopayValues6 = coverageCopayDetails.get("CopayValues6");
		String strCopayValues7 = coverageCopayDetails.get("CopayValues7");
		String strCopayValues8 = coverageCopayDetails.get("CopayValues8");
				
		expBECoverageCopayDetails.add(strCoverageCode1);
		expBECoverageCopayDetails.add(strCoverageCode2);
		expBECoverageCopayDetails.add(strDescription);
		expBECoverageCopayDetails.add(strStartDate);
		expBECoverageCopayDetails.add(strCoverageFlag);
		expBECoverageCopayDetails.add(strPriority);
		expBECoverageCopayDetails.add(strConditionDescription);
		expBECoverageCopayDetails.add(strCopayField);
		expBECoverageCopayDetails.add(strCopayValues1);
		expBECoverageCopayDetails.add(strCopayValues2);
		expBECoverageCopayDetails.add(strCopayValues3);
		expBECoverageCopayDetails.add(strCopayValues4);
		expBECoverageCopayDetails.add(strCopayValues5);
		expBECoverageCopayDetails.add(strCopayValues6);
		expBECoverageCopayDetails.add(strCopayValues7);
		expBECoverageCopayDetails.add(strCopayValues8);
		
		memberLookup_BenefitsEligibility_CoverageCopaySelector.waitUntillCoverageAndCopay();
		memberLookup_BenefitsEligibility_CoverageCopaySelector.BenefitsEligibility_CAC_CoverageCode1(strCoverageCode1);
		memberLookup_BenefitsEligibility_CoverageCopaySelector.BenefitsEligibility_CAC_CoverageCode2(strCoverageCode2);
		memberLookup_BenefitsEligibility_CoverageCopaySelector.BenefitsEligibility_CAC_Description(strDescription);
		memberLookup_BenefitsEligibility_CoverageCopaySelector.BenefitsEligibility_CAC_StartDate(strStartDate);
		memberLookup_BenefitsEligibility_CoverageCopaySelector.BenefitsEligibility_CAC_CoverageFlag(strCoverageFlag);
		memberLookup_BenefitsEligibility_CoverageCopaySelector.BenefitsEligibility_CAC_Priority(strPriority);
		memberLookup_BenefitsEligibility_CoverageCopaySelector.BenefitsEligibility_CAC_ConditionDescription(strConditionDescription);
		memberLookup_BenefitsEligibility_CoverageCopaySelector.BenefitsEligibility_CAC_CopayField(strCopayField);
		memberLookup_BenefitsEligibility_CoverageCopaySelector.BenefitsEligibility_CAC_CopayValues1(strCopayValues1);
		memberLookup_BenefitsEligibility_CoverageCopaySelector.BenefitsEligibility_CAC_CopayValues2(strCopayValues2);
		memberLookup_BenefitsEligibility_CoverageCopaySelector.BenefitsEligibility_CAC_CopayValues3(strCopayValues3);
		memberLookup_BenefitsEligibility_CoverageCopaySelector.BenefitsEligibility_CAC_CopayValues4(strCopayValues4);
		memberLookup_BenefitsEligibility_CoverageCopaySelector.BenefitsEligibility_CAC_CopayValues5(strCopayValues5);
		memberLookup_BenefitsEligibility_CoverageCopaySelector.BenefitsEligibility_CAC_CopayValues6(strCopayValues6);
		memberLookup_BenefitsEligibility_CoverageCopaySelector.BenefitsEligibility_CAC_CopayValues7(strCopayValues7);
		memberLookup_BenefitsEligibility_CoverageCopaySelector.BenefitsEligibility_CAC_CopayValues8(strCopayValues8);
					
		for(int i=0;i<expBECoverageCopayDetails.size();i++)
		{
			coverageCopayDetailsSoft.assertEquals(memberLookup_BenefitsEligibility_CoverageCopaySelector.actBECoverageCopayDetails.get(i), expBECoverageCopayDetails.get(i));
		}		
		coverageCopayDetailsSoft.assertAll();
	}
}

