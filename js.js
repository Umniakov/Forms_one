console.log('hi');

document.addEventListener("change",
  () => {
    document.getElementById("billing-checkbox")
    toggleBilling();
  }
)

function toggleBilling() {
  const billingItems = document.querySelectorAll('#billing input[type="text"]');
  const billingLabels = document.querySelectorAll(".billing-label");

  console.log(billingItems.length)
  for (let i = 0; i < billingItems.length; i++) {
    billingItems[i].disabled = !billingItems[i].disabled;
    
    if (
      billingLabels[i].getAttribute("class") === "billing-label disabled-label"
    ) {
      billingLabels[i].setAttribute("class", "billing-label"); 
    } else {
      billingLabels[i].setAttribute("class", "billing-label disabled-label");
    }
  }
}