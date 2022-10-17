# jadu
I have created four testcases

I created a QAFomrPage.js to use as a POM,I got most of the elements in my tests from this file by importing the file
There are four it blocks containing for separate tests and each run with a beforeEach hook

One happy path by  creating a form with required fields.
I also created a fixture file so that I could get the data from the fixture file. I added the data and verified that all the required fields are filled as expected .
Also verified that all the given data is cehecked in the seciond stage 
And finally verified that we got the success message successfully.

One Unhappy path,
Verigying thate the form cannot be created without inputting the required fields in the required format.
Name fileds require alphabetic characters and not special characters
Email requires @sign
And error messages are verified  in the second step.
I also chcked that a Javascript injection should not be allowed and should give a 403 Forbidden error when attempted

In the third test :
I used the select class and method for the dropdowns and selected them.
I also uploaded a jpeg file and
verified all these 
at the end and got a success message

In the fourth test
I have checked that the postcode errro message is displayed regardless of what is input. it could be correct and incorrect postcode but the result is always the same.
The element has a property to be hidden and does not show wehn hidden.
I provided an incorrect postcode and expected the property hidden to be false
Then in the secind step I provided a correct postcode which I know is true and expected the property hidden tobe true but again gave false. This test fails and shows that there is an unexpected behaviour.
I used the invoke method and the properties in the developer tools to acces this property.

i started around 7.45 to this tests and finished around 10.00