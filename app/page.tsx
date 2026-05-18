"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const telefon = "0532 630 26 03";
const whatsappNo = "905326302603";
const konum = "İzmir / Bornova";
const konumLink = "https://www.google.com/maps/search/?api=1&query=İzmir%20Bornova";
const instagramLink = "https://www.instagram.com/mehmetaydogdu.official";
const whatsappMesaj =
  "Merhaba, Venturo Ahşap mobil ev, tiny house ve karavan modelleri hakkında bilgi almak istiyorum.";

const whatsappLink = `https://wa.me/${whatsappNo}?text=${encodeURIComponent(
  whatsappMesaj
)}`;

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0 },
};

const hizmetler = [
  {
    baslik: "Adventure Trailer",
    aciklama:
      "Araç arkasına uygun, hafif, dayanıklı ve kamp deneyimini konfora çeviren karavan modeli.",
  },
  {
    baslik: "Tiny House",
    aciklama:
      "Kompakt, modern, ahşap detaylı ve anahtar teslim taşınabilir yaşam alanı.",
  },
  {
    baslik: "Mobil Ev",
    aciklama:
      "Arsa, doğa, bağ evi veya yatırım amaçlı kullanılabilecek taşınabilir konut çözümü.",
  },
];

const karavanOzellikleri = [
  "Hafif ve dayanıklı gövde",
  "Off-road uyumlu yapı",
  "LED iç aydınlatma",
  "USB ve 12V çıkışlar",
  "Açılır arka mutfak",
  "Geniş depolama alanı",
];

const tinyOzellikleri = [
  "Anahtar teslim üretim",
  "Ahşap detaylı dış cephe",
  "Mutfak ve banyo çözümü",
  "Veranda ve oturma alanı",
  "Kişiye özel iç planlama",
  "Modern aydınlatma sistemi",
];

const paketler = [
  {
    ad: "Başlangıç Paketi",
    fiyat: "Bilgi Alın",
    aciklama: "Temel kullanım için sade ve ekonomik mobil yaşam çözümü.",
    maddeler: [
      "Dış cephe üretimi",
      "Temel iç yaşam alanı",
      "Elektrik altyapısı",
      "LED aydınlatma",
    ],
  },
  {
    ad: "Premium Paket",
    fiyat: "Teklif Alın",
    aciklama: "Konforlu iç mekan, ahşap detaylar ve kullanışlı yaşam planı.",
    populer: true,
    maddeler: [
      "Mutfak alanı",
      "Banyo çözümü",
      "Ahşap dekorasyon",
      "Geniş depolama",
      "Kişiye özel düzenleme",
    ],
  },
  {
    ad: "VIP Anahtar Teslim",
    fiyat: "Özel Teklif",
    aciklama: "Tam donanımlı, premium detaylı, kullanıma hazır özel üretim.",
    maddeler: [
      "Tam iç donanım",
      "Premium malzeme seçimi",
      "Veranda opsiyonu",
      "Özel renk ve tasarım",
      "Teslim sonrası destek",
    ],
  },
];

const galeri = [
  {
    src: "/tiny-dis.jpg",
    baslik: "Tiny House Dış Cephe",
  },
  {
    src: "/tiny-ic.jpg",
    baslik: "Modern İç Mekan",
  },
  {
    src: "/tiny-banyo.jpg",
    baslik: "Banyo Alanı",
  },
  {
    src: "/tiny-uretim.jpg",
    baslik: "Üretim Süreci",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#070b09] text-white">
      {/* HEADER */}
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#070b09]/80 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#d99b52] to-[#7a4b1f] text-xl font-black text-black shadow-lg shadow-[#d99b52]/20">
              V
            </div>

            <div>
              <p className="text-lg font-black tracking-wide">
                VENTURO AHŞAP
              </p>
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#d9a45f]">
                Mobil Ev & Karavan
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-semibold text-white/70 md:flex">
            <a href="#karavan" className="transition hover:text-[#d99b52]">
              Karavan
            </a>
            <a href="#tiny" className="transition hover:text-[#d99b52]">
              Tiny House
            </a>
            <a href="#paketler" className="transition hover:text-[#d99b52]">
              Paketler
            </a>
            <a href="#iletisim" className="transition hover:text-[#d99b52]">
              İletişim
            </a>
          </nav>

       <div className="hidden items-center gap-3 md:flex">
  <a
    href={konumLink}
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-full border border-white/15 px-5 py-3 text-sm font-black text-white/80 transition hover:border-[#d99b52] hover:text-[#d99b52]"
  >
    İzmir / Bornova
  </a>

  <a
    href={instagramLink}
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-full border border-[#d99b52]/40 px-5 py-3 text-sm font-black text-[#d99b52] transition hover:bg-[#d99b52] hover:text-black"
  >
    Instagram
  </a>

  <a
    href={whatsappLink}
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-full bg-[#d99b52] px-5 py-3 text-sm font-black text-black shadow-xl shadow-[#d99b52]/20 transition hover:bg-[#f0b86b]"
  >
    WhatsApp
  </a>
</div>
        </div>
      </header>

      {/* HERO */}
      <section id="karavan" className="relative min-h-screen pt-24">
        <div className="absolute inset-0">
          <Image
            src="/karavan.jpg"
            alt="Venturo Adventure Trailer karavan"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070b09] via-[#070b09]/90 to-[#070b09]/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070b09] via-transparent to-transparent" />
        </div>

        <div className="relative mx-auto grid min-h-[850px] max-w-7xl items-center gap-12 px-4 py-20 md:grid-cols-[1fr_0.9fr] md:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="mb-5 inline-flex rounded-full border border-[#d99b52]/40 bg-[#d99b52]/10 px-4 py-2 text-sm font-black text-[#f3bd75]">
              Doğada özgürlük, her yerde eviniz
            </div>
<a
  href={konumLink}
  target="_blank"
  rel="noopener noreferrer"
  className="mb-5 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-white/80 backdrop-blur transition hover:border-[#d99b52] hover:text-[#d99b52]"
>
  Konum: {konum}
</a>
            <h1 className="text-4xl font-black leading-tight tracking-tight md:text-7xl">
              Venturo ile
              <span className="block bg-gradient-to-r from-[#f5c77b] to-[#9f642c] bg-clip-text text-transparent">
                premium mobil yaşam.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/72 md:text-lg">
              Karavan, tiny house ve mobil ev modellerinde doğaya uyumlu,
              şık, dayanıklı ve kullanışlı yaşam alanları üretiyoruz. Kamp,
              arsa, bağ evi veya özgür yaşam planınız için size özel çözümler
              sunuyoruz.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#d99b52] px-7 py-4 text-center text-base font-black text-black shadow-2xl shadow-[#d99b52]/25 transition hover:-translate-y-1 hover:bg-[#f0b86b]"
              >
                Hemen Bilgi Al
              </a>

              <a
                href={`tel:${telefon.replaceAll(" ", "")}`}
                className="rounded-full border border-white/20 bg-white/10 px-7 py-4 text-center text-base font-bold text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/15"
              >
                Ara: {telefon}
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
              <div className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl">
                <p className="text-3xl font-black text-[#d99b52]">2 Yıl</p>
                <p className="mt-1 text-xs font-bold text-white/60">
                  Garanti
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl">
                <p className="text-3xl font-black text-[#d99b52]">310</p>
                <p className="mt-1 text-xs font-bold text-white/60">
                  cm uzunluk
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl">
                <p className="text-3xl font-black text-[#d99b52]">LED</p>
                <p className="mt-1 text-xs font-bold text-white/60">
                  Aydınlatma
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl">
                <p className="text-3xl font-black text-[#d99b52]">VIP</p>
                <p className="mt-1 text-xs font-bold text-white/60">
                  Özel üretim
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block"
          >
            <div className="rounded-[44px] border border-[#d99b52]/25 bg-white/10 p-4 shadow-2xl shadow-black/50 backdrop-blur-xl">
              <Image
                src="/karavan.jpg"
                alt="Venturo karavan teknik tanıtım"
                width={1100}
                height={800}
                className="h-[560px] w-full rounded-[34px] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* HİZMET KARTLARI */}
      <section className="relative bg-[#070b09] px-4 py-20 md:px-8">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#d99b52]/20 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-[#d99b52]">
              Üretim Alanlarımız
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
              Karavan, tiny house ve mobil evde tek çatı altında premium çözüm.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {hizmetler.map((item, index) => (
              <motion.div
                key={item.baslik}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="group rounded-[34px] border border-white/10 bg-gradient-to-br from-[#151d17] to-[#0c110e] p-7 shadow-xl shadow-black/30 transition hover:-translate-y-2 hover:border-[#d99b52]/50"
              >
                <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-3xl bg-[#d99b52] text-2xl font-black text-black shadow-lg shadow-[#d99b52]/25">
                  {index + 1}
                </div>

                <h3 className="text-2xl font-black">{item.baslik}</h3>
                <p className="mt-4 leading-7 text-white/62">
                  {item.aciklama}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* KARAVAN ÖZELLİK */}
      <section className="bg-[#0c120e] px-4 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-[42px] border border-white/10 bg-white/5 p-3"
          >
            <Image
              src="/karavan.jpg"
              alt="Venturo adventure trailer"
              width={1200}
              height={900}
              className="h-[520px] w-full rounded-[34px] object-cover"
            />
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="text-sm font-black uppercase tracking-[0.35em] text-[#d99b52]">
              Adventure Trailer
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
              Her yolda, her mevsimde özgür kamp deneyimi.
            </h2>

            <p className="mt-6 leading-8 text-white/65">
              Venturo Adventure Trailer; şehir dışı kaçamaklar, kamp alanları,
              sahil, orman ve zorlu yol koşulları için geliştirilen kompakt ve
              fonksiyonel bir karavan çözümüdür.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {karavanOzellikleri.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm font-bold text-white/80"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#d99b52] text-xs font-black text-black">
                    ✓
                  </span>
                  {item}
                </div>
              ))}
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex rounded-full bg-[#d99b52] px-8 py-4 font-black text-black transition hover:-translate-y-1 hover:bg-[#f0b86b]"
            >
              Karavan İçin Teklif Al
            </a>
          </motion.div>
        </div>
      </section>

      {/* TINY HOUSE */}
      <section id="tiny" className="relative bg-[#070b09] px-4 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_1.05fr] md:items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-black uppercase tracking-[0.35em] text-[#d99b52]">
              Tiny House & Mobil Ev
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
              Ahşap dokulu, modern ve anahtar teslim yaşam alanları.
            </h2>

            <p className="mt-6 leading-8 text-white/65">
              Tiny house ve mobil ev modellerinde amaç yalnızca güzel görünüm
              değildir. Kullanışlı mutfak, rahat oturma alanı, banyo, yatak
              bölümü ve depolama çözümleriyle her metrekare verimli
              kullanılmalıdır.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {tinyOzellikleri.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm font-bold text-white/80"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#d99b52] text-xs font-black text-black">
                    ✓
                  </span>
                  {item}
                </div>
              ))}
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex rounded-full bg-[#d99b52] px-8 py-4 font-black text-black transition hover:-translate-y-1 hover:bg-[#f0b86b]"
            >
              Tiny House İçin Bilgi Al
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative overflow-hidden rounded-[42px] border border-white/10"
          >
            <Image
              src="/tiny-hero.jpg"
              alt="Venturo tiny house"
              width={1200}
              height={900}
              className="h-[620px] w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-7">
              <p className="text-3xl font-black">Anahtar Teslim Mobil Ev</p>
              <p className="mt-2 max-w-xl text-sm leading-6 text-white/70">
                Veranda, iç mekan, mutfak, banyo ve ahşap detaylı özel üretim.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* GALERİ */}
      <section className="bg-[#0c120e] px-4 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.35em] text-[#d99b52]">
                Galeri
              </p>
              <h2 className="mt-4 text-3xl font-black md:text-5xl">
                Gerçek kullanım hissi veren yaşam alanları.
              </h2>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#d99b52]/40 px-7 py-4 text-center font-black text-[#d99b52] transition hover:bg-[#d99b52] hover:text-black"
            >
              Projem İçin Yaz
            </a>
          </div>

          <div className="grid gap-5 md:grid-cols-4">
            {galeri.map((item, index) => (
              <motion.div
                key={item.baslik}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative overflow-hidden rounded-[34px] border border-white/10 bg-white/5 ${
                  index === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.baslik}
                  width={900}
                  height={900}
                  className={`w-full object-cover transition duration-700 group-hover:scale-110 ${
                    index === 0 ? "h-[620px]" : "h-[300px]"
                  }`}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-black">{item.baslik}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PAKETLER */}
      <section id="paketler" className="bg-[#070b09] px-4 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-[#d99b52]">
              Paketler
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
              İhtiyaca göre üretim, net süreç, hızlı iletişim.
            </h2>
            <p className="mt-5 leading-8 text-white/60">
              Fiyatlar model, ölçü, iç donanım ve opsiyonlara göre değişir.
              Size en uygun paketi belirlemek için WhatsApp üzerinden hızlıca
              bilgi alabilirsiniz.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {paketler.map((paket, index) => (
              <motion.div
                key={paket.ad}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className={`relative rounded-[36px] border p-7 shadow-2xl transition hover:-translate-y-2 ${
                  paket.populer
                    ? "border-[#d99b52] bg-gradient-to-br from-[#2a1d12] to-[#0d120e] shadow-[#d99b52]/15"
                    : "border-white/10 bg-[#111812] shadow-black/25"
                }`}
              >
                {paket.populer && (
                  <div className="absolute -top-4 left-7 rounded-full bg-[#d99b52] px-5 py-2 text-xs font-black text-black">
                    En Çok Tercih Edilen
                  </div>
                )}

                <h3 className="text-2xl font-black">{paket.ad}</h3>

                <p className="mt-3 text-3xl font-black text-[#d99b52]">
                  {paket.fiyat}
                </p>

                <p className="mt-4 leading-7 text-white/60">
                  {paket.aciklama}
                </p>

                <div className="mt-7 space-y-3">
                  {paket.maddeler.map((madde) => (
                    <div
                      key={madde}
                      className="flex items-center gap-3 text-sm font-bold text-white/78"
                    >
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#d99b52] text-xs font-black text-black">
                        ✓
                      </span>
                      {madde}
                    </div>
                  ))}
                </div>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 flex rounded-full px-6 py-4 text-center font-black transition ${
                    paket.populer
                      ? "bg-[#d99b52] text-black hover:bg-[#f0b86b]"
                      : "border border-[#d99b52]/40 text-[#d99b52] hover:bg-[#d99b52] hover:text-black"
                  }`}
                >
                  Paket İçin Bilgi Al
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* İLETİŞİM */}
      <section id="iletisim" className="bg-[#0c120e] px-4 py-20 md:px-8">
        <div className="mx-auto overflow-hidden rounded-[44px] border border-[#d99b52]/30 bg-gradient-to-br from-[#d99b52] via-[#b77635] to-[#5b3516] p-8 text-black shadow-2xl shadow-[#d99b52]/10 md:p-12">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.3em]">
                Hızlı Teklif
              </p>

              <h2 className="mt-4 max-w-4xl text-3xl font-black leading-tight md:text-5xl">
                Size uygun mobil ev, tiny house veya karavan modelini birlikte
                belirleyelim.
              </h2>

             <p className="mt-5 max-w-2xl text-base font-semibold leading-8 text-black/70">
  İzmir Bornova merkezli üretim ve iletişim noktamızdan; arsa, kamp,
  bağ evi, yatırım veya seyahat için en doğru modeli birlikte netleştirelim.
</p>
            </div>

            <div className="flex flex-col gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-black px-8 py-4 text-center text-base font-black text-white transition hover:-translate-y-1 hover:bg-[#111]"
              >
                WhatsApp’ta Sohbet Et
              </a>

              <a
                href={`tel:${telefon.replaceAll(" ", "")}`}
                className="rounded-full border border-black/20 bg-white/30 px-8 py-4 text-center text-base font-black text-black transition hover:-translate-y-1 hover:bg-white/50"
              >
                Hemen Ara: {telefon}
              </a>
              <a
  href={instagramLink}
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-full border border-black/20 bg-white/30 px-8 py-4 text-center text-base font-black text-black transition hover:-translate-y-1 hover:bg-white/50"
>
  Instagram’dan İncele
</a>
<a
  href={konumLink}
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-full border border-black/20 bg-white/30 px-8 py-4 text-center text-base font-black text-black transition hover:-translate-y-1 hover:bg-white/50"
>
  Konuma Git
</a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-[#050806] px-4 py-8 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-white/50 md:flex-row md:items-center">
          <p>© 2026 Venturo Ahşap. Tüm hakları saklıdır.</p>
          <p>Karavan • Tiny House • Mobil Ev</p>
        </div>
      </footer>

      {/* MOBİL SABİT WHATSAPP */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 left-4 right-4 z-50 rounded-full bg-[#25D366] px-6 py-4 text-center text-base font-black text-white shadow-2xl shadow-black/50 md:hidden"
      >
        WhatsApp’tan Bilgi Al
      </a>
    </main>
  );
}