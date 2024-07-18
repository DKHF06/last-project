
import "./Home.css";
import classes from "./slider.module.css";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
import { Accordion } from "@mantine/core";
import classes123 from "./accordion.module.css";
import { Switch } from '@mantine/core';
import { Group, Button } from '@mantine/core';
import { IconSearch, } from '@tabler/icons-react';

export function Home() {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  const groceries = [
    {
      value: 'Как к вам попасть?',
      description:
        'Мы имеем множество офисов по всей стрнане! Можете увидеть наши адреса в любом приложении карт.'
      ,
    },
    {
      value: 'Как заказать?',
      description:
        'Для того чтобы заказать какой либо товар, во вкладке "Каталог" нажмите на кнопку "В корзину" у любого товара, а затем перейдите в корзину и нажмите кнопку "Офрмить заказ".',
    },
    {
      value: 'Как оформить возврат?',
      description:
        'Для возврата товаров напишите в чат с технической поддержкой или обратитесь к нам на почту: autopart@example.ru.',
    },
    {
      value: 'Как мне найти и подобрать нужную деталь?',
      description:
        'Для подбора детали вы можете отправить запрос на сверку по VIN-номеру в поисковой строке в шапке профиля.',
    },
    {
      value: 'Что если деталь не подойдет?',
      description:
        'Оформить возврат товара можно через нашу техническую поддержку или написав нам на почту autopart@example.ru.',
    },
  ];
  const items = groceries.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control icon={item.emoji}>{item.value}</Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));
  return (
    <>
      {/* banner */}
      <div className="banner">
        <Carousel
          classNames={{
            root: classes.root,
            viewport: classes.viewport,
            slide: classes.slide,
            indicators: classes.indicators,
            control: classes.control,
          }}
          withIndicators
          height={200}
          slideGap={50}
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
        >
          <Carousel.Slide>
            <img src="./public/banner.png" alt=""/>
          </Carousel.Slide>
          <Carousel.Slide>
            <img src="./public/banner.png" alt="" />
          </Carousel.Slide>
        </Carousel>
      </div>
      <div className="marksForm">
        <div className="marks__block">
          <p className="marksTitle">Выбери свою марку<br /> автомобиля</p>
          <div className="marks">
            <div className="mark">
              <p className="markText">Audi</p>
              <p className="markText">Acura</p>
              <p className="markText">Alphina</p>
              <p className="markText">Bentley</p>
              <p className="markText">BMW</p>
              <p className="markText">Cadillac</p>
              <p className="markText">Chery</p>
              <p className="markText">Daewoo</p>
            </div>
            <div className="mark">
              <p className="markText">Dodge</p>
              <p className="markText">Exeed</p>
              <p className="markText">FAW</p>
              <p className="markText">Geely</p>
              <p className="markText">Haval</p>
              <p className="markText">Honda</p>
              <p className="markText">Hyundai</p>
              <p className="markText">Infiniti</p>
            </div>
            <div className="mark">
              <p className="markText">Jaguar</p>
              <p className="markText">Jeep</p>
              <p className="markText">Kia</p>
              <p className="markText">Lexus</p>
              <p className="markText">Lifan</p>
              <p className="markText">Mazda</p>
              <p className="markText">Nissan</p>
              <p className="markText">Opel</p>
            </div>
            <div className="mark">
              <p className="markText">Renault</p>
              <p className="markText">Skoda</p>
              <p className="markText">Subaru</p>
              <p className="markText">Suzuki</p>
              <p className="markText">Toyota</p>
              <p className="markText">Zeekr</p>
              <p className="markText">ВАЗ</p>
              <p className="markText">УАЗ</p>
            </div>
          </div>
        </div>
        <div className="form">
          <p className="form__title">Найти товар</p>
          <select name="markiavto" className="formInput">
            <option value="r1">Выберите марку автомобиля</option>
            <option value="r2">Audi</option>
            <option value="r3">Acura</option>
            <option value="r4">Alphina</option>
            <option value="r5">Bentley</option>
            <option value="r6">BMW</option>
            <option value="r6">Cadillac</option>
            <option value="r6">Chery</option>
            <option value="r6">Daewoo</option>
            <option value="r6">Dodge</option>
            <option value="r6">Exeed</option>
          </select>
          <select name="Modelauto" className="formInput">
            <option value="r1">Выберите модель автомобиля</option>
            <option value="r2">Model 1</option>
            <option value="r3">Model 2</option>
            <option value="r4">Model 3</option>
            <option value="r5">Model 5</option>
            <option value="r6">Model X</option>
            <option value="r6">Model Y</option>
            <option value="r6">Model S</option>
          </select>
          <select name="Modelauto" className="formInput">
            <option value="r1">Выберите поколение автомобиля</option>
            <option value="r2">1 поколение (1990-2000гг)</option>
            <option value="r3">2 поколение (2000-2005гг)</option>
            <option value="r4">3 поколение (2005-2010гг)</option>
            <option value="r5">4 поколение (2010-2020гг)</option>
            <option value="r6">5 поколение (2020-2025гг)</option>
          </select>
          <Switch
            defaultChecked
            color="gray"
            label="Показать аналоги"
            textColor="white"
          />
          <Button rightSection={<IconSearch size={14} className="btn12345" />} fullWidth>Найти</Button>
        </div>
      </div>
      <div className="catalog">
        <p className="catalogTitle">Каталог</p>
        <div className="catalogCards">
          <div className="catalogCard">
            <a href="/catalog"><img src="/card1.png" alt="#" /></a>
          </div>
          <div className="catalogCard">
            <a href="/catalog"><img src="/card2.png" alt="#" /></a>
          </div>
          <div className="catalogCard">
            <a href="/catalog"><img src="/card3.png" alt="#" /></a>
          </div>
          <div className="catalogCard">
            <a href="/catalog"><img src="/card4.png" alt="#" /></a>
          </div>
          <div className="catalogCard">
            <a href="/catalog"><img src="/card5.png" alt="#" /></a>
          </div>
          <div className="catalogCard">
            <a href="/catalog"><img src="/card6.png" alt="#" /></a>
          </div>
          <div className="catalogCard">
            <a href="/catalog"><img src="/card7.png" alt="#" /></a>
          </div>
          <div className="catalogCard">
            <a href="/catalog"><img src="/card8.png" alt="#" /></a>
          </div>
        </div>
      </div>
      <div className="formaccordeon">
        <div className="form2">
          <p className="form2title">Трудности с выбором детали?<br />Звоните или оставьте заявку!</p>
          <input type="text" placeholder="Введите ваше имя" />
          <input type="phone" name="" id="" placeholder="Введите ваш номер" />
          <p className="form2text">
            Или позвоните по номеру
          </p>
          <p className="form2number">
            +7(999)-999-99-99
          </p>
        </div>
        <div className="accordeon">
          <p className="accordionTitle">Ответы на часто задаваемые вопросы</p>
          <Accordion defaultValue="Apples" classNames={{ root: classes123.root }}>
            {items}
          </Accordion>
        </div>

      </div>
    </>
  );
}
