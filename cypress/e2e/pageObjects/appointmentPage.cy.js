let infoAppointment = [];
let appointments = [];

export class appointmentPage{

   

    navegate(website){
        cy.visit(website)
    }


    enterPetName(petname){
        if(petname !== ""){
            infoAppointment[0] = petname;
            cy.get('[data-testid="pet"]').type(petname);
        }
       
    }

    enterPetOwner(petOwner){
        if(petOwner !== ""){
        infoAppointment[1] = petOwner;
        cy.get('[data-testid="owner"]').type(petOwner);
        }
    }
    enterDate(date){
        if(date !== ""){
        infoAppointment[2] = date;
        cy.get('[data-testid="date"]').type(date); 
        }
    }
    enterTime(time){
        if(time !== ""){
        infoAppointment[3] = time;
        cy.get('[data-testid="time"]').type(time);
        }
    }
    enterSymptoms(symptoms){
        if(symptoms !== ""){
        infoAppointment[4] = symptoms;
        cy.get('[data-testid="symptoms"]').type(symptoms);
        }
    }
    clickAddAppointment(){
        cy.get('[data-testid="btn-submit"]').click();
    }

    validateAppointment(){  
        appointments.push(infoAppointment);

        appointments.forEach((appointment,i)=>{
            appointment.forEach((a,j)=>{
                cy.log(a[j]);
            });
        })
        cy.log(appointments.length);
        cy.get('[data-testid="appointment"]').each((element, i)=>{
            cy.get(":nth-child("+(appointments.length+1)+") > :nth-child(n) > span").each((element, j)=>{
              cy.wrap(element).invoke('text').should('contain',appointments[i][j])          
          
        })
    })
        
     
    }

    validateMessageAlert(message){
        cy.get('[data-testid="alert"]').should('contain.text', message)
    }

    validateThereAreAppointmets(){
        cy.get('[data-testid="appointment"]').should('not.exist');
    }
    validateDinamicTitle(message){
        cy.get('[data-testid="dynamic-title"]').should('contain.text', message)
    }

    deleteAllAppointments(){
        cy.get(':nth-child(n) > [data-testid="btn-delete"]').each((element, i)=>{
            element.click();
        })
    }

}