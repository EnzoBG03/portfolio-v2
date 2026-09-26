export const projects =
[
      {
        title: "Agenda interactif",
        description: "Création d'une application permettant de faciliter l'organisation du planning de l'utilisateur. Cette application propose une interface intuitive pour la gestion des tâches quotidiennes et des événements importants.",
        status: "completed",
        statusText: "Terminé",
        targets: ["all", "user", "check"],
        details: "Ce projet ambitieux vise à créer une solution complète de gestion du temps : l'application inclut des fonctionnalités diverses et variées comme une interface adaptative et l'ajout d'évènements personnalisables répartis en plusieurs catégories, afin de satisfaire les besoins de l'utilisateur.",
        downloadApk: "/src/assets/Fichiers/interactive_agenda_1.1.1.apk",
        icon: "fas fa-calendar-alt",
        tech: "Flutter, Dart",
        hasMultipleVersions: false,
        images: [
        {
          src: "/src/assets/Agenda/Accueil.jpg",
          alt: "Page d'accueil"
        },
        {
          src: "/src/assets/Agenda/Evènement.jpg",
          alt: "Ajout d'un événement"
        },
        {
          src: "/src/assets/Agenda/Vacances.jpg",
          alt: "Gestion des vacances"
        },
        {
          src: "/src/assets/Agenda/Paramètres.jpg",
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
        subject: "/src/assets/Fichiers/ALLIER TESTS.pdf",
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
        subject: "/src/assets/Fichiers/AP Banque de films.pdf",
        icon: "fas fa-film",
        tech: "Xamarin.Forms, API REST",
        images: [
        {
          src: "/src/assets/Films/Accueil.jpg",
          alt: "Page d'accueil"
        },
        {
          src: "/src/assets/Films/Recherche.jpg",
          alt: "Recherche des films"
        },
        {
          src: "/src/assets/Films/Fiche.jpg",
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
        subject: "/src/assets/Fichiers/AP Cartes Grises.pdf",
        /*pictures: "https://1drv.ms/f/s!AklTLE0n1rh5h9RRGWc1f22c2_cfcQ?e=RO1a3S",*/
        icon: "fas fa-car",
        tech: "PHP, MySQL",
        images: [
          {
            src: "/src/assets/Cartes Grises/Liste des modèles.png",
            alt: "Affichage de tous les modèles"
          },
          {
            src: "/src/assets/Cartes Grises/Liste des propriétaires.png",
            alt: "Affichage de tous les propriétaires"
          },
          {
            src: "/src/assets/Cartes Grises/Liste des véhicules.png",
            alt: "Affichage de tous les véhicules"
          },
          {
            src: "/src/assets/Cartes Grises/Recherche d'un modèle.png",
            alt: "Rechercher un modèle"
          },
          {
            src: "/src/assets/Cartes Grises/Ajout d'un modèle (Partie 1).png",
            alt: "Ajouter un modèle 1"
          },
          {
            src: "/src/assets/Cartes Grises/Ajout d'un modèle (Partie 2).png",
            alt: "Ajouter un modèle 2"
          },
          {
            src: "/src/assets/Cartes Grises/Ajout d'un propriétaire (Partie 1).png",
            alt: "Ajouter un propriétaire 1"
          },
          {
            src: "/src/assets/Cartes Grises/Ajout d'un propriétaire (Partie 2).png",
            alt: "Ajouter un propriétaire 2"
          },
          {
            src: "/src/assets/Cartes Grises/Ajout d'un véhicule (Partie 1).png",
            alt: "Ajouter un véhicule 1"
          },
          {
            src: "/src/assets/Cartes Grises/Ajout d'un véhicule (Partie 2).png",
            alt: "Ajouter un véhicule 2"
          },
          {
            src: "/src/assets/Cartes Grises/Ajout d'un véhicule (Partie 3).png",
            alt: "Ajouter un véhicule 3"
          },
          {
            src: "/src/assets/Cartes Grises/Ajout d'un véhicule (Partie 4).png",
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
        subject: "/src/assets/Fichiers/AP Logiciel de chiffrement.pdf",
        //pictures: "https://1drv.ms/f/s!AklTLE0n1rh5h9QvIxFKgOmVlhXfIQ?e=S0JjeI",
        icon: "fas fa-lock",
        tech: "C#, Cryptographie",
        images: [
          {
            src: "/src/assets/Chiffrement/Dépassement.png",
            alt: "Test de dépassement"
          },
          {
            src: "/src/assets/Chiffrement/RetoucheChaîne.png",
            alt: "Retoucher la chaîne"
          },
          {
            src: "/src/assets/Chiffrement/Traiter (Partie 1).png",
            alt: "Traiter 1"
          },
          {
            src: "/src/assets/Chiffrement/Traiter (Partie 2).png",
            alt: "Traiter 2"
          },
          {
            src: "/src/assets/Chiffrement/Traiter (Partie 3).png",
            alt: "Traiter 3"
          },
          {
            src: "/src/assets/Chiffrement/Traiter (Partie 4).png",
            alt: "Traiter 4"
          },
          {
            src: "/src/assets/Chiffrement/Traiter (Partie 5).png",
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
          src: "/src/assets/Circuit - Gaz.png",
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
        title: "Musee d'art des Célestins",
        description: "Développement d'un écosystème d'applications multiplateformes (console, desktop et mobile) pour la gestion et la consultation du catalogue d'œuvres d'art d'un musée. Le système propose des fonctionnalités avancées de recherche, tri et consultation des collections artistiques.",
        status: "completed",
        statusText: "Terminé",
        targets: ["all", "graduate", "check"],
        details: "Ce projet académique représente un système de gestion complet déployé sur de multiples plateformes technologiques pour répondre aux différents besoins d'usage. L'architecture intègre des fonctionnalités de tri multicritères (prix, artiste, époque historique) et exploite plusieurs collections de données artistiques enrichie avec métadonnées complètes. Différentes interfaces utilisateur sont disponibles selon le contexte d'utilisation, de la consultation rapide mobile à la gestion administrative desktop.",
        subject: "/src/assets/Fichiers/AP Musee CELESTINS.pdf",
        download: "https://1drv.ms/f/s!AklTLE0n1rh5jsN--zIViJaJV_033Q?e=ioNDo2",
        subjectTwo: "/src/assets/Fichiers/AP Musee Célestins Mobile.pdf",
        icon: "fas fa-palette",
        tech: "C#, WinForms, Xamarin.Forms",
        images: [
          {
            src: "/src/assets/Musee/Accueil.jpg",
            alt: "Ecran d'accueil"
          },
          {
            src: "/src/assets/Musee/Epoques.jpg",
            alt: "Liste des époques"
          },
          {
            src: "/src/assets/Musee/Artistes.jpg",
            alt: "Liste des artistes"
          },
          {
            src: "/src/assets/Musee/Menu.jpg",
            alt: "Résumé d'un artiste"
          },
          {
            src: "/src/assets/Musee/Liste.jpg",
            alt: "Liste des oeuvres"
          },
          {
            src: "/src/assets/Musee/Oeuvre.jpg",
            alt: "Visuel d'une oeuvre"
          },
          {
            src: "/src/assets/Musee/Biographie.jpg",
            alt: "Biographie d'un artiste"
          }
        ]
      },
      {
        title: "Pokedex Mobile",
        description: "Développement d'une application mobile interactive dédiée à l'univers Pokémon, exploitant l'API REST Tyradex pour la consultation complète des données des créatures. L'application propose une expérience immersive avec des fonctionnalités de recherche avancée et une interface inspirée des jeux officiels.",
        status: "completed",
        statusText: "Terminé",
        targets: ["all", "user", "check"],
        details: "Cette application Android utilise l'API Tyradex pour offrir une expérience authentique aux fans de l'univers Pokémon. Le système intègre des fonctionnalités de recherche multicritères sophistiquées alignées sur les mécaniques des jeux officiels, une interface utilisateur immersive reproduisant fidèlement l'esthétique d'un véritable Pokedex, et une architecture optimisée pour la consultation fluide de grandes quantités de données. Le projet privilégie l'expérience utilisateur et la fidélité à l'univers original.",
        download: "https://github.com/EnzoBG03/pokedex-mobile",
        downloadApk: "/src/assets/Fichiers/com.apppokedex.apk",
        icon: "fas fa-dragon",
        tech: "Xamarin.Forms, Tyradex, PokéAPI",
        hasMultipleVersions: false,
        images: [
          {
            src: "/src/assets/Pokedex/Accueil.jpg",
            alt: "Accueil de l'application"
          },
          {
            src: "/src/assets/Pokedex/Nom.jpg",
            alt: "Recherche par nom"
          },
          {
            src: "/src/assets/Pokedex/Pikachu.jpg",
            alt: "Fiche de Pikachu"
          },
          {
            src: "/src/assets/Pokedex/Dracaufeu.jpg",
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
        subject: "/src/assets/Fichiers/AP POKER Console.pdf",
        //pictures: "https://1drv.ms/f/s!AklTLE0n1rh5h9QS6A163AY9aQegpw?e=lsDJ8u",
        icon: "fa-solid fa-coins",
        tech: "C#, WinForms",
        images: [
          {
            src: "/src/assets/Poker/AffichageCarte.png",
            alt: "Afficher la carte"
          },
          {
            src: "/src/assets/Poker/CarteUnique.png",
            alt: "Garantir une carte unique"
          },
          {
            src: "/src/assets/Poker/ChercheCombinaison (Partie 1).png",
            alt: "Calculer la combinaison 1"
          },
          {
            src: "/src/assets/Poker/ChercheCombinaison (Partie 2).png",
            alt: "Calculer la combinaison 2"
          },
          {
            src: "/src/assets/Poker/ChercheCombinaison (Partie 3).png",
            alt: "Calculer la combinaison 3"
          },
          {
            src: "/src/assets/Poker/ChercheCombinaison (Partie 4).png",
            alt: "Calculer la combinaison 4"
          },
          {
            src: "/src/assets/Poker/ChercheCombinaison (Partie 5).png",
            alt: "Calculer la combinaison 5"
          },
          {
            src: "/src/assets/Poker/Echange.png",
            alt: "Echanger une carte"
          },
          {
            src: "/src/assets/Poker/Enregistrer.png",
            alt: "Enregistrer la combinaison obtenue"
          },
          {
            src: "/src/assets/Poker/Résultat.png",
            alt: "Afficher le résultat"
          },
          {
            src: "/src/assets/Poker/Scores (Partie 1).png",
            alt: "Montrer les scores 1"
          },
          {
            src: "/src/assets/Poker/Scores (Partie 2).png",
            alt: "Montrer les scores 2"
          },
          {
            src: "/src/assets/Poker/TirageCarte.png",
            alt: "Tirer une carte"
          },
          {
            src: "/src/assets/Poker/TirageJeu.png",
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
            src: "/src/assets/Musique/Accueil.jpg",
            alt: "Accueil de l'application"
          },
          {
            src: "/src/assets/Musique/Scan.jpg",
            alt: "Lancement d'un scan"
          },
          {
            src: "/src/assets/Musique/Historique.jpg",
            alt: "Consultation de l'historique"
          },
          {
            src: "/src/assets/Musique/Fiche.jpg",
            alt: "Consultation d'une musique scannée"
          }
        ],
      },
      {
        title: "Retrogaming",
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
            src: "/src/assets/Retrogaming/Accueil.png",
            alt: "Accueil du site"
          },
          {
            src: "/src/assets/Retrogaming/Opinion.png",
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
            src: "/src/assets/RL/Accueil.png",
            alt: "Accueil du projet"
          },
          {
            src: "/src/assets/RL/Saisie.png",
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
        subject: "/src/assets/Fichiers/AP Vichy Papeterie.pdf",
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

