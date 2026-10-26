# AUDIT.md : à compléter

Pour chaque ligne, retrouve le problème correspondant dans `src/App.tsx` / `src/App.css`
et remplis les 3 colonnes. Il y a **6 problèmes volontaires** dans ce starter.

| # | Problème trouvé (où, quoi) | Principe WCAG (P / O / U / R) | Pourquoi c'est bloquant, et pour qui |
|---|------------------------------|-------------------------------|----------------------------------------|
| 1 |Balise <img> d'un article |Perceptible |L'image ne possède pas de texte alternatif pertinent. Une personne aveugle utilisant un lecteur d'écran ne peut donc pas comprendre l'information transmise par cette image. |
| 2 |Hiérarchie des titres : le h3 arrive directement après le h1 |Compréhensible |La hiérarchie des titres est incohérente : un niveau intermédiaire manque, notamment le h2. Cela peut rendre la structure de la page plus difficile à comprendre et à parcourir avec un lecteur d'écran. |
| 3 |Bloc see-more utilisant un div onClick |Utilisable |Un <div> interactif n'est pas accessible au clavier par défaut. Les personnes qui ne peuvent pas utiliser une souris risquent de ne pas pouvoir activer la fonction « Voir plus ». Sans rôle ni nom accessible appropriés, son usage peut également être mal annoncé aux lecteurs d'écran. |
| 4 |Bandeau newsletter en mouvement, sans possibilité de pause ou de fermeture |Utilisable |Les personnes qui ont besoin de plus de temps pour lire, qui présentent des troubles de l'attention ou qui utilisent des technologies d'assistance peuvent être gênées par le mouvement continu. Elles doivent pouvoir mettre en pause, arrêter ou masquer le contenu lorsque le critère s'applique. |
| 5 |Les trois liens en bas de page portent tous le texte « cliquez ici » |Compréhensible |Les intitulés ne décrivent pas la destination des liens. Lorsqu'une personne utilisant un lecteur d'écran affiche la liste des liens hors contexte, elle ne peut pas distinguer leur fonction ni savoir où chacun mène. |
| 6 |Statut « annulé » indiqué uniquement par un rond de couleur |Perceptible |L'information repose uniquement sur la couleur. Les personnes daltoniennes ou consultant la page en noir et blanc risquent de ne pas identifier le statut de l'article. Il faut ajouter une indication textuelle ou un autre marqueur visuel explicite. |

> Rappel : P = Perceptible, O = Opérable, U = Utilisable (Compréhensible), R = Robuste.
