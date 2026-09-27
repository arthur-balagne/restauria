(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const Ye=[{path:"/",layout:"public",title:"Accueil"},{path:"/features",layout:"public",title:"Fonctionnalités",type:"hero",desc:"Découvrez nos fonctionnalités en détail."},{path:"/pricing",layout:"public",title:"Tarifs",type:"hero",desc:"Nos plans d'abonnement pour tous les restaurants."},{path:"/login",layout:"public",title:"Connexion",type:"form",fields:["Email","Mot de passe"]},{path:"/register",layout:"public",title:"Créer un compte",type:"form",fields:["Nom","Email","Mot de passe"]},{path:"/forgot-password",layout:"public",title:"Mot de passe oublié",type:"form",fields:["Email"]},{path:"/reset-password/123",layout:"public",title:"Réinitialiser",type:"form",fields:["Nouveau mot de passe"]},{path:"/verify-email",layout:"public",title:"Vérification",type:"hero",desc:"Veuillez vérifier votre email pour continuer."},{path:"/terms",layout:"public",title:"CGV",type:"hero",desc:"Conditions Générales de Vente et d'Utilisation."},{path:"/privacy",layout:"public",title:"Confidentialité",type:"hero",desc:"Politique de confidentialité et RGPD."},{path:"/contact",layout:"public",title:"Contact",type:"form",fields:["Nom","Sujet","Message"]},{path:"/pages",layout:"public",title:"Route Directory"},{path:"/demo-restau",layout:"customer",title:"Menu",type:"grid",cols:["Catégorie","Items"],data:[["<a href='/demo-restau/category/boissons'>Boissons</a>","12"],["<a href='/demo-restau/category/plats'>Plats</a>","24"]]},{path:"/demo-restau/category/boissons",layout:"customer",title:"Boissons",type:"grid",cols:["Nom","Prix"],data:[["<a href='/demo-restau/product/burger'>Cola</a>","3€"],["Eau","2€"]]},{path:"/demo-restau/product/burger",layout:"customer",title:"Burger Classic",type:"hero",desc:"Délicieux burger maison avec frites - 15€ <br><br><a href='/demo-restau/cart' class='button button--primary'>Ajouter au panier</a>"},{path:"/demo-restau/cart",layout:"customer",title:"Panier",type:"grid",cols:["Produit","Qté","Total"],data:[["Burger Classic","2","30€"],["<a href='/demo-restau/checkout' class='button button--primary button--small'>Payer</a>","",""]]},{path:"/demo-restau/checkout",layout:"customer",title:"Paiement",type:"form",fields:["Numéro de table","Nom (Optionnel)","Numéro de carte"]},{path:"/demo-restau/order/1042/confirmation",layout:"customer",title:"Confirmation",type:"hero",desc:"Commande #1042 confirmée ! La cuisine prépare vos plats."},{path:"/demo-restau/order/1042",layout:"customer",title:"Suivi",type:"hero",desc:"Statut: En préparation dans la cuisine."},{path:"/demo-restau/orders",layout:"customer",title:"Historique",type:"grid",cols:["Commande","Statut","Total"],data:[["<a href='/demo-restau/order/1042'>#1042</a>","En cours","30€"]]},{path:"/demo-restau/account",layout:"customer",title:"Mon Compte",type:"form",fields:["Nom","Email","Préférences"]},{path:"/app/login",layout:"public",title:"Connexion Restaurateur",type:"form",fields:["Email Pro","Mot de passe"]},{path:"/app/register",layout:"public",title:"Inscription Restaurateur",type:"form",fields:["Nom du restaurant","Email Pro","Mot de passe"]},{path:"/app/verify-email",layout:"public",title:"Vérification Email",type:"hero",desc:"Consultez votre boîte mail pro."},{path:"/app/forgot-password",layout:"public",title:"Mot de passe oublié",type:"form",fields:["Email Pro"]},{path:"/app/dashboard",layout:"app",title:"Dashboard"},{path:"/app/floor",layout:"app",title:"Plan de salle",type:"grid",cols:["Salle","Tables Actives"],data:[["<a href='/app/floor/rooms'>Principale</a>","5/10"],["Terrasse","3/14"]]},{path:"/app/floor/rooms",layout:"app",title:"Salles",type:"grid",cols:["Nom","Capacité"],data:[["Principale","40"],["Terrasse","50"]]},{path:"/app/floor/rooms/new",layout:"app",title:"Nouvelle Salle",type:"form",fields:["Nom","Capacité"]},{path:"/app/floor/rooms/1/edit",layout:"app",title:"Modifier Salle",type:"form",fields:["Nom","Capacité"]},{path:"/app/floor/tables",layout:"app",title:"Tables",type:"grid",cols:["Numéro","Salle","Places"],data:[["<a href='/app/floor/tables/1'>T1</a>","Principale","2"],["T2","Principale","4"]]},{path:"/app/floor/tables/new",layout:"app",title:"Nouvelle Table",type:"form",fields:["Numéro","Salle","Places"]},{path:"/app/floor/tables/1/edit",layout:"app",title:"Modifier Table",type:"form",fields:["Numéro","Salle","Places"]},{path:"/app/floor/tables/1",layout:"app",title:"Détails Table",type:"hero",desc:"Table T1 - Libre. <a href='/app/floor/tables/1/qr-code' class='button button--quiet'>Voir QR</a>"},{path:"/app/floor/qr-codes",layout:"app",title:"QR Codes",type:"grid",cols:["Table","URL","Action"],data:[["T1","/demo-restau/table/token1","<a href='/app/floor/tables/1/qr-code'>Télécharger</a>"]]},{path:"/app/floor/tables/1/qr-code",layout:"app",title:"QR Code T1",type:"hero",desc:"[Image QR Code] <br><a href='/app/floor/qr-codes/print' class='button button--primary mt-3'>Imprimer</a>"},{path:"/app/floor/qr-codes/print",layout:"app",title:"Impression QR",type:"hero",desc:"Aperçu avant impression des QR codes..."},{path:"/app/menu",layout:"app",title:"Menu & Carte",type:"grid",cols:["Catégorie","Produits"],data:[["<a href='/app/menu/categories'>Plats</a>","24"],["Boissons","12"]]},{path:"/app/menu/categories",layout:"app",title:"Catégories",type:"grid",cols:["Nom","Ordre"],data:[["Entrées","1"],["Plats","2"]]},{path:"/app/menu/categories/new",layout:"app",title:"Nouvelle Catégorie",type:"form",fields:["Nom","Ordre"]},{path:"/app/menu/categories/1/edit",layout:"app",title:"Modifier Catégorie",type:"form",fields:["Nom","Ordre"]},{path:"/app/menu/products",layout:"app",title:"Produits",type:"grid",cols:["Nom","Prix","Statut"],data:[["<a href='/app/menu/products/1/edit'>Burger</a>","15€","Actif"],["Salade","12€","Actif"]]},{path:"/app/menu/products/new",layout:"app",title:"Nouveau Produit",type:"form",fields:["Nom","Catégorie","Prix"]},{path:"/app/menu/products/1/edit",layout:"app",title:"Modifier Produit",type:"form",fields:["Nom","Catégorie","Prix","Statut"]},{path:"/app/menu/options",layout:"app",title:"Options",type:"grid",cols:["Nom","Type"],data:[["Cuisson","Choix unique"],["Sauces","Choix multiple"]]},{path:"/app/menu/import",layout:"app",title:"Importer Menu",type:"form",fields:["Fichier PDF ou URL"]},{path:"/app/menu/import/1",layout:"app",title:"Validation Import",type:"hero",desc:"Veuillez valider les éléments extraits du PDF. <a href='/app/menu/preview' class='button button--primary mt-3'>Suivant</a>"},{path:"/app/menu/preview",layout:"app",title:"Aperçu Menu",type:"hero",desc:"Vue client du menu... <a href='/app/menu/publishing' class='button button--primary mt-3'>Publier</a>"},{path:"/app/menu/publishing",layout:"app",title:"Publication",type:"hero",desc:"Votre menu est en ligne sur votre espace Restauria."},{path:"/app/orders",layout:"app",title:"Toutes les Commandes",type:"grid",cols:["ID","Source","Statut","Total"],data:[["<a href='/app/orders/1042'>#1042</a>","QR Table 4","En cours","45€"],["#1043","A Emporter","Reçue","20€"]]},{path:"/app/orders/1042",layout:"app",title:"Commande #1042",type:"hero",desc:"Détails de la commande. 2 Burgers, 1 Frites. <br><br> <a href='/app/kitchen' class='button button--quiet'>Voir en cuisine</a>"},{path:"/app/orders/active",layout:"app",title:"Commandes Actives",type:"grid",cols:["ID","Statut"],data:[["#1042","En préparation"]]},{path:"/app/orders/history",layout:"app",title:"Historique",type:"grid",cols:["ID","Date","Total"],data:[["#1041","Aujourd'hui 12:30","30€"]]},{path:"/app/waiter/floor",layout:"app",title:"Salle (Serveur)",type:"grid",cols:["Table","Statut"],data:[["<a href='/app/waiter/tables/1'>T1</a>","Libre"],["T4","Occupée (45€)"]]},{path:"/app/waiter/tables/1",layout:"app",title:"Table T1",type:"hero",desc:"Actions: <a href='/app/waiter/tables/1/order' class='button button--primary'>Ajouter commande</a>"},{path:"/app/waiter/tables/1/order",layout:"app",title:"Prise de Commande",type:"form",fields:["Rechercher produit","Quantité","Notes"]},{path:"/app/kitchen",layout:"app",title:"Écran Cuisine",type:"grid",cols:["À Préparer","En Cours","Prêt"],data:[["#1044","<a href='/app/kitchen/orders/1042'>#1042</a>","#1041"]]},{path:"/app/kitchen/orders/1042",layout:"app",title:"Bon #1042",type:"hero",desc:"2 Burgers, 1 Frites. Notes: Sans oignon. <br><button class='button button--primary mt-3'>Marquer Prêt</button>"},{path:"/app/takeaway",layout:"app",title:"À Emporter",type:"grid",cols:["Client","Heure Prévue","Statut"],data:[["Jean D.","19:30","Reçue"]]},{path:"/app/settings/takeaway",layout:"app",title:"Paramètres À Emporter",type:"form",fields:["Activé","Délai moyen"]},{path:"/app/delivery",layout:"app",title:"Livraisons",type:"grid",cols:["Client","Adresse","Statut"],data:[["<a href='/app/delivery/orders/1042'>Marie L.</a>","10 rue de la Paix","En route"]]},{path:"/app/delivery/orders/1042",layout:"app",title:"Livraison #1042",type:"hero",desc:"Marie L. - 10 rue de la Paix. Chauffeur assigné."},{path:"/app/settings/delivery",layout:"app",title:"Paramètres Livraison",type:"form",fields:["Zones couvertes","Frais de livraison","Minimum de commande"]},{path:"/app/staff",layout:"app",title:"Équipe",type:"grid",cols:["Nom","Rôle","Statut"],data:[["<a href='/app/staff/1'>Pierre</a>","Manager","Actif"],["Paul","Serveur","Actif"]]},{path:"/app/staff/invite",layout:"app",title:"Inviter Membre",type:"form",fields:["Email","Rôle"]},{path:"/app/staff/1",layout:"app",title:"Profil Pierre",type:"hero",desc:"Rôle: Manager. <a href='/app/staff/1/edit' class='button button--quiet'>Modifier</a>"},{path:"/app/staff/1/edit",layout:"app",title:"Modifier Pierre",type:"form",fields:["Rôle","Droits d'accès"]},{path:"/app/settings/restaurant",layout:"app",title:"Infos Restaurant",type:"form",fields:["Nom","Adresse","Téléphone"]},{path:"/app/settings/hours",layout:"app",title:"Horaires",type:"form",fields:["Lundi","Mardi","Mercredi","Jeudi","Vendredi"]},{path:"/app/settings/orders",layout:"app",title:"Réglages Commandes",type:"form",fields:["Accepter commandes","Autoriser pourboires"]},{path:"/app/settings/payments",layout:"app",title:"Paiements",type:"form",fields:["Clé Stripe","Devise"]},{path:"/app/settings/branding",layout:"app",title:"Marque",type:"form",fields:["Logo","Couleur principale (Hex)"]},{path:"/app/subscription",layout:"app",title:"Abonnement",type:"hero",desc:"Plan Actuel: PRO (49€/mois). Prochain prélèvement le 1er du mois."},{path:"/app/subscription/plans",layout:"app",title:"Changer de Plan",type:"grid",cols:["Plan","Prix","Action"],data:[["Pro","49€","Actuel"],["Business","99€","Upgrader"]]},{path:"/app/subscription/billing",layout:"app",title:"Facturation",type:"form",fields:["Carte Bancaire","Adresse de facturation"]},{path:"/app/subscription/invoices",layout:"app",title:"Factures",type:"grid",cols:["Date","Montant","Lien"],data:[["01/10/2023","49€","Télécharger PDF"]]},{path:"/app/analytics",layout:"app",title:"Vue d'ensemble",type:"hero",desc:"Graphiques généraux affichés ici... <br><br>Voir <a href='/app/analytics/sales'>Ventes</a>"},{path:"/app/analytics/sales",layout:"app",title:"Ventes",type:"hero",desc:"Graphique détaillé des ventes sur 30 jours."},{path:"/app/analytics/products",layout:"app",title:"Produits Populaires",type:"grid",cols:["Produit","Quantité Vendu","Revenu"],data:[["Burger","150","2250€"]]},{path:"/app/analytics/tables",layout:"app",title:"Occupation Tables",type:"grid",cols:["Table","Taux d'occupation","Revenu"],data:[["T1","80%","1200€"]]},{path:"/app/onboarding",layout:"app",title:"Bienvenue sur Restauria",type:"hero",desc:"Commençons la configuration de votre établissement. <a href='/app/onboarding/restaurant' class='button button--primary mt-3'>Suivant</a>"},{path:"/app/onboarding/restaurant",layout:"app",title:"Étape 1: Restaurant",type:"form",fields:["Nom du restaurant"]},{path:"/app/onboarding/menu",layout:"app",title:"Étape 2: Menu",type:"hero",desc:"Importation du menu depuis un PDF... <a href='/app/onboarding/floor' class='button button--primary mt-3'>Suivant</a>"},{path:"/app/onboarding/floor",layout:"app",title:"Étape 3: Salles",type:"form",fields:["Nombre de tables","Noms des salles"]},{path:"/app/onboarding/qr-codes",layout:"app",title:"Étape 4: QR",type:"hero",desc:"Génération de vos QR codes... <a href='/app/onboarding/complete' class='button button--primary mt-3'>Terminer</a>"},{path:"/app/onboarding/complete",layout:"app",title:"Terminé !",type:"hero",desc:"Votre restaurant est prêt. <a href='/app/dashboard' class='button button--primary mt-3'>Accéder au Dashboard</a>"},{path:"/admin/dashboard",layout:"admin",title:"Platform Analytics"},{path:"/admin/restaurants",layout:"admin",title:"Restaurants",type:"grid",cols:["Nom","Plan","Statut"],data:[["<a href='/admin/restaurants/1'>Le Petit Bouchon</a>","Pro","Actif"],["Bella Napoli","Business","Actif"]]},{path:"/admin/restaurants/1",layout:"admin",title:"Détails Restaurant",type:"hero",desc:"Le Petit Bouchon - Géré par pierre@bouchon.fr. <a href='/admin/restaurants/1/edit' class='button button--quiet'>Modifier</a>"},{path:"/admin/restaurants/new",layout:"admin",title:"Créer Restaurant",type:"form",fields:["Nom","Propriétaire Email","Plan d'abonnement"]},{path:"/admin/restaurants/1/edit",layout:"admin",title:"Modifier Restaurant",type:"form",fields:["Statut Compte","Plan d'abonnement"]},{path:"/admin/restaurants/1/activity",layout:"admin",title:"Audit Log",type:"grid",cols:["Date","Action","IP"],data:[["Aujourd'hui 10:00","Menu publié","192.168.1.1"]]},{path:"/admin/users",layout:"admin",title:"Utilisateurs Globaux",type:"grid",cols:["Email","Rôle Platform","Dernière Co"],data:[["<a href='/admin/users/1'>pierre@bouchon.fr</a>","Restaurant Owner","Aujourd'hui"]]},{path:"/admin/users/1",layout:"admin",title:"Profil Utilisateur",type:"hero",desc:"pierre@bouchon.fr - Vérifié. Restaurants: 1."},{path:"/admin/subscriptions",layout:"admin",title:"Abonnements Actifs",type:"grid",cols:["Restaurant","Plan","MRR"],data:[["<a href='/admin/subscriptions/1'>Le Petit Bouchon</a>","Pro","49€"]]},{path:"/admin/subscriptions/1",layout:"admin",title:"Détails Abonnement",type:"hero",desc:"Souscription #SUB-9912. Active depuis le 01/01/2023. Stripe ID: cus_12345"},{path:"/admin/plans",layout:"admin",title:"Plans SaaS",type:"grid",cols:["Nom","Prix","Abonnés"],data:[["<a href='/admin/plans/1'>Free</a>","0€","500"],["Pro","49€","700"]]},{path:"/admin/plans/1",layout:"admin",title:"Modifier Plan",type:"form",fields:["Prix mensuel","Limites (JSON)"]},{path:"/admin/orders",layout:"admin",title:"Toutes les transactions",type:"grid",cols:["ID","Restaurant","Montant","Statut"],data:[["<a href='/admin/orders/1042'>#1042</a>","Le Petit Bouchon","45€","Payée"]]},{path:"/admin/orders/1042",layout:"admin",title:"Inspection Commande",type:"hero",desc:"ID Stripe: ch_12345. Statut Webhook: 200 OK."},{path:"/admin/support",layout:"admin",title:"Tickets Support",type:"grid",cols:["ID","Sujet","Statut"],data:[["<a href='/admin/support/T-1'>#T-4092</a>","Import PDF bug","Ouvert"]]},{path:"/admin/support/T-1",layout:"admin",title:"Ticket #T-4092",type:"hero",desc:"Client: pierre@bouchon.fr. Message: 'L'import de mon menu PDF plante.' <br><button class='button button--primary mt-3'>Répondre</button>"},{path:"/admin/settings",layout:"admin",title:"Réglages Plateforme",type:"form",fields:["Nom de l'app","Email expéditeur de la plateforme","URL Webhook Stripe"]},{path:"/admin/settings/features",layout:"admin",title:"Feature Flags",type:"form",fields:["Activer IA Menu (BETA)","Activer Nouveaux Paiements (BETA)"]}],Ze=new Set(["/app/login","/app/register","/app/forgot-password","/app/verify-email"]),Xe=[{path:"/login/restaurant",title:"Connexion restaurateur",fields:["Email professionnel","Mot de passe"]},{path:"/register/restaurant",title:"Créer un compte restaurateur",fields:["Nom du restaurant","Email professionnel","Mot de passe"]},{path:"/forgot-password/restaurant",title:"Mot de passe oublié · restaurateur",fields:["Email professionnel"]},{path:"/reset-password/restaurant",title:"Réinitialiser · restaurateur",fields:["Nouveau mot de passe"]},{path:"/verify-email/restaurant",title:"Vérifier votre email · restaurateur"}].map(e=>({layout:"public",type:"form",...e})),ea={path:"/reset-password",layout:"public",title:"Réinitialiser mon mot de passe",type:"form",fields:["Nouveau mot de passe"]},Re=[{path:"/",customerTitle:"Découvrir et commander",restaurantTitle:"Restauria pour les restaurateurs",customerDesc:"Découvrez les menus, choisissez la commande à table ou à emporter et explorez le parcours client Restauria.",restaurantDesc:"Découvrez le parcours de gestion Restauria pour la salle, les commandes et la cuisine."},{path:"/features",customerTitle:"Côté client",restaurantTitle:"Fonctionnalités restaurateur",customerDesc:"Explorez la carte, le panier, le retrait sans table et le parcours de commande à table.",restaurantDesc:"Découvrez les écrans de gestion du menu, de la salle, de la cuisine et des retraits."},{path:"/pricing",customerTitle:"Coût côté client",restaurantTitle:"Tarifs restaurateur",customerDesc:"Consulter le menu démo est gratuit ; les commandes et paiements réels ne sont pas activés.",restaurantDesc:"Découvrez les formules professionnelles illustratives du prototype Restauria."},{path:"/contact",customerTitle:"Contact client",restaurantTitle:"Contact restaurateur",customerDesc:"Une question sur le parcours client Restauria ? Découvrez les pages utiles et le formulaire de démonstration.",restaurantDesc:"Découvrez le parcours de contact pour les restaurateurs dans cette maquette."},{path:"/terms",customerTitle:"Conditions côté client",restaurantTitle:"Conditions côté restaurateur",customerDesc:"Texte de démonstration des conditions pour les clients, à remplacer avant la mise en service.",restaurantDesc:"Texte de démonstration des conditions professionnelles, à remplacer avant la mise en service."},{path:"/privacy",customerTitle:"Confidentialité côté client",restaurantTitle:"Confidentialité côté restaurateur",customerDesc:"Note de démonstration sur les données du parcours client dans ce navigateur.",restaurantDesc:"Note de démonstration sur les données professionnelles dans le prototype."}],aa=new Map(Re.map(e=>[e.path,e])),ta=Re.map(e=>({path:e.path==="/"?"/restaurant":`${e.path}/restaurant`,layout:"public",title:e.restaurantTitle,desc:e.restaurantDesc})),H={path:"/404",layout:"public",title:"Page introuvable",desc:"Cette page est introuvable. Retrouvez les fonctionnalités, les tarifs et les contacts Restauria."},fe=[...Ye.filter(e=>!Ze.has(e.path)).map(e=>{const a=aa.get(e.path);return a?{...e,title:a.customerTitle,desc:a.customerDesc}:e}),{path:"/restaurants",layout:"public",title:"Restaurants à découvrir",desc:"Filtrez les restaurants de démonstration par département et par type de cuisine, puis découvrez leur carte."},{path:"/design-docs",layout:"public",title:"Documentation design",desc:"Composants réutilisables Restauria, exemples de code et conseils pour créer de nouvelles pages."},...ta,{path:"/admin/cuisines",layout:"admin",title:"Types de cuisine",desc:"Créer et gérer les types de cuisine proposés aux restaurants."},{path:"/admin/products",layout:"admin",title:"Produits de référence",desc:"Créer les produits de base que les restaurants peuvent personnaliser."},ea,...Xe,H],A={takeaway:{id:"takeaway",serviceModes:["takeaway"],tier:"Démarrage",identity:{name:"Pizza Nomade",location:"Lyon",initials:"PN",color:"coral"},customer:{eyebrow:"Pizza truck · Lyon",description:"Des pizzas préparées minute, à commander ici et à retirer directement au camion.",menu:[{id:"margherita",name:"Margherita",detail:"Tomate, mozzarella, basilic frais",price:"12,00 €",image:"/images/pizza-nomade-hero.jpg",tag:"Classique"},{id:"diavola",name:"Diavola",detail:"Tomate, mozzarella, spianata piquante",price:"15,00 €",image:"/images/pizza-nomade-diavola.jpg",tag:"Épicée"},{id:"vegetarienne",name:"Végétarienne",detail:"Légumes de saison, mozzarella, pesto",price:"14,00 €",image:"/images/pizza-nomade-veggie.jpg",tag:"Végé"},{id:"limonade",name:"Limonade artisanale",detail:"Citron pressé et menthe fraîche",price:"3,50 €",image:"/images/pizza-nomade-lemonade.jpg",tag:"Boisson"}]},app:{tables:null,staff:{active:2,total:3},orders:{live:3,today:28,revenue:"382 €"},plan:"Démarrage · à emporter",activity:[{icon:"pizza",text:"Service à emporter ouvert",time:"Aujourd’hui"}],analytics:{sales:[30,48,64,100,160,185],mix:[80,20,0,0],top:[{name:"Margherita",sales:"18",trend:"up"}]}},admin:{plan:"Démarrage",mrr:"19 €",health:"Actif",tickets:0,recentClient:"Pizza Nomade",recentClientInitials:"PN",recentClientColor:"coral"}},small:{id:"small",serviceModes:["table"],tier:"Démarrage",identity:{name:"Café Marais",location:"Paris",initials:"CM",color:"sand"},customer:{eyebrow:"Café de spécialité · Paris",description:"Un petit coin de calme pour savourer un café d'exception et des pâtisseries maison.",menu:[{name:"Espresso",detail:"Café de spécialité torréfié à Paris",price:"2,50 €",image:"/images/beautiful-dish.jpg",tag:"Classique"},{name:"Croissant",detail:"Pur beurre, fait maison",price:"1,80 €",image:"/images/menu-pavlova.jpg",tag:"Frais"},{name:"Cookie",detail:"Chocolat noir et noisettes",price:"3,00 €",image:"/images/menu-egg.png",tag:"Gourmand"}]},app:{tables:{active:3,total:8},staff:{active:1,total:2},orders:{live:1,today:24,revenue:"142 €"},plan:"Démarrage (Essai)",activity:[{icon:"coffee",text:"Nouvelle commande <strong>#1042</strong>",time:"Il y a 2 min"},{icon:"check",text:"Service ouvert",time:"08:00"}],analytics:{sales:[40,60,45,90,120,142],mix:[60,30,10,0],top:[{name:"Espresso",sales:"84",trend:"up"},{name:"Cookie",sales:"42",trend:"up"},{name:"Latte",sales:"28",trend:"down"}]}},admin:{plan:"Démarrage",mrr:"19 €",health:"À surveiller",tickets:0,recentClient:"Café Marais",recentClientInitials:"CM",recentClientColor:"sand"}},large:{id:"large",serviceModes:["table","takeaway"],tier:"Indépendant",identity:{name:"Bella Napoli",location:"Lyon",initials:"BN",color:"sage"},customer:{eyebrow:"Pizzeria · Lyon",description:"L'authentique pizza napolitaine, cuite au feu de bois dans la pure tradition.",menu:[{name:"Margherita",detail:"Sauce tomate, mozzarella fior di latte, basilic",price:"12 €",image:"/images/hero-bistro.jpg",tag:"Classique"},{name:"Diavola",detail:"Sauce tomate, mozzarella, spianata piquante",price:"15 €",image:"/images/menu-burger.jpg",tag:"Épicé"},{name:"Regina",detail:"Jambon blanc, champignons, mozzarella",price:"14 €",image:"/images/menu-egg.png",tag:"Favorite"},{name:"Bufalina",detail:"Tomates cerises, mozzarella di bufala, roquette",price:"17 €",image:"/images/beautiful-dish.jpg",tag:"Premium"},{name:"Calzone",detail:"Ricotta, jambon, mozzarella, œuf",price:"16 €",image:"/images/chef-plating.jpg",tag:"Généreux"},{name:"Napoli",detail:"Anchois, câpres, olives et origan",price:"15 €",image:"/images/feature-kitchen.jpg",tag:"Tradition"},{name:"Burrata des Pouilles",detail:"Tomates anciennes, basilic et huile d’olive",price:"13 €",image:"/images/beautiful-dish.jpg",tag:"À partager"},{name:"Arancini",detail:"Risotto safrané, cœur fondant de mozzarella",price:"9 €",image:"/images/menu-egg.png",tag:"Antipasti"},{name:"Tiramisu",detail:"Café, mascarpone, cacao",price:"7 €",image:"/images/menu-pavlova.jpg",tag:"Maison"},{name:"Panna cotta",detail:"Vanille, coulis de fruits rouges",price:"7 €",image:"/images/menu-pavlova.jpg",tag:"Dessert"},{name:"Spritz",detail:"Aperol, prosecco, eau gazeuse",price:"8 €",image:"/images/hero.jpg",tag:"Cocktail"},{name:"Chianti Classico",detail:"Verre de vin rouge de Toscane",price:"7 €",image:"/images/hero-bistro.jpg",tag:"Sélection"}]},app:{tables:{active:32,total:45},staff:{active:14,total:25},orders:{live:18,today:342,revenue:"4 850 €"},plan:"Indépendant",activity:[{icon:"pizza",text:"Nouvelle commande <strong>#2041</strong>",time:"À l'instant"},{icon:"alert",text:"Table 12 attend depuis 15 min",time:"Il y a 4 min"},{icon:"check",text:"Commande #2038 servie",time:"Il y a 6 min"}],analytics:{sales:[800,1200,1500,2400,3800,4850],mix:[45,25,20,10],top:[{name:"Margherita",sales:"412",trend:"up"},{name:"Diavola",sales:"284",trend:"up"},{name:"Spritz",sales:"196",trend:"down"}]}},admin:{plan:"Indépendant",mrr:"49 €",health:"Excellent",tickets:1,recentClient:"Bella Napoli",recentClientInitials:"BN",recentClientColor:"sage"}},group:{id:"group",serviceModes:["table","takeaway"],tier:"Établissement Pro",identity:{name:"Groupe Épicure",location:"National",initials:"GE",color:"coral"},portfolio:["Le Petit Bouchon","Bella Napoli","Atelier des Halles"],locations:{bouchon:{name:"Le Petit Bouchon",app:{tables:{active:18,total:24},staff:{active:9,total:14},orders:{live:9,today:186,revenue:"4 280 €"},activity:[{icon:"trending-up",text:"Pic d’activité au <strong>Petit Bouchon</strong>",time:"Il y a 10 min"},{icon:"check",text:"Service du midi clôturé",time:"Il y a 2 h"}]}},napoli:{name:"Bella Napoli",app:{tables:{active:32,total:45},staff:{active:14,total:25},orders:{live:18,today:342,revenue:"8 940 €"},activity:[{icon:"alert",text:"Forte affluence à <strong>Bella Napoli</strong>",time:"À l’instant"},{icon:"check",text:"Renfort cuisine confirmé",time:"Il y a 12 min"}]}},halles:{name:"Atelier des Halles",app:{tables:{active:34,total:43},staff:{active:11,total:19},orders:{live:15,today:328,revenue:"5 200 €"},activity:[{icon:"users",text:"Clôture de caisse validée à <strong>Atelier des Halles</strong>",time:"Il y a 1 h"},{icon:"settings",text:"Carte du soir publiée",time:"Il y a 3 h"}]}}},customer:{eyebrow:"Cuisine de saison · Lyon",description:"Une cuisine française généreuse, préparée minute avec des produits locaux.",menu:[{name:"Burger du Bouchon",detail:"Bœuf maturé, cheddar affiné, sauce maison",price:"16,50 €",image:"/images/menu-burger.jpg",tag:"Signature"},{name:"Œuf parfait forestier",detail:"Crème de champignons, noisettes torréfiées",price:"12 €",image:"/images/menu-egg.png",tag:"Chef"},{name:"Pavlova aux agrumes",detail:"Meringue, crème légère et fruits de saison",price:"9 €",image:"/images/menu-pavlova.jpg",tag:"Nouveau"}]},app:{tables:{active:84,total:112},staff:{active:34,total:58},orders:{live:42,today:856,revenue:"18 420 €"},plan:"Établissement Pro (Multi-restaurants)",activity:[{icon:"trending-up",text:"Pic d'activité à <strong>Le Petit Bouchon</strong>",time:"Il y a 10 min"},{icon:"users",text:"Clôture de caisse validée <strong>Atelier des Halles</strong>",time:"Il y a 1h"},{icon:"settings",text:"Mise à jour du menu <strong>Groupe</strong>",time:"Hier"}],analytics:{sales:[4200,5800,7400,11200,15600,18420],mix:[35,30,25,10],top:[{name:"Burger du Bouchon",sales:"842",trend:"up"},{name:"Margherita (BN)",sales:"612",trend:"up"},{name:"Pavlova",sales:"438",trend:"up"}]}},admin:{plan:"Établissement Pro",mrr:"249 €",health:"Stable",tickets:3,recentClient:"Groupe Épicure",recentClientInitials:"GE",recentClientColor:"coral"}}};function de(e){const a=e.serviceModes||["table"],t=typeof window<"u"?new URLSearchParams(window.location.search).get("service"):null;return t&&a.includes(t)?t:a[0]}const ze=e=>`restauria:service-modes:v1:${e.id}:${e.establishmentId||"all"}`;function te(e){if(typeof window>"u")return e.serviceModes;try{const a=JSON.parse(localStorage.getItem(ze(e))||"null");return Array.isArray(a)&&a.length>0&&a.every(t=>["table","takeaway"].includes(t))?["table","takeaway"].filter(t=>a.includes(t)):e.serviceModes}catch{return e.serviceModes}}function sa(e,a){const t=["table","takeaway"].filter(s=>a.includes(s));if(!t.length)throw new Error("Choisissez au moins un type de commande.");localStorage.setItem(ze(e),JSON.stringify(t))}function P(){let e="group";if(typeof window<"u"&&window.location){const i=new URLSearchParams(window.location.search);i.has("profile")&&(e=i.get("profile"))}const a=A[e]||A.group;if(a.id!=="group"||typeof window>"u")return{...a,serviceModes:te(a)};const t=new URLSearchParams(window.location.search).get("establishment"),s=t?a.locations?.[t]:null;return s?{...a,establishmentId:t,activeRestaurant:s.name,serviceModes:te({...a,establishmentId:t}),app:{...a.app,...s.app,plan:a.app.plan}}:{...a,establishmentId:"all",activeRestaurant:null,serviceModes:te(a)}}const oe="restauria:catalog:v1",ia=[{id:"francaise",name:"française"},{id:"italienne",name:"italienne"},{id:"fusion",name:"fusion"},{id:"gastronomique",name:"gastronomique"},{id:"cafe-patisserie",name:"café & pâtisserie"},{id:"asiatique",name:"asiatique"}],ra=["group","large","small","takeaway"],be={"group:burger-du-bouchon":{allergens:["Gluten","Lait"],removableIngredients:["Cornichons","Oignons"]},"group:uf-parfait-forestier":{allergens:["Œufs","Lait","Fruits à coque"],removableIngredients:["Noisettes","Champignons"]},"group:pavlova-aux-agrumes":{allergens:["Œufs","Lait"],removableIngredients:["Agrumes"]},"takeaway:margherita":{allergens:["Gluten","Lait"],removableIngredients:["Mozzarella","Basilic"]},"takeaway:diavola":{allergens:["Gluten","Lait"],removableIngredients:["Mozzarella","Spianata"]},"takeaway:vegetarienne":{allergens:["Gluten","Lait"],removableIngredients:["Mozzarella","Légumes de saison"]},"small:croissant":{allergens:["Gluten","Lait"],removableIngredients:[]},"small:cookie":{allergens:["Gluten","Fruits à coque"],removableIngredients:["Noisettes","Chocolat noir"]},"large:margherita":{allergens:["Gluten","Lait"],removableIngredients:["Mozzarella","Basilic"]},"large:diavola":{allergens:["Gluten","Lait"],removableIngredients:["Mozzarella","Spianata"]},"large:regina":{allergens:["Gluten","Lait"],removableIngredients:["Jambon blanc","Champignons"]},"large:bufalina":{allergens:["Gluten","Lait"],removableIngredients:["Mozzarella","Roquette"]},"large:calzone":{allergens:["Gluten","Lait","Œufs"],removableIngredients:["Jambon","Œuf"]},"large:napoli":{allergens:["Gluten","Poisson"],removableIngredients:["Anchois","Câpres","Olives"]}};let na=0;function oa(e){const a=String(e).replace(/[€\s\u00a0]/g,"").replace(",","."),t=Number(a);if(!Number.isFinite(t)||t<=0)throw new Error(`Prix invalide dans le menu source : ${e}`);return Math.round(t*100)}function se(e){return String(e).normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")}function la(){const e=[],a=new Map,t=[];for(const s of ra){const i=A[s];if(i?.customer?.menu)for(const r of i.customer.menu){const n=s==="group"&&r.name==="Burger du Bouchon"?"Cheeseburger":r.name,o=n.trim().toLocaleLowerCase("fr");let l=a.get(o);l||(l=`product-${se(n)}`,a.set(o,l),e.push({id:l,name:n}));const c=be[`${s}:${se(r.name)}`]||be[`${s}:${r.id}`];t.push({id:r.id||`${s}-${se(r.name)}`,profileId:s,productId:l,name:r.name,description:r.detail,priceCents:oa(r.price),image:r.image,tag:r.tag||"",allergens:c?.allergens||[],removableIngredients:c?.removableIngredients||[]})}}return{cuisines:ia.map(s=>({...s})),baseProducts:e,variants:t,registrationDraft:{address:"",cuisineIds:[]},sampleDishInfoVersion:1}}const ie=la();function B(e){return e===null?null:JSON.parse(JSON.stringify(e))}function ca(e){if(!e||!Array.isArray(e.cuisines)||!Array.isArray(e.baseProducts)||!Array.isArray(e.variants))throw new Error("Le catalogue Restauria enregistré est invalide.");return e}function Q(){if(typeof window>"u")return B(ie);const e=window.localStorage.getItem(oe);if(e===null)return B(ie);try{const a=ca(JSON.parse(e));if(!a.sampleDishInfoVersion){for(const t of a.variants){const s=ie.variants.find(i=>i.profileId===t.profileId&&i.id===t.id);!s||t.name!==s.name||t.description!==s.description||t.image!==s.image||t.priceCents!==s.priceCents||(t.allergens?.length||(t.allergens=[...s.allergens]),t.removableIngredients?.length||(t.removableIngredients=[...s.removableIngredients]))}a.sampleDishInfoVersion=1,window.localStorage.setItem(oe,JSON.stringify(a))}return B(a)}catch(a){throw a instanceof SyntaxError?new Error("Le catalogue Restauria enregistré ne peut pas être lu."):a}}function da(e){typeof window>"u"||window.localStorage.setItem(oe,JSON.stringify(e))}function D(e){const a=Q(),t=e(a);return da(a),t===void 0?q():B(t)}function L(e,a){if(typeof e!="string"||!e.trim())throw new Error(`${a} est obligatoire.`);return e.trim()}function Ae(e,a,t,s){const i=a.toLocaleLowerCase("fr");if(e.some(r=>r.id!==t&&r.name.trim().toLocaleLowerCase("fr")===i))throw new Error(`${s} existe déjà.`)}function pe(e,a){let t;do{const s=typeof crypto<"u"&&typeof crypto.randomUUID=="function"?crypto.randomUUID():`${Date.now().toString(36)}-${(++na).toString(36)}-${Math.random().toString(36).slice(2)}`;t=`${e}-${s}`}while(a.some(s=>s.id===t));return t}function q(){return Q()}function J(e){return typeof e=="string"?e:e?.id==="group"&&e.establishmentId==="napoli"?"large":e?.id==="group"&&e.establishmentId==="halles"?"group-halles":e?.id}function T(e){const a=J(e);if(!a)return[];const t=Q(),s=new Set(t.baseProducts.map(i=>i.id));return t.variants.filter(i=>i.profileId===a&&s.has(i.productId)).map(({id:i,name:r,description:n,priceCents:o,image:l,tag:c,allergens:d,removableIngredients:p})=>({id:i,name:r,detail:n,price:`${(o/100).toFixed(2).replace(".",",")} €`,image:l,tag:c,allergens:Array.isArray(d)?d:[],removableIngredients:Array.isArray(p)?p:[]}))}function ye(e,a){if(!Array.isArray(e))throw new Error(`${a} doit être une liste.`);const t=e.map(s=>L(s,a));if(t.length>20||t.some(s=>s.length>80))throw new Error(`${a} : maximum 20 lignes de 80 caractères.`);if(new Set(t.map(s=>s.toLocaleLowerCase("fr"))).size!==t.length)throw new Error(`${a} contient un doublon.`);return t}function pa({id:e,name:a}={}){return D(t=>{const s=L(a,"Le nom de la cuisine"),i=e?t.cuisines.find(r=>r.id===e):null;if(e&&!i)throw new Error("Cuisine introuvable.");Ae(t.cuisines,s,e,"Cette cuisine"),i?i.name=s:t.cuisines.push({id:pe("cuisine",t.cuisines),name:s})})}function ua(e){return D(a=>{const t=a.cuisines.findIndex(s=>s.id===e);if(t<0)throw new Error("Cuisine introuvable.");a.cuisines.splice(t,1),a.registrationDraft&&(a.registrationDraft.cuisineIds=a.registrationDraft.cuisineIds.filter(s=>s!==e))})}function ma({id:e,name:a}={}){return D(t=>{const s=L(a,"Le nom du produit"),i=e?t.baseProducts.find(r=>r.id===e):null;if(e&&!i)throw new Error("Produit de base introuvable.");Ae(t.baseProducts,s,e,"Ce produit de base"),i?i.name=s:t.baseProducts.push({id:pe("product",t.baseProducts),name:s})})}function va(e){return D(a=>{const t=a.baseProducts.findIndex(s=>s.id===e);if(t<0)throw new Error("Produit de base introuvable.");a.baseProducts.splice(t,1),a.variants=a.variants.filter(s=>s.productId!==e)})}function ga(e,{id:a,productId:t,name:s,description:i,priceCents:r,image:n,tag:o,allergens:l,removableIngredients:c}={}){return D(d=>{const p=L(e,"Le restaurant");if(!A[p]&&p!=="group-halles")throw new Error("Restaurant introuvable.");const h=L(s,"Le nom de la variante"),g=L(i,"La description"),u=L(n,"L’image");if(!Number.isInteger(r)||r<=0)throw new Error("Le prix doit être un montant positif en centimes.");if(!d.baseProducts.some(y=>y.id===t))throw new Error("Le produit de base sélectionné est introuvable.");const v=a?d.variants.find(y=>y.id===a):null;if(a&&!v)throw new Error("Variante introuvable.");if(v&&v.profileId!==p)throw new Error("Cette variante appartient à un autre restaurant.");if(d.variants.some(y=>y.profileId===p&&y.productId===t&&y.id!==a))throw new Error("Ce produit possède déjà une variante dans ce restaurant.");if(d.variants.some(y=>y.profileId===p&&y.name.trim().toLocaleLowerCase("fr")===h.toLocaleLowerCase("fr")&&y.id!==a))throw new Error("Une variante porte déjà ce nom dans ce restaurant.");const b={id:v?.id||pe("variant",d.variants),profileId:p,productId:t,name:h,description:g,priceCents:r,image:u,tag:typeof o=="string"?o.trim():v?.tag||"",allergens:ye(l??v?.allergens??[],"Allergènes"),removableIngredients:ye(c??v?.removableIngredients??[],"Ingrédients retirables")};v?Object.assign(v,b):d.variants.push(b)})}function ha(e,a){return D(t=>{const s=t.variants.findIndex(i=>i.id===a&&i.profileId===e);if(s<0)throw new Error("Variante introuvable pour ce restaurant.");t.variants.splice(s,1)})}function fa({address:e,cuisineIds:a}={}){return D(t=>{const s=L(e,"L’adresse");if(!Array.isArray(a)||a.length<1||a.length>5)throw new Error("Choisissez entre 1 et 5 cuisines.");if(new Set(a).size!==a.length||a.some(i=>!t.cuisines.some(r=>r.id===i)))throw new Error("Une ou plusieurs cuisines sélectionnées sont invalides.");t.registrationDraft={address:s,cuisineIds:[...a]}})}function ba(){return Q().registrationDraft}function Le(e,a=[]){return a.length?`${e}::${encodeURIComponent(JSON.stringify(a))}`:e}function qe(e,a=[]){if(!Array.isArray(a))throw new Error("Choix d’ingrédients invalide.");const t=Array.isArray(e.removableIngredients)?e.removableIngredients:[];if(new Set(a).size!==a.length||a.some(s=>!t.includes(s)))throw new Error("Cette modification du plat n’est plus disponible.");return t.filter(s=>a.includes(s))}function Me(e,a){const t=Array.isArray(e)?e:Object.entries(e||{}).map(([i,r])=>({id:i,quantity:r,removedIngredients:[]})),s=new Map;for(const i of t){const r=a.find(o=>o.id===i.id),n=Number(i.quantity);if(!(!r||!Number.isInteger(n)||n<1))try{const o=qe(r,i.removedIngredients||[]),l=Le(r.id,o),c=s.get(l);s.set(l,{id:r.id,key:l,removedIngredients:o,quantity:Math.min(20,(c?.quantity||0)+n)})}catch{}}return[...s.values()]}function ue(e,a,t,s=[]){const i=a.find(l=>l.id===t);if(!i)throw new Error("Ce plat n’est plus sur la carte.");const r=qe(i,s),n=Le(t,r),o=e.find(l=>l.key===n);o?o.quantity=Math.min(20,o.quantity+1):e.push({id:t,key:n,removedIngredients:r,quantity:1})}function Ie(e,a,t){const s=e.find(i=>i.key===a);!s||![1,-1].includes(t)||(s.quantity=Math.min(20,s.quantity+t),s.quantity<=0&&e.splice(e.indexOf(s),1))}const De=e=>e.reduce((a,t)=>a+t.quantity,0),W=e=>Math.round(Number(e.price.replace("€","").trim().replace(",","."))*100),Te=(e,a)=>e.reduce((t,s)=>t+s.quantity*W(a.find(i=>i.id===s.id)),0),R=e=>String(e??"").replace(/[&<>"']/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[a]);function Ee(e){const a=e.allergens||[],t=e.removableIngredients||[];return`<article class="product-focus">
    <div class="product-focus__image"><img src="${R(e.image)}" alt="${R(e.name)}"><a href="/demo-restau" class="product-focus__back" aria-label="Retour au menu">←</a></div>
    <div class="product-focus__body">
       <span class="section-kicker">À la carte</span><h1>${R(e.name)}</h1><p class="product-focus__lead">${R(e.detail)}</p>
      <section class="product-allergens" aria-label="Information sur les allergènes"><h2>Allergènes</h2>
        <p>${a.length?R(a.join(" · ")):"Allergènes non renseignés par le restaurant."}</p>
        <small>En cas d’allergie, demandez confirmation au restaurant. Retirer un ingrédient ne garantit pas l’absence d’allergène ou de traces.</small>
      </section>
      <form data-customer-add data-item="${R(e.id)}">
        ${t.length?`<fieldset class="choice-panel"><legend>Retirer un ingrédient de mon plat</legend>
          ${t.map(s=>`<label><input type="checkbox" name="remove" value="${R(s)}"><span>Sans ${R(s)}</span></label>`).join("")}
          <small>Ces choix s’appliquent uniquement à ce plat dans votre panier.</small>
        </fieldset>`:'<p class="product-no-options">Aucun ingrédient retirable proposé pour ce plat.</p>'}
        <button type="submit" class="button button--primary product-focus__cta"><span>Ajouter à mon panier</span><strong>${R(e.price)}</strong></button>
      </form>
       <p class="product-demo-note">Les commandes de cette carte sont enregistrées sur cet appareil uniquement, sans transmission au restaurant.</p>
    </div>
  </article>`}const ya="restauria:takeaway:v1",wa=e=>`restauria:takeaway:v2:${e.id}:${e.establishmentId||"all"}`,je=e=>`restauria:takeaway:v3:${e.id}:${e.establishmentId||"all"}`,E=e=>T(e),Ne=e=>e.id==="takeaway"?"au camion":"sur place",U=["received","preparing","ready","collected"],le={received:"À préparer",preparing:"En préparation",ready:"Prête au retrait",collected:"Retirée"},we={received:"Commencer la préparation",preparing:"Marquer prête",ready:"Marquer retirée"},m=e=>String(e??"").replace(/[&<>"']/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[a]),z=e=>new Intl.NumberFormat("fr-FR",{style:"currency",currency:"EUR"}).format(e/100),re=()=>({cart:[],orders:[]});function M(e){if(typeof window>"u")return re();try{const a=JSON.parse(localStorage.getItem(je(e))||localStorage.getItem(wa(e))||(e.id==="takeaway"?localStorage.getItem(ya):null)||"null");return!a||typeof a!="object"?re():{cart:Me(a.cart,E(e)),orders:Array.isArray(a.orders)?a.orders:[]}}catch{return re()}}function K(e,a){localStorage.setItem(je(e),JSON.stringify(a))}function Ve(e){return De(M(e).cart)}function _a(e,a,t=[]){const s=M(e);ue(s.cart,E(e),a,t),K(e,s)}function xa(e,a,t){const s=E(e),i=M(e);i.cart.some(r=>r.key===a)?Ie(i.cart,a,t):t===1&&ue(i.cart,s,a),K(e,i)}function ka(e,a,t){if(!e.serviceModes.includes("takeaway"))throw new Error("La commande à emporter n’est pas disponible ici.");const s=E(e),i=M(e),r=i.cart.map(l=>{const c=s.find(d=>d.id===l.id);return{id:c.id,name:c.name,quantity:l.quantity,removedIngredients:l.removedIngredients,priceCents:W(c)}});if(!r.length)throw new Error("Ajoutez au moins un article à votre panier.");const n=a.trim();if(!n)throw new Error("Indiquez un nom pour le retrait.");const o={id:String(Date.now()),customer:n.slice(0,80),note:t.trim().slice(0,280),items:r,totalCents:r.reduce((l,c)=>l+c.priceCents*c.quantity,0),status:"received",serviceMode:"takeaway",table:null,createdAt:new Date().toISOString()};return i.orders.unshift(o),i.cart=[],K(e,i),o}function $a(e,a){const t=M(e),s=t.orders.find(r=>r.id===a),i=s?U.indexOf(s.status):-1;i<0||i>=U.length-1||(s.status=U[i+1],K(e,t))}function Be(e,a,t=!1){const s=new URLSearchParams({profile:e.id,service:"takeaway",order:a.id});return e.establishmentId&&e.establishmentId!=="all"&&s.set("establishment",e.establishmentId),`/demo-restau/order/1042${t?"/confirmation":""}?${s}`}function ne(e,a){return Te(a,E(e))}function V(e,a,t){return`<div class="takeaway-empty"><h2>${e}</h2><p>Commandez en quelques gestes, sans numéro de table.</p><a class="button button--primary" href="${a}">${t}</a></div>`}function Ca(e,a){const t=M(a),s=Ve(a),i=E(a),r=Ne(a),n=a.activeRestaurant||(a.id==="group"?a.portfolio[0]:a.identity.name);if(e.includes("/product/")){const o=new URLSearchParams(window.location.search).get("item"),l=o?i.find(c=>c.id===o):i[0];return l?Ee(l):'<div class="customer-page-title"><h1>Plat introuvable</h1><a href="/demo-restau">Revenir à la carte</a></div>'}if(e==="/demo-restau"||e.includes("/category/"))return i.length?`<section class="restaurant-hero takeaway-hero">
      <img src="${m(i[0].image)}" alt="${m(i[0].name)} préparé à emporter">
      <div class="restaurant-hero__overlay"></div>
      <div class="restaurant-hero__content"><span class="restaurant-hero__eyebrow">${m(a.customer.eyebrow)} · à emporter</span>
        <h1>${m(n)}</h1><p>${m(a.customer.description)} Commandez à emporter et retirez ${r}, sans numéro de table.</p>
        <div class="restaurant-meta"><span>Retrait sur place</span><span>Préparation estimée : 20–25 min</span></div>
      </div>
    </section>
    <section class="customer-section"><div><span class="section-kicker">La carte à emporter</span><h2>Choisissez, on prépare.</h2></div><span class="table-pill">À emporter</span></section>
    <div class="food-grid">${i.map(o=>`<article class="food-card">
       <a href="/demo-restau/product/burger?item=${encodeURIComponent(o.id)}" class="food-card__image"><img src="${m(o.image)}" alt="${m(o.name)}" loading="lazy">${o.tag?`<span class="food-card__tag">${m(o.tag)}</span>`:""}</a>
       <div class="food-card__body"><div><h3><a href="/demo-restau/product/burger?item=${encodeURIComponent(o.id)}">${m(o.name)}</a></h3><p>${m(o.detail)}</p><a class="food-card__allergens" href="/demo-restau/product/burger?item=${encodeURIComponent(o.id)}">Allergènes : ${o.allergens.length?m(o.allergens.join(", ")):"non renseignés"} · Voir le détail</a>${o.removableIngredients.length?`<a class="food-card__options" href="/demo-restau/product/burger?item=${encodeURIComponent(o.id)}">Personnaliser le plat →</a>`:""}</div>
         <div class="food-card__footer"><strong>${m(o.price)}</strong><button type="button" class="food-card__add" data-takeaway-add="${m(o.id)}" aria-label="Ajouter ${m(o.name)} sans modification au panier">+</button></div>
      </div></article>`).join("")}</div>
    <div class="takeaway-continue"><a class="button button--primary" href="/demo-restau/cart">Voir mon panier${s?` · ${s} article${s>1?"s":""}`:""}</a></div>`:`<header class="customer-page-title"><span class="section-kicker">À emporter</span><h1>${m(n)}</h1><p>La carte est vide pour le moment.</p></header>`;if(e==="/demo-restau/cart")return s?`<header class="customer-page-title"><span class="section-kicker">À emporter</span><h1>Votre panier</h1><p>${s} article${s>1?"s":""} · Retrait ${r} · Sans numéro de table</p></header>
     <div class="cart-list">${t.cart.map(o=>{const l=i.find(c=>c.id===o.id);return`<article class="cart-item">
         <img src="${m(l.image)}" alt="${m(l.name)}"><div><h2>${m(l.name)}</h2><p class="${o.removedIngredients.length?"cart-item__removal":""}">${o.removedIngredients.length?`À préparer sans ${m(o.removedIngredients.join(", "))}`:"Recette standard"}</p><strong>${z(W(l)*o.quantity)}</strong></div>
       <div class="quantity-control"><button type="button" data-takeaway-remove="${m(o.key)}" aria-label="Retirer une ${m(l.name)}">−</button><span>${o.quantity}</span><button type="button" data-takeaway-add="${m(o.key)}" aria-label="Ajouter une ${m(l.name)} avec les mêmes modifications">+</button></div>
      </article>`}).join("")}</div>
     ${t.cart.some(o=>o.removedIngredients.length)?'<p class="cart-reminder">Vos demandes de retrait sont rappelées ci-dessus et seront indiquées à la cuisine.</p>':""}
    <aside class="order-summary"><div><span>Sous-total</span><strong>${z(ne(a,t.cart))}</strong></div>
      <div><span>Retrait ${r}</span><strong>Gratuit</strong></div><div class="order-summary__total"><span>Total à régler au retrait</span><strong>${z(ne(a,t.cart))}</strong></div>
      <a href="/demo-restau/checkout" class="button button--primary">Continuer vers le retrait</a><small>Commande enregistrée sur cet appareil uniquement, sans transmission au restaurant.</small></aside>`:`<header class="customer-page-title"><span class="section-kicker">À emporter</span><h1>Votre panier</h1></header>${V("Votre panier est vide","/demo-restau","Voir la carte")}`;if(e==="/demo-restau/checkout")return s?`<header class="customer-page-title"><span class="section-kicker">Dernière étape · à emporter</span><h1>Retrait ${r}</h1><p>Cette commande n’est associée à aucune table. Indiquez le nom à annoncer au comptoir.</p></header>
      <form class="checkout-card form-stack" data-takeaway-checkout>
        <div class="cart-choice-summary"><strong>Vos plats</strong>${t.cart.map(o=>{const l=i.find(c=>c.id===o.id);return`<p>${o.quantity} × ${m(l.name)}${o.removedIngredients.length?` · Sans ${m(o.removedIngredients.join(", "))}`:""}</p>`}).join("")}</div>
        <label class="form-field"><span class="form-field__label">Nom pour le retrait</span><input class="form-control" name="customer" autocomplete="name" maxlength="80" placeholder="Votre prénom" required></label>
        <label class="form-field"><span class="form-field__label">Instructions (facultatif)</span><textarea class="form-control" name="note" rows="3" maxlength="280" placeholder="Une précision pour l’équipe ?"></textarea></label>
        <div class="takeaway-pickup"><strong>Retrait estimé : 20–25 min</strong><span>Règlement au retrait · ${z(ne(a,t.cart))}</span></div>
         <p class="takeaway-disclaimer">Votre commande apparaîtra dans l’espace de préparation de ce navigateur, sans paiement ni transmission au restaurant.</p>
         <button class="button button--primary form-submit" type="submit">Confirmer la commande</button>
        <p role="alert" data-takeaway-error></p>
      </form>`:`<header class="customer-page-title"><h1>Finaliser la commande</h1></header>${V("Votre panier est vide","/demo-restau","Voir la carte")}`;if(e.includes("/order/")){const o=new URLSearchParams(window.location.search).get("order"),l=t.orders.find(d=>d.id===o)||(o?null:t.orders[0]);if(!l)return`<header class="customer-page-title"><h1>Suivi de commande</h1></header>${V("Aucune commande à suivre","/demo-restau","Voir la carte")}`;const c=U.indexOf(l.status);return`<header class="customer-page-title customer-page-title--center"><span class="confirmation-mark">✓</span><span class="section-kicker">Commande #${m(l.id.slice(-6))}</span>
      <h1>${e.includes("confirmation")?"C’est commandé !":le[l.status]}</h1>
       <p>Retrait ${r} pour ${m(l.customer)} · ${z(l.totalCents)}</p></header>
       <div class="cart-choice-summary checkout-card"><strong>Vos plats</strong>${l.items.map(d=>`<p>${d.quantity} × ${m(d.name||"Plat")}${d.removedIngredients?.length?` · Sans ${m(d.removedIngredients.join(", "))}`:""}</p>`).join("")}</div>
      <ol class="order-timeline">${["Commande reçue","En préparation","Prête au retrait","Retirée"].map((d,p)=>`<li class="${p<c?"is-done":p===c?"is-active":""}"><span></span><div><strong>${d}</strong><small>${p===c?p===2?`Vous pouvez venir retirer votre commande ${r}`:"Statut actuel":""}</small></div></li>`).join("")}</ol>
       <div class="takeaway-order-footer"><p>Le statut est mis à jour depuis l’espace de préparation de ce navigateur, sans transmission au restaurant.</p><a href="/demo-restau/orders">Voir mes commandes</a></div>`}return e==="/demo-restau/orders"?`<header class="customer-page-title"><span class="section-kicker">À emporter</span><h1>Mes commandes</h1><p>Suivez la préparation et retrouvez votre numéro de retrait.</p></header>
      ${t.orders.length?t.orders.map(o=>`<a href="${Be(a,o)}" class="order-card"><div><span class="food-card__tag">${le[o.status]||"Commande"}</span><h2>#${m(o.id.slice(-6))} · ${m(o.customer)}</h2><p>${o.items.reduce((l,c)=>l+c.quantity,0)} articles · Retrait ${r}</p></div><strong>${z(o.totalCents)} →</strong></a>`).join(""):V("Aucune commande pour le moment","/demo-restau","Voir la carte")}`:e==="/demo-restau/account"?`<header class="customer-page-title"><span class="section-kicker">${m(n)}</span><h1>Votre espace client</h1><p>Commandez à emporter sans compte, ou accédez aux pages de votre compte client.</p></header>
       <div class="takeaway-empty"><h2>Un compte pour vos prochaines visites</h2><p>La connexion n’est pas encore disponible ici. Vos commandes restent sur cet appareil.</p>
        <div class="auth-account-actions"><a class="button button--primary" href="/login">Se connecter</a><a class="button button--quiet" href="/register">Créer un compte client</a></div>
        <a href="/demo-restau/orders">Voir les commandes sur cet appareil</a></div>`:`<header class="customer-page-title"><span class="section-kicker">${m(n)}</span><h1>Votre espace</h1><p>Commandez à emporter, sans créer de compte ni réserver une table.</p></header>
    <div class="takeaway-empty"><a class="button button--primary" href="/demo-restau/orders">Suivre mes commandes</a></div>`}function _e(e,a){if(!a.serviceModes.includes("takeaway"))return'<div class="takeaway-empty"><h1>Commandes à emporter désactivées</h1><p>Ce restaurant propose uniquement des commandes à table.</p><a href="/app/orders" class="button button--primary">Voir les commandes</a></div>';const{orders:t}=M(a),s=E(a),i=Ne(a),r=a.activeRestaurant||a.identity.name;if(e.startsWith("/app/floor")||e.startsWith("/app/waiter")||e.startsWith("/app/onboarding"))return`<div class="takeaway-empty"><span class="section-kicker">Restaurant sans tables</span><h1>Pas de plan de salle à configurer</h1><p>${m(r)} prépare des commandes pour un retrait ${i}, sans table ni QR code de salle.</p><a class="button button--primary" href="/app/takeaway">Voir les commandes à emporter</a></div>`;const n=t.filter(p=>p.status!=="collected"),o=e.includes("/history")||new URLSearchParams(window.location.search).get("view")==="history",l=o?t.filter(p=>p.status==="collected"):n,c=e==="/app/dashboard",d=c?"Service à emporter":e==="/app/kitchen"?"Préparation cuisine":"Commandes à emporter";return`<div class="page-header"><div><span class="page-header__meta">${m(r)} · Retrait ${i}</span><h1>${d}</h1><p>Les commandes à emporter sont identifiées par le nom de retrait, sans numéro de table.</p></div>
    <a class="button button--primary" href="/demo-restau?service=takeaway">Voir la carte client ↗</a></div>
    <div class="takeaway-stats">
      <article class="stat-card"><span class="stat-card__title">À préparer</span><strong class="stat-card__value">${n.filter(p=>p.status==="received").length}</strong></article>
      <article class="stat-card"><span class="stat-card__title">En préparation</span><strong class="stat-card__value">${n.filter(p=>p.status==="preparing").length}</strong></article>
      <article class="stat-card"><span class="stat-card__title">Prêtes au retrait</span><strong class="stat-card__value">${n.filter(p=>p.status==="ready").length}</strong></article>
    </div>
    <section class="dash-card takeaway-board"><div class="card-header"><div><span class="section-kicker">Flux de préparation</span><h2 class="card-title">${c?"Commandes actives":d}</h2></div>
      <a href="${o?"/app/takeaway":"/app/takeaway?view=history"}" class="card-action">${o?"Commandes actives":"Historique"}</a></div>
      ${l.length?l.map(p=>`<article class="takeaway-ticket">
        <div class="takeaway-ticket__top"><div><span class="food-card__tag">${le[p.status]||"Commande"}</span><h3>#${m(p.id.slice(-6))} · ${m(p.customer)}</h3></div><strong>${z(p.totalCents)}</strong></div>
        <ul>${p.items.map(h=>{const g=s.find(u=>u.id===h.id);return`<li><div><strong>${h.quantity} × ${m(h.name||g?.name||"Plat retiré de la carte")}</strong>${h.removedIngredients?.length?`<small>Sans ${m(h.removedIngredients.join(", "))}</small>`:""}</div><span>${z(h.priceCents*h.quantity)}</span></li>`}).join("")}</ul>
        ${p.note?`<p class="takeaway-ticket__note">Note : ${m(p.note)}</p>`:""}
        <div class="takeaway-ticket__bottom"><small>À emporter · Retrait ${i} · ${new Date(p.createdAt).toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"})}</small>
        ${we[p.status]?`<button type="button" class="button button--primary" data-takeaway-advance="${m(p.id)}">${we[p.status]}</button>`:'<span class="badge badge--success">Commande terminée</span>'}</div>
      </article>`).join(""):`<div class="takeaway-empty"><h3>${o?"Aucune commande terminée":"Aucune commande en attente"}</h3><p>Les commandes passées depuis la carte client sur ce navigateur apparaîtront ici.</p><a href="/demo-restau?service=takeaway">Ouvrir la carte client</a></div>`}
    </section><p class="takeaway-disclaimer">Ces commandes restent sur cet appareil et ne sont pas synchronisées entre appareils.</p>`}const me=e=>`restauria:table-cart:v1:${e.id}:${e.establishmentId||"all"}`;function I(e){if(typeof window>"u")return[];try{return Me(JSON.parse(localStorage.getItem(me(e))||"[]"),T(e))}catch{return[]}}function Pa(e,a,t=[]){const s=I(e);ue(s,T(e),a,t),localStorage.setItem(me(e),JSON.stringify(s))}function Sa(e,a,t){const s=I(e);Ie(s,a,t),localStorage.setItem(me(e),JSON.stringify(s))}function Ra(e){return De(I(e))}function xe(e){return Te(I(e),T(e))}const ve=e=>`restauria:table-orders:v1:${e.id}:${e.establishmentId||"all"}`,F=["received","preparing","ready","served"],ge={received:"Reçue en cuisine",preparing:"En préparation",ready:"Prête à servir",served:"Servie"},ke={received:"Commencer la préparation",preparing:"Marquer prête",ready:"Marquer servie"},$=e=>String(e??"").replace(/[&<>"']/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[a]),G=e=>new Intl.NumberFormat("fr-FR",{style:"currency",currency:"EUR"}).format(e/100);function j(e){if(typeof window>"u")return[];try{const a=JSON.parse(localStorage.getItem(ve(e))||"[]");return Array.isArray(a)?a:[]}catch{return[]}}function za(e){if(!e.serviceModes.includes("table"))throw new Error("La commande à table n’est pas disponible ici.");const a=I(e);if(!a.length)throw new Error("Votre panier est vide.");const t=T(e),s=a.map(r=>{const n=t.find(o=>o.id===r.id);if(!n)throw new Error("Un plat du panier n’est plus sur la carte.");return{id:n.id,name:n.name,quantity:r.quantity,removedIngredients:[...r.removedIngredients],priceCents:W(n)}}),i={id:`${Date.now()}${Math.random().toString(36).slice(2,8).padEnd(6,"0")}`,table:"Table 4",serviceMode:"table",status:"received",createdAt:new Date().toISOString(),items:s,totalCents:s.reduce((r,n)=>r+n.quantity*n.priceCents,0)};return localStorage.setItem(ve(e),JSON.stringify([i,...j(e)])),localStorage.removeItem(`restauria:table-cart:v1:${e.id}:${e.establishmentId||"all"}`),i}function Aa(e,a){const t=j(e),s=t.find(r=>r.id===a),i=s?F.indexOf(s.status):-1;i<0||i===F.length-1||(s.status=F[i+1],localStorage.setItem(ve(e),JSON.stringify(t)))}function Ue(e,a,t=!1){const s=new URLSearchParams({profile:e.id,service:"table",order:a.id});return e.establishmentId&&e.establishmentId!=="all"&&s.set("establishment",e.establishmentId),`/demo-restau/order/1042${t?"/confirmation":""}?${s}`}function La(e,a=!1){const t=typeof window>"u"?null:new URLSearchParams(window.location.search).get("order"),s=j(e).find(r=>r.id===t);if(!s)return'<header class="customer-page-title"><h1>Commande introuvable</h1><p>Retrouvez vos commandes passées sur cet appareil.</p><a href="/demo-restau/orders">Mes commandes</a></header>';const i=F.indexOf(s.status);return`<header class="customer-page-title customer-page-title--center"><span class="confirmation-mark">✓</span>
    <span class="section-kicker">Commande #${$(s.id.slice(-6))} · ${$(s.table)}</span>
    <h1>${a?"Envoyée en cuisine !":ge[s.status]}</h1>
    <p>Votre commande est enregistrée dans la cuisine de ce navigateur.</p></header>
    <div class="checkout-card cart-choice-summary"><strong>Vos plats</strong>
      ${s.items.map(r=>`<p>${r.quantity} × ${$(r.name)}${r.removedIngredients.length?` · Sans ${$(r.removedIngredients.join(", "))}`:""}</p>`).join("")}
      <strong>${G(s.totalCents)}</strong></div>
    <ol class="order-timeline">${["Reçue en cuisine","En préparation","Prête à servir","Servie"].map((r,n)=>`<li class="${n<i?"is-done":n===i?"is-active":""}"><span></span><div><strong>${r}</strong></div></li>`).join("")}</ol>
    <p class="local-order-note">Cette commande reste sur cet appareil. Elle n’est pas transmise au restaurant.</p>`}function qa(e){const a=j(e);return`<header class="customer-page-title"><span class="section-kicker">Vos repas</span><h1>Mes commandes</h1><p>Retrouvez les commandes passées depuis cet appareil.</p></header>
    ${a.length?a.map(t=>`<a href="${Ue(e,t)}" class="order-card">
      <div><span class="food-card__tag">${$(ge[t.status]||"Commande")}</span>
      <h2>Commande #${$(t.id.slice(-6))}</h2><p>${$(t.table)} · ${t.items.reduce((s,i)=>s+i.quantity,0)} article(s)</p></div><strong>${G(t.totalCents)} →</strong></a>`).join(""):'<div class="takeaway-empty"><h2>Aucune commande pour le moment</h2><a href="/demo-restau">Voir la carte</a></div>'}`}function Ma(e){const a=j(e);return`<div class="page-header"><div><span class="page-header__meta">Commandes à table</span><h1>En cuisine</h1>
    <p>Commandes reçues sur cet appareil, avec les ingrédients à retirer pour chaque plat.</p></div>
    <a class="button button--quiet" href="/demo-restau?service=table">Voir la carte client ↗</a></div>
    <section class="dash-card takeaway-board">
      <div class="card-header"><h2 class="card-title">À préparer</h2><span>${a.filter(t=>t.status!=="served").length} commande(s)</span></div>
      ${a.length?a.map(t=>`<article class="takeaway-ticket">
        <div class="takeaway-ticket__top"><div><span class="food-card__tag">${$(ge[t.status]||"Commande")}</span><h3>${$(t.table)} · #${$(t.id.slice(-6))}</h3></div><strong>${G(t.totalCents)}</strong></div>
        <ul>${t.items.map(s=>`<li><div><strong>${s.quantity} × ${$(s.name)}</strong>${s.removedIngredients.length?`<small>À préparer sans ${$(s.removedIngredients.join(", "))}</small>`:""}</div><span>${G(s.priceCents*s.quantity)}</span></li>`).join("")}</ul>
        <div class="takeaway-ticket__bottom"><small>Commande à table · ${new Date(t.createdAt).toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"})}</small>
        ${ke[t.status]?`<button type="button" class="button button--primary" data-table-advance="${$(t.id)}">${ke[t.status]}</button>`:'<span class="badge badge--success">Servie</span>'}</div>
      </article>`).join(""):'<div class="takeaway-empty"><h2>Aucune commande en attente</h2><p>Les commandes envoyées depuis la carte client apparaîtront ici.</p></div>'}
    </section><p class="takeaway-disclaimer">Commandes enregistrées uniquement sur cet appareil ; aucune transmission au restaurant.</p>`}function Ia(e,a,t,s){const i=t.includes("/login")||t.includes("/register")||t.includes("/forgot")||t.includes("/reset")||t.includes("/verify"),r=t.endsWith("/restaurant"),n=r||t==="/restaurant"||/^\/(features|pricing|contact|terms|privacy)\/restaurant$/.test(t),o=n?"/restaurant":"/",l=n?"/restaurant":"",c=n?"/":"/restaurant";return i?`
      <div class="auth-shell">
        <aside class="auth-sidebar">
          <div class="auth-sidebar-content">
            <a class="brand-mark" href="${o}" aria-label="Restauria, accueil" style="color: #fff;">
              <span class="brand-mark__symbol" aria-hidden="true" style="background: #fff; color: var(--color-forest);">R</span>
              <span class="brand-mark__name" style="color: #fff;">Restauria</span>
            </a>
            <div>
               <blockquote>${r?"Un service plus fluide, de la salle à la cuisine.":"Retrouvez vos bonnes adresses, vos commandes et toutes vos envies gourmandes."}</blockquote>
               <cite>${r?"L’espace des restaurateurs":"Votre espace client Restauria"}</cite>
            </div>
          </div>
        </aside>
        <main id="main-content" class="auth-main reveal-on-load">
          <a class="auth-mobile-brand" href="${o}" aria-label="Restauria, accueil"><span class="brand-mark__symbol">R</span><strong>Restauria</strong></a>
          ${e}
        </main>
      </div>
    `:`
    <a class="skip-link" href="#main-content">${a("skip.content")}</a>
    <!-- Public site landmark: brand, primary navigation and account actions. -->
    <header class="marketing-header">
      <div class="marketing-header__inner">
        <a class="brand-mark" href="${o}" aria-label="Restauria, accueil">
          <span class="brand-mark__symbol" aria-hidden="true">R</span>
          <span class="brand-mark__name">Restauria</span>
        </a>
        <button class="marketing-menu-toggle" type="button" aria-label="Ouvrir la navigation" aria-expanded="false" data-public-menu-toggle>
          <span></span><span></span><span></span>
        </button>
        <nav class="marketing-nav" aria-label="Navigation principale">
          ${n?"":'<a href="/restaurants" class="marketing-nav__link">Restaurants</a>'}
          <a href="/features${l}" class="marketing-nav__link">Découvrir</a>
          <a href="/pricing${l}" class="marketing-nav__link">${n?"Tarifs pro":"Coût côté client"}</a>
          <a href="/contact${l}" class="marketing-nav__link">Contact</a>
          <a href="${c}" class="marketing-nav__link marketing-nav__audience">${n?"Je suis client":"Je suis restaurateur"}</a>
        </nav>
        <div class="marketing-actions">
          <a href="/login${l}" class="button button--quiet button--small">Connexion</a>
          <a href="/register${l}" class="button button--primary button--small">${n?"Espace pro":"Compte client"}</a>
        </div>
      </div>
    </header>
    <!-- Each route provides one primary content landmark. -->
    <main id="main-content">
      ${e}
    </main>
    <footer class="site-footer">
      <div class="footer-inner">
        <div class="footer-brand">
          <a class="brand-mark" href="${o}" aria-label="Restauria, accueil">
            <span class="brand-mark__symbol" aria-hidden="true" style="background: #fff; color: var(--color-forest);">R</span>
            <span class="brand-mark__name" style="color: #fff;">Restauria</span>
          </a>
          <p>${n?"Un aperçu des outils de gestion pour les restaurants.":"Explorez la carte, choisissez votre façon de commander et savourez le moment."}</p>
        </div>
        <div class="footer-nav">
          <div class="footer-col">
            <h4>Produit</h4>
            ${n?"":'<a href="/restaurants">Restaurants</a>'}
            <a href="/features${l}">Découvrir</a>
            <a href="/pricing${l}">${n?"Tarifs pro":"Coût côté client"}</a>
            <a href="${c}">${n?"Espace client":"Espace restaurateur"}</a>
            <a href="/pages">Route Directory</a>
            <a href="/design-docs">Documentation design</a>
          </div>
          <div class="footer-col">
            <h4>Support</h4>
            <a href="/contact${l}">Contact</a>
            <a href="/terms${l}">Conditions (${n?"restaurateur":"client"})</a>
            <a href="/privacy${l}">Confidentialité (${n?"restaurateur":"client"})</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© Restauria.</span>
        <span>Une expérience pensée pour le plaisir de la table.</span>
      </div>
    </footer>
  `}function Da(e,a,t){const s=t.id==="group",i=t.serviceModes.includes("table"),r=t.serviceModes.includes("takeaway"),n=i?j(t).filter(d=>d.status!=="served").length:0,o=s?t.activeRestaurant||"Tous les restaurants":t.identity.name;let l=`
    <aside class="sidebar" id="primary-sidebar" aria-label="Navigation principale">
      <div class="sidebar__brand">
        <a class="brand-mark" href="/app/dashboard" aria-label="Restauria">
          <span class="brand-mark__symbol" aria-hidden="true" style="background: var(--color-${t.identity.color}-soft); color: var(--color-${t.identity.color}-deep, var(--color-coral));">${t.identity.initials}</span>
          <div class="d-flex flex-column">
            <span class="brand-mark__name">${t.identity.name}</span>
            <span class="brand-mark__tagline">${s&&!t.activeRestaurant?`${t.portfolio.length} restaurants`:o}</span>
          </div>
        </a>
      </div>
      <nav class="sidebar__nav" aria-label="Sections du restaurant">
        <p class="sidebar__label">Service</p>
        <a class="nav-link" href="/app/dashboard">
          <svg class="nav-link__icon svg-icon" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
          <span>Dashboard</span>
        </a>
        ${i?`<a class="nav-link" href="/app/floor">
          <svg class="nav-link__icon svg-icon" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
          <span>Plan de salle</span>
        </a>`:""}
        ${r?`<a class="nav-link" href="/app/takeaway">
          <svg class="nav-link__icon svg-icon" viewBox="0 0 24 24"><path d="M4 7h16l-2 14H6L4 7z"></path><path d="M8 7V5a4 4 0 0 1 8 0v2"></path></svg>
          <span>À emporter</span>
        </a>`:""}
        <a class="nav-link" href="/app/orders">
          <svg class="nav-link__icon svg-icon" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
          <span>Commandes</span>
          ${n?`<span class="badge badge--coral ms-auto" style="padding: 0.15rem 0.4rem; font-size: 0.6rem;">${n}</span>`:""}
        </a>
        <a class="nav-link" href="/app/kitchen">
          <svg class="nav-link__icon svg-icon" viewBox="0 0 24 24"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
          <span>Cuisine</span>
        </a>
        
        <p class="sidebar__label mt-4">Gestion</p>
        <a class="nav-link" href="/app/menu">
          <svg class="nav-link__icon svg-icon" viewBox="0 0 24 24"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path></svg>
          <span>Menu & Carte</span>
        </a>
        <a class="nav-link" href="/app/staff">
          <svg class="nav-link__icon svg-icon" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
          <span>Équipe</span>
        </a>
        <a class="nav-link" href="/app/analytics">
          <svg class="nav-link__icon svg-icon" viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
          <span>Analytics</span>
        </a>
        <a class="nav-link" href="/app/settings/restaurant">
          <svg class="nav-link__icon svg-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
          <span>Paramètres</span>
        </a>
      </nav>
      <div class="sidebar__footer">
        <div class="sidebar__version">
          <span class="status-dot status-dot--success" aria-hidden="true"></span>
          <span>Service Ouvert</span>
        </div>
      </div>
    </aside>
  `;l=l.replace(`class="nav-link" href="${a}"`,`class="nav-link is-active" href="${a}"`);let c=`
    <header class="topbar">
      <button class="topbar__menu" type="button" aria-controls="primary-sidebar" aria-expanded="false" data-menu-toggle>
        <svg class="svg-icon" viewBox="0 0 24 24"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
      </button>
      <div class="breadcrumbs" aria-label="Fil d’Ariane">
        ${s?`
        <select class="form-control" data-establishment-select aria-label="Établissement affiché" style="width: auto; display: inline-block; padding: 0.2rem 1.5rem 0.2rem 0.5rem; height: auto; border: none; font-weight: 700; background-color: transparent;">
          <option value="all" ${t.establishmentId==="all"?"selected":""}>Tous les restaurants</option>
          <option value="bouchon" ${t.establishmentId==="bouchon"?"selected":""}>Le Petit Bouchon</option>
          <option value="napoli" ${t.establishmentId==="napoli"?"selected":""}>Bella Napoli</option>
          <option value="halles" ${t.establishmentId==="halles"?"selected":""}>Atelier des Halles</option>
        </select>
        `:`<span class="breadcrumbs__root">${o}</span>`}
        <span class="breadcrumbs__separator" aria-hidden="true">/</span>
        <span class="breadcrumbs__current">App</span>
      </div>
      <div class="topbar__actions">
        <button class="topbar-action-btn position-relative" aria-label="Notifications">
          <svg class="svg-icon svg-icon--sm" viewBox="0 0 24 24"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
          <span class="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
            <span class="visually-hidden">New alerts</span>
          </span>
        </button>
        <button class="avatar-button avatar-button--${t.identity.color}" type="button" aria-label="Profil"><span>${t.identity.initials}</span></button>
      </div>
    </header>
  `;return`
    <a class="skip-link" href="#main-content">Aller au contenu principal</a>
    <div class="app-frame">
      ${l}
      <div class="app-content">
        ${c}
        <main class="main-content" id="main-content">
          <div class="reveal-on-load">
            ${e}
          </div>
        </main>
      </div>
    </div>
  `}function Ta(e,a,t){let s=`
    <aside class="sidebar sidebar--admin" id="primary-sidebar" aria-label="Navigation Admin">
      <div class="sidebar__brand">
        <a class="brand-mark" href="/admin/dashboard" aria-label="Restauria Admin">
          <span class="brand-mark__symbol" aria-hidden="true">R</span>
          <span class="brand-mark__name text-white">Platform Admin</span>
        </a>
      </div>
      <nav class="sidebar__nav" aria-label="Sections Admin">
        <p class="sidebar__label">Overview</p>
        <a class="nav-link" href="/admin/dashboard">
          <svg class="nav-link__icon svg-icon" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
          <span>Dashboard</span>
        </a>
        <a class="nav-link" href="/admin/restaurants">
          <svg class="nav-link__icon svg-icon" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
          <span>Restaurants</span>
        </a>
        <a class="nav-link" href="/admin/cuisines"><span>Types de cuisine</span></a>
        <a class="nav-link" href="/admin/products"><span>Produits de référence</span></a>
        <a class="nav-link" href="/admin/users">
          <svg class="nav-link__icon svg-icon" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
          <span>Users</span>
        </a>
        <p class="sidebar__label mt-4">Business</p>
        <a class="nav-link" href="/admin/subscriptions">
          <svg class="nav-link__icon svg-icon" viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line></svg>
          <span>Subscriptions</span>
        </a>
        <a class="nav-link" href="/admin/orders">
          <svg class="nav-link__icon svg-icon" viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
          <span>Transactions</span>
        </a>
        <a class="nav-link" href="/admin/support">
          <svg class="nav-link__icon svg-icon" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
          <span>Support</span>
          <span class="badge badge--coral ms-auto" style="padding: 0.15rem 0.4rem; font-size: 0.6rem;">12</span>
        </a>
        <a class="nav-link" href="/admin/settings">
          <svg class="nav-link__icon svg-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
          <span>Platform Settings</span>
        </a>
      </nav>
      <div class="sidebar__footer">
        <div class="sidebar__version">
          <span class="status-dot status-dot--success" aria-hidden="true"></span>
          <span>Systems Normal</span>
        </div>
      </div>
    </aside>
  `;return s=s.replace('href="'+a+'"','href="'+a+'" class="is-active"'),`
    <a class="skip-link" href="#main-content">Aller au contenu principal</a>
    <div class="app-frame">
      ${s}
      <div class="app-content">
        
    <header class="topbar">
      <button class="topbar__menu" type="button" aria-controls="primary-sidebar" aria-expanded="false" data-menu-toggle>
        <svg class="svg-icon" viewBox="0 0 24 24"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
      </button>
      <div class="breadcrumbs" aria-label="Fil d’Ariane">
        <span class="breadcrumbs__root">Restauria Admin</span>
        <span class="breadcrumbs__separator" aria-hidden="true">/</span>
        <span class="breadcrumbs__current">Operations</span>
      </div>
      <div class="topbar__actions">
        <button class="avatar-button avatar-button--admin" type="button" aria-label="Profil"><span>AD</span></button>
      </div>
    </header>
  
        <main class="main-content" id="main-content">
          <div class="reveal-on-load">
            ${e}
          </div>
        </main>
      </div>
    </div>
  `}function Ea(e,a,t){const s=t.activeRestaurant||(t.id==="group"?t.portfolio[0]:t.identity.name),i=de(t)==="takeaway",r=i?Ve(t):Ra(t),n=t.id==="takeaway"?"au camion":"sur place";return`
    <div class="customer-frame">
      <header class="customer-header">
        <a href="/demo-restau" class="customer-brand">
          <span class="customer-brand__mark" aria-hidden="true" style="background: var(--color-${t.identity.color});">${t.identity.initials}</span>
          <span>
            <strong>${s}</strong>
              <small><span class="status-dot status-dot--success"></span> ${i?`À emporter · Retrait ${n}`:"Ouvert · Service jusqu’à 23h"}</small>
          </span>
        </a>
        <div class="d-flex align-items-center gap-3">
          <a href="/demo-restau/account" class="customer-header__action" aria-label="Compte">
            <svg class="svg-icon svg-icon--sm" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          </a>
           <a href="/demo-restau/cart" class="customer-header__action position-relative" aria-label="Panier, ${r} article${r>1?"s":""}">
            <svg class="svg-icon" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
             ${r?`<span class="position-absolute translate-middle badge rounded-pill cart-badge">${r}</span>`:""}
          </a>
        </div>
      </header>
      <main id="main-content" class="customer-main reveal-on-load">
        ${t.serviceModes.length>1?`<nav class="order-mode-switch" aria-label="Type de commande"><span>Comment souhaitez-vous commander ?</span><div><a href="/demo-restau?service=table" class="${i?"":"is-active"}" ${i?"":'aria-current="page"'}>Sur place · table</a><a href="/demo-restau?service=takeaway" class="${i?"is-active":""}" ${i?'aria-current="page"':""}>À emporter · sans table</a></div></nav>`:""}
        ${e}
      </main>
      <nav class="customer-nav">
        <a href="/demo-restau" class="customer-nav-link ${a==="/demo-restau"?"fw-bold":""}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
          Menu
        </a>
        <a href="/demo-restau/orders" class="customer-nav-link ${a==="/demo-restau/orders"?"fw-bold":""}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
          Commandes
        </a>
        <a href="/demo-restau/account" class="customer-nav-link ${a==="/demo-restau/account"?"fw-bold":""}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="7" r="4"></circle><path d="M5.5 21a6.5 6.5 0 0 1 13 0"></path></svg>
          Compte
        </a>
      </nav>
    </div>
  `}const w=e=>String(e??"").replace(/[&<>"']/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[a]),ja={"/admin/restaurants":{meta:"Portfolio clients",description:"Suivez la santé, l’activité et la valeur de chaque établissement.",cols:["Restaurant","Offre","Volume 30 j","Équipe","Santé","Dernière activité"],stats:[["1 492","établissements"],["€184k","MRR estimé"],["86%","actifs ce mois"],["23","à surveiller"]],rows:[['<div class="admin-entity"><span class="admin-entity__avatar">PB</span><span><a href="/admin/restaurants/1">Le Petit Bouchon</a><small>Lyon · #RST-1048</small></span></div>','<span class="badge badge--success">Pro</span>','<div class="cell-stack"><strong>€38 420</strong><small>1 284 commandes</small></div>','<div class="cell-stack"><strong>14 membres</strong><small>9 actifs aujourd’hui</small></div>','<span class="badge badge--success">Excellent</span>','<div class="cell-stack"><strong>Il y a 4 min</strong><small>Menu publié</small></div>'],['<div class="admin-entity"><span class="admin-entity__avatar admin-entity__avatar--sage">BN</span><span><a href="/admin/restaurants/1">Bella Napoli</a><small>Paris · #RST-1047</small></span></div>','<span class="badge badge--success">Business</span>','<div class="cell-stack"><strong>€62 180</strong><small>2 106 commandes</small></div>','<div class="cell-stack"><strong>21 membres</strong><small>16 actifs aujourd’hui</small></div>','<span class="badge badge--success">Excellent</span>','<div class="cell-stack"><strong>Il y a 12 min</strong><small>Paiement reçu</small></div>'],['<div class="admin-entity"><span class="admin-entity__avatar admin-entity__avatar--sand">CM</span><span><a href="/admin/restaurants/1">Café Marais</a><small>Paris · #RST-1039</small></span></div>','<span class="badge badge--neutral">Indépendant</span>','<div class="cell-stack"><strong>€18 760</strong><small>742 commandes</small></div>','<div class="cell-stack"><strong>8 membres</strong><small>5 actifs aujourd’hui</small></div>','<span class="badge badge--warning">À surveiller</span>','<div class="cell-stack"><strong>Il y a 1 h</strong><small>2 erreurs webhook</small></div>'],['<div class="admin-entity"><span class="admin-entity__avatar">AL</span><span><a href="/admin/restaurants/1">Atelier des Halles</a><small>Bordeaux · #RST-1032</small></span></div>','<span class="badge badge--success">Pro</span>','<div class="cell-stack"><strong>€31 940</strong><small>1 018 commandes</small></div>','<div class="cell-stack"><strong>12 membres</strong><small>8 actifs aujourd’hui</small></div>','<span class="badge badge--success">Stable</span>','<div class="cell-stack"><strong>Hier, 23:48</strong><small>Service clôturé</small></div>'],['<div class="admin-entity"><span class="admin-entity__avatar admin-entity__avatar--sage">MV</span><span><a href="/admin/restaurants/1">Maison Verdi</a><small>Nice · #RST-1019</small></span></div>','<span class="badge badge--success">Business</span>','<div class="cell-stack"><strong>€54 210</strong><small>1 692 commandes</small></div>','<div class="cell-stack"><strong>18 membres</strong><small>12 actifs aujourd’hui</small></div>','<span class="badge badge--warning">Paiement requis</span>','<div class="cell-stack"><strong>Hier, 18:22</strong><small>Facture échouée</small></div>'],['<div class="admin-entity"><span class="admin-entity__avatar admin-entity__avatar--sand">SC</span><span><a href="/admin/restaurants/1">Sépia Cantine</a><small>Nantes · #RST-1008</small></span></div>','<span class="badge badge--neutral">Essai</span>','<div class="cell-stack"><strong>€6 840</strong><small>238 commandes</small></div>','<div class="cell-stack"><strong>5 membres</strong><small>3 actifs aujourd’hui</small></div>','<span class="badge badge--neutral">Onboarding</span>','<div class="cell-stack"><strong>2 sept.</strong><small>QR codes générés</small></div>']]},"/admin/users":{meta:"Identités & accès",description:"Contrôlez les rôles, les accès et l’engagement des utilisateurs de la plateforme.",cols:["Utilisateur","Rôle","Établissements","Connexion","Sécurité","Statut"],stats:[["8 746","utilisateurs"],["6 184","actifs sur 30 j"],["312","invitations"],["98,7%","comptes vérifiés"]],rows:[['<div class="admin-entity"><span class="admin-entity__avatar">PD</span><span><a href="/admin/users/1">Pierre Dubois</a><small>pierre@bouchon.fr</small></span></div>',"Propriétaire",'<div class="cell-stack"><strong>Le Petit Bouchon</strong><small>Accès complet</small></div>','<div class="cell-stack"><strong>Aujourd’hui, 14:32</strong><small>Lyon · Chrome</small></div>','<span class="badge badge--success">2FA actif</span>','<span class="badge badge--success">Actif</span>'],['<div class="admin-entity"><span class="admin-entity__avatar admin-entity__avatar--sage">SL</span><span><a href="/admin/users/1">Sofia Laurent</a><small>sofia@bellanapoli.fr</small></span></div>',"Manager",'<div class="cell-stack"><strong>Bella Napoli</strong><small>Salle & équipe</small></div>','<div class="cell-stack"><strong>Aujourd’hui, 13:08</strong><small>Paris · Safari</small></div>','<span class="badge badge--success">2FA actif</span>','<span class="badge badge--success">Actif</span>'],['<div class="admin-entity"><span class="admin-entity__avatar admin-entity__avatar--sand">JM</span><span><a href="/admin/users/1">Jules Martin</a><small>jules@cafemarais.fr</small></span></div>',"Propriétaire",'<div class="cell-stack"><strong>Café Marais</strong><small>Accès complet</small></div>','<div class="cell-stack"><strong>Hier, 22:41</strong><small>Paris · Mobile</small></div>','<span class="badge badge--warning">2FA absent</span>','<span class="badge badge--success">Actif</span>'],['<div class="admin-entity"><span class="admin-entity__avatar">AC</span><span><a href="/admin/users/1">Ana Costa</a><small>ana@maisonverdi.fr</small></span></div>',"Comptable",'<div class="cell-stack"><strong>Maison Verdi</strong><small>Facturation seule</small></div>','<div class="cell-stack"><strong>28 août, 09:16</strong><small>Nice · Firefox</small></div>','<span class="badge badge--success">SSO</span>','<span class="badge badge--neutral">Inactif 7 j</span>'],['<div class="admin-entity"><span class="admin-entity__avatar admin-entity__avatar--sage">TG</span><span><a href="/admin/users/1">Tom Garcia</a><small>tom@sépia-cantine.fr</small></span></div>',"Serveur",'<div class="cell-stack"><strong>Sépia Cantine</strong><small>Commandes & tables</small></div>','<div class="cell-stack"><strong>Jamais</strong><small>Invitation envoyée</small></div>','<span class="badge badge--neutral">En attente</span>','<span class="badge badge--warning">Invité</span>']]},"/admin/subscriptions":{meta:"Revenus récurrents",description:"Analysez les abonnements, renouvellements et risques de perte de revenu.",cols:["Compte","Plan","MRR","Cycle","Paiement","Renouvellement"],stats:[["€184k","MRR"],["€2,21M","ARR"],["3,2%","churn mensuel"],["€12,4k","à risque"]],rows:[['<div class="admin-entity"><span class="admin-entity__avatar">PB</span><span><a href="/admin/subscriptions/1">Le Petit Bouchon</a><small>#SUB-9912</small></span></div>','<span class="badge badge--success">Pro</span>',"99 €","Mensuel",'<span class="badge badge--success">Payé</span>','<div class="cell-stack"><strong>14 oct.</strong><small>Visa •••• 4242</small></div>'],['<div class="admin-entity"><span class="admin-entity__avatar admin-entity__avatar--sage">BN</span><span><a href="/admin/subscriptions/1">Bella Napoli</a><small>#SUB-9908</small></span></div>','<span class="badge badge--success">Business</span>',"189 €","Annuel",'<span class="badge badge--success">Payé</span>','<div class="cell-stack"><strong>2 jan. 2027</strong><small>SEPA</small></div>'],['<div class="admin-entity"><span class="admin-entity__avatar admin-entity__avatar--sand">CM</span><span><a href="/admin/subscriptions/1">Café Marais</a><small>#SUB-9874</small></span></div>','<span class="badge badge--neutral">Indépendant</span>',"49 €","Mensuel",'<span class="badge badge--warning">Relance J+2</span>','<div class="cell-stack"><strong>8 sept.</strong><small>Carte expirée</small></div>'],['<div class="admin-entity"><span class="admin-entity__avatar">AL</span><span><a href="/admin/subscriptions/1">Atelier des Halles</a><small>#SUB-9841</small></span></div>','<span class="badge badge--success">Pro</span>',"99 €","Mensuel",'<span class="badge badge--success">Payé</span>','<div class="cell-stack"><strong>21 sept.</strong><small>Visa •••• 1887</small></div>'],['<div class="admin-entity"><span class="admin-entity__avatar admin-entity__avatar--sage">MV</span><span><a href="/admin/subscriptions/1">Maison Verdi</a><small>#SUB-9793</small></span></div>','<span class="badge badge--success">Business</span>',"189 €","Mensuel",'<span class="badge badge--warning">Échec</span>','<div class="cell-stack"><strong>Nouvelle tentative</strong><small>Demain, 08:00</small></div>']]},"/admin/orders":{meta:"Flux financiers",description:"Inspectez les paiements, remboursements et frais traités sur la plateforme.",cols:["Transaction","Restaurant","Client","Montant","Canal","Statut","Date"],stats:[["€42 550","volume 24 h"],["1 864","transactions"],["€22,83","panier moyen"],["0,8%","échecs"]],rows:[['<div class="cell-stack"><a href="/admin/orders/1042"><strong>#PAY-1042</strong></a><small>pi_3Q42…J8f</small></div>',"Le Petit Bouchon","Table 4","45,00 €","QR à table",'<span class="badge badge--success">Payée</span>',"Aujourd’hui, 14:26"],['<div class="cell-stack"><a href="/admin/orders/1042"><strong>#PAY-1041</strong></a><small>pi_3Q41…N2a</small></div>',"Bella Napoli","À emporter","68,50 €","En ligne",'<span class="badge badge--success">Payée</span>',"Aujourd’hui, 14:19"],['<div class="cell-stack"><a href="/admin/orders/1042"><strong>#PAY-1040</strong></a><small>pi_3Q40…P7x</small></div>',"Café Marais","Table 12","24,90 €","Terminal",'<span class="badge badge--warning">En revue</span>',"Aujourd’hui, 13:58"],['<div class="cell-stack"><a href="/admin/orders/1042"><strong>#PAY-1039</strong></a><small>re_3Q39…K4d</small></div>',"Maison Verdi","Table 2","112,00 €","QR à table",'<span class="badge badge--neutral">Remboursée</span>',"Aujourd’hui, 13:44"],['<div class="cell-stack"><a href="/admin/orders/1042"><strong>#PAY-1038</strong></a><small>pi_3Q38…M1c</small></div>',"Atelier des Halles","Table 8","37,50 €","Terminal",'<span class="badge badge--success">Payée</span>',"Aujourd’hui, 13:31"],['<div class="cell-stack"><a href="/admin/orders/1042"><strong>#PAY-1037</strong></a><small>pi_3Q37…V9s</small></div>',"Sépia Cantine","Click & collect","18,00 €","En ligne",'<span class="badge badge--warning">Échouée</span>',"Aujourd’hui, 13:12"]]},"/admin/support":{meta:"Centre de support",description:"Priorisez les demandes selon leur urgence, leur ancienneté et leur impact client.",cols:["Ticket","Client","Priorité","Catégorie","Assigné à","SLA","Statut"],stats:[["24","tickets ouverts"],["3","urgents"],["2 h 08","réponse moyenne"],["92%","SLA respecté"]],rows:[['<div class="cell-stack"><a href="/admin/support/T-1"><strong>#T-4092 · Import PDF bloqué</strong></a><small>Créé il y a 38 min</small></div>',"Le Petit Bouchon",'<span class="badge badge--warning">Urgente</span>',"Menu","Nora B.",'<strong class="text-coral">22 min</strong>','<span class="badge badge--warning">En cours</span>'],['<div class="cell-stack"><a href="/admin/support/T-1"><strong>#T-4091 · Échec de paiement</strong></a><small>Créé il y a 1 h</small></div>',"Maison Verdi",'<span class="badge badge--warning">Haute</span>',"Facturation","Alex M.","<strong>48 min</strong>",'<span class="badge badge--warning">En attente</span>'],['<div class="cell-stack"><a href="/admin/support/T-1"><strong>#T-4088 · QR code illisible</strong></a><small>Créé il y a 3 h</small></div>',"Café Marais",'<span class="badge badge--neutral">Normale</span>',"QR & salle","Nora B.","<strong>2 h 12</strong>",'<span class="badge badge--success">Répondu</span>'],['<div class="cell-stack"><a href="/admin/support/T-1"><strong>#T-4084 · Ajouter un établissement</strong></a><small>Créé hier, 17:40</small></div>',"Bella Napoli",'<span class="badge badge--neutral">Basse</span>',"Compte","Sam K.","<strong>6 h</strong>",'<span class="badge badge--neutral">Planifié</span>'],['<div class="cell-stack"><a href="/admin/support/T-1"><strong>#T-4079 · Synchronisation cuisine</strong></a><small>Créé hier, 11:18</small></div>',"Atelier des Halles",'<span class="badge badge--warning">Haute</span>',"KDS","Alex M.","<strong>Échu 18 min</strong>",'<span class="badge badge--warning">Escaladé</span>']]}};function $e(e,a,t){const s=ja[e.path],i=s?.cols||e.cols||[],r=s?.rows||e.data||[];let n=`
    <div class="page-header">
      <div>
        <span class="page-header__meta">${s?.meta||"Data Grid"}</span>
        <h2>${a(e.title)}</h2>
        ${s?`<p class="page-header__description">${s.description}</p>`:""}
      </div>
      <div class="d-flex gap-2">
        <button type="button" class="button button--quiet" data-history-back>
          <svg class="svg-icon svg-icon--sm" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
          Exporter
        </button>
        <button type="button" class="button button--primary" data-history-back>
          <svg class="svg-icon svg-icon--sm" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          Nouveau
        </button>
      </div>
    </div>
    ${s?`<div class="admin-table-stats">${s.stats.map(([o,l])=>`<div><strong>${o}</strong><span>${l}</span></div>`).join("")}</div>`:""}
    <div class="dash-card p-0 overflow-hidden">
      <div class="admin-table-toolbar p-3 border-bottom d-flex justify-content-between align-items-center bg-canvas">
        <div class="input-with-icon" style="max-width: 300px;">
          <svg class="svg-icon svg-icon--sm" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          <input type="text" class="form-control" placeholder="Rechercher..." style="height: 2.2rem; font-size: 0.8rem;" />
        </div>
        <div class="admin-table-filters">
          ${s?'<button class="filter-chip is-active">Tous</button><button class="filter-chip">Actifs</button><button class="filter-chip">À surveiller</button>':""}
          <button class="icon-button icon-button--small" aria-label="Filtrer"><svg class="svg-icon svg-icon--sm" viewBox="0 0 24 24"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg></button>
        </div>
      </div>
      <div class="table-wrap border-0 radius-0">
        <table class="data-table">
          <thead><tr>
  `;return i.forEach(o=>n+=`<th>${o}</th>`),n+='<th width="50"></th></tr></thead><tbody>',r&&r.forEach(o=>{n+=`<tr class="${s?"admin-table-row":"reveal-on-load"}">`,o.forEach((l,c)=>{let d=l;typeof l=="string"&&!l.includes("<")&&(l==="Actif"||l==="Payée"||l==="Prêt"||l==="Terminé")?d=`<span class="badge badge--success">${l}</span>`:typeof l=="string"&&!l.includes("<")&&(l==="En cours"||l==="En préparation"||l==="Ouvert"||l==="Occupée")?d=`<span class="badge badge--warning">${l}</span>`:typeof l=="string"&&!l.includes("<")&&l.includes("€")&&(d=`<strong>${l}</strong>`),n+=`<td>${d}</td>`}),n+=`<td>
         <button class="icon-button icon-button--small border-0 shadow-none" aria-label="Actions de la ligne"><svg class="svg-icon svg-icon--sm" viewBox="0 0 24 24"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></button>
      </td></tr>`}),n+=`</tbody></table></div>
    <div class="p-3 bg-canvas d-flex justify-content-between align-items-center text-muted text-xs">
       <span>Affichage 1 à ${r.length} sur ${s?Math.max(r.length*7,r.length):r.length}</span>
      <div class="d-flex gap-2">
        <button class="icon-button icon-button--small bg-surface" disabled><svg class="svg-icon svg-icon--sm" viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"></polyline></svg></button>
        <button class="icon-button icon-button--small bg-surface" disabled><svg class="svg-icon svg-icon--sm" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"></polyline></svg></button>
      </div>
    </div>
  </div>`,n}function Ce(e,a,t){let s=`
    <div class="page-header max-w-800 mx-auto">
      <div>
        <span class="page-header__meta">Édition</span>
        <h2>${a(e.title)}</h2>
      </div>
    </div>
    
    <div class="dash-card max-w-800 mx-auto p-4">
      <form data-prototype-form class="form-stack">
  `;return e.fields&&e.fields.forEach(i=>{const r=i.toLowerCase().includes("email")?"email":i.toLowerCase().includes("mot de passe")?"password":"text";s+=`
        <label class="form-field">
          <span class="form-field__label">${a(i)}</span>
          <input type="${r}" placeholder="${a(i)}..." class="form-control" />
          <span class="form-field__hint">Saisissez ${a(i).toLowerCase()}</span>
        </label>
      `}),s+=`
        <div class="form-actions">
          <button type="button" class="button button--quiet" data-history-back>${a("btn.cancel")}</button>
          <button type="button" class="button button--primary" data-history-back>${a("btn.save")}</button>
        </div>
      </form>
    </div>
  `,s}function Na(e,a,t){return`
    <div class="page-header">
      <div>
        <h2>${a(e.title)}</h2>
      </div>
    </div>
    <div class="dash-card p-5 text-center d-flex flex-column align-items-center justify-content-center" style="min-height: 400px; background: var(--color-canvas);">
      <div class="avatar avatar--sage mb-4" style="width: 4rem; height: 4rem;">
        <svg class="svg-icon svg-icon--lg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
      </div>
      <p class="text-muted" style="font-size: 1.1rem; max-width: 500px; line-height: 1.6;">${a(e.desc||"")}</p>
      <div class="mt-4">
        <button type="button" class="button button--quiet" data-history-back>${a("btn.back")}</button>
      </div>
    </div>
  `}const Va=[{id:"burger",name:"Burger du Bouchon",detail:"Bœuf maturé, cheddar affiné, sauce maison",price:"16,50 €",image:"/images/menu-burger.jpg",tag:"Signature"},{id:"egg",name:"Œuf parfait forestier",detail:"Crème de champignons, noisettes torréfiées",price:"12 €",image:"/images/menu-egg.png",tag:"Chef"},{id:"pavlova",name:"Pavlova aux agrumes",detail:"Meringue, crème légère et fruits de saison",price:"9 €",image:"/images/menu-pavlova.jpg",tag:"Nouveau"}];function Pe(e,a=!1){return`<article class="food-card ${a?"food-card--compact":""}">
    <a href="/demo-restau/product/burger?item=${encodeURIComponent(e.id)}" class="food-card__image">
      <img src="${w(e.image)}" alt="${w(e.name)}" loading="lazy">
      ${e.tag?`<span class="food-card__tag">${w(e.tag)}</span>`:""}
    </a>
    <div class="food-card__body">
      <div><h3>${w(e.name)}</h3><p>${w(e.detail)}</p><a class="food-card__allergens" href="/demo-restau/product/burger?item=${encodeURIComponent(e.id)}">Allergènes : ${e.allergens?.length?w(e.allergens.join(", ")):"non renseignés"} · Voir le détail</a></div>
      <div class="food-card__footer"><strong>${w(e.price)}</strong><a href="/demo-restau/product/burger?item=${encodeURIComponent(e.id)}" class="food-card__add" aria-label="Découvrir ${w(e.name)}">→</a></div>
    </div>
  </article>`}function Ba(e,a,t,s){const i=s?s.customer:{eyebrow:"Cuisine de saison · Lyon",description:"Une cuisine française généreuse, préparée minute avec des produits locaux."},r=s?.activeRestaurant||(s&&s.id==="group"?s.portfolio[0]:s?s.identity.name:"Le Petit Bouchon"),n=s?T(s):Va;if(e==="/demo-restau")return`<section class="restaurant-hero">
      <img src="/images/hero.jpg" alt="Table dressée et cuisine">
      <div class="restaurant-hero__overlay"></div>
      <div class="restaurant-hero__content">
        <span class="restaurant-hero__eyebrow">${i.eyebrow}</span>
        <h1>${r}</h1>
        <p>${i.description}</p>
        <div class="restaurant-meta"><span>Cuisine de saison</span><span>Fait maison</span></div>
      </div>
    </section>
    <section class="customer-section customer-section--intro">
      <div><span class="section-kicker">Bienvenue à table</span><h2>Qu’est-ce qui vous ferait plaisir ?</h2></div>
      <span class="table-pill">Table 4</span>
    </section>
    <nav class="menu-categories" aria-label="Catégories du menu">
      <a href="/demo-restau" class="is-active">À la une</a><a href="/demo-restau/category/boissons">Entrées</a><a href="/demo-restau/category/boissons">Plats</a><a href="/demo-restau/category/boissons">Desserts</a><a href="/demo-restau/category/boissons">Boissons</a>
    </nav>
    <aside class="menu-story">
      <div><span class="section-kicker">La carte</span><h2>Des recettes à découvrir</h2><p>Découvrez les plats et choisissez les ingrédients à retirer selon vos envies.</p></div>
      <img src="/images/feature-kitchen.jpg" alt="Le chef prépare le menu du marché">
    </aside>
    <section class="customer-section"><div><span class="section-kicker">Les incontournables</span><h2>Les favoris de nos habitués</h2></div><a href="/demo-restau/category/boissons">Voir toute la carte</a></section>
    <div class="food-grid">${n.length?n.map(o=>Pe(o)).join(""):"<p>La carte de ce restaurant est vide pour le moment.</p>"}</div>
    <section class="restaurant-proof"><div><strong>4,8/5</strong><span>Une adresse appréciée</span></div><blockquote>“Des assiettes généreuses, un service attentionné et une vraie personnalité.”</blockquote></section>`;if(e.includes("/product/")){const o=typeof window<"u"?new URLSearchParams(window.location.search).get("item"):null,l=o?n.find(c=>c.id===o):n[0];return l?Ee(l):'<div class="customer-page-title"><h1>Plat introuvable</h1><p>Ce plat n’est plus sur la carte.</p><a href="/demo-restau">Revenir à la carte</a></div>'}if(e==="/demo-restau/cart"){const o=s?I(s):[];if(!o.length)return'<div class="customer-page-title"><h1>Votre panier</h1><p>Votre panier est vide.</p><a href="/demo-restau">Choisir un plat</a></div>';const l=(xe(s)/100).toFixed(2).replace(".",",");return`<header class="customer-page-title"><span class="section-kicker">Votre sélection</span><h1>Panier</h1><p>${o.reduce((c,d)=>c+d.quantity,0)} article(s) · Table 4</p></header>
    <div class="cart-list">${o.map(c=>{const d=n.find(p=>p.id===c.id);return`<article class="cart-item"><img src="${w(d.image)}" alt="${w(d.name)}"><div><h2>${w(d.name)}</h2><p class="${c.removedIngredients.length?"cart-item__removal":""}">${c.removedIngredients.length?`À préparer sans ${w(c.removedIngredients.join(", "))}`:"Recette standard"}</p><strong>${(parseFloat(d.price.replace(",","."))*c.quantity).toFixed(2).replace(".",",")} €</strong></div><div class="quantity-control"><button type="button" data-table-remove="${w(c.key)}" aria-label="Retirer une ${w(d.name)}">−</button><span>${c.quantity}</span><button type="button" data-table-add="${w(c.key)}" aria-label="Ajouter une ${w(d.name)} avec les mêmes modifications">+</button></div></article>`}).join("")}</div>
    ${o.some(c=>c.removedIngredients.length)?'<p class="cart-reminder">Vos demandes de retrait sont rappelées ci-dessus et seront indiquées à la cuisine.</p>':""}
    <aside class="order-summary"><div><span>Sous-total</span><strong>${l} €</strong></div><div><span>Service</span><strong>Inclus</strong></div><div class="order-summary__total"><span>Total</span><strong>${l} €</strong></div><form data-table-send><button type="submit" class="button button--primary">Envoyer en cuisine</button><p role="alert" data-table-error></p></form><small>Envoi à la cuisine sur cet appareil uniquement ; le restaurant ne reçoit pas cette commande.</small></aside>`}if(e.includes("/order/"))return La(s,e.includes("confirmation"));if(e==="/demo-restau/orders")return qa(s);if(e.includes("/category/"))return`<header class="customer-page-title"><a href="/demo-restau" class="section-kicker">← Toute la carte</a><h1>${a.title}</h1><p>Une sélection fraîche, maison et pensée pour accompagner votre repas.</p></header>
    <nav class="menu-categories" aria-label="Catégories du menu"><a href="/demo-restau">À la une</a><a class="is-active" href="${e}">${a.title}</a><a href="/demo-restau/category/boissons">Sans alcool</a><a href="/demo-restau/category/boissons">Vins</a></nav>
    <div class="food-grid">${n.length?n.map(o=>Pe(o,!0)).join(""):"<p>La carte est vide pour le moment.</p>"}</div>`;if(e==="/demo-restau/checkout"){const o=s?I(s):[];return o.length?`<header class="customer-page-title"><span class="section-kicker">Votre sélection</span><h1>Votre commande</h1><p>Table 4 · Aucun paiement en ligne.</p></header>
    <div class="checkout-card cart-choice-summary"><h2>Vos plats personnalisés</h2>${o.map(l=>{const c=n.find(d=>d.id===l.id);return`<p>${l.quantity} × ${w(c.name)}${l.removedIngredients.length?` · À préparer sans ${w(l.removedIngredients.join(", "))}`:""}</p>`}).join("")}<strong>Total : ${(xe(s)/100).toFixed(2).replace(".",",")} €</strong><form data-table-send><button type="submit" class="button button--primary">Envoyer en cuisine</button><p role="alert" data-table-error></p></form><p>Cette commande apparaîtra en cuisine sur cet appareil uniquement, sans transmission au restaurant.</p><a href="/demo-restau/cart">Modifier mon panier</a></div>`:'<div class="customer-page-title"><h1>Panier vide</h1><a href="/demo-restau">Choisir un plat</a></div>'}return`<header class="customer-page-title"><span class="section-kicker">${r}</span><h1>${a.title}</h1><p>Gérez vos informations et préférences pour une expérience personnalisée.</p></header>
    ${e==="/demo-restau/account"?'<div class="checkout-card"><h2>Votre espace client</h2><p>La carte est accessible sans compte. La connexion n’est pas encore disponible ici.</p><div class="auth-account-actions"><a class="button button--primary" href="/login">Se connecter</a><a class="button button--quiet" href="/register">Créer un compte client</a></div><small>Aucun compte réel n’est créé.</small></div>':`<form class="checkout-card form-stack" data-prototype-form>${(a.fields||["Nom","Email","Préférences"]).map(o=>`<label class="form-field"><span class="form-field__label">${o}</span><input class="form-control" placeholder="${o}"></label>`).join("")}<button class="button button--primary" type="submit">Enregistrer</button></form>`}`}function Ua(e,a,t){const s={public:[],customer:[],app:[],admin:[]};e.forEach(d=>{s[d.layout]&&s[d.layout].push(d)});const i={public:{title:"Site public",description:"Marketing, tarifs, authentification et pages légales"},customer:{title:"Customer",description:"Parcours client à table, commande et compte"},app:{title:"App restaurant",description:"Service, cuisine, équipe et gestion quotidienne"},admin:{title:"Admin",description:"Pilotage de la plateforme, clients et abonnements"}},r=[{id:"small",label:"Petit",name:"Café Marais"},{id:"large",label:"Grand",name:"Bella Napoli"},{id:"group",label:"Pro",name:"Groupe Épicure"},{id:"takeaway",label:"Pizza truck",name:"Pizza Nomade"}],n=new Set(["customer","app","admin"]),o=s.public.length+(s.customer.length+s.app.length+s.admin.length)*r.length,l=d=>r.map(p=>`
    <a href="${d.path}?profile=${p.id}"
       class="button ${t?.id===p.id?"button--primary":"button--quiet"}"
       style="padding: .55rem .75rem; min-width: 5.25rem;"
       title="${p.name}">
      ${p.label}
    </a>
  `).join(""),c=Object.entries(s).map(([d,p])=>`
    <details class="dash-card p-0 mb-4" open>
      <summary class="d-flex align-items-center gap-3 p-4" style="cursor: pointer; list-style: none;">
        <div>
          <span class="section-kicker">${p.length} pages</span>
          <h2 style="font-size: 1.45rem; margin: .2rem 0;">${i[d].title}</h2>
          <p class="text-muted text-sm mb-0">${i[d].description}</p>
        </div>
        <span class="badge badge--neutral ms-auto">${n.has(d)?`${p.length*r.length} accès`:`${p.length} accès`}</span>
      </summary>
      <div style="border-top: 1px solid var(--color-line);">
        ${p.map(h=>`
          <div class="d-flex flex-wrap align-items-center gap-3 p-3" style="border-bottom: 1px solid var(--color-line);">
            <div style="flex: 1 1 22rem; min-width: 0;">
              <strong class="d-block">${a(h.title)}</strong>
              <code class="text-muted text-xs" style="overflow-wrap: anywhere;">${h.path}</code>
            </div>
            <div class="d-flex flex-wrap gap-2">
              ${n.has(d)?l(h):`<a href="${h.path}" class="button button--quiet" style="padding: .55rem .75rem;">Ouvrir</a>`}
            </div>
          </div>
        `).join("")}
      </div>
    </details>
  `).join("");return`
    <div style="max-width: 1100px; margin: 0 auto;">
      <div class="text-center mb-5 hero-dir">
        <span class="eyebrow justify-content-center mb-3"><span class="eyebrow__line"></span> TOUTES LES VUES</span>
        <h1 class="mb-3">Annuaire complet du prototype</h1>
        <p class="text-muted">Accédez aux ${e.length} pages et à leurs ${o} parcours disponibles.</p>
        <a href="/design-docs" class="button button--primary mt-3">Documentation des composants →</a>
      </div>

      <div class="dash-card p-4 mb-4">
        <div class="d-flex flex-wrap align-items-center gap-3">
          <div style="flex: 1 1 20rem;">
            <span class="section-kicker">Profils disponibles</span>
            <h2 style="font-size: 1.35rem; margin: .25rem 0;">Petit, Grand et Établissement Pro</h2>
            <p class="text-muted text-sm mb-0">Chaque page Customer, App et Admin possède un accès direct pour les trois profils.</p>
          </div>
          <div class="d-flex flex-wrap gap-2">
            ${r.map(d=>`<span class="badge badge--neutral" title="${d.name}">${d.label} · ${d.name}</span>`).join("")}
          </div>
        </div>
      </div>

      ${c}
    </div>
  `}function Fa(e){return`
    <div class="marketing-hero">
      <div class="reveal-on-load">
        <span class="eyebrow"><span class="eyebrow__line" aria-hidden="true"></span> Pour les restaurateurs</span>
        <h1>Un service mieux coordonné, de la salle à la cuisine.</h1>
        <p class="marketing-hero__lead">Découvrez la maquette de gestion Restauria : carte, commandes à table ou à emporter et suivi de préparation, dans un espace pensé pour votre équipe.</p>
        <div class="marketing-hero__cta">
          <a href="/app/dashboard" class="button button--primary">Explorer l’espace pro</a>
          <a href="/features/restaurant" class="button button--quiet">Découvrir les écrans</a>
        </div>
      </div>
      <div class="hero-visual-wrapper reveal-on-load reveal-delay-2">
        <div class="hero-visual"></div>
      </div>
    </div>

    <section class="marketing-section bg-forest" id="features">
      <div class="section-header reveal-on-load">
        <span class="eyebrow"><span class="eyebrow__line"></span> ${e("eco.eyebrow")}</span>
        <h2>${e("eco.title")}</h2>
      </div>
      <div class="bento-grid">
        <div class="bento-item bento-item--large reveal-on-load reveal-delay-1">
          <div class="bento-img-bg" style="background-image: url('/images/waiter-tablet.jpg');"></div>
          <div class="bento-item__scrim"></div>
          <div class="bento-content" style="color: #fff;">
            <h3>${e("feat2.title")}</h3>
            <p>${e("feat2.desc")}</p>
          </div>
        </div>
        <div class="bento-item bento-item--small bento-item--primary reveal-on-load reveal-delay-2">
          <div class="bento-content">
            <h3 style="font-family: var(--font-display); font-size: 3.5rem; font-weight: 300;">${e("bento2.stat")}</h3>
            <p style="font-weight: 500; font-size: 1.2rem; margin-top: 1rem;">${e("bento2.desc")}</p>
          </div>
        </div>
        <div class="bento-item bento-item--small reveal-on-load reveal-delay-1" style="background: var(--color-canvas); color: var(--color-ink);">
          <div class="bento-content">
            <h3 style="color: var(--color-ink);">${e("bento3.title")}</h3>
            <p style="color: var(--color-ink-soft);">${e("bento3.desc")}</p>
          </div>
        </div>
        <div class="bento-item bento-item--large reveal-on-load reveal-delay-2">
          <div class="bento-img-bg" style="background-image: url('/images/chef-plating.jpg');"></div>
          <div class="bento-item__scrim"></div>
          <div class="bento-content" style="color: #fff;">
            <h3>${e("bento1.title")}</h3>
            <p>${e("bento1.desc")}</p>
            <a href="/features/restaurant" class="button button--primary mt-3" style="border: 1px solid rgba(255,255,255,0.2); background: transparent;">${e("bento1.link")}</a>
          </div>
        </div>
      </div>
    </section>

    <section class="marketing-section bg-sand">
      <div class="bento-grid">
        <div class="bento-item bento-item--full reveal-on-load">
          <div>
            <h2 style="font-size: 2.5rem; margin-bottom: 1.5rem;">${e("bento4.title")}</h2>
            <p style="font-size: 1.15rem; color: var(--color-ink-soft); line-height: 1.6; margin-bottom: 2rem;">${e("bento4.desc")}</p>
            <a href="/demo-restau" class="button button--forest">Voir la carte</a>
          </div>
          <div style="aspect-ratio: 1; background: url('/images/beautiful-dish.jpg') center / cover; border-radius: var(--radius-md); box-shadow: var(--shadow-lift);"></div>
        </div>
      </div>
    </section>
  `}function Oa(e){return`
    <div class="marketing-hero" style="padding-bottom: 4rem;">
      <div class="reveal-on-load">
        <span class="eyebrow"><span class="eyebrow__line" aria-hidden="true"></span> L'expérience Restauria</span>
        <h1>Une plateforme, <br>tous vos besoins.</h1>
        <p class="marketing-hero__lead">Un aperçu des écrans conçus pour suivre la salle, la cuisine et les commandes à emporter. Certaines interactions sont simulées dans cette maquette.</p>
      </div>
    </div>
    
    <section class="marketing-section" style="padding-top: 2rem;">
      <div class="feature-list">
        <div class="feature-card reveal-on-load reveal-delay-1">
          <div class="feature-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path></svg>
          </div>
          <h3>Menu Digital Interactif</h3>
          <p>Visualisez une carte enrichie de photos et de descriptions. La mise à jour partagée des produits et disponibilités reste à connecter dans une version réelle.</p>
        </div>
        <div class="feature-card reveal-on-load reveal-delay-2">
          <div class="feature-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
          </div>
          <h3>Plan de Salle Visuel</h3>
          <p>Parcourez le plan de salle et imaginez le suivi du service table par table.</p>
        </div>
        <div class="feature-card reveal-on-load reveal-delay-3">
          <div class="feature-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
          </div>
          <h3>Écran Cuisine (KDS)</h3>
          <p>Découvrez l’espace de préparation. Les commandes à emporter peuvent changer de statut sur ce navigateur uniquement.</p>
        </div>
        <div class="feature-card reveal-on-load reveal-delay-1">
          <div class="feature-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="5" width="20" height="14" rx="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line></svg>
          </div>
          <h3>Paiement à Table QR</h3>
          <p>Le parcours client présente une étape de règlement à table. Aucun paiement réel, partage d’addition ou reçu n’est généré dans cette maquette.</p>
        </div>
        <div class="feature-card reveal-on-load reveal-delay-2">
          <div class="feature-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
          </div>
          <h3>Analytics & Rapports</h3>
          <p>Explorez les exemples de tableaux de bord et de rapports. Leurs données ne représentent pas des ventes réelles.</p>
        </div>
        <div class="feature-card reveal-on-load reveal-delay-3">
          <div class="feature-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
          </div>
          <h3>Gestion de l'Équipe</h3>
          <p>Visualisez l’organisation de l’équipe prévue pour le produit. Les accès et permissions ne sont pas activés dans cette maquette.</p>
        </div>
      </div>
    </section>
  `}function Ha(e){return`
    <div class="marketing-hero" style="padding-bottom: 4rem;">
      <div class="reveal-on-load">
        <span class="eyebrow"><span class="eyebrow__line" aria-hidden="true"></span> Exemples de formules professionnelles</span>
        <h1>Des formules pour imaginer votre espace pro.</h1>
        <p class="marketing-hero__lead">Ces montants et avantages illustrent une maquette : ils ne constituent ni une offre commerciale, ni un abonnement disponible à la souscription.</p>
      </div>
    </div>
    
    <section class="marketing-section" style="padding-top: 2rem;">
      <div class="pricing-grid">
        <div class="pricing-card reveal-on-load reveal-delay-1">
          <h3>Démarrage</h3>
          <div class="price">19€<span class="price-period">/mois</span></div>
          <p style="color: var(--color-ink-soft);">Pour les très petits restaurants qui lancent leur activité.</p>
          <ul>
            <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> 1 restaurant et 10 tables</li>
            <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Carte jusqu'à 20 produits</li>
            <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Application Serveur</li>
            <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> 2 Accès Staff</li>
          </ul>
          <a href="/register/restaurant" class="button button--quiet">Voir l’inscription</a>
        </div>

        <div class="pricing-card reveal-on-load reveal-delay-2">
          <h3>Indépendant</h3>
          <div class="price">49€<span class="price-period">/mois</span></div>
          <p style="color: var(--color-ink-soft);">Pour un restaurant établi avec une carte et une salle complètes.</p>
          <ul>
            <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> 1 restaurant, tables illimitées</li>
            <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Carte et QR codes illimités</li>
            <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Écran Cuisine (KDS)</li>
            <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Analytics détaillés</li>
          </ul>
          <a href="/register/restaurant" class="button button--quiet">Voir l’inscription</a>
        </div>

        <div class="pricing-card pricing-card--featured reveal-on-load reveal-delay-2">
          <h3>Établissement Pro</h3>
          <div class="price">249€<span class="price-period">/mois</span></div>
          <p style="color: rgba(255,255,255,0.7);">Pour piloter plusieurs restaurants depuis un seul espace.</p>
          <ul>
            <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Tout de l'offre Indépendant</li>
            <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Gestion multi-restaurants</li>
            <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Vue consolidée du groupe</li>
            <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Analytics comparatifs</li>
            <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Accès Staff illimités</li>
          </ul>
          <a href="/register/restaurant" class="button button--primary" style="background: #fff; color: var(--color-forest);">Voir l’inscription</a>
        </div>
      </div>
    </section>
  `}function Ga(e){return`
    <!-- Contact page: one clear introduction, useful routes, and a labelled demo form. -->
    <header class="public-page-hero">
      <div class="public-page-hero__inner reveal-on-load">
        <span class="eyebrow"><span class="eyebrow__line" aria-hidden="true"></span> Contact</span>
        <h1>Parlons de votre restaurant.</h1>
        <p>Un établissement ou plusieurs, chaque service a ses défis. Découvrez comment Restauria peut accompagner votre équipe.</p>
      </div>
    </header>
    <section class="contact-section" aria-label="Contacter Restauria">
      <div class="contact-layout">
        <div class="contact-intro reveal-on-load">
          <span class="section-kicker">À vos côtés</span>
          <h2>Votre prochain service commence ici.</h2>
          <p>Explorez les possibilités à votre rythme. Aucun formulaire n’est connecté à une boîte de réception.</p>
          <div class="contact-links">
             <a href="/features/restaurant"><span><strong>Découvrir les écrans pro</strong><small>Salle, commande, cuisine et retraits</small></span><span aria-hidden="true">↗</span></a>
             <a href="/pricing/restaurant"><span><strong>Voir les formules illustratives</strong><small>Un aperçu, sans souscription</small></span><span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div class="contact-form-panel reveal-on-load reveal-delay-1">
          <span class="section-kicker">Votre demande</span>
          <h2>Préparez votre message</h2>
          <p>Remplissez ce formulaire pour visualiser le parcours de contact.</p>
          <form data-contact-form class="form-stack">
          <label class="form-field">
            <span class="form-field__label">Nom complet</span>
            <input type="text" name="name" class="form-control" placeholder="Jean Dupont" autocomplete="name" required />
          </label>
          <label class="form-field">
            <span class="form-field__label">Nom du restaurant</span>
            <input type="text" name="restaurant" class="form-control" placeholder="Le Petit Bouchon" autocomplete="organization" required />
          </label>
          <label class="form-field">
            <span class="form-field__label">Email professionnel</span>
            <input type="email" name="email" class="form-control" placeholder="jean@restaurant.fr" autocomplete="email" required />
          </label>
          <label class="form-field">
            <span class="form-field__label">Votre message</span>
            <textarea name="message" class="form-control" placeholder="Parlez-nous de votre projet..." rows="5" required></textarea>
          </label>
          <button type="submit" class="button button--primary form-submit">Prévisualiser ma demande <span aria-hidden="true">→</span></button>
          <p class="contact-form-note" data-contact-status role="status" aria-live="polite">Ce formulaire n’envoie pas de message.</p>
          </form>
        </div>
      </div>
    </section>
  `}function Qa(){return`
    <!-- Dedicated public error page, including links that work without browser history. -->
    <section class="not-found" aria-labelledby="not-found-title">
      <div class="not-found__inner">
        <span class="eyebrow"><span class="eyebrow__line" aria-hidden="true"></span> Page introuvable</span>
        <div class="not-found__number" aria-hidden="true">404<span>.</span></div>
        <h1 id="not-found-title">On dirait que cette page a quitté la carte.</h1>
        <p>L’adresse a peut-être changé. Reprenez depuis l’accueil ou explorez les pages les plus utiles de Restauria.</p>
        <div class="not-found__actions">
          <a class="button button--primary" href="/">Retour à l’accueil <span aria-hidden="true">→</span></a>
          <a class="button button--quiet" href="/contact">Nous contacter</a>
        </div>
        <nav class="not-found__links" aria-label="Autres pages utiles">
          <span>Vous cherchiez peut-être</span>
          <a href="/features">Fonctionnalités <span aria-hidden="true">↗</span></a>
          <a href="/pricing">Tarifs <span aria-hidden="true">↗</span></a>
        </nav>
      </div>
    </section>
  `}function Ja(e){return`
    <header class="public-page-hero">
      <div class="public-page-hero__inner reveal-on-load">
        <span class="eyebrow"><span class="eyebrow__line" aria-hidden="true"></span> Informations légales</span>
        <h1>Conditions côté restaurateur</h1>
        <p>Un exemple de rubrique juridique pour les professionnels, non applicable à un service réel.</p>
      </div>
    </header>
    <section class="legal-section">
      <div class="legal-content reveal-on-load reveal-delay-1">
        <p class="legal-disclaimer">Maquette uniquement : ce texte n’est pas un contrat ni des conditions en vigueur. À rédiger et à faire valider avant tout lancement commercial.</p>
        <h2>Le parcours présenté</h2>
        <p>L’espace restaurateur montre des exemples de carte, de plan de salle, de commandes et de préparation. Les données affichées sont fictives ou enregistrées uniquement dans ce navigateur.</p>
        <h2>Inscription et abonnement</h2>
        <p>L’inscription, les abonnements et la facturation ne sont pas activés. Les formules affichées sont des illustrations et ne peuvent pas être souscrites depuis cette maquette.</p>
      </div>
    </section>
  `}function Wa(e){return`
    <header class="public-page-hero">
      <div class="public-page-hero__inner reveal-on-load">
        <span class="eyebrow"><span class="eyebrow__line" aria-hidden="true"></span> Informations légales</span>
        <h1>Confidentialité côté restaurateur</h1>
        <p>Une note sur le fonctionnement de la maquette professionnelle, pas une politique de confidentialité définitive.</p>
      </div>
    </header>
    <section class="legal-section">
      <div class="legal-content reveal-on-load reveal-delay-1">
        <p class="legal-disclaimer">Maquette uniquement : ce texte ne remplace pas une politique de confidentialité conforme. À faire valider avant toute collecte de données réelles.</p>
        <h2>Ce qui reste sur cet appareil</h2>
        <p>Les réglages de types de commande et les commandes sont enregistrés dans le stockage de ce navigateur. Ils ne sont pas synchronisés entre appareils ni envoyés à un restaurant.</p>
        <h2>Formulaires professionnels</h2>
        <p>Les formulaires de connexion, d’inscription et de contact sont des maquettes. Ils ne créent pas de compte et n’envoient ni email ni demande commerciale.</p>
      </div>
    </section>
  `}function Ka(e,a,t){const s=e.endsWith("/restaurant"),i=s?"/restaurant":"",r=e.includes("register")?"register":e.includes("forgot")?"forgot":e.includes("reset")?"reset":e.includes("verify")?"verify":"login",n={login:`/login${i}`,register:`/register${i}`,forgot:`/forgot-password${i}`},o=s?{login:"Accédez à votre espace de gestion.",register:"Créez votre espace pour piloter votre restaurant.",forgot:"Retrouvez l’accès à votre espace restaurateur.",reset:"Choisissez un nouveau mot de passe pour votre compte restaurateur.",verify:"Confirmez votre adresse professionnelle pour continuer."}:{login:"Connectez-vous pour retrouver votre espace et vos commandes.",register:"Créez votre espace client pour retrouver vos restaurants favoris.",forgot:"Retrouvez l’accès à votre espace client.",reset:"Choisissez un nouveau mot de passe pour votre compte client.",verify:"Confirmez votre adresse email pour continuer."},c=(r==="verify"?[]:a.fields||[]).map(g=>{const u=g.toLowerCase(),v=u.includes("email")?"email":u.includes("mot de passe")?"password":"text",b=v==="email"?"email":v==="password"?r==="register"||r==="reset"?"new-password":"current-password":u.includes("restaurant")?"organization":"name";return`<label class="form-field"><span class="form-field__label">${t(g)}</span>
      <input type="${v}" name="${v==="email"?"email":v==="password"?"password":"name"}"
        placeholder="Saisissez ${t(g).toLowerCase()}..." class="form-control" autocomplete="${b}" required></label>`}).join(""),d=s&&r==="register"?(()=>{const g=ba(),u=q().cuisines;return`<label class="form-field"><span class="form-field__label">Adresse du restaurant</span>
      <input class="form-control" name="address" autocomplete="street-address" maxlength="240"
        value="${w(g.address)}" placeholder="Numéro, rue, code postal et ville" required></label>
      <fieldset class="auth-cuisine-select" data-cuisine-selection>
        <legend>Types de cuisine <small>(1 à 5 choix)</small></legend>
        <p>Choisissez jusqu’à cinq cuisines. Ces choix sont enregistrés uniquement sur cet appareil.</p>
        <div class="auth-cuisine-select__options">${u.map(v=>`<label>
          <input type="checkbox" name="cuisineIds" value="${w(v.id)}" ${g.cuisineIds.includes(v.id)?"checked":""}>
          <span>${w(v.name)}</span></label>`).join("")}</div>
        <p role="alert" data-cuisine-error></p>
      </fieldset>`})():"",p={login:"Se connecter",register:"Créer mon compte",forgot:"Demander un lien",reset:"Modifier mon mot de passe"},h=r==="login"?`<p>Pas encore de compte ? <a href="${n.register}">Créer un compte</a></p><p><a href="${n.forgot}">Mot de passe oublié ?</a></p>`:r==="register"?`<p>Déjà un compte ? <a href="${n.login}">Se connecter</a></p>`:`<p><a href="${n.login}">Retour à la connexion</a></p>`;return`<div class="auth-header"><span class="auth-header__eyebrow">${s?"Espace restaurateur":"Espace client"}</span>
    <h1>${t(a.title||"Mon compte")}</h1><p>${o[r]}</p></div>
    ${r==="verify"?`<div class="auth-info"><p>La vérification par email n’est pas activée dans cette maquette. Aucun message n’a été envoyé.</p><a class="button button--primary" href="${n.login}">Retour à la connexion</a></div>`:`<form class="form-stack auth-form" data-auth-demo-form>
        ${c}${d}<button type="submit" class="button button--primary form-submit">${s&&r==="register"?"Enregistrer mon essai":p[r]}</button>
        <p class="auth-demo-notice">Maquette uniquement : aucun compte n’est créé et aucun email n’est envoyé. Ne saisissez pas de vrai mot de passe.</p>
        <p role="status" aria-live="polite" data-auth-status></p>
      </form>`}
    <div class="auth-footer">${r==="verify"?"":h}
      <p>${s?'<a href="/register">Vous êtes client ? Créer un compte client</a>':'<a href="/register/restaurant">Vous êtes restaurateur ? Créer un compte professionnel</a>'}</p>
    </div>`}function Se(e){const a=e&&e.id==="group",t=e?.app?.tables||{active:0,total:0},s=e?e.app.plan:"Indépendant";return`
    <div class="page-header">
      <div>
        <span class="page-header__meta">Aujourd'hui</span>
        <h2>Bonjour, l'équipe ${a?e.activeRestaurant||e.identity.name:e?e.identity.name:"Le Petit Bouchon"}</h2>
      </div>
      <div class="d-flex gap-2">
        <button class="button button--quiet"><svg class="svg-icon svg-icon--sm" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg> Configuration</button>
        <button class="button button--primary"><svg class="svg-icon svg-icon--sm" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg> Nouvelle Commande</button>
      </div>
    </div>

    <div class="dashboard-grid">
      <div class="stat-card col-span-3">
        <div class="stat-card__header">
          <span class="stat-card__title">Ventes du jour</span>
          <svg class="svg-icon svg-icon--sm stat-card__icon text-muted" viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
        </div>
        <div>
          <div class="stat-card__value">${e?e.app.orders.revenue:"1 248 €"}</div>
          <div class="stat-card__trend positive"><svg class="svg-icon svg-icon--sm" viewBox="0 0 24 24"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg> Stable</div>
        </div>
        <div class="mini-chart mt-3">
          <div class="chart-bar" style="height: 30%"></div>
          <div class="chart-bar" style="height: 50%"></div>
          <div class="chart-bar" style="height: 40%"></div>
          <div class="chart-bar" style="height: 70%"></div>
          <div class="chart-bar active" style="height: 90%"></div>
        </div>
      </div>

      <div class="stat-card col-span-3">
        <div class="stat-card__header">
          <span class="stat-card__title">Commandes</span>
          <svg class="svg-icon svg-icon--sm stat-card__icon text-muted" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
        </div>
        <div>
          <div class="stat-card__value">${e?e.app.orders.today:"47"}</div>
          <div class="stat-card__trend positive"><svg class="svg-icon svg-icon--sm" viewBox="0 0 24 24"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg> Bon flux</div>
        </div>
        <div class="mini-chart mt-3">
          <div class="chart-bar" style="height: 40%"></div>
          <div class="chart-bar" style="height: 60%"></div>
          <div class="chart-bar" style="height: 30%"></div>
          <div class="chart-bar" style="height: 50%"></div>
          <div class="chart-bar active" style="height: 80%"></div>
        </div>
      </div>

      <div class="stat-card col-span-3">
        <div class="stat-card__header">
          <span class="stat-card__title">Tables Actives</span>
          <svg class="svg-icon svg-icon--sm stat-card__icon text-muted" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
        </div>
        <div>
          <div class="stat-card__value">${e?t.active:8} / ${e?t.total:24}</div>
          <div class="stat-card__trend neutral">Occupation</div>
        </div>
        <div class="capacity-bar">
          <div class="capacity-fill" style="width: ${(e?t.total?t.active/t.total:0:.33)*100}%;"></div>
        </div>
        <div class="d-flex justify-content-between text-xs text-muted mt-2">
          <span>Plan Actuel: ${s}</span>
        </div>
      </div>

      <div class="stat-card col-span-3 bg-coral-soft border-0">
        <div class="stat-card__header">
          <span class="stat-card__title text-coral">Activité Récente</span>
        </div>
        <div class="activity-feed mt-2" style="font-size: 0.8rem;">
          ${e?e.app.activity.map(r=>`
          <div class="d-flex gap-2 mb-3 align-items-center">
            <span class="bg-canvas d-grid rounded-circle border" style="width: 2rem; height: 2rem; place-items: center; flex: 0 0 auto;">
              <svg class="svg-icon svg-icon--sm text-coral" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"></circle></svg>
            </span>
            <div class="text-ink text-sm" style="line-height: 1.2;">
              <span class="d-block">${r.text}</span>
              <span class="text-muted text-xs">${r.time}</span>
            </div>
          </div>
          `).join(""):""}
        </div>
      </div>

      <div class="dash-card col-span-8">
        <div class="card-header">
          <h3 class="card-title">Commandes en préparation (${e?e.app.orders.live:3})</h3>
          <a href="/app/orders" class="card-action">Voir tout</a>
        </div>
        <div class="live-orders">
          <div class="order-row">
            <div class="order-row__info">
              <div class="avatar avatar--sage">T4</div>
              <div class="order-row__meta">
                <span class="order-row__id">#1042</span>
                <span class="order-row__desc">En cours</span>
              </div>
            </div>
            <div class="order-row__actions d-flex align-items-center gap-3">
              <span class="text-xs text-muted fw-bold">IL Y A 5 MIN</span>
              <span class="badge badge--warning">En cuisine</span>

              <button class="icon-button icon-button--small"><svg class="svg-icon svg-icon--sm" viewBox="0 0 24 24"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg></button>
            </div>
          </div>
          <div class="order-row">
            <div class="order-row__info">
              <div class="avatar avatar--coral"><svg class="svg-icon svg-icon--sm" viewBox="0 0 24 24"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg></div>
              <div class="order-row__meta">
                <span class="order-row__id">#1043 • 12€ <span class="badge badge--neutral ms-2" style="font-size:0.5rem">À EMPORTER</span></span>
                <span class="order-row__desc">1 Salade Caesar</span>
              </div>
            </div>
            <div class="order-row__actions d-flex align-items-center gap-3">
              <span class="text-xs text-muted fw-bold">IL Y A 2 MIN</span>
              <span class="badge badge--warning">En cuisine</span>
              <button class="icon-button icon-button--small"><svg class="svg-icon svg-icon--sm" viewBox="0 0 24 24"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg></button>
            </div>
          </div>
          <div class="order-row" style="opacity: 0.7;">
            <div class="order-row__info">
              <div class="avatar avatar--sage">T8</div>
              <div class="order-row__meta">
                <span class="order-row__id">#1041 • 32€</span>
                <span class="order-row__desc">2 Plats du jour</span>
              </div>
            </div>
            <div class="order-row__actions d-flex align-items-center gap-3">
              <span class="text-xs text-muted fw-bold">IL Y A 12 MIN</span>
              <span class="badge badge--success">Prêt à servir</span>
              <button class="icon-button icon-button--small"><svg class="svg-icon svg-icon--sm" viewBox="0 0 24 24"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg></button>
            </div>
          </div>
        </div>
      </div>

      <div class="col-span-4 d-flex flex-column gap-3">
        <div class="dash-card">
          <h3 class="card-title mb-3">Actions Rapides</h3>
          <div class="action-grid">
            <a href="/app/menu" class="action-card">
              <svg class="svg-icon" viewBox="0 0 24 24"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path></svg>
              Éditer Menu
            </a>
            <a href="/app/floor/tables" class="action-card">
              <svg class="svg-icon" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg>
              Gérer Tables
            </a>
            <a href="/app/floor/qr-codes" class="action-card">
              <svg class="svg-icon" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><rect x="7" y="7" width="3" height="3"></rect><rect x="14" y="7" width="3" height="3"></rect><rect x="7" y="14" width="3" height="3"></rect><rect x="14" y="14" width="3" height="3"></rect></svg>
              QR Codes
            </a>
            <a href="/app/staff" class="action-card">
              <svg class="svg-icon" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>
              Équipe
            </a>
          </div>
        </div>

        <div class="dash-card flex-1">
          <div class="card-header mb-0">
            <h3 class="card-title">Activité</h3>
          </div>
          <div class="activity-feed">
            <div class="activity-item">
              <div class="activity-item__icon"><svg class="svg-icon svg-icon--sm" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg></div>
              <div class="activity-item__content">
                <p class="activity-item__text"><strong>Table 2</strong> a réglé l'addition (34€).</p>
                <span class="activity-item__time">Il y a 5 min</span>
              </div>
            </div>
            <div class="activity-item">
              <div class="activity-item__icon bg-coral-soft text-coral border-coral"><svg class="svg-icon svg-icon--sm" viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg></div>
              <div class="activity-item__content">
                <p class="activity-item__text">Rupture de stock signalée pour <strong>Salade Caesar</strong>.</p>
                <span class="activity-item__time">Il y a 22 min</span>
              </div>
            </div>
            <div class="activity-item">
              <div class="activity-item__icon"><svg class="svg-icon svg-icon--sm" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></div>
              <div class="activity-item__content">
                <p class="activity-item__text"><strong>Marc</strong> a commencé son service.</p>
                <span class="activity-item__time">Il y a 1 heure</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `}function Ya(e){return`
    <div class="page-header">
      <div>
        <span class="page-header__meta text-coral">Vue Opérateur</span>
        <h2>Platform Analytics</h2>
      </div>
      <div class="d-flex gap-2">
        <button class="button button--quiet"><svg class="svg-icon svg-icon--sm" viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg> System Health</button>
        <button class="button button--primary"><svg class="svg-icon svg-icon--sm" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg> Nouveau Client</button>
      </div>
    </div>

    <div class="dashboard-grid">
      <div class="stat-card col-span-3 bg-ink text-white border-0">
        <div class="stat-card__header">
          <span class="stat-card__title text-white opacity-75">Tenant MRR</span>
          <svg class="svg-icon svg-icon--sm stat-card__icon text-coral" viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
        </div>
        <div>
          <div class="stat-card__value text-white">${e?e.admin.mrr:"€114,200"}</div>
          <div class="stat-card__trend positive" style="color: #65d491;"><svg class="svg-icon svg-icon--sm" viewBox="0 0 24 24"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg> Plan ${e?e.admin.plan:""}</div>
        </div>
        <div class="mini-chart mt-3 opacity-75">
          <div class="chart-bar bg-white" style="height: 50%"></div>
          <div class="chart-bar bg-white" style="height: 60%"></div>
          <div class="chart-bar bg-white" style="height: 70%"></div>
          <div class="chart-bar bg-white" style="height: 85%"></div>
          <div class="chart-bar bg-coral" style="height: 100%"></div>
        </div>
      </div>

      <div class="stat-card col-span-3">
        <div class="stat-card__header">
          <span class="stat-card__title">Platform Restaurants Actifs</span>
        </div>
        <div>
          <div class="stat-card__value">1,280</div>
          <div class="stat-card__trend positive"><svg class="svg-icon svg-icon--sm" viewBox="0 0 24 24"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg> +12 nouveaux</div>
        </div>
        <div class="capacity-bar mt-auto">
          <div class="capacity-fill" style="width: 85%;"></div>
        </div>
        <div class="text-xs text-muted mt-2 text-end">Sur 1,492 inscrits</div>
      </div>

      <div class="stat-card col-span-3">
        <div class="stat-card__header">
          <span class="stat-card__title">Santé Tenant</span>
        </div>
        <div>
          <div class="stat-card__value" style="font-size: 1.5rem;">${e?e.admin.health:"Stable"}</div>
          <div class="stat-card__trend neutral">Stripe API 100% UP</div>
        </div>
        <div class="mini-chart mt-3">
          <div class="chart-bar" style="height: 40%"></div>
          <div class="chart-bar" style="height: 60%"></div>
          <div class="chart-bar" style="height: 30%"></div>
          <div class="chart-bar" style="height: 80%"></div>
          <div class="chart-bar active" style="height: 50%"></div>
        </div>
      </div>
      
      <div class="stat-card col-span-3">
        <div class="stat-card__header">
          <span class="stat-card__title">Tenant Tickets</span>
        </div>
        <div>
          <div class="stat-card__value">${e?e.admin.tickets:24}</div>
          <div class="stat-card__trend negative">A traiter</div>
        </div>
        <div class="capacity-bar mt-auto bg-coral-soft">
          <div class="capacity-fill bg-coral" style="width: 25%;"></div>
        </div>
        <div class="text-xs text-coral mt-2 fw-bold">SLA: 2h moyen</div>
      </div>
      
      <div class="dash-card col-span-8 p-0 overflow-hidden">
        <div class="p-3 border-bottom d-flex justify-content-between align-items-center">
          <h3 class="card-title mb-0">Récents Déploiements & Activité</h3>
          <a href="/admin/activity" class="card-action">Audit Log</a>
        </div>
        <div class="table-wrap border-0 radius-0">
          <table class="data-table">
            <thead>
              <tr><th>Client</th><th>Événement</th><th>Impact</th><th>Source</th><th>Date</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><div class="cell-stack"><strong>${e?e.admin.recentClient:"Bella Napoli"}</strong><small>#RST-1047</small></div></td>
                <td><span class="badge badge--success">Activité</span></td>
                <td><div class="cell-stack"><strong>Mise à jour</strong><small>Immédiat</small></div></td>
                <td>Self-service</td>
                <td><div class="cell-stack"><strong>Il y a 10 min</strong><small>14:22</small></div></td>
              </tr>
              <tr>
                <td><div class="cell-stack"><strong>Plateforme</strong><small>Infrastructure Europe</small></div></td>
                <td><span class="badge badge--neutral">Webhook synchronisé</span></td>
                <td><div class="cell-stack"><strong>184 événements</strong><small>0 échec</small></div></td>
                <td>Stripe</td>
                <td><div class="cell-stack"><strong>Il y a 45 min</strong><small>13:47</small></div></td>
              </tr>
              <tr>
                <td><div class="cell-stack"><strong>Le Petit Bouchon</strong><small>#RST-1048 · Lyon</small></div></td>
                <td><span class="badge badge--warning">Paiement échoué</span></td>
                <td><div class="cell-stack"><strong>99 € à risque</strong><small>Relance envoyée</small></div></td>
                <td>Facturation</td>
                <td><div class="cell-stack"><strong>Il y a 2 h</strong><small>12:32</small></div></td>
              </tr>
              <tr>
                <td><div class="cell-stack"><strong>Maison Verdi</strong><small>#RST-1019 · Nice</small></div></td>
                <td><span class="badge badge--success">Onboarding terminé</span></td>
                <td><div class="cell-stack"><strong>18 utilisateurs</strong><small>6 QR codes actifs</small></div></td>
                <td>Customer Success</td>
                <td><div class="cell-stack"><strong>Il y a 3 h</strong><small>11:18</small></div></td>
              </tr>
              <tr>
                <td><div class="cell-stack"><strong>Café Marais</strong><small>#RST-1039 · Paris</small></div></td>
                <td><span class="badge badge--warning">Ticket escaladé</span></td>
                <td><div class="cell-stack"><strong>SLA 22 min</strong><small>Menu PDF</small></div></td>
                <td>Nora B.</td>
                <td><div class="cell-stack"><strong>Il y a 4 h</strong><small>10:04</small></div></td>
              </tr>
              <tr>
                <td><div class="cell-stack"><strong>Atelier des Halles</strong><small>#RST-1032 · Bordeaux</small></div></td>
                <td><span class="badge badge--neutral">Export de données</span></td>
                <td><div class="cell-stack"><strong>12 480 lignes</strong><small>Archive prête</small></div></td>
                <td>Alex M.</td>
                <td><div class="cell-stack"><strong>Hier</strong><small>18:42</small></div></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div class="dash-card col-span-4 p-4 d-flex flex-column justify-content-center text-center bg-canvas">
        <div class="avatar avatar--coral mx-auto mb-3" style="width:3.5rem; height:3.5rem;"><svg class="svg-icon svg-icon--lg" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg></div>
        <h3 style="font-size: 1.1rem; margin-bottom: 0.5rem;">Tickets Support</h3>
        <p class="text-muted text-sm mb-4">3 tickets nécessitent une action immédiate concernant l'import PDF des menus.</p>
        <a href="/admin/support" class="button button--coral w-full">Gérer les tickets</a>
      </div>
    </div>
  `}function Za(e){const a=e?e.app.analytics:{sales:[120,180,140,200,280,310],mix:[40,30,20,10],top:[{name:"Produit 1",sales:"100",trend:"up"},{name:"Produit 2",sales:"80",trend:"up"},{name:"Produit 3",sales:"50",trend:"down"}]},t=Math.max(...a.sales),s=i=>Math.max(10,Math.floor(i/t*100));return`
    <div class="analytics-dashboard reveal-on-load">
      <!-- Header -->
      <header class="analytics-header">
        <div class="analytics-header__title">
          <h2>Vue d'ensemble</h2>
          <p>Performance sur les 7 derniers jours.</p>
        </div>
        <div class="analytics-controls">
          <div class="date-selector">
            <button class="date-selector__btn">Aujourd'hui</button>
            <button class="date-selector__btn is-active">7 derniers jours</button>
            <button class="date-selector__btn">30 jours</button>
          </div>
          <button class="button button--quiet">
            <svg class="svg-icon svg-icon--sm" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg> 
            Exporter
          </button>
        </div>
      </header>

      <!-- Storytelling Insight -->
      <div class="analytics-insight">
        <div class="analytics-insight__icon">
          <svg class="svg-icon" viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
        </div>
        <div class="analytics-insight__text">
          <strong>Activité soutenue :</strong> Le chiffre d'affaires est en hausse de <strong>+14%</strong>, porté par une excellente fréquentation lors des services du soir (jeudi et vendredi). Le ticket moyen a légèrement augmenté grâce aux suggestions de vins.
        </div>
      </div>

      <!-- Main KPIs -->
      <div class="analytics-kpis">
        <article class="kpi-card">
          <span class="kpi-card__label">Chiffre d'affaires</span>
          <strong class="kpi-card__value">${e?e.app.orders.revenue:"14 280 €"}</strong>
          <div class="kpi-card__footer">
            <div class="kpi-trend kpi-trend--up">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg> 
              +14%
            </div>
            <span class="kpi-card__compare">vs sem. dernière</span>
          </div>
        </article>
        <article class="kpi-card">
          <span class="kpi-card__label">Commandes Totales</span>
          <strong class="kpi-card__value">${e?e.app.orders.today:"502"}</strong>
          <div class="kpi-card__footer">
            <div class="kpi-trend kpi-trend--up">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg> 
              +8%
            </div>
            <span class="kpi-card__compare">vs sem. dernière</span>
          </div>
        </article>
        <article class="kpi-card">
          <span class="kpi-card__label">Ticket Moyen</span>
          <strong class="kpi-card__value">28,50 €</strong>
          <div class="kpi-card__footer">
            <div class="kpi-trend kpi-trend--up">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg> 
              +1,20 €
            </div>
            <span class="kpi-card__compare">vs sem. dernière</span>
          </div>
        </article>
        <article class="kpi-card">
          <span class="kpi-card__label">Temps d'attente (Moy)</span>
          <strong class="kpi-card__value">18 min</strong>
          <div class="kpi-card__footer">
            <div class="kpi-trend kpi-trend--up">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg> 
              -2 min
            </div>
            <span class="kpi-card__compare">vs sem. dernière</span>
          </div>
        </article>
      </div>

      <div class="analytics-grid">
        <!-- Chart: Revenue timeline -->
        <section class="chart-card col-span-8">
          <header class="chart-card__header">
            <h3 class="chart-card__title">Évolution des revenus</h3>
            <span class="kpi-card__compare">Derniers Jours</span>
          </header>
          <div class="timeline-chart" aria-label="Graphique d'évolution des revenus">
            <div class="timeline-bar-group">
              <div class="timeline-bar" style="height: ${s(a.sales[0])}%;"></div>
              <span class="timeline-label">Lun</span>
              <div class="timeline-value-tooltip">${a.sales[0]} €</div>
            </div>
            <div class="timeline-bar-group">
              <div class="timeline-bar" style="height: ${s(a.sales[1])}%;"></div>
              <span class="timeline-label">Mar</span>
              <div class="timeline-value-tooltip">${a.sales[1]} €</div>
            </div>
            <div class="timeline-bar-group">
              <div class="timeline-bar" style="height: ${s(a.sales[2])}%;"></div>
              <span class="timeline-label">Mer</span>
              <div class="timeline-value-tooltip">${a.sales[2]} €</div>
            </div>
            <div class="timeline-bar-group">
              <div class="timeline-bar is-highlight" style="height: ${s(a.sales[3])}%;"></div>
              <span class="timeline-label">Jeu</span>
              <div class="timeline-value-tooltip">${a.sales[3]} €</div>
            </div>
            <div class="timeline-bar-group">
              <div class="timeline-bar" style="height: ${s(a.sales[4])}%;"></div>
              <span class="timeline-label">Ven</span>
              <div class="timeline-value-tooltip">${a.sales[4]} €</div>
            </div>
            <div class="timeline-bar-group">
              <div class="timeline-bar" style="height: ${s(a.sales[5])}%;"></div>
              <span class="timeline-label">Sam</span>
              <div class="timeline-value-tooltip">${a.sales[5]} €</div>
            </div>
          </div>
        </section>
        <!-- Chart: Sales Mix (Categories) -->
        <section class="chart-card col-span-4">
          <header class="chart-card__header">
            <h3 class="chart-card__title">Répartition des ventes</h3>
          </header>
          <div class="sales-mix" aria-label="Répartition des ventes par catégorie">
            <div class="mix-item">
              <div class="mix-item__header">
                <span class="mix-item__title">Principal</span>
                <span class="mix-item__value">${a.mix[0]}%</span>
              </div>
              <div class="mix-item__track">
                <div class="mix-item__fill" style="width: ${a.mix[0]}%;"></div>
              </div>
            </div>
            <div class="mix-item">
              <div class="mix-item__header">
                <span class="mix-item__title">Boissons</span>
                <span class="mix-item__value">${a.mix[1]}%</span>
              </div>
              <div class="mix-item__track">
                <div class="mix-item__fill" style="width: ${a.mix[1]}%;"></div>
              </div>
            </div>
            <div class="mix-item">
              <div class="mix-item__header">
                <span class="mix-item__title">Entrées</span>
                <span class="mix-item__value">${a.mix[2]}%</span>
              </div>
              <div class="mix-item__track">
                <div class="mix-item__fill" style="width: ${a.mix[2]}%;"></div>
              </div>
            </div>
            <div class="mix-item">
              <div class="mix-item__header">
                <span class="mix-item__title">Desserts</span>
                <span class="mix-item__value">${a.mix[3]||0}%</span>
              </div>
              <div class="mix-item__track">
                <div class="mix-item__fill" style="width: ${a.mix[3]||0}%;"></div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div class="analytics-grid">
        <!-- Daypart Analysis -->
        <section class="chart-card col-span-6">
           <header class="chart-card__header">
             <h3 class="chart-card__title">Performance par service</h3>
           </header>
           <div class="daypart-comparison">
             
             <!-- Lunch -->
             <div class="daypart-card daypart-card--lunch">
               <div class="daypart-card__icon">
                 <svg class="svg-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
               </div>
               <div class="daypart-card__content">
                 <div class="daypart-card__title">Matin / Midi</div>
                 <div class="daypart-card__stats">
                   <span class="daypart-card__meta">Service actif</span>
                 </div>
               </div>
             </div>

             <!-- Dinner -->
             <div class="daypart-card daypart-card--dinner">
               <div class="daypart-card__icon">
                 <svg class="svg-icon" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
               </div>
               <div class="daypart-card__content">
                 <div class="daypart-card__title">Soir</div>
                 <div class="daypart-card__stats">
                   <span class="daypart-card__meta">Service soir</span>
                 </div>
               </div>
             </div>

           </div>
        </section>
        
        <!-- Top Items -->
        <section class="chart-card col-span-6">
           <header class="chart-card__header">
             <h3 class="chart-card__title">Produits moteurs</h3>
             <a href="/app/menu/products" class="chart-card__action">Voir la carte</a>
           </header>
           <div class="top-items-list">
             ${a.top.map((i,r)=>`
             <div class="top-item">
               <span class="top-item__rank">${r+1}</span>
               <span class="top-item__name">${i.name}</span>
               <span class="top-item__sales">${i.sales} ventes</span>
               <span class="top-item__trend is-${i.trend}">${i.trend==="up"?"+":"-"}</span>
             </div>
             `).join("")}
           </div>
        </section>
      </div>

    </div>
  `}const Xa={fr:{"nav.features":"Fonctionnalités","nav.pricing":"Tarifs","nav.contact":"Contact","nav.login":"Connexion","nav.register":"Créer un compte","language.label":"Choisir la langue","skip.content":"Aller au contenu principal","hero.eyebrow":"Plateforme multi-tenant","hero.title":"Le système nerveux central de votre restaurant.","hero.lead":"De la commande par QR code au pilotage en cuisine. Une expérience fluide et chaleureuse, conçue pour les restaurateurs exigeants et leurs clients.","hero.cta1":"Démarrer l'essai gratuit","hero.cta2":"Découvrir comment ça marche","eco.eyebrow":"L'écosystème","eco.title":"Tout ce dont vous avez besoin, rien de superflu.","feat1.title":"Menu Digital & QR","feat1.desc":"Plus qu'un simple PDF. Un menu interactivo, avec photos, gestion des indisponibilités en temps réel et prise de commande depuis la table.","feat2.title":"Application Serveur","feat2.desc":"Une interface mobile ultra-rapide pour vos équipes en salle. Prise de commande, encaissement, et communication directe avec la cuisine.","feat3.title":"Pilotage & Analytics","feat3.desc":"Analysez vos ventes, identifiez vos plats les plus populaires et suivez le taux d'occupation de vos salles avec des tableaux de bord précis.","bento1.title":"Synchronisation Cuisine","bento1.desc":"Finis les bons perdus et les erreurs de saisie. Les commandes arrivent instantanément sur l'écran de la cuisine avec les demandes spéciales clairement identifiées.","bento1.link":"En savoir plus","bento2.stat":"+42%","bento2.desc":"C'est l'augmentation moyenne du ticket moyen constatée grâce aux options et suppléments suggérés dans le menu digital Restauria.","bento3.title":"Paiement à table","bento3.desc":"Les clients règlent l'addition ou divisent la note directement depuis leur smartphone, libérant ainsi vos serveurs.","bento4.title":"Sans application à télécharger","bento4.desc":"Le client scanne, le menu s'ouvre. Aucune friction, pas de création de compte obligatoire pour commander sur place.","footer.rights":"Tous droits réservés.","footer.cgv":"CGV","footer.privacy":"Confidentialité","dir.title":"Annuaire des Routes","dir.desc":"Parcourez toutes les pages du prototype Restauria.","btn.save":"Enregistrer","btn.cancel":"Annuler","btn.back":"Retour",Accueil:"Accueil",Fonctionnalités:"Fonctionnalités",Tarifs:"Tarifs",Connexion:"Connexion","Créer un compte":"Créer un compte","Mot de passe oublié":"Mot de passe oublié",Réinitialiser:"Réinitialiser",Vérification:"Vérification",CGV:"CGV",Confidentialité:"Confidentialité",Contact:"Contact","Route Directory":"Route Directory","Connexion Restaurateur":"Connexion Restaurateur","Inscription Restaurateur":"Inscription Restaurateur","Vérification Email":"Vérification Email","Découvrez nos fonctionnalités en détail.":"Découvrez nos fonctionnalités en détail.","Nos plans d'abonnement pour tous les restaurants.":"Nos plans d'abonnement pour tous les restaurants.","Veuillez vérifier votre email pour continuer.":"Veuillez vérifier votre email pour continuer.","Conditions Générales de Vente et d'Utilisation.":"Conditions Générales de Vente et d'Utilisation.","Politique de confidentialité et RGPD.":"Politique de confidentialité et RGPD.","Consultez votre boîte mail pro.":"Consultez votre boîte mail pro.",Email:"Email","Mot de passe":"Mot de passe",Nom:"Nom","Nouveau mot de passe":"Nouveau mot de passe",Sujet:"Sujet",Message:"Message","Email Pro":"Email Pro","Nom du restaurant":"Nom du restaurant"},en:{"nav.features":"Features","nav.pricing":"Pricing","nav.contact":"Contact","nav.login":"Log in","nav.register":"Sign up","language.label":"Choose language","skip.content":"Skip to main content","hero.eyebrow":"Multi-tenant platform","hero.title":"The central nervous system of your restaurant.","hero.lead":"From QR code ordering to kitchen management. A seamless and warm experience, designed for demanding restaurateurs and their customers.","hero.cta1":"Start free trial","hero.cta2":"See how it works","eco.eyebrow":"The ecosystem","eco.title":"Everything you need, nothing you don't.","feat1.title":"Digital Menu & QR","feat1.desc":"More than just a PDF. An interactive menu, with photos, real-time availability management and ordering from the table.","feat2.title":"Waiter App","feat2.desc":"An ultra-fast mobile interface for your floor teams. Order taking, checkout, and direct communication with the kitchen.","feat3.title":"Management & Analytics","feat3.desc":"Analyze your sales, identify your most popular dishes and track your room occupancy rate with precise dashboards.","bento1.title":"Kitchen Sync","bento1.desc":"No more lost tickets and data entry errors. Orders arrive instantly on the kitchen screen with special requests clearly identified.","bento1.link":"Learn more","bento2.stat":"+42%","bento2.desc":"Average increase in average ticket observed thanks to the options and supplements suggested in the Restauria digital menu.","bento3.title":"Pay at table","bento3.desc":"Customers settle the bill or split the check directly from their smartphone, freeing up your waiters.","bento4.title":"No app to download","bento4.desc":"Customer scans, menu opens. Zero friction, no account creation required to order on site.","footer.rights":"All rights reserved.","footer.cgv":"Terms","footer.privacy":"Privacy","dir.title":"Route Directory","dir.desc":"Browse all pages in the Restauria prototype.","btn.save":"Save","btn.cancel":"Cancel","btn.back":"Go back",Accueil:"Home",Fonctionnalités:"Features",Tarifs:"Pricing",Connexion:"Login","Créer un compte":"Create an account","Mot de passe oublié":"Forgot password",Réinitialiser:"Reset",Vérification:"Verification",CGV:"Terms of Service",Confidentialité:"Privacy Policy",Contact:"Contact","Route Directory":"Route Directory","Connexion Restaurateur":"Restaurant Login","Inscription Restaurateur":"Restaurant Registration","Vérification Email":"Email Verification","Découvrez nos fonctionnalités en détail.":"Discover our features in detail.","Nos plans d'abonnement pour tous les restaurants.":"Our subscription plans for all restaurants.","Veuillez vérifier votre email pour continuer.":"Please verify your email to continue.","Conditions Générales de Vente et d'Utilisation.":"General Terms of Sale and Use.","Politique de confidentialité et RGPD.":"Privacy policy and GDPR.","Consultez votre boîte mail pro.":"Check your professional inbox.",Email:"Email","Mot de passe":"Password",Nom:"Name","Nouveau mot de passe":"New password",Sujet:"Subject",Message:"Message","Email Pro":"Professional Email","Nom du restaurant":"Restaurant Name"},es:{"nav.features":"Características","nav.pricing":"Precios","nav.contact":"Contacto","nav.login":"Iniciar sesión","nav.register":"Registrarse","language.label":"Elegir idioma","skip.content":"Ir al contenido principal","hero.eyebrow":"Plataforma multi-inquilino","hero.title":"El sistema nervioso central de su restaurante.","hero.lead":"Desde pedidos por código QR hasta gestión de cocina. Una experiencia fluida y cálida, diseñada para restauradores exigentes y sus clientes.","hero.cta1":"Prueba gratuita","hero.cta2":"Ver cómo funciona","eco.eyebrow":"El ecosistema","eco.title":"Todo lo que necesita, nada superfluo.","feat1.title":"Menú Digital y QR","feat1.desc":"Más que un simple PDF. Un menú interactivo, con fotos, gestión de disponibilidad en tiempo real y pedidos desde la mesa.","feat2.title":"App Camarero","feat2.desc":"Una interfaz móvil ultrarrápida para sus equipos de sala. Toma de pedidos, cobro y comunicación directa con la cocina.","feat3.title":"Gestión y Análisis","feat3.desc":"Analice sus ventas, identifique sus platos más populares y realice un seguimiento de la tasa de ocupación con paneles precisos.","bento1.title":"Sincronización Cocina","bento1.desc":"No más tickets perdidos ni errores. Los pedidos llegan instantáneamente a la pantalla de la cocina.","bento1.link":"Saber más","bento2.stat":"+42%","bento2.desc":"Aumento promedio del ticket medio observado gracias a las opciones y suplementos sugeridos en el menú digital.","bento3.title":"Pagar en la mesa","bento3.desc":"Los clientes pagan o dividen la cuenta directamente desde su smartphone, liberando a sus camareros.","bento4.title":"Sin app que descargar","bento4.desc":"El cliente escanea, el menú se abre. Cero fricción, sin creación de cuenta obligatoria para pedir.","footer.rights":"Todos los derechos reservados.","footer.cgv":"Términos","footer.privacy":"Privacidad","dir.title":"Directorio de Rutas","dir.desc":"Explorar todas las páginas del prototipo Restauria.","btn.save":"Guardar","btn.cancel":"Cancelar","btn.back":"Volver",Accueil:"Inicio",Fonctionnalités:"Características",Tarifs:"Precios",Connexion:"Iniciar sesión","Créer un compte":"Crear una cuenta","Mot de passe oublié":"Contraseña olvidada",Réinitialiser:"Restablecer",Vérification:"Verificación",CGV:"Condiciones de Servicio",Confidentialité:"Política de Privacidad",Contact:"Contacto","Route Directory":"Directorio de Rutas","Connexion Restaurateur":"Inicio de sesión de restaurante","Inscription Restaurateur":"Registro de restaurante","Vérification Email":"Verificación de correo","Découvrez nos fonctionnalités en détail.":"Descubre nuestras funcionalidades en detalle.","Nos plans d'abonnement pour tous les restaurants.":"Nuestros planes de suscripción para todos los restaurantes.","Veuillez vérifier votre email pour continuer.":"Por favor verifique su correo para continuar.","Conditions Générales de Vente et d'Utilisation.":"Condiciones Generales de Venta y Uso.","Politique de confidentialité et RGPD.":"Política de privacidad y RGPD.","Consultez votre boîte mail pro.":"Revise su bandeja de entrada profesional.",Email:"Correo","Mot de passe":"Contraseña",Nom:"Nombre","Nouveau mot de passe":"Nueva contraseña",Sujet:"Asunto",Message:"Mensaje","Email Pro":"Correo Profesional","Nom du restaurant":"Nombre del restaurante"}};let Fe=typeof window<"u"&&localStorage.getItem("restauria-lang")||"fr";function et(e){Fe=e,localStorage.setItem("restauria-lang",e)}function C(e){return Xa[Fe][e]||e}function at(e){return`<section class="dash-card max-w-800 mx-auto order-settings">
    <span class="section-kicker">Service · ${e.activeRestaurant||e.identity.name}</span>
    <h1>Types de commandes acceptés</h1>
    <p>Choisissez comment les clients peuvent commander dans cet établissement. Une commande à emporter ne demande jamais de numéro de table.</p>
    <form data-service-modes-form>
      <fieldset><legend>Canaux disponibles</legend>
        <label class="order-settings__choice"><input type="checkbox" name="table" ${e.serviceModes.includes("table")?"checked":""}><span><strong>Sur place · à table</strong><small>Les clients indiquent leur table et l’équipe conserve son plan de salle.</small></span></label>
        <label class="order-settings__choice"><input type="checkbox" name="takeaway" ${e.serviceModes.includes("takeaway")?"checked":""}><span><strong>À emporter · sans table</strong><small>Les clients commandent pour un retrait identifié par leur nom.</small></span></label>
      </fieldset>
      <button class="button button--primary" type="submit">Enregistrer les types de commandes</button>
      <p role="status" data-service-status></p>
    </form>
    <small>Ce réglage et les commandes restent dans ce navigateur.</small>
  </section>`}const N=(e,a="/restaurants",t="Découvrir la carte")=>`
  <section class="cm-closing" aria-label="Continuer la découverte">
    <div class="cm-wrap cm-closing__inner">
      <div><span class="cm-kicker">À votre tour</span><h2>${e}</h2></div>
      <a class="cm-btn cm-btn--rust" href="${a}">${t} <span class="cm-arrow" aria-hidden="true">↗</span></a>
    </div>
  </section>`;function tt(){return`
    <div class="cm cm-home">
      <header class="cm-home-hero">
        <div class="cm-wrap cm-home-hero__top">
          <div>
            <span class="cm-kicker">Restauria · le plaisir de choisir</span>
            <h1>Le bon moment commence <em>à la carte.</em></h1>
          </div>
          <div class="cm-home-hero__aside">
            <p>Un plat qui donne envie. Une carte qu’on prend le temps de parcourir. Sur place ou à emporter, le plaisir de choisir commence ici.</p>
            <div class="cm-actions">
              <a class="cm-btn cm-btn--rust" href="/restaurants">Trouver un restaurant <span class="cm-arrow" aria-hidden="true">↗</span></a>
            </div>
          </div>
        </div>
        <div class="cm-home-hero__photo">
          <img src="/images/hero-bistro.jpg" alt="L’atmosphère chaleureuse d’un bistrot et de sa salle" fetchpriority="high">
          <span class="cm-photo-note">Installez-vous. On s’occupe du reste.</span>
        </div>
      </header>

      <div class="cm-wrap cm-intro-strip">
        <span class="cm-kicker">Bienvenue à table</span>
        <p>La meilleure partie d’un repas ? Parfois, c’est ce moment où l’on ouvre la carte et où tout devient possible.</p>
      </div>

      <section class="cm-section" aria-labelledby="cm-home-menu-title">
        <div class="cm-wrap">
          <div class="cm-section__head">
            <div><span class="cm-kicker">Suivez votre envie</span><h2 id="cm-home-menu-title">Une carte qui se <em>savoure des yeux.</em></h2></div>
            <p>Les photos donnent le ton, les descriptions font le reste. Prenez le temps de trouver ce qui vous ressemble.</p>
          </div>
          <div class="cm-dish-grid">
            <a class="cm-dish-card" href="/demo-restau" aria-label="Découvrir la carte du restaurant de démonstration">
              <img src="/images/beautiful-dish.jpg" alt="Assiette soigneusement dressée, prête à être dégustée" loading="lazy">
              <div class="cm-dish-card__copy"><small>01 / À découvrir</small><h3>Laissez parler l’appétit.</h3><p>Ouvrir la carte <span aria-hidden="true">↗</span></p></div>
            </a>
            <a class="cm-dish-card" href="/demo-restau?profile=large&amp;service=takeaway" aria-label="Découvrir le parcours à emporter de démonstration">
              <img src="/images/pizza-nomade-hero.jpg" alt="Pizza à partager, présentée pour donner envie de la retrouver chez soi" loading="lazy">
              <div class="cm-dish-card__copy"><small>02 / À emporter</small><h3>Le dîner vous suit.</h3><p>Voir le parcours à emporter <span aria-hidden="true">↗</span></p></div>
            </a>
          </div>
          <p class="cm-caption">Images et carte présentées pour illustrer un restaurant.</p>
        </div>
      </section>

      <section class="cm-section cm-ways" aria-labelledby="cm-home-ways-title">
        <div class="cm-wrap">
          <div class="cm-section__head"><div><span class="cm-kicker">Deux façons de profiter</span><h2 id="cm-home-ways-title">À votre rythme.<br><em>À votre façon.</em></h2></div></div>
          <div class="cm-ways__grid">
            <article class="cm-way">
              <span class="cm-way__number">01 / Sur place</span>
              <h3>Prenez place, explorez.</h3>
              <p>Imaginez-vous à table : parcourez les plats, faites votre choix et découvrez le parcours de commande sur place. L’étape de validation à table reste une simulation dans ce prototype.</p>
              <a class="cm-text-link" href="/demo-restau">Découvrir l’expérience à table <span aria-hidden="true">↗</span></a>
            </article>
            <article class="cm-way">
              <span class="cm-way__number">02 / À emporter</span>
              <h3>Une envie, et c’est parti.</h3>
              <p>Composez un panier depuis la carte et suivez-le jusqu’à la confirmation. Votre commande reste dans ce navigateur : rien n’est transmis au restaurant.</p>
              <a class="cm-text-link" href="/demo-restau?profile=large&amp;service=takeaway">Essayer l’emporter <span aria-hidden="true">↗</span></a>
            </article>
          </div>
        </div>
      </section>

      <section class="cm-quote" aria-label="Notre idée du repas">
        <span class="cm-kicker cm-kicker--light">Une petite conviction</span>
        <blockquote>On ne choisit pas seulement ce qu’on mange. On choisit le moment qui va avec.</blockquote>
        <p>Restauria est une expérience de découverte, pas un service de commande en activité.</p>
      </section>

      <section class="cm-section" aria-labelledby="cm-home-story-title">
        <div class="cm-wrap cm-editorial">
          <div class="cm-editorial__image"><img src="/images/menu-pavlova.jpg" alt="Dessert gourmand présenté dans une assiette" loading="lazy"></div>
          <div class="cm-editorial__copy">
            <span class="cm-kicker">Avant la première bouchée</span>
            <h2 id="cm-home-story-title">Gardez une place pour <em>la curiosité.</em></h2>
            <p>Un dessert repéré au premier regard. Un plat découvert en lisant sa description. Une option à emporter pour prolonger la soirée chez soi. Parcourez la carte à votre rythme.</p>
            <a class="cm-text-link" href="/features">Comment ça se passe <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>
      ${N("Et si on regardait la carte ?")}
    </div>`}function st(){return`
    <div class="cm cm-features">
      <header class="cm-page-hero cm-page-hero--sand">
        <div class="cm-wrap cm-page-hero__layout">
          <div><span class="cm-kicker">L’expérience côté convive</span><h1>De la première envie au <em>dernier choix.</em></h1></div>
          <div class="cm-page-hero__aside"><p>Moins de questions pratiques, plus de place pour l’essentiel : découvrir les plats et choisir le moment qui vous fait envie.</p><div class="cm-actions"><a class="cm-btn cm-btn--rust" href="/demo-restau">Voir la carte <span class="cm-arrow" aria-hidden="true">↗</span></a></div></div>
        </div>
      </header>
      <section class="cm-section" aria-labelledby="cm-features-title">
        <div class="cm-wrap">
          <div class="cm-section__head"><div><span class="cm-kicker">Tout simplement</span><h2 id="cm-features-title">Le plaisir de choisir, <em>sans détour.</em></h2></div><p>Voici ce que vous pouvez découvrir depuis la carte.</p></div>
          <div class="cm-feature-row"><span class="cm-feature-row__index">01 / Explorer</span><h3>Une carte à feuilleter avec les yeux.</h3><p>Parcourez les catégories, regardez les photos et lisez les descriptions. Une façon agréable de passer du « je ne sais pas » au « c’est ça que je veux ».</p></div>
          <div class="cm-feature-row"><span class="cm-feature-row__index">02 / Composer</span><h3>Votre envie prend forme.</h3><p>Dans le parcours à emporter, ajoutez des plats au panier et ajustez votre sélection avant de poursuivre. Les éléments de cette commande d’essai restent uniquement dans votre navigateur.</p></div>
          <div class="cm-feature-row"><span class="cm-feature-row__index">03 / Choisir le moment</span><h3>Sur place ou à emporter ?</h3><p>Choisissez entre le service à table et le retrait à emporter. Dans les deux cas, les commandes restent sur cet appareil et ne parviennent pas au restaurant.</p></div>
          <div class="cm-feature-row"><span class="cm-feature-row__index">04 / Comprendre</span><h3>Aucune surprise au bout du chemin.</h3><p>Vous explorez une interface statique. Il n’y a ni paiement réel, ni réservation, ni envoi en cuisine, ni disponibilité garantie des plats. L’essai sert à découvrir l’expérience, tout simplement.</p></div>
          <div class="cm-feature-visual">
            <figure><img src="/images/menu-burger.jpg" alt="Burger présenté sur la carte" loading="lazy"><figcaption>Une envie salée à découvrir</figcaption></figure>
            <figure><img src="/images/menu-pavlova.jpg" alt="Pavlova présentée sur la carte" loading="lazy"><figcaption>Une note sucrée pour finir</figcaption></figure>
          </div>
        </div>
      </section>
      <section class="cm-section cm-ways" aria-labelledby="cm-feature-steps-title">
        <div class="cm-wrap">
          <div class="cm-section__head"><div><span class="cm-kicker">Le chemin le plus court</span><h2 id="cm-feature-steps-title">Trois gestes, <em>une belle idée de repas.</em></h2></div></div>
          <div class="cm-steps">
            <div class="cm-step"><span>01</span><h3>Ouvrez la carte.</h3><p>Laissez-vous guider par les images, les noms et les descriptions.</p></div>
            <div class="cm-step"><span>02</span><h3>Suivez votre envie.</h3><p>Choisissez un plat, ou plusieurs, et découvrez le parcours qui vous correspond.</p></div>
            <div class="cm-step"><span>03</span><h3>Essayez librement.</h3><p>Testez l’interface en sachant qu’aucune commande réelle ne part d’ici.</p></div>
          </div>
        </div>
      </section>
      <section class="cm-section"><div class="cm-wrap cm-note-panel"><h2>Le goût de la découverte, sans engagement.</h2><div><p>Restauria présente un exemple de restaurant et de parcours client. La démonstration ne permet pas de régler une addition, d’envoyer un plat en cuisine ou de garantir un service réel.</p><a class="cm-btn cm-btn--cream" href="/demo-restau?profile=large&amp;service=takeaway">Essayer le parcours à emporter <span class="cm-arrow" aria-hidden="true">↗</span></a></div></div></section>
      ${N("Votre prochaine envie est peut-être juste là.")}
    </div>`}function it(){return`
    <div class="cm cm-pricing">
      <header class="cm-page-hero">
        <div class="cm-wrap cm-page-hero__layout">
          <div><span class="cm-kicker">Prix & informations</span><h1>La carte d’abord. <em>Les précisions ensuite.</em></h1></div>
          <div class="cm-page-hero__aside"><p>Vous êtes ici pour découvrir une expérience de restaurant, pas pour choisir un abonnement. Voilà exactement ce que signifie essayer Restauria.</p></div>
        </div>
      </header>
      <section class="cm-section cm-ways" aria-labelledby="cm-pricing-title">
        <div class="cm-wrap">
          <div class="cm-section__head"><div><span class="cm-kicker">Ce que vous voyez</span><h2 id="cm-pricing-title">Une carte à explorer, <em>pas une addition.</em></h2></div></div>
          <div class="cm-ways__grid">
            <article class="cm-way"><span class="cm-way__number">01 / La carte</span><h3>Des plats pour se projeter.</h3><p>Les intitulés, photos et prix éventuels présentés dans le restaurant de démonstration illustrent un parcours. Ils ne constituent ni une carte en service, ni une promesse de disponibilité.</p><a class="cm-text-link" href="/demo-restau">Parcourir la carte <span aria-hidden="true">↗</span></a></article>
            <article class="cm-way"><span class="cm-way__number">02 / Le panier</span><h3>Un essai sans transaction.</h3><p>Vous pouvez essayer un parcours à emporter dans votre navigateur. Aucune commande n’est expédiée, aucun paiement n’est effectué et aucun restaurant ne reçoit votre sélection.</p><a class="cm-text-link" href="/demo-restau?profile=large&amp;service=takeaway">Tester l’emporter <span aria-hidden="true">↗</span></a></article>
          </div>
        </div>
      </section>
      <section class="cm-section" aria-labelledby="cm-pricing-faq-title">
        <div class="cm-narrow">
          <span class="cm-kicker">Questions utiles</span>
          <h2 id="cm-pricing-faq-title">Avant de vous <em>laisser tenter.</em></h2>
          <div class="cm-faq">
            <details><summary>Dois-je payer pour essayer cette expérience ?</summary><p>Non : aucun paiement n’est effectué sur ce site. Cela ne constitue pas une offre commerciale ou la promesse d’un abonnement gratuit.</p></details>
            <details><summary>Les prix des plats sont-ils ceux d’un restaurant réel ?</summary><p>Non. Les informations affichées dans la carte servent à illustrer le fonctionnement du prototype. Elles ne correspondent pas à une offre de restauration en activité.</p></details>
            <details><summary>Que se passe-t-il si je valide un panier à emporter ?</summary><p>Votre commande apparaît dans l’espace de préparation de ce navigateur ; elle n’est pas envoyée à un établissement et ne prépare aucun repas réel.</p></details>
            <details><summary>Et si je choisis une table ?</summary><p>Le parcours à table est lui aussi un prototype. Il ne réserve pas de place, ne transmet pas de commande et ne permet pas de régler une addition.</p></details>
            <details><summary>Puis-je créer un véritable compte client ?</summary><p>Non. Les écrans de compte, lorsqu’ils sont accessibles, présentent une interface. Il n’y a pas de véritable connexion ou de compte client opérationnel sur ce site.</p></details>
          </div>
          <p class="cm-disclaimer"><strong>Bon à savoir :</strong> la page est destinée à expliquer clairement le périmètre de l’essai côté client. Elle ne présente pas de tarifs d’abonnement pour restaurateurs.</p>
        </div>
      </section>
      ${N("Maintenant, place au menu.","/demo-restau","Découvrir le restaurant")}
    </div>`}function rt(){return`
    <div class="cm cm-contact">
      <header class="cm-page-hero cm-page-hero--sand">
        <div class="cm-wrap cm-page-hero__layout">
          <div><span class="cm-kicker">Une question en tête ?</span><h1>On vous laisse <em>la parole.</em></h1></div>
          <div class="cm-page-hero__aside"><p>Une hésitation sur le parcours, une idée à partager ? Voici un aperçu de la page de contact. Dans ce prototype, le formulaire n’envoie aucun message.</p></div>
        </div>
      </header>
      <section class="cm-section" aria-label="Contact">
        <div class="cm-wrap cm-contact-grid">
          <div class="cm-contact-grid__intro">
            <span class="cm-kicker">Avant de nous écrire</span>
            <h2>Vous cherchiez peut-être <em>la carte ?</em></h2>
            <p>Le moyen le plus direct de découvrir Restauria reste d’explorer la carte du restaurant. Vous pouvez aussi lire comment fonctionnent les deux parcours.</p>
            <nav class="cm-contact-links" aria-label="Liens utiles">
              <a href="/demo-restau">Explorer le restaurant <span aria-hidden="true">↗</span></a>
              <a href="/features">Comprendre l’expérience <span aria-hidden="true">↗</span></a>
              <a href="/pricing">Ce qu’implique cette expérience <span aria-hidden="true">↗</span></a>
            </nav>
          </div>
          <div class="cm-form">
            <span class="cm-kicker">Aperçu du formulaire</span>
            <h2>Écrivez votre mot.</h2>
            <p class="cm-form__intro">Remplissez les champs pour essayer le formulaire. Aucun e-mail n’est envoyé et aucune réponse ne sera reçue depuis cette page.</p>
            <form data-contact-form>
              <div class="cm-field"><label for="cm-contact-name">Votre nom</label><input id="cm-contact-name" name="name" type="text" autocomplete="name" placeholder="Comment vous appelez-vous ?" required></div>
              <div class="cm-field"><label for="cm-contact-email">Votre adresse e-mail</label><input id="cm-contact-email" name="email" type="email" autocomplete="email" placeholder="Votre adresse e-mail" required></div>
              <div class="cm-field"><label for="cm-contact-message">Votre message</label><textarea id="cm-contact-message" name="message" placeholder="Dites-nous ce que vous aimeriez savoir…" required></textarea></div>
              <button class="cm-btn cm-btn--rust" type="submit">Essayer le formulaire <span class="cm-arrow" aria-hidden="true">↗</span></button>
              <p data-contact-status role="status" aria-live="polite">Ce formulaire n’envoie pas de message.</p>
            </form>
          </div>
        </div>
      </section>
      ${N("En attendant, faites un tour à table.")}
    </div>`}function nt(){return`
    <div class="cm cm-terms">
      <header class="cm-page-hero cm-page-hero--sand"><div class="cm-wrap cm-page-hero__layout"><div><span class="cm-kicker">Information · brouillon</span><h1>Quelques mots sur <em>cet essai.</em></h1></div><div class="cm-page-hero__aside"><p>Ce texte décrit le prototype côté visiteur. Il ne constitue pas des conditions contractuelles définitives.</p></div></div></header>
      <section class="cm-section" aria-label="Informations d’utilisation du prototype">
        <div class="cm-wrap cm-legal">
          <aside class="cm-legal__side"><strong>Dans cette page</strong><a href="#cm-terms-scope">Le périmètre</a><a href="#cm-terms-orders">Les commandes</a><a href="#cm-terms-accounts">Les comptes</a><a href="#cm-terms-future">Avant un vrai lancement</a></aside>
          <div class="cm-legal__body">
            <p class="cm-disclaimer"><strong>Brouillon — informations préalables.</strong> Ce contenu aide à comprendre ce qui est et n’est pas possible dans la version présentée. Il doit être rédigé et validé pour tout service réel ; il ne crée pas de promesse juridique ou commerciale.</p>
            <section id="cm-terms-scope"><h2>01. Ce que vous découvrez</h2><p>Restauria présente une maquette interactive d’expérience de restauration côté client. Le restaurant, la carte, les photos et les parcours servent à montrer une idée de navigation et de commande. Ils ne sont pas une offre de restauration actuellement disponible.</p></section>
            <section id="cm-terms-orders"><h2>02. Sur place et à emporter</h2><p>Le parcours à emporter permet de constituer une commande d’essai conservée uniquement dans votre navigateur. La validation à table est une simulation. Aucun de ces parcours ne transmet une commande à un restaurant, ne réserve une table, ne déclenche une préparation ou une livraison, et ne réalise un paiement.</p></section>
            <section id="cm-terms-accounts"><h2>03. Formulaires et comptes</h2><p>Les écrans d’inscription ou de connexion, lorsqu’ils sont proposés, illustrent une interface et non un véritable compte utilisable. Le formulaire de contact n’envoie pas de message : il n’existe pas ici de canal de réponse par ce formulaire.</p></section>
            <section id="cm-terms-content"><h2>04. Contenu présenté</h2><p>Les plats, descriptions et prix éventuels sont des exemples pour cette maquette. Ne les utilisez pas pour planifier un repas ou vous rendre dans un établissement en pensant y retrouver cette carte. Pour une expérience réelle, adressez-vous directement à un restaurant en activité.</p></section>
            <section id="cm-terms-future"><h2>05. Avant un service réel</h2><p>Si Restauria devenait un service opérationnel, ses modalités, ses partenaires, ses prix et ses documents juridiques devraient être définis et publiés séparément. Rien sur cette page ne remplace ces informations futures.</p></section>
          </div>
        </div>
      </section>
      ${N("Revenons à ce qui donne faim.")}
    </div>`}function ot(){return`
    <div class="cm cm-privacy">
      <header class="cm-page-hero cm-page-hero--sand"><div class="cm-wrap cm-page-hero__layout"><div><span class="cm-kicker">Information · brouillon</span><h1>Vos essais, <em>en toute clarté.</em></h1></div><div class="cm-page-hero__aside"><p>Ce que le prototype montre, ce qu’il ne fait pas, et pourquoi cette page n’est pas encore une politique de confidentialité définitive.</p></div></div></header>
      <section class="cm-section" aria-label="Informations de confidentialité du prototype">
        <div class="cm-wrap cm-legal">
          <aside class="cm-legal__side"><strong>Dans cette page</strong><a href="#cm-privacy-context">Le contexte</a><a href="#cm-privacy-cart">Le panier</a><a href="#cm-privacy-forms">Les formulaires</a><a href="#cm-privacy-limit">Les limites</a></aside>
          <div class="cm-legal__body">
            <p class="cm-disclaimer"><strong>Brouillon — informations préalables.</strong> Cette page décrit les parcours client visibles dans cette interface. Elle ne vaut pas politique de confidentialité complète et ne promet ni niveau de sécurité ni traitement de données pour un service futur.</p>
            <section id="cm-privacy-context"><h2>01. Une visite dans un prototype</h2><p>Vous pouvez parcourir la carte et essayer les parcours sur place ou à emporter. Cette version n’est pas connectée à un service de restauration opérationnel. Elle ne permet ni paiement réel, ni réservation, ni connexion à un compte client réel.</p></section>
            <section id="cm-privacy-cart"><h2>02. Vos commandes</h2><p>Les commandes à table et à emporter restent dans votre navigateur pour faire fonctionner le parcours. Elles ne sont pas expédiées à un restaurant. Selon votre navigateur et son fonctionnement, des informations locales peuvent subsister après votre visite ; vous pouvez effacer les données du site depuis ses réglages.</p></section>
            <section id="cm-privacy-forms"><h2>03. Le formulaire de contact</h2><p>Le formulaire sert uniquement à illustrer une prise de contact. Le soumettre n’envoie pas d’e-mail et ne crée pas une demande suivie. N’y inscrivez pas de renseignements sensibles : aucune réponse ne sera envoyée à partir de ce prototype.</p></section>
            <section id="cm-privacy-limit"><h2>04. Ce que ce texte ne couvre pas</h2><p>Cette page ne décrit pas de comptes, de facturation, de paiements, de livraison ou d’opérations réelles, car ces fonctions ne sont pas actives ici. Elle ne garantit pas non plus l’absence de traitements techniques propres à l’hébergement ou au navigateur. Avant toute mise en service, une information de confidentialité complète devra préciser les traitements effectivement mis en place.</p></section>
            <section id="cm-privacy-next"><h2>05. Pour continuer</h2><p>Vous pouvez découvrir la carte sans utiliser le formulaire de contact. Pour connaître les limites des commandes d’essai, consultez également les <a class="cm-text-link" href="/terms">informations d’utilisation <span aria-hidden="true">↗</span></a>.</p></section>
          </div>
        </div>
      </section>
      ${N("La découverte peut continuer.")}
    </div>`}const ce=e=>String(e??"").replace(/[&<>"']/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[a]),lt=[{name:A.group.locations.bouchon.name,profile:"group",city:"Lyon",department:"69",cuisine:"francaise",cuisineLabel:"Cuisine française",description:"Une cuisine de saison généreuse, à découvrir dans la carte de démonstration.",image:"/images/hero-bistro.jpg",imageAlt:"Salle de bistrot chaleureuse, image d’illustration"},{name:A.large.identity.name,profile:"large",city:"Lyon",department:"69",cuisine:"italienne",cuisineLabel:"Cuisine italienne",description:"L’esprit de la pizza napolitaine à parcourir, plat après plat, dans cet exemple de carte.",image:"/images/pizza-nomade-diavola.jpg",imageAlt:"Pizza garnie, image d’illustration"},{name:A.small.identity.name,profile:"small",city:"Paris",department:"75",cuisine:"cafe-patisserie",cuisineLabel:"Café & pâtisserie",description:"Une parenthèse café et pâtisseries maison, présentée dans une carte d’essai.",image:"/images/menu-pavlova.jpg",imageAlt:"Dessert dressé dans une assiette, image d’illustration"},{name:A.takeaway.identity.name,profile:"takeaway",city:"Lyon",department:"69",cuisine:"italienne",cuisineLabel:"Cuisine italienne",description:"Un exemple de carte de pizza truck, imaginé pour explorer le parcours à emporter.",image:"/images/pizza-nomade-hero.jpg",imageAlt:"Pizza présentée sur une table, image d’illustration"}],ct=new Set(["69","75"]);function Oe(e){return ct.has(e)?e:"all"}function He(e){return q().cuisines.some(a=>a.id===e)?e:"all"}function dt(e){const a=q().cuisines.find(t=>t.id===e.cuisine);return`
    <article class="rd-card">
      <a class="rd-card__link" href="/demo-restau?profile=${e.profile}" aria-label="Voir la carte de démonstration de ${e.name}">
        <div class="rd-card__image">
          <img src="${e.image}" alt="${e.imageAlt}" loading="lazy">
          <span class="rd-card__demo">Démonstration</span>
        </div>
        <div class="rd-card__body">
          <p class="rd-card__meta">${e.city} · ${e.department} · ${a?ce(a.name):"Cuisine non classée"}</p>
          <h3>${e.name}</h3>
          <p class="rd-card__description">${e.description}</p>
          <span class="rd-card__cta">Voir la carte de démonstration <span class="rd-card__arrow" aria-hidden="true">↗</span></span>
        </div>
      </a>
    </article>`}function Ge(e,a){const t=Oe(e),s=He(a),i=lt.filter(r=>(t==="all"||r.department===t)&&(s==="all"||r.cuisine===s));return`
    <div class="rd-results__head">
      <p class="rd-results__count" role="status" aria-live="polite">${i.length} ${i.length===1?"restaurant de démonstration":"restaurants de démonstration"}</p>
      <span class="rd-results__note">Cartes à explorer, sans commande réelle</span>
    </div>
    ${i.length?`<div class="rd-grid rd-grid--${i.length}">${i.map(dt).join("")}</div>`:`<div class="rd-empty">
          <span class="rd-empty__mark" aria-hidden="true">—</span>
          <h3>Aucune carte pour ce choix.</h3>
          <p>Ces filtres ne correspondent à aucun des quatre exemples proposés. Essayez une autre combinaison, ou retrouvez toutes les cartes.</p>
          <a href="/restaurants">Voir tous les restaurants de démonstration <span aria-hidden="true">↗</span></a>
        </div>`}`}function pt(e={}){const a=Oe(e?.department),t=He(e?.cuisine),s=q().cuisines;return`
    <div class="rd">
      <header class="rd-hero">
        <div class="rd-wrap rd-hero__layout">
          <div>
            <span class="rd-kicker">Restauria · Les cartes de démonstration</span>
            <h1>Il y a toujours une carte <em>à découvrir.</em></h1>
          </div>
          <div class="rd-hero__aside">
            <p>Quatre univers pour explorer Restauria à votre rythme. Choisissez une cuisine, ouvrez une carte et laissez-vous inspirer.</p>
            <span class="rd-hero__index">01 — 04 / Démonstration uniquement</span>
          </div>
        </div>
      </header>

      <section class="rd-directory" aria-labelledby="rd-directory-title">
        <div class="rd-wrap">
          <div class="rd-directory__intro">
            <div>
              <span class="rd-kicker">À parcourir</span>
              <h2 id="rd-directory-title">Trouvez votre <em>envie du moment.</em></h2>
            </div>
            <p>De Lyon à Paris, parcourez quatre exemples de restaurants. Ce répertoire présente des démonstrations, et non des établissements à réserver ou à commander.</p>
          </div>

          <form class="rd-filters" data-restaurant-filters action="/restaurants" method="get" aria-label="Filtrer les restaurants de démonstration">
            <div class="rd-filters__field">
              <label for="rd-department">Département</label>
              <select id="rd-department" name="department">
                <option value="all"${a==="all"?" selected":""}>Tous les départements</option>
                <option value="69"${a==="69"?" selected":""}>69 Rhône</option>
                <option value="75"${a==="75"?" selected":""}>75 Paris</option>
              </select>
            </div>
            <div class="rd-filters__field">
              <label for="rd-cuisine">Cuisine</label>
              <select id="rd-cuisine" name="cuisine">
                <option value="all"${t==="all"?" selected":""}>Toutes les cuisines</option>
                ${s.map(i=>`<option value="${ce(i.id)}"${t===i.id?" selected":""}>${ce(i.name)}</option>`).join("")}
              </select>
            </div>
            <button class="rd-filters__submit" type="submit">Afficher les cartes <span aria-hidden="true">↗</span></button>
          </form>

          <div data-directory-results>
            ${Ge(a,t)}
          </div>
          <p class="rd-footnote"><strong>Ces restaurants sont des démonstrations.</strong> Les cartes et les images illustrent l’expérience Restauria. Aucun établissement n’est ouvert à la réservation ou à la commande depuis cette page ; aucun paiement ni envoi en cuisine n’est effectué.</p>
        </div>
      </section>
    </div>`}const f=e=>String(e??"").replace(/[&<>"']/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[a]),S=e=>Array.isArray(e)?e:[],Y=()=>q()||{},Qe=(e,a)=>{const t=new Set(S(T(a)).map(s=>String(s.id)));return S(e.variants).filter(s=>s.profileId===J(a)&&t.has(String(s.id)))},Je=e=>{const a=String(e||"");return/^(https?:\/\/|\/(?!\/)|data:image\/(?:png|jpeg|jpg|webp|gif);base64,|blob:)/i.test(a)?f(a):""},ut=e=>{const a=Number(e);return Number.isFinite(a)?new Intl.NumberFormat("fr-FR",{style:"currency",currency:"EUR"}).format(a):"Prix non renseigné"},Z=()=>'<div class="catalog-notice"><span class="catalog-notice__dot" aria-hidden="true"></span><p><strong>Sur cet appareil uniquement</strong> · Les modifications sont enregistrées dans ce navigateur. Aucune donnée n’est envoyée au restaurant.</p></div>',X=()=>'<div class="catalog-error" data-catalog-error role="alert" aria-live="assertive" hidden></div>',ee=(e,a,t="")=>`<div class="catalog-empty"><span class="catalog-empty__mark" aria-hidden="true">R</span><h3>${e}</h3><p>${a}</p>${t}</div>`,ae=(e,a,t,s="")=>`
  <header class="catalog-head">
    <div><span class="catalog-eyebrow">${e}</span><h1>${a}</h1><p>${t}</p></div>
    ${s?`<div class="catalog-head__action">${s}</div>`:""}
  </header>`,he=(e,a,t,s="")=>`<label class="catalog-field" for="${e}"><span>${a}</span><input class="form-control" id="${e}" name="name" type="text" value="${f(t)}" maxlength="120" required ${s}></label>`;function mt(e=null){const a=Y(),t=S(a.cuisines),s=e==null?null:t.find(i=>String(i.id)===String(e));return`<section class="catalog-page catalog-page--admin">
    ${ae("Référentiel · 01","Cuisines","Les familles culinaires qui structurent la découverte des restaurants.",'<a class="button button--quiet" href="/admin/products">Voir les produits de base <span aria-hidden="true">↗</span></a>')}
    ${Z()}${X()}
    <div class="catalog-layout">
      <div class="catalog-panel catalog-panel--list">
        <div class="catalog-panel__heading"><div><span class="catalog-eyebrow">Répertoire</span><h2>Toutes les cuisines</h2></div><span class="catalog-count">${t.length} entrée${t.length>1?"s":""}</span></div>
        ${t.length?`<ul class="catalog-rows">${t.map((i,r)=>`<li class="catalog-row">
          <span class="catalog-row__index">${String(r+1).padStart(2,"0")}</span>
          <div class="catalog-row__body"><strong>${f(i.name)}</strong><small>Catégorie de cuisine</small></div>
          <div class="catalog-row__actions"><a href="/admin/cuisines?edit=${encodeURIComponent(i.id)}" aria-label="Modifier ${f(i.name)}">Modifier</a><button type="button" data-catalog-delete="cuisine" data-id="${f(i.id)}" aria-label="Supprimer ${f(i.name)}">Supprimer</button></div>
        </li>`).join("")}</ul>`:ee("Aucune cuisine pour le moment","Ajoutez une première cuisine pour commencer à organiser le catalogue.")}
      </div>
      <div class="catalog-panel catalog-panel--form">
        <span class="catalog-eyebrow">${s?"Modification":"Nouvelle entrée"}</span>
        <h2>${s?"Modifier une cuisine":"Ajouter une cuisine"}</h2>
        <p>Un nom court et clair aide à retrouver les bonnes adresses.</p>
        ${e!=null&&!s?'<p class="catalog-inline-error" role="alert">Cette cuisine est introuvable. Vous pouvez en créer une nouvelle.</p>':""}
        <form data-catalog-form="cuisine" class="catalog-form">
          <input type="hidden" name="id" value="${f(s?.id)}">
          ${he("catalog-cuisine-name","Nom de la cuisine",s?.name,'placeholder="Ex. Cuisine méditerranéenne"')}
          <div class="catalog-form__actions"><button class="button button--primary" type="submit">${s?"Enregistrer les modifications":"Ajouter la cuisine"}</button>${s?'<a href="/admin/cuisines" class="button button--quiet">Annuler</a>':""}</div>
        </form>
      </div>
    </div>
  </section>`}function vt(e=null){const a=Y(),t=S(a.baseProducts),s=e==null?null:t.find(i=>String(i.id)===String(e));return`<section class="catalog-page catalog-page--admin">
    ${ae("Référentiel · 02","Produits de base","Un nom commun dans le catalogue, des recettes et des prix propres à chaque restaurant.",'<a class="button button--quiet" href="/admin/cuisines">Voir les cuisines <span aria-hidden="true">↗</span></a>')}
    ${Z()}${X()}
    <div class="catalog-layout">
      <div class="catalog-panel catalog-panel--list">
        <div class="catalog-panel__heading"><div><span class="catalog-eyebrow">Répertoire</span><h2>Tous les produits</h2></div><span class="catalog-count">${t.length} produit${t.length>1?"s":""}</span></div>
        ${t.length?`<ul class="catalog-rows">${t.map((i,r)=>`<li class="catalog-row">
          <span class="catalog-row__index">${String(r+1).padStart(2,"0")}</span>
          <div class="catalog-row__body"><strong>${f(i.name)}</strong><small>Produit de base</small></div>
          <div class="catalog-row__actions"><a href="/admin/products?edit=${encodeURIComponent(i.id)}" aria-label="Modifier ${f(i.name)}">Modifier</a><button type="button" data-catalog-delete="base-product" data-id="${f(i.id)}" aria-label="Supprimer ${f(i.name)} et ses variantes">Supprimer</button></div>
        </li>`).join("")}</ul>`:ee("Aucun produit de base","Créez un produit avant de composer les cartes des restaurants.")}
      </div>
      <div class="catalog-panel catalog-panel--form">
        <span class="catalog-eyebrow">${s?"Modification":"Nouvelle entrée"}</span>
        <h2>${s?"Modifier un produit":"Ajouter un produit"}</h2>
        <p>Le nom de référence reste simple ; chaque établissement personnalise ensuite sa variante.</p>
        ${e!=null&&!s?'<p class="catalog-inline-error" role="alert">Ce produit est introuvable. Vous pouvez en créer un nouveau.</p>':""}
        <form data-catalog-form="base-product" class="catalog-form">
          <input type="hidden" name="id" value="${f(s?.id)}">
          ${he("catalog-product-name","Nom du produit de base",s?.name,'placeholder="Ex. Tarte du jour"')}
          <div class="catalog-form__actions"><button class="button button--primary" type="submit">${s?"Enregistrer les modifications":"Ajouter le produit"}</button>${s?'<a href="/admin/products" class="button button--quiet">Annuler</a>':""}</div>
        </form>
        <p class="catalog-caution"><strong>Attention à la suppression.</strong> Supprimer un produit de base supprime aussi toutes ses variantes dans les menus des restaurants.</p>
      </div>
    </div>
  </section>`}function gt(e){const a=Y(),t=S(a.baseProducts),s=Qe(a,e),i=e?.activeRestaurant||(e?.id==="group"?e.portfolio[0]:e?.identity?.name||"Votre restaurant");return`<section class="catalog-page catalog-page--menu">
    ${ae("La carte · "+f(i),"Votre menu","Des plats qui racontent votre table. Chaque recette, prix et photo appartient à cet établissement.",'<a class="button button--primary" href="/app/menu/products/new">Ajouter un plat <span aria-hidden="true">↗</span></a>')}
    ${Z()}${X()}
    <div class="catalog-menu-intro"><div><span class="catalog-eyebrow">En service</span><strong>${s.length} plat${s.length>1?"s":""} à la carte</strong></div><p>La carte affichée ici concerne uniquement ${f(i)}.</p></div>
    ${s.length?`<div class="catalog-menu-grid">${s.map((r,n)=>{const o=t.find(c=>String(c.id)===String(r.productId)),l=Je(r.image);return`<article class="catalog-dish">
        <div class="catalog-dish__visual">${l?`<img src="${l}" alt="Photo de ${f(r.name||o?.name||"ce plat")}" loading="lazy">`:`<div class="catalog-photo-empty"><span aria-hidden="true">${String(n+1).padStart(2,"0")}</span><small>Photo non ajoutée</small></div>`}</div>
        <div class="catalog-dish__content"><span class="catalog-eyebrow">${f(o?.name||"Produit de base indisponible")}</span><div class="catalog-dish__title"><h2>${f(r.name||o?.name||"Sans nom")}</h2><strong>${ut(r.priceCents/100)}</strong></div>
        <p>${f(r.description||"Aucune description pour ce plat.")}</p>
        <div class="catalog-dish__details"><small>Allergènes : ${S(r.allergens).length?f(r.allergens.join(", ")):"non renseignés"}</small><small>À retirer : ${S(r.removableIngredients).length?f(r.removableIngredients.join(", ")):"aucun ingrédient proposé"}</small></div>
        <div class="catalog-dish__actions"><a href="/app/menu/products/1/edit?edit=${encodeURIComponent(r.id)}" aria-label="Modifier ${f(r.name||"ce plat")}">Modifier le plat <span aria-hidden="true">↗</span></a><button type="button" data-catalog-delete="variant" data-id="${f(r.id)}" aria-label="Supprimer ${f(r.name||"ce plat")}">Supprimer</button></div></div>
      </article>`}).join("")}</div>`:ee("Votre carte attend ses premiers plats","Choisissez un produit de base, puis ajoutez votre recette, son prix et une photo.",'<a href="/app/menu/products/new" class="button button--primary">Créer un premier plat</a>')}
    <aside class="catalog-preview-card"><div><span class="catalog-eyebrow">Côté client</span><h2>Voyez votre carte comme un invité.</h2><p>Un aperçu du parcours de commande dans cette démonstration.</p></div><a class="button button--quiet" href="/demo-restau">Ouvrir la démo client <span aria-hidden="true">↗</span></a></aside>
  </section>`}function ht(e,a=null){const t=Y(),s=S(t.baseProducts),i=Qe(t,e),r=a==null?null:i.find(l=>String(l.id)===String(a)),n=s.find(l=>String(l.id)===String(r?.productId)),o=Je(r?.image);return`<section class="catalog-page catalog-page--editor">
    <a class="catalog-back" href="/app/menu"><span aria-hidden="true">←</span> Retour à la carte</a>
    ${ae("La carte · Éditeur",r?"Modifier un plat":"Créer un plat","Composez la version de ce produit pour votre établissement. Le nom, le prix et la photo sont propres à votre carte.")}
    ${Z()}${X()}
    ${a!=null&&!r?'<p class="catalog-inline-error" role="alert">Ce plat est introuvable dans la carte de cet établissement. Vous pouvez en créer un nouveau.</p>':""}
    <div class="catalog-editor-layout">
      <div class="catalog-panel catalog-panel--editor">
        <div class="catalog-panel__heading"><div><span class="catalog-eyebrow">Détails du plat</span><h2>${r?"Votre recette":"Nouveau plat"}</h2></div><span class="catalog-count">01 / 02</span></div>
        ${s.length?`<form data-catalog-form="variant" class="catalog-form" enctype="multipart/form-data">
          <input type="hidden" name="id" value="${f(r?.id)}">
          <div class="catalog-field"><label for="catalog-variant-base"><span>Produit de base <em aria-hidden="true">*</em></span></label>
            <div class="catalog-product-search">
              <input id="catalog-variant-base" class="form-control" type="search" data-product-search role="combobox" aria-autocomplete="list" aria-controls="catalog-base-results" aria-expanded="false" autocomplete="off" placeholder="Rechercher un produit, ex. pizza…" value="${f(n?.name)}" required>
              <input type="hidden" name="productId" value="${f(n?.id)}">
              <div id="catalog-base-results" class="catalog-product-results" role="listbox" aria-label="Produits correspondants" hidden></div>
            </div>
            <small data-product-search-hint>Écrivez le nom du produit, puis sélectionnez-le dans les résultats. Vous ne le trouvez pas ? Demandez à l’administrateur de l’ajouter.</small>
          </div>
          ${he("catalog-variant-name","Nom sur la carte",r?.name,'placeholder="Ex. Tarte fine aux pommes"')}
          <label class="catalog-field" for="catalog-variant-description"><span>Description</span><textarea id="catalog-variant-description" class="form-control" name="description" rows="5" maxlength="1000" placeholder="Les ingrédients, la préparation, ce qui rend ce plat unique…" required>${f(r?.description)}</textarea></label>
          <label class="catalog-field" for="catalog-variant-allergens"><span>Allergènes</span><textarea id="catalog-variant-allergens" class="form-control" name="allergens" rows="3" placeholder="Gluten&#10;Lait&#10;Œufs">${f(S(r?.allergens).join(`
`))}</textarea><small>Un allergène par ligne. Information indicative : renseignez les allergènes présents ou possibles.</small></label>
          <label class="catalog-field" for="catalog-variant-removable"><span>Ingrédients que le client peut retirer</span><textarea id="catalog-variant-removable" class="form-control" name="removableIngredients" rows="3" placeholder="Cornichons&#10;Oignons">${f(S(r?.removableIngredients).join(`
`))}</textarea><small>Un ingrédient par ligne. Le client pourra cocher « Sans … » pour son propre plat ; cela ne modifie pas la recette des autres clients.</small></label>
          <label class="catalog-field catalog-field--price" for="catalog-variant-price"><span>Prix en € <em aria-hidden="true">*</em></span><span class="catalog-price-input"><input id="catalog-variant-price" class="form-control" name="price" type="number" min="0.01" step="0.01" inputmode="decimal" value="${r?f((r.priceCents/100).toFixed(2)):""}" placeholder="0,00" required><span aria-hidden="true">€</span></span></label>
          <div class="catalog-form__actions"><button class="button button--primary" type="submit">${r?"Enregistrer le plat":"Ajouter à la carte"}</button><a href="/app/menu" class="button button--quiet">Annuler</a></div>
        </form>`:ee("Le référentiel est vide","Un administrateur doit créer un produit de base avant que vous puissiez ajouter un plat.")}
      </div>
      <div class="catalog-panel catalog-panel--photo"><span class="catalog-eyebrow">Visuel du plat · 02</span><h2>Donnez envie dès le premier regard.</h2><p>Une photo est nécessaire pour ajouter un plat. Elle sera compressée et conservée uniquement dans ce navigateur.</p>
        <div class="catalog-upload-preview">${o?`<img src="${o}" alt="Photo actuelle de ${f(r?.name||"ce plat")}">`:'<div class="catalog-photo-empty"><span aria-hidden="true">R</span><small>Aucune photo pour le moment</small></div>'}</div>
        <label class="catalog-field" for="catalog-variant-photo"><span>${o?"Remplacer la photo":"Choisir une photo (obligatoire)"}</span><input id="catalog-variant-photo" class="form-control catalog-file" type="file" accept="image/*" name="photo" form="catalog-variant-form" ${o?"":"required"}><small>Format image uniquement. La photo reste enregistrée dans votre navigateur.</small></label>
      </div>
    </div>
  </section>`.replace('data-catalog-form="variant" class="catalog-form"','data-catalog-form="variant" id="catalog-variant-form" class="catalog-form"')}const We=e=>String(e??"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLocaleLowerCase("fr").replace(/œ/g,"oe").replace(/æ/g,"ae").trim(),ft=new Set(["margherita","diavola","regina","bufalina","calzone","napoli","vegetarienne"]);function bt(e){return e.map(a=>{const t=We(a.name);return{id:a.id,name:a.name,normalizedName:t,searchText:`${t} ${ft.has(t)?"pizza":""}`}})}function yt(e,a,t=8){const s=We(a).split(/\s+/).filter(Boolean);if(!s.length)return{matches:[],total:0};const i=[];for(const r of e){if(!s.every(l=>r.searchText.includes(l)))continue;const n=s.join(" "),o=r.normalizedName===n?0:r.normalizedName.startsWith(n)?1:r.normalizedName.includes(n)?2:3;i.push({product:r,score:o})}return i.sort((r,n)=>r.score-n.score||r.product.name.localeCompare(n.product.name,"fr")),{matches:i.slice(0,t).map(r=>r.product),total:i.length}}function wt(){const e=document.querySelector("[data-product-search]");if(!e)return;const a=e.closest("form"),t=a.elements.namedItem("productId"),s=a.querySelector("#catalog-base-results"),i=a.querySelector("[data-product-search-hint]"),r=i.textContent,n=bt(q().baseProducts);let o=[],l=-1;function c(){s.hidden=!0,e.setAttribute("aria-expanded","false"),e.removeAttribute("aria-activedescendant"),l=-1}function d(g){l=g;const u=s.querySelectorAll('[role="option"]');u.forEach((v,b)=>v.setAttribute("aria-selected",String(b===l))),u[l]&&(e.setAttribute("aria-activedescendant",u[l].id),u[l].scrollIntoView({block:"nearest"}))}function p(g){t.value=g.id,e.value=g.name,e.setCustomValidity(""),i.textContent=r,i.classList.remove("catalog-product-search__hint--invalid"),c(),e.focus()}function h(){const g=e.value.trim();if(s.replaceChildren(),!g){c();return}const u=yt(n,g);o=u.matches,l=-1;for(const[b,y]of o.entries()){const x=document.createElement("button");x.type="button",x.className="catalog-product-option",x.id=`catalog-product-option-${b}`,x.setAttribute("role","option"),x.setAttribute("aria-selected","false"),x.dataset.productOption=String(b),x.textContent=y.name,s.append(x)}const v=document.createElement("p");v.className="catalog-product-results__note",v.textContent=u.total===0?"Aucun produit trouvé. Vérifiez le nom ou demandez sa création à l’administrateur.":u.total>o.length?`${u.total} résultats · Affinez votre recherche pour voir les autres.`:`${u.total} produit${u.total>1?"s":""} trouvé${u.total>1?"s":""}.`,s.append(v),s.hidden=!1,e.setAttribute("aria-expanded","true"),e.removeAttribute("aria-activedescendant")}e.addEventListener("input",()=>{t.value="",e.setCustomValidity("Sélectionnez un produit dans les résultats."),i.textContent="Sélectionnez un produit dans la liste avant d’enregistrer.",i.classList.add("catalog-product-search__hint--invalid"),h()}),e.addEventListener("focus",()=>{e.value.trim()&&!t.value&&h()}),e.addEventListener("keydown",g=>{if(g.key==="Escape"){c();return}if(g.key==="Tab"){c();return}(g.key==="ArrowDown"||g.key==="ArrowUp")&&(s.hidden&&h(),o.length&&(g.preventDefault(),d(g.key==="ArrowDown"?Math.min(l+1,o.length-1):Math.max(l-1,0)))),g.key==="Enter"&&!s.hidden&&l>=0&&(g.preventDefault(),p(o[l]))}),e.addEventListener("blur",()=>setTimeout(c,120)),s.addEventListener("mousedown",g=>{g.target.closest("[data-product-option]")&&g.preventDefault()}),s.addEventListener("click",g=>{const u=g.target.closest("[data-product-option]");u&&o[Number(u.dataset.productOption)]&&p(o[Number(u.dataset.productOption)])})}const _t=e=>String(e).replace(/[&<>"']/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[a]),O=(e,a="html")=>`<div class="dd-code"><div class="dd-code__top"><span>${a}</span><button type="button" class="dd-code__copy" data-doc-copy aria-label="Copier le code ${a}">Copier le code</button></div><pre><code>${_t(e.trim())}</code></pre></div>`,xt=[{id:"buttons",number:"01",title:"Boutons & actions",kind:"Action",description:"Une action principale par zone, puis des actions secondaires plus discrètes. Utilisez un lien pour naviguer et un bouton seulement pour exécuter une action.",usage:"La variante small convient aux barres d’outils. Branchez les vrais boutons à un gestionnaire dans main.js ; une classe CSS ne déclenche rien.",source:"src/styles/components.css · .button",preview:'<div class="dd-preview-row"><a class="button button--primary" href="#recipe">Voir la recette</a><a class="button button--quiet" href="#foundations">Fondations</a><a class="button button--coral button--small" href="#forms">Voir les champs</a></div>',markup:`<a class="button button--primary" href="#recipe">Voir la recette</a>
<a class="button button--quiet" href="#foundations">Fondations</a>
<a class="button button--coral button--small" href="#forms">Voir les champs</a>`},{id:"badges",number:"02",title:"Badges & statut",kind:"Information",description:"Des libellés courts pour qualifier un état ou une catégorie sans voler la place au contenu.",usage:"Ne vous reposez jamais sur la couleur seule : le libellé porte l’information. Le point de statut est décoratif si le texte voisin donne déjà l’état.",source:"src/styles/components.css · .badge, .status-dot",preview:'<div class="dd-preview-row"><span class="badge badge--success">Confirmée</span><span class="badge badge--warning">En attente</span><span class="badge badge--neutral">Brouillon</span><span class="badge badge--coral">À traiter</span><span class="dd-status"><span class="status-dot status-dot--success" aria-hidden="true"></span> Service ouvert</span></div>',markup:`<span class="badge badge--success">Confirmée</span>
<span class="badge badge--warning">En attente</span>
<span class="badge badge--neutral">Brouillon</span>
<span class="badge badge--coral">À traiter</span>
<span><span class="status-dot status-dot--success" aria-hidden="true"></span> Service ouvert</span>`},{id:"forms",number:"03",title:"Champs de formulaire",kind:"Saisie",description:"Le couple form-field + form-control assure un label visible, une largeur cohérente et un focus perceptible.",usage:"Gardez for et id identiques. Pour soumettre, ajoutez une vraie validation et un gestionnaire d’événement ; cet aperçu n’enregistre rien.",source:"src/styles/components.css · .form-stack, .form-field, .form-control",preview:'<div class="form-stack dd-form-preview"><div class="form-field"><label class="form-field__label" for="docs-restaurant-name">Nom du restaurant</label><input class="form-control" id="docs-restaurant-name" name="name" type="text" autocomplete="organization" placeholder="Le Petit Bouchon"><span class="form-field__hint">Le nom que vos clients verront sur la carte.</span></div><div class="form-field"><label class="form-field__label" for="docs-service-note">Note de service</label><textarea class="form-control" id="docs-service-note" name="note" placeholder="Une précision utile pour l’équipe"></textarea></div></div>',markup:`<div class="form-stack">
  <div class="form-field">
    <label class="form-field__label" for="restaurant-name">Nom du restaurant</label>
    <input class="form-control" id="restaurant-name" name="name" type="text"
      autocomplete="organization" placeholder="Le Petit Bouchon">
    <span class="form-field__hint">Le nom que vos clients verront sur la carte.</span>
  </div>
  <div class="form-field">
    <label class="form-field__label" for="service-note">Note de service</label>
    <textarea class="form-control" id="service-note" name="note"></textarea>
  </div>
</div>`},{id:"cards",number:"04",title:"Carte de contenu",kind:"Conteneur",description:"La dash-card isole un groupe d’informations dans l’application. L’en-tête donne un titre et éventuellement un chemin vers le détail.",usage:"Réservez les cartes aux vrais regroupements, pas à chaque ligne d’une page. Une carte n’est pas cliquable par défaut : le lien explicite porte la navigation.",source:"src/styles/components.css · .dash-card, .card-header",preview:'<div class="dash-card dd-card-preview"><div class="card-header"><h3 class="card-title">Service du midi</h3><a class="card-action" href="#recipe">Voir le modèle</a></div><p>Un repère calme pour les informations à consulter rapidement.</p></div>',markup:`<section class="dash-card" aria-labelledby="service-title">
  <div class="card-header">
    <h3 class="card-title" id="service-title">Service du midi</h3>
    <a class="card-action" href="#recipe">Voir le modèle</a>
  </div>
  <p>Un repère calme pour les informations à consulter rapidement.</p>
</section>`},{id:"headers",number:"05",title:"En-tête de page",kind:"Structure",description:"Le page-header associe contexte, titre et action. Il se replie naturellement quand l’espace manque.",usage:"À employer dans la zone de contenu app/admin. Une seule balise h1 par page ; la classe ne change pas la hiérarchie sémantique.",source:"src/styles/components.css · .page-header",preview:'<div class="page-header dd-header-preview"><div><span class="page-header__meta">Gestion / Équipe</span><h2>Votre équipe</h2></div><a class="button button--primary button--small" href="#recipe">Voir la recette</a></div>',markup:`<div class="page-header">
  <div>
    <span class="page-header__meta">Gestion / Équipe</span>
    <h1>Votre équipe</h1>
  </div>
  <a class="button button--primary button--small" href="#recipe">Voir la recette</a>
</div>`},{id:"avatars",number:"06",title:"Avatars initiales",kind:"Identité",description:"Un repère compact pour représenter une personne ou un établissement quand aucune photo n’est disponible.",usage:"Les initiales doivent provenir du nom affiché. Pour une personne, donnez le nom complet en texte adjacent ; l’avatar peut alors être décoratif.",source:"src/styles/components.css · .avatar",preview:'<div class="dd-preview-row"><span class="avatar avatar--sage" aria-hidden="true">ML</span><span class="avatar avatar--coral" aria-hidden="true">CB</span><span class="avatar avatar--neutral" aria-hidden="true">RN</span><span class="dd-person-label">Maëlle Laurent <small>Responsable de salle</small></span></div>',markup:`<div class="dd-person">
  <span class="avatar avatar--sage" aria-hidden="true">ML</span>
  <span>Maëlle Laurent</span>
</div>`},{id:"tables",number:"07",title:"Table de données",kind:"Données",description:"Un tableau pour comparer des valeurs alignées en lignes et colonnes. Le conteneur autorise le défilement horizontal sur petit écran.",usage:"Utilisez caption et scope pour la lecture assistée. Les lignes ne sont pas des boutons ; placez une vraie action dans la cellule si nécessaire.",source:"src/styles/components.css · .table-wrap, .data-table",preview:'<div class="table-wrap"><table class="data-table"><caption class="visually-hidden">Aperçu des réservations</caption><thead><tr><th scope="col">Table</th><th scope="col">Créneau</th><th scope="col">Statut</th></tr></thead><tbody><tr><td>Terrasse 04</td><td>12 h 30</td><td><span class="badge badge--success">Confirmée</span></td></tr><tr><td>Salle 08</td><td>13 h 15</td><td><span class="badge badge--warning">En attente</span></td></tr></tbody></table></div>',markup:`<div class="table-wrap">
  <table class="data-table">
    <caption class="visually-hidden">Réservations du jour</caption>
    <thead><tr>
      <th scope="col">Table</th><th scope="col">Créneau</th><th scope="col">Statut</th>
    </tr></thead>
    <tbody><tr>
      <td>Terrasse 04</td><td>12 h 30</td>
      <td><span class="badge badge--success">Confirmée</span></td>
    </tr></tbody>
  </table>
</div>`},{id:"catalog",number:"08",title:"Panneau catalogue",kind:"App / catalogue",description:"Une composition plus éditoriale pour les écrans de gestion de carte, avec un titre, un comptage et une liste.",usage:"À utiliser dans les pages catalogue uniquement : les styles catalog-* sont contextualisés par .catalog-page, et non globaux.",source:"src/styles/catalog-pages.css · .catalog-page, .catalog-panel",preview:'<div class="catalog-page dd-catalog-preview"><div class="catalog-panel"><div class="catalog-panel__heading"><div><span class="catalog-eyebrow">Carte / Organisation</span><h2>Catégories</h2></div><span class="catalog-count">2 catégories</span></div><ul class="catalog-rows"><li class="catalog-row"><span class="catalog-row__index" aria-hidden="true">01</span><div class="catalog-row__body"><strong>Entrées</strong><small>Avant le plat</small></div></li><li class="catalog-row"><span class="catalog-row__index" aria-hidden="true">02</span><div class="catalog-row__body"><strong>Plats</strong><small>À partager ou non</small></div></li></ul></div></div>',markup:`<section class="catalog-page">
  <div class="catalog-panel">
    <div class="catalog-panel__heading">
      <div><span class="catalog-eyebrow">Carte / Organisation</span><h2>Catégories</h2></div>
      <span class="catalog-count">2 catégories</span>
    </div>
    <ul class="catalog-rows">
      <li class="catalog-row">
        <span class="catalog-row__index" aria-hidden="true">01</span>
        <div class="catalog-row__body"><strong>Entrées</strong><small>Avant le plat</small></div>
      </li>
    </ul>
  </div>
</section>`},{id:"customer",number:"09",title:"Titre de parcours client",kind:"Customer",description:"Un départ généreux pour le panier, la commande ou le compte dans le cadre client.",usage:"À insérer dans renderCustomerLayout, qui fournit déjà le main, l’en-tête et la navigation basse. Ne dupliquez pas ces landmarks.",source:"src/styles/customer.css · .customer-page-title, .section-kicker",preview:'<div class="customer-page-title dd-customer-preview"><span class="section-kicker">Votre table</span><h1>Le bon moment commence ici.</h1><p>Retrouvez vos choix et prenez le temps de savourer.</p></div>',markup:`<div class="customer-page-title">
  <span class="section-kicker">Votre table</span>
  <h1>Le bon moment commence ici.</h1>
  <p>Retrouvez vos choix et prenez le temps de savourer.</p>
</div>`}],kt=({id:e,number:a,title:t,kind:s,description:i,usage:r,source:n,preview:o,markup:l})=>`
  <article class="dd-example" id="${e}" aria-labelledby="${e}-title">
    <div class="dd-example__head"><span class="dd-example__number">${a} / ${s}</span><h3 id="${e}-title">${t}</h3><p>${i}</p></div>
    <div class="dd-example__body">
      <div class="dd-stage"><span class="dd-stage__label">Aperçu réel</span><div class="dd-stage__inner">${o}</div></div>
      <div class="dd-example__aside"><div class="dd-use"><strong>Quand l’utiliser</strong><p>${r}</p></div><details class="dd-snippet"><summary>Voir le HTML <span aria-hidden="true">↗</span></summary>${O(l)}</details><p class="dd-source"><span>Source</span> <code>${n}</code></p></div>
    </div>
  </article>`;function $t(){return`
    <div class="design-docs">
      <div class="dd-hero">
        <div class="dd-hero__top"><span class="dd-overline">Restauria / Référence interne</span><span class="dd-edition">Édition 01 — Interface vivante</span></div>
        <div class="dd-hero__content"><div><p class="dd-hero__kicker"><span></span> Le guide de construction</p><h1>Des pages qui parlent<br><em>la même langue.</em></h1><p class="dd-hero__lead">Une référence pour fabriquer la prochaine page Restauria avec les pièces déjà en place : styles réels, balisage utile et chemin de rendu.</p><div class="dd-hero__links"><a class="button button--primary" href="#components">Explorer les composants <span aria-hidden="true">↗</span></a><a class="dd-text-link" href="#recipe">Composer une page <span aria-hidden="true">↘</span></a></div></div><div class="dd-hero__stamp" aria-hidden="true"><span>R</span><small>Design<br>system<br>notes</small></div></div>
        <div class="dd-hero__foot"><span>01 / Fondations</span><span>02 / Composants</span><span>03 / Recette</span></div>
      </div>

      <div class="dd-layout">
        <nav class="dd-toc" aria-label="Sommaire de la documentation">
          <div class="dd-toc__inner"><span class="dd-toc__title">Dans ce guide</span>
            <a href="#foundations">01 <span>Fondations</span></a>
            <a href="#components">02 <span>Composants</span></a>
            <div class="dd-toc__sub"><a href="#buttons">Boutons</a><a href="#badges">Badges</a><a href="#forms">Formulaires</a><a href="#cards">Cartes</a><a href="#headers">En-têtes</a><a href="#avatars">Avatars</a><a href="#tables">Tableaux</a><a href="#catalog">Catalogue</a><a href="#customer">Client</a></div>
            <a href="#recipe">03 <span>Nouvelle page</span></a>
            <a href="#principles">04 <span>Garde-fous</span></a>
          </div>
        </nav>
        <div class="dd-content">
          <section class="dd-section" id="foundations" aria-labelledby="foundations-title">
            <div class="dd-section__intro"><span class="dd-index">01 / Les fondations</span><h2 id="foundations-title">La matière première.</h2><p>Avant de créer une nouvelle classe, cherchez ce qui existe déjà. La couleur, le rythme et la typographie vivent dans les variables CSS et les styles de base.</p></div>
            <div class="dd-foundations">
              <div class="dd-foundation dd-foundation--colors"><div class="dd-foundation__header"><h3>Palette</h3><code>src/styles/tokens.css + base.css</code></div><p>Encre pour la structure, toile chaude pour respirer, corail pour le geste, sauge pour les états paisibles. <strong>base.css redéfinit plusieurs tokens de tokens.css</strong> ; consultez les valeurs calculées avant de coder.</p><div class="dd-swatches"><div><i style="background:var(--color-ink)"></i><span>Encre</span><code>--color-ink</code></div><div><i style="background:var(--color-canvas)"></i><span>Toile</span><code>--color-canvas</code></div><div><i style="background:var(--color-sage)"></i><span>Sauge</span><code>--color-sage</code></div><div><i style="background:var(--color-coral)"></i><span>Corail</span><code>--color-coral</code></div><div><i style="background:var(--color-line)"></i><span>Trait</span><code>--color-line</code></div></div>${O(`.new-panel {
  color: var(--color-ink);
  background: var(--color-surface);
  border: 1px solid var(--color-line);
  border-radius: var(--radius-md);
}`,"css")}</div>
              <div class="dd-foundation dd-foundation--type"><div class="dd-foundation__header"><h3>Typographie</h3><code>src/styles/base.css</code></div><div class="dd-type-sample"><span class="dd-overline">TITRE / --font-display</span><strong>Le plaisir de bien recevoir.</strong><span class="dd-type-body">Le texte courant privilégie la clarté, avec une cadence simple et des informations faciles à parcourir.</span></div><p>Les titres héritent de <code>--font-display</code> et le corps de <code>--font-body</code>. Les valeurs actives dans <code>base.css</code> sont Fraunces et Plus Jakarta Sans. Respectez h1 → h2 → h3, sans sauter de niveau pour obtenir une taille.</p></div>
              <div class="dd-foundation dd-foundation--space"><div class="dd-foundation__header"><h3>Espacement & forme</h3><code>src/styles/tokens.css + base.css</code></div><div class="dd-space-sample"><span style="width:24%"></span><span style="width:42%"></span><span style="width:70%"></span><span style="width:100%"></span></div><p>Préférez un rythme progressif à une grille rigide : .5rem entre éléments liés, 1–1.5rem dans une carte, 2–3rem entre sections. Les rayons <code>--radius-sm</code>, <code>--radius-md</code>, <code>--radius-lg</code> et <code>--shadow-soft</code> assurent une famille de surfaces cohérente.</p></div>
            </div>
          </section>

          <section class="dd-section" id="components" aria-labelledby="components-title">
            <div class="dd-section__intro"><span class="dd-index">02 / La bibliothèque active</span><h2 id="components-title">Des pièces, pas des maquettes.</h2><p>Ces aperçus utilisent les classes présentes dans le projet. Ouvrez chaque exemple pour consulter le balisage HTML échappé et prêt à sélectionner. Les aperçus ne simulent aucune écriture de données.</p></div>
            <div class="dd-examples">${xt.map(kt).join("")}</div>
          </section>

          <section class="dd-section dd-recipe-section" id="recipe" aria-labelledby="recipe-title">
            <div class="dd-section__intro"><span class="dd-index">03 / Le chemin de rendu</span><h2 id="recipe-title">De l’idée à la route.</h2><p>Restauria est un moteur de pages Vite en JavaScript natif. Le fragment de page fournit le contenu ; le routeur choisit le rendu et le layout ajoute le cadre.</p></div>
            <div class="dd-flow" aria-label="Flux de composition"><div><span>01</span><strong>Déclarer</strong><small>site-routes.js</small></div><i aria-hidden="true">→</i><div><span>02</span><strong>Rendre</strong><small>main.js</small></div><i aria-hidden="true">→</i><div><span>03</span><strong>Encadrer</strong><small>layouts.js</small></div><i aria-hidden="true">→</i><div><span>04</span><strong>Styliser</strong><small>styles/*.css</small></div></div>
            <div class="dd-recipe-grid">
              <div class="dd-recipe-card"><span class="dd-recipe-card__step">A / Public</span><h3>Le contenu d’abord.</h3><p>Exportez une fonction qui retourne un fragment, pas un document complet. Déclarez ensuite sa route publique et son appel explicite dans <code>renderApp()</code>, avant les replis <code>route.type</code>. Le layout fournit déjà header, main et footer.</p>${O(`// src/new-page.js
export function renderNewPage() {
  return \`<section class="new-page">
    <h1>Une nouvelle page</h1>
    <p>Un message clair, un geste utile.</p>
    <a class="button button--primary" href="/contact">Nous contacter</a>
  </section>\`;
}

// src/site-routes.js : ajouter à siteRoutes :
// { path: '/nouvelle-page', layout: 'public', title: 'Nouvelle page',
//   desc: 'Description de la nouvelle page.' }
// src/main.js : importer renderNewPage ; dans renderApp(), avant route.type :
// else if (path === '/nouvelle-page') content = renderNewPage();
// scripts/export-static-template.mjs : importer renderNewPage ;
// dans contentFor(route), avant les replis route.type :
// if (path === '/nouvelle-page') return renderNewPage();
// La branche route.layout === 'public' applique renderPublicLayout(content, t, path, profile).`,"js")}</div>
              <div class="dd-recipe-card"><span class="dd-recipe-card__step">B / App & customer</span><h3>Choisir le bon cadre.</h3><p>Une route <code>app</code> passe par <code>renderAppLayout</code> (sidebar + topbar). Une route <code>customer</code> passe par <code>renderCustomerLayout</code> (en-tête restaurant + navigation basse). La route doit fournir le bon <code>layout</code> et son contenu doit rester un fragment.</p>${O(`// Dans renderApp(), une branche spécifique au chemin de la nouvelle page :
// else if (path === '/app/nouvelle-page') content = renderNewAppPage(profile);

// Ensuite main.js sélectionne le cadre via route.layout :
// 'app'      → renderAppLayout(content, path, profile)
// 'customer' → renderCustomerLayout(content, path, profile)
// 'public'   → renderPublicLayout(content, t, path, profile)

// Ne créez pas de second <main> dans le fragment de page.`,"js")}</div>
            </div>
            <div class="dd-recipe-note"><strong>Ne manquez pas la version téléchargeable</strong><p>Une nouvelle page doit aussi être rendue dans <code>scripts/export-static-template.mjs</code> : son <code>contentFor(route)</code> est distinct du rendu navigateur. Importez sa feuille CSS dans <code>src/styles/main.css</code>, puis exécutez <code>pnpm --filter @workspace/restauria run export:template</code> et régénérez le ZIP. Si le HTML contient des valeurs saisies par les utilisateurs, échappez-les avant interpolation.</p></div>
          </section>

          <section class="dd-section dd-principles" id="principles" aria-labelledby="principles-title"><div class="dd-section__intro"><span class="dd-index">04 / Avant de publier</span><h2 id="principles-title">Les détails qui comptent.</h2></div><div class="dd-checklist"><div><span>01</span><strong>Une structure lisible</strong><p>Un h1, des sections nommées, des labels liés aux champs et des tables avec en-têtes.</p></div><div><span>02</span><strong>De vraies interactions</strong><p>Les snippets décrivent l’apparence. La validation, la persistance, les états de chargement et les erreurs exigent du JavaScript.</p></div><div><span>03</span><strong>Un test dans chaque cadre</strong><p>Vérifiez la page sur mobile, clavier et écran large, avec les profils concernés et les états vides.</p></div></div><p class="dd-endnote">La bonne pièce au bon endroit. Puis la liberté de composer.</p></section>
        </div>
      </div>
    </div>`}function k(e,a,t,s){let i=document.head.querySelector(e);i||(i=document.createElement("meta"),i.setAttribute(a,t),document.head.appendChild(i)),i.setAttribute("content",s)}function Ct(e,a,t){const s=e.title?C(e.title):"Restauria",i=["/","/features","/pricing","/contact","/terms","/privacy","/restaurants"].includes(a),r=a==="/restaurant"||/^\/(features|pricing|contact|terms|privacy)\/restaurant$/.test(a),n=a==="/"?"Restauria | Découvrez la carte et commandez":a==="/restaurant"?"Restauria | Pour les restaurateurs":`${s} | Restauria`,o={public:`${s} — découvrez Restauria.`,customer:`${s} du Petit Bouchon — consultez le menu, commandez et suivez votre repas avec Restauria.`,app:`${s} — espace opérationnel Restauria du Petit Bouchon.`,admin:`${s} — console d’administration de la plateforme Restauria.`},l=e.desc?C(e.desc).replace(/<[^>]*>/g," ").replace(/\s+/g," ").trim():o[e.layout]||"Restauria, la plateforme opérationnelle des restaurants.",c=new URL(a||"/",window.location.origin).href,d=new URL(i?"/images/beautiful-dish.jpg":"/images/hero.jpg",window.location.origin).href,p=e.layout==="public"&&e!==H;document.title=n,document.documentElement.lang="fr",k('meta[name="description"]',"name","description",l),k('meta[name="robots"]',"name","robots",p?"index, follow":"noindex, nofollow"),k('meta[property="og:title"]',"property","og:title",n),k('meta[property="og:description"]',"property","og:description",l),k('meta[property="og:type"]',"property","og:type","website"),k('meta[property="og:site_name"]',"property","og:site_name","Restauria"),k('meta[property="og:locale"]',"property","og:locale","fr_FR"),k('meta[property="og:url"]',"property","og:url",c),k('meta[property="og:image"]',"property","og:image",d),k('meta[name="twitter:card"]',"name","twitter:card","summary_large_image"),k('meta[name="twitter:title"]',"name","twitter:title",n),k('meta[name="twitter:description"]',"name","twitter:description",l),k('meta[name="twitter:image"]',"name","twitter:image",d);let h=document.head.querySelector('link[rel="canonical"]');if(h||(h=document.createElement("link"),h.rel="canonical",document.head.appendChild(h)),h.href=c,document.head.querySelector("#restauria-structured-data")?.remove(),p){const g=document.createElement("script");g.id="restauria-structured-data",g.type="application/ld+json",g.textContent=JSON.stringify({"@context":"https://schema.org","@type":i?"WebSite":"SoftwareApplication",name:"Restauria",...r?{applicationCategory:"BusinessApplication",operatingSystem:"Web"}:{},description:l,url:c,inLanguage:"fr"}),document.head.appendChild(g)}}function _(){const e=P(),a=e.id;let t=window.location.pathname;t.length>1&&t.endsWith("/")&&(t=t.slice(0,-1));const s={"/app/login":"/login/restaurant","/app/register":"/register/restaurant","/app/forgot-password":"/forgot-password/restaurant","/app/verify-email":"/verify-email/restaurant"};s[t]&&(t=s[t],window.history.replaceState({},"",t+window.location.search));let i=fe.find(c=>c.path===t)||H;const r=t.includes("/login")||t.includes("/register")||t.includes("/forgot")||t.includes("/reset")||t.includes("/verify");let n="";i===H?n=Qa():i.layout==="customer"&&de(e)==="takeaway"?n=Ca(t,e):i.layout==="app"&&(t==="/app/takeaway"||!e.serviceModes.includes("table")&&/^\/app\/(dashboard|orders|kitchen|floor|waiter|onboarding)(\/|$)/.test(t))?n=_e(t,e):i.layout==="customer"?n=Ba(t,i,C,e):t==="/"?n=tt():t==="/restaurants"?n=pt(Object.fromEntries(new URLSearchParams(window.location.search))):t==="/design-docs"?n=$t():t==="/features"?n=st():t==="/pricing"?n=it():t==="/contact"?n=rt():t==="/terms"?n=nt():t==="/privacy"?n=ot():t==="/restaurant"?n=Fa(C):t==="/features/restaurant"?n=Oa():t==="/pricing/restaurant"?n=Ha():t==="/contact/restaurant"?n=Ga():t==="/terms/restaurant"?n=Ja():t==="/privacy/restaurant"?n=Wa():r?n=Ka(t,i,C):t==="/admin/cuisines"?n=mt(new URLSearchParams(window.location.search).get("edit")):t==="/admin/products"?n=vt(new URLSearchParams(window.location.search).get("edit")):t==="/app/menu"||t==="/app/menu/products"?n=gt(e):t==="/app/menu/products/new"||t==="/app/menu/products/1/edit"?n=ht(e,new URLSearchParams(window.location.search).get("edit")):t==="/app/kitchen"||t==="/app/orders"?n=e.serviceModes.includes("table")?`${e.serviceModes.includes("takeaway")?'<div class="takeaway-channel"><div><strong>Commandes à emporter</strong><p>Suivez les retraits dans leur espace dédié.</p></div><a class="button button--primary" href="/app/takeaway">Voir les retraits →</a></div>':""}${Ma(e)}`:_e(t,e):t==="/app/analytics"?n=Za(e):t==="/app/settings/restaurant"?n=`${at(e)}${Ce(i,C)}`:t==="/app/dashboard"?n=e.serviceModes.includes("takeaway")?`<div class="takeaway-channel"><div><strong>Commandes à emporter</strong><p>${M(e).orders.filter(c=>c.status!=="collected").length} commande(s) à suivre · Retrait sans table</p></div><a class="button button--primary" href="/app/takeaway">Gérer les retraits →</a></div>${Se(e)}`:Se(e):t==="/admin/dashboard"?n=Ya(e):t==="/pages"?n=Ua(fe,C,e):i.type==="grid"?n=t==="/app/orders"&&e.serviceModes.includes("takeaway")?`<div class="takeaway-channel"><div><strong>Deux types de commandes</strong><p>Les commandes à table restent ici ; les commandes sans table sont dans la file à emporter.</p></div><a class="button button--primary" href="/app/takeaway">Voir les retraits →</a></div>${$e(i,C)}`:$e(i,C):i.type==="form"?n=Ce(i,C):n=Na(i,C);let o="";i.layout==="public"?o=Ia(n,C,t):i.layout==="app"?o=Da(n,t,e):i.layout==="admin"?o=Ta(n,t):i.layout==="customer"&&(o=Ea(n,t,e)),document.body.innerHTML=o,wt();const l=`
    <div class="demo-switcher-widget">
      <button class="demo-switcher-widget__toggle" data-demo-toggle aria-label="Changer de profil">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
      </button>
      <div class="demo-switcher-widget__menu">
        <div class="demo-switcher-widget__header">Changer de profil</div>
        <div class="demo-switcher-widget__grid">
          <div>
            <strong>Customer</strong>
            <a href="/demo-restau?profile=small" class="${a==="small"?"is-active":""}">Petit</a>
            <a href="/demo-restau?profile=large" class="${a==="large"?"is-active":""}">Grand</a>
            <a href="/demo-restau?profile=group" class="${a==="group"?"is-active":""}">Pro</a>
            <a href="/demo-restau?profile=takeaway" class="${a==="takeaway"?"is-active":""}">Pizza truck</a>
          </div>
          <div>
            <strong>App</strong>
            <a href="/app/dashboard?profile=small" class="${a==="small"?"is-active":""}">Petit</a>
            <a href="/app/dashboard?profile=large" class="${a==="large"?"is-active":""}">Grand</a>
            <a href="/app/dashboard?profile=group" class="${a==="group"?"is-active":""}">Pro</a>
            <a href="/app/dashboard?profile=takeaway" class="${a==="takeaway"?"is-active":""}">Pizza truck</a>
          </div>
          <div>
            <strong>Admin</strong>
            <a href="/admin/dashboard?profile=small" class="${a==="small"?"is-active":""}">Petit</a>
            <a href="/admin/dashboard?profile=large" class="${a==="large"?"is-active":""}">Grand</a>
            <a href="/admin/dashboard?profile=group" class="${a==="group"?"is-active":""}">Pro</a>
            <a href="/admin/dashboard?profile=takeaway" class="${a==="takeaway"?"is-active":""}">Pizza truck</a>
          </div>
        </div>
      </div>
    </div>
  `;document.body.insertAdjacentHTML("beforeend",l),Ct(i,t),window.scrollTo(0,0)}function Ke(e){const a=e.elements.namedItem("department").value,t=e.elements.namedItem("cuisine").value,s=new URLSearchParams;a!=="all"&&s.set("department",a),t!=="all"&&s.set("cuisine",t),window.history.replaceState({},"",`/restaurants${s.size?`?${s}`:""}`),document.querySelector("[data-directory-results]").innerHTML=Ge(a,t)}async function Pt(e){if(!e.type.startsWith("image/")||e.size>5*1024*1024)throw new Error("Choisissez une image de moins de 5 Mo.");const a=await createImageBitmap(e);try{const t=Math.min(1,900/Math.max(a.width,a.height)),s=document.createElement("canvas");s.width=Math.max(1,Math.round(a.width*t)),s.height=Math.max(1,Math.round(a.height*t));const i=s.getContext("2d");i.fillStyle="#fff",i.fillRect(0,0,s.width,s.height),i.drawImage(a,0,0,s.width,s.height);const r=s.toDataURL("image/jpeg",.72);if(r.length>8e5)throw new Error("Cette image est trop volumineuse pour le stockage local.");return r}finally{a.close()}}document.addEventListener("DOMContentLoaded",_);document.body.addEventListener("click",e=>{const a=e.target.closest("[data-doc-copy]");if(a){const u=a.closest(".dd-code")?.querySelector("pre code");if(u){const v=()=>{a.textContent="Copié",setTimeout(()=>{a.isConnected&&(a.textContent="Copier le code")},2200)};if(navigator.clipboard?.writeText)navigator.clipboard.writeText(u.textContent).then(v).catch(()=>{const b=window.getSelection(),y=document.createRange();y.selectNodeContents(u),b.removeAllRanges(),b.addRange(y),a.textContent="Code sélectionné"});else{const b=window.getSelection(),y=document.createRange();y.selectNodeContents(u),b.removeAllRanges(),b.addRange(y),a.textContent="Code sélectionné"}}return}const t=e.target.closest("[data-takeaway-add]"),s=e.target.closest("[data-takeaway-remove]"),i=e.target.closest("[data-takeaway-advance]");if(t||s||i){try{const u=window.scrollY,v=P();i?$a(v,i.dataset.takeawayAdvance):xa(v,(t||s).dataset[t?"takeawayAdd":"takeawayRemove"],t?1:-1),_(),window.scrollTo(0,u)}catch(u){window.alert(u.message||"Impossible de sauvegarder la commande sur cet appareil.")}return}const r=e.target.closest("[data-table-add]"),n=e.target.closest("[data-table-remove]"),o=e.target.closest("[data-table-advance]");if(o){try{Aa(P(),o.dataset.tableAdvance),_()}catch(u){window.alert(u.message||"Impossible de mettre à jour la commande.")}return}if(r||n){try{const u=window.scrollY;Sa(P(),(r||n).dataset[r?"tableAdd":"tableRemove"],r?1:-1),_(),window.scrollTo(0,u)}catch(u){window.alert(u.message||"Impossible de modifier le panier sur cet appareil.")}return}const l=e.target.closest("[data-public-menu-toggle]");if(l){const u=document.body.classList.toggle("public-menu-is-open");l.setAttribute("aria-expanded",String(u));return}if(e.target.closest("[data-history-back]")){window.history.back();return}const d=e.target.closest("[data-demo-toggle]");if(d){const u=d.closest(".demo-switcher-widget");u&&u.classList.toggle("is-open");return}const p=e.target.closest("[data-catalog-delete]");if(p){const u=p.dataset.catalogDelete,v=p.dataset.id,b=u==="base-product"?"Supprimer ce produit de référence et tous les plats associés dans les cartes des restaurants ?":u==="cuisine"?"Supprimer ce type de cuisine des choix d’inscription ?":"Retirer cette variante de la carte de ce restaurant ?";if(!window.confirm(b))return;try{if(u==="base-product")va(v);else if(u==="cuisine")ua(v);else if(u==="variant")ha(J(P()),v);else throw new Error("Action inconnue.");_()}catch(y){window.alert(y.message||"Impossible de supprimer cet élément.")}return}const h=e.target.closest("a");if(h&&h.getAttribute("href")&&h.getAttribute("href").startsWith("/")){e.preventDefault();let u=h.getAttribute("href");const v=new URL(window.location.href),b=new URL(u,window.location.origin);["profile","establishment"].forEach(x=>{b.pathname!=="/restaurants"&&v.searchParams.has(x)&&!b.searchParams.has(x)&&b.searchParams.set(x,v.searchParams.get(x))}),b.pathname.startsWith("/demo-restau")&&v.searchParams.has("service")&&!b.searchParams.has("service")&&(!new URL(u,window.location.origin).searchParams.has("profile")||new URL(u,window.location.origin).searchParams.get("profile")===v.searchParams.get("profile"))&&b.searchParams.set("service",v.searchParams.get("service"));let y=b.pathname+b.search;y.length>1&&b.pathname.endsWith("/")&&(y=b.pathname.slice(0,-1)+b.search),window.history.pushState({},"",y),_()}e.target.closest("[data-menu-toggle]")&&document.body.classList.toggle("menu-is-open")});window.addEventListener("storage",e=>{(e.key?.startsWith("restauria:service-modes:")||e.key?.startsWith("restauria:catalog:")||e.key?.startsWith("restauria:table-cart:")||e.key?.startsWith("restauria:table-orders:")||e.key?.startsWith("restauria:takeaway:")&&P().serviceModes.includes("takeaway"))&&_()});document.body.addEventListener("submit",async e=>{if(e.target.matches("[data-table-send]")){e.preventDefault();try{const a=P(),t=za(a);window.history.pushState({},"",Ue(a,t,!0)),_()}catch(a){e.target.querySelector("[data-table-error]").textContent=a.message||"Impossible d’envoyer la commande."}return}if(e.target.matches("[data-customer-add]")){e.preventDefault();const a=e.target,t=P(),s=[...a.querySelectorAll('input[name="remove"]:checked')].map(i=>i.value);try{de(t)==="takeaway"?_a(t,a.dataset.item,s):Pa(t,a.dataset.item,s);const i=new URLSearchParams(window.location.search);i.delete("item"),window.history.pushState({},"",`/demo-restau/cart${i.size?`?${i}`:""}`),_()}catch(i){window.alert(i.message||"Impossible d’ajouter ce plat au panier.")}return}if(e.target.matches("[data-restaurant-filters]")){e.preventDefault(),Ke(e.target);return}if(e.target.matches("[data-catalog-form]")){e.preventDefault();const a=e.target,t=a.dataset.catalogForm,s=i=>a.elements.namedItem(i)?.value||"";try{if(t==="cuisine")pa({id:s("id")||void 0,name:s("name")});else if(t==="base-product")ma({id:s("id")||void 0,name:s("name")});else if(t==="variant"){const i=J(P()),r=q().variants.find(c=>c.id===s("id")&&c.profileId===i),n=a.elements.namedItem("photo")?.files?.[0],o=n?await Pt(n):r?.image,l=c=>s(c).split(/\r?\n/).map(d=>d.trim()).filter(Boolean);ga(i,{id:s("id")||void 0,productId:s("productId"),name:s("name"),description:s("description"),priceCents:Math.round(Number(s("price"))*100),image:o,allergens:l("allergens"),removableIngredients:l("removableIngredients")})}else throw new Error("Formulaire inconnu.");if(t==="variant"){const i=new URLSearchParams(window.location.search);i.delete("edit"),window.history.replaceState({},"",`/app/menu${i.size?`?${i}`:""}`)}else window.history.replaceState({},"",t==="cuisine"?"/admin/cuisines":"/admin/products");_()}catch(i){const r=a.closest(".catalog-page").querySelector("[data-catalog-error]");r.hidden=!1,r.textContent=i.message||"Impossible d’enregistrer."}return}if(e.target.matches("[data-auth-demo-form]")){e.preventDefault();const a=e.target;if(window.location.pathname==="/register/restaurant"){const t=[...a.querySelectorAll('input[name="cuisineIds"]:checked')].map(s=>s.value);try{fa({address:a.elements.namedItem("address").value,cuisineIds:t}),a.querySelector("[data-auth-status]").textContent="Adresse et cuisines enregistrées sur cet appareil uniquement. Aucun compte n’a été créé.",a.querySelector("[data-cuisine-error]").textContent=""}catch(s){a.querySelector("[data-cuisine-error]").textContent=s.message}}else a.querySelector("[data-auth-status]").textContent="Cette page est une maquette : aucune donnée n’est envoyée et aucun compte n’est créé. Merci de ne pas saisir de vrai mot de passe.";return}if(e.target.matches("[data-service-modes-form]")){e.preventDefault();const a=e.target;try{sa(P(),["table","takeaway"].filter(t=>a.elements[t].checked)),_(),document.querySelector("[data-service-status]").textContent="Types de commandes enregistrés pour ce restaurant."}catch(t){a.querySelector("[data-service-status]").textContent=t.message||"Impossible d’enregistrer les options."}return}if(e.target.matches("[data-takeaway-checkout]")){e.preventDefault();try{const a=e.target,t=P(),s=ka(t,a.elements.customer.value,a.elements.note.value);window.history.pushState({},"",Be(t,s,!0)),_()}catch(a){e.target.querySelector("[data-takeaway-error]").textContent=a.message||"Impossible d’enregistrer la commande."}return}if(e.target.matches("[data-contact-form]")){e.preventDefault();const a=e.target.querySelector("[data-contact-status]");a&&(a.textContent="Aucun message n’a été envoyé : ce formulaire n’est pas connecté.");return}e.target.closest("[data-prototype-form]")&&e.preventDefault()});document.body.addEventListener("change",e=>{if(e.target.matches('[data-cuisine-selection] input[type="checkbox"]')){const i=e.target.closest("[data-cuisine-selection]");i.querySelectorAll("input:checked").length>5?(e.target.checked=!1,i.querySelector("[data-cuisine-error]").textContent="Choisissez au maximum cinq types de cuisine."):i.querySelector("[data-cuisine-error]").textContent="";return}const a=e.target.closest("[data-restaurant-filters]");if(a){Ke(a);return}const t=e.target.closest("[data-establishment-select]");if(t){const i=new URL(window.location.href);t.value==="all"?i.searchParams.delete("establishment"):i.searchParams.set("establishment",t.value),window.history.pushState({},"",i.pathname+i.search),_();return}const s=e.target.closest("[data-language-select]");s&&(et(s.value),_())});window.addEventListener("popstate",_);
