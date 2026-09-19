import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  DraftingCompass,
  Flower2,
  Instagram,
  Leaf,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Ruler,
  Sprout,
  Trees,
  Youtube,
} from "lucide-react";
import heroImage from "../assets/aksara-hero.jpg";
import aboutImage from "../assets/aksara-about.jpg";
import modernImage from "../assets/project-modern.jpg";
import rooftopImage from "../assets/project-rooftop.jpg";
import verticalImage from "../assets/project-vertical.jpg";
import villaImage from "../assets/project-villa.jpg";
import minimalImage from "../assets/project-minimal.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aksara Landscape | Jasa Desain Taman Profesional" },
      {
        name: "description",
        content:
          "Jasa desain, pembangunan, dan perawatan taman profesional untuk hunian dan ruang komersial.",
      },
      { property: "og:title", content: "Aksara Landscape" },
      {
        property: "og:description",
        content: "Mewujudkan ruang hijau yang indah, fungsional, dan berkelanjutan.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  {
    image: villaImage,
    title: "Taman Tropis",
    text: "Menghadirkan nuansa alam tropis yang rimbun dan menyegarkan di halaman rumah Anda.",
  },
  {
    image:
      "https://res.cloudinary.com/di6ziqvtp/image/upload/v1789651691/33addd37-03b1-47d7-a0a2-6ab589b00c96.png",
    title: "Saung Gazebo",
    text: "Pembuatan tempat bersantai yang nyaman dengan material alami pilihan.",
  },
  {
    image:
      "https://res.cloudinary.com/di6ziqvtp/image/upload/v1789651844/55cfe003-955c-4796-a0ab-8c2cb09f1b50.png",
    title: "Zen Garden / Japanese Garden",
    text: "Taman bergaya Jepang yang minimalis, memberikan ketenangan dan kedamaian.",
  },
  {
    image:
      "https://res.cloudinary.com/di6ziqvtp/image/upload/v1789652062/25cbb80a-6db7-4448-b7c5-5f6d03861610.png",
    title: "Taman Kering",
    text: "Solusi taman indah dengan perawatan minimal dan hemat air.",
  },
  {
    image: verticalImage,
    title: "Vertical Garden",
    text: "Pemanfaatan dinding atau ruang vertikal menjadi taman yang asri dan estetik.",
  },
  {
    image: "https://res.cloudinary.com/di6ziqvtp/image/upload/v1779518460/kolam_hias_ca6nfj.jpg",
    title: "Kolam Koi",
    text: "Pembuatan kolam ikan koi dengan sistem filter terbaik untuk memperindah lanskap Anda.",
  },
];

const projects = [
  [modernImage, "Taman Rumah Modern"],
  [rooftopImage, "Rooftop Garden Office"],
  [verticalImage, "Taman Vertikal Lobby"],
  [villaImage, "Taman Villa Tropis"],
  [minimalImage, "Taman Minimalis"],
];

const steps = [
  {
    icon: MessageCircle,
    number: "01",
    title: "Konsultasi",
    text: "Diskusi kebutuhan dan survei lokasi.",
  },
  { icon: Ruler, number: "02", title: "Desain", text: "Penyusunan konsep dan desain 3D." },
  { icon: Trees, number: "03", title: "Pengerjaan", text: "Eksekusi dengan tim profesional." },
  {
    icon: Sprout,
    number: "04",
    title: "Perawatan",
    text: "Perawatan berkala untuk hasil optimal.",
  },
];

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#beranda" className="brand" aria-label="Logo">
      <img
        src="https://res.cloudinary.com/di6ziqvtp/image/upload/v1789619920/8a693c8f-7302-4b7c-9841-79c571dae7ad.png"
        alt="Aksara Landscape Logo"
        style={{
          width: "160px",
          height: "auto",
          display: "block",
          borderRadius: "6px",
          objectFit: "contain",
          maxHeight: "60px",
        }}
      />
    </a>
  );
}

function Index() {
  return (
    <main>
      <header className="site-header">
        <Logo />
        <nav aria-label="Navigasi utama">
          <a href="#beranda">Beranda</a>
          <a href="#tentang">Tentang Kami</a>
          <a href="#layanan">Layanan</a>
          <a href="#proyek">Proyek</a>
          <a href="#proses">Proses</a>
          <a href="#artikel">Artikel</a>
          <a href="#kontak">Kontak</a>
        </nav>
        <a className="button button-green header-cta" href="#kontak">
          Konsultasi Gratis
        </a>
      </header>

      <section id="beranda" className="hero">
        <img
          src={heroImage}
          alt="Taman tropis modern dengan pencahayaan hangat"
          width={1600}
          height={900}
        />
        <div className="hero-shade" />
        <div className="hero-inner wrap">
          <div className="hero-copy">
            <h1>
              Mewujudkan
              <br />
              Ruang Hijau,
              <br />
              Menghidupkan
              <br />
              Kehidupan
            </h1>
            <p>
              AKSARA LANDSCAPE menghadirkan solusi landscape profesional yang menggabungkan
              keindahan alam, fungsi, dan keberlanjutan.
            </p>
            <div className="hero-actions">
              <a className="button button-green" href="#proyek">
                Lihat Proyek Kami
              </a>
              <a className="button button-light" href="#kontak">
                Konsultasi Gratis
              </a>
            </div>
          </div>
          <div className="hero-panel">
            <Feature
              icon={Leaf}
              title="Desain Kreatif"
              text="Desain lanskap yang estetis, fungsional, dan selaras dengan lingkungan."
            />
            <Feature
              icon={Flower2}
              title="Kualitas Terbaik"
              text="Material dan tanaman pilihan dengan standar kualitas tinggi."
            />
            <Feature
              icon={Sprout}
              title="Perawatan Profesional"
              text="Perawatan rutin untuk menjaga keindahan dan kesehatan taman Anda."
            />
          </div>
        </div>
      </section>

      <section id="tentang" className="about wrap section-pad">
        <div className="about-copy">
          <span className="eyebrow">TENTANG KAMI</span>
          <h2>
            Menyatukan Alam,
            <br />
            Desain, dan Kehidupan
          </h2>
          <p>
            AKSARA LANDSCAPE adalah perusahaan yang bergerak di bidang jasa desain, pembangunan, dan
            perawatan lanskap. Kami percaya bahwa ruang hijau yang dirancang dengan baik dapat
            meningkatkan kualitas hidup dan menciptakan keseimbangan antara manusia dan alam.
          </p>
          <a className="button button-green" href="#layanan">
            Selengkapnya Tentang Kami
          </a>
        </div>
        <img
          src={aboutImage}
          alt="Taman rumah tropis karya Aksara Landscape"
          loading="lazy"
          width={1200}
          height={720}
        />
      </section>

      <section id="layanan" className="services section-pad">
        <div className="wrap">
          <h2 className="section-title">Layanan Kami</h2>
          <div className="service-grid">
            {services.map(({ image, title, text }) => (
              <article className="service-card" key={title}>
                <div className="service-img">
                  <img src={image} alt={title} />
                </div>
                <div className="service-content">
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <a
                    href={`https://wa.me/628984987720?text=${encodeURIComponent("Halo Aksara Landscape, saya ingin berkonsultasi mengenai " + title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button button-green service-wa"
                  >
                    Book an Appointment <MessageCircle />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="proyek" className="projects section-pad">
        <div className="wrap">
          <h2 className="section-title">Proyek Kami</h2>
          <div className="filters">
            <span className="active">Semua</span>
            <span>Residensial</span>
            <span>Komersial</span>
            <span>Taman Vertikal</span>
            <span>Perawatan</span>
          </div>
          <div className="project-grid">
            {projects.map(([image, title]) => (
              <figure key={title}>
                <img src={image} alt={title} loading="lazy" width={816} height={816} />
                <figcaption>{title}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="proses" className="process">
        <div className="wrap process-inner">
          <div className="process-heading">
            <h2>Proses Kerja Kami</h2>
            <p>
              Kami menerapkan proses kerja yang terstruktur untuk memastikan hasil terbaik di setiap
              proyek.
            </p>
          </div>
          <div className="steps">
            {steps.map(({ icon: StepIcon, number, title, text }, i) => (
              <div className="step" key={number}>
                <span className="step-icon">
                  <StepIcon />
                </span>
                <strong>
                  {number}
                  <br />
                  {title}
                </strong>
                <p>{text}</p>
                {i < 3 && <i />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="artikel" className="cta-band">
        <h2>Siap Mewujudkan Ruang Hijau Impian Anda?</h2>
        <p>Hubungi kami sekarang untuk konsultasi gratis dan solusi terbaik untuk lanskap Anda.</p>
        <a className="button button-light" href="#kontak">
          Konsultasi Gratis
        </a>
      </section>

      <footer id="kontak">
        <div className="wrap footer-grid">
          <div>
            <Logo light />
            <p>Menyediakan solusi lanskap terbaik dengan sentuhan alami dan profesional.</p>
            <div className="socials">
              <Instagram />
              <MessageCircle />
              <Youtube />
            </div>
          </div>
          <div>
            <h3>Menu</h3>
            <a href="#beranda">Beranda</a>
            <a href="#tentang">Tentang Kami</a>
            <a href="#layanan">Layanan</a>
            <a href="#proyek">Proyek</a>
            <a href="#kontak">Kontak</a>
          </div>
          <div>
            <h3>Layanan</h3>
            <span>Desain Lanskap</span>
            <span>Pembangunan Lanskap</span>
            <span>Taman Vertikal</span>
            <span>Perawatan Taman</span>
          </div>
          <div>
            <h3>Kontak</h3>
            <span>
              <MapPin />
              Sawangan, Depok, Jawa Barat
            </span>
            <span>
              <Mail />
              aksaralandscape@gmail.com
            </span>
            <span>
              <Phone />
              +62 898 4987 720
            </span>
            <span>
              <Instagram />
              www.aksaralandscape.com
            </span>
          </div>
        </div>
        <div className="copyright">© 2026 Aksara Landscape. All rights reserved.</div>
      </footer>
      <a
        className="whatsapp"
        href="https://wa.me/628984987720"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hubungi melalui WhatsApp"
      >
        <MessageCircle />
      </a>
    </main>
  );
}

function Feature({ icon: Icon, title, text }: { icon: typeof Leaf; title: string; text: string }) {
  return (
    <div className="feature">
      <Icon />
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}
