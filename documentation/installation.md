# Installation (Windows)

## À installer avant de débuter
	
Installez les éléments suivant sur votre ordinateur:

* [Git](https://git-scm.com/downloads)

* [NodeJS](https://nodejs.org/en/) *(inclut npm)*

* [Composer](https://getcomposer.org/download/) *(installation globale)*

* [Grunt](https://gruntjs.com/) `npm install -g grunt-cli`

* [Wamp](http://www.wampserver.com/fr) *(x64)*

* Assurez-vous d'avoir PHP 5.6 parmis vos variable de chemin Windows php -v

* Installez votre éditeur de texte préféré *(Notepad++, sublime, phpstorm, visualstudio, etc.)*

	> Ajoutez les syntaxes Twig et Less
	
	> Personnellement, j’utilise Notepad++ avec le style « Zenburn » dans `settings -> style configurator` avec ces deux fichiers XML comme langage dans `Language -> define your language`:
	[less.xml](./useful-stuff/less-zenburn-np++.xml) et [twig.xml](./useful-stuff/twig-np++.xml)
	

	
### Quelques petits points facultatifs de plus 

* Sous Chrome, installez un plugin pour pouvoir lire et éditer les fichier `.md` *Mark Down File*. Facilite la manipulation de ces fichiers en local.

* Installez [Advanced REST client](https://chrome.google.com/webstore/detail/advanced-rest-client/hgmloofddffdnphfgcellkdfbfbjeloo) afin de tester les connections avec le serveur. 

* Ne pas utiliser `Phpmyadmin` pour visionner l'évolution de la BDD, utilisez plutot [HeidiSQL](https://www.heidisql.com/download.php) 
	
	> ne jamais rien modifier dans la BDD sans les commandes Symfony
	
* Le CLI n'a pas d'importance, j'utilise *windows PowerShell*



## Installation du projet

Exécutez les commandes suivantes:

* Changez votre email pour vous connecter au repo `git config --global user.email "votre@email.com"`

* Téléchargez le projet `git clone https://github.com/Gcob/patrick-website`

* Pour installer les dépandances de composer, indiquez à votre CLI le chemin d'accès du dossier de Symfony (ex.: `cd C:/website/symfony`): 

	* Composer global : `composer install`
		
	* Composer non-global : `php composer.phar install` 
	
		> assurez-vous d'avoir le fichier composer.phar dans le dossier de symfony
		
* Pour installer les dépandances de grunt, indiquez à votre CLI le chemin d'accès du dossier de Grunt (ex.: `cd C:/website/grunt`) et exécutez la commande suivante: `npm install`

* Créez et peuplé la BDD en local (formate les données de la BDD)

	* `php app/console doctrine:database:create`
	
	* `php app/console doctrine:schema:update --force`
	
	* `php app/console doctrine:fixtures:load`
	

## Démarrez votre environnement de tavail virtuel

L'objectif est de tous avoir le même environnement de développement. Vous pouvez aussi utiliser des environnement virtuelle ou autre, assurez-vous juste d'avoir les mêmes paramètres que le serveur.

* Démarrez le serveur Wamp 

	> Notez que Wamp est uniquement employé pour la base de donné SQL. Apache et php seront exécuté à partir du serveur fournis par Symfony
	
* Faites roulez Symfony avec la commande suivante: `php bin/console server:run`.  

* Faites roulez Grunt sous *watch mode* pour compiler les fichiers Less dès qu'ils changent. `grunt ac`

	> Pour simplement compiler le LESS, par exemple pour débuguer, exécutez `grunt c` 
	
> Petite astuce: Vous remarquerez la quantité de programme qui roule en background. Pour facilité le développement sous windows 10, je vous conseil de créer un bureau virtuel Windows Key + Ctrl + D. Pour la navigation entre les bureaux: Windows Key + Ctrl + left/right arrow. [Vérifiez comment manipuler les bureaux de travail virtuel ici](https://www.howtogeek.com/197625/how-to-use-virtual-desktops-in-windows-10/) 

## Have fun!

[Retournez à la documentation principal](./index.md)