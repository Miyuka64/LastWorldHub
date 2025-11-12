// Burada linkleri isteğine göre ayarla.
// 1) Eğer GitHub Pages project site kullanıyorsan (örnek):
//    anime -> https://KULLANICI.github.io/LastWorldHub-Anime/
//    manga -> https://KULLANICI.github.io/LastWorldHub-Manga/

// 2) Eğer özel domain kullanıp subdomain atayacaksan:
//    anime -> https://anime.lastworldhub.com
//    manga -> https://manga.lastworldhub.com

// Aşağıda örnek olarak "project sites" kullanılıyor.
// BU KISMI kendine göre değiştir:
const ANIME_URL  = "https://KULLANICIADIN.github.io/LastWorldHub-Anime/";
const MANGA_URL  = "https://KULLANICIADIN.github.io/LastWorldHub-Manga/";

document.getElementById('btn-anime').href = ANIME_URL;
document.getElementById('btn-manga').href = MANGA_URL;
