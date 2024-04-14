'use client';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import React from 'react';

export default function WrapperLayout({ children }: React.PropsWithChildren) {
  React.useEffect(() => {
    AOS.init();
  }, []);

  return <div>{children}</div>;
}
