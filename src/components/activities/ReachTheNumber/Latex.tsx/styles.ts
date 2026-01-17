import type { CSSProperties } from "react";

export const styles: Record<string, (x: any) => CSSProperties> = {
  mathJax: (visible) => ({
    display: visible ? 'inline' : 'none'
  }),
  placeholder: (visible) => ({
    display: visible ? 'none' : 'inline',
    visibility: 'hidden'
  })
}