import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Card from './Card';
import image1 from '../assets/image/image1.png';
import image2 from '../assets/image/image2.png';
import image3 from '../assets/image/image3.png';
import dawa from '../assets/image/dawa.gif';
import gameOfLife from '../assets/image/life.gif';
import pi from '../assets/image/pi.gif';

import angularLogo from '../assets/image/angular.png';
import reactLogo from '../assets/image/react.png';
import bootstrapLogo from '../assets/image/bootstrap.png';
import javascriptLogo from '../assets/image/javascript.png';
import angularLogoDark from '../assets/image/angular-dark.png';
import reactLogoDark from '../assets/image/react-dark.png';
import bootstrapLogoDark from '../assets/image/bootstrap-dark.png';
import javascriptLogoDark from '../assets/image/javascript-dark.png';

class Caroussel extends React.Component {


    constructor(props) {
        super(props);
        let angularImage;
        let reactImage;
        let bootstrapImage;
        let javascriptImage;

        let angularLogoLink = [angularImage, 'https://angular.io/'];
        let angularLogoLinkDark = [angularLogoDark, 'https://angular.io/'];
        let reactLogoLink = [reactLogo, 'https://reactjs.org/'];
        let reactLogoLinkDark = [reactLogoDark, 'https://reactjs.org/'];
        let bootstrapLogoLink = [bootstrapLogo, 'https://getbootstrap.com/'];
        let bootstrapLogoLinkDark = [bootstrapLogoDark, 'https://getbootstrap.com/'];
        let javascriptLogoLink = [javascriptLogo, 'https://www.javascript.com/'];
        let javascriptLogoLinkDark = [javascriptLogoDark, 'https://www.javascript.com/'];

        if (props.darkmode) {
            // let darkItems = {...items};
            // darkItems[0].langIcon[0] = angularLogoLinkDark;
            // this.setState({
            //     // darkmode: !value,
            //     items: !this.state.darkmode,
            // })
            angularImage = angularLogoDark;
            reactImage = reactLogoDark;
            bootstrapImage = bootstrapLogoDark;
            javascriptImage = javascriptLogoDark;
        } else {
            angularImage = angularLogo;
            reactImage = reactLogo;
            bootstrapImage = bootstrapLogo;
            javascriptImage = javascriptLogo;
        }
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Dawa TD',
                    subTitle: 'Online tower defense game',
                    imgSrc: dawa,
                    langIcon: [angularLogoLink, reactLogoLink, bootstrapLogoLink, javascriptLogoLink],
                    link: 'https://dawa.bas.lu/',
                    selected: false,
                    description: 'Coding bootcamp final project.    Defend endless waves of tanks and get your name on the leaderboard!'
                },
                {
                    id: 1,
                    title: 'Game of life',
                    subTitle: 'John Conway\'s Game of Life',
                    imgSrc: gameOfLife,
                    langIcon: [angularLogoLink, reactLogoLink, bootstrapLogoLink],

                    link: 'https://devgrub.com',
                    selected: false,
                    description: 'incoming text to be filllllllllllllllllllled I dont know anything'
                },
                {
                    id: 2,
                    title: 'Collide with PI',
                    subTitle: 'Calculate PI with block collisions',
                    imgSrc: pi,
                    langIcon: [angularLogoLink, reactLogoLink, bootstrapLogoLink],
                    link: 'https://devgrub.com',
                    selected: false,
                    description: 'incoming text to be filllllllllllllllllllled I dont know anything'
                },
                {
                    id: 3,
                    title: 'Collide with PI',
                    subTitle: 'Calculate PI with block collisions',
                    imgSrc: dawa,
                    langIcon: [angularLogoLink, reactLogoLink, bootstrapLogoLink],

                    link: 'https://devgrub.com',
                    selected: false,
                    description: 'incoming text to be filllllllllllllllllllled I dont know anything'
                },
                {
                    id: 4,
                    title: 'Collide with PI',
                    subTitle: 'Calculate PI with block collisions',
                    imgSrc: dawa,
                    langIcon: [angularLogoLink, reactLogoLink, bootstrapLogoLink],

                    link: 'https://devgrub.com',
                    selected: false,
                    description: 'incoming text to be filllllllllllllllllllled I dont know anything'
                },
                {
                    id: 5,
                    title: 'Collide with PI',
                    subTitle: 'Calculate PI with block collisions',
                    imgSrc: dawa,
                    langIcon: [angularLogoLink, reactLogoLink, bootstrapLogoLink],

                    link: 'https://devgrub.com',
                    selected: false,
                    description: 'incoming text to be filllllllllllllllllllled I dont know anything'
                }
            ]
        }
    }



    handleCardClick = (id, card) => {
        let items = [...this.state.items];
        items[id].selected = items[id].selected ? false : true;
        items.forEach(item => {
            if (item.id !== id) {
                item.selected = false;
            }
        });
        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return (
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        )
    }

}

export default Caroussel;