import { useCallback, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { fadeInUp } from "../../theme";

// A plain `useRef` + `useEffect(() => {...}, [])` only checks `ref.current`
// once, right after this hook's *own* first mount. If the element it's
// attached to doesn't mount until later (e.g. it's behind a loading gate),
// that first check finds `ref.current` still null and never looks again.
// A callback ref fires fresh every time the node actually attaches, so it
// works whether the element is present immediately or mounts later.
function useInView<T extends HTMLElement>(threshold = 0.15) {
  const [node, setNode] = useState<T | null>(null);
  const [visible, setVisible] = useState(false);
  const ref = useCallback((el: T | null) => setNode(el), []);

  useEffect(() => {
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [node, threshold]);

  return { ref, visible };
}

type RevealState = {
  $visible: boolean;
  $delay: number;
  $settled: boolean;
  onAnimationEnd: () => void;
};

// For annotating an existing styled element directly, when wrapping it in
// an extra div would risk breaking a flex/percentage-based layout (e.g. a
// grid of cards). Apply `revealStyle` in that element's styled-components
// template, then spread the returned props onto the element (its `ref`,
// `$visible`/`$delay`/`$settled`, and `onAnimationEnd`).
//
// `$settled` flips true once the entrance animation finishes and the
// animation is dropped from the element entirely — otherwise its
// `animation-fill-mode: forwards` would permanently pin `transform`,
// silently breaking any later `:hover` transform on the same element.
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  delay = 0
): RevealState & { ref: (el: T | null) => void } {
  const { ref, visible } = useInView<T>();
  const [settled, setSettled] = useState(false);

  return {
    ref,
    $visible: visible,
    $delay: delay,
    $settled: settled,
    onAnimationEnd: () => setSettled(true),
  };
}

export const revealStyle = css<{
  $visible?: boolean;
  $delay?: number;
  $settled?: boolean;
}>`
  ${({ $settled }) => !$settled && css`opacity: 0;`}
  ${({ $visible, $delay = 0, $settled }) =>
    $visible &&
    !$settled &&
    css`
      animation: ${fadeInUp} 0.7s cubic-bezier(0.4, 0, 0.2, 1) forwards;
      animation-delay: ${$delay}ms;
    `}
`;

const RevealWrapper = styled.div<{
  $visible: boolean;
  $delay: number;
  $settled: boolean;
}>`
  ${revealStyle}
`;

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

// Fades a standalone block into place the first time it scrolls into view.
// Safe for single-block sections; for items inside a percentage-width flex
// grid, use the `useReveal` hook on the item itself instead.
export default function Reveal({ children, delay = 0, className }: RevealProps) {
  const reveal = useReveal<HTMLDivElement>(delay);

  return (
    <RevealWrapper {...reveal} className={className}>
      {children}
    </RevealWrapper>
  );
}
