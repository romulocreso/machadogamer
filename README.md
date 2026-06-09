# Machado Gamer — Site Oficial

Site do canal **Machado Gamer** com player da Twitch ao vivo, agenda de lives, galeria e links das redes sociais.

🌐 **Site no ar:** https://romulocreso.github.io/machadogamer

---

## Como editar o conteúdo

Tudo que você precisa trocar está marcado no `index.html` com o comentário `<!-- TROCAR -->`.

| O quê | Onde |
|-------|------|
| Bio / tagline | `index.html` → seções Hero e "Sobre" |
| Foto de perfil, logo, banner, galeria | pasta `assets/` (veja `assets/README.txt`) |
| Horários das lives | `index.html` → seção "Agenda" |
| Links de redes (YouTube, TikTok, Discord) | `index.html` → seção "Redes" (descomente os blocos) |
| Números (seguidores, lives/semana) | `index.html` → `about-stats` |

### Trocar uma imagem
1. Salve sua imagem na pasta `assets/` (ex.: `perfil.jpg`).
2. No `index.html`, ache o `src` correspondente e ajuste (ex.: `src="assets/perfil.jpg"`).

---

## Como publicar atualizações

Depois de editar qualquer arquivo, rode na pasta do projeto:

```bash
git add -A
git commit -m "atualiza conteúdo"
git push
```

O GitHub Pages republica sozinho em ~1 minuto.

---

## Estrutura

```
index.html        Página principal (todas as seções)
css/style.css     Estilo (tema escuro, responsivo)
js/main.js        Menu mobile + ano do rodapé
assets/           Imagens (logo, perfil, banner, galeria)
```

## Observações técnicas

- O player/chat da Twitch usa o parâmetro `parent=romulocreso.github.io`.
  Se um dia mudar o domínio do site, atualize esse valor no `index.html`,
  senão o player não carrega.
- O Instagram não permite embutir o feed completo sem API; por isso usamos
  um botão/link para o perfil.
