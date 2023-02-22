# Generic Changes

1. lang attr : fomat is zh-CN
2. locale : format is zh_CN
3. - variable in title & og:site_name: ```var='GEO_pageTitleSuffix'``` ``` var='GEO_homePageTitle' ```
4. links [font. text. built. images, ie]
    - Link: Rules in HTML localization:
    - Font: ```href='/wss/....SF+Pro+[SC/TC/HK]' ```
    - Text: ```href='/[tw/mo/hk/global-cn]/global/styles/sfpro-[tw/mo/hk/cn].css'``` cn* global-cn
    - Built: ```href="[hk/hk\/en/mo/tw/'']/apple-music/styles/overview.built.css"```cn* without the local 'cn/'
    - Images: ```href="[hk/hk\/en/mo/tw/'']/apple-music/styles/overview.images.css" ```* cn* without the local 'cn/'
    - IE: ```<!--[if IE]>....<![endif]-->```
5. OGs and name properties 
    - image: upon request
    - title: [CHAOS]
    - og:title: [CHAOS]
    - og:site_name: [CHAOS]
    - og: description =  ```name="Description" ```
    - locale: ```property="og:locale" content="zh_HK"```
    - og:url: link back to itself 
    - ```name="Description"```'s Value = ```property="og:description" ```'s Value
6. Others: 
    - f. 注脚不用在这一步做
    - g. 删除段落也不是在这一步做，比如删除 apple-tv section
    - h. 注脚不用在这一步做
    - i. vo 也不要在这一步做
    - j. support link : confirm link is working / contact pm /
    - k. json link: confirm with pm / keep us version
    - l. pdf:confirm with pm
    - x. do not change: built file's url


# Topic Naming Chaos
> title = og: title + og:site_name
> 
> Keywords: **(中国大陆) - 官方网站** | **HK** |  **Hong Kong**
## Homepage 
- On homepage, the title / og: title / og: site_name has the same value!
US: Apple
CN: Apple (中国大陆) - 官方网站
TW: Apple (台灣)
MO: Apple (澳門)
HKEN: Apple (Hong Kong) 

## Product page
> HKEN: on **[Product sites**'] [og:site_name and title]: **Apple (HK)**
> HKEN: on [**Homepage**] All is called **Apple (Hong Kong)**
- On product sites, it follows the following rules with two exceptions on CN / HKEN! 
-  **title = og:title + og:site_name**                                                               
![16601146155885](assets/16601146155885.png)


# Wechat Section 
- Only CN
- Both the AOW & MOW page need this section

# local Nav 
- Copy need to be localized ``` 區域導覽開啟選單 / 區域導覽關閉選單```
- CTA copy need to be localized ```購買```

```
<h3 class="more-magic-headline cl_06 cs_00">
<span class="headline-center-l">，</span>
<span style="position: absolute;">。</span>
<br class="large" /><br class="medium" /><br class="small" />

具体样式可以查看 global 中的样式。
```

 App 的写法标准：

* Link 里面的 App ，HK 和 TW 要大写；
  Link 里面的 App ，CN 是小写。
* Headline 中全部语言大写 A。
* CN 中文标题的 App 没有单复数形式。


Footnote
- the order 
    - ```* ◊```comes before the numbers
    - the order for numbered footnotes are counted by the first occurance of that footnote. 
    - if there is any other text need to use that footnote, **copy**
    - aira-label's value need to be translated.
    - footnote should not appear at the begining of a sentence. 
    - chinese vs english footnotes 
        - 免費睇7。
        - audio devices.7

Links

- cn 域名不要加locale prefix
- mo 出现 shop 链接即删除
- hken 出现第三方app链接时，修改注意点： 
    - ```/us``` -> ```/hk``` 
    - add at the end: ```&l=en```
    - check if the link works

Footnote

1. change lang attr 
2. change aria-labels
3. change breadcrumbs's span content
```
<footer lang="en-US">
    <h2>Apple Footer</h2>
    <section class="ac-gf-sosumi" aria-label="脚注">
    <nav class="ac-gf-breadcrumbs" aria-label="Breadcrumbs">
        ... deep nested span ... 
            <div><ol><li><span>AirPods
        ... deep nested span ...
    </nav> 
</footer>

<footer lang="zh-CN">
    <h2>Apple 网页页脚</h2>
    <section class="ac-gf-sosumi" aria-label="Footnotes">
    <nav class="ac-gf-breadcrumbs" aria-label="网页结构导航">
        ... deep nested span ... 
            <div><ol><li><span>AirPods
        ... deep nested span ...
    </nav>
</footer>
```

sisi: meta 区域、 aria-label、图片、链接、动画、调节样式等
