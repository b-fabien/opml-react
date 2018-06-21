# opml-react
dans le but de livré le MVP au plus rapide les fonctionnalités déployées sont les suivantes

ajout d'item dans la liste
indentation et annulation de l'indentation de l'item avec la souris

application proposée en 3 composants 
le todoInput pour l'ajout d'un item
le todoListe pour l'affichage des items rajoutés avec l'intéraction au click pour indenter ou non l'item cliqué
puis Todo pour afficher les composants et aussi le transfert des données entre les composants.

le todoInput reçoit les données sous forme de string par le champs input à la soumition du formulaire
Les données sont envoyées au parents (composant Todo) par l'intermediare de la function handleSubmit() passée par les "props"
le composant Todo compare les données avec les states d'origines et effectue la mise à jours quand les données ont été changé.
TodoListe n'attend que de données de l'exterieure et affiche les items quand il y en a.
Pour cela il effectue une itération sur chaque éléments du tableau (ici listItems)
Chaque entré du tableau contient des objets (ce qui permet une évolution pour facile de l'application pour rajouter des informations en plus sur les items)
On se sert de la clé pour pourvoir identifier les items indépendatment les uns des autres dans la liste (l'item pourait être transformer en composant pour lui rajouter des spécifiter)
Chaque entré du tableau contient des objets (ce qui permet une évolution pour facile de l'application pour rajouter des informations en plus sur les items)
Le composant permet aussi d'attacher l'écoute de l'évènement click sur chaque item et permet de déclancher la fonction handleClick()
passée par les props avec la valeur de son index. 
Dans le composant Todo l'index permet de faire un tableau temporaire avec les valeurs des states de base.
le tableau temporaire permets de faire un "toggle" sur la clé level qui ensuite permettra de changer le style dans le rendu du composant Todoliste

Avec cette décomposition de l'application d'autres fonctionnalités peuvent venir se gréfer au composant sans perturber le code de base.
La transformation de la fonction todoliste en composant peut etre une evolution de l'application pour rajouter des fonctions sans alourdir le code dans le composant Todo.
Les valeurs ne sont pas changer et un historique des étapes de l'experience utilisateur peut être implémenté pour faire un recule ou un avencement dans les étapes.
