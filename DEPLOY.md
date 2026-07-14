# MAVİ TUR 2026 — Kurulum (toplam ~5 dk)

## A) Yanıt toplayıcı (Google Sheet, 3 dk)

1. sheets.google.com → boş bir tablo aç, adına "mavitur2026" de.
2. Menüden **Uzantılar → Apps Script**.
3. Açılan editördeki her şeyi sil, `Code.gs` dosyasının içeriğini yapıştır, kaydet.
4. Sağ üstte **Dağıt → Yeni dağıtım → tür: Web uygulaması**
   - Şu şekilde çalıştır: **Ben**
   - Erişimi olanlar: **Herkes** (Anyone)
   - Dağıt → izinleri onayla.
5. Çıkan **Web uygulaması URL'ini** kopyala
   (https://script.google.com/macros/s/…/exec gibi).

## B) URL'i siteye yaz (30 sn)

`index.html` içinde en üstteki şu satırı bul:

    const SUBMIT_URL = "";

Tırnakların arasına az önceki URL'i yapıştır:

    const SUBMIT_URL = "https://script.google.com/macros/s/…/exec";

(İstersen URL'i bana at, ben dosyayı hazır edip veririm.)

## C) GitHub Pages (2 dk)

1. github.com/new → repo adı: **mavitur2026** (public).
2. "uploading an existing file" → `index.html`'i sürükle → Commit.
3. Repo → **Settings → Pages** → Branch: `main`, klasör `/ (root)` → Save.
4. 1-2 dk sonra adres hazır:
   `https://KULLANICIADIN.github.io/mavitur2026/`
5. Linki WhatsApp grubuna at. Bitti.

## Nasıl akıyor

- Herkes linki açar, ismiyle kartları kaydırır, **Gönder** der →
  yanıt otomatik olarak senin Sheet'ine düşer (tarih + kod).
- Sen sitede **Menüyü kur → ⟳ Yanıtları çek** dersin →
  12 kişinin seçimi iner, 7 günlük menü kurala göre kurulur.
- Aynı kişi tekrar gönderirse **son gönderimi** geçerli olur.
- İnterneti olmayan biri olursa yedek: kodunu kopyalar, gruba atar,
  sen alttaki kutuya yapıştırırsın — otomatik gelenlerle birleşir.
