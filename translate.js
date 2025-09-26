const translations = {
    nl: {
      home_title: "Beleef de Zomer bij Best-Inn Hotels",
      home_text: "De zomer bij Best-Inn Hotels staat in het teken van ontspannen en ontdekken. Geniet van de rust in de groene bossen van de Veluwe of kies voor een bruisend verblijf in steden als Amsterdam of Breda. Perfect voor een lang weekend of een midweek. Onze kamers zijn ruim en comfortabel, en dankzij de late check-out tot 13:00 uur start elke dag zorgeloos. Of u nu komt voor werk of plezier, wij heten u van harte welkom.",
      home_cta: "Bekijk Aanbiedingen",
      footer: "© 2025 Best-Inn Hotels – Geniet van uw verblijf!",
      
      offers_title: "Onze Aanbiedingen",
      offer1_name: "Veluwe Retreat",
      offer1_desc: "Rust en natuur in de Veluwe. Kamer vanaf €120 per nacht.",
      offer2_name: "Oisterwijk Forest Escape",
      offer2_desc: "Geniet van bossen en frisse lucht. Kamer vanaf €130 per nacht.",
      offer3_name: "Amsterdam City Break",
      offer3_desc: "Ontdek de hoofdstad. Kamer vanaf €160 per nacht.",
      offer4_name: "Breda Weekend",
      offer4_desc: "Historie en gezelligheid in Breda. Kamer vanaf €120 per nacht.",
      offer5_name: "Business Comfort",
      offer5_desc: "Perfect voor werkreizen. Kamer vanaf €130 per nacht.",
      offer6_name: "Relax & Unwind",
      offer6_desc: "Even ertussenuit voor rust en ontspanning. Kamer vanaf €160 per nacht.",
      view_details: "Bekijk details",
      book_now: "Boek nu",
   
      contact_title: "Contact",
      contact_name: "Naam",
      contact_email: "E-mail",
      contact_message: "Bericht",
      contact_send: "Verstuur"
    },
    en: {
      home_title: "Experience Summer at Best-Inn Hotels",
      home_text: "Summer at Best-Inn Hotels is all about relaxing and exploring. Enjoy the peace of the Veluwe forests or choose a lively stay in cities like Amsterdam or Breda. Perfect for a long weekend or a midweek getaway. Our rooms are spacious and comfortable, and with our late check-out until 1:00 PM, every day starts stress-free. Whether for business or leisure, you are always welcome.",
      home_cta: "View Offers",
      footer: "© 2025 Best-Inn Hotels – Enjoy your stay!",
   
      offers_title: "Our Offers",
      offer1_name: "Veluwe Retreat",
      offer1_desc: "Peace and nature in the Veluwe. Rooms from €120 per night.",
      offer2_name: "Oisterwijk Forest Escape",
      offer2_desc: "Enjoy the forest air. Rooms from €130 per night.",
      offer3_name: "Amsterdam City Break",
      offer3_desc: "Discover the capital city. Rooms from €160 per night.",
      offer4_name: "Breda Weekend",
      offer4_desc: "History and charm in Breda. Rooms from €120 per night.",
      offer5_name: "Business Comfort",
      offer5_desc: "Perfect for business trips. Rooms from €130 per night.",
      offer6_name: "Relax & Unwind",
      offer6_desc: "Get away for rest and relaxation. Rooms from €160 per night.",
      view_details: "View details",
      book_now: "Book now",
   
      contact_title: "Contact",
      contact_name: "Name",
      contact_email: "Email",
      contact_message: "Message",
      contact_send: "Send"
    }
  };
   
  // Function to apply translations
  function applyTranslations(lang) {
    document.querySelectorAll("[data-translate]").forEach(el => {
      const key = el.getAttribute("data-translate");
      if (translations[lang] && translations[lang][key]) {
        el.innerText = translations[lang][key];
      }
    });
  }
   
  // Language switcher (works if dropdown exists on page)
  const langSelect = document.getElementById("languageSwitcher");
  if (langSelect) {
    langSelect.addEventListener("change", function() {
      applyTranslations(this.value);
      localStorage.setItem("language", this.value); // save choice
    });
  }
   
  // Load saved language on page load
  document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("language") || "nl";
    if (langSelect) langSelect.value = savedLang;
    applyTranslations(savedLang);
  });