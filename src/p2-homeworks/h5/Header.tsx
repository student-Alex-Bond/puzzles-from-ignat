import React from 'react'
import {NavLink} from 'react-router-dom'
import styles from './Header.module.css'
import arrow from './arrow.png'


function Header() {
    const [isView, setIsView] = React.useState<boolean>(false)

    return (
        <nav className={isView ? styles.menu : styles.menuCollapsed}>
            <div>
                <NavLink className={({isActive}) => isActive ?
                    styles.activeLink : styles.link}
                         onClick={() => {
                             setIsView(false)
                         }}
                         to='/'>Pre-Junior</NavLink>
            </div>

            <div>
                <NavLink className={({isActive}) => isActive ?
                    styles.activeLink : styles.link}
                         onClick={() => {
                             setIsView(false)
                         }}
                         to='/junior'>Junior</NavLink>
            </div>

            <div>
                <NavLink className={({isActive}) => isActive ?
                    styles.activeLink : styles.link}
                         onClick={() => {
                             setIsView(false)
                         }}
                         to='/juniorPlus'>Junior Plus</NavLink>
            </div>

            <div className={styles.arrow}>
                <img onClick={() => {
                    setIsView(!isView)
                }}
                     className={isView ? styles.pictureCollapsed : styles.picture}
                     src={arrow} alt={'arrow'}/>
            </div>
            {/*// add NavLinks*/}

        </nav>
    )
}

export default Header
