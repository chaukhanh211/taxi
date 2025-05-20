/*---------- Faqs Accordion ----------*/
let faqAccordions = document.querySelectorAll('.faq .accordion-container .accordion');

faqAccordions.forEach(faqAccordion =>{
    faqAccordion.onclick = () =>{
        faqAccordions.forEach(faqAcco =>{
            faqAcco.classList.remove('active');
        });
        faqAccordion.classList.toggle('active');
    }
});