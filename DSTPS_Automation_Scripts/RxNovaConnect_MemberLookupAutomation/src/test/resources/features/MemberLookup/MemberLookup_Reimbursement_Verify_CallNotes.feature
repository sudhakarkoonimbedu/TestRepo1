Feature: MemberLookup Search and verify Reimbursement Call Notes

  Background: performLogin
    Given the user access the Hybrid Desktop Application
      | userid   | dt79655 |
      | password | rxnova1 |
      | region   | DR1     |

  @Functional
  Scenario Outline: Member Lookup search with valid data
    Given User in Landing Page, he selects the application from menu    
      | menu | <ApplicationMenu> |      
    Then User search for existing member by entering details in Member Lookup    
      | SearchCustomerSet | <SearchCustomerSet> |
      | SearchCustomer    | <SearchCustomer>    |
      | SearchMemberID    | <SearchMemberID>    |
      | SearchAltID       | <SearchAltID>       |
      | SearchExactMatch  | <SearchExactMatch>  |
      | SearchFirstName   | <SearchFirstName>   |
      | SearchMI          | <SearchMI>          |
      | SearchLastName    | <SearchLastName>    |
      | SearchDOB         | <SearchDOB>         |
      | SearchClaimID     | <SearchClaimID>     |     	
    Then Member details should be displayed    
      | Customer      | <Customer>    |
      | MemberID      | <MemberID>    |
      | AltMemberID   | <AltMemberID> |
      | FirstName     | <FirstName>   |
      | LastName      | <LastName>    |
      | MI            | <MI>          |      
      | DOB           | <DOB>         |
      | StartDate     | <StartDate>   |
      | EndDate       | <EndDate>     |
            
    Examples: 
      | ApplicationMenu               | SearchCustomerSet | SearchCustomer    | SearchMemberID | SearchAltID | SearchExactMatch | SearchFirstName | SearchMI | SearchLastName | SearchDOB | SearchClaimID | Customer                   | MemberID                     | AltMemberID    | FirstName       | LastName                   | MI  | DOB            | StartDate             | EndDate              |
      | Miscellaneous->RxNova Connect | Humana            | 0319 - 0319HUMANA | 90818000101    |             | checked          |                 |          |                |           |               | Customer^0319 - 0319HUMANA | Member ID^000000090818000101 | Alt Member ID^ | First Name^MBR1 | Last Name^MBRNONBRIDGECUST | MI^ | DOB^01/15/1964 | Start Date^01/01/2015 | End Date^No end date |
      
     
  @Functional
  Scenario Outline: Verify Header details
    Given User in Member Lookup Search Page and click on Blue arrow at Customer Field         
    Then User verifies the header details     
      | CustomerSet | <CustomerSet> |         
      | Customer		| <Customer>    |
      | Client      | <Client>      |
      | Group      	| <Group>  	    |
      | Gender			| <Gender>      |
      | MemberID    | <MemberID>    | 
      | AltMemberID | <AltMemberID> |
      | FirstName   | <FirstName>   |
      | LastName    | <LastName>    |
      | DOB         | <DOB>         |      
      
    Examples: 
      | CustomerSet          | Customer                    | Client                     | Group             | Gender    | MemberID                      | AltMemberID     | FirstName        | LastName                    | DOB             |
      | Customer Set:^Humana | Customer:^0319 - 0319HUMANA | Client:^9007 - NBRG--CLNT1 | Group:^RXCONNECT2 | Gender:^M | Member ID:^000000090818000101 | Alt Member ID:^ | First Name:^MBR1 | Last Name:^MBRNONBRIDGECUST | DOB:^01/15/1964 |
          
  @Functional
  Scenario Outline: Verify Reimbursement Call Notes 
    Given User in Member Lookup details page    
    Then User click on Reimbursement icon     
    Then User click on Call Notes in Reimbursement screen     
    Then User provides details in Reimbursement Add New Call Notes screen and click on Save Notes button
      | AddNewType		 | <AddNewType>     |         
      | AddNewStatus	 | <AddNewStatus>   |
      | AddNewComments | <AddNewComments> |     
    Then User verifies Reimbursement Previous Call Notes Comments            
      | PrevCallNotesComment | <PrevCallNotesComment> |     
    Then User verify Reimbursement Previous Call Notes details    
      | Type   | <Type>   |
	    | Status | <Status>	|
      | UserID | <UserID> |      
       
    Examples: 
      | AddNewType | AddNewStatus | AddNewComments        | PrevCallNotesComment  | Type         | Status              | 
      | I - MAC    | 1 - Resolved | Reimbursement Comment | Reimbursement Comment | Type^I - MAC | Status^1 - Resolved |  
  
  
  
  
  
  
  
   