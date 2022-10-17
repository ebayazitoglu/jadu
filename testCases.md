Test Case Field	
Test case ID:	Jadu1
Test Priority:	Medium
Name of the Module:	QA Demo Request Form
Test Designed by:	Ebubekir

Name or Test Title:	Fill In The Demo Form with required fields
Description/Summary of Test:	Fill in the form for requesting a demo 
Pre-condition:	Nil
Dependencies:	Nil
Test Steps:	
1- Open the QA Automation Assessment Demo Form
2- Fill in the required fields with relevant data   
    firtsName, lastName, email, company
3- Click next
4- Verify details are correct
5- Click Submit
6- Verify the form is submitted with a success message

Test Data:	As defined in the fixture file
Expected Results:	Succesfull completion of the form and request of demo
Actual Result:	PASS

_______________________________________________________________

Test Case Field	
Test case ID:	Jadu2
Test Priority:	Medium
Name of the Module:	QA Demo Request Form
Test Designed by:	Ebubekir

Name or Test Title:	Fill In The Demo Form without required fields and expect the form submission not to be successful
Description/Summary of Test:	Fill in the form for requesting a demo 
Pre-condition:	Nil
Dependencies:	Nil
Test Steps:	
1- Open the QA Automation Assessment Demo Form
2- Input name filed with unaccepted characters 
    Leave surmame empty
    Put some text without @ sign in the email section.
3- Click next
4- Verify errror messages for each area
5- Fill in a text area with a Javascript injectios
6- Verify a 403 Forbidden page is displayed

Test Data:	As defined in the fixture file
Expected Results:	UnSuccesfull completion of the form and request of demo, and get error messages
Actual Result:	PASS/ Expected not to submit a form

-------------------------------------------------------------
Test Case Field	
Test case ID:	Jadu3
Test Priority:	Medium
Name of the Module:	QA Demo Request Form
Test Designed by:	Ebubekir

Name or Test Title:	    Fill In The Demo Form with select dropdowns and upload a file
Description/Summary of Test:	Fill in the form for requesting a demo 
Pre-condition:	Nil
Dependencies:	Nil
Test Steps:	
1- Open the QA Automation Assessment Demo Form
2- Fill in the required fioelds as expected.
3. Select country form dropdown
4- Select options for Jadu
5- Upload a file 
6- Click next
7- Verify all fileds are as inputted
8- Click submit
9- verify succes message is displayed.

Test Data:	As defined in the test
Expected Results:	Succesfull completion of the form and request of demo with Selected dropdowns and a file upload
Actual Result:	PASS

-------------------------------------
Test Case Field	
Test case ID:	Jadu4
Test Priority:	Medium
Name of the Module:	QA Demo Request Form
Test Designed by:	Ebubekir

Name or Test Title:	    Postcode finder should not give an error message when input a correct postcode
Description/Summary of Test:	Fill in the form for requesting a demo 
Pre-condition:	Nil
Dependencies:	Nil
Test Steps:	
1- Open the QA Automation Assessment Demo Form
2- Fill in the postcode with an incorrect postcode omitting the number for the second part
3-Click Go
4- Verify that the property hidden is false

5- Fill in the field with a correct password and click go
6- Verify that this time the property hidden should be set to true

Test Data:	As defined in the test
Expected Results:	FAIL
Actual Result:	FAIL