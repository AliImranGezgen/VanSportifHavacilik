# Shared Package - Paylaşılan Ortak Kaynaklar

Bu klasör, monorepo içindeki farklı uygulamaların (`apps/web`, ileride eklenebilecek `apps/admin`, `apps/api` vb.) ortaklaşa kullanabileceği verileri, sabitleri, yapılandırma dosyalarını ve bileşenleri barındırmak amacıyla tasarlanmıştır.

---

## 📂 Mevcut İçerik

* **[constants.md](file:///c:/Users/msi/Desktop/VHSK/packages/shared/constants.md)**: Kulübün resmi iletişim bilgileri, kurumsal kimlik yönergeleri ve sosyal medya hesapları gibi sitenin farklı yerlerinde kullanılan statik bilgileri içeren ana doküman.

---

## 🛠️ Gelecekte Eklenebilecek Paylaşılan Yapılar

Mevcut statik site yapısı ilerletildiğinde bu paket şu ortak kaynakları barındıracaktır:

1. **Ortak UI Bileşenleri (`packages/ui`)**:
   * Farklı uygulamalarda (örneğin hem kullanıcı sitesinde hem de admin panelinde) ortak kullanılacak butonlar, form girişleri, açılır pencereler (modal) ve veri tabloları.
2. **Ortak Doğrulama Şemaları (Validation Schemas)**:
   * Form girişlerinde (örneğin telefon numarası formatı, e-posta formatı) hem frontend tarafında tarayıcıda hem de backend API tarafında sunucuda çalışacak ortak doğrulama kuralları (örneğin Zod veya Yup şemaları).
3. **TypeScript Tipleri ve Arayüzleri (Types & Interfaces)**:
   * Rezervasyon verileri, Kursiyer profilleri ve Uçuş bilgileri için ortak tanımlanmış veri tipleri.
4. **Tema Değişkenleri (Theme Config)**:
   * Tailwind CSS, CSS Custom Properties veya Sass için ortak renk paletleri, yazı boyutları ve responsive kırılma noktaları tanımları.
