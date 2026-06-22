# Van Sportif Havacılık Kulübü Monorepo

Bu depo, **Van Sportif Havacılık Kulübü**'nün modern, responsive, hızlı ve SEO uyumlu tek sayfalık tanıtım web sitesini ve gelecekte genişletilebilir monorepo yapısını barındırmaktadır.

Kulübümüz, Van ve çevresinde yamaç paraşütü, tandem (çift kişilik) uçuşlar, P1-P2 başlangıç eğitimleri ve genel havacılık kültürünü yaygınlaştırmak amacıyla faaliyet göstermektedir.

---

## 📂 Proje Dosya Yapısı

Proje, gelecekte backend, yönetim paneli veya mobil uygulama entegrasyonlarına uygun şekilde modüler bir **Monorepo** yapısıyla tasarlanmıştır:

```text
van-sportif-havacilik/
│
├── apps/
│   └── web/                   # Mevcut Tanıtım Web Sitesi (Statik Frontend)
│       ├── index.html         # Ana sayfa (Semantik HTML5 & SEO)
│       ├── styles.css         # Modern, responsive ve premium CSS tasarımları
│       ├── script.js          # Hamburger menü, scroll ve etkileşim kodları
│       └── assets/            
│           ├── images/        # Gerçek görseller için ayrılmış klasör (Şu an boş)
│           └── icons/         # Özel ikonlar için ayrılmış klasör (Şu an boş)
│
├── packages/
│   └── shared/                # Uygulamalar arası paylaşılan bileşen ve bilgiler
│       ├── README.md          # Shared yapısının kullanım kılavuzu
│       └── constants.md       # Kulüp bilgileri, telefonlar ve resmi sabitler
│
├── docs/
│   └── project-notes.md       # Gelecek faz planlamaları ve proje notları
│
├── README.md                  # Bu açıklama dosyası
└── .gitignore                 # Sürüm kontrol sistemi dışı bırakılan dosyalar
```

---

## 🚀 Nasıl Çalıştırılır?

Web uygulaması **herhangi bir derleme (build) sistemi veya ek bağımlılık gerektirmeden** çalışabilecek şekilde tamamen saf (vanilla) teknolojilerle yazılmıştır.

1. Bu projeyi bilgisayarınıza indirin.
2. Tarayıcınızda doğrudan çalıştırmak için aşağıdaki dosyaya çift tıklayın veya tarayıcınıza sürükleyin:
   * **[apps/web/index.html](file:///c:/Users/msi/Desktop/VHSK/apps/web/index.html)**
3. Web sitesi tüm modern tarayıcılarda (Chrome, Edge, Firefox, Safari) ve tüm ekran boyutlarında (mobil, tablet, masaüstü) tam performanslı şekilde açılacaktır.

---

## 📸 Görseller ve İkonlar Hakkında Not

* Sitenin hızlı yüklenmesi ve bağımlılık yaratmaması adına mevcut görseller ve ikonlar **CSS Gradient ve modern SVG nesneleri** ile şık placeholderlar şeklinde tasarlanmıştır.
* Kulübe ait gerçek fotoğraflar veya logo dosyaları ileride doğrudan `apps/web/assets/images/` klasörüne eklenerek CSS dosyasındaki yollar güncellenebilir.

---

## 🔧 Monorepo Genişletilebilirlik Planı

Bu mimari, ilerleyen dönemlerde projeye yeni modüller eklendiğinde kod tekrarlarını önlemek amacıyla kurulmuştur. İleride şu klasörler eklenerek sistem genişletilebilir:

* `apps/admin`: Kulüp yöneticileri için tandem uçuş rezervasyonları, eğitim başvuruları ve galeri görsellerini yönetecekleri React/Vue yönetim paneli.
* `apps/api`: Rezervasyon ve başvuruları veritabanında saklayacak olan Node.js / Express veya Go tabanlı API sunucusu.
* `packages/ui`: `apps/web` ve `apps/admin` arasında ortak kullanılacak düğmeler, kartlar ve form elemanları kitaplığı.
* `packages/config`: ESLint, TypeScript veya Tailwind gibi araçların ortak konfigürasyon dosyaları.
* `packages/shared`: Backend ve Frontend arasında ortak paylaşılacak metinler, mail şablonları ve API şemaları.

---

## 📞 Resmi Kulüp İletişim Bilgileri

* **Doğru Kulüp Adı**: **Van Sportif Havacılık Kulübü** (Lütfen *"THK Van Sportif Havacılık"* gibi yanlış tanımlamaları kullanmayınız.)
* **Kulüp Başkanı**: İlhan Gezgen
* **Konum**: Van / İpekyolu
* **Instagram**: [@vanyamacparasut](https://www.instagram.com/vanyamacparasut/)
* **Telefon 1**: [0545 598 34 41](tel:+905455983441)
* **Telefon 2**: [0533 087 88 34](tel:+905330878834)
"# VanSportifHavac-l-k" 
