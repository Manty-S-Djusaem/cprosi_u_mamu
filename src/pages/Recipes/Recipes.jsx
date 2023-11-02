import React from 'react';
import module from './Recipes.module.scss'

import logo from '../../assets/Group 25.png';
import white from '../../assets/white.png';
import vector from '../../assets/Vector.png';
import food from '../../assets/food.png';
import telegram from '../../assets/telegram.png';
import youtube from '../../assets/youtube.png';
import govno from '../../assets/govno.png';

function App() {
    return (
    <div className="App">
    <header>
        <nav>
            <img className={module.nav_item} src={logo}></img>
            <div className={module.navCategory}>
                <div className={module.nav_cat}>категория</div>
                <div><img className={module.nav_img} src={vector}></img></div>
            </div>
            <a className={module.nav_item} href='#'>О нас</a>
            <div className={module.nav_itemStart}>
                <div className={module.itemStart}>Начать</div>
            </div>
        </nav>
    </header>

    <div className={module.block}>
        <div className={module.block_item1}>Выберите рецепты</div>
        <div className={module.block_item2}>10 из 10</div>
    </div>

    <div className={module.container}>
    <div className={module.food_down}>
        <img src={food}></img>
    </div>
    <div className={module.food_down}>
        <img src={food}></img>
    </div>
    <div className={module.food_down}>
        <img src={food}></img>
    </div>
    <div className={module.food_down}>
        <img src={food}></img>
    </div>
    <div className={module.food_down}>
        <img src={food}></img>
    </div>
    <div className={module.food_down}>
        <img src={food}></img>
    </div>
    <div className={module.food_down}>
        <img src={food}></img>
    </div>
    <div className={module.food_down}>
        <img src={food}></img>
    </div>
    <div className={module.food_down}>
        <img src={food}></img>
    </div>
    </div>

    <footer>
        <div className={module.footer_container}>
            <div className={module.footer_block1}>
            <img src={white}></img>
            <div className={module.footer_info}>онлайн-курсы “спроси у мамы” это настоящие курсы кулинарии. Это сайт для тех
            , кто любит готовить или хочет научиться это делать легко и непринужденно.</div>
            <div className={module.footer_more}>Подробнее</div>
            <div className={module.footer_info2}>Ⓒ Спроси у мамы, 2023 </div>
        </div>
        <div className={module.footer_block2}>
            <ul>
                <li className={module.ul1}><a href='#'>О нас</a></li>
                <li className={module.ul1}><a href='#'>Справка и поддержка</a></li>
                <li className={module.ul1}><a href='#'>Условия использования</a></li>
                <li className={module.ul1}><a href='#'>Настройки файлов cookie</a></li>
                <li className={module.ul1}><a href='#'>Карта сайта</a></li>
            </ul>
        </div>
        <div className={module.footer_block3}>
            <ul>
                <li className={module.ul2}>Контакты</li>
                <li className={module.ul2}>Скидки</li>
                <li className={module.ul2}>Условия использования</li>
            </ul>
            <div className={module.icons}>
                <div className={module.icon_block}><img className={module.icon1} src={telegram}></img></div>
                <div className={module.icon_block}><img className={module.icon2} src={youtube}></img></div>
                <div className={module.icon_block}><img className={module.icon3} src={govno}></img></div>
            </div>
        </div>
        </div>
    </footer>


    </div>


    );
}

export default App;

