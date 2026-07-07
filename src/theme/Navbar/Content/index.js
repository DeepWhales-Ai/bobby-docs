import React from 'react';
import Link from '@docusaurus/Link';
import {useLocation} from '@docusaurus/router';
import {useNavbarMobileSidebar} from '@docusaurus/theme-common/internal';
import NavbarLogo from '@theme/Navbar/Logo';
import NavbarMobileSidebarToggle from '@theme/Navbar/MobileSidebar/Toggle';
import SearchBar from '@theme/SearchBar';

const SECTIONS = [
  {label: 'For your group', to: '/groups/what-bobby-does', prefix: '/groups'},
  {label: 'For your project', to: '/projects', prefix: '/projects'},
  {label: 'Advertise with Bobby', to: '/advertise', prefix: '/advertise'},
  {
    label: 'More',
    children: [
      {label: 'Community', to: '/community/league', prefix: '/community'},
      {label: 'The Board', to: '/trending', prefix: '/trending'},
      {label: 'The intelligence', to: '/intelligence/what-bobby-sees', prefix: '/intelligence'},
      {label: 'Surfaces', to: '/surfaces/lobby', prefix: '/surfaces'},
      {label: 'Brand', to: '/brand/assets', prefix: '/brand'},
      {label: 'Useful links', to: '/links', prefix: '/links'},
      {label: 'Legal', to: '/legal', prefix: '/legal'},
      {label: 'Terms', to: '/terms', prefix: '/terms'},
    ],
  },
];

function TelegramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M21.7 4.3 2.6 11.6c-1.1.4-1.1 1.5 0 1.8l4.7 1.4 1.8 5.7c.2.7 1.1.9 1.6.4l2.6-2.4 5.1 3.7c.9.6 2 .1 2.2-1l3-14.5c.2-1.2-.9-2.2-2-1.4z"/>
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

export default function NavbarContent() {
  const {pathname} = useLocation();
  const mobileSidebar = useNavbarMobileSidebar();

  const isActive = (s) =>
    pathname === s.to || pathname === s.prefix || pathname.startsWith(s.prefix + '/');

  return (
    <div className="navbar__inner bobby-topnav">
      <div className="bobby-topnav-left">
        {!mobileSidebar.disabled && <NavbarMobileSidebarToggle />}
        <NavbarLogo />
        <div className="topnav-sections">
          {SECTIONS.map((s) =>
            s.children ? (
              <div
                key={s.label}
                className={'topnav-dropdown' + (s.children.some(isActive) ? ' active' : '')}>
                <button type="button" className="topnav-link topnav-more" aria-haspopup="true">
                  {s.label}
                </button>
                <div className="topnav-menu">
                  {s.children.map((c) => (
                    <Link
                      key={c.label}
                      to={c.to}
                      className={'topnav-menu-link' + (isActive(c) ? ' active' : '')}>
                      {c.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={s.label}
                to={s.to}
                className={'topnav-link' + (isActive(s) ? ' active' : '')}>
                {s.label}
              </Link>
            ),
          )}
        </div>
      </div>
      <div className="bobby-topnav-right">
        <div className="bobby-topnav-search">
          <SearchBar />
        </div>
        <a
          className="icon-btn"
          title="Telegram"
          href="https://t.me/BobbyBuyBot"
          target="_blank"
          rel="noreferrer">
          <TelegramIcon />
        </a>
        <a
          className="icon-btn"
          title="X"
          href="https://x.com/BobbyBuyBot"
          target="_blank"
          rel="noreferrer">
          <XIcon />
        </a>
        <a
          className="dm-cta"
          href="https://t.me/BobbyBuyBot"
          target="_blank"
          rel="noopener noreferrer">
          DM Bobby
        </a>
      </div>
    </div>
  );
}
