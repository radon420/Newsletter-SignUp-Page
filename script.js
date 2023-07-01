let errorText = document.createElement("span");
function emailCheck() {
  let emailID = document.querySelector("#email").value;

  if (!/^[\w\.]+@([\w]+\.)+[\w]{2,4}$/.test(emailID)) {
    errorText.textContent = "Valid email required";
    document
      .querySelector("#email-input")
      .insertBefore(errorText, document.querySelector("#email"));
    document
      .querySelector("#email")
      .setAttribute("style", "border: 1px solid red");
    return false;
  } else errorText.textContent = "";
  return true;
}

function submitEmail() {
  let emailID = document.querySelector("#email").value;
  if (emailCheck()) {
    document.querySelector("#image-pane").classList.toggle("hidden");
    document.querySelector("#text-pane").classList.toggle("hidden");
    document.querySelector("#email-add-pane").classList.toggle("hidden");
    document.querySelector("#background").classList.toggle("hidden");
    document.querySelector("#thank-you-page").classList.toggle("hidden");
    document.querySelector("#thank-you-page div").classList.toggle("hidden");
    document.querySelector("#entered-email").textContent = emailID;
  }
}

function dismissMessage() {
  document.querySelector("#thank-you-page").classList.toggle("hidden");
  document.querySelector("#thank-you-page div").classList.toggle("hidden");
  document.querySelector("#background").classList.toggle("hidden");
  document.querySelector("#image-pane").classList.toggle("hidden");
  document.querySelector("#text-pane").classList.toggle("hidden");
  document.querySelector("#email-add-pane").classList.toggle("hidden");
}
