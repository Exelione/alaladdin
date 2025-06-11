import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/logo.png';
import PropTypes from 'prop-types';
import { 
    BottomsContainer, 
    LinkElement, 
    LinksContainer, 
    LogoContainer, 
    SidebarContainer 
    } from './styles';

const routes = [
    { title: 'Home', icon: 'fas-solid fa-house', path: '/' },
    { title: 'Sales', icon: 'chart-line', path: '/sales' },
    { title: 'Costs', icon: 'chart-column', path: '/costs' },
    { title: 'Payments', icon: 'wallet', path: '/payments' },
    { title: 'Finances', icon: 'chart-pie', path: '/finances' },
    { title: 'Messages', icon: 'envelope', path: '/messages' },
];

const bottomRoutes = [
    { title: 'Settings', icon: 'sliders', path: '/settings' },
    { title: 'Support', icon: 'phone-volume', path: '/support' },
];


const Sidebar = (props) => {

    const [opened, setOpened] = useState(false);
    const [active, setActive] = useState('/sales');

    const goToRoute = (path) => {
        console.log(`going to "${path}"`);
    };

    const toggleSidebar = () => {
        setOpened(v => !v);
    };

    return (
        <SidebarContainer open={opened} theme={props.color}>
            <LogoContainer open={opened} theme={props.color}>
                <img src={logo} alt="TensorFlow logo" />
                <span>TensorFlow</span>
                <button onClick={toggleSidebar}>
                    <FontAwesomeIcon icon={opened ? 'angle-left' : 'angle-right'} />
                </button>
            </LogoContainer>
            <LinksContainer >
                {
                    routes.map(route => (
                        <LinkElement
                            key={route.title}
                            onClick={() => {
                                goToRoute(route.path);
                                setActive(route.path);
                            }}
                            active={active === route.path}
                            open={opened}
                            theme={props.color}
                        >
                            <FontAwesomeIcon icon={route.icon} />
                            <span>{route.title}</span>
                        </LinkElement>
                    ))
                }
            </LinksContainer>
                <BottomsContainer>
                    {
                        bottomRoutes.map(route => (
                            <LinkElement
                                key={route.title}
                                onClick={() => {
                                    goToRoute(route.path);
                                    setActive(route.path);
                                }}
                                active={active === route.path}
                                open={opened}
                                theme={props.color}
                            >
                                <FontAwesomeIcon icon={route.icon} />
                                <span>{route.title}</span>
                            </LinkElement>
                        ))
                    }
                </BottomsContainer>
            
        </SidebarContainer>
    );
};

Sidebar.propTypes = {
    color: PropTypes.string,
};

export default Sidebar;
