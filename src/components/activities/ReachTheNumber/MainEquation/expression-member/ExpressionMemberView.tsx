import { Button, Menu, MenuItem, Typography } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState } from "react";
import { styles } from "../styles";
import type { ExpressionMemberViewProps } from "../../../../../core/activities/ReachTheNumber/props";
import { Latex } from "../../Latex.tsx/Latex";

export function ExpressionMemberView({ member, onExpressionMemberSelected }: ExpressionMemberViewProps) {
  const [menuAnchor, setMenuAnchor] = useState<HTMLElement | null>(null);

  const onMenuOpened = (e: React.MouseEvent<HTMLButtonElement>) => setMenuAnchor(e.currentTarget);
  const onMenuClosed = () => setMenuAnchor(null);

  const onMenuItemClicked = (i: number) => {
    if (onExpressionMemberSelected) {
      onExpressionMemberSelected(i);
    }
    onMenuClosed();
  };

  return (
    <>
      <Button
        variant="contained"
        color={member.color}
        onClick={onMenuOpened}
        sx={styles.expressionMemberBtn}
      >
        <Typography>
          <Latex mathExpr={member.choice.viewSymbol}></Latex>
        </Typography>
        {member.choices.length > 1 && <ArrowDropDownIcon sx={styles.expressionMemberBtnDropdownIcon} />}
      </Button>
      <Menu anchorEl={menuAnchor} open={!!menuAnchor} onClose={onMenuClosed}>
        {member.choices.map((choice, i) => (
          <MenuItem key={`${member.id}-${i}`} onClick={() => onMenuItemClicked(i)}>
            <Button variant="contained" color={member.color}>
              <Typography variant="h5">
                <Latex mathExpr={choice.historySymbol} /></Typography>
            </Button>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
