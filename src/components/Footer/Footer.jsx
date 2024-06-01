import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer__main">
                <div className="footer__image"><img src="/tanishqkrk-pixel.png" alt="" className="footer__img--img" /></div>
                <div className="footer__data">
                    <div className="footer__data--links">
                        <div className="footer__data--links-social">
                            <a target={'_blank'} href="https://www.instagram.com/_abhiman7/" className="footer__data--link-link">Instagram</a>
                            <a target={'_blank'} href="" className="footer__data--link-link">Twitter</a>
                            <a target={'_blank'} href="https://www.linkedin.com/in/abhiman-chauhan-76169b226/" className="footer__data--link-link">Linkedin</a>
                            <a target={'_blank'} href="" className="footer__data--link-link">GitHub</a>
                            <a target={'_blank'} href="" className="footer__data--link-link">Dev.to</a>
                        </div>
                        <div className="footer__data--links-page">
                            <a href="" className="footer__data--link-link">Home</a>
                            <a href="" className="footer__data--link-link">Projects</a>
                            <a href="" className="footer__data--link-link">Technologies</a>
                            <a href="" className="footer__data--link-link">Blogs</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__end">ABHIMAN CHAUHAN | Made with
                <img className='footer__end--icon' src="./react.png" alt="" />
                <img className='footer__end--icon' src="./vite.png" alt="" />
                <img className='footer__end--icon' src="./js.png" alt="" />
            </div>
        </footer>
    )
}

export default Footer