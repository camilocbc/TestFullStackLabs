import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";
import { appointmentPage } from "../pageObjects/appointmentPage.cy";
const appPage = new appointmentPage()
Given("a user opens APPOINTMENT MANAGEMENT web",()=>{
    
    appPage.navegate('/');
})

When('a user enters a Pet Name {string}',(petname)=>{
    appPage.enterPetName(petname);
}) 

When('a user enters a Owner Name {string}',(petOwner)=>{
    appPage.enterPetOwner(petOwner);
})

When('a user enters a Date {string}',(date)=>{
    appPage.enterDate(date);
})

When('a user enters a Time {string}',(time)=>{
    appPage.enterTime(time);
}) 
 
When('a user enters some Symptoms {string}',(symptoms)=>{
    appPage.enterSymptoms(symptoms);
}) 
When('a user Add Appointment',()=>{
    appPage.clickAddAppointment();
}) 

When('a user enters a Pet Name, Owner Name, Date, Time, Symptoms and Add Appointment',(dataTable)=>{
    dataTable.hashes().forEach(row =>{
        appPage.enterPetName(row.PetName);
        appPage.enterPetOwner(row.Owner);
        appPage.enterDate(row.Date);
        appPage.enterTime(row.Time);
        appPage.enterSymptoms(row.Symptoms);
        appPage.clickAddAppointment();
    })
})

Then('a user validate if the Appointment was added',()=>{
    appPage.validateAppointment();
}) 
Then('a user validates message {string}',(message)=>{
    appPage.validateMessageAlert(message);
}) 
Then('a user validates if there are Appointments',()=>{
    appPage.validateThereAreAppointmets();
}) 
Then('a user validates dimamic title {string}',(message)=>{
    appPage.validateDinamicTitle(message);
}) 
Then('a user deletes appointments',()=>{
    appPage.deleteAllAppointments();
        
}) 

