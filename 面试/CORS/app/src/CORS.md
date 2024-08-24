### 1. 同源策略
浏览器网络请求时，有一个同源策略的机制：使用API的Web应用程序只能从加载应用程序的**同一个域**请求HTTP资源
当资源位于不同**协议、子域、端口**的站点，这个请求就是跨域的

### 2. 浏览器CORS
日常开发中经常会访问跨域资源，为了安全地请求跨域资源，浏览器使用一种称为CORS的机制（跨域资源共享）———— 尽管默认情况下浏览器禁止访问跨域资源，但是可以利用CORS**放宽**这个限制。**浏览器可以利用CORS机制，放行符合规范的跨域访问**

浏览器内部如何利用cors机制?
- Web程序发出跨域请求后，浏览器会*自动*向 HTTP header 添加一个额外的*请求头字段* **Origin**，Origin标记了*请求的站点来源*
```r
GET https://api.website.com/users HTTP/1/1
Origin: https://www.mywebsite.com // <- 浏览器自己加的
```
- 为了使浏览器允许访问跨域资源，服务器返回的 response 还需要加一些响应头字段，这些字段将*显式表明*此服务器是否允许这个跨域请求

### 3. 服务端CORS
在服务端开发中，可以通过在 HTTP*响应* 中添加额外的*响应头字段* `Access-Control-Allow-Origin` 来表明是否允许跨域请求
有好几个CORS响应头字段，但是 Access-Control-Allow-Origin 是必加的。这个头字段的值指定了哪些站点允许被跨域访问资源

收到服务器返回的response后，浏览器的CORS机制会检查*Access-Control-Allow-Origin的值*是否等于*request中Origin的值*，浏览器校验通过后，前端成功地接收到跨域资源

另一个常见的头字段：`Access-Control-Allow-Methods` ，它指定了允许跨域请求的 HTTP 方法，POST,GET,PUT等

### 4. 预检请求
CORS 有两种类型的请求：一种是简单请求（simple request），一种是预检请求（preflight request）。*一个跨域请求到底是简单的的还是预检的，取决于一些 request header*
当请求是*GET 或 POST 方法并且没有任何自定义 Header 字段*时，一般来说就是个简单请求。除此之外的任何请求，诸如 PUT，PATCH 或 DELETE 方法，将会产生预检。

1. 在发送实际请求前，客户端会先用*OPTION*方法发起一个预检请求
- 首部字段 `Access-Control-Request-Method`告知服务器，实际请求要用到的方法是什么
- 首部字段 `Access-Control-Request-Headers`告知服务器，实际请求将附带的*自定义请求首部字段*是什么
```r
OPTIONS https://api.mywebsite.com/user/1 HTTP/1.1
Origin: https://www.mywebsite.com
Access-Control-Request-Method: PUT
Access-Control-Request-Headers: Content-Type
```
2. 服务器接收到预检请求后，会返回一个没有body的http响应，该响应标记了服务器允许的http方法和http header字段
```r
HTTP/1.1 204 No Content
Access-Control-Allow-Origin: https://www.mywebsite.com
Access-Control-Request-Method: GET POST PUT
Access-Control-Request-Headers: Content-Type
```
3. 浏览器收到预检响应，并检查是否应允许发送实际请求。如果预检响应检测通过，浏览器会自动发送实际请求到服务器，然后服务器返回我们需要的资源。否则CORS会阻止跨域访问

因此，预检请求可以防止我们访问或修改那些没有启用CORS策略的服务器上的资源

💡为了减少网络往返次数，我们可以通过在 CORS 请求中添加    `Access-Control-Max-Age` 头字段来缓存预检响应。浏览器可以使用缓存来代替发送新的预检请求。

### 5. 认证
如果要在跨域请求中包含 cookie 和其他授权信息，我们需要做以下操作：
XHR 请求中将 withCredentials 字段设置为 true
Fetch 请求中将 credentials 设为 include
服务器把 Access-Control-Allow-Credentials: true 添加到响应头中`
```js
// 浏览器 fetch 请求
fetch('https://api.mywebsite,com.users', {
  credentials: "include"
})

// 浏览器 XHR 请求
let xhr = new XMLHttpRequest();
xhr.withCredentials = true;

// 服务器添加认证字段
HTTP/1.1 200 OK
Access-Control-Allow-Credentials: true
```
这样我们就可以在跨域请求中包含身份凭证信息了
