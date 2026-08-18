const Footer = () => {
    return (
        <footer id="footer">
            <div className="footer-inner">
                <a className="footer-email" href="mailto:design@runway.com">
                    design@runway.com
                </a>
                <div className="footer-bottom">
                    <div className="footer-socials" aria-label="소셜 미디어">
                        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                            <span>◎</span>
                            <span>Instagram</span>
                            <small>@runway</small>
                        </a>
                        <a href="https://www.pinterest.com" target="_blank" rel="noreferrer">
                            <span>ⓟ</span>
                            <span>Pinterest</span>
                            <small>@runway</small>
                        </a>
                    </div>
                    <nav className="footer-links" aria-label="푸터 메뉴">
                        <a href="#footer">Credits</a>
                        <a href="#header">Back to Top</a>
                    </nav>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
