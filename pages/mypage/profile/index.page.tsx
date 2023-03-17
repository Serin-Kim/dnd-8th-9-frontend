/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import useUserStore from "@/store/user";
import { CloseInput } from "@/assets/icons";
import { DefaultProfileImage, EditIcon } from "@/assets/images";
import * as S from "./profile.styled";

function ProfileEditPage() {
  const { userName, email, profileImage, phoneNumber, editUser } = useUserStore();
  const [userNameInput, setUserNameInput] = useState(userName);
  const [emailInput, setEmailInput] = useState(email);
  const [phoneNumberInput, setPhoneNumberInput] = useState(phoneNumber);
  const [clickedCell, setClickedCell] = useState("");

  const handleUserNameInput = (e: { target: { value: React.SetStateAction<string | null> } }) => {
    setUserNameInput(e.target.value);
    editUser(
      e.target.value as string,
      profileImage as string,
      email as string,
      phoneNumber as string,
    );
  };

  const handleEmailInput = (e: {
    target: { value: React.SetStateAction<string | null | undefined> };
  }) => {
    setEmailInput(e.target.value);
    editUser(
      userName as string,
      profileImage as string,
      e.target.value as string,
      phoneNumber as string,
    );
  };

  const handlePhoneNumberInput = (e: {
    target: { value: React.SetStateAction<string | null | undefined> };
  }) => {
    setPhoneNumberInput(e.target.value);
    editUser(userName as string, profileImage as string, email as string, e.target.value as string);
  };

  return (
    <S.Container>
      <S.ProfileImage>
        {profileImage ? <img src={profileImage} /> : <DefaultProfileImage />}
        <S.EditIcon>
          <EditIcon />
        </S.EditIcon>
      </S.ProfileImage>
      <S.Cell>
        <S.Title>닉네임</S.Title>
        <S.Input
          className={clickedCell === "닉네임" ? "clicked" : "notClicked"}
          onClick={() => setClickedCell("닉네임")}
        >
          <input
            value={userNameInput === null ? `기존닉네임` : userNameInput}
            onChange={handleUserNameInput}
          />
          {clickedCell === "닉네임" && <CloseInput onClick={() => setUserNameInput("")} />}
        </S.Input>
      </S.Cell>
      <S.Cell>
        <S.Title>이메일</S.Title>
        <S.Input
          className={clickedCell === "이메일" ? "clicked" : "notClicked"}
          onClick={() => setClickedCell("이메일")}
        >
          <input
            value={emailInput === null ? `abcdef@gmail.com` : emailInput}
            onChange={handleEmailInput}
          />
          {clickedCell === "이메일" && <CloseInput onClick={() => setEmailInput("")} />}
        </S.Input>
      </S.Cell>
      <S.Cell>
        <S.Title>휴대폰 번호</S.Title>
        <S.Input
          className={clickedCell === "휴대폰 번호" ? "clicked" : "notClicked"}
          onClick={() => setClickedCell("휴대폰 번호")}
        >
          <input
            value={phoneNumberInput === null ? `01012345678` : phoneNumberInput}
            onChange={handlePhoneNumberInput}
          />
          {clickedCell === "휴대폰 번호" && <CloseInput onClick={() => setPhoneNumberInput("")} />}
        </S.Input>
      </S.Cell>
    </S.Container>
  );
}

export default ProfileEditPage;
