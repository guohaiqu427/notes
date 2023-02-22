1.HTML
*** 修改xml & lang  ***，
*** 写法 lang_REGION ***
CN		xml:lang="zh-CN" lang="zh-CN"
HK		xml:lang="zh-HK" lang="zh-HK"
MO		xml:lang="zh-MO" lang="zh-MO"
TW		xml:lang="zh-TW" lang="zh-TW"
HKEN	xml:lang="en-HK" lang="en-HK"
US 		xml:lang="en-US" lang="en-US"

2.Title
*** CN大首页标题额外加 - 官方网站 ***，
*** HKEN大首页   Apple (Hong Kong) ***
*** HKEN其他首页 Apple (HK) ***

CN		Apple Music - Apple (中国大陆)
		Apple (中国大陆) - 官方网站
HK		Apple Music - Apple (香港)
		Apple (香港)
MO		Apple Music - Apple (澳門)
		Apple (澳門)
TW		Apple Music - Apple (台灣)
		Apple (台灣)
HKEN	Apple Music - Apple (HK)
		Apple (Hong Kong)
US 		Apple Music - Apple


3.Meta
*** meta property and name list ***

------------
			og:image  			+/x 	change upon request
			og:title 			x 		same * 6
			og:description 		+ 		same as name="Description"
			og:locale			+ 		en_US  en_HK ...
			og:url 				+ 		url change
			og:site_name    	+ 		og:title
-------------
			description			+ 		og:title
			twitter:site 		x 		same * 6
name		twitter:card		x 		same * 6
			analytics-track  	x 		same * 6
-----------------
> og stands for Open Graph tags
[The Open Graph protocol](https://ogp.me/#metadata)

4.Head > links
...
Font 		href='/wss/....SF+Pro+[SC/TC/HK]' 										* MO
Text   		href='/[tw/mo/hk/global-cn]/global/styles/sfpro-[tw/mo/hk/cn].css' 		* global-cn
Built 		href="[hk/hk\/en/mo/tw/'']/apple-music/styles/overview.built.css"  		* cn differ
Images 		href="[hk/hk\/en/mo/tw/'']/apple-music/styles/overview.images.css"  	* cn differ

5. body > wechat image
*** the first div of boday tag ***
*** only CN ***

<div style="display:none;"><img src="/airpods-3rd-generation/images/meta/wechat/airpods-3rd-generation__gfzix8dj5auu_og.png" alt=""></div>