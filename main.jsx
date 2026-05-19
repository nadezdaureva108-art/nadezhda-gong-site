import React from "react";
import { createRoot } from "react-dom/client";
import { CalendarDays, Heart, MapPin, Music, Sparkles, MessageCircle, Waves, Moon, Instagram, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import "./styles.css";

const services = [
  {
    title: "Гонг-медитация",
    duration: "Групповой формат",
    text: "Мягкое звуковое путешествие для расслабления, восстановления и внутренней тишины.",
  },
  {
    title: "Индивидуальная практика",
    duration: "По договорённости",
    text: "Персональная сессия в бережном пространстве, где звук помогает телу выдохнуть и замедлиться.",
  },
  {
    title: "Выезд на мероприятие",
    duration: "Москва и другие локации",
    text: "Гонг-практика для йога-событий, ретритов, женских кругов, wellness-дней и камерных мероприятий.",
  },
];

const photos = [
  "/images/red-silk-gong.jpg",
  "/images/black-white-gong.jpg",
  "/images/gong-detail-1.jpg",
  "/images/studio-practice.jpg",
  "/images/nadezhda-meditation.jpg",
  "/images/gong-instruments.jpg",
];

function App() {
  return (
    <main>
      <header className="nav">
        <a className="logo" href="#home">
          <Waves size={20} />
          Nadezhda Gong
        </a>
        <nav>
          <a href="#about">Обо мне</a>
          <a href="#services">Практики</a>
          <a href="#gallery">Галерея</a>
          <a href="#contacts">Контакты</a>
        </nav>
        <a className="navButton" href="https://t.me/nadezhda_yu" target="_blank" rel="noreferrer">Записаться</a>
      </header>

      <section id="home" className="hero">
        <div className="softBlur one" />
        <div className="softBlur two" />

        <motion.div
          className="heroText"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <div className="label">
            <Sparkles size={16} />
            Luxury wellness · Gong meditation
          </div>
          <h1>Гонг-медитации в Москве для глубокого расслабления</h1>
          <p>
            Звуковые практики в йога-студии Sattva, индивидуальные сессии и выездные мероприятия с гонгом по договорённости.
          </p>
          <div className="actions">
            <a className="primary" href="https://t.me/nadezhda_yu" target="_blank" rel="noreferrer">Записаться в Telegram</a>
            <a className="secondary" href="#services">Смотреть практики</a>
          </div>
        </motion.div>

        <motion.div
          className="heroImage"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
        >
          <img src="/images/nadezhda-gong-main.jpg" alt="Надежда, гонг-медитация" />
          <div className="imageCaption">
            <Moon size={22} />
            <span>Пространство звука, вибрации и тишины</span>
          </div>
        </motion.div>
      </section>

      <section id="about" className="section about">
        <div className="portraitCard">
          <img src="/images/nadezhda-portrait.jpg" alt="Надежда" />
        </div>
        <div className="contentCard">
          <Heart size={34} />
          <h2>Обо мне</h2>
          <p>
            Меня зовут Надежда. Я провожу гонг-медитации в Москве в йога-студии Sattva, а также выезжаю с практиками на мероприятия и в другие локации по договорённости.
          </p>
          <p>
            Для меня звук — это пространство глубокого расслабления, внутренней тишины и бережного восстановления. Во время практики вам не нужно ничего делать правильно — только дышать, чувствовать и позволять телу расслабляться.
          </p>
        </div>
      </section>

      <section id="services" className="section">
        <div className="sectionIntro">
          <span>Практики</span>
          <h2>Форматы работы</h2>
        </div>

        <div className="cards">
          {services.map((service) => (
            <article className="serviceCard" key={service.title}>
              <Music size={26} />
              <small>{service.duration}</small>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="darkBlock">
        <div>
          <CalendarDays size={38} />
          <h2>Запись на практику</h2>
          <p>
            Напишите мне в Telegram, Instagram или WhatsApp — я подскажу ближайшую дату и помогу выбрать подходящий формат.
          </p>
        </div>
        <div className="contactBox">
          <a href="https://t.me/nadezhda_yu" target="_blank" rel="noreferrer"><MessageCircle size={18} /> Telegram: @nadezhda_yu</a>
          <a href="https://instagram.com/_yurievan_" target="_blank" rel="noreferrer"><Instagram size={18} /> Instagram: @_yurievan_</a>
          <a href="https://wa.me/79916159151" target="_blank" rel="noreferrer"><Phone size={18} /> WhatsApp: 89916159151</a>
          <a href="mailto:nadezdaureva108@gmail.com"><Mail size={18} /> nadezdaureva108@gmail.com</a>
        </div>
      </section>

      <section id="gallery" className="section">
        <div className="sectionIntro">
          <span>Атмосфера</span>
          <h2>Галерея</h2>
        </div>
        <div className="gallery">
          {photos.map((photo, index) => (
            <img key={photo} src={photo} alt={`Гонг-медитация ${index + 1}`} />
          ))}
        </div>
      </section>

      <footer id="contacts">
        <div>
          <h2>Nadezhda Gong Meditation</h2>
          <p><MapPin size={16} /> Москва · йога-студия Sattva · выездные мероприятия</p>
        </div>
        <a className="primary" href="https://t.me/nadezhda_yu" target="_blank" rel="noreferrer">Связаться</a>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
