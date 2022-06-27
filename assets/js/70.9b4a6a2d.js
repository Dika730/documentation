(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{415:function(e,t,a){"use strict";a.r(t);var s=a(48),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"updating-the-panel"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#updating-the-panel"}},[e._v("#")]),e._v(" Updating the Panel")]),e._v(" "),a("p",[e._v("This documentation covers the process for updating within the "),a("code",[e._v("1.x")]),e._v(" series of releases. This means updating from\n— for example — "),a("code",[e._v("1.5.0")]),e._v(" to "),a("code",[e._v("1.6.0")]),e._v(". "),a("strong",[e._v("Do not use this guide for upgrading from "),a("code",[e._v("0.7")]),e._v(".")])]),e._v(" "),a("h2",{attrs:{id:"panel-version-requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#panel-version-requirements"}},[e._v("#")]),e._v(" Panel Version Requirements")]),e._v(" "),a("p",[e._v("Each version of Pterodactyl Panel also has a corresponding minimum version of Wings that\nis required for it to run. Please see the chart below for how these versions line up. In\nmost cases your base Wings version should match that of your Panel.")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Panel Version")]),e._v(" "),a("th",[e._v("Wings Version")]),e._v(" "),a("th",[e._v("Supported")]),e._v(" "),a("th",[e._v("PHP Versions")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("1.0.x")]),e._v(" "),a("td",[e._v("1.0.x")]),e._v(" "),a("td"),e._v(" "),a("td",[e._v("7.3, 7.4")])]),e._v(" "),a("tr",[a("td",[e._v("1.1.x")]),e._v(" "),a("td",[e._v("1.1.x")]),e._v(" "),a("td"),e._v(" "),a("td",[e._v("7.3, 7.4")])]),e._v(" "),a("tr",[a("td",[e._v("1.2.x")]),e._v(" "),a("td",[e._v("1.2.x")]),e._v(" "),a("td"),e._v(" "),a("td",[e._v("7.3, 7.4")])]),e._v(" "),a("tr",[a("td",[e._v("1.3.x")]),e._v(" "),a("td",[e._v("1.3.x")]),e._v(" "),a("td"),e._v(" "),a("td",[e._v("7.4, 8.0")])]),e._v(" "),a("tr",[a("td",[e._v("1.4.x")]),e._v(" "),a("td",[e._v("1.4.x")]),e._v(" "),a("td"),e._v(" "),a("td",[e._v("7.4, 8.0")])]),e._v(" "),a("tr",[a("td",[e._v("1.5.x")]),e._v(" "),a("td",[e._v("1.4.x")]),e._v(" "),a("td"),e._v(" "),a("td",[e._v("7.4, 8.0")])]),e._v(" "),a("tr",[a("td",[e._v("1.6.x")]),e._v(" "),a("td",[e._v("1.4.x")]),e._v(" "),a("td"),e._v(" "),a("td",[e._v("7.4, 8.0")])]),e._v(" "),a("tr",[a("td",[e._v("1.7.x")]),e._v(" "),a("td",[e._v("1.5.x")]),e._v(" "),a("td"),e._v(" "),a("td",[e._v("7.4, 8.0")])]),e._v(" "),a("tr",[a("td",[e._v("1.8.x")]),e._v(" "),a("td",[e._v("1.6.x")]),e._v(" "),a("td"),e._v(" "),a("td",[e._v("7.4, 8.0, 8,1")])]),e._v(" "),a("tr",[a("td",[a("strong",[e._v("1.9.x")])]),e._v(" "),a("td",[a("strong",[e._v("1.6.x")])]),e._v(" "),a("td",[e._v("✅")]),e._v(" "),a("td",[e._v("7.4, 8.0, 8,1")])])])]),e._v(" "),a("h2",{attrs:{id:"update-dependencies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-dependencies"}},[e._v("#")]),e._v(" Update Dependencies")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("Minimum PHP Version Changed")]),e._v(" "),a("p",[e._v("If you are upgrading from a version of Pterodactyl "),a("em",[e._v("prior to")]),e._v(" "),a("code",[e._v("1.3.x")]),e._v(" you'll need to update your PHP\ndependencies. The latest versions of Pterodactyl Panel require a "),a("strong",[e._v("minimum version of PHP 7.4")]),e._v(" and\nComposer v2.")])]),e._v(" "),a("ul",[a("li",[e._v("PHP "),a("code",[e._v("7.4")]),e._v(", "),a("code",[e._v("8.0")]),e._v(" or "),a("code",[e._v("8.1")]),e._v(" (recommended)")]),e._v(" "),a("li",[e._v("Composer "),a("code",[e._v("2.X")])])]),e._v(" "),a("p",[e._v("Previous versions of Pterodactyl allowed for you to be running PHP 7.3. However, due to dependency updates and\nthe fact that 7.3 is now EOL we have bumped the minimum acceptable PHP version to 7.4 — PHP 8 is recommended. You\nwill also need to be using Composer v2.")]),e._v(" "),a("p",[a("strong",[e._v("Before continuing")]),e._v(", please ensure that your system and web server configuration has been upgraded to at least PHP 7.4 by running "),a("code",[e._v("php -v")]),e._v(" and Composer 2 by running "),a("code",[e._v("composer --version")]),e._v(". You\nshould see an output similar to the result below. If you do not see at least PHP 7.4 and Composer 2, you will need to upgrade by following\nour "),a("RouterLink",{attrs:{to:"/guides/php_upgrade.html"}},[e._v("PHP Upgrade Guide")]),e._v(" and return to this documentation afterward.")],1),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("vagrant@pterodactyl:~/app$ php -v\nPHP 8.1.5 (cli) (built: Apr 21 2022 10:32:13) (NTS)\nCopyright (c) The PHP Group\nZend Engine v4.1.5, Copyright (c) Zend Technologies\n    with Zend OPcache v8.1.5, Copyright (c), by Zend Technologies\n\nvagrant@pterodactyl:~/app$ composer --version\nComposer version 2.3.5 2022-04-13 16:43:00\n")])])]),a("h2",{attrs:{id:"self-upgrade"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#self-upgrade"}},[e._v("#")]),e._v(" Self Upgrade")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("The self-upgrade is currently in-operable due to issues with some dependencies we make use of.\nFor the time being please perform a manual upgrade until this issue can be resolved.")])]),e._v(" "),a("h2",{attrs:{id:"manual-upgrade"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#manual-upgrade"}},[e._v("#")]),e._v(" Manual Upgrade")]),e._v(" "),a("p",[e._v("If you prefer not to perform the automatic self-upgrade, or need to reference any upgrade steps you can follow\nthe documentation below.")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("If you've already performed the self-upgrade successfully you do not need to do anything else on this page.")])]),e._v(" "),a("h3",{attrs:{id:"enter-maintenance-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enter-maintenance-mode"}},[e._v("#")]),e._v(" Enter Maintenance Mode")]),e._v(" "),a("p",[e._v("Whenever you are performing an update you should be sure to place your Panel into maintenance mode. This will prevent\nusers from encountering unexpected errors and ensure everything can be updated before users encounter\npotentially new features.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" /var/www/pterodactyl\n\nphp artisan down\n")])])]),a("h3",{attrs:{id:"download-the-update"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#download-the-update"}},[e._v("#")]),e._v(" Download the Update")]),e._v(" "),a("p",[e._v("The first step in the update process is to download the new panel files from GitHub. The command below will download\nthe release archive for the most recent version of Pterodactyl, save it in the current directory and will automatically\nunpack the archive into your current folder.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" -L https://github.com/pterodactyl/panel/releases/latest/download/panel.tar.gz "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("tar")]),e._v(" -xzv\n")])])]),a("p",[e._v("Once all of the files are downloaded we need to set the correct permissions on the cache and storage directories to avoid\nany webserver related errors.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("chmod")]),e._v(" -R "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("755")]),e._v(" storage/* bootstrap/cache\n")])])]),a("h3",{attrs:{id:"update-dependencies-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-dependencies-2"}},[e._v("#")]),e._v(" Update Dependencies")]),e._v(" "),a("p",[e._v("After you've downloaded all of the new files you will need to upgrade the core components of the panel. To do this,\nsimply run the commands below and follow any prompts.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("composer "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" --no-dev --optimize-autoloader\n")])])]),a("h3",{attrs:{id:"clear-compiled-template-cache"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clear-compiled-template-cache"}},[e._v("#")]),e._v(" Clear Compiled Template Cache")]),e._v(" "),a("p",[e._v("You'll also want to clear the compiled template cache to ensure that new and modified templates show up correctly for\nusers.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("php artisan view:clear\nphp artisan config:clear\n")])])]),a("h3",{attrs:{id:"database-updates"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#database-updates"}},[e._v("#")]),e._v(" Database Updates")]),e._v(" "),a("p",[e._v("You'll also need to update your database schema for the newest version of Pterodactyl. Running the command below\nwill update the schema and ensure the default eggs we ship are up to date (and add any new ones we might have). Just\nremember, "),a("em",[e._v("never edit core eggs we ship")]),e._v("! They will be overwritten by this update process.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("php artisan migrate --seed --force\n")])])]),a("h3",{attrs:{id:"set-permissions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-permissions"}},[e._v("#")]),e._v(" Set Permissions")]),e._v(" "),a("p",[e._v("The last step is to set the proper owner of the files to be the user that runs your webserver. In most cases this\nis "),a("code",[e._v("www-data")]),e._v(" but can vary from system to system — sometimes being "),a("code",[e._v("nginx")]),e._v(", "),a("code",[e._v("caddy")]),e._v(", "),a("code",[e._v("apache")]),e._v(", or even "),a("code",[e._v("nobody")]),e._v(".")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# If using NGINX or Apache (not on CentOS):")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("chown")]),e._v(" -R www-data:www-data /var/www/pterodactyl/*\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# If using NGINX on CentOS:")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("chown")]),e._v(" -R nginx:nginx /var/www/pterodactyl/*\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# If using Apache on CentOS")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("chown")]),e._v(" -R apache:apache /var/www/pterodactyl/*\n")])])]),a("h3",{attrs:{id:"restarting-queue-workers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#restarting-queue-workers"}},[e._v("#")]),e._v(" Restarting Queue Workers")]),e._v(" "),a("p",[e._v("After "),a("em",[e._v("every")]),e._v(" update you should restart the queue worker to ensure that the new code is loaded in and used.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("php artisan queue:restart\n")])])]),a("h3",{attrs:{id:"exit-maintenance-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#exit-maintenance-mode"}},[e._v("#")]),e._v(" Exit Maintenance Mode")]),e._v(" "),a("p",[e._v("Now that everything has been updated you need to exit maintenance mode so that the Panel can resume accepting\nconnections.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("php artisan up\n")])])]),a("p",[a("RouterLink",{attrs:{to:"/wings/1.0/upgrading.html"}},[e._v("Final Step: Upgrade Wings")])],1)])}),[],!1,null,null,null);t.default=n.exports}}]);