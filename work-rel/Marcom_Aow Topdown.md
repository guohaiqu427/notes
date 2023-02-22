Q1: US gives reference AOW page at :  
    /internal/geo-alt/xxx/aow

## HTML (1)
1. hardcoded
Add Class 'aow'
``` <html class="aow"> ```
## Head 
INCs
### Meta tags (2)
1. og:url reflects aow url```https://www.apple.com/cn/macbook-air/aow/features/```
2. og:image 
    Same as MOW page 
### web fonts (1)
Hard Coded: 
```
<link rel="stylesheet" href="/wss/fonts?families=SF+Pro+Icons,v1" />
```
### Style links(3)
Add '/aow': us(built.css) cn(image.css & built.css)
```
<link rel="stylesheet" href="/v/airpods/r/built/aow/overview.built.css" type="text/css" />
<link rel="stylesheet" href="/airpods/aow/styles/overview.built.css" type="text/css" />
<link rel="stylesheet" href="/airpods/aow/styles/overview.images.css" type="text/css" />
```

## Body
### Wechat's OG
- hard coded 
- First element of body, inline style with the display none.
    ```
    <div style="display:none;">
        <img src="...." alt="" />
    </div>
    ```
### Global Nav & Relevants 
- HTML:INC
- CSS: INC
### Local Nav 
- HTML: Normal localization process
- CSS: INC 
## Footer
- CSS: INC
- wechat footer actions = QR: INC
- buyStrip: INC
- Breadcrumbs: hard coded, removed!
- directory: INC (part of global footer)
- WeChat legal lines: Hard Coded!
- WeChat global footer : INC

## Inc templates

> 1. Add variable (2)
> 2. Add inc for qr code html(1)
> 3. Add inc for wechat footer html(1)

> 4. Remove buystrip inc (2)
> 5. Remove inc for global nav html(1)
> 6. Remove global footer (1)
### Head
**Add**: 
```
// set site id value
<!--#set var="AC_AOW_PAGE" value="true"-->
<!--#set var="AC_WECHAT_PAGE" value="true"-->
```
same:  

1. set time format:
```
<!--#include virtual="/ac/includes/use-date.inc"-->
```
2. manage compaigns:
```
<!--#include virtual="/ac/includes/campaigns/holiday-2021/vars.inc"-->
```
3. links one layer deeper to  head.inc: what it does is: set canonical/hreflang/cross
```
<!--#include virtual="/ac/includes/head-sf.inc"-->
```
4.manage device size and flex setting
```
<!--#include virtual="/ac/includes/viewport.fluid.cover.inc"-->
```

5. set aow/mow styles
  - [global nav].built.css
  - [local nav].built.css
  - [global footer].built.css
  - [wechat footer].built.css
```
<!--#include virtual="/ac/includes/styles.inc"-->
```
6. set variable for hostname
```
<!--#set var="AC_PRICING_API_HOSTNAME" value="https://www.apple.com.cn" -->
```
7. price related
```
<!--#include virtual="/ac/includes/pricing/1/meta.inc"-->
```
8. sets analytics-s-bucket# 
```
<!--#include virtual="/metrics/ac-analytics/meta/airpodsagnostic.inc"-->
```


### Body
**Remove**: 
1. Sets locale & global nav html and js
```
<!--#include virtual="/ac/includes/globalnav.inc"-->
```
Same: 

1. load latest javascript scripts
```<!--#include virtual="/metrics/ac-analytics/includes/auto-init.inc"--> ```

**Edit**: 
1. load aow/mow html templates
```<!--#include virtual="/airpods/shared/compare/aow/compare.inc"--> ```

### Footer 
**Add**: 
1. loads qr code
```
<!--#include virtual="${AC_WECHATFOOTER_ASSET_PATH}/actions.inc"-->
```
2.loads wechat footer html
```
<!--#include virtual="${AC_WECHATFOOTER_ASSET_PATH}/footer.inc"-->
```
**Remove**: 

1. set section value to buystrip
```
<!--#set var="BUYSTRIP_CHAT_TOKEN" value="/airpods/"-->
```
2. buystrip html
```
<!--#include virtual="/airpods/shared/compare/airpods-buystrip.inc"-->
```
3. loads global footer html and javascript
```
<!--#include virtual="/ac/includes/globalfooter.inc" -->
```


## Link rules & Examples
1. Intra-site link : point to inner /ipnone-x/ --> /ipnone-x/...
```
/macbook-air/	
/macbook-air/aow/
```
2. AOS/buy link : /shop/goto/
```
/cn/shop/goto/macbookair	
https://web.mmap.apple.com/cn/shop/goto/macbookair
```

3. external link: non *.apple.com 
```
[ keep original ]
```

4. Redirects:
    - Inter-site link : point to outer /ipnone-x/ ---> /apple.com/
    - marcom link: www.xxxx.com/iphone/homepad
    - Partner link: https://support.apple.com/,https://developer.apple.com/
    - serach link: points to marcom search link: /search/macbook
```
https://web.mmap.apple.com/mhm/p/wechat/redirect?url= 
```
