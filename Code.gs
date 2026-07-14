/* MAVİ TUR 2026 — yanıt toplayıcı
   Bir Google Sheet'e bağlı Apps Script olarak çalışır.
   doPost: siteden gelen kodu yeni satır olarak ekler
   doGet : tüm kodları JSON döner (site "Yanıtları çek" ile alır) */

const SHEET_NAME = 'yanitlar';

function sheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  return ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
}

function doPost(e) {
  const code = (e.postData && e.postData.contents || '').trim();
  if (code.indexOf('MT26.') === 0 && code.length < 2000) {
    sheet_().appendRow([new Date(), code]);
  }
  return ContentService.createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet() {
  const sh = sheet_();
  const n = sh.getLastRow();
  const codes = n
    ? sh.getRange(1, 2, n, 1).getValues().flat().filter(String)
    : [];
  return ContentService.createTextOutput(JSON.stringify({ codes: codes }))
    .setMimeType(ContentService.MimeType.JSON);
}
