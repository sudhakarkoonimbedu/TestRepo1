package DSTPS.Automation.HybridDesktop.MemberLookupAutomation.steps;

import java.util.ArrayList;
import java.util.Map;
import org.openqa.selenium.WebDriver;
import org.testng.asserts.SoftAssert;
import DSTPS.Automation.HybridDesktop.Apps.common.HybridDesktop_SharedResource;
import DSTPS.Automation.HybridDesktop.Apps.common.RxNova_Utlilty;
import DSTPS.Automation.HybridDesktop.MemberLookupAutomation.pages.MemberLookup_Authorization_NotesAndHistorySelector;

public class MemberLookup_Authorization_NotesAndHistory_Steps {

	MemberLookup_Authorization_NotesAndHistorySelector memberLookup_Authorization_NotesAndHistorySelector;
	
	private HybridDesktop_SharedResource SharedResource;
	private WebDriver driver;
	private RxNova_Utlilty utils;
	
	public ArrayList<String> expAuthNotesHistoryDetails = new ArrayList<String>();
	public SoftAssert authNotesHistorySoft = new SoftAssert();
	
	public MemberLookup_Authorization_NotesAndHistory_Steps(HybridDesktop_SharedResource SharedResource, RxNova_Utlilty utils) throws Throwable{
		this.SharedResource = SharedResource;
		this.driver = SharedResource.getDriver();	
		this.utils = utils;	
		init();
	}
	
	public void init() throws Throwable
	{
		// Initialize all the pages you are handling 
		memberLookup_Authorization_NotesAndHistorySelector = new MemberLookup_Authorization_NotesAndHistorySelector(SharedResource,utils);
	}
	
	public void clickOnNotesAndHistory() throws Throwable{
		memberLookup_Authorization_NotesAndHistorySelector.Authorization_clickOnNotesAndHistory();
	}
	
	public void verifyNotesAndHistoryDetails(Map<String,String> notesAndHistoryDetails)throws Throwable {
		String strNotes = notesAndHistoryDetails.get("Notes");
		String strAdded = notesAndHistoryDetails.get("HistoryAdded");
		String strLastUpdate = notesAndHistoryDetails.get("HistoryLastUpdated");		
		String strLastUsed = notesAndHistoryDetails.get("HistoryLastUsed");
		
		expAuthNotesHistoryDetails.add(strNotes);
		expAuthNotesHistoryDetails.add(strAdded);
		expAuthNotesHistoryDetails.add(strLastUpdate);
		expAuthNotesHistoryDetails.add(strLastUsed);

		memberLookup_Authorization_NotesAndHistorySelector.waitUntillNotesAndHistory();
		memberLookup_Authorization_NotesAndHistorySelector.Authorization_Notes(strNotes);
		memberLookup_Authorization_NotesAndHistorySelector.Authorization_History_Added(strAdded);
		memberLookup_Authorization_NotesAndHistorySelector.Authorization_History_LastUpdate(strLastUpdate);
		memberLookup_Authorization_NotesAndHistorySelector.Authorization_History_LastUsed(strLastUsed);
		
		for(int i=0;i<expAuthNotesHistoryDetails.size();i++)
		{
			authNotesHistorySoft.assertEquals(memberLookup_Authorization_NotesAndHistorySelector.actAuthNotesHistoryDetails.get(i), expAuthNotesHistoryDetails.get(i));
		}		
		authNotesHistorySoft.assertAll();
	}
}

