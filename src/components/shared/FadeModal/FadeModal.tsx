import { Backdrop, Fade, Modal } from "@mui/material";
import type { FadeModalProps } from "../../../core/components/props";

export function FadeModal({ open, children, onClose }: FadeModalProps) {
  return <Modal
    open={open}
    onClose={onClose}
    closeAfterTransition
    slots={{ backdrop: Backdrop }}
    slotProps={{
      backdrop: { timeout: 300 },
    }}>
      <Fade in={open}>{children || <></>}</Fade>
    </Modal>
}