# Week ( Aug 1 - Aug 5 )

## Brief Tool
要点:
1. 下载后，edit mode 会自动关闭
2. 版本更新，添加v1, v2 ...
3. 在info中修改region为gc，在us下没有 specify locales 选项
4. Question: 是否要添加section？ @Sisi

标记分类:
- Content: 图片更新
- Design: 页面布局 layout 更新
- Copy: 在原文本上修改/删除/添加部分内容
- Code: 可以理解成这块的代码写法变了, eg: new copy; new section
- Remove: 删除

书写规范:
> 对应的语言标记，日期为系统添加。修改内容手动添加。
> 不同的地方加粗或者加下划线标记出来

Copy Update:
From:
**USB** to Gigabit Ethernet Adapter
To:
**Belkin USB** to Gigabit Ethernet Adapter

## Video & Animation training
1. 确认此 Video 在 /105/ 上的所有尺寸的**文件路径**，
2. 我们需要检查所有**尺寸**的 Video
3. 当我们**提交** Video 之后，需要 **GP查**，同时**QA查**，并且最终由**CPM确认**
4. Video需要**先于HTML文件merge**，merge 之后我们需要**检查所有尺寸文件**，避免merge 出错，例如覆盖目录导致删除了其他尺寸文件等

## Product knowledge
> Music, support, airpods, apple-pay, accessibility

需要知道的点:
1. 确认每个分类**是什么**以及其**位置**
2. 确认每个分类需要注意的点:
3. **MO 没有Homepod, Carplay, Google Nest，游戏机**

## Apple Music:
[All regions][apple-music]

确认分类以及位置时遇到的疑问:
1. live radio station **[ HK/TW/MO,~~CN~~ ]**
    - what: live radio 相关的图片和文本
    - where: 出现的位置有[a,b], **<-- Question: 是否是这两个位置！**
        - a: hero视频上的caption，
        - b: card component[radio]里的文本
    - 需要注意的点:

2. 好友歌单 **[ HK/TW/MO,~~CN~~ ]**  **<-- Question: 页面上哪里？**
    - what: **未在us/gc下搜索到关于好友歌单的字眼**，不确定具体指哪个区域，Matrix 上也没有截图指明
    - 需要注意的点:

3. 歌曲数量: **[ All ]**  **<-- Question: 页面上哪里？**
    - **what:**
    - **where**:
    - 需要注意的点: 需要本地化，**特别注意 HK,MO 的数量不同**。


4. 歌曲本地化:  **<-- Question: 是否是页面上出现在iPhone里的图片？,是否包括脚注中的引用**
    - what: 在页面中出现 Apple Music 应用图片时，里面的歌曲/专辑
    - where: 全局图片,脚注中也有可能出现，如：
                “《我的美丽》由 Mogu 和秦四风创作。
                《海上日记》由毛不易创作。”
    - 需要注意的点: **<-- Question: 看不懂表单上面的注释，https://music.apple.com/xx/**

5. Autobook: **<-- Question:找不到，在哪里**
    - what: 未在us/gc下搜索到关于好友歌单的字眼，不确定具体指哪个区域，Matrix 上也没有截图指明
    - 需要注意的点:

6. Hero Animation: **<-- Question:更新图片？**
     - 需要注意的点: 注意本地化

7. 支持裝置:
    - where: 整体页面下方
    - 需要注意的点: MO 没有 Homepod，Carplay，Google Nest，游戏机
                  CN 没有 TV, Google Nest
                  TW 没有 Google Nest。

8. 收费计划
    - where:支持装置上方
    - 需要注意的点: 价格可能有变化。

9. 歌单 **<-- Question:是否是what中提及的地方**
    - what: 全屏横向滚动的playlist图片
    - 需要注意的点: API 调用

10. 安卓下载页面 **<-- Question:找不到**
    - what: https://www.apple.com.cn/apple-music/android-download/
    - 需要注意的点: Mac, iOS 系统显示效果 和 安卓手机不一样，需要**单独查**。 （背景：中国不能打开 Google play）美国没有给 large，meduim 的 PSD, 所以保持原有样式。
    - 去哪里查

11. thank you 页面 **<-- Question:找不到**
     - what: 无法找到页面，这个页面在哪儿
     - 需要注意的点: 同上



## HomePod mini
[Not available in MO][homepod-mini]

1. Hey Siri: **<-- Question:BA是什么缩写，Siri utterance 是什么？**
    - Question: Siri utterance 由 BA 提供? 啥意思啊？

2. Multi-User: **<-- Question:是否是多人个性化区域**
    - gc 下没有这个section

3. Siri utterance **<-- Question:不知道想表达什么？**
    - 是要根据表格更新Hey Siri 在各个地区的显示的内容

4. Personal experience section
    - GC 下没有

5. 第三方 App 本地化 **<-- Question:同上 BA是啥，在CN页面没找到这个section**
    - 仅CN需要本地化，HK/MO/TW: 无
    - 排序也是 BA 确认的。
    - QA需要检查对应性。保证copy和icon的对应

6. system requirement **<-- Question:找不到**
    - 在哪儿？ 全局没搜索结果
    - HK/CN: 兼容 iOS 12.1.1 以后版本TW: 兼容 iOS 12.4 以后版本这个也是 BA 给的。

## Podcasts
[All regions][apple-podcasts]

1. 没有做 AOW **<-- Question:podcast层级下是否都没有做aow呢**
2. V path 不同于美国，但是 呈现效果要和美国相同，所以根据美国最新的效果 更新本地的 CSS.(如字体颜色，按钮颜色，设备颜色。)
3. API:
    1. Top Charts 美国 用的 API, GC 地区因为中国大陆对  API path 的限制，无法调用. 所以整个 GC 保持 V 版本是 A 的 code 结构, 手动排版的gallery， title 也保持 top shows. 美国的 V 版本已经更新到 C (2022-05).
    2. 节目内容由 BA 提供，包括图片、节目名称和 URL。因与美国不同，部分 code 是 dev 写的， 在 QA 阶段需要更多关注。

## Aiprods
[All regions][airpods]

1. 激光镌刻需要 Not available in MO, 需要注意: 镌刻文字 和 图案是否需要本地化.
2. 价格:

## Apple Pay
[All regions][apple-pay]
1. general: **<-- Question:文以难以读通，且不知道具体在那个页面，什么情况下会关注到该点，需要解释**
    - MO: 借記卡(debit cards)在商店及 app 內，透過 Face ID 以 iPhone 付款
    - HKTC: 在商店 app 內及網頁上，透過 FaceID以iPhone付款在Mac上以 Apple Pay 完成付款
    - MO 暫時不能在mac/網站上付款.MO 不能app支付和网上支付 支持ipad,当时只是需要换屏，所以第一轮没有更新


2. NFC 标志 **ALL** **<-- Question:表格中的三张图分别代表什么？**
    - 注意顺序，CN 标识不同
    - 中国大陆已经支持 NFC,
    - 亿通行 2021年6月28日上线，
    - 暂时overview页面没有让更新，因为要改版。

3. local nav **CN/HK**
    - Not available in TW/MO
    - CN 依次为首页,公交,适用范围
    - HK 概覽, 八達通, Octopus
    - 北京支持两种卡，另还支持亿通行app。广州、佛山有广佛卡可通用，广州还有一个 羊城卡。(2020.4.8上线版本)**<-- Question:在哪个区域改？是否是下面的卡片**

4. 公交卡 hero 動畫 **CN ONLY**
   - 設置了加載時間是 5秒，如果超過 5秒 圖片還沒有加載完，直接顯示靜態圖，不會再出現動畫效果。
   - 100張靜態圖組成，傳到 105 上的。
   - AOW 沒有動畫，

5. shosebox banner [打开钱包 app 添加交通卡] **CN/HK**
   - **只在 iphone 上顯示**，暫時 在頁面下方，开发时做过放在上面的。
   - **AOW 沒有 banner**，因為 shose box 在 wechat 瀏覽器不起作用。 所以 MOT 在 wechat 瀏覽器裡也是 隱藏掉的。
   - **MOT** 是什么？ **<-- Question:MOT是什么的缩写**

6. Transit Ribbon **CN ONLY**
   - 根据相关政策要求升级公交卡，增加 Ribbon + legal。上线时间 2022/Jul/1

7. AOW **CN ONLY**
       - nothing mentioned

8. Overview / banks **ALL** **<-- Question:需要解释一下关于Tap & Go的规则，是否只需要关注Tap & Go在哪里出现？**
     - 银行列表为字母顺序排列，
     - CN 为部分银行，HK/TW 为所有银行和机构
     - HK/HKEN 的 Apple Pay 首页中，合作银行部分有 Tap & Go , Banks 页面中没有 Tap & Go, 取而代之的是 HKT。--> 是因为 Tap & Go 是 HKT 银行所支持的机构，他们在各自的列表中按照各自的首字母排列https://www.apple.com/hk/apple-pay/banks/hk/zh-hk.html

9. Banks 页面 **ALL**
      - **HK 无 CN 版本**， 其他两种都有
      - 两个版本的顺序相同/数量相同。en-cn.html 只有 copy 是英文，中间列表依然是中文，区别于其他语言https://www.apple.com/tw/apple-pay/banks/tw/zh-tw.html
      - 页面上已有的银行信息，以页面为准，Numbers 上的不准。新添加的 银行信息，以 Numbers 为准。
      - 中国中文 ：https://www.apple.com/cn/apple-pay/banks/cn/zh-cn.html
      - 中国英文：https://www.apple.com/cn/apple-pay/banks/cn/en-cn.html

10. Support Url **ALL**

11. **V 和美國不同步，GC 暂时没有 Wallte, 不跟美国 V 和 Layout。**.


## Support

[All regions][/support/products/]

!! 产品页面美国每次都会给 Geo copy,  一般更新的 copy 会标成红色，如果没有标红色，以在线 copy 为主，因为美国 原英文会有错误。

!! HKEN, 切记 !!  country or region， 必须要加  or region， 美国提供的英文原文一般不会写。

1. AppleCare Protection Plan: **[Unable to locate]**
    - 只有Apple TV is called AppleCare Protection Plan，CN 无 Apple TV, :页面不出现 AppleCare Protection Plan.
2. AppleCare+: [all regions] [all local nav sites / overview]
3. Professional Page: **[Unable to locate]** [not available in MO]
4. Enterprise Support: [above addtional support] [not available in TW/MO]
5. Apple TV: [not available in CN]
6. HomePod: [not available in MO]
    - HomePod in one sub cate under Music
7. iPod:[all regions]
    - **iPod touch EOL, 但页面保留 [EOL: stands for?]**
8. how-to-buy: [all regions] [sub cate sites only]
    - 1，MO:英文原文 有兩條，Brand Team 讓刪除第二條
    - 1. ~~Or buy it within 60 days of your Apple Watch purchase:At an Apple Store (inspection of Apple Watch and proof of purchase are required)~~
9. footnote: [all regions]: 线上为准
10. 三包:[CN only] [overview and sub sites]
11. AppleCare Technican Training: **[unable to locate]**
    - CN,TW 課程不能單獨購買，所以刪除了購買的 copy 和 section。
12. Buy Button: [not available in TW / MO]
    - MO 不能在线购买，TW  不能在线购买 AC+,localnav 没有购买。
13. Dynamic Price: [not available in TW / MO] **[unable to locate]**
    - 只支持年付, 指的是 TW / MO 只支持年付吗？


## Accessibility

!! VO: [all regions]
!! 请提醒 Dev 和 Writer 使用 VO 工具检查 CopyQA 除了使用 VO 工具外，请在真机上实际读一遍 VO。注意 VO 与 Screen 匹配。

- **[unable to lacate]**
- **how to read this doc!**
- 18 new features / 19 existing features


- Besides the following, available in [regions]         [not availables]
    voice control spelling mode                         [cn/hk]
    live captions                                       [cn/hken/hk]
    lvie captions in facetime                           [cn/hken/hk]
    starting point detection with voice over maps       [cn/hken/hk]
    activities in magnifier                             [cn/hken/hk]
    add aduiograms to health                            [cn/hken/hk]
    addtional customization options for sound recognition[cn/hken/hk]
    eye-tracking support for iPadOS                     [cn/hken/hk]

    VoiceOver Recognition - text descriptions           [cn]
    Audio descriptions                                  [hk:keep for commu]


## AOW

- AOW vs MOW: 与AOW对应的页面是MOW页面
https://frontier.apple.com/reference/aow/wechat/
https://frontier.apple.com/reference/aow/wechat/page-validation-spec/


1. US: 在 /internal/geo-alt/ 中提供参考。
   - http://ic##.preview.apple.com/internal/geo-alt/your-site/aow/
1. Animation: 是否添加参考美国
2. 位置：参考geo-alt中 aow 的位置
    Resource	   Shared?	Location
    HTML	       N	      /internal/geo-alt/site-name/aow/
    CSS	       N	      /v/site-name/[version]/built/aow/styles/
    JS	       Y	      /v/site-name/[version]/built/scripts/
    Images	    Y	      /v/site-name/[version]/images/
    ac-assets	 Y	      /v/site-name/[version]/built/assets/


1. html class: < html class="aow" >  [compared]
2. link back to mow: < link rel="canonical" href="..../"> [not seen]
3. hreflang tag in head tag:  [x] [not seen]
4. ```meta``` og tags:
    1. **og:url**: reflect the URL of the AOW page. : "https://www.apple.com/cn/macbook-air/aow/features/" [compared]
    2. **og:image**: same as MOW [compared]
    3. WeChat OG image: [compared]
        - first ```div>img``` of ```body```
        - div has ```style="display:none;```
        ```html
        <div style="display:none;">
            <img src="...." alt="" />
        </div>
        ```
5. ```meta``` analytics-bucket [not seen]
    1. all analytics-buckets = applestorewwwechat [fixed]
    2. analytics-s-bucket-store [removed]
6. webfont ``lnik```: only SF Pro Icons [compared]
    ```<link rel="stylesheet" href="/wss/fonts?families=SF+Pro+Icons,v1" />
    ```
7. global nav: [compared]
    - remove entire ```nav``` starting from 'ac-globalnav' to 'ac-viewport-emitter'(include both ends)
8. style sheet in ```head```: [compared]
    - replace overview.built.css & main.built.css with AOW version
    - ```built/aow```
    > /v/ 的样式，如果美国没有 AOW 给写，在客户要求/知情的情况下，做页面是需要直接用 MOW 的样式。
9. local nav
    - locale segment is dynamiclly set base on locale.
    - format: ```4/styles``` to ```4/aow/styles``` [compared]
10. links
    1. intra-site link: aow site: ```/aow/``` injected after top level segment [compared]
    2. buy links: ```https://web.mmap.apple.com``` prefixed before path [compared]
    3. external links: same as MOW, eg: https://www.ibm.com
    4. ```*.apple.com```: absolute path [compared? with Questions]
       ```https://web.mmap.apple.com/mhm/p/wechat/redirect?url=```
       to
       ```https://web.mmap.apple.com/mhm/p/wechat/redirect?url=https%3A%2F%2Fwww.apple.com%2Fcn%2Fenvironment%2F```
11. Footer
    - css: ```ac/globalfooter``` is replaced with
           ```ac/wcfooter```
           ```en_US``` is replaced with ```zh_CN```
    - buystrip: removed [compared]
    - Breadcrumbs: removed [compared]
    - Directory: removed
    - wechat footer: added
12. legal lines: If the main page has a legal section, the same legal items should appear on the WeChat page, just beneath the WeChat footer actions.
13. wechat global footer
    - The typical global footer at the bottom of the page should be replaced with a WeChat specific version.



## Wed

> Shaun asked to add image-taizhou on webedit for CN by Vincent

1. DC VPN access required for webedit.preview.apple.com.cn
2. $TRUNK points at server(sourcebox)
3. Terminal error: mixed revision --> update file
4. Compress code in Sublime -> cmd + shift + J
5. format Compressed code in Sublime --> right click -> prettify -> prettify code
6. Review changes on versions.
