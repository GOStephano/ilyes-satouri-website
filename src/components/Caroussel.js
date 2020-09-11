import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Card from './Card';
import dawa from '../assets/image/dawa.gif';
import gameOfLife from '../assets/image/life.gif';
import portfolio from '../assets/image/portfolio.png';

import angularLogo from '../assets/image/angular.png';
import reactLogo from '../assets/image/react.png';
import bootstrapLogo from '../assets/image/bootstrap.png';
import javascriptLogo from '../assets/image/javascript.png';
import angularLogoDark from '../assets/image/angular-dark.png';
import reactLogoDark from '../assets/image/react-dark.png';
import bootstrapLogoDark from '../assets/image/bootstrap-dark.png';
import javascriptLogoDark from '../assets/image/javascript-dark.png';
import laravelLogoDark from '../assets/image/laravel-dark.png';
import laravelLogo from '../assets/image/laravel.png';
import p5Logo from '../assets/image/p5js.png';
import p5LogoDark from '../assets/image/p5js-dark.png';

class Caroussel extends React.Component {


    constructor(props) {
        super(props);

        let angularLogoLink = [angularLogo, 'https://angular.io/'];
        let angularLogoLinkDark = [angularLogoDark, 'https://angular.io/'];
        let reactLogoLink = [reactLogo, 'https://reactjs.org/'];
        let reactLogoLinkDark = [reactLogoDark, 'https://reactjs.org/'];
        let bootstrapLogoLink = [bootstrapLogo, 'https://getbootstrap.com/'];
        let bootstrapLogoLinkDark = [bootstrapLogoDark, 'https://getbootstrap.com/'];
        let javascriptLogoLink = [javascriptLogo, 'https://www.javascript.com/'];
        let javascriptLogoLinkDark = [javascriptLogoDark, 'https://www.javascript.com/'];
        let laravelLogoLink = [laravelLogo, 'https://laravel.com/'];
        let laravelLogoLinkDark = [laravelLogoDark, 'https://laravel.com/'];
        let p5LogoLink = [p5Logo, 'https://p5js.org/'];
        let p5LogoLinkDark = [p5LogoDark, 'https://p5js.org/'];
        let darkIcon = [
            angularLogoDark,
            reactLogoDark,
            bootstrapLogoDark,
            javascriptLogoDark,
            laravelLogoDark,
        ]
        let brightIcon = [
            angularLogo,
            reactLogo,
            bootstrapLogo,
            javascriptLogo,
            laravelLogo
        ]

        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Dawa TD',
                    subTitle: 'Tower Defense',
                    imgSrc: dawa,
                    langIcon: [bootstrapLogoLinkDark, javascriptLogoLinkDark, laravelLogoLinkDark],
                    link: 'https://dawa.bas.lu/',
                    selected: false,
                    description: 'Coding bootcamp final project. Defend endless waves of tanks and get your name on the leaderboard'
                },
                {
                    id: 1,
                    title: 'Game of life',
                    subTitle: 'By John Conway',
                    imgSrc: gameOfLife,
                    langIcon: [angularLogoLinkDark, reactLogoLinkDark, bootstrapLogoLinkDark, p5LogoLinkDark],

                    link: 'https://game-of-life-satouri.herokuapp.com/',
                    selected: false,
                    description: 'Explore the game of life, and place gliders'
                },
                {
                    id: 2,
                    title: 'Collisions',
                    subTitle: 'Pie in collisions',
                    imgSrc: portfolio,
                    langIcon: [angularLogoLinkDark, reactLogoLinkDark, bootstrapLogoLinkDark],
                    link: '/',
                    selected: false,
                    description: 'Most inefficient way to calculate PI with frictionless collisions of blocks'
                }
            ],
            itemsDark: [
                {
                    id: 0,
                    title: 'Dawa TD',
                    subTitle: 'Tower Defense',
                    imgSrc: dawa,
                    langIcon: [bootstrapLogoLink, javascriptLogoLink, laravelLogoLink],
                    link: 'https://dawa.bas.lu/',
                    selected: false,
                    description: 'Coding bootcamp final project. Defend endless waves of tanks and get your name on the leaderboard'
                },
                {
                    id: 1,
                    title: 'Game of life',
                    subTitle: 'By John Conway',
                    imgSrc: gameOfLife,
                    langIcon: [angularLogoLink, reactLogoLink, bootstrapLogoLink, p5LogoLink],

                    link: 'https://game-of-life-satouri.herokuapp.com/',
                    selected: false,
                    description: 'Explore the game of life, and place gliders'
                },
                {
                    id: 2,
                    title: 'Collisions',
                    subTitle: 'Pie in collisions',
                    imgSrc: portfolio,
                    langIcon: [angularLogoLinkDark, reactLogoLinkDark, bootstrapLogoLinkDark],
                    link: '/',
                    selected: false,
                    description: 'Most inefficient way to calculate PI with frictionless collisions of blocks'
                }
            ]
        }
    }


    handleCardClick = (id, card) => {
        let items;
        let itemsDark;
        items = [...this.state.items];
        itemsDark = [...this.state.itemsDark];
        items[id].selected = items[id].selected ? false : true;
        itemsDark[id].selected = itemsDark[id].selected ? false : true;
        items.forEach(item => {
            if (item.id !== id) {
                item.selected = false;
            }
        });
        itemsDark.forEach(item => {
            if (item.id !== id) {
                item.selected = false;
            }
        });
        this.setState({
            items: items,
            itemsDark: itemsDark
        })
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card darkmode={this.props.darkmode} item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return (
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.props.darkmode ? this.state.items : this.state.itemsDark)}
                </Row>
            </Container>
        )
    }

}

export default Caroussel;