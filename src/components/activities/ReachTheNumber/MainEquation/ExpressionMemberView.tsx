import { Button, Menu, MenuItem, Typography } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { styles } from "./styles";
import { Latex } from "../Latex.tsx/Latex";
import type { ExpressionMemberViewProps } from "../../../../core/activities/ReachTheNumber/props";
import { useMenuAnchor } from "../../../../hooks/useMenuAnchor";

export function ExpressionMemberView({ member, onExpressionMemberSelected }: ExpressionMemberViewProps) {
  const { anchorEl, openMenu, closeMenu, isOpen } = useMenuAnchor();

  const onMenuItemClicked = (i: number) => {
    if (onExpressionMemberSelected) {
      onExpressionMemberSelected(i);
    }
    closeMenu();
  };

  return (
    <>
      <Button
        variant="contained"
        color={member.color}
        onClick={openMenu}
        sx={styles.expressionMemberBtn}
      >
        <Typography>
          <Latex mathExpr={member.choice.viewSymbol}></Latex>
        </Typography>
        {member.choices.length > 1 && <ArrowDropDownIcon sx={styles.expressionMemberBtnDropdownIcon} />}
      </Button>
      <Menu anchorEl={anchorEl} open={isOpen} onClose={closeMenu}>
        {member.choices.map((choice, i) => (
          <MenuItem key={`${member.id}-${i}`} onClick={() => onMenuItemClicked(i)}>
            <Button variant="contained" color={member.color} sx={styles.expressionMemberChoiceBtn}>
              <Typography variant="h5">
                <Latex mathExpr={choice.viewSymbol} /></Typography>
            </Button>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
