const faqsBtn = document.getElementById("FAQs");
const FAQs = document.querySelector(".FAQs");
faqsBtn.addEventListener('click', function(){
	FAQs.classList.toggle("active");
	faqsBtn.classList.toggle("active");

})
