// ❌ All responsibilities in one
function processOrder() {
  const items = ["apple", "banana"];
  const total = items.length * 10;
  console.log("Total:", total);
  console.log("Sending email...");
}

// ✅ Split concerns
function calculateTotal(items) {
  return items.length * 10;
}

function sendEmail() {
  console.log("Sending email...");
}

function processOrder() {
  const items = ["apple", "banana"];
  const total = calculateTotal(items);
  console.log("Total:", total);
  sendEmail();
}
