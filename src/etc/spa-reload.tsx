import React, { useState } from 'react';

const SpaReload = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async () => {
    setIsLoggedIn(true);

    // SPA 입장에서는 앱을 완전히 종료하고 다시 실행하는 행위.
    window.location.reload();
  };

  return <div>SpaReload</div>;
};

export default SpaReload;
