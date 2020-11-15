# Passport - 统一认证授权服务

统一认证授权服务，通过 session 实现 sso 单点登录，支持 jwt 和 第三方授权。

- [源码](https://github.com/zhengxs2018/passport)
- [demo](https://passport.zhengxs.cn/)

## 部署

### 1. 克隆代码到服务器

```bash
$ git clone https://github.com/zhengxs2018/passport-delos.git
```

### 1. 修改配置

修改 `server/.env.example` 的内容，并且改名为 `server/.env`

### 2. 启动服务端

**使用 `pm2` 启动**

```bash
# 注意：必须先安装 pm2 模块
$ pm2 start delos/ecosystem.config.js
```

**直接启动**

```bash
# cwd 必须是 delos/server
$ cd server && node ./index.js
```

### 3. Nginx 配置

不是必须的，也可以使用其他方式，将 `client` 和 `server` 分开部署

可以参考 `nginx.conf` 配置

```nginx
server {
  server_name passport.zhengxs.cn;

  listen 80;

  # 配置 server 代理
  location ~ /(auth|connect|me) {
    # 端口默认 7300，可以通过修改 server 切换端口
    proxy_pass http://127.0.0.1:7300$request_uri;
  }

  # 部署 client 代理
  location / {
    index index.html;

    # /path/to 是服务上 dist 的绝对路径
    root /path/to/delos/client;

    # 配置所有的地址都走 index.html
    try_files $uri $uri/ /index.html;
  }
}
```

## License

- MIT
