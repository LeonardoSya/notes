# 前端路由两种实现

## Hash模式
基于location.hash实现
https://www.word.com#search  这个网站的location.hash为 '#search'
URL中hash值只是客户端的一种状态，当向服务器发请求时，hash部分不会被发送
hash值的改变会在浏览器的访问历史中增加一个记录，因此能通过浏览器的回退、前进按钮控制hash的切换
hashchange 事件 可以监听hash变化

<a></a>的 href 和 location.hash 可以触发hashchange

## History模式
html5提供了 History API，可以直接通过history.pushState()(新增历史记录) 和 history.replaceState()(替换当前的历史记录) 在不刷新页面的情况下改变浏览器的历史记录
History API路由系统实现的路由方法 比基于哈希的路由更现代和优雅，因为它允许更干净的 URLs（不包含哈希符号 #） 
popstate 事件 监听url变化
另外，history.pushState()和history.replaceState()不会触发popState事件，需要手动触发页面渲染

pushState()和replaceState()的三个参数：
1. state object(`state`) 状态对象
- 类型：object
- 用途：在popstate事件触发时从event.state中获得，可以用来存储滚动位置、页面标题或其他与历史条目相关的数据，为了性能考虑一般只存储轻量级数据
2. title(`title`)
- 类型：string
- 用途：理论上为了给新历史条目设置标题，但目前大多数浏览器没有实现这个功能，所以一般置为null
3. url(`url`)
- 类型：string
- 用途：设置新历史条目的 URL。这个 URL 应该与当前域名下的 URL 相同，或者是相对于当前 URL 的路径。它会改变浏览器地址栏中显示的 URL，但不会导致页面重新加载
- 注意：新的 URL 不应跨域，且不能违反同源策略。此外，即使 URL 改变了，页面不会重新加载，因此你需要确保你的应用能够根据 URL 的变化来正确渲染内容

```js
// 添加一个新的历史记录
history.pushState({ page: 1 }, "", "page1.html");

// 替换当前的历史记录
history.replaceState({ page: 2 }, "", "page2.html");
```
