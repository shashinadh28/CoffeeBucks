declare module 'locomotive-scroll' {
    interface LocomotiveScrollOptions {
      el: Element;
      smooth?: boolean;
      getDirection?: boolean;
      multiplier?: number;
      class?: string;
      tablet?: {
        smooth?: boolean;
      };
      smartphone?: {
        smooth?: boolean;
      };
      [key: string]; // To allow other options
    }
  
    export default class LocomotiveScroll {
      constructor(options: LocomotiveScrollOptions);
      on(event: string, callback: () => void): void;
      update(): void;
      scrollTo(target: string | HTMLElement | number, options?): void;
      destroy(): void;
    }
  }
  