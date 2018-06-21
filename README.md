# opml-react
dans le but de livré le MVP au plus rapide les fonctionnalités déployées sont les suivantes

ajout d'item dans la liste
indentation et annulation de l'indentation de l'item avec la souris


pour la création de l'application l'outil create-react-app à été utilisé
application est proposée en 3 composants 
le todoInput pour l'ajout d'un item
le todoListe pour l'affichage des items rajoutés avec l'intéraction au click pour indenter ou non l'item cliqué
puis Todo pour afficher les composants et aussi le transfert des données entre les composants.

Les données sont entrées par l'input et sont envoyées à la soumission du formulaire.
Todo le récupere et le redistribue à totoliste qui lui les rajoutes à son tableau d'item. 
Des que sont tabelau d'item à des données il les affiches.
Todo écoute les evenements click et le cible par son index pour qu'il informe todolist quel item est sélectionné.
Ainsi il peut assurer l'indentation ou le retrait de l'item.
