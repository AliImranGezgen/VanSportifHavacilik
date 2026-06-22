# Proje Notları ve Yol Haritası - Van Sportif Havacılık Kulübü

Bu belge, **Van Sportif Havacılık Kulübü** web sitesinin amacını, hedef kitlesini, mevcut yapısını ve gelecekte monorepo mimarisi dahilinde eklenmesi planlanan gelişmiş özellikleri içermektedir.

---

## 🎯 Projenin Amacı ve Hedef Kitle

### Proje Amacı
Van'da sportif havacılık ve yamaç paraşütü sporunun doğru, güvenli ve kurumsal bir kimlikle tanıtılmasını sağlamaktır. Sitenin temel odak noktası, P1-P2 yamaç paraşütü başlangıç eğitimleri almak isteyen yeni sporcu adaylarını bilgilendirmek ve Van'ın muhteşem manzarası eşliğinde çift kişilik (tandem) uçuş deneyimi yaşamak isteyen turistleri kulübe yönlendirmektir.

### Hedef Kitle
1. **Pilot Adayları**: Yamaç paraşütünü amatör veya profesyonel düzeyde öğrenmek isteyen havacılık tutkunları.
2. **Macera ve Turizm Meraklıları**: Van Gölü ve çevresini gökyüzünden izlemek, unutulmaz bir tandem uçuşu deneyimlemek isteyen yerli ve yabancı turistler.
3. **Bölgesel Gençlik**: Havacılık kültürüne ilgi duyan ve kulüp faaliyetlerine katılmak isteyen bölge gençleri.

---

## 🗺️ Gelecek Fazlarda Eklenecek Özellikler (Yol Haritası)

Statik frontend yapısı tamamlandıktan sonra, monorepo altyapısı sayesinde aşağıdaki modüller kolayca sisteme entegre edilebilir:

### 1. Online Başvuru ve Kayıt Sistemi
* **P1-P2 Eğitim Başvurusu**: Kursiyer adaylarının sağlık raporu, kimlik bilgileri ve iletişim formlarını online doldurabileceği bir kayıt modülü.
* **Evrak Yükleme**: Kursiyerlerin eğitim için gerekli evrakları (vesikalık, ehliyet, öğrenim durum belgesi vb.) güvenli şekilde sisteme yüklemesi.

### 2. Tandem Uçuş Rezervasyon Modülü
* **Canlı Takvim**: Kullanıcıların hava durumuna göre uygun olan gün ve saat dilimlerini görerek tandem uçuşu rezerve edebileceği bir sistem.
* **Online Ödeme**: Rezervasyon esnasında ön ödeme veya tam ücret ödemesi için kredi kartı entegrasyonu (Iyzico, Stripe vb.).
* **Hava Durumu API Entegrasyonu**: Rüzgar hızı ve yönünü otomatik çekerek uçuşa elverişli olmayan günleri takvimde kapatan akıllı bir algoritma.

### 3. Yönetim Paneli (Admin Panel - `apps/admin`)
* **Uçuş Yönetimi**: Pilotların kendilerine atanan tandem uçuşlarını görebileceği, durumlarını güncelleyebileceği panel.
* **Kursiyer Takip Sistemi**: İlhan Gezgen (Başkan/Eğitmen) ve diğer eğitmenlerin kursiyerlerin yer çalışması, teorik sınav ve uçuş sayılarını dijital ortamda takip edebileceği arayüz.
* **Medya ve Galeri Yönetimi**: Sitede yayınlanan fotoğrafları dinamik olarak yükleme, silme ve kategorize etme imkanı.

### 4. Gelişmiş Galeri ve Sosyal Medya Entegrasyonu
* **Dinamik Galeri**: Admin panelinden yüklenen yüksek çözünürlüklü uçuş fotoğrafları ve videolarının lazy-loading ile performanslı gösterimi.
* **Instagram API**: Kulübün `@vanyamacparasut` hesabındaki son paylaşımların ve reels videolarının ana sayfada otomatik sergilenmesi.

### 5. Eğitim Takvimi ve Blog / Duyuru Sistemi
* **Dönemsel Kurs Takvimi**: Açılacak yeni P1-P2 eğitimlerinin başlangıç, yer çalışması ve bitiş tarihlerinin duyurulması.
* **Havacılık Blogu**: Güvenli uçuş kuralları, Van'daki uçuş tepeleri (Artos, Görentaş vb.) hakkında bilgilendirici makalelerin yayınlanması.

### 6. Backend API Geliştirme (`apps/api`)
* Node.js (Express/NestJS) veya Python (FastAPI/Django) ile rezervasyon verilerini, kursiyer profillerini ve dinamik içerikleri yönetecek RESTful API.
* PostgreSQL veya MongoDB gibi güvenli bir veritabanı entegrasyonu.

### 7. Çok Dilli Yapı (i18n)
* Van'ın uluslararası turizm potansiyeli göz önünde bulundurularak sitenin **İngilizce**, **Farsça** ve **Rusça** dil seçenekleriyle çok dilli hale getirilmesi.
