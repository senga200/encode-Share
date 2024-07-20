function encodeURL() {
  var input = document.getElementById("input").value;
  var encoded = encodeURIComponent(input);
  document.getElementById("output").value = encoded;
}

function decodeURL() {
  var input = document.getElementById("input").value;
  var decoded = decodeURIComponent(input);
  document.getElementById("output").value = decoded;
}

function encodeAndConcatenateMailTo() {
  const subject = document.getElementById("mailtoSubjectInput").value.trim();
  const body = document.getElementById("mailtoBodyInput").value.trim();
  const link = document.getElementById("mailtoLinkInput").value.trim();
  const link1 = document.getElementById("mailtoLinkInput1").value.trim();
  const link2 = document.getElementById("mailtoLinkInput2").value.trim();

  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);
  const encodedLink = encodeURIComponent(link);
  const encodedLink1 = encodeURIComponent(link1);
  const encodedLink2 = encodeURIComponent(link2);

  let mailtoLink = `mailto:?subject=${encodedSubject}&body=${encodedBody}%0A%0A`;

  if (link !== "") {
    mailtoLink += `Lien à partager :%0A${encodedLink}%0A%0A`;
  }

  if (link1 !== "") {
    mailtoLink += `Lien Android :%0A${encodedLink1}%0A%0A`;
  }

  if (link2 !== "") {
    mailtoLink += `Lien iOS :%0A${encodedLink2}%0A%0A`;
  }
  document.getElementById("mailtoResultInput").value = mailtoLink;
}

function encodeAndConcatenateWhatsApp() {
  const text = document.getElementById("whatsappTextInput").value.trim();
  const link = document.getElementById("whatsappLinkInput").value.trim();

  const encodedText = encodeURIComponent(text + " " + link);

  const whatsappLink = `https://api.whatsapp.com/send?text=${encodedText}`;

  document.getElementById("whatsappResultInput").value = whatsappLink;
}

function encodeMessenger() {
  const link = document.getElementById("messengerLinkInput").value.trim();

  const encodedText = encodeURIComponent(link);

  const messengerLink = `fb-messenger://share/?link=${encodedText}`;

  document.getElementById("messengerResultInput").value = messengerLink;
}

function encodeFacebook() {
  const link = document.getElementById("facebookLinkInput").value.trim();

  const encodedText = encodeURIComponent(link);

  const facebookLink = `https://www.facebook.com/sharer/sharer.php?u=${encodedText}`;

  document.getElementById("facebookResultInput").value = facebookLink;
}
