import React from "react";

type IconProps = { name: string; className?: string; style?: React.CSSProperties };

const paths: Record<string, React.ReactNode> = {
  spotify: (
    <path
      fill="currentColor"
      d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm4.59 14.43a.62.62 0 0 1-.86.21c-2.35-1.44-5.3-1.76-8.79-.96a.62.62 0 1 1-.28-1.22c3.81-.87 7.08-.5 9.72 1.11.3.18.39.57.21.86Zm1.22-2.72a.78.78 0 0 1-1.07.26c-2.69-1.65-6.79-2.13-9.97-1.17a.78.78 0 1 1-.45-1.49c3.63-1.1 8.15-.56 11.24 1.33.37.23.49.71.25 1.07Zm.11-2.84C14.8 8.16 9.4 7.99 6.33 8.92a.93.93 0 1 1-.54-1.78c3.52-1.07 9.48-.86 13.21 1.35a.93.93 0 1 1-.95 1.6Z"
    />
  ),
  apple: (
    <path
      fill="currentColor"
      d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 4.6a2.1 2.1 0 1 1 0 4.2 2.1 2.1 0 0 1 0-4.2Zm0 11.9c-2.1 0-3.9-1.1-3.9-3 0-1.4 1.7-2.2 3.9-2.2s3.9.8 3.9 2.2c0 1.9-1.8 3-3.9 3Z"
    />
  ),
  youtube: (
    <path
      fill="currentColor"
      d="M21.6 7.2a2.5 2.5 0 0 0-1.76-1.77C18.25 5 12 5 12 5s-6.25 0-7.84.43A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.76 1.77C5.75 19 12 19 12 19s6.25 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8ZM10 15V9l5.2 3-5.2 3Z"
    />
  ),
  deezer: (
    <path
      fill="currentColor"
      d="M17.5 6.5H22v2.3h-4.5V6.5Zm0 3.5H22v2.3h-4.5V10Zm0 3.5H22v2.3h-4.5v-2.3Zm-5.75 0h4.5v2.3h-4.5v-2.3Zm0-3.5h4.5v2.3h-4.5V10ZM6 13.5h4.5v2.3H6v-2.3Zm-5.75 0h4.5v2.3H.25v-2.3Z"
    />
  ),
  amazon: (
    <path
      fill="currentColor"
      d="M18.4 16.2c-2 1.5-4.9 2.3-7.4 2.3-3.5 0-6.6-1.3-9-3.4-.2-.2 0-.4.2-.3 2.6 1.5 5.7 2.4 9 2.4 2.2 0 4.6-.5 6.8-1.4.3-.1.6.2.4.4Zm.8-1c-.3-.3-1.7-.2-2.4-.1-.2 0-.2-.2 0-.3 1.2-.8 3-.6 3.2-.3.2.3-.1 2.2-1.2 3.1-.2.1-.3 0-.3-.1.3-.7.8-2 .5-2.3ZM16.7 8.9V8c0-.2.1-.3.2-.3h3.7c.2 0 .3.1.3.3v.8c0 .2-.1.4-.4.7l-1.9 2.7c.7 0 1.4.1 2 .5.2.1.2.2.2.4v.9c0 .2-.2.3-.3.2-1.1-.6-2.6-.6-3.8 0-.2.1-.3 0-.3-.2v-.8c0-.2 0-.5.2-.8l2.2-3.2h-1.9c-.2 0-.4-.1-.4-.3Zm-9.7 5.6H5.9c-.1 0-.2-.1-.2-.2V8.1c0-.1.1-.2.2-.2h1c.1 0 .2.1.2.2v.8h.1c.3-.7.8-1.1 1.6-1.1.8 0 1.3.4 1.6 1.1.3-.7.9-1.1 1.7-1.1.5 0 1.1.2 1.4.7.3.5.3 1.3.3 2v3.8c0 .1-.1.2-.2.2h-1.1c-.1 0-.2-.1-.2-.3v-3.2c0-.3 0-1-.1-1.2-.1-.4-.3-.5-.7-.5-.3 0-.6.2-.7.5-.1.3-.1.9-.1 1.2v3.2c0 .1-.1.2-.2.2h-1.1c-.1 0-.2-.1-.2-.3v-3.2c0-.7.1-1.7-.8-1.7s-.8 1-.8 1.7v3.2c0 .1-.1.3-.3.3Z"
    />
  ),
  instagram: (
    <path
      fill="currentColor"
      d="M12 2.2c3.2 0 3.6 0 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.05.41 2.22C21.8 8.4 21.8 8.8 21.8 12s0 3.6-.07 4.85c-.05 1.17-.25 1.8-.41 2.22-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.05.36-2.22.41-1.26.07-1.64.07-4.85.07s-3.6 0-4.85-.07c-1.17-.05-1.8-.25-2.22-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.05-.41-2.22C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.85c.05-1.17.25-1.8.41-2.22.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.05-.36 2.22-.41C8.4 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.15 0-3.5.01-4.74.07-.9.04-1.38.19-1.71.31-.43.17-.74.37-1.06.69-.32.32-.52.63-.69 1.06-.12.33-.27.81-.31 1.71C3.21 8.5 3.2 8.85 3.2 12s.01 3.5.07 4.74c.04.9.19 1.38.31 1.71.17.43.37.74.69 1.06.32.32.63.52 1.06.69.33.12.81.27 1.71.31 1.24.06 1.59.07 4.74.07s3.5-.01 4.74-.07c.9-.04 1.38-.19 1.71-.31.43-.17.74-.37 1.06-.69.32-.32.52-.63.69-1.06.12-.33.27-.81.31-1.71.06-1.24.07-1.59.07-4.74s-.01-3.5-.07-4.74c-.04-.9-.19-1.38-.31-1.71a2.85 2.85 0 0 0-.69-1.06 2.85 2.85 0 0 0-1.06-.69c-.33-.12-.81-.27-1.71-.31C15.5 4.01 15.15 4 12 4Zm0 3.06A4.94 4.94 0 1 1 12 16.94 4.94 4.94 0 0 1 12 7.06Zm0 1.8a3.14 3.14 0 1 0 0 6.28 3.14 3.14 0 0 0 0-6.28Zm5.14-.96a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0Z"
    />
  ),
  facebook: (
    <path
      fill="currentColor"
      d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z"
    />
  ),
  mail: (
    <path
      fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
      d="M3 6.5h18v11H3v-11Zm0 .5 9 6 9-6"
    />
  ),
  play: (<path fill="currentColor" d="M8 5v14l11-7L8 5Z" />),
  search: (
    <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm5 12 4 4" />
  ),
  arrowLeft: (
    <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M14 6l-6 6 6 6" />
  ),
  arrowRight: (
    <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M10 6l6 6-6 6" />
  ),
  heart: (
    <path fill="currentColor" d="M12 21s-7.5-4.6-10-9.1C.4 8.6 2.1 5 5.5 5 7.6 5 9 6.3 12 9c3-2.7 4.4-4 6.5-4C21.9 5 23.6 8.6 22 11.9 19.5 16.4 12 21 12 21Z" />
  ),
  clock: (
    <path fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm0 3.5V12l3 2" />
  ),
  calendar: (
    <path fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M4 6.5h16v14H4v-14Zm4-2.5v4m8-4v4M4 11h16" />
  ),
  external: (
    <path fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M14 5h5v5m0-5-8 8M9 5H5v14h14v-4" />
  ),
  menu: (
    <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
  ),
  x: (
    <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M6 6l12 12M18 6 6 18" />
  ),
};

export default function Icon({ name, className, style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      {paths[name] ?? null}
    </svg>
  );
}
