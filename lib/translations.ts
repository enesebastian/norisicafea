export const translations = {
  en: {
    // Navigation
    navAbout: "About",
    navMenu: "Menu",
    navCheckUsOn: "Check us on",
    navHowItAll: "How it all started...",
    navWhereTo: "Where to find us",
    navTakeHome: "Take home",
    navLeaveReview: "Leave a review",

    // HeroImage
    heroTitle: "Enjoy our delicious coffee",
    heroHeader: "Discover our selection of espresso, cappuccino, and more.",
    heroMenu: "View Menu",

    // AboutUs
    aboutHowItAll: "How it all",
    aboutStarted: "started",
    aboutDescription: "Our story began with a passion for coffee and a dream to create a cozy space where everyone feels at home.",

    // FindUs
    findUsTitle: "Where can you find us?",
    findUsDescription: "You can find us right in the heart of the city — stop by, grab a cup, and enjoy the atmosphere.",

    // Reservation
    resTitle: "Make a reservation!",
    resDescription: "Click the button to make a reservation. Please make sure to choose the date that suits you.",
    resReserveButton: "Reserve",
    resBackTitle: "Reservations are available",
    resBackNameLabel: "Your name",
    resBackEmailLabel: "Your email",
    resBackDateButton: "Pick a reservation date",
    resBackBoxLabel: "Anything extra",
    resBackSendButton: "Send the reservation",

    // FollowUsOn
    followUsOnHeader: "Follow us on",
    followUsOnViewPost: "View our latest post",
    followUsOnReview: "Leave us a review",

    // Menu
    menuHeaderTitle: "In-house Menu",
    menuHeaderSearchTitle: "Search menu",
    menuHeaderSearchLabel: "What are you looking for?",
    menuTVA: "Prices include VAT - last updated",
    menuNoItems: "No items match your search.",
  },

  // 🇷🇴 Romanian
  ro: {
    // Navigation
    navAbout: "Despre noi",
    navMenu: "Meniu",
    navCheckUsOn: "Găsește-ne pe",
    navHowItAll: "Cum a început totul...",
    navWhereTo: "Unde ne poți găsi",
    navTakeHome: "Pentru acasă",
    navLeaveReview: "Lasă o recenzie",

    // HeroImage
    heroTitle: "Savurează cafeaua noastră delicioasă",
    heroHeader: "Descoperă selecția noastră de espresso, cappuccino și multe altele.",
    heroMenu: "Vezi meniul",

    // AboutUs
    aboutHowItAll: "Cum a început",
    aboutStarted: "povestea",
    aboutDescription: "Povestea noastră a început din pasiunea pentru cafea și dorința de a crea un loc primitor pentru toți iubitorii de gust autentic.",

    // FindUs
    findUsTitle: "Unde ne poți găsi?",
    findUsDescription: "Ne găsești chiar în inima orașului — vino, ia o cafea și bucură-te de atmosferă.",

    // Reservation
    resTitle: "Fă o rezervare!",
    resDescription: "Apasă pe buton pentru a face o rezervare. Te rugăm să alegi data care ți se potrivește cel mai bine.",
    resReserveButton: "Rezervă",
    resBackTitle: "Rezervările sunt disponibile",
    resBackNameLabel: "Numele tău",
    resBackEmailLabel: "Adresa ta de email",
    resBackDateButton: "Alege o dată",
    resBackBoxLabel: "Detalii suplimentare",
    resBackSendButton: "Trimite rezervarea",

    // FollowUsOn
    followUsOnHeader: "Urmărește-ne pe",
    followUsOnViewPost: "Vezi cea mai recentă postare",
    followUsOnReview: "Lasă-ne o recenzie",

    // Menu
    menuHeaderTitle: "Meniul nostru",
    menuHeaderSearchTitle: "Caută în meniu",
    menuHeaderSearchLabel: "Ce dorești să cauți?",
    menuTVA: "Prețurile includ TVA - ultima actualizare",
    menuNoItems: "Niciun produs nu corespunde căutării.",
  },

  // 🇫🇷 French
  fr: {
    // Navigation
    navAbout: "À propos",
    navMenu: "Menu",
    navCheckUsOn: "Retrouvez-nous sur",
    navHowItAll: "Comment tout a commencé...",
    navWhereTo: "Où nous trouver",
    navTakeHome: "À emporter",
    navLeaveReview: "Laissez un avis",

    // HeroImage
    heroTitle: "Savourez notre délicieux café",
    heroHeader: "Découvrez notre sélection d’espresso, de cappuccino et bien plus encore.",
    heroMenu: "Voir le menu",

    // AboutUs
    aboutHowItAll: "Comment tout a",
    aboutStarted: "commencé",
    aboutDescription: "Notre histoire a commencé avec une passion pour le café et le rêve de créer un lieu chaleureux où chacun se sent chez soi.",

    // FindUs
    findUsTitle: "Où pouvez-vous nous trouver ?",
    findUsDescription: "Nous sommes situés au cœur de la ville — venez prendre un café et profitez de l’atmosphère.",

    // Reservation
    resTitle: "Faites une réservation !",
    resDescription: "Cliquez sur le bouton pour réserver. Choisissez la date qui vous convient le mieux.",
    resReserveButton: "Réserver",
    resBackTitle: "Les réservations sont disponibles",
    resBackNameLabel: "Votre nom",
    resBackEmailLabel: "Votre e-mail",
    resBackDateButton: "Choisir une date",
    resBackBoxLabel: "Autres détails",
    resBackSendButton: "Envoyer la réservation",

    // FollowUsOn
    followUsOnHeader: "Suivez-nous sur",
    followUsOnViewPost: "Voir notre dernière publication",
    followUsOnReview: "Laissez-nous un avis",

    // Menu
    menuHeaderTitle: "Menu sur place",
    menuHeaderSearchTitle: "Rechercher dans le menu",
    menuHeaderSearchLabel: "Que recherchez-vous ?",
    menuTVA: "Les prix incluent la TVA - dernière mise à jour",
    menuNoItems: "Aucun élément ne correspond à votre recherche.",
  },
};

export type TranslationKey = keyof typeof translations.en;
export type Language = keyof typeof translations;

export function getTranslation(language: string) {
  return translations[language as Language] || translations.en;
}

export function t(language: string, key: TranslationKey): string {
  const lang = language as Language;
  return translations[lang]?.[key] || translations.en[key] || key;
}
