# SportSee (OC - P12)

![Logo](https://maxime-malfilatre.com/misc/logo.png)

## Objectif

- Intégrer des graphiques et des diagrammes avec REact pour SportSee, un tableau de bord d'analytics de sport.

## Compétences cibles

-   Assurer la qualité des données d'une application
-   Développer des éléments graphiques avancés à l'aide de bibliothèques JavaScript
-   Interagir avec un service Web

## Installation

### frontend

1. Cloner le repo
   ```sh
   git clone https://github.com/maxew33/OC-P12-SportSee.git
   ```
2. Installer les packages
   ```sh
   npm install
    ```

### backend

Le backend peut être récupéré sur le repo suivant : [sportSee back](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard)

### Lancement

Dans le terminal, taper la commande : `npm run dev`

Pour l'instant, il n'y a que deux utilisateurs : adhérent n°12 (Karl) et adhérente n°18 (Cecilia)

Pour afficher le tableau de bord d'analytics, **il faut rentrer le numéro d'adhérent.e**.

Par défaut le site est en mode développement et utilise les données mockées. 

#### Pour tester l'utilisation du back-end :
* Il faut lancer celui-ci (soit avec docker, soit en le clonant puis en utilisant la commande `yarn dev`).

* soit aller dans 'src/callData/CallData.tsx' et remplacer 'import.meta.env.PROD' par 'import.meta.env.DEV'
* soit aller sur le [site déployé](https://maxew33.github.io/OC-P12-SportSee/)

## Ressources

-   [Maquettes](https://www.figma.com/file/BMomGVZqLZb811mDMShpLu/UI-design-Sportify-FR?type=design&node-id=0-1&mode=design&t=3UuBw4tuz2Y00Usm-0)
-   [User stories](https://openclassrooms.notion.site/Tableau-de-bord-SportSee-6686aa4b5f44417881a4884c9af5669e)

## Aperçu

![sportSee](https://maxime-malfilatre.com/misc/screen.png)

## Author

-   [Maxime Malfilâtre](https://www.github.com/maxew33)