# HTML localization van EN tot CN

++++++++++++++++ html & head +++++++++++++++++++
<html class="no-js" xmlns="http://www.w3.org/1999/xhtml" xml:lang="en-US" lang="en-US" dir="ltr" prefix="og: http://ogp.me/ns#">
														 xml:lang="zh-CN" lang="zh-CN"
M 														 xml:lang="zh_CN" lang="zh_CN" 									x zh-CN not zh_CN

<title>Accessibility - Apple</title>
					   <!--#echo encoding='none' var='GEO_pageTitleSuffix' --></title>
M					   <!--#echo encoding='none' var='GEO_pageTitleSuffix' --></title>									+ copied, same across site variable
																														x do not change change og:url
<meta property="og:locale" content="en_US" />
						   content="zh_CN"																				+ og:locale  format correct zh_CN
<meta property="og:site_name" content="Apple" />
							  content="<!--#echo encoding='none' var='GEO_homePageTitle' -->"							x variable name is wrong

																												  		Note: all added below us style links...
A 	<link rel="stylesheet" href="/wss/fonts?family=SF+Pro+SC&amp;weights=300,400,500,600&amp;v=1" type="text/css">
A 	<link rel="stylesheet" href="/global-cn/styles/sfpro-cn.css" />														x add text.css
A 	<!--[if IE]>																										x add IE format
A 	<link rel="stylesheet" href="/wss/fonts?family=SF+Pro+SC&amp;weights=300,400,500,600&amp;v=1" type="text/css">
A 	<link rel="stylesheet" href="/global-cn/styles/sfpro-cn-ie.css" />
A 	<![endif]-->
																														x do not change: built file's url
总结:
	a. lang 和 locale 的 写法区别: zh-CN(lang) / zh_CN(locale)
	b. 在 CN 页面中的变量名在title 和 og:site_name 中使用的并不一样
		- variable in title: 			 var='GEO_pageTitleSuffix'
		- variable in og:site_name:		 var='GEO_homePageTitle'
	c. font 引用格式:		以SF Pro 为模版 -> | 	families 改成 family |在Pro后写 +SC&amp; 和 weights=300,400,500,600&amp;v=1" type="text/css">|去除其他
	d. 添加 text css 的引用， 格式为：	<link rel="stylesheet" href="/global-cn/styles/sfpro-cn.css" />
	e. 需要修改的点包括:
						+ html lang
						+ title
						+ og:locale
						+ og:site_name
						+ link > font
						+ link > text

++++++++++++++++ html & head +++++++++++++++++++
++++++++++++++++ body +++++++++++++++++++

A  <div style="display:none;"><img src="/accessibility/r/images/meta/wechat/accessibility__d3k04fax5jyq_og.png" alt=""></div>

M <nav id="ac-localnav" class="no-js ac-localnav-scrim"lang="en-US"></nav>
													   lang="zh-CN"
M 	<a href="https://support.apple.com/en-us/HT202362"></a> 		support.apple.com/en-us -> /zh-cn/
									  /zh-cn/HT202362" 				** this one is changed because of lang, not the link **
	<a href="/shop/accessories/all-accessories/accessibility"></a>	** shop/ link **
		  /cn/shop/accessories/all-accessories/accessibility
	<div data-newsroom-feed-url="https://www.apple.com/newsroom/article.accessibility.json"></div>
								 https://www.apple.com.cn/newsroom/article.accessibility.json" 		**.json**



	f. 注脚不用在这一步做
	g. 删除段落也不是在这一步做，比如删除 apple-tv section

++++++++++++++++ body +++++++++++++++++++
++++++++++++++++ footer +++++++++++++++++++
<footer lang="en-US"></footer>
		lang="zh-CN"

总结:
	h. 注脚不用在这一步做
	i. vo 也不要在这一步做
++++++++++++++++ footer +++++++++++++++++++


# HTML localization van EN tot HK
++++++++++++++++ body +++++++++++++++++++
<a href="/accessibility/cognitive/" data-analytics-title="all cognitive features">					*** data-analytics-title *** most of the class
		/hk/accessibility/cognitive/
<a href="/accessibility/cognitive/" class="ac-ln-menu-link">										*** ac-ln-menu-link ***
		"/hk/accessibility/cognitive/"

++++++++++++++++ body +++++++++++++++++++

++++++++++++++++ footer +++++++++++++++++++
<a href="/" class="home ac-gf-breadcrumbs-home">
<a href="/hk/" class="home ac-gf-breadcrumbs-home">													*** ac-gf-breadcrumbs***
++++++++++++++++ footer +++++++++++++++++++



# sublime localization countries rules
1. all lang attrs									en-US
2. title tag 										var='GEO_pageTitleSuffix'
3. og:locale										en_US
4. og:site_name										var='GEO_homePageTitle'
5. font css / text css / IE 						v 保持一致，字重
6. wechat image     								div style="display:none;"><img src="..." alt=""></div> meta > wechat / naming is same as meata
7. shop links & anchor tag with local url path

support link : confirm link is working / contact pm /
				en-us /  kb
				zh-cn
json link: confirm with pm / keep us version
pdf 	   confirm with pm

shop link : href="/hk-zh/shop/goto/product/MV7N2"
shop link : href="/cn/shop/goto/product/MV7N2"

<div id="newsroom-gallery" class="newsroom-gallery-container" data-component-list="Newsroom" data-newsroom-feed-url="https://www.apple.com/newsroom/article.accessibility.json" data-newsroom-item-limit="6" role="group" aria-labelledby="newsroom-header">

main.built  x
overview 	?
js 			x