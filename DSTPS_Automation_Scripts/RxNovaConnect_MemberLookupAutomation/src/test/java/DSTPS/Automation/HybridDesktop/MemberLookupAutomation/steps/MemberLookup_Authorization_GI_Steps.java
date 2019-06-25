package DSTPS.Automation.HybridDesktop.MemberLookupAutomation.steps;

import java.util.ArrayList;
import java.util.Map;
import org.openqa.selenium.WebDriver;
import org.testng.asserts.SoftAssert;
import DSTPS.Automation.HybridDesktop.Apps.common.HybridDesktop_SharedResource;
import DSTPS.Automation.HybridDesktop.Apps.common.RxNova_Utlilty;
import DSTPS.Automation.HybridDesktop.MemberLookupAutomation.pages.MemberLookup_Authorization_GISelector;

public class MemberLookup_Authorization_GI_Steps {

	MemberLookup_Authorization_GISelector memberLookup_Authorization_GISelector;
	
	private HybridDesktop_SharedResource SharedResource;
	private WebDriver driver;
	private RxNova_Utlilty utils;
	
	public ArrayList<String> expAuthGenInfoDetails = new ArrayList<String>();
	public SoftAssert authGenInfoSoft = new SoftAssert();
	
	public MemberLookup_Authorization_GI_Steps(HybridDesktop_SharedResource SharedResource, RxNova_Utlilty utils) throws Throwable{
		this.SharedResource = SharedResource;
		this.driver = SharedResource.getDriver();	
		this.utils = utils;	
		init();
	}
	
	public void init() throws Throwable
	{
		// Initialize all the pages you are handling 
		memberLookup_Authorization_GISelector = new MemberLookup_Authorization_GISelector(SharedResource,utils);
	}
	
	public void clickOnGeneralInformation() throws Throwable{
		memberLookup_Authorization_GISelector.Authorization_clickOnGeneralInformation();
	}
	
	public void verifyGeneralInformationDetails(Map<String,String> genInfoDetails)throws Throwable {
		String strAuthID = genInfoDetails.get("AuthID");
		String strStatus = genInfoDetails.get("Status");
		String strAuthType = genInfoDetails.get("AuthType");		
		String strRxNumber = genInfoDetails.get("RxNumber");
		String strEffectiveDate = genInfoDetails.get("EffectiveDate");
		String strRefillsAllowed = genInfoDetails.get("RefillsAllowed");
		String strEndDate = genInfoDetails.get("EndDate");
		String strFillsUsed = genInfoDetails.get("FillsUsed");
		String strCompound = genInfoDetails.get("Compound");
		String strDedIncludeOrExclude = genInfoDetails.get("DedInclude/Exclude");
		String strRuleType = genInfoDetails.get("RuleType");
		String strDedMaxOverride = genInfoDetails.get("DedMaxOverride");		
		String strMetDecQuantity = genInfoDetails.get("MetricDecimalQty");
		String strNWIndicator = genInfoDetails.get("NetworkIndicator");
		String strDaysSupply = genInfoDetails.get("DaysSupply");
		String strDollorAmount = genInfoDetails.get("DollarAmount");
		String strLICSLevel = genInfoDetails.get("LICSLevel");
		String strMedPartDType = genInfoDetails.get("MedPartDType");
		String strTierValue = genInfoDetails.get("TierValue");		
		String strPhases = genInfoDetails.get("Phases");
		String strType = genInfoDetails.get("Type");
		String strBrandOvrdType = genInfoDetails.get("BrandOverrideType");
		String strBrandOvrdValue = genInfoDetails.get("BrandOverrideValue");
		String strBrandMultiplierUse = genInfoDetails.get("MultiplierUse");
		String strGenOvrdType = genInfoDetails.get("GenOverrideType");
		String strGenOvrdValue = genInfoDetails.get("GenOverrideValue");
		String strGenMultiplierUse = genInfoDetails.get("MultiplierUse");
		String strDrugLevel = genInfoDetails.get("DrugLevel");
		String strDrugValue = genInfoDetails.get("DrugValue");
		String strDrugName = genInfoDetails.get("DrugName");
		String strErrors = genInfoDetails.get("Errors");
		String strEC1 = genInfoDetails.get("ErrorCategory1");
		String strEC2 = genInfoDetails.get("ErrorCategory2");
		String strEC3 = genInfoDetails.get("ErrorCategory3");
		String strEC4 = genInfoDetails.get("ErrorCategory4");
		String strEC5 = genInfoDetails.get("ErrorCategory5");
		String strEC6 = genInfoDetails.get("ErrorCategory6");
		String strEC7 = genInfoDetails.get("ErrorCategory7");
		String strEC8 = genInfoDetails.get("ErrorCategory8");
		String strEC9 = genInfoDetails.get("ErrorCategory9");
		String strEC10 = genInfoDetails.get("ErrorCategory10");
		String strEC11 = genInfoDetails.get("ErrorCategory11");
		String strEC12 = genInfoDetails.get("ErrorCategory12");
				
		
		expAuthGenInfoDetails.add(strAuthID);
		expAuthGenInfoDetails.add(strStatus);
		expAuthGenInfoDetails.add(strAuthType);
		expAuthGenInfoDetails.add(strRxNumber);
		expAuthGenInfoDetails.add(strEffectiveDate);
		expAuthGenInfoDetails.add(strRefillsAllowed);
		expAuthGenInfoDetails.add(strEndDate);
		expAuthGenInfoDetails.add(strFillsUsed);
		expAuthGenInfoDetails.add(strCompound);
		expAuthGenInfoDetails.add(strDedIncludeOrExclude);
		expAuthGenInfoDetails.add(strRuleType);
		expAuthGenInfoDetails.add(strDedMaxOverride);
		expAuthGenInfoDetails.add(strMetDecQuantity);
		expAuthGenInfoDetails.add(strNWIndicator);
		expAuthGenInfoDetails.add(strDaysSupply);
		expAuthGenInfoDetails.add(strDollorAmount);
		expAuthGenInfoDetails.add(strLICSLevel);
		expAuthGenInfoDetails.add(strMedPartDType);
		expAuthGenInfoDetails.add(strTierValue);
		expAuthGenInfoDetails.add(strPhases);
		expAuthGenInfoDetails.add(strType);
		expAuthGenInfoDetails.add(strBrandOvrdType);
		expAuthGenInfoDetails.add(strBrandOvrdValue);
		expAuthGenInfoDetails.add(strBrandMultiplierUse);
		expAuthGenInfoDetails.add(strGenOvrdType);
		expAuthGenInfoDetails.add(strGenOvrdValue);
		expAuthGenInfoDetails.add(strGenMultiplierUse);
		expAuthGenInfoDetails.add(strDrugLevel);
		expAuthGenInfoDetails.add(strDrugValue);
		expAuthGenInfoDetails.add(strDrugName);
		expAuthGenInfoDetails.add(strErrors);
		expAuthGenInfoDetails.add(strEC1);
		expAuthGenInfoDetails.add(strEC2);
		expAuthGenInfoDetails.add(strEC3);
		expAuthGenInfoDetails.add(strEC4);
		expAuthGenInfoDetails.add(strEC5);
		expAuthGenInfoDetails.add(strEC6);
		expAuthGenInfoDetails.add(strEC7);
		expAuthGenInfoDetails.add(strEC8);
		expAuthGenInfoDetails.add(strEC9);
		expAuthGenInfoDetails.add(strEC10);
		expAuthGenInfoDetails.add(strEC11);
		expAuthGenInfoDetails.add(strEC12);

		memberLookup_Authorization_GISelector.waitUntillGeneralInformation();
		memberLookup_Authorization_GISelector.Authorization_GI_AuthID(strAuthID);
		memberLookup_Authorization_GISelector.Authorization_GI_Status(strStatus);
		memberLookup_Authorization_GISelector.Authorization_GI_AuthType(strAuthType);
		memberLookup_Authorization_GISelector.Authorization_GI_RxNumber(strRxNumber);
		memberLookup_Authorization_GISelector.Authorization_GI_EffectiveDate(strEffectiveDate);
		memberLookup_Authorization_GISelector.Authorization_GI_RefillsAllowed(strRefillsAllowed);
		memberLookup_Authorization_GISelector.Authorization_GI_EndDate(strEndDate);
		memberLookup_Authorization_GISelector.Authorization_GI_FillsUsed(strFillsUsed);
		memberLookup_Authorization_GISelector.Authorization_GI_Compound(strCompound);
		memberLookup_Authorization_GISelector.Authorization_GI_OvrdInfo_DeductibleIncludeOrExclude(strDedIncludeOrExclude);
		memberLookup_Authorization_GISelector.Authorization_GI_OvrdInfo_RuleType(strRuleType);
		memberLookup_Authorization_GISelector.Authorization_GI_OvrdInfo_DeductibleMaxOverride(strDedMaxOverride);
		memberLookup_Authorization_GISelector.Authorization_GI_OvrdInfo_MetricDecimalQuantity(strMetDecQuantity);
		memberLookup_Authorization_GISelector.Authorization_GI_OvrdInfo_NWIndicator(strNWIndicator);
		memberLookup_Authorization_GISelector.Authorization_GI_OvrdInfo_DaysSupply(strDaysSupply);
		memberLookup_Authorization_GISelector.Authorization_GI_OvrdInfo_DollorAmount(strDollorAmount);
		memberLookup_Authorization_GISelector.Authorization_GI_OvrdInfo_LICSLevel(strLICSLevel);
		memberLookup_Authorization_GISelector.Authorization_GI_OvrdInfo_MedPartDType(strMedPartDType);
		memberLookup_Authorization_GISelector.Authorization_GI_OvrdInfo_TierValue(strTierValue);
		memberLookup_Authorization_GISelector.Authorization_GI_OvrdInfo_Phases(strPhases);
		memberLookup_Authorization_GISelector.Authorization_GI_OvrdInfo_Type(strType);
		memberLookup_Authorization_GISelector.Authorization_GI_OvrdInfo_BrandOverrideType(strBrandOvrdType);
		memberLookup_Authorization_GISelector.Authorization_GI_OvrdInfo_BrandOverrideValue(strBrandOvrdValue);
		memberLookup_Authorization_GISelector.Authorization_GI_OvrdInfo_BrandMultiplierUse(strBrandMultiplierUse);
		memberLookup_Authorization_GISelector.Authorization_GI_OvrdInfo_GenericOverrideType(strGenOvrdType);
		memberLookup_Authorization_GISelector.Authorization_GI_OvrdInfo_GenericOverrideValue(strGenOvrdValue);
		memberLookup_Authorization_GISelector.Authorization_GI_OvrdInfo_GenericMultiplierUse(strGenMultiplierUse);
		memberLookup_Authorization_GISelector.Authorization_GI_DrugInfo_DrugLevel(strDrugLevel);
		memberLookup_Authorization_GISelector.Authorization_GI_DrugInfo_DrugValue(strDrugValue);
		memberLookup_Authorization_GISelector.Authorization_GI_DrugInfo_DrugName(strDrugName);
		memberLookup_Authorization_GISelector.Authorization_GI_Errors(strErrors);
		memberLookup_Authorization_GISelector.Authorization_GI_ErrorCategory1();
		memberLookup_Authorization_GISelector.Authorization_GI_ErrorCategory2();
		memberLookup_Authorization_GISelector.Authorization_GI_ErrorCategory3();
		memberLookup_Authorization_GISelector.Authorization_GI_ErrorCategory4();
		memberLookup_Authorization_GISelector.Authorization_GI_ErrorCategory5();
		memberLookup_Authorization_GISelector.Authorization_GI_ErrorCategory6();
		memberLookup_Authorization_GISelector.Authorization_GI_ErrorCategory7();
		memberLookup_Authorization_GISelector.Authorization_GI_ErrorCategory8();
		memberLookup_Authorization_GISelector.Authorization_GI_ErrorCategory9();
		memberLookup_Authorization_GISelector.Authorization_GI_ErrorCategory10();
		memberLookup_Authorization_GISelector.Authorization_GI_ErrorCategory11();
		memberLookup_Authorization_GISelector.Authorization_GI_ErrorCategory12();
		
		for(int i=0;i<expAuthGenInfoDetails.size();i++)
		{
			authGenInfoSoft.assertEquals(memberLookup_Authorization_GISelector.actAuthGenInfoDetails.get(i), expAuthGenInfoDetails.get(i));
		}		
		authGenInfoSoft.assertAll();
	}
}

