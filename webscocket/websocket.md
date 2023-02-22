# websocket 2008 start - 2011 standard

 - tcp 全双工  持久化链接  双向通信  <--- webscoket

    - 默认 80 43
    - 握手 是 http 协议 （http 三次握手 只完成第一次）
    - 发送各种类型
    - 无跨域限制 （无同源限制）
    - 其他类似的 web rtc & sever-sent event

    - request head : http/1.1 101  switching protocols
    - response head : http -> upgrade (version key etc...)

    - github library websocket-node









 - http 无状态 唯一的 不保存会话信息 单向通信 半双工

    - 用途： 轮讯 polling ， 每隔一段时间发送一次请求， 不精确（请求间隔确定，更新时间不确定） 1 - 5 - 10 - 15 。。。。
            长轮询 long polling 1 - 5 - 10 ｜ 1 - 5++++
            流： 一直不断开

            - 可独断需要等待请求返回才能 发送后续请求


