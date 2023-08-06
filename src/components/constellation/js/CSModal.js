import { mdiCloseThick } from "@mdi/js";
import Icon from "@mdi/react";
import { Box, Button, Modal, Typography } from "@mui/material";
import React from "react";

export const CSModal = ({ open, setOpen, handleOpen }) => {
  const handleClose = () => {
    setOpen(!open);
  };
  return (
    <Modal
      open={open}
      onClose={handleOpen}
      aria-labelledby='modal-title'
      aria-describedby='modal-description'
      sx={{ border: "none" }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 700,
          height: 750,
          // bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          // overflow: "auto",
          borderRadius: "20px",
          backgroundImage: `url("assets/panel/Popup005_Blue_Opaque.png")`,
          backgroundSize: "105% 105%",
          backgroundPosition: "center",
        }}
      >
        {/* 모달 상세사항은 수정해야함 */}
        {/* <Typography variant="h6" id="modal-title" gutterBottom>
          {selectedProduct ? selectedProduct.name : ""}
        </Typography> */}

        {/* 우측 상단에 닫기 버튼 추가 */}
        <Button
          variant='contained'
          sx={{
            position: "absolute",
            top: 30,
            right: 40,
          }}
          onClick={handleClose}
        >
          <Icon path={mdiCloseThick} size={1} />
        </Button>

        <Box
          className='planet-img'
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            mt: 6,
            mb: 3,
          }}
        >
          <Box className='planet-img1'>
            <img src={"assets/img/지구본.jpg"} alt='이미지입니다' />
          </Box>
          <Box className='planet-img2'>
            <img src={"assets/img/지구본.jpg"} alt='이미지입니다' />
          </Box>
        </Box>

        <Typography variant='body1' id='modal-description' sx={{ mt: 5 }}>
          타이틀
        </Typography>
        <Typography variant='body1' id='modal-description' sx={{ mt: 5 }}>
          날짜, 시간
        </Typography>
        <Typography variant='body1' id='modal-description' sx={{ mt: 5 }}>
          기사 내용
        </Typography>
      </Box>
    </Modal>
  );
};
