import { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/logo.png';
import PropTypes from 'prop-types';

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
const SidebarContainer = styled.div`
    background-color: ${({ theme }) =>
        theme === 'dark'
            ? `var(--color-sidebar-background-dark-default)`
            : `var(--color-sidebar-background-light-default)`
    };
    color: ${({ theme }) =>
        theme === 'dark'
            ? `var(--color-text-dark-default)`
            : `var(--color-text-light-default)`
    };
    width: ${({ open }) => open ? '250px' : '50px'};
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: ${({ open }) => open ? 'flex-start' : 'center'};
    border-radius: 16px;
   
    border: ${({ theme }) =>
        theme === 'dark'
            ? '2px solid transparent'
            : '2px solid transparent'
    };
    box-shadow: inset 0 0 0 2px
     ${({ theme }) =>
        theme === 'dark'
            ? `var(--color-button-background-dark-active)`
            : `var(--color-button-background-light-active)`};

    transition: all 0.3s ease-in-out;
`;



const LogoContainer = styled.div`
    position: relative;
    overflow: ${({ open }) => (open ? 'hidden' : 'visible')};
    width: 88%;
    height: 60px;
    max-height: 60px;
    display: flex;
    align-items: center;
    padding: 1rem;
    justify-content: ${({ open }) => open ? 'flex-start' : 'center'};
    img {
    padding: 1rem 0;
    width: 25px;
    height: 25px;
    };

    span {
    font-size: 1.2rem;
    font-weight: bold;
    display: ${({ open }) => open ? 'block' : 'none'
    };
    color: ${({ theme }) =>
        theme === 'dark'
            ? `var(--color-text-logo-dark-default)`
            : `var(--color-text-logo-light-default)`
    };
    margin-left: 0.2rem;
    };
    
    button {
    position: absolute;
    width: 25px;
    height: 25px;
    cursor: pointer;
    border-radius: 50%;
    border: none;
    background-color: ${({ theme, open }) =>
        open
            ? (theme === 'dark'
                ? 'var(--color-button-background-dark-active)'
                : 'var(--color-button-background-light-active)')
            : (theme === 'dark'
                ? 'var(--color-button-background-dark-default)'
                : 'var(--color-button-background-light-default)')
    };
    
    right: ${({ open }) => open ? '-0.6rem' : '-2.5rem'};
    color: ${({ theme }) =>
        theme === 'dark'
            ? 'var(--color-text-dark-default)'
            : 'var(--color-text-light-default)'
    };
  
};
`
const LinksContainer = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    font-size: 1rem;
    margin: 2rem 0;
    padding: 0.5rem;
    gap: 0.5rem;
`
const LinkElement = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== 'active',
})`
    background-color: ${({ active, theme }) =>
        active
            ? theme === 'dark'
                ? `var(--color-sidebar-background-dark-active)`
                : `var(--color-sidebar-background-light-active)`
            : 'transparent'
    };
    color: ${({ active, theme }) =>
        active
            ? theme === 'dark'
                ? `var(--color-text-dark-active)`
                : `var(--color-text-light-active)`
            : theme === 'dark'
                ? `var(--color-text-dark-default)`
                : `var(--color-text-light-default)`
    };
    font-weight: bold;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: ${({ open }) => open ? 'flex-start' : 'center'};
    width: 100%;
    padding: ${({ open }) => open ? '0.4rem' : '0.4rem 0.01rem'};
    border-radius: 16px;
    span {
    align-self: center;
    margin-left: 0.5rem;
    display: ${({ open }) => open ? 'inline-block' : 'none'};
    }
    svg {
    padding: 0.4rem;
    width: 15px;
    height: 15px;
    }
    &:hover {
    background-color: ${({ theme }) =>
        theme === 'dark'
            ? `var(--color-sidebar-background-dark-hover)`
            : `var(--color-sidebar-background-light-hover)`
    };
    color: ${({ theme }) =>
        theme === 'dark'
            ? `var(--color-text-dark-hover)`
            : `var(--color-text-light-hover)`
    };
    }
    transition: all 0.3s ease-in-out;
`
const BottomsContainer = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    font-size: 1rem;
    margin: 4rem 0 1rem 0;
    padding: 0.5rem;
`

const Sidebar = (props) => {

    const [opened, setOpened] = useState(false);
    const [active, setActive] = useState('/sales');
    console.log(active);

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
