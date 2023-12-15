# DevOps Mini-Projet 2
Travail de recherche , mettre en place de l'integration continue avec les GitHub Actions

## Informations
- N° de groupe : 14
- Membres du groupe : Ailenei Robert Stefan, Bilic Flaviu, Lucas Gregoire
- Lien: https://github.com/Robert-Ailenei-vinci/Mini-Projet-Group-14.git


## Énoncé

### Pré-requis :
- Sur base de votre mini-projet 1 (TDD)
- Usage de [JEST](https://jestjs.io/docs/getting-started) obligatoire
- Utilisation pulls requests


### Ajouter ce fichier MD à votre mini-projet-1
Compléter les informations concernant votre numéro de groupe et membres du groupe

### Mettre en place une intégration continue
L'intégration continue doit se composer des étapes obligatoires suivantes (non-exhaustif):

    - Les dépendances doivent être installées
    - Une première étape indiquant l'heure de commencement de la pipeline doit être affichée
    - Le code doit être "formatté" correctement (Prettier)
    - Le code doit être "linté" correctement (Lint)
    - Le code doit être "testé" correctement ET le coverage doit être au-dessus de 80% (Jest)
    - Le code doit être "buildé" correctement
    - Une étape indiquant l'heure de fin de la pipeline doit être affichée
    - Une étape indiquant le string suivant "PIPELINE SUCCESS WITHOUT ERRORS" doit être affichée

### Enclencher l'intégration continue lors d'une Pull Request / Merge Request
Ouvrez une Pull Request / Merge Request 
Lors de l'ouverture et/ou de la modification de votre PR/MR vers la branche principale, l'intégration continue doit s'enclencher et les étapes doivent être respectées.
Merci de laisser une PR / MR ouverte afin que l'on puisse évaluer.


Liens utiles:
[GitHub Actions](https://docs.github.com/fr/actions)
[Jest coverage](https://www.valentinog.com/blog/jest-coverage/)

## Questions

- Décrivez brièvement ce que fait votre fichier YML.  
```bash
Mon fichier YML verifie si une pull request est eligible pour le merge: elle verifie si elle peut installer les dependances, elle formatte le code avec Prettier, Lint le code, fait passer à la pull request toute la serie de tests, qui en meme temps verifie que le coverage depasse les 80% , build le code grace a babel. Au debut, il indique la date de debut et si tout se passe bien, la date de fin et un message qui indique cela s est bien passé.
```
- En particulier : à quoi sert le “on” ? dans votre fichier YML ?  Quelle est la différence entre “on push” et “on pull request”. Que conseilleriez-vous comme option parmi ces 2 options à un groupe de développeurs junior ? Pourquoi ? 
```bash
Le 'on' sert de "trigger". C est à dire quand est-ce que la pipeline sera t elle appelée? "On push" veut dire que la pipeline sera appelée à chaque push et "on pull request" veut dire que à chaque pull request la pipeline sera appelée. Cependant il y a une difference entre les deux: "on push" n empeche pas le code de la branch sur laquelle on travaille d etre modifié. Donc si je fais un push, le code sera bel et bien pushé même si la pipeline me dit que il y a des problemes. On pull request remedie ce probleme car il faut que cette modification soit accéptée par un humain qui verra si la pipline a fail.
```
- Quelle est la différence entre run et run_on ?  Expliquez par rapport à votre pipeline.  
```bash
"runs_on" et "run" sont des clés differentes: runs_on permet de specifier l environnement d exécution où le travail sera exécuté. Dans notre fichier .yml ce sera du ubuntu-latest. "run" est utilisé dans les étapes d un job pour exécuter une commande ou un script. par exemple: run npm install pour installer les dependencies.
```
- Quelle est la différence entre “use” et “run”. Expliquez par rapport à votre pipeline. 
```bash
"Use" nous permet de spécifier une action que nous voulons utiliser dans une étape de notre travail. Par exemple dans notre pipeline: le travail utilise l action checkout version 2, qui est une action préconstruite fournie par GitHub pour vérifier le code du dépôt dans l environnement d exécution. "run" est utilisé dans les étapes d un job pour exécuter une commande ou un script. par exemple: run npm install pour installer les dependencies.
```
- Peut-on intervertir différentes étapes dans votre pipeline ? Que votre réponse soit oui ou non, expliquez par rapport à votre pipeline. 
```bash
Oui, elles peuvent l être mais pas toutes car ca depend des dépendences entre les étapes. par exmple "Install dependencies" devra toujours être premier et "Build code" devra etre derniere car elle dépend du code ayant été formaté, linté et testé. Cependant tous les scripts qui ne sont pas dependents ou font dependre d autres scripts peuvent etre interchangés entre "Install dependencies" et "Build code".
```
- Je veux ajouter un test de sécurité sur mon pipeline en exécutant le programme secure_app. Que devrais-je faire ?  Quelles questions devriez-vous vous poser ? 
```bash
La premiere question que je me poserais serait celle ci: secure_app est-elle une action préconstruite fournie? Dans ce cas je pourrais utiliser le "uses". Si ce n est pas le cas, je ferais cela: - name: Run security tests
"run": secure_app. Est ce que secure_app fonctionne seulement sur Windows?. Avec quelle version de node.js secure_app est il fait pour fonctionner? Je devrais eventuelement changer la version.
```
