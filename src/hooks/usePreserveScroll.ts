import { useLayoutEffect } from "react";

/**
 * Custom hook to preserve the scroll position during the Next navigation.
 *
 * @param scrollSelector query selector of the scroll component
 * @param storageKey storage key string to be used in the localStorage to preserve the scroll position
 */
export const usePreserveScroll = (scrollSelector: string, storageKey: string) => {
  useLayoutEffect(() => {
    const element = document.querySelector(scrollSelector) as HTMLDivElement;
    const scrollPosotion = window.localStorage.getItem(storageKey) || "0";
    element.scrollTop = +scrollPosotion;

    const handle = (e: Event) => {
      const element = e.target as HTMLElement;
      window.localStorage.setItem(storageKey, `${element.scrollTop}`);
    };

    element.addEventListener("scroll", handle);

    return () => element.removeEventListener("scroll", handle);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
