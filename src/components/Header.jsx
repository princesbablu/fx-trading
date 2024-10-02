import { Children, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import Logo from './Logo';
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import lang_img from '../assets/img/en.png'

export default function Header() {
  const navLinks = [
    {
      btn_title: 'Trading',
      to: '/',
      children: [
        {
          title: 'Hot Assets',
          url: '/assets',
        },
        {
          title: 'Payment Method',
          url: '/payment',
        },
      ]
    },
    {
      btn_title: 'Stocks',
      to: '/'
    },
    {
      btn_title: 'Platforms',
      to: '/'
    },
    {
      btn_title: 'Bonuses',
      to: '/'
    },
    {
      btn_title: 'Company',
      to: '/',
      children: [
        {
          title: 'About us',
          url: '/about',
        },
        {
          title: 'Account overview',
          url: '/overview',
        },
        {
          title: 'Legal',
          url: '/legal',
        },
      ]
    },
  ];
  const [isMenu, setIsMenu] = useState(false);
  const navigate = useNavigate();
  const handleTouchStart = (event) => {
    setIsMenu(!isMenu);
    navigate(event)
  };

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const isScroll = window.scrollY > 200;
      setScrolled(isScroll);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrolled, setScrolled]);

  const defaultImg = lang_img;
  const [defaultLang, setDefaultLang] = useState({
    img: defaultImg,
    name: 'English'
  });
  const [langShow, setLangShow] = useState(false);

  const handleLanguageChange = (e) => {
    // e.preventDefault();
    // let img = e.currentTarget.querySelector('img')?.src;
    // let text = e.currentTarget.querySelector('span')?.innerText;
    // setDefaultLang({
    //   img: img || defaultImg,
    //   name: text || 'English'
    // });
    setLangShow(!langShow);
  };

  const pathname = useLocation();
  useEffect(() => {
    console.log(pathname.pathname);
  }, [pathname])

  return (
    <>
      <div className="heading-clear"></div>
      <header className={`heading ${pathname.pathname == '/' || pathname.pathname=='/overview' ? 'shadow-none' : ''} ${scrolled ? 'position-fixed' : ''}`}>
        <Container>
          <div className='heading-wrap d-flex align-items-center'>
            <Logo />
            <div className="d-flex align-items-center w-100">
              <nav className={`heading-menu ${isMenu ? 'show-menu' : ''}`}>
                <div className="title d-flex align-items-center justify-content-between d-lg-none">
                  <Logo />
                  <button className="heading-toggler" onClick={() => setIsMenu(!isMenu)}>
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.3849 9.32205C16.481 9.23249 16.5585 9.12488 16.6129 9.00538C16.6674 8.88587 16.6978 8.75681 16.7024 8.62555C16.707 8.4943 16.6857 8.36342 16.6397 8.2404C16.5938 8.11737 16.524 8.00461 16.4344 7.90855C16.3449 7.81249 16.2373 7.73501 16.1178 7.68053C15.9982 7.62605 15.8692 7.59565 15.7379 7.59105C15.6067 7.58646 15.4758 7.60776 15.3528 7.65374C15.2297 7.69972 15.117 7.76949 15.0209 7.85905L12.0949 10.587L9.36692 7.66005C9.18439 7.47309 8.93593 7.36501 8.67472 7.35891C8.4135 7.35282 8.16028 7.44921 7.96923 7.62745C7.77818 7.8057 7.66448 8.05164 7.65246 8.31265C7.64044 8.57366 7.73106 8.829 7.90492 9.02405L10.6329 11.95L7.70592 14.6781C7.60647 14.7667 7.52573 14.8743 7.46846 14.9946C7.41118 15.1149 7.37852 15.2454 7.37239 15.3785C7.36626 15.5116 7.38679 15.6446 7.43277 15.7696C7.47875 15.8947 7.54925 16.0093 7.64014 16.1067C7.73103 16.2041 7.84047 16.2824 7.96203 16.3369C8.08359 16.3915 8.21482 16.4212 8.34802 16.4243C8.48121 16.4274 8.61369 16.4038 8.73766 16.355C8.86163 16.3062 8.97459 16.2331 9.06992 16.14L11.9959 13.413L14.7239 16.3391C14.812 16.4403 14.9196 16.5229 15.0402 16.5817C15.1609 16.6405 15.2922 16.6745 15.4262 16.6815C15.5603 16.6885 15.6943 16.6685 15.8205 16.6226C15.9466 16.5767 16.0622 16.5058 16.1604 16.4143C16.2586 16.3228 16.3374 16.2124 16.392 16.0898C16.4466 15.9672 16.476 15.8348 16.4784 15.7006C16.4807 15.5664 16.4561 15.4331 16.4058 15.3086C16.3556 15.1841 16.2808 15.071 16.1859 14.976L13.4589 12.05L16.3849 9.32205Z" fill="currentColor" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M1.04492 12C1.04492 5.925 5.96992 1 12.0449 1C18.1199 1 23.0449 5.925 23.0449 12C23.0449 18.075 18.1199 23 12.0449 23C5.96992 23 1.04492 18.075 1.04492 12ZM12.0449 21C10.863 21 9.6927 20.7672 8.60077 20.3149C7.50884 19.8626 6.51669 19.1997 5.68096 18.364C4.84523 17.5282 4.1823 16.5361 3.73001 15.4442C3.27771 14.3522 3.04492 13.1819 3.04492 12C3.04492 10.8181 3.27771 9.64778 3.73001 8.55585C4.1823 7.46392 4.84523 6.47177 5.68096 5.63604C6.51669 4.80031 7.50884 4.13738 8.60077 3.68508C9.6927 3.23279 10.863 3 12.0449 3C14.4319 3 16.7211 3.94821 18.4089 5.63604C20.0967 7.32387 21.0449 9.61305 21.0449 12C21.0449 14.3869 20.0967 16.6761 18.4089 18.364C16.7211 20.0518 14.4319 21 12.0449 21Z" fill="currentColor" />
                    </svg>
                  </button>
                </div>
                <ul className="d-lg-flex align-items-center">
                  {navLinks.map((link, index) => (
                    <li key={index} className='d-block'>
                      <Link className="heading-link text-capitalize d-flex align-items-center gap-1" to={link.to}>{link.btn_title} {link.children && <FaCaretDown />}</Link>
                      {link.children && (
                        <div className="heading-dropdown position-absolute top-100 start-0 w-100 bg-white">
                          <ul className='container'>
                            {link.children.map((item, index) => (
                              <li key={index} className='d-inline-block'>
                                <NavLink to={item.url}>{item.title}</NavLink>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="heading-actions d-flex align-items-center flex-wrap ms-auto">
                <Link to='/' className='btn'>Sign Up</Link>
                <Link to='/' className='btn text-capitalize fw-normal text-primary bg-transparent border-0'>Login</Link>
                <div className="lang d-none d-md-block position-relative z-1 ms-2 ms-md-3 ps-1">
                  <button onClick={() => setLangShow(!langShow)} className='lang-btn d-flex align-items-center gap-2'>
                    <div className="img"><img src={defaultLang.img} alt="" /></div>
                    <span>{defaultLang.name}</span>
                    {langShow ? <FaCaretUp /> : <FaCaretDown />}
                  </button>
                  <div className={`lang-wrap position-absolute top-100 start-0 z-3 overflow-auto d-flex flex-column ${langShow ? 'show' : null}`}></div>
                </div>
                <button className="heading-search-icon ms-2 ms-md-3 ms-md-4 bg-transparent p-0 border-0">
                  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_3926_4702)">
                      <g clipPath="url(#clip1_3926_4702)">
                        <path fillRule="evenodd" clipRule="evenodd" d="M14.9273 14.4023H15.7173L20.7073 19.4023L19.2173 20.8923L14.2173 15.9023V15.1123L13.9473 14.8323C12.8073 15.8123 11.3273 16.4023 9.71729 16.4023C6.12729 16.4023 3.21729 13.4923 3.21729 9.90234C3.21729 6.31234 6.12729 3.40234 9.71729 3.40234C13.3073 3.40234 16.2173 6.31234 16.2173 9.90234C16.2173 11.5123 15.6273 12.9923 14.6473 14.1323L14.9273 14.4023ZM5.21729 9.90234C5.21729 12.3923 7.22729 14.4023 9.71729 14.4023C12.2073 14.4023 14.2173 12.3923 14.2173 9.90234C14.2173 7.41234 12.2073 5.40234 9.71729 5.40234C7.22729 5.40234 5.21729 7.41234 5.21729 9.90234Z" fill="currentColor" />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_3926_4702">
                        <rect width="24" height="24" fill="white" transform="translate(0.217285 0.402344)" />
                      </clipPath>
                      <clipPath id="clip1_3926_4702">
                        <rect width="24" height="24" fill="white" transform="translate(0.217285 0.402344)" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
                <button className="heading-toggler d-lg-none" onClick={() => setIsMenu(!isMenu)}>
                  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.08984 6H21.0898" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3.08984 12H21.0898" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3.08984 18H21.0898" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </Container>
      </header>
    </>
  )
}
