// Project data avec informations détaillées
    const projects = [
      {
        title: "Agenda interactif",
        description: "Création d'une application permettant de faciliter l'organisation du planning de l'utilisateur. Cette application propose une interface intuitive pour la gestion des tâches quotidiennes et des événements importants.",
        status: "completed",
        statusText: "Terminé",
        targets: ["all", "user", "check"],
        details: "Ce projet ambitieux vise à créer une solution complète de gestion du temps : l'application inclut des fonctionnalités diverses et variées comme une interface adaptative et l'ajout d'évènements personnalisables répartis en plusieurs catégories, afin de satisfaire les besoins de l'utilisateur.",
        downloadApk: "./Fichiers/interactive_agenda_1.1.1.apk",
        icon: "fas fa-calendar-alt",
        tech: "Flutter, Dart",
        hasMultipleVersions: false,
        images: [
        {
          src: "./Images/Agenda/Accueil.jpg",
          alt: "Page d'accueil"
        },
        {
          src: "./Images/Agenda/Evènement.jpg",
          alt: "Ajout d'un événement"
        },
        {
          src: "./Images/Agenda/Vacances.jpg",
          alt: "Gestion des vacances"
        },
        {
          src: "./Images/Agenda/Paramètres.jpg",
          alt: "Paramètres"
        }
        ],
        currentVersion: "1.1.1",
        versionDetails: "Possibilité de modifier un évènement déjà créé",
        nextVersion: "1.2.0",
        nextVersionFeatures: "Ajout d'un système de priorisation d'évènements"
      },
      {
        title: "Allier Tests",
        description: "Développement d'une solution complète de création et de passation de questionnaires. Le système comprend une interface web développée en PHP permettant l'export des données au format XML, ainsi qu'une application desktop Windows Forms générée dynamiquement pour la passation des tests.",
        status: "completed",
        statusText: "Terminé",
        targets: ["all", "graduate", "check"],
        details: "Ce projet académique combine développement web et desktop pour la gestion complète du cycle de vie des questionnaires. L'architecture modulaire permet la création flexible de tests via l'interface PHP, l'exportation standardisée des données XML, et la génération automatique d'interfaces de passation adaptées. Le système garantit la cohérence des données et l'interopérabilité entre les différents modules.",
        subject: "./Fichiers/ALLIER TESTS.pdf",
        download: "https://1drv.ms/f/s!AklTLE0n1rh5k4JZNGRKh3DZYcidYQ?e=GlScPy",
        icon: "fas fa-clipboard-list",
        tech: "PHP, XML, WinForms"
      },
      {
        title: "Application de prévention",
        description: "Développement d'une application mobile de sécurité publique destinée à guider les gendarmes dans les procédures d'urgence en cas de découverte d'explosifs. L'application intègre des protocoles de sécurité standardisés, des contacts d'urgence et une interface guidée pour les situations critiques.",
        status: "progress",
        statusText: "En pause",
        targets: ["all", "tie", "pause"],
        details: "Cette application stratégique est actuellement en pause ; elle est conçue en collaboration avec les autorités compétentes. Le système intègre des fonctionnalités de localisation pour faciliter l'intervention des équipes spécialisées, des protocoles adaptatifs selon le type de menace détectée, et un système de transfert d'informations. Le projet suit un processus de validation rigoureux incluant plusieurs phases de tests avec les services de sécurité.",
        icon: "fa-solid fa-bomb",
        tech: "Xamarin.Forms"
      },
      {
        title: "Banque de films",
        description: "Conception et développement d'une application mobile de découverte cinématographique utilisant l'intégration d'API REST. La solution permet aux utilisateurs de rechercher, consulter et explorer une base de données complète de films avec des fonctionnalités de recherche avancée.",
        status: "completed",
        statusText: "Terminé",
        targets: ["all", "graduate", "check"],
        details: "Ce projet académique, prenant la forme d'une application multimédia, exploite l'API The Movie Database (TMDB) pour offrir une expérience de découverte cinématographique enrichie. L'architecture intègre des fonctionnalités de recherche multicritères, la consultation détaillée des caractéristiques techniques et artistiques des œuvres, ainsi que la visualisation des bandes-annonces.",
        subject: "./Fichiers/AP Banque de films.pdf",
        icon: "fas fa-film",
        tech: "Xamarin.Forms, API REST",
        images: [
        {
          src: "./Images/Films/Accueil.jpg",
          alt: "Page d'accueil"
        },
        {
          src: "./Images/Films/Recherche.jpg",
          alt: "Recherche des films"
        },
        {
          src: "./Images/Films/Fiche.jpg",
          alt: "Consultation d'un film"
        }
        ],
      },
      {
        title: "Cartes Grises",
        description: "Développement d'une application web dédiée à la gestion centralisée des cartes grises des véhicules d'entreprise. Le système assure le suivi complet des immatriculations, des modèles de véhicules et de leurs propriétaires.",
        status: "completed",
        statusText: "Terminé",
        targets: ["all", "graduate", "check"],
        details: "Ce projet académique vise à concevoir une solution robuste afin d'optimiser la gestion administrative du parc automobile d'une entreprise. Le système centralise toutes les informations des véhicules dans une interface unifiée, permettant le suivi en temps réel des cartes grises et l'ajout de nouvelles données. L'architecture garantit la sécurité des données sensibles et la conformité réglementaire.",
        subject: "./Fichiers/AP Cartes Grises.pdf",
        /*pictures: "https://1drv.ms/f/s!AklTLE0n1rh5h9RRGWc1f22c2_cfcQ?e=RO1a3S",*/
        icon: "fas fa-car",
        tech: "PHP, MySQL",
        images: [
          {
            src: "./Images/Cartes Grises/Liste des modèles.png",
            alt: "Affichage de tous les modèles"
          },
          {
            src: "./Images/Cartes Grises/Liste des propriétaires.png", 
            alt: "Affichage de tous les propriétaires"
          },
          {
            src: "./Images/Cartes Grises/Liste des véhicules.png",
            alt: "Affichage de tous les véhicules"
          },
          {
            src: "./Images/Cartes Grises/Recherche d'un modèle.png",
            alt: "Rechercher un modèle"
          },
          {
            src: "./Images/Cartes Grises/Ajout d'un modèle (Partie 1).png",
            alt: "Ajouter un modèle 1"
          },
          {
            src: "./Images/Cartes Grises/Ajout d'un modèle (Partie 2).png", 
            alt: "Ajouter un modèle 2"
          },
          {
            src: "./Images/Cartes Grises/Ajout d'un propriétaire (Partie 1).png",
            alt: "Ajouter un propriétaire 1"
          },
          {
            src: "./Images/Cartes Grises/Ajout d'un propriétaire (Partie 2).png",
            alt: "Ajouter un propriétaire 2"
          },
          {
            src: "./Images/Cartes Grises/Ajout d'un véhicule (Partie 1).png",
            alt: "Ajouter un véhicule 1"
          },
          {
            src: "./Images/Cartes Grises/Ajout d'un véhicule (Partie 2).png", 
            alt: "Ajouter un véhicule 2"
          },
          {
            src: "./Images/Cartes Grises/Ajout d'un véhicule (Partie 3).png", 
            alt: "Ajouter un véhicule 3"
          },
          {
            src: "./Images/Cartes Grises/Ajout d'un véhicule (Partie 4).png", 
            alt: "Ajouter un véhicule 4"
          }
        ]
      },
      {
        title: "Chiffrement",
        description: "Implémentation et développement d'un algorithme de chiffrement symétrique basé sur la substitution de caractères. Le projet démontre la maîtrise des concepts cryptographiques fondamentaux à travers une solution de chiffrement/déchiffrement sécurisée et optimisée.",
        status: "completed",
        statusText: "Terminé",
        targets: ["all", "graduate", "check"],
        details: "Ce projet académique permet de développer une solution cryptographique complète basée sur l'algorithme de substitution polygrammique (chiffrement de César). L'implémentation utilise une architecture matricielle 5x5 pour l'application rigoureuse de l'algorithme, avec un système de gestion sécurisée des clés de chiffrement prédéfinies.",
        subject: "./Fichiers/AP Logiciel de chiffrement.pdf",
        //pictures: "https://1drv.ms/f/s!AklTLE0n1rh5h9QvIxFKgOmVlhXfIQ?e=S0JjeI",
        icon: "fas fa-lock",
        tech: "C#, Cryptographie",
        images: [
          {
            src: "./Images/Chiffrement/Dépassement.png",
            alt: "Test de dépassement"
          },
          {
            src: "./Images/Chiffrement/RetoucheChaîne.png", 
            alt: "Retoucher la chaîne"
          },
          {
            src: "./Images/Chiffrement/Traiter (Partie 1).png",
            alt: "Traiter 1"
          },
          {
            src: "./Images/Chiffrement/Traiter (Partie 2).png",
            alt: "Traiter 2"
          },
          {
            src: "./Images/Chiffrement/Traiter (Partie 3).png",
            alt: "Traiter 3"
          },
          {
            src: "./Images/Chiffrement/Traiter (Partie 4).png",
            alt: "Traiter 4"
          },
          {
            src: "./Images/Chiffrement/Traiter (Partie 5).png",
            alt: "Traiter 5"
          }
        ]
      },
      {
        title: "Encryptage AES",
        description: "Développement avancé d'une solution de chiffrement haute sécurité utilisant l'algorithme Rijndael (AES). Le projet inclut l'implémentation complète des méthodes d'encryption et de décryption, ainsi que la gestion optimisée des opérations de lecture/écriture binaire.",
        status: "completed",
        statusText: "Terminé",
        targets: ["all", "graduate", "check"],
        details: "Ce projet académique représente une implémentation technique approfondie de l'algorithme AES-256 avec une visualisation complète de toutes les étapes intermédiaires du processus cryptographique. Le projet démontre une expertise avancée des mécanismes de chiffrement moderne, intégrant plusieurs niveaux de contrôles d'intégrité et de validation des données, afin de comprendre les standards de sécurité industriels.",
        pictures: "https://1drv.ms/f/s!AklTLE0n1rh5jtgwjsOJ8M5uzR-cww?e=bMD0ox",
        icon: "fas fa-key",
        tech: "C#, AES-256, Rijndael"
      },
      {
        title: "Evaluation de gaz",
        description: "Conception et réalisation d'un système embarqué IoT utilisant la plateforme Arduino pour la détection et la quantification des gaz atmosphériques. Le dispositif propose un système d'alerte visuelle par LED multicolore pour le monitoring environnemental en temps réel.",
        status: "completed",
        statusText: "Terminé",
        targets: ["all", "user", "check"],
        details: "Ce projet IoT complet intègre un capteur de gaz MQ-2 haute précision avec un système d'affichage LED RGB intelligent. La solution comprend des seuils d'alerte configurables selon les normes de sécurité environnementale, un système de monitoring série optionnel pour la surveillance continue, et une architecture extensible permettant l'intégration d'autres capteurs.",
        download: "https://github.com/EnzoBG03/GazCaption",
        icon: "fa-solid fa-smog",
        tech: "C++ (Arduino)",
        images: [
        {
          src: "./Images/Circuit - Gaz.png",
          alt: "Connectiques du projet"
        }
        ],
        hasMultipleVersions: false,
        currentVersion: "2.0",
        versionDetails: "Refonte de la connectique et restructuration du code"
        /*nextVersion: "2.1.0",
        nextVersionFeatures: "Ajout d'un écran OLED et d'un buzzer d'alerte"*/
      },
      {
        title: "Infrastructure réseau",
        description: "Conception et planification complète d'une infrastructure réseau incluant la mise en réseau de salles informatiques, l'élaboration de devis détaillés et la documentation technique. Le projet couvre l'analyse des besoins, l'architecture système et le choix des équipements.",
        status: "completed",
        statusText: "Terminé",
        targets: ["all", "graduate", "check"],
        details: "Ce projet académique portant sur une infrastructure réseau d'envergure comprend une analyse approfondie des besoins métier, la conception d'une architecture réseau scalable, et la sélection d'équipements professionnels adaptés. Ce projet inclut également des plans de câblage structuré conformes à l'architecture des salles informatiques, une documentation technique complète avec schémas réseau détaillés, et des spécifications techniques précises pour chaque équipement.",
        download: "https://1drv.ms/f/s!AklTLE0n1rh5gq0VgIs5mXivdfmUfw?e=2bEgAl",
        icon: "fas fa-network-wired",
        tech: "Réseau"
      },
      {
        title: "Musée d'art des Célestins",
        description: "Développement d'un écosystème d'applications multiplateformes (console, desktop et mobile) pour la gestion et la consultation du catalogue d'œuvres d'art d'un musée. Le système propose des fonctionnalités avancées de recherche, tri et consultation des collections artistiques.",
        status: "completed",
        statusText: "Terminé",
        targets: ["all", "graduate", "check"],
        details: "Ce projet académique représente un système de gestion complet déployé sur de multiples plateformes technologiques pour répondre aux différents besoins d'usage. L'architecture intègre des fonctionnalités de tri multicritères (prix, artiste, époque historique) et exploite plusieurs collections de données artistiques enrichie avec métadonnées complètes. Différentes interfaces utilisateur sont disponibles selon le contexte d'utilisation, de la consultation rapide mobile à la gestion administrative desktop.",
        subject: "./Fichiers/AP Musée CELESTINS.pdf",
        download: "https://1drv.ms/f/s!AklTLE0n1rh5jsN--zIViJaJV_033Q?e=ioNDo2",
        subjectTwo: "./Fichiers/AP Musée Célestins Mobile.pdf",
        icon: "fas fa-palette",
        tech: "C#, WinForms, Xamarin.Forms",
        images: [
          {
            src: "./Images/Musée/Accueil.jpg",
            alt: "Ecran d'accueil"
          },
          {
            src: "./Images/Musée/Epoques.jpg", 
            alt: "Liste des époques"
          },
          {
            src: "./Images/Musée/Artistes.jpg",
            alt: "Liste des artistes"
          },
          {
            src: "./Images/Musée/Menu.jpg",
            alt: "Résumé d'un artiste"
          },
          {
            src: "./Images/Musée/Liste.jpg",
            alt: "Liste des oeuvres"
          },
          {
            src: "./Images/Musée/Oeuvre.jpg",
            alt: "Visuel d'une oeuvre"
          },
          {
            src: "./Images/Musée/Biographie.jpg",
            alt: "Biographie d'un artiste"
          }
        ]
      },
      {
        title: "Pokédex Mobile",
        description: "Développement d'une application mobile interactive dédiée à l'univers Pokémon, exploitant l'API REST Tyradex pour la consultation complète des données des créatures. L'application propose une expérience immersive avec des fonctionnalités de recherche avancée et une interface inspirée des jeux officiels.",
        status: "completed",
        statusText: "Terminé",
        targets: ["all", "user", "check"],
        details: "Cette application Android utilise l'API Tyradex pour offrir une expérience authentique aux fans de l'univers Pokémon. Le système intègre des fonctionnalités de recherche multicritères sophistiquées alignées sur les mécaniques des jeux officiels, une interface utilisateur immersive reproduisant fidèlement l'esthétique d'un véritable Pokédex, et une architecture optimisée pour la consultation fluide de grandes quantités de données. Le projet privilégie l'expérience utilisateur et la fidélité à l'univers original.",
        download: "https://github.com/EnzoBG03/pokedex-mobile",
        downloadApk: "./Fichiers/com.apppokedex.apk",
        icon: "fas fa-dragon",
        tech: "Xamarin.Forms, Tyradex, PokéAPI",
        hasMultipleVersions: false,
        images: [
          {
            src: "./Images/Pokédex/Accueil.jpg",
            alt: "Accueil de l'application"
          },
          {
            src: "./Images/Pokédex/Nom.jpg", 
            alt: "Recherche par nom"
          },
          {
            src: "./Images/Pokédex/Pikachu.jpg",
            alt: "Fiche de Pikachu"
          },
          {
            src: "./Images/Pokédex/Dracaufeu.jpg",
            alt: "Fiche de Dracaufeu"
          }
        ],
        currentVersion: "1.2.0",
        versionDetails: "Ajout des cris et instauration de thèmes spéciaux"
        /*nextVersion: "2.0.0",
        nextVersionFeatures: "Interface graphique Avalonia",
        isBeingUpdated: true,
        updateDetails: "Remplacement de Xamarin.Forms par Avalonia UI"*/
      },
      {
        title: "Poker",
        description: "Développement d'un jeu de poker complet en programmation procédurale, intégrant l'ensemble des règles officielles et une interface graphique professionnelle. Le projet démontre la maîtrise des algorithmes de jeu et de l'interface utilisateur interactive.",
        status: "completed",
        statusText: "Terminé",
        targets: ["all", "graduate", "check"],
        details: "Ce projet académique constitue une implémentation complète d'un jeu de poker professionnel respectant scrupuleusement les règles classiques, dotée d'une interface utilisateur immersive et d'un système de persistance des scores. L'architecture intègre des algorithmes hautement optimisés pour l'évaluation rapide et précise des combinaisons de mains, un moteur de jeu robuste gérant toutes les situations de partie, et un système de sauvegarde sécurisé. Le projet illustre l'expertise en développement de logiciels de divertissement interactifs.",
        subject: "./Fichiers/AP POKER Console.pdf",
        //pictures: "https://1drv.ms/f/s!AklTLE0n1rh5h9QS6A163AY9aQegpw?e=lsDJ8u",
        icon: "fa-solid fa-coins",
        tech: "C#, WinForms",
        images: [
          {
            src: "./Images/Poker/AffichageCarte.png",
            alt: "Afficher la carte"
          },
          {
            src: "./Images/Poker/CarteUnique.png", 
            alt: "Garantir une carte unique"
          },
          {
            src: "./Images/Poker/ChercheCombinaison (Partie 1).png",
            alt: "Calculer la combinaison 1"
          },
          {
            src: "./Images/Poker/ChercheCombinaison (Partie 2).png",
            alt: "Calculer la combinaison 2"
          },
          {
            src: "./Images/Poker/ChercheCombinaison (Partie 3).png",
            alt: "Calculer la combinaison 3"
          },
          {
            src: "./Images/Poker/ChercheCombinaison (Partie 4).png",
            alt: "Calculer la combinaison 4"
          },
          {
            src: "./Images/Poker/ChercheCombinaison (Partie 5).png",
            alt: "Calculer la combinaison 5"
          },
          {
            src: "./Images/Poker/Echange.png",
            alt: "Echanger une carte"
          },
          {
            src: "./Images/Poker/Enregistrer.png",
            alt: "Enregistrer la combinaison obtenue"
          },
          {
            src: "./Images/Poker/Résultat.png",
            alt: "Afficher le résultat"
          },
          {
            src: "./Images/Poker/Scores (Partie 1).png",
            alt: "Montrer les scores 1"
          },
          {
            src: "./Images/Poker/Scores (Partie 2).png",
            alt: "Montrer les scores 2"
          },
          {
            src: "./Images/Poker/TirageCarte.png",
            alt: "Tirer une carte"
          },
          {
            src: "./Images/Poker/TirageJeu.png",
            alt: "Tirer une combinaison complète"
          }
        ],
      },
      {
        title: "Recherche de musiques",
        description: "Développement d'une application mobile destinée à rechercher des chansons à travers une fonctionnalité d'analyse audio.",
        status: "completed",
        statusText: "Terminé",
        targets: ["all", "graduate", "check"],
        details: "Ce projet académique reprend les codes de la célèbre application Shazam, et vise à offrir une expérience utilisateur alliant pratique et technique. L'architecture de l'application a été pensée pour mettre l'accent sur la rapidité de traitement, sans pour autant négliger sa qualité.",
        icon: "fa-solid fa-music",
        tech: "React Native, C#, ASP.NET, C++",
        images: [
          {
            src: "./Images/Musique/Accueil.jpg",
            alt: "Accueil de l'application"
          },
          {
            src: "./Images/Musique/Scan.jpg",
            alt: "Lancement d'un scan"
          },
          {
            src: "./Images/Musique/Historique.jpg",
            alt: "Consultation de l'historique"
          },
          {
            src: "./Images/Musique/Fiche.jpg",
            alt: "Consultation d'une musique scannée"
          }
        ],
      },
      {
        title: "Rétrogaming",
        description: "Conception et développement d'un site web moderne dédié à la culture rétrogaming, représentant une évolution sophistiquée du projet initial 'Site Web vitrine'. La plateforme explore l'univers du jeu vidéo rétro à travers une approche éditoriale et technique avancée.",
        status: "completed",
        statusText: "Terminé",
        targets: ["all", "user", "check"],
        details: "Ce site web culturel moderne explore l'univers du rétrogaming à travers un design authentique mêlant esthétique rétro et technologies web contemporaines. L'architecture responsive intègre des animations CSS avancées pour créer une expérience utilisateur immersive et mémorable. Le contenu éditorial structure explore les origines historiques du mouvement rétrogaming, analyse les facteurs de son succès grandissant, et présente les différentes facettes de cette culture. Le projet démontre l'évolution technique et créative par rapport à la version initiale.",
        link: "https://upgraded-retrogaming.netlify.app/",
        download: "https://github.com/EnzoBG03/upgraded-retrogaming",
        icon: "fa-solid fa-ghost",
        tech: "HTML, CSS, JavaScript",
        hasMultipleVersions: false,
        images: [
          {
            src: "./Images/Rétrogaming/Accueil.png",
            alt: "Accueil du site"
          },
          {
            src: "./Images/Rétrogaming/Opinion.png",
            alt: "Découverte de mon opinion"
          }
        ],
        currentVersion: "1.0",
        versionDetails: "Version initiale",
        nextVersion: "2.0",
        nextVersionFeatures: "Migration vers React"
        /*isBeingUpdated: true,
        updateDetails: "Migration du site en utilisant React à la place du trio HTML/CSS/JavaScript"*/
      },
      {
        title: "RL Performance Calculator",
        description: "Développement d'une solution d'analyse statistique avancée dédiée au jeu Rocket League, proposant des outils de calcul de performance et de classement des joueurs. L'application exploite des métriques de jeu précises pour fournir des analyses détaillées des performances individuelles.",
        status: "completed",
        statusText: "Terminé",
        targets: ["all", "user", "check"],
        details: "Cette application d'analyse de performance complète pour Rocket League a été développée en versions graphique C#/WPF et web React pour répondre aux différents besoins d'utilisation. Le système implémente des algorithmes de calcul sophistiqués prenant en compte les métriques clés du jeu (touches de balle, actions défensives, passes décisives, buts marqués) pour générer des scores de performance précis et des classements comparatifs.",
        downloadCsharp: "https://github.com/EnzoBG03/RL-Performance-Calculator-CSharp",
        linkReact: "https://rl-performance-calculator.vercel.app/",
        downloadReact: "https://github.com/EnzoBG03/RL-Performance-Calculator-React",
        icon: "fa-solid fa-gauge-high",
        tech: "C#, WPF, React",
        images: [
          {
            src: "./Images/RL/Accueil.png",
            alt: "Accueil du projet"
          },
          {
            src: "./Images/RL/Saisie.png",
            alt: "Fenêtre de saisie"
          }
        ],
        hasMultipleVersions: true,
        versions: {
          csharp: {
            name: "Version C#",
            currentVersion: "2.2.0",
            versionDetails: "Remplacement de la version console par une interface graphique WPF"
            /*nextVersion: "3.0",
            nextVersionFeatures: "Interface graphique Avalonia"*/
          },
          react: {
            name: "Version React",
            currentVersion: "1.2.1",
            versionDetails: "Mises à jour graphiques et visualisation des joueurs saisis en détail"
            /*nextVersion: "2.0",
            nextVersionFeatures: "Refonte graphique du site"*/
          }
        }
        /*isBeingUpdated: true,
        updateDetails: "Version WPF en cours de remplacement par une interface graphique Avalonia, mises à jour graphiques en cours d'instauration sur la version React"*/
      },
      {
        title: "Site Web vitrine",
        description: "Développement d'un site web vitrine professionnel utilisant les technologies front-end fondamentales HTML, CSS et JavaScript. Ce projet inaugural en développement web met l'accent sur les bonnes pratiques de développement, l'accessibilité et l'optimisation pour les moteurs de recherche.",
        status: "completed",
        statusText: "Terminé",
        targets: ["all", "graduate", "check"],
        details: "Ce projet académique, fondateur en développement web, démontre la maîtrise complète des technologies front-end essentielles et l'application rigoureuse des standards du web moderne. La réalisation intègre un système de styles CSS personnalisés sophistiqués, une optimisation SEO approfondie pour améliorer la visibilité, et une architecture de code source entièrement documentée et structurée selon les meilleures pratiques. Ce projet constitue la base technique et méthodologique pour les développements web ultérieurs plus complexes.",
        link: "https://retrogamingbyenzo.netlify.app/",
        download: "https://github.com/EnzoBG03/retrogamingsio",
        icon: "fas fa-globe",
        tech: "HTML, CSS, JavaScript"
      },
      {
        title: "Vichy Papeterie",
        description: "Développement d'une solution logicielle complète de gestion commerciale et de facturation. Le système propose une architecture flexible supportant les bases de données MySQL et les services web REST, avec génération automatisée des documents commerciaux.",
        status: "completed",
        statusText: "Terminé",
        targets: ["all", "graduate", "check"],
        details: "Ce projet académique, prenant la forme d'une solution professionnelle de gestion commerciale intégrale dotée d'une architecture modulaire haute performance, supporte à la fois les bases de données MySQL traditionnelles et les services web REST modernes. L'écosystème fonctionnel comprend un module complet de gestion client/fournisseur, un système de catalogue produits dynamique, et un générateur automatisé de factures respectant les normes comptables. L'interface ergonomique privilégie la lisibilité des données et l'efficacité opérationnelle, permettant une adoption rapide par les équipes métier.",
        subject: "./Fichiers/AP Vichy Papeterie.pdf",
        download: "https://1drv.ms/f/s!AklTLE0n1rh5lItwPDGe-_CVR-pieQ?e=3jlULf",
        icon: "fas fa-receipt",
        tech: "C#, MySQL, API REST, WPF"
      },
      {
        title: "WeatherBoy",
        description: "Conception et réalisation d'un système embarqué permettant de donner en temps réel le taux d'humidité et la température dans une pièce. Le projet intègre un capteur DHT11 connecté à une carte Arduino, avec une interface de visualisation pour une consultation facile des données.",
        status: "progress",
        statusText: "En pause",
        targets: ["all", "user", "pause"],
        details: "Ce projet IoT intègre un capteur de température et d'humidité DHT11 avec une carte Arduino Uno pour fournir des données en temps réel. Le système est conçu pour être facilement consultable via une interface de visualisation simple, offrant une solution pratique pour le monitoring de l'environnement intérieur.",
        icon: "fas fa-temperature-half",
        tech: "C++ (Arduino)"
      },
      {
        title: "ZZ Party",
        description: "Développement d'un jeu de plateau multijoueur dans l'univers de l'ISIMA. Le jeu propose un style rétro-moderne et une expérience de jeu immersive, avec des mécaniques de jeu classiques.",
        status: "progress",
        statusText: "En pause",
        targets: ["all", "user", "pause"],
        details: "Ce jeu de plateau intègre un système de jeu multijoueur, avec des mécaniques de jeu classiques tels que le lancer de dés, les min-jeux et les plateaux réservant de nombreuses surprises. Le jeu propose également une interface de jeu immersive, avec des animations spéciales pour les joueurs.",
        icon: "fas fa-dice-five",
        tech: "Unreal Engine"
      }
    ];

    class ImageGallery {
  constructor(images) {
    this.images = images || [];
    this.currentIndex = 0;
    this.elements = {
      section: document.getElementById('modal-gallery-section'),
      mainImage: document.getElementById('gallery-main-image'),
      thumbnails: document.getElementById('gallery-thumbnails'),
      counter: document.getElementById('image-counter'),
      prevBtn: document.getElementById('gallery-prev'),
      nextBtn: document.getElementById('gallery-next')
    };
    
    this.initEventListeners();
  }
  
  initEventListeners() {
    this.elements.prevBtn.addEventListener('click', () => this.previousImage());
    this.elements.nextBtn.addEventListener('click', () => this.nextImage());
    
    // Navigation au clavier
    document.addEventListener('keydown', (e) => {
      if (this.elements.section.style.display !== 'none') {
        if (e.key === 'ArrowLeft') this.previousImage();
        if (e.key === 'ArrowRight') this.nextImage();
      }
    });
  }
  
  load(images) {
    this.images = images || [];
    this.currentIndex = 0;
    
    if (this.images.length === 0) {
      this.elements.section.style.display = 'none';
      return;
    }
    
    this.elements.section.style.display = 'block';
    this.renderThumbnails();
    this.showImage(0);
  }
  
  renderThumbnails() {
    this.elements.thumbnails.innerHTML = '';
    
    this.images.forEach((image, index) => {
      const thumbnail = document.createElement('img');
      thumbnail.src = image.src;
      thumbnail.alt = image.alt || `Image ${index + 1}`;
      thumbnail.className = 'thumbnail';
      thumbnail.addEventListener('click', () => this.showImage(index));
      
      this.elements.thumbnails.appendChild(thumbnail);
    });
  }
  
  showImage(index) {
    if (index < 0 || index >= this.images.length) return;
    
    this.currentIndex = index;
    const image = this.images[index];
    
    this.elements.mainImage.src = image.src;
    this.elements.mainImage.alt = image.alt || `Image ${index + 1}`;
    this.elements.counter.textContent = `${index + 1} / ${this.images.length}`;
    
    // Mettre à jour les miniatures actives
    const thumbnails = this.elements.thumbnails.querySelectorAll('.thumbnail');
    thumbnails.forEach((thumb, i) => {
      thumb.classList.toggle('active', i === index);
    });
    
    // Gérer la visibilité des boutons de navigation
    this.elements.prevBtn.style.display = this.images.length > 1 ? 'flex' : 'none';
    this.elements.nextBtn.style.display = this.images.length > 1 ? 'flex' : 'none';
  }
  
  previousImage() {
    const newIndex = this.currentIndex > 0 ? this.currentIndex - 1 : this.images.length - 1;
    this.showImage(newIndex);
  }
  
  nextImage() {
    const newIndex = this.currentIndex < this.images.length - 1 ? this.currentIndex + 1 : 0;
    this.showImage(newIndex);
  }
}

    // Particles Animation
    function createParticles() {
      const particlesContainer = document.getElementById('particles');
      const particleCount = 50;

      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        particlesContainer.appendChild(particle);
      }
    }

    // Menu hamburger functionality
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!menuToggle.contains(e.target) && !navMenu.contains(e.target)) {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
      }
    });

    // Create project card
    /*function createProjectCard(project) {
      const statusClass = `status-${project.status}`;
      
      return `
        <div class="project-card" data-target="${project.targets.join(',')}" data-project='${JSON.stringify(project).replace(/'/g, "&apos;")}'>
          <div class="project-header">
            <div class="project-icon">
              <i class="${project.icon}"></i>
            </div>
            <div class="project-info">
              <h3 class="project-title">${project.title}</h3>
              <div class="project-description">${project.description}</div>
            </div>
          </div>
          <div class="project-footer">
            <div class="project-status ${statusClass}">
              ${project.statusText}
            </div>
            <div class="project-tech">
              ${project.tech}
            </div>
          </div>
        </div>
      `;
    }*/
   function createProjectCard(project) {
  let statusClass, statusText, targets;
  
  if (project.isBeingUpdated) {
    statusClass = 'status-updating';
    statusText = 'En amélioration';
    targets = [...project.targets, 'update'].join(',');
  } else {
    statusClass = `status-${project.status}`;
    statusText = project.statusText;
    targets = project.targets.join(',');
  }
  
  return `
    <div class="project-card" data-target="${targets}" data-project='${JSON.stringify(project).replace(/'/g, "&apos;")}'>
      <div class="project-header">
        <div class="project-icon">
          <i class="${project.icon}"></i>
        </div>
        <div class="project-info">
          <h3 class="project-title">${project.title}</h3>
          <div class="project-description">${project.description}</div>
        </div>
      </div>
      <div class="project-footer">
        <div class="project-status ${statusClass}">
          ${statusText}
        </div>
        <div class="project-tech">
          ${project.tech}
        </div>
      </div>
    </div>
  `;
}

    // Initialize projects
    function initProjects() {
      const grid = document.getElementById('projectsGrid');
      const projectCards = projects.map(createProjectCard).join('');
      grid.innerHTML = projectCards;
      
      // Update stats
      updateStats();
    }

    // Update statistics
    function updateStats() {
      const total = projects.length;
      const completed = projects.filter(p => p.status === 'completed').length;
      const technologies = new Set();
      
      projects.forEach(p => {
        if (p.tech) {
          p.tech.split(', ').forEach(tech => technologies.add(tech));
        }
      });
      
      document.getElementById('totalProjects').textContent = total;
      document.getElementById('completedProjects').textContent = completed;
      document.getElementById('technologiesUsed').textContent = technologies.size/* + '+'*/;
    }

    // Filter functionality
    function initFilters() {
      const filterButtons = document.querySelectorAll('.filter-btn');
      const projectCards = document.querySelectorAll('.project-card');

      filterButtons.forEach(button => {
        button.addEventListener('click', () => {
          // Update active button
          filterButtons.forEach(btn => btn.classList.remove('active'));
          button.classList.add('active');

          const targetFilter = button.getAttribute('data-target');

          // Filter projects
          document.querySelectorAll('.project-card').forEach(card => {
            const cardTargets = card.getAttribute('data-target').split(',');
            if (targetFilter === 'all' || cardTargets.includes(targetFilter)) {
              card.style.display = 'flex';
            } else {
              card.style.display = 'none';
            }
          });

          // Update stats based on visible projects
          updateFilteredStats(targetFilter);
        });
      });
    }

    // Update stats for filtered view
    function updateFilteredStats(filter) {
      let filteredProjects = projects;
      
      if (filter !== 'all') {
        filteredProjects = projects.filter(p => p.targets.includes(filter));
      }
      
      const total = filteredProjects.length;
      const completed = filteredProjects.filter(p => p.status === 'completed').length;
      const technologies = new Set();
      
      filteredProjects.forEach(p => {
        if (p.tech) {
          p.tech.split(', ').forEach(tech => technologies.add(tech));
        }
      });
      
      document.getElementById('totalProjects').textContent = total;
      document.getElementById('completedProjects').textContent = completed;
      document.getElementById('technologiesUsed').textContent = technologies.size/* + (technologies.size > 0 ? '+' : '')*/;
    }

    // Search functionality
    function initSearch() {
      const searchInput = document.getElementById('searchInput');
      
      searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        
        document.querySelectorAll('.project-card').forEach(card => {
          const projectData = JSON.parse(card.getAttribute('data-project').replace(/&apos;/g, "'"));
          const searchableText = `${projectData.title} ${projectData.description} ${projectData.tech || ''} ${projectData.details || ''}`.toLowerCase();
          
          if (searchTerm === '' || searchableText.includes(searchTerm)) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
        
        // Reset filter buttons when searching
        if (searchTerm) {
          document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
          document.querySelector('.filter-btn[data-target="all"]').classList.add('active');
        }
      });
    }

    // Fonction pour générer le contenu d'une version - VERSION UNIFIÉE
function generateVersionContent(versionData) {
  const hasNextVersion = versionData.nextVersion && versionData.nextVersionFeatures;
  const nextVersionClass = hasNextVersion ? '' : 'no-update';
  const nextVersionNumber = versionData.nextVersion || 'Aucune';
  const nextVersionFeatures = versionData.nextVersionFeatures || 'Aucune mise à jour majeure prévue pour le moment : cette version est considérée comme stable.';
  
  return `
    <div class="version-details-card">
      <div class="version-current">
        <div class="version-header">
          <h4>Version actuelle</h4>
          <span class="version-number">${versionData.currentVersion}</span>
        </div>
        <p class="version-description">${versionData.versionDetails}</p>
      </div>
      
      <div class="version-divider">
        <i class="fas fa-arrow-right"></i>
      </div>
      
      <div class="version-next ${nextVersionClass}">
        <div class="version-header">
          <h4>Prochaine version</h4>
          <span class="version-number next ${nextVersionClass}">${nextVersionNumber}</span>
        </div>
        <p class="version-description ${nextVersionClass}">${nextVersionFeatures}</p>
      </div>
    </div>
  `;
}

    // Instance globale de la galerie
const imageGallery = new ImageGallery();

    // Modal functionality - VERSION COMPLÈTEMENT UNIFIÉE
function initModal() {
  const modal = document.getElementById('modal');
  const modalTitle = document.getElementById('modal-title');
  const modalTech = document.getElementById('modal-tech');
  const modalDescription = document.getElementById('modal-description');
  const modalLinks = document.getElementById('modal-links');
  const closeBtn = document.querySelector('.close');

  // Fonction pour créer un système de versions unifié
  function createUnifiedVersionSystem(projectData) {
    const versionSection = document.getElementById('modal-version-section');
    const versionContainer = document.getElementById('unified-version-container');
    const versionTabs = document.getElementById('version-tabs');
    const versionContent = document.getElementById('version-content');
    
    // Nettoyer le contenu précédent
    versionTabs.innerHTML = '';
    versionContent.innerHTML = '';
    
    let versions = {};
    
    if (projectData.hasMultipleVersions && projectData.versions) {
      // Cas des versions multiples
      versions = projectData.versions;
    } else if (projectData.currentVersion) {
      // Cas d'une version unique - créer un objet version standardisé
      versions = {
        main: {
          name: "Version principale",
          currentVersion: projectData.currentVersion,
          versionDetails: projectData.versionDetails || 'Aucune information disponible',
          nextVersion: projectData.nextVersion,
          nextVersionFeatures: projectData.nextVersionFeatures
        }
      };
    } else {
      // Aucune information de version
      return false;
    }
    
    // Créer les onglets
    Object.keys(versions).forEach((versionKey, index) => {
      const versionData = versions[versionKey];
      const tab = document.createElement('button');
      tab.className = `version-tab ${index === 0 ? 'active' : ''}`;
      tab.dataset.version = versionKey;
      
      // Déterminer l'icône selon le type de version
      let icon = 'fas fa-code';
      if (versionKey.includes('react') || versionData.name.toLowerCase().includes('react')) {
        icon = 'fab fa-react';
      } else if (versionKey.includes('csharp') || versionKey.includes('c#') || versionData.name.toLowerCase().includes('c#')) {
        icon = 'fas fa-desktop';
      } else if (versionKey.includes('mobile') || versionData.name.toLowerCase().includes('mobile')) {
        icon = 'fas fa-mobile-alt';
      } else if (versionKey.includes('web') || versionData.name.toLowerCase().includes('web')) {
        icon = 'fas fa-globe';
      } else if (versionKey === 'main') {
        icon = 'fas fa-star';
      }
      
      tab.innerHTML = `<i class="${icon}"></i> ${versionData.name}`;
      versionTabs.appendChild(tab);
      
      // Ajouter l'event listener
      tab.addEventListener('click', () => {
        // Retirer la classe active de tous les onglets
        document.querySelectorAll('.version-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        // Afficher le contenu de la version sélectionnée
        versionContent.innerHTML = generateVersionContent(versions[versionKey]);
      });
    });
    
    // Initialiser avec la première version
    const firstVersionKey = Object.keys(versions)[0];
    versionContent.innerHTML = generateVersionContent(versions[firstVersionKey]);
    
    return true;
  }

  // Fonction pour ouvrir la modal
  function openModal(projectData) {
    modalTitle.textContent = projectData.title;
    modalTech.textContent = projectData.tech;
    modalDescription.textContent = projectData.details || projectData.description;

    // Supprimer toute info de mise à jour précédente
const existingUpdate = document.querySelector('.modal-update-info');
if (existingUpdate) {
  existingUpdate.remove();
}

// Affichage des informations de mise à jour si applicable
if (projectData.isBeingUpdated && projectData.updateDetails) {
  const updateInfo = document.createElement('div');
  updateInfo.className = 'modal-update-info';
  updateInfo.innerHTML = `
    <div class="update-banner">
      <i class="fas fa-wrench"></i>
      <strong>Projet en cours d'amélioration</strong> ${projectData.updateDetails}
    </div>
  `;
  modalDescription.parentNode.insertBefore(updateInfo, modalDescription.nextSibling);
}
    
    // Charger les images dans la galerie
    imageGallery.load(projectData.images);

    // Gestion des informations de version pour les projets personnels
    const versionSection = document.getElementById('modal-version-section');
    
    if (projectData.targets && projectData.targets.includes('user')) {
      // Tenter de créer le système de versions unifié
      const hasVersions = createUnifiedVersionSystem(projectData);
      
      if (hasVersions) {
        versionSection.style.display = 'block';
      } else {
        versionSection.style.display = 'none';
      }
    } else {
      versionSection.style.display = 'none';
    }

    // Create links avec icônes
    modalLinks.innerHTML = '';
    
    const linkConfig = [
      { key: 'subject', text: 'Voir le sujet', icon: 'fas fa-file-pdf' },
      { key: 'subjectTwo', text: 'Voir le second sujet', icon: 'fas fa-file-pdf' },
      { key: 'link', text: 'Voir le projet en ligne', icon: 'fas fa-external-link-alt' },
      { key: 'linkReact', text: 'Version React', icon: 'fab fa-react' },
      { key: 'download', text: 'Télécharger les fichiers', icon: 'fas fa-download' },
      { key: 'downloadCsharp', text: 'Code C#', icon: 'fab fa-github' },
      { key: 'downloadReact', text: 'Code React', icon: 'fab fa-github' },
      { key: 'pictures', text: 'Voir les captures', icon: 'fas fa-images' },
      { key: 'downloadApk', text: 'Fichier APK', icon: 'fas fa-mobile-android-alt' }
    ];

    let hasLinks = false;
    linkConfig.forEach(config => {
      if (projectData[config.key]) {
        modalLinks.innerHTML += `
          <a href="${projectData[config.key]}" class="modal-link" target="_blank">
            <i class="${config.icon}"></i>
            ${config.text}
          </a>
        `;
        hasLinks = true;
      }
    });
    
    if (!hasLinks) {
      modalLinks.innerHTML = '<div class="modal-no-data">Aucun lien disponible pour ce projet</div>';
    }

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    // Animation d'entrée
    requestAnimationFrame(() => {
      modal.style.opacity = '1';
    });
  }

  // Fonction pour fermer la modal
  function closeModal() {
    modal.style.opacity = '0';
    setTimeout(() => {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }, 300);
  }

  // Event listener pour les cartes de projet
  document.addEventListener('click', (e) => {
    const projectCard = e.target.closest('.project-card');
    if (projectCard) {
      e.preventDefault();
      const projectDataStr = projectCard.getAttribute('data-project').replace(/&apos;/g, "'");
      const projectData = JSON.parse(projectDataStr);
      openModal(projectData);
    }
  });

  // Fermer la modal avec le bouton X
  closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    closeModal();
  });

  // Fermer la modal en cliquant en dehors
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Fermer la modal avec la touche Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'flex') {
      closeModal();
    }
  });
}

    // Header scroll effect
    function initScrollEffect() {
      window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
          header.style.background = 'rgba(15, 15, 35, 0.95)';
        } else {
          header.style.background = 'rgba(15, 15, 35, 0.8)';
        }
      });
    }

    // Initialize everything
    document.addEventListener('DOMContentLoaded', () => {
      createParticles();
      initProjects();
      initFilters();
      initSearch();
      initModal();
      initScrollEffect();
    });