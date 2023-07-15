Feature: This document is about testing the page APPOINTMENT MANAGEMENT

  @case1
  Scenario: Create Appointment 
  Given a user opens APPOINTMENT MANAGEMENT web
  Then a user validates dimamic title "There are no appointments"
  When a user enters a Pet Name "a"
  And a user enters a Owner Name "a"
  And a user enters a Date "2023-10-03"
  And a user enters a Time "10:13"
  And a user enters some Symptoms "he is sick"
  And a user Add Appointment
  Then a user validate if the Appointment was added
  And a user validates dimamic title "Manage your appointments"

  @case2
     Scenario Outline: Valide message when Form is incomplete or empty
  Given a user opens APPOINTMENT MANAGEMENT web
  Then a user validates dimamic title "There are no appointments"
  When a user enters a Pet Name <PetName>
  And a user enters a Owner Name <Owner>
  And a user enters a Date <Date>
  And a user enters a Time <Time>
  And a user enters some Symptoms <Symptoms>
  And a user Add Appointment
  Then a user validates message "All fields are required"
  And a user validates if there are Appointments
    And a user validates dimamic title "There are no appointments"
  Examples:
     
     |PetName|Owner|Date|Time|Symptoms|
     |"a"|"a"|"2023-10-03"|"10:13"|""|
     |"a"|"a"|"2023-10-03"|""|""|
     |"a"|"a"|""|""|""|
     |"a"|""|""|""|""|
     |""|""|""|""|""|
     |""|"a"|"2023-10-03"|"10:13"|"he is sick"|
     |""|""|"2023-10-03"|"10:13"|"he is sick"|
     |""|""|""|"10:13"|"he is sick"|
     |""|""|""|""|"he is sick"|
     |""|""|""|""|""|


@case3
   Scenario: Create a lot of Appointment 
  Given a user opens APPOINTMENT MANAGEMENT web
  Then a user validates dimamic title "There are no appointments"
  When a user enters a Pet Name, Owner Name, Date, Time, Symptoms and Add Appointment
   |PetName|Owner|Date|Time|Symptoms|
   |"a"|"a"|2023-10-03|10:13|"he is sick"|
   |"b"|"c"|2022-10-03|17:13|"she is sick"|
  Then a user validate if the Appointment was added
  And a user validates dimamic title "Manage your appointments"

@case4
  Scenario: Create Appointment and Delete Appointment
    Given a user opens APPOINTMENT MANAGEMENT web
  Then a user validates dimamic title "There are no appointments"
  When a user enters a Pet Name, Owner Name, Date, Time, Symptoms and Add Appointment
   |PetName|Owner|Date|Time|Symptoms|
   |"a"|"a"|2023-10-03|10:13|"he is sick"|
   |"b"|"c"|2022-10-03|17:13|"she is sick"|
  Then a user validates dimamic title "Manage your appointments"
  And a user deletes appointments
  And a user validates dimamic title "There are no appointments"
  And a user validates if there are Appointments