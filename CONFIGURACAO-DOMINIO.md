# Configuracao de dominio - Alumioro

Dominio previsto: `alumioro.com.br`

Site atual no GitHub Pages: `https://studiol4rj-design.github.io/alumioro/`

## 1. Registro.br - zona DNS

No painel do Registro.br, acesse o dominio e configure a zona DNS com os registros abaixo.

### Dominio raiz

| Tipo | Nome | Valor |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

### IPv6 opcional

| Tipo | Nome | Valor |
| --- | --- | --- |
| AAAA | @ | 2606:50c0:8000::153 |
| AAAA | @ | 2606:50c0:8001::153 |
| AAAA | @ | 2606:50c0:8002::153 |
| AAAA | @ | 2606:50c0:8003::153 |

### Subdominio www

| Tipo | Nome | Valor |
| --- | --- | --- |
| CNAME | www | studiol4rj-design.github.io |

Remova registros conflitantes de `A`, `AAAA`, `ALIAS`, `ANAME` ou `CNAME` que apontem o dominio raiz ou `www` para outro servidor.

## 2. GitHub Pages

Depois de confirmar o dominio final, criar na raiz do repositorio um arquivo chamado `CNAME` com apenas:

```txt
alumioro.com.br
```

Em seguida, publicar no GitHub Pages e ativar `Enforce HTTPS` quando o certificado estiver disponivel.

## 3. Google Search Console

Crie uma propriedade do tipo `Dominio` para:

```txt
alumioro.com.br
```

O Google vai fornecer um registro TXT parecido com:

```txt
google-site-verification=CODIGO_FORNECIDO_PELO_GOOGLE
```

No Registro.br, adicione:

| Tipo | Nome | Valor |
| --- | --- | --- |
| TXT | @ | google-site-verification=CODIGO_FORNECIDO_PELO_GOOGLE |

Para validar tambem a URL com `www`, crie uma propriedade de URL prefix:

```txt
https://www.alumioro.com.br/
```

Se o Search Console fornecer outro codigo, adicione o segundo TXT no Registro.br ou envie o arquivo HTML de verificacao para a raiz do site.

## 4. Verificacao apos propagacao

No PowerShell:

```powershell
Resolve-DnsName alumioro.com.br -Type A
Resolve-DnsName alumioro.com.br -Type AAAA
Resolve-DnsName www.alumioro.com.br -Type CNAME
```

A propagacao de DNS pode levar ate 24 horas.
