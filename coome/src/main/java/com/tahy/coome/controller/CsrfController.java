package com.tahy.coome.controller;

import org.springframework.security.web.server.csrf.CsrfToken;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000", methods = { RequestMethod.GET, RequestMethod.POST })
class CsrfController {

    @GetMapping("/csrf")
    public CsrfToken csrf(CsrfToken token) {
        // 開発時、front-backで別ドメインのためset-cookieしてもトークンが取れない
        // そのため、明示的に返すエンドポイントを設置する。
        return token;
    }

    @GetMapping("/def")
    public String def() {
        return "ok";
    }
}