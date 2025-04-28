import { useState, useEffect, useCallback } from "react";

interface ScrollEdge {
    isAtStart: boolean;
    isAtEnd: boolean;
    scrollLeft: number;
    scrollWidth: number;
    clientWidth: number;
}

const useScrollEdge = (ref: React.RefObject<HTMLElement | null>) => {
    const [scrollState, setScrollState] = useState<ScrollEdge>({
        isAtStart: true,
        isAtEnd: false,
        scrollLeft: 0,
        scrollWidth: 0,
        clientWidth: 0,
    });

    const checkScroll = useCallback(() => {
        if (!ref.current) return;

        const { scrollLeft, scrollWidth, clientWidth } = ref.current;

        setScrollState({
            isAtStart: scrollLeft <= 1,
            isAtEnd: scrollLeft + clientWidth >= scrollWidth - 1,
            scrollLeft,
            scrollWidth,
            clientWidth,
        });
    }, [ref]);

    useEffect(() => {
        if (!ref.current) return;

        const node = ref.current;

        checkScroll();

        node.addEventListener("scroll", checkScroll, { passive: true });

        return () => {
            node.removeEventListener("scroll", checkScroll);
        };
    }, [ref, checkScroll]);

    return scrollState;
}

export default useScrollEdge