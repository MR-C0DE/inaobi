import React from 'react';
import styles from './TermsOfUse.module.css';

const PrivacyNotice = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Avis de Confidentialité</h1>
            <p>
                Cet Avis de Confidentialité explique comment la Plateforme de Participation Citoyenne (ci-après dénommée "nous", "notre" ou "nos") collecte, utilise et protège vos informations personnelles lorsque vous utilisez notre site web [insérer le nom de votre plateforme]. En utilisant la Plateforme, vous consentez à la collecte et à l'utilisation de vos informations personnelles conformément à cet Avis de Confidentialité.
            </p>
            <h2>1. Informations Personnelles Collectées</h2>
            <p>1.1. Lorsque vous utilisez notre Plateforme, nous pouvons collecter des informations personnelles vous concernant, telles que votre nom, votre adresse e-mail, votre adresse IP et d'autres informations que vous choisissez de nous fournir.</p>
            <h2>2. Utilisation des Informations Personnelles</h2>
            <p>2.1. Nous utilisons les informations personnelles que nous collectons pour fournir, maintenir et améliorer notre Plateforme, répondre à vos demandes, communiquer avec vous et personnaliser votre expérience utilisateur.</p>
            <p>2.2. Nous pouvons également utiliser vos informations personnelles pour vous envoyer des informations promotionnelles sur nos produits et services, sous réserve de votre consentement préalable.</p>
            <h2>3. Protection des Informations Personnelles</h2>
            <p>3.1. Nous mettons en place des mesures de sécurité appropriées pour protéger vos informations personnelles contre tout accès non autorisé, toute divulgation, toute altération ou toute destruction.</p>
            <h2>4. Partage des Informations Personnelles</h2>
            <p>4.1. Nous ne partageons pas vos informations personnelles avec des tiers, sauf dans les cas suivants :</p>
            <ul>
                <li>lorsque cela est nécessaire pour fournir nos services ou répondre à vos demandes ;</li>
                <li>lorsque cela est exigé par la loi ou par une autorité gouvernementale compétente.</li>
            </ul>
            <h2>5. Cookies</h2>
            <p>5.1. Nous utilisons des cookies et des technologies similaires pour collecter des informations sur votre utilisation de la Plateforme et pour améliorer votre expérience utilisateur. Vous pouvez configurer votre navigateur pour refuser tous les cookies ou pour vous alerter lorsque des cookies sont envoyés.</p>
            <h2>6. Liens Vers des Sites Tiers</h2>
            <p>6.1. Notre Plateforme peut contenir des liens vers des sites web tiers. Nous ne sommes pas responsables des pratiques de confidentialité ou du contenu de ces sites web tiers. Nous vous encourageons à lire les politiques de confidentialité de ces sites web tiers avant de fournir vos informations personnelles.</p>
            <h2>7. Droits des Utilisateurs</h2>
            <p>7.1. Vous avez le droit d'accéder, de corriger et de supprimer vos informations personnelles. Si vous souhaitez exercer ces droits ou si vous avez des questions sur notre utilisation de vos informations personnelles, veuillez nous contacter à [insérer une adresse e-mail de contact].</p>
            <h2>8. Modifications de cet Avis de Confidentialité</h2>
            <p>8.1. Nous nous réservons le droit de modifier cet Avis de Confidentialité à tout moment et sans préavis en publiant les modifications sur la Plateforme. Votre utilisation continue de la Plateforme après de telles modifications constitue votre acceptation de l'Avis de Confidentialité modifié.</p>
            <p>En utilisant notre Plateforme, vous consentez à la collecte, à l'utilisation et à la divulgation de vos informations personnelles conformément à cet Avis de Confidentialité.</p>
            <p className={styles.update}>Dernière mise à jour : Jeudi le 09/05/2024</p>
        </div>
    );
};

export default PrivacyNotice;
