"use client"
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import * as React from "react";
import * as S from "./styles";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "#182237",
  border: "none",
  boxShadow: 24,
  p: 4,
  color: "text",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};
//@ts-ignore
export default function BasicModal({ placeholder, labels, title, numerics }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>{placeholder}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <S.Formulary action="">
              {labels.map((label: string, index: string) => (
                <S.AboveInputs key={index}>
                  {label}
                  <S.StyledInput type="text" placeholder={label} key={label} />
                </S.AboveInputs>
              ))}
              {numerics.map((numeric: string, index: string) => (
                <S.AboveInputs key={index}>
                  {numeric}
                  <S.StyledInput
                    type="number"
                    placeholder={numeric}
                    key={numeric}
                  />
                </S.AboveInputs>
              ))}
              <S.SelectStatus>
                <S.StyledOptions value="general">Choose Satus</S.StyledOptions>
                <S.StyledOptions value="active">Active</S.StyledOptions>
                <S.StyledOptions value="inactive">Inactive</S.StyledOptions>
              </S.SelectStatus>
            </S.Formulary>
          </Typography>
          <S.ButtonContainer>
            <S.StyledButton>Submit</S.StyledButton>
          </S.ButtonContainer>
        </Box>
      </Modal>
    </div>
  );
}
