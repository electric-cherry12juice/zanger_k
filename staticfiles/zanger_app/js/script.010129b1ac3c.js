document.addEventListener('DOMContentLoaded', function() {

    const sections = document.querySelectorAll('.section');

    const fadeInOnScroll = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;

            if (sectionTop < screenHeight - 150) {
                section.classList.add('visible');
            } else {
            }
        });
    };
    
    fadeInOnScroll();
   
    window.addEventListener('scroll', fadeInOnScroll);
  
    const whatsappForm = document.getElementById('whatsapp-form');
    const whatsappPhoneNumber = '77017255330'; 

    if (whatsappForm) {
        
        whatsappForm.addEventListener('submit', function(event) {
          
            event.preventDefault();

            const userName = document.getElementById('user_name').value;
            const userCity = document.getElementById('user_city').value;
            const serviceOfInterest = document.getElementById('service_of_interest').value;
            
            const problemEssence = document.getElementById('problem_essence').value;
            const participants = document.getElementById('participants').value;
            const incidentDetails = document.getElementById('incident_details').value;
            const documentsEvidence = document.getElementById('documents_evidence').value;
            const stepsTaken = document.getElementById('steps_taken').value;

            let message = `Заявка на бесплатную консультацию с сайта юридических услуг:\n\n`; 
            message += `Имя: ${userName}\n`;
        
            if (userCity) { 
                message += `Город: ${userCity}\n`;
            }
            if (serviceOfInterest) {
                message += `Интересующая услуга: ${serviceOfInterest}\n`;
            }

            message += `\n1. Суть проблемы/спора:\n${problemEssence}\n`; 

            if (participants) { 
                message += `\n2. Участники дела:\n${participants}\n`;
            }
            if (incidentDetails) { 
                message += `\n3. Обстоятельства инцидента:\n${incidentDetails}\n`;
            }
            if (documentsEvidence) { 
                message += `\n4. Документы/доказательства:\n${documentsEvidence}\n`;
            }
            if (stepsTaken) { 
                message += `\n5. Предпринятые шаги:\n${stepsTaken}\n`;
            }

            const encodedMessage = encodeURIComponent(message);
            const whatsappUrl = `https://wa.me/${whatsappPhoneNumber}?text=${encodedMessage}`;

            window.open(whatsappUrl, '_blank');
            
        });
    }

    const serviceItems = document.querySelectorAll('.service-item');

    serviceItems.forEach(item => {
        const heading = item.querySelector('h3');
        const description = item.querySelector('.service-description'); 

        if (heading && description) {
            heading.addEventListener('click', function() {
                description.classList.toggle('visible'); 
            });
        }
    
    });
    
});