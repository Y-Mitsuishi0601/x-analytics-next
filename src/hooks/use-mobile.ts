import { useState, useEffect } from 'react';

/**
 * 画面幅が指定されたブレークポイントより小さいかどうかを判定するフック
 * @param breakpoint - モバイルと見なす画面幅の閾値 (デフォルト: 768px)
 * @returns {boolean} モバイルサイズの場合はtrue
 */
export const useIsMobile = (breakpoint: number = 768): boolean => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // サーバーサイドでは`window`が存在しないため何もしない
    if (typeof window === 'undefined') {
      return;
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    // 初期表示時に判定
    handleResize();

    // リサイズ時に再判定
    window.addEventListener('resize', handleResize);

    // クリーンアップ関数
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [breakpoint]);

  return isMobile;
};