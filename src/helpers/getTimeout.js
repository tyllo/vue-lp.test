
const TIMEOUT_TIME = 2000;

export const getTimeout = (timeout = TIMEOUT_TIME) => (
  new Promise((resolve) => setTimeout(resolve, timeout * Math.random()))
);
