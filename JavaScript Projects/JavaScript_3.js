function displayType(security) {
    var characterType = security.getAttribute("data-security-type");
    alert(characterType + " is in the " + security.innerHTML + " universe!");
}