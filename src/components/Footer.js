import React from "react";
import Dropdown from "./Dropdown";

const Footer = () => {
  let product = [
    {
      name: "Nouveaux Produits",
      link: "https://jpcapsules.fr/nouveaux-produits",
    },
  ];

  let society = [
    {
      name: "Conditions générales",
      link: "https://jpcapsules.fr/content/3-conditions-generales",
    },
    {
      name: "Paiement sécurisé",
      link: "https://jpcapsules.fr/content/5-paiement-securise",
    },
    {
      name: "Livraison",
      link: "https://jpcapsules.fr/content/1-livraison",
    },
    {
      name: "Contactez-nous",
      link: "https://jpcapsules.fr/nous-contacter",
    },
  ];

  let account = [
    {
      name: "Informations personnelles",
      link: "https://jpcapsules.fr/connexion?back=identity",
    },
    {
      name: "Commandes",
      link: "https://jpcapsules.fr/connexion?back=history",
    },
    {
      name: "Avoirs",
      link: "https://jpcapsules.fr/connexion?back=order-slip",
    },
    {
      name: "Adresses",
      link: "https://jpcapsules.fr/connexion?back=addresses",
    },
  ];

  let contact = [
    {
      img: "./send.png",
      alt: "icone pour envoyer un mail",
      name: "mail: jpmiclo49@gmail.com",
      link: "mailto:jpmiclo49@gmail.com",
    },
    {
      img: "./phone.png",
      alt: "icone pour telephoner à jpcapules",
      name: "Téléphone: 06 79 08 54 88",
      link: "./",
    },
  ];

  return (
    <footer>
      <div className="borderLine"></div>
      <div className="footer">
        <Dropdown name="PRODUITS" list={product} />
        <Dropdown name="SOCIETE" list={society} />
        <Dropdown name="COMPTE" list={account} />
        <Dropdown name="CONTACT" list={contact} />
      </div>
      <div className="border"></div>
      <div className="developpeurWeb">
        <div>
          <p>Site e-commerce réalisé par AURORE CREATION WEB</p>
          <a href="https://aurorecreationweb.fr">www.aurorecreationweb.fr</a>
        </div>
        <img
          src="./paiement.png"
          alt="moyens de paiement acceptés sur jpcapsules.fr"
        ></img>
      </div>
    </footer>
  );
};

export default Footer;
