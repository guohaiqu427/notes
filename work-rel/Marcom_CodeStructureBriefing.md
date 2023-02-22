1. beyond compare install and config
	- usage: compare file structure -> file content
	- usage: compare with us / check with preset rules

2. qa tool
	git clone xxxxx
	npm install
	npm run start
	localhost: xxxxx
	od auth

3. code demos
	- ignore puncation (,)
	- half space (6x)
	- no-wrap (2+ words at the end of the sentence)
	- font zh_HK
	- AirPods AR section : portal for experience vr is only available in mobile devices.
		open -a simulator		--> iphone display simulator
	- css file
		- built.css    		: us
		- overview.css 		: layout-rel
		- image.css  		: images-rel
			- CN image path example: /home/images/xxxxx
		- sfproxx.css   	: text-rel
	- ?debugging: (product/compare page ONLY)
		add after the url
		exports backport.hbs(most used: export---> compress----> replace) and json file
	- image.css generation with sublime
		usage: 	generates image path
		steps: 	1. Drag and drop images folder to sublime
				2. Copy css to sublime
				3. If include image size changes, keep the relevent css style (GP will inform alt)
				4. Code fromatting: 'and(' ---> 'and (' (chrome doesn't have this problem)
	- links: beside cn, others need to change rel path
			 aow path is different than others
	- buyStripe : AOW page is replaced with QR code, MO doesn't have this section.

	- footnote matching
		- '* / + ' ignore order/ place on top
		-  generic footnote placed at the bottom of the list

	- option + space in sublime / &nbps  eg: itunes Store

	- folder 105: video and animation
	- voice over labels:
		- aria-label:
		- visable-hidden:
		- data-aria-[xxxxx]
	- .usdz file: AR file
		- not available on AOW pages, only Safari

	- links:
		- CTA link: nav to apple online store team.
			- /hk-zh/
			- /hk/
			- .cn/shop/
			- mo: delete / only retail
		- Support link: Nav to page that's not done by our team

	- global folder: change with caution
	- radar-basics briefing